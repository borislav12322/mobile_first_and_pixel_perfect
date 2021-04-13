import s from './Map.module.scss';
import Slide from '../swiper/slide/Slide';
import NumberOne from '../../assets/img/swiper/numberOne.svg';



function App() {
    return (
        <div className={s.mapBox}>
            <div className={s.container}>
                <Slide ImgNumber={NumberOne} questionName="Где встречаемся?" placeName="Москва" containerStyle={{flexDirection: 'row',
                backgroundColor: "white"}} />
            </div>
        </div>
    );
}

export default App;
