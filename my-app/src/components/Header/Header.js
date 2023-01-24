import NxtWaveLogo from "../../assets/NxtWave TM_Coloured_logo_1.png";
import LoginImage from "../../assets/image.png";
import classes from "./Header.module.css";
import AddButton from "../AddButton/AddButton";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["main-company-logo"]}>
        <img src={NxtWaveLogo} alt=" Company Logo " />
      </div>
      <AddButton />
      <div className={classes["main-login-logo"]}>
        <img src={LoginImage} alt=" Login page icon " />
      </div>
    </header>
  );
};
export default Header;
