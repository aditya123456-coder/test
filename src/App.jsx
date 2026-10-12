import Register from './dashboard/dashboard'
import Login from './login/login'
import Home from './home/Home'
import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
        <Route path='Home' element={<Home/>}/>
      </Routes>

    </div>

  )
}

export default App  
