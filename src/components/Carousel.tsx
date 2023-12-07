interface props {
    img_list?: {
        data: {
            publicUrl: string
        }
    }[];
}

import { useState, useRef, useEffect } from 'react';

import React from 'react';

interface ImageData {
    data: {
        publicUrl: string;
    };
}

const Carousel: React.FC<props> = ({ img_list }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % img_list.length;
        setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + img_list.length) % img_list.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="flex items-center justify-center">
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-10" onClick={prevImage}>Previous</button>
            <div className="relative">
                <img className="rounded-lg" src={img_list[currentImageIndex].data.publicUrl} alt={`Image ${currentImageIndex}`} />
            </div>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-10" onClick={nextImage}>Next</button>
        </div>
    );
};

export default Carousel;