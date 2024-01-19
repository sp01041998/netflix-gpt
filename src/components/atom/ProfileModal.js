import React from 'react'
// import { Link } from 'react-router-dom'
import {auth} from "../../util/firebase"
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../util/appStore/userSlice';
import {useNavigate } from 'react-router-dom';

const ProfileModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUserSingOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate('/login')
    }).catch((error) => {
     
    });
    
  }
  return (
    <div className='fixed right-8 top-16'>
      <p className="text-white -mb-2 text-end mr-8">▲</p>
        <div className="bg-black text-white px-6 py-2 rounded-sm border border-gray-500 -mt-1.5 text-base">
          <div className='flex justify-between items-center font-sans font-mono text-red-500 font-semibold'>
            <p>{auth?.currentUser?.displayName}</p>
            <img
              className="rounded-3xl w-12 border ml-2"
              src={auth?.currentUser?.photoURL}
              alt="Profile"
            />
          </div>
          <p className="cursor-pointer" onClick={handleUserSingOut}>Sign Out</p>
          <p className="cursor-pointer">Settings</p>
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">Profile</p>
        </div>
    </div>
          
  )
}

export default ProfileModal