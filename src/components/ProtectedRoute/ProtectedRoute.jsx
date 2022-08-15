import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({user, redirectPath='/login', children}) {
  const ChildrenToRender = () => children
  return user ? (
    <ChildrenToRender />
  ) : (
    <Navigate to={redirectPath} replace/>
  )
}
