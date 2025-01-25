import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Vans from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './Pages/Host/HostVans'
import HostVanDetail from './Pages/Host/HostVanDetail'
import HostVanPrice from './Pages/Host/HostVanPrice'
import HostVanPhoto from './Pages/Host/HostVanPhoto'
import HostVanInfo from './Pages/Host/HostVanInfo'

function App() {
 
  return (
    <>      
      <BrowserRouter>       
        <Routes>
               <Route path="Van_Life/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} />
                  <Route path="vans/:id" element={<VanDetail />} />
                
                  <Route path="host" element={<HostLayout />}>
                      <Route index element={<Dashboard />} />
                      <Route path="income" element={<Income />} />
                      <Route path="reviews" element={<Reviews />} />
                      <Route path="vans" element={<HostVans />} />
                      <Route path="vans/:id" element={<HostVanDetail />}>
                        <Route index element={<HostVanInfo />} /> 
                        <Route path="pricing" element={<HostVanPrice />} />
                        <Route path="photos" element={<HostVanPhoto />} />           
                      </Route>
                  </Route>
              </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
