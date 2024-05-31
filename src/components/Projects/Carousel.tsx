import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const toggleExpandImage = (image: string) => {
        if (expandedImage === image) {
            setExpandedImage(null);
        } else {
            setExpandedImage(image);
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto tablet:p">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="text-center" onClick={() => toggleExpandImage(image)}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto cursor-pointer rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
            {expandedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full p-16 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => toggleExpandImage(expandedImage)}
                >
                    <img src={expandedImage} alt="Expanded Image" className="max-w-full max-h-full" />
                </div>
            )}
        </div>
    );
};

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-neutral-700 bg-opacity-50 rounded-full p-2 mobile:p-1 cursor-pointer z-10 md:right-6 lg:right-6"
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-neutral-700 bg-opacity-50 rounded-full p-2 mobile:p-1 cursor-pointer z-10 md:left-6 lg:left-6"
            onClick={onClick}
        >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </div>
    );
};

export default ImageCarousel;
