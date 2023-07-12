import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand h1 m-2">go back home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-primary m-2">Add a contact</button>
				</Link>
			</div>
		</nav>
	);
};
