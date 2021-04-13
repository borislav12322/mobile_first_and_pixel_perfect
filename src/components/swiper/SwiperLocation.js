import './SwiperLocation.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './slide/Slide';
import NumberOne from '../../assets/img/swiper/numberOne.svg';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SwiperLocation() {

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
                    <Slide ImgNumber={NumberOne} questionName="Время съемки" placeName="3 часа" />
                </SwiperSlide>

                <SwiperSlide>
                    <Slide ImgNumber={NumberOne} questionName="Мест осталось:" placeName="2 места" />
                </SwiperSlide>

            </Swiper>
        </div>


































        // <Swiper
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        // >
        //     <SwiperSlide>
        //         <Slide ImgNumber={NumberOne} questionName="Где встречаемся?" placeName="Москва" />
        //         </SwiperSlide>
        //     <SwiperSlide>
        //         <Slide ImgNumber={NumberOne} questionName="Время съемки" placeName="3 часа" />
        //         </SwiperSlide>
        //     <SwiperSlide>
        //         <Slide ImgNumber={NumberOne} questionName="Мест осталось:" placeName="2 места" />
        //         </SwiperSlide>
        // </Swiper>



















        //     <Swiper
        //     navigation
        //     pagination={{ clickable: true }}
        // >
        // <SwiperSlide>
        //     <Slide ImgNumber={NumberOne} questionName="Где встречаемся?" placeName="Москва" />
        // </SwiperSlide>
        // <SwiperSlide>
        //     <Slide ImgNumber={NumberOne} questionName="Время съемки" placeName="3 часа" />
        // </SwiperSlide>
        // <SwiperSlide>
        //     <Slide ImgNumber={NumberOne} questionName="Мест осталось:" placeName="2 места" />
        // </SwiperSlide>

        // </Swiper>
    );
};