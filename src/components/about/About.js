import s from './About.module.scss';

import PhotographerPhoto from '../../assets/img/about/aboutImg.svg'


function About() {
    return (
        <section className={s.about}>
            <div className={s.aboutPhotographer}>
                <div className={s.photoBox}>
                    <img src={PhotographerPhoto} alt="" className={s.img} />
                </div>
                <h2 className={s.titlePhotographer}>Марина Иванова</h2>
                <span className={s.textPhotographer}>Фотограф</span>
                <button className={s.btnMore}>Показать больше информации о фотографе</button>
            </div>

            <div className={s.aboutText}>
                <div className={s.aboutOrganisator}>
                    <h2 className={s.titleOrganisator}>Об организаторе:</h2>
                    <p className={s.textOrganisator}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются
                    в маркетинге, операциях
                    и услугах обслуживания клиентов, специализирующихся
                    на совместном использовании
                    и частных турах. Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента.
                    Мы никогда не зависим
                    от субпоставщиков и не свяжемся…</p>
                    <button className={s.btnOrganisator}>Читать еще</button>
                </div>

                <div className={s.presentation}>
                    <h2 className={s.titlePresentation}>Что я предоставлю:</h2>
                    <p className={s.textPresentation}>Встречу вас на машине после длительного перелёта.
                    Качественный подбор места
                    и локации для вашей съемки.
                    При необходимости всегда возможно прерваться
                    на обед/ужин.
                    Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае!</p>
                    <button className={s.btnPresentation}>Читать еще</button>
                </div>
            </div>
        </section>
    );
}

export default About;
