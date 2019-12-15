import React, { FC } from 'react'
import { useNavbar } from '../../hooks/useNavbar'

export const AdminDashboard: FC = () => {
  const { setTitle, setCanGoBack } = useNavbar()
  setTitle('Admin Dashboard')
  setCanGoBack(false)
  return <h1>Admin Dashboard</h1>
}
