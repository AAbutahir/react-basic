import logo from './logo.svg';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-img"  />
                </div>    
            </div>
        </div>
    )
}

export default Header
