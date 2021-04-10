import s from './Photos.module.scss';

//Images
import Helicopter from '../../assets/img/photos/photosImg.svg';
import Cabine from '../../assets/img/photos/photosCabineImg.svg';
import People from '../../assets/img/photos/photosPeopleImg.svg';
import Woman from '../../assets/img/photos/photoWomanImg.svg';

function Photos() {
    return (
        <div className={s.photosBox}>
            <h2 className={s.title}>Фотографии пакета</h2>
            <div className={s.photosContainer}>
                <img src={Woman} alt="" className={s.photo} />
                <img src={Cabine} alt="" className={s.photo} />
                <img src={Helicopter} alt="" className={s.photo} />
                <img src={People} alt="" className={s.photo} />
                <img src={People} alt="" className={s.photo} />
                <img src={People} alt="" className={s.photo} />
                <img src={Cabine} alt="" className={s.photo} />
                <img src={Helicopter} alt="" className={s.photo} />
            </div>
        </div>
    );
}

export default Photos;
