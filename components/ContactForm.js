const ContactForm = () => {
	return (
		<form
			action="https://formspree.io/f/xrgveagz"
			method="post"
			className="flex flex-col items-center justify-center h-[50vhx]"
		>
			<div className="flex gap-10 justify-center flex-wrap">
				<div>
					<label htmlFor="name">Name</label>
					<br />
					<input
						name="Name"
						id="name"
						type="email"
						className="disabled:border-2 border-2 border-pri enabled:border-pri w-64 h-10 rounded"
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label> <br />
					<input
						name="email"
						id="email"
						type="text"
						className="disabled:border-2 border-2 border-pri enabled:border-pri w-64 h-10 rounded"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="message">Message</label> <br />
				<input
					name="messagw"
					id="message"
					type="text"
					className="disabled:border-2 border-2 border-pri enabled:border-pri w-96 h-32 rounded"
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
export default ContactForm;
