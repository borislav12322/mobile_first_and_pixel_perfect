import s from './Map.module.scss';
import Slide from '../swiper/slide/Slide';
import NumberOne from '../../assets/img/swiper/numberOne.svg';
import NumberTwo from '../../assets/img/swiper/NumberTwo.svg';
import NumberThree from '../../assets/img/swiper/NumberThree.svg';

import TextInfo from './textInfo/TextInfo';
import PhotographerInfo from '../photographerInfo/PhotographerInfo';




function App() {
    return (
        <div className={s.mapBox}>
            <div className={s.container}>
                <div className={s.slideInner}>
                    <img src={NumberOne} alt="" className={s.slideImg}/>
                    <div className={s.content}>
                        <h2 className={s.title}>Где встречаемся?</h2>
                        <TextInfo textValue="Москва" />
                    </div>
                </div>
                <div className={s.slideInner}>
                    <img src={NumberTwo} alt="" className={s.slideImg}/>
                    <div className={s.content}>
                        <h2 className={s.title}>Время съемки</h2>
                        <TextInfo textValue="3 часа" />
                    </div>
                </div>
                <div className={s.slideInner}>
                    <img src={NumberThree} alt="" className={s.slideImg}/>
                    <div className={s.content}>
                        <h2 className={s.title}>Мест осталось:</h2>
                        <TextInfo textValue="2 места" />
                    </div>
                </div>
                <PhotographerInfo btnInfoValue='Показать больше информации'
                photographerInfoStyle={{display: 'flex'}}  />
            </div>
            
        </div>
    );
}

export default App;
