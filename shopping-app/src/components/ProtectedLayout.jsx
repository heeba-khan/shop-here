import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from './Protected'
import Logout from './Logout'

function ProtectedLayout() {
  return (
    <Protected>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Logout />
      </div>
        <Outlet/>
    </Protected>
  )
}

export default ProtectedLayout