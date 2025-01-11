
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Customers from './components/Customers';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
    <div className="App">

<Router>
<Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<AboutUs />} /> 
              <Route exact path="/products" element={<Products />} />
              {/* <Route exact path="/product/:id" element={<ProductDetails />} /> */}
              {/* <Route exact path="/product-details" element={<ProductDetails />} /> */}
              <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/customers" element={<Customers />} />
              <Route exact path="/testimonials" element={<Testimonials />} />
              <Route exact path="/contactus" element={<Contactus />} /> 
              <Route exact path="/footer" element={<Footer />} /> 

            </Routes>

        
</Router>
</div>
    </>
  );
}

export default App;
