import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="wrapper__left">
          <a href="#intro" className="logo">
            Profolio
          </a>
          <div className="itemContainer">
            <PersonIcon className="itemContainer__icon" />
            <span>+88 202053620</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="itemContainer__icon" />
            <span>mdsahadathossin778@gmail.com</span>
          </div>
        </div>
        <div className="wrapper__right hide-for-desktop">
          <div className="hamburgur" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
