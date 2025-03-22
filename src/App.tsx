import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { PublicLayout } from '@/layouts/public-layout';
import AuthenticationLayout from '@/layouts/auth-layout';

import HomePage from '@/routes/home';
import { SignIN } from './routes/sign-in';
import { SignUp } from './routes/sign-up';

// import {Button} from '@/components/ui/button'
// import { icons } from 'lucide-react'

const App = () => {
  return (
    <Router>
      <Routes>
        {/*Public routes*/}
        <Route element={<PublicLayout/>}>
        <Route index element={<HomePage/>}/>
        </Route>

        {/*Authenticated routes*/}
        <Route element={<AuthenticationLayout/>}>
        <Route path='/signin' element={<SignIN/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
