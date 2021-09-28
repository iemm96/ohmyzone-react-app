import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { CardComponent } from './CardComponent';
import {CardType} from "../../types/CardType";

interface SwiperComponentProps {
    cards:CardType[];
};

export const SwiperComponent = ({cards}:SwiperComponentProps) => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={'auto'}
            freeMode={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {cards.map((card:CardType) => (
                <SwiperSlide>
                    <CardComponent
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        url={card.url}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
