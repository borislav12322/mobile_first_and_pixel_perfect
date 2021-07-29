import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import Slide from './slide/Slide';
import NumberOne from '../../assets/img/swiper/numberOne.svg';
import NumberTwo from '../../assets/img/swiper/NumberTwo.svg';
import NumberThree from '../../assets/img/swiper/NumberThree.svg';

import './SwiperLocation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperLocation = () => {
    return (
        <div className="wrapper">
            <Swiper
                style={{ maxWidth: 233 }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    576: {
                        paddingLeft: 55,
                        paddingRight: 55,
                    }
                }}

            >
                <SwiperSlide>
                    <Slide ImgNumber={NumberOne} questionName="Где встречаемся?" placeName="Москва" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide ImgNumber={NumberTwo} questionName="Время съемки" placeName="3 часа" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide ImgNumber={NumberThree} questionName="Мест осталось:" placeName="2 места" />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default SwiperLocation;