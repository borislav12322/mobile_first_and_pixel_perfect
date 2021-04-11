import s from './SmallReview.module.scss';

import Check from '../../../../assets/img/testimonials/checkIcon.svg';


function SmallReview(props) {
    return (
        <div className={s.reviewRow}>
            <span className={s.text}>{props.reviewValue}</span>
        </div>
    );
}

export default SmallReview;
