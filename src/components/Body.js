import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import { RouterProvider } from 'react-router-dom'
import SignUp from './pages/SignUp'

import Browse from './pages/Browse'
import WatchMovie from './pages/WatchMovie'

const Body = () => {
    
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
        },
        {
            path : 'movie/:movieId',
            element : <WatchMovie/>
        },
    ])

    

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body