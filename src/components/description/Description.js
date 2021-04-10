import s from './Description.module.scss';

// Components
import DescriptionRow from './descriptionRow/DescriptionRow';
import ReviewRating from '../reviewRating/ReviewRating';

// Images
import Photo from '../../assets/img/description/descriptionImgMobile.svg';
import Clock from '../../assets/img/description/clockIcon.svg';
import Camera from '../../assets/img/description/cameraIcon.svg';
import Location from '../../assets/img/description/locationIcon.svg';
import Question from '../../assets/img/description/questionIcon.svg';

function Description() {
    return (
        <section className={s.description}>
            <h2 className={s.title}>Фотосессия в вертолете</h2>
            <img src={Photo} width="200" alt="" className={s.video} />
            <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>
            <ul className={s.list}>
                <DescriptionRow
                    image={Clock}
                    text="3 часа съемки"
                    styleImg={{
                    marginRight: '11px',
                    }}
                    itemStyle={{ marginBottom: '16px' }} />

                <DescriptionRow
                    image={Camera}
                    text="Более 50 фотографий"
                    styleImg={{
                    marginRight: '8px'}}
                    itemStyle={{ marginBottom: '16px' }} />

                <DescriptionRow
                    image={Location}
                    text="Москва"
                    styleImg={{marginRight: '10px'}}
                    itemStyle={{ marginBottom: '16px' }}
                />

                <DescriptionRow
                    image={Question}
                    text="Готовы ответить на любые вопросы"
                    styleImg={{ marginRight: '12px' }} />
            </ul>
        </section>
    );
}

export default Description;
