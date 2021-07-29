import s from './TextInfo.module.scss';

function TextInfo(props) {
    return (
        <div className={s.container} style={props.reviewStyle}>
            <span className={s.textInfo}>
                {props.textValue}
            </span>
        </div>
    );
}

export default TextInfo;
