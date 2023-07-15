import './css/centercontent.css'
import Home from './Home'
import Contact from './Contact'
import  {Academic} from './Academic'
import About from './About'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



const Centercontent = () => {
  return (
    <div className='centercontent'>
   
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path='/academic' element={<Academic></Academic>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
    
    
    </div>
  )
}

export default Centercontent