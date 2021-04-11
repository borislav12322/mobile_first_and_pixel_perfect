import s from './BookingCell.module.scss';

function BookingCell(props) {
    return (
        <div className={s.bookingCell}>
            <div className={s.cellContainer}>
                <div className={s.textBox}>
                    <span className={s.time}>{props.timeValue}</span>
                    <span className={s.price}>{props.priceValue}</span>
                    <span className={s.leftSpace}>{props.spaceValue}</span>
                </div>
                <button className={s.btn}>Выбрать</button>
            </div>
        </div>
    );
}

export default BookingCell;
