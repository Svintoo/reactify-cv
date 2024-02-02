import { Link } from "react-router-dom";
import ThemeBtn from "./themeButton";
export default function NavBar({ theme, themeButton }) {
  return (
    <div className="z-10 w-full h-12 bg-black border-white border-solid border rounded-b-md flex justify-evenly items-center -mt-1">
      <Link className="justify-center w-20" to="/">
        HEM
      </Link>
      <Link className="justify-center w-20" to="/om-mig">
        OM-MIG
      </Link>
      <Link className="justify-center w-20" to="/projekt">
        PROJEKT
      </Link>
      <Link className="justify-center w-20" to="/kontakt">
        KONTAKT
      </Link>
      <ThemeBtn theme={theme} themeButton={themeButton}></ThemeBtn>
    </div>
  );
}
