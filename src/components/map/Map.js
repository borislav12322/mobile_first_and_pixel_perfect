import s from './Map.module.scss';

import Map from '../../assets/img/map/map.svg';

function App() {
    return (
        <div className={s.mapBox}>
            <img src={Map} alt="" className={s.mapImg}/>
        </div>
    );
}

export default App;
