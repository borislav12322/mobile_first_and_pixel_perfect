import s from './TestimonialsCard.module.scss';
import Stars from '../../../assets/img/description/stars.svg';
import Check from '../../../assets/img/testimonials/checkIcon.svg'


function TestimonialsCard(props) {
    return (
        <div className={s.testimonialsCard} style={props.cardStyle}>
            <div className={s.cardTop}>
                <div className={s.userInfo}>
                    <img src={props.photo} alt="" className={s.clientPhoto} />
                    <div className={s.textCard}>
                        <span className={s.name}>{props.nameValue}</span>
                        <span className={s.position}>{props.positionValue}</span>
                        <img src={Stars} alt="" className={s.stars} />
                    </div>
                </div>

                <div className={s.reviewRow}>
                    <span className={s.text}>{props.reviewValue}</span>
                </div>
            </div>


        <div className={s.content}>
            <p className={s.text}>
                {props.textCardValue}
            </p>

            <time className={s.date}>
                {props.dateValue}
            </time>
            </div>
        </div>
    );
}

export default TestimonialsCard;
