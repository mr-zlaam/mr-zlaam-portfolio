import { useContext } from "react";
import "./MenuBar.scss";
import { Context } from "../../01_Context/Context";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClear } from "react-icons/md";

const MenuBar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const menu_toggler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      {isMenuOpen ? (
        <div onClick={menu_toggler} className="menu">
          <MdClear size={25} />
        </div>
      ) : (
        <div onClick={menu_toggler} className="clear">
          <RiMenu3Fill size={25} />
        </div>
      )}
    </>
  );
};

export default MenuBar;
