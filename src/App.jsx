import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import { useForm } from "react-hook-form";
import { OrbitProgress } from "react-loading-indicators";

// CSS
import "@splidejs/react-splide/css";

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
			keyboard: false,
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
		setIsScreenLoading(true);
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/products/all`);
			setProductArr([...res.data.products]);
			// console.log(res.data.products);
		} catch (error) {
			console.log(`Error Message: ${error}`);
		} finally {
			setIsScreenLoading(false);
		}
	};
	// ==========================================

	// ==========================================
	// Add Cart
	const [qtySelect, setQtySelect] = useState(1);
	const addCartItem = async (product_id, isModal, qty = 1) => {
		isModal
			? setIsModalLoading(true)
			: setLoadingStates((prev) => ({
					...prev,
					[product_id]: true,
			  }));

		try {
			await axios.post(`${API_BASE}/api/${API_PATH}/cart`, {
				data: {
					product_id,
					qty: Number(qty),
				},
			});

			if (isModal) {
				handleCloseProductModal();
			}

			getCarts();
		} catch (error) {
			alert(`加入失敗: ${error.response.data.message}`);
		} finally {
			isModal
				? setIsModalLoading(false)
				: setLoadingStates((prev) => ({
						...prev,
						[product_id]: false,
				  }));
		}
	};

	// ==========================================
	// remove Carts
	const removeCart = async () => {
		setIsScreenLoading(true);
		try {
			await axios.delete(`${API_BASE}/api/${API_PATH}/carts`);
			// alert(`${res.data.message}購物車內容`);
			getCarts();
		} catch (error) {
			alert(`清空購物車失敗: ${error.response.data.message}`);
		} finally {
			setIsScreenLoading(false);
		}
	};

	const removeCartItem = async (cartItemId) => {
		setIsScreenLoading(true);
		try {
			await axios.delete(`${API_BASE}/api/${API_PATH}/cart/${cartItemId}`);
			// alert(`${cartItemId} - ${res.data.message}`);
			getCarts();
		} catch (error) {
			// console.log(`刪除失敗: ${error.response.data.message}`);
			alert(`刪除失敗: ${error.response.data.message}`);
		} finally {
			setIsScreenLoading(false);
		}
	};

	// ==========================================
	// Edit Carts
	const editCartItem = async (cartId, product_id, qty) => {
		setIsScreenLoading(true);
		try {
			await axios.put(`${API_BASE}/api/${API_PATH}/cart/${cartId}`, {
				data: {
					product_id,
					qty: Number(qty),
				},
			});
			// console.log(res.data.data);
			// alert(`產品更新成功`);
			getCarts();
		} catch (error) {
			alert(`更新失敗: ${error.response.data.message}`);
		} finally {
			setIsScreenLoading(false);
		}
	};
	// ==========================================
	// Show Cart

	const [cart, setCarts] = useState({});
	const getCarts = async () => {
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/cart`);
			// console.log(res.data.data);
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
		reset,
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		const { message, ...user } = data;
		const userInfo = {
			data: {
				user: {
					...user,
					tel: `${user.telCode}-${user.telNum}`,
				},
				message,
			},
		};
		// Check格式是否match API format
		// console.log(`userInfo: `, userInfo);
		try {
			await checkout(userInfo);
			await getCarts();
			reset();
			alert("訂單已送出");
		} catch (error) {
			console.log(`CheckOut Failed: `, error.response.data.message);
		}
	});

	const checkout = async (data) => {
		const res = await axios.post(`${API_BASE}/api/${API_PATH}/order`, data);
		return res.data;
	};

	// loading - Full Screen
	const [isScreenLoading, setIsScreenLoading] = useState(false);
	const [isModalLoading, setIsModalLoading] = useState(false);
	const [loadingStates, setLoadingStates] = useState({});

	return (
		<>
			<div className="container">
				<div className="my-5">
					<div className="container text-center">
						{productArr.length > 0 ? (
							<div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-3 g-lg-4">
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
															disabled={loadingStates[item.id]}
															onClick={() => handleOpenProductModal(item)}
															type="button"
															className="btn btn-outline-secondary"
														>
															查看更多
														</button>
														<button
															disabled={loadingStates[item.id]}
															type="button"
															className="btn btn-outline-danger d-flex"
															onClick={() => addCartItem(item.id, false)}
														>
															加到購物車
															{loadingStates[item.id] && (
																<span className="d-inline-flex ms-1 align-items-center">
																	<OrbitProgress
																		variant="spokes"
																		color="#1a1819"
																		style={{
																			fontSize: "3px",
																		}}
																	/>
																</span>
															)}
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
				<hr />
				{cart.carts?.length > 0 && (
					<div className="my-3">
						<div className="container">
							<h2 className="text-center text-uppercase text-secondary my-2">cart list</h2>
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
															<div className="input-group d-flex flex-nowrap">
																<button
																	onClick={() => editCartItem(item.id, item.product_id, item.qty - 1)}
																	disabled={item.qty <= 1}
																	className="btn btn-outline-secondary btn-sm"
																	type="button"
																	id="button-addon1"
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		className="bi bi-dash"
																		viewBox="0 0 16 16"
																	>
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
																	</svg>
																</button>
																<input
																	disabled
																	type="text"
																	className="form-control text-center"
																	aria-label=""
																	aria-describedby="button-addon1"
																	value={item.qty}
																	style={{ width: "1rem", padding: "0" }}
																/>
																<button
																	onClick={() => editCartItem(item.id, item.product_id, item.qty + 1)}
																	disabled={item.qty >= 99}
																	className="btn btn-outline-secondary btn-sm"
																	type="button"
																	id="button-addon1"
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="16"
																		height="16"
																		fill="currentColor"
																		className="bi bi-plus"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
																	</svg>
																</button>
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
				<hr />
				<div className="my-5 row justify-content-center">
					<form onSubmit={onSubmit} className="col-md-6">
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								{...register("email", {
									required: "欄位必填",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Email 格式錯誤",
									},
								})}
								id="email"
								name="email"
								type="email"
								className={`form-control ${errors.email && "is-invalid"}`}
								placeholder="請輸入 Email"
							/>
							{errors.email && <div className="text-danger my-2">{errors.email.message}</div>}
						</div>

						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								收件人姓名
							</label>
							<input
								{...register("name", {
									required: "欄位必填",
								})}
								id="name"
								name="name"
								type="text"
								className={`form-control ${errors.name && "is-invalid"}`}
								placeholder="請輸入姓名"
							/>
							{errors.name && <div className="text-danger my-2">{errors.name.message}</div>}
						</div>

						<div className="mb-3">
							<label htmlFor="telCode" className="form-label">
								收件人電話
							</label>
							<div className="row g-1">
								<div className="col-md-3 mb-2 mb-md-0">
									<input
										{...register("telCode", {
											required: "欄位必填",
											maxLength: {
												value: 3,
												message: "國際區號最多只有3位",
											},
											pattern: {
												value: /^\d{2,3}$/,
												message: "最少有2位",
											},
										})}
										id="telCode"
										name="telCode"
										type="text"
										className={`form-control ${errors?.telCode && "is-invalid"}`}
										placeholder="國際區號"
									/>
									{errors?.telCode && <div className="text-danger my-2">{errors.telCode?.message}</div>}
								</div>
								<div className="col d-none d-md-flex justify-content-center align-items-start">
									<span>-</span>
								</div>

								<div className="col-md-8">
									<input
										{...register("telNum", {
											required: "欄位必填",
											pattern: {
												value: /^\d{6,20}$/,
												message: "輸入最少6個數字的有效電話",
											},
										})}
										id="telNum"
										name="telNum"
										type="tel"
										className={`form-control ${errors.telNum && "is-invalid"}`}
										placeholder="請輸入電話"
									/>
									{errors.telNum && <div className="text-danger my-2">{errors?.telNum?.message}</div>}
								</div>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="address" className="form-label">
								收件人地址
							</label>
							<input
								{...register("address", {
									required: "欄位必填",
								})}
								id="address"
								name="address"
								type="text"
								className={`form-control ${errors.address && "is-invalid"}`}
								placeholder="請輸入地址"
							/>
							{errors.name && <div className="text-danger my-2">{errors.name.message}</div>}
						</div>

						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								留言
							</label>
							<textarea {...register("message")} id="message" className="form-control" cols="30" rows="10"></textarea>
						</div>
						<div className="text-end">
							<button type="submit" className="btn btn-danger" onClick={() => checkout}>
								送出訂單
							</button>
						</div>
					</form>
				</div>
				{/* Full Screen Loading */}
				{isScreenLoading && (
					<div
						className="d-flex justify-content-center align-items-center"
						style={{
							position: "fixed",
							inset: 0,
							backgroundColor: "rgba(255,255,255,0.3)",
							zIndex: 999,
						}}
					>
						<OrbitProgress
							variant="spokes"
							speedPlus="-3"
							easing="linear"
							color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]}
							size="large"
							text="Loading"
							textColor="#000000"
						/>
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
						{tempProduct && (
							<div className="modal-body">
								<p>目錄: {tempProduct.category}</p>
								<p>產品名稱: {tempProduct.title}</p>
								<p>描述: {tempProduct.description}</p>
								<p>
									售價: ${tempProduct.price}{" "}
									<span className="small">
										<del>${tempProduct.origin_price}</del>
									</span>
								</p>
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
									<label htmlFor="qtySelect">數量: </label>
									<select
										name=""
										id="qtySelect"
										value={qtySelect}
										onChange={(e) => setQtySelect(e.target.value)}
										className="form-select ms-2 rounded"
									>
										{Array.from({ length: 10 }).map((_, index) => (
											<option key={index} value={index + 1}>
												{index + 1}
											</option>
										))}
									</select>
								</div>
							</div>
						)}
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={() => handleCloseProductModal()}>
								取消
							</button>
							<button
								disabled={isModalLoading}
								className="btn btn-warning d-flex"
								onClick={() => addCartItem(tempProduct.id, true, qtySelect)}
							>
								<span role="status">加入購物車</span>
								{isModalLoading && (
									<span className="d-inline-flex ms-1 align-items-center">
										<OrbitProgress
											variant="spokes"
											color="#1a1819"
											style={{
												fontSize: "3px",
											}}
										/>
									</span>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
