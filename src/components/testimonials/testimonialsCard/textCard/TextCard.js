import s from './TextCard.module.scss';




function TextCard(props) {
    return (
            <p className={s.text}>
                {props.textCardValue}
            </p>
    );
}

export default TextCard;
