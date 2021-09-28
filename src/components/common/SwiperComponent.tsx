import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { CardComponent } from './CardComponent';

interface SwiperComponentProps {
    cards:any;
};

export const SwiperComponent = ({cards}:SwiperComponentProps) => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={'auto'}
            centeredSlides={true}
            freeMode={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {cards.map((card?:any) => {
                return(
                    <SwiperSlide>
                        <CardComponent
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                            buttonText={card.buttonText}
                            url={card.url}
                        />
                    </SwiperSlide>  
                )
            })}
            
        </Swiper>
    )
}
