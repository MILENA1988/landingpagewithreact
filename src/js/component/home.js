import React from "react";

//include images into your bundle
import { Nav } from "./nav.js";
import { Botton } from "./botton.js";
import { Car } from "./car.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div className="container">
			<Nav />
			<Botton Pig="https://www.amazon.com/" />
			<div className="d-flex flex-row bd-highlight mb-3">
				<Car imageUrl="https://picsum.photos/200/300" />
				<Car imageUrl="https://picsum.photos/200/300" />
				<Car imageUrl="https://picsum.photos/200/300" />
				<Car imageUrl="https://picsum.photos/200/300" />
			</div>
			<Footer />
		</div>
	);
}
