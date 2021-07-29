import s from './PhotographerInfo.module.scss';
import PhotographerPhoto from '../../assets/img/about/aboutImg.svg';

function PhotographerInfo(props) {
    return (
        <div className={s.info} style={props.photographerInfoStyle} >
            <img src={PhotographerPhoto} alt="" className={s.img} />

            <div className={s.content}>
                <h2 className={s.titlePhotographer}>Марина Иванова</h2>
                <span className={s.textPhotographer}>Фотограф</span>
                <button className={s.btnMore}>
                    {props.btnInfoValue}
                </button>
            </div>
        </div>
    );
}

export default PhotographerInfo;
