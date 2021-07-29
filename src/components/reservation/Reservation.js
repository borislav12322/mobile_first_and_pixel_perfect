import s from './Reservation.module.scss';
import PercentIcon from '../../assets/img/reservation/percensImg.svg';

function Reservation() {
    return (
        <section className={s.reserveWrapper}>
            <div className={s.container}>
                <h2 className={s.title}>Эксклюзивная <span className={s.orangeText}>фотосессия</span> при полете на вертолете</h2>
                <div className={s.priceContainer}>
                    <div className={s.text}>
                        <span className={s.textPrice}>Стоимость:</span>
                        <span className={s.price}>1500₽</span>
                    </div>
                    <img src={PercentIcon} alt="percent" />
                </div>
                <button className={s.btn}>Забронировать место</button>
            </div>
        </section>
    );
}

export default Reservation;
