import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1 className="logo-text">LOGO</h1>
                <button className="hamburger-icon">
                <label htmlFor="dropdown">
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-x"></i>
                </label>
                <input type="checkbox" id="dropdown" />
                </button>
            </div>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/coins">Cryptocurrencies</Link></li>
            </ul>
        </header>
    );
};

export default Header;