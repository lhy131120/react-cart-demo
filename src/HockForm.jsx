import { useForm } from "react-hook-form";

function HockForm() {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			email: "xxxxx@mail.com",
			password: "213123123",
			city: "",
			approve: true,
		},
	});

	const cities = ["TP", "JP", "TX"];

	const onSubmit = (data) => {
		console.log(data);
		// AJAX
	};
	return (
		<>
			<div className="container">
				<h3>Hock Form</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row mb-3">
						<label htmlFor="email" className="col-sm-2 col-form-label">
							Email
						</label>
						<div className="col-sm-10">
							<input type="email" className="form-control" id="email" {...register("email", { required: true })} />
						</div>
					</div>
					<div className="row mb-3">
						<label htmlFor="password" className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								type="password"
								className="form-control"
								id="password"
								{...register("password", { required: true })}
							/>
						</div>
					</div>
					<div className="row mb-3">
						<label htmlFor="city" className="col-sm-2 col-form-label">
							City
						</label>
						<div className="col-sm-10">
							<select {...register("city")} name="city" className="form-select" id="city">
								<option value="" disabled>
									Choose...
								</option>
								{cities.map((city) => {
									return (
										<option value={city} key={city}>
											{city}
										</option>
									);
								})}
							</select>
						</div>
					</div>
					<div className="row mb-3">
						<div className="form-check">
							<label htmlFor="approve" className="form-check-label">
								Approve:
							</label>
							<input type="checkbox" className="form-check-input" id="approve" {...register("approve")} />
						</div>
					</div>
					<div className="mb-3">
						<div className="form-check form-check-inline">
							<input
								type="checkbox"
								className="form-check-input"
								{...register("customBox")}
								value="c1"
								id="inlineCheckbox1"
							/>
							<label className="form-check-label" htmlFor="inlineCheckbox1">
								c1
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								type="checkbox"
								className="form-check-input"
								{...register("customBox")}
								value="c2"
								id="inlineCheckbox2"
							/>
							<label className="form-check-label" htmlFor="inlineCheckbox2">
								c2
							</label>
						</div>
					</div>
					<button className="btn btn-warning" type="submit">
						Send
					</button>
				</form>
			</div>
		</>
	);
}

export default HockForm;
