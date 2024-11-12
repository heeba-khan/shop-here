import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from './Protected'
import Logout from './Logout'

function ProtectedLayout() {
  return (
    <Protected>
        <div className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-auto">
        <Logout />
      </div>
        <Outlet/>
    </Protected>
  )
}

export default ProtectedLayout