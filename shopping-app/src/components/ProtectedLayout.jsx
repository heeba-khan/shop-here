import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from './Protected'
import Logout from './Logout'

function ProtectedLayout() {
  return (
    <Protected>
        <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        <Logout />
      </div>
        <Outlet/>
    </Protected>
  )
}

export default ProtectedLayout