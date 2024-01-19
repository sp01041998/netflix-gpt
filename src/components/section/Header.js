import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "../atom/ProfileModal";
import { useLocation } from "react-router-dom";
import { PROFILE_BAR, pathForProfile } from "../../util/const";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../util/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../util/appStore/userSlice";
import { NETFLIX_LOGO_HEADER } from "../../util/const";

const Header = ({ btnText, style, customHeaderStyle, imageSize }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    if (isHovered) return;
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isHovered) return;
    setIsHovered(false);
  };
  return (
    //absolute
    <div className={`px-32 py-2 flex items-center justify-between w-full absolute ${customHeaderStyle}`}
    >
      <img
        className={`w-44 ${imageSize}`}
        src={NETFLIX_LOGO_HEADER}
        alt="Netflix"
      />
      <button className={style}>
        <Link to="/login">{btnText}</Link>
      </button>
      {!pathForProfile.includes(pathname) && (
        <div
          className="flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={PROFILE_BAR} alt="Profile" className="w-12" />
          {<p className="ml-1 text-white">{isHovered ? "▲" : "▼"}</p>}
          {isHovered && <ProfileModal />}
          {/* {true && <ProfileModal/>} */}
        </div>
      )}
    </div>
  );
};

export default Header;
