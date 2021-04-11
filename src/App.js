import './App.scss';
import Header from './header/Header';
import Reservation from './components/reservation/Reservation';
import Description from './components/description/Description';
import ReviewRating from './components/reviewRating/ReviewRating';
import Photos from './components/photos/Photos';
import About from './components/about/About';
import Booking from './components/booking/Booking.js';
import Map from './components/map/Map';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
      </div>
      <Reservation />
      <div className="App__container">
        <Description />
        <ReviewRating />
        {/* <Photos/> */}
        <About />
        <Booking />
      </div>
      <Map />
      <div className="App__container">
        <Testimonials />
        <Footer/>
      </div>

    </div>
  );
}

export default App;
