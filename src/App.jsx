import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import { useForm } from "react-hook-form";

// import useTimer from "./hocks/useTimer";
// https://www.thenation.com/wp-content/uploads/2020/07/trump-virus-briefing-gt-img.jpg

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const App = () => {
	// ==========================================
	// Modal
	const displayModal = useRef(null);
	const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false);
	useEffect(() => {
		new Modal(displayModal.current, {
			backdrop: false,
		});
	}, []);

	// Open Modal

	const [tempProduct, setTempProduct] = useState({});

	const handleOpenProductModal = (product) => {
		setTempProduct({
			...product,
		});
		// const modalInstance = Modal.getInstance(displayModal.current);
		// modalInstance.show();
		setIsDisplayModalOpen(true);
	};

	const handleCloseProductModal = () => {
		const modalInstance = Modal.getInstance(displayModal.current);
		modalInstance.hide();
		setQtySelect(1);
		setIsDisplayModalOpen(false);
	};

	useEffect(() => {
		if (isDisplayModalOpen) {
			const modalInstance = Modal.getInstance(displayModal.current);
			modalInstance.show();
			setIsDisplayModalOpen(true);
		}
	}, [isDisplayModalOpen]);

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
	// ==========================================

	// ==========================================
	// Add Cart
	const [qtySelect, setQtySelect] = useState(1);
	const addCartItem = async (product_id, qty = 1) => {
		try {
			const res = await axios.post(`${API_BASE}/api/${API_PATH}/cart`, {
				data: {
					product_id,
					qty: Number(qty),
				},
			});
			console.log(res.data);
			alert(`${res.data.data.product.title}: ${res.data.message}`);
			// 還原qty值
			setQtySelect(1);
			handleCloseProductModal();
			getCarts();
		} catch (error) {
			alert(`加入失敗: ${error.response.data.message}`);
		}
	};

	// ==========================================
	// remove Carts
	const removeCart = async () => {
		try {
			const res = await axios.delete(`${API_BASE}/api/${API_PATH}/carts`);
			alert(`${res.data.message}購物車內容`);
			getCarts();
		} catch (error) {
			alert(`清空購物車失敗: ${error.response.data.message}`);
		}
	};

	const removeCartItem = async (cartItemId) => {
		try {
			const res = await axios.delete(`${API_BASE}/api/${API_PATH}/cart/${cartItemId}`);
			alert(`${cartItemId} - ${res.data.message}`);
			getCarts();
		} catch (error) {
			alert(`刪除失敗: ${error.response.data.message}`);
		}
	};

	// ==========================================
	// Edit Carts
	const editCartItem = async (cartId, product_id, qty) => {
		try {
			const res = await axios.put(`${API_BASE}/api/${API_PATH}/cart/${cartId}`, {
				data: {
					product_id,
					qty: Number(qty),
				},
			});
			console.log(res.data);
			getCarts();
		} catch (error) {
			alert(`更新失敗: ${error.response.data.message}`);
		}
	};
	// ==========================================
	// Show Cart

	const [cart, setCarts] = useState({});
	const getCarts = async () => {
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/cart`);
			console.log(res);
			setCarts(res.data.data);
		} catch (error) {
			alert(`購物車取得失敗: ${error.response.data.message}`);
		}
	};

	// ========================
	// init
	useEffect(() => {
		getProducts();
		getCarts();
	}, []);

	// ==========================================

	// Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<>
			<div className="wrap ">
				<div className="my-5">
					<div className="container text-center">
						{productArr.length > 0 ? (
							<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 g-lg-4">
								{productArr.map((item) => {
									return (
										<div key={item.id} className="col">
											<div className="card h-100" data-cat={item.category}>
												<img src={item.imageUrl} className="card-img-top" alt={item.title} />
												<div className="card-body">
													<p className="card-title fw-bold">{item.title}</p>
													<p className="card-text small">
														${item.price}&nbsp;
														<sup>
															<span className="text-decoration-line-through">${item.origin_price}</span>
														</sup>
													</p>
													<div className="btn-group btn-group-sm">
														<button
															onClick={() => handleOpenProductModal(item)}
															type="button"
															className="btn btn-outline-secondary"
														>
															<i className="fas fa-spinner fa-pulse"></i>
															查看更多
														</button>
														<button
															type="button"
															className="btn btn-outline-danger"
															onClick={() => addCartItem(item.id)}
														>
															<i className="fas fa-spinner fa-pulse"></i>
															加到購物車
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
				{cart.carts?.length > 0 && (
					<div className="my-3">
						<div className="container">
							<h2 className="text-center text-uppercase text-success">cart list</h2>
							<div className="row">
								<div className="col-lg-8 mx-auto">
									<div>
										<div className="my-3 text-end">
											<button className="btn btn-outline-danger" onClick={() => removeCart()}>
												清空購物車
											</button>
										</div>
										<table className="table align-middle">
											<thead>
												<tr>
													<th></th>
													<th>品名</th>
													<th style={{ width: "150px" }}>數量/單位</th>
													<th>單價</th>
												</tr>
											</thead>
											<tbody>
												{cart.carts?.map((item) => (
													<tr key={item.id}>
														<td>
															<button
																type="button"
																className="btn btn-outline-danger"
																onClick={() => removeCartItem(item.id)}
															>
																x
															</button>
														</td>
														<td>{item.product.title}</td>
														<td>
															<div className="btn-group me-2">
																<button
																	type="button"
																	className="btn btn-outline-dark btn-sm"
																	onClick={() => editCartItem(item.id, item.product_id, item.qty - 1)}
																	disabled={item.qty <= 1}
																>
																	-
																</button>
																<span className="btn border border-dark" style={{ width: "50px", cursor: "auto" }}>
																	{item.qty}
																</span>
																<button
																	type="button"
																	className="btn btn-outline-dark btn-sm"
																	onClick={() => editCartItem(item.id, item.product_id, item.qty + 1)}
																	disabled={item.qty >= 99}
																>
																	+
																</button>
																<span className="input-group-text bg-transparent border-0">{item.product.unit}</span>
															</div>
														</td>
														<td className="text-end">{Math.round(item.total * 100) / 100}</td>
													</tr>
												))}
											</tbody>
											<tfoot>
												<tr>
													<td colSpan="3" className="text-end">
														總計
													</td>
													<td className="text-end" style={{ width: "130px" }}>
														{Number(cart.total).toFixed(2)}
													</td>
												</tr>
												<tr>
													<td colSpan="3" className="text-end text-success">
														折扣價
													</td>
													<td className="text-end text-success"></td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			{/* Modal */}
			<div
				ref={displayModal}
				className="modal fade"
				id="displayModal"
				tabIndex="-1"
				aria-labelledby=""
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="">
								Modal title
							</h1>
							<button type="button" className="btn-close" onClick={() => handleCloseProductModal()}></button>
						</div>
						{tempProduct ? (
							<div className="modal-body">
								<p>{tempProduct.id}</p>
								<p>{tempProduct.category}</p>
								<p>{tempProduct.title}</p>
								<hr />
								<img
									src={tempProduct.imageUrl}
									alt={tempProduct.title}
									style={{
										width: "100%",
										objectFit: "cover",
										maxWidth: "12.75em",
									}}
								/>
								<hr />
								<div className="input-group align-items-center">
									<label htmlFor="qtySelect">數量:</label>
									<select
										name=""
										id="qtySelect"
										value={qtySelect}
										onChange={(e) => setQtySelect(e.target.value)}
										className="form-select"
									>
										{Array.from({ length: 10 }).map((_, index) => (
											<option key={index} value={index + 1}>
												{index + 1}
											</option>
										))}
									</select>
								</div>
							</div>
						) : (
							""
						)}
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={() => handleCloseProductModal()}>
								取消
							</button>
							<button className="btn btn-warning" onClick={() => addCartItem(tempProduct.id, qtySelect)}>
								<span role="status">加入購物車</span>
								<span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
