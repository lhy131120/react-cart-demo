import { useState, useEffect } from "react";
import axios from "axios";
// import useTimer from "./hocks/useTimer";
// https://www.thenation.com/wp-content/uploads/2020/07/trump-virus-briefing-gt-img.jpg

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const App = () => {
	const [productArr, setProductArr] = useState([]);
	const getProducts = async () => {
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/products/all`);
			setProductArr([...res.data.products]);
			console.log(res.data.products);
		} catch (error) {
			console.log(`Error Message: ${error}`);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			{/* {JSON.stringify(productArr)} */}
			<div className="wrap">
				<div className="container text-center">
					{productArr.length > 0 ? (
						<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3">
							{productArr.map((item) => {
								return (
									<div key={item.id} className="col">
										<div className="card h-100" data-cat={item.category}>
											<img src={item.imageUrl} className="card-img-top" alt={item.title} />
											<div className="card-body">
												<h5 className="card-title">{item.title}</h5>
												<p className="card-text small">{item.description}</p>
												<div className="btn-group" role="group" aria-label="Basic outlined example">
													<button type="button" className="btn btn-sm btn-outline-primary" data-id={item.id}>
														查看更多
													</button>
													<button type="button" className="btn btn-sm btn-outline-danger" data-id={item.id}>
														加入購物車
													</button>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<h2 className="text-center my-3">沒有產品</h2>
					)}
				</div>
			</div>

			{/* <h1>Timer: {time}</h1> */}
			{/* <HockForm /> */}
		</>
	);
  
};


export default App;
