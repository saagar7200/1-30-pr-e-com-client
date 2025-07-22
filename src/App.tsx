
import './App.css'
import HomePage from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import {BrowserRouter as Router , Routes,Route} from 'react-router'

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* defining page routes */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>
        <Route path='*' element={<div>Page not found</div>}/>
      </Routes>
    </Router> 
    </>
  )
}

export default App
