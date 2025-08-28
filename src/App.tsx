
import './App.css'
import HomePage from './pages/home'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import {BrowserRouter as Router , Routes,Route} from 'react-router'
import Products from './pages/products'
import AbouUs from './pages/about'
import ContactUs from './pages/contact-us'
import NotFound from './pages/page-not-found'
import ClientLayout from './layouts/client.layout'
import Wishlist from './pages/wishlist'
import CartPage from './pages/cart'
import ProductDetailPage from './pages/prodct-detail'
import Dashboard from './pages/admin'
import CategoryList from './pages/admin/category/category'
import AdminLayout from './layouts/admin.layout'
import CreteCategory from './pages/admin/category/create-category'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Register/>}/>

        {/* defining page routes */}
        {/* client */}
        <Route  path='/' element={<ClientLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<Products/>}/>
          {/* dynamic */}
          <Route path='/product/:id' element={<ProductDetailPage/>}/>
          <Route path='/about_us' element={<AbouUs/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
          <Route path='/wish_list' element={<Wishlist/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        {/* admin routes */}
        <Route path='/admin' element={<AdminLayout/>}>

          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/category' element={<CategoryList/>}/>
          <Route path='/admin/add/category' element={<CreteCategory/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Route>
      </Routes>
    </Router> 
    </>
  )
}

export default App
