import s from './Date.module.scss';

function Date(props) {
    return (
        <div className={s.booking}>
            <h3 className={s.title}>{props.dateText}</h3>
        </div>
    );
}

export default Date;
