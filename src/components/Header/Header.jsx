import "./style.scss";

const Header = ({ title }) => {
  return (
    <div className="header__wrapper">
      <span className="header__title">{title}</span>
    </div>
  );
};

export default Header;
