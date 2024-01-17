import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileModal from "../atom/ProfileModal";
import { useLocation } from "react-router-dom";
import { pathForProfile } from "../../util/const";

const Header = ({ btnText, style, customHeaderStyle, imageSize }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation()
  const {pathname, search, hash} = location

  const handleMouseEnter = () => {
    if(isHovered) return
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if(!isHovered) return
    setIsHovered(false);
  };
  return (
    <div
      className={`px-32 py-2 flex items-center justify-between absolute w-full ${customHeaderStyle}`}
    >
      <img
        className={`w-44 ${imageSize}`}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
      />
      <button className={style}>
        <Link to="/login">{btnText}</Link>
      </button>
      {!pathForProfile.includes(pathname) && <div
        className="flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://occ-0-6502-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="Profile"
          className="w-12"
        />
        {<p className="ml-1 text-white">{isHovered ? "▲" : "▼"}</p>}
        {isHovered && <ProfileModal/>}
      </div>}
      
    </div>
  );  
};

export default Header;
