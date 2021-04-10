import s from './DescriptionRow.module.scss';

function DescriptionRow(props) {
    return (
        <div className={s.row}>
            <li className={s.item} style={props.itemStyle}>
                <img className={s.img} src={props.image} alt={props.alt} style={props.styleImg} />
                <span className={s.text}>{props.text}</span>
            </li>
        </div>
    );
}

export default DescriptionRow;
