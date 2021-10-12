import React, {useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { CardComponent } from './CardComponent';
import {CardType} from "../../types/CardType";
import {getWindowDimensions} from "../../actions/getWindowDimensions";

interface SwiperComponentProps {
    cards:CardType[];
};

export const SwiperComponent = ({cards}:SwiperComponentProps) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            centeredSlides={windowDimensions.width > 1024}
            breakpoints={{
                "640": {
                    "slidesPerView": "auto",
                    "spaceBetween": 0
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": "auto",
                    "spaceBetween": 50
                }
            }}
            freeMode={true}
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
