import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import { RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../util/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../util/appStore/userSlice'
import Browse from './pages/Browse'

const Body = () => {
    const dispath = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <SignUp/>
        },
        {
            path : "/login",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              const {uid, email, displayName, photoURL} = user
              dispath(addUser({uid, email, displayName, photoURL}))
            } else {
              dispath(removeUser())
            }
          });
    })

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body