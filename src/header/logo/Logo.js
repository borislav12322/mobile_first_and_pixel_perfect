import s from './Logo.module.scss';
import LogoImg from '../../assets/img/header/logo.svg';

function Logo() {
    return (
        <div className={s.logoContainer}>
            <img className={s.logoImg} src={LogoImg} alt="" />
        </div>
    );
}

export default Logo;
