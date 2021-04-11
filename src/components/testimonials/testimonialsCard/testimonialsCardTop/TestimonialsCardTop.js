import s from './TestimonialsCardTop.module.scss';
import Stars from '../../../../assets/img/description/stars.svg';


function TestimonialsCardTop(props) {
    return (

        <div className={s.cardTop}>
            <img src={props.photo} alt="" className={s.clientPhoto} />
            <div className={s.textCard}>
                <span className={s.name}>{props.nameValue}</span>
                <span className={s.position}>{props.positionValue}</span>
                <img src={Stars} alt="" className={s.stars} />
            </div>
        </div>

    );
}

export default TestimonialsCardTop;
