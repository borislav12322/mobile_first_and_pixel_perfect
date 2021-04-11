import s from './Footer.module.scss';

import FooterBottomSmall from './footerBottomSmall/FooterBottomSmall';
import FooterBottomLarge from './footerBottomLarge/FooterBottomLarge';


import Logo from '../header/logo/Logo';
import Vk from '../assets/img/footer/vk.svg'
import FB from '../assets/img/footer/Facebook.svg'
import Insta from '../assets/img/footer/Instragram.svg';
import MasterCard from '../assets/img/footer/MC.svg';
import Visa from '../assets/img/footer/VISA.svg';


function Footer(props) {
    return (
        <footer className={s.footer}>
            <div className={s.footerTop}>
                <Logo />
                <div className={s.socials}>
                    <img src={Vk} alt="" className={s.imgSocial} />
                    <img src={FB} alt="" className={s.imgSocial} />
                    <img src={Insta} alt="" className={s.imgSocial} />
                    <select name="list" className={s.select} size="1">
                        <option value="RU">RU</option>
                        <option value="ENG">ENG</option>
                    </select>
                </div>
            </div>

            <FooterBottomSmall />
            <FooterBottomLarge />

        </footer>
    );
}

export default Footer;
