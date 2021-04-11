import s from './Testimonials.module.scss';

import WomanPhoto from '../../assets/img/testimonials/testimonialsWomanIcon.svg';
import ManPhoto from '../../assets/img/testimonials/testimonialsManIcon.svg';

import TestimonialsCard from './testimonialsCard/TestimonialsCard';

function Testimonials() {
    return (
        <div className={s.testimonials}>
            <h2 className={s.title}>Отзывы<span className={s.dots}>:</span></h2>
            <TestimonialsCard photo={WomanPhoto}
                nameValue="Валерия Антонова"
                positionValue="Арт-директор"
                reviewValue="Супер! Я бы заказала съемку снова!"
                textCardValue="Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!"
                dateValue="27 Апреля, 2019г." />
            <TestimonialsCard photo={ManPhoto}
                nameValue="Виталий Петров"
                positionValue="Фотограф"
                reviewValue="Супер! Я бы заказала съемку снова!"
                textCardValue="Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. 
            Организация полёта отличная. Спасибо!"
                dateValue="19 Апреля, 2019г." />
            <button className={s.btn}>Показать Все (134)</button>
        </div>
    );
}

export default Testimonials;
