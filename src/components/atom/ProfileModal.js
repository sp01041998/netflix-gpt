import React from 'react'
// import { Link } from 'react-router-dom'
import {auth} from "../../util/firebase"
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { removeUser } from '../../util/appStore/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

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
    <div className='fixed right-28 top-16'>
      <p className="text-blue-700 -mb-2 text-center">▲</p>
        <div className="bg-black text-white px-6 py-2 rounded-sm border border-gray-500 -mt-1.5 text-base">
          <p className="cursor-pointer" onClick={handleUserSingOut}>Sign Out</p>
          <p className="cursor-pointer">Settings</p>
          <p className="cursor-pointer">Help</p>
          <p className="cursor-pointer">Profile</p>
        </div>
    </div>
          
  )
}

export default ProfileModal