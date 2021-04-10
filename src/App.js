import './App.scss';
import Header from './header/Header';
import Reservation from './components/reservation/Reservation';
import Description from './components/description/Description';
import ReviewRating from './components/reviewRating/ReviewRating';
import Photos from './components/photos/Photos';

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
        <Photos/>
      </div>

    </div>
  );
}

export default App;
