import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Forms/AuthContext";
import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <h1>{currentUser.displayName}</h1>
      <span onClick={handlelogout}>
        <MenuLink text={"LogOut"} />
      </span>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Sidebar;
