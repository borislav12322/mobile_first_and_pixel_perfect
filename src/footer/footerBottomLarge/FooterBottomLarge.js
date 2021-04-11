import s from './FooterBottomLarge.module.scss';

import MasterCard from '../../assets/img/footer/MC.svg';
import Visa from '../../assets/img/footer/VISA.svg';


function FooterBottomLarge(props) {
    return (
        <div className={s.footerBottomLarge}>

            <div className={s.payment}>
                <img src={MasterCard} alt="" className={s.imgPayment} />
                <img src={Visa} alt="" className={s.imgPayment} />
            </div>

            <div className={s.footerInfo}>
                <span className={s.footerPhoneNumber}>Тех. поддержка: 8(800)700-00-00</span>
                <small className={s.footerCopyright}>
                    © 2018 HELYFLY. All Rights Reserved.
                    </small>
            </div>

            <select name="list" className={s.select} size="1">
                <option value="RU">RU</option>
                <option value="ENG">ENG</option>
            </select>

        </div>


    );
}

export default FooterBottomLarge;
