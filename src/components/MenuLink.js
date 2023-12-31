import React, { useContext } from "react";
import { AuthContext } from "../Forms/AuthContext";

const MenuLink = ({ text }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h2>{text}</h2>
      <span>
        {""}
        {text === "Logout" && `( ${currentUser.displayName} )`}
      </span>
    </div>
  );
};

export default MenuLink;
