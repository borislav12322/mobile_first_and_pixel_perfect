import s from './Header.module.scss';
import Logo from './logo/Logo';
import UserIcon from '../assets/img/header/userIcon.svg'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>

                <div className={s.content}>
                    <Logo/>
                    <a href="tel:88001231212" className={s.phoneLink}>Москва</a>
                    <a href="" className={s.PhoneLinkMore}>
                    <span className={s.linkText}>Телефон:</span>
                    <span className={s.linkPhoneNumber}>8(800)-123-12-12</span>
                </a>

                </div>
                <a href="#" className={s.profileLink}><img src={UserIcon} alt="" className={s.userIcon}/></a>
                
            </div>
        </header>
    );
}

export default Header;
