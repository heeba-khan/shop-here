import React from 'react'
import { Outlet } from 'react-router-dom'
import Protected from './Protected'

function ProtectedLayout() {
  return (
    <Protected>
        <Outlet />
    </Protected>
  )
}

export default ProtectedLayout