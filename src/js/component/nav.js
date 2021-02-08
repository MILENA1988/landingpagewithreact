import React from "react";

export function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a
					className="navbar-brand text-light bg-dark text-light"
					href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a
							className="nav-link text-light bg-dark text-light"
							aria-current="page"
							href="#">
							Home
						</a>
						<a
							className="nav-link text-light bg-dark text-light"
							href="#">
							About
						</a>
						<a
							className="nav-link text-light bg-dark text-light"
							href="#">
							Services
						</a>
						<a
							className="nav-link disabled text-light bg-dark text-light"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
