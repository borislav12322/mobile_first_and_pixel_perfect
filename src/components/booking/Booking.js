import s from './Booking.module.scss';


import Date from './date/Date';
import BookingCell from './bookingCell/BookingCell';
import ReviewRating from '../reviewRating/ReviewRating';

function Booking() {
    return (
        <div className={s.booking}>
            <h2 className={s.title}>Доступная съемка в ближайщее время</h2>
            <Date dateText="Пятница, 14 сентября"/>
            <BookingCell timeValue="15:00 - 18:00" priceValue="850$" spaceValue="Осталось — 1 место" />
            <BookingCell timeValue="19:00 - 22:00" priceValue="850$" spaceValue="Осталось — 1 место" />
            <ReviewRating reviewStyle={{borderTop:"none"}}/>
        </div>
    );
}

export default Booking;
