

import React from 'react';
import Slider from './Slider';

export default function Infocard() {


    const slides = [{
        heading: 'Promoções de Outono',
        subHeading: 'Confira os melhores looks para combinar com você nesse Outono',
        callToActionText: 'Conferir'
    },
    {
        imageUrl: './assets/main-banner.png',
        heading: 'Promoções de Inverno',
        subHeading: 'Confira os melhores looks para combinar com você nesse Inverno',
        callToActionText: 'Confira'
    }]

    return (
        <>
            <Slider slides={slides} />
        </>
    );
}