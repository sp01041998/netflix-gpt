import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "../atom/ProfileModal";
import { useLocation } from "react-router-dom";
import { NAVBAR, PATH_MAPPING, PROFILE_BAR, pathForProfile } from "../../util/const";
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
        console.log(user)
        console.log({pathname})
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if(pathname === "/login"){
          navigate("/browse")
          return
        }
        navigate(pathname);
      } else {
        console.log({pathname})
        dispatch(removeUser());
        console.log({pathname})
        if(pathname=== "/login"){
          navigate('/login')
          return
        }
        navigate("/");
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
    <div
      className={`px-32 py-2 flex items-center justify-between w-full ${customHeaderStyle}`}
    >
      <div className="flex w-8/12">
        <img
          className={`w-44 ${imageSize}`}
          src={NETFLIX_LOGO_HEADER}
          alt="Netflix"
        />
        {!['/login', '/'].includes(pathname) && <div className="text-white flex items-center w-6/12 justify-around">

          {["Home", "My List", "Liked Movies"].map((ele, index) => (
            <p className={PATH_MAPPING[pathname] === index  ? 'font-bold text-xl': ""}><Link to = {`${NAVBAR[ele]}`}>{ele}</Link></p>
          ))}
        </div>}
      </div>
      <div className="flex">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
