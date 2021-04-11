import './App.scss';
import Header from './header/Header';
import Reservation from './components/reservation/Reservation';
import Description from './components/description/Description';
import ReviewRating from './components/reviewRating/ReviewRating';
import Photos from './components/photos/Photos';
import About from './components/about/About';
import Booking from './components/booking/Booking.js';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
      </div>
      <Reservation />
      <div className="App__container">
        <Description />
        <ReviewRating/>
        {/* <Photos/> */}
        <About/>
        <Booking/>
      </div>

    </div>
  );
}

export default App;
