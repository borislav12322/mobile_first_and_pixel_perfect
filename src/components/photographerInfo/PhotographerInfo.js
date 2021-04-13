import s from './PhotographerInfo.module.scss';
import PhotographerPhoto from '../../assets/img/about/aboutImg.svg';

function PhotographerInfo() {
    return (
        <div className={s.info}>
                <img src={PhotographerPhoto} alt="" className={s.img} />
            
            <div className={s.content}>
                <h2 className={s.titlePhotographer}>Марина Иванова</h2>
                <span className={s.textPhotographer}>Фотограф</span>
                <button className={s.btnMore}>
                    Показать больше информации о фотографе</button>
            </div>
        </div>
    );
}

export default PhotographerInfo;
