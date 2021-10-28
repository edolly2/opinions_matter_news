import React, { useState } from "react";

import Button from "./Button";
import { CgMenuGridR } from "react-icons/cg";
import Logo from "../_assets/images/oplogo.png";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [profileMenuActive, setProfileMenuActive] = useState(false);

  return (
    <header class="top-header">
      <img src={Logo} alt="Opinions Matter Logo" />

      <CgMenuGridR
        title="Menu"
        className="icons profile-menu-icon"
        onClick={() => {
          setProfileMenuActive(true);
        }}
      />
      <ProfileMenu
        onProfileMenuCloseClick={() => {
          setProfileMenuActive(false);
        }}
        profileMenuStyle={{ display: profileMenuActive ? "flex" : "none" }}
      />
    </header>
  );
};

export default Header;
