import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/">Главная страница</Link>
        <Link to="/me">Мои дела</Link>
        <Link to="/mom">Мамины дела</Link>
        <Link to="/dad">Папины дела</Link>
      </div>
    </header>
  );
};

export default Header;
