import s from './Slide.module.scss';

function Slide(props) {
    return (
        <div className={s.slide}>
            <div className={s.container} style={props.containerStyle}>
                <img src={props.ImgNumber} alt="" className={s.numberImg} />
                <div className={s.textBox}>
                    <h2 className={s.questionText}>{props.questionName}</h2>
                    <span className={s.place}>{props.placeName}</span>
                </div>
            </div>

        </div>
    );
}

export default Slide;
