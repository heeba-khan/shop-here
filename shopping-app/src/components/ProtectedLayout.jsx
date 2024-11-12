import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from './Protected'
import Logout from './Logout'

function ProtectedLayout() {
  return (
    <Protected>
        <div className="flex justify-end p-4">
        <div className="bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition duration-200 w-24">
        <Logout />
      </div>
      </div>
        <Outlet/>
    </Protected>
  )
}

export default ProtectedLayout