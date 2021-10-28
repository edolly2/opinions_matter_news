import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import {
  FaHourglassHalf,
  FaRegBell,
  FaRegEnvelope,
  FaUserCircle,
} from "react-icons/fa";

import { BsGear } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";

const ProfileMenu = (props) => {
  return (
    <div className="profile-nav-container" style={props.profileMenuStyle}>
      <nav className="nav">
        <ul>
          <li>
            <AiOutlineHome title="Home" className="icons" />
            Home
          </li>
          <li>
            <AiOutlineSearch title="Search" className="icons" />
            Search
          </li>
          <li>
            <FaUserCircle title="Profile" className="icons" />
            Profile
          </li>
          <li>
            <FaRegBell title="Notifications" className="icons" />
            Notifications
          </li>
          <li>
            <FaRegEnvelope title="Messages" className="icons" />
            Messages
          </li>
          <li>
            <FaHourglassHalf title="Article History" className="icons" />
            History
          </li>
          <li>
            <BsGear title="settings" className="icons" />
            Settings
          </li>
          <div
            className="icons profile-menu-close"
            onClick={props.onProfileMenuCloseClick}
          >
            <GoTriangleUp />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
