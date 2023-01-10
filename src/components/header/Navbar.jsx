import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function MainNav() {
	return (
		<nav className="navbar navbar-expand-sm bg-primary">
			<div className="container-fluid">
				<Link className="navbar-brand text-light" to="/">
					JobPortal
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item ">
							<Link
								className="nav-link active text-light"
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								className="nav-link text-light"
								aria-current="page"
								to="/"
							>
								Jobs
							</Link>
						</li>

						
					</ul>
                        <span className="nav-item btn">
                            <Link to="/login" className="nav-link me-3 text-light">Signin</Link>
                        </span>
                        
						<span className="nav-item btn btn-outline-light">
                            <Link to="/register" className="nav-link px-2 ">Signup</Link>
                        </span>
				</div>
			</div>
		</nav>
	);
}

export default MainNav;
