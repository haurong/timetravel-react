import React from 'react';
import '../global.scss';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Logo from '../icon/logo/logo.svg';
import SearchIcon from '../icon/search.svg';
import CartIcon from '../icon/cart.svg';

function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src={Logo} alt="logo" width="160" height="33" />
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
							<li className="nav-item">
								<Link className="nav-link" to="/itinerary">
									行程
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/food">
									美食
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/stays">
									住宿
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/ticket">
									票卷
								</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<div className="input-group">
								<span className="icon" id="basic-addon1">
									<img src={SearchIcon} alt="" />
								</span>
								<input
									className="form-control me-4"
									type="search"
									placeholder="搜尋"
									aria-label="Search"
								/>
							</div>
						</form>
						<button type="button" className="btn">
							<Link className="nav-link" to="/logIn">
								登入
							</Link>
						</button>
						<button type="button" className="btn">
							<Link className="nav-link" to="/signIn">
								註冊
							</Link>
						</button>
						<div className="cart icon">
							<Link className="nav-link" to="/cart">
								<img src={CartIcon} alt="" />
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
