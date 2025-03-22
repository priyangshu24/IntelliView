import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  )
}

export default AuthenticationLayout
