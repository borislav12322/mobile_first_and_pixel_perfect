import s from './ReviewRating.module.scss';
import Review from '../../assets/img/description/reviewIcon.svg';
import Stars from '../../assets/img/description/stars.svg';

function ReviewRating(props) {
    return (
        <div className={s.container} style={props.reviewStyle}>
            <img src={Review} alt="" className={s.reviewIcon}/>
            <div className={s.content}>
                <span className={s.text}>Более <span className={s.numbers}>150 </span> отзывов с оценкой</span>
                <img src={Stars} alt="" className={s.stars}/>
            </div>
        </div>
    );
}

export default ReviewRating;
