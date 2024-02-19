import { Analytics } from '@vercel/analytics/react';
import './index.css';
import React from 'react';
import Navbar from './components/navbar.js'
import Mainpage from './components/landing.js'
import PoweredBySection from './components/promo.js'
import ComingSoon from './components/coming.js'
import Teams from './components/team.js'
import Footer from './components/footer.js'
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
  return (
<div>
  <Analytics />
  <Navbar/>
  <Mainpage/>
  <PoweredBySection/>
  <ComingSoon/>
  <Teams/>
  <Footer/>
</div>
  );
}

export default App;
