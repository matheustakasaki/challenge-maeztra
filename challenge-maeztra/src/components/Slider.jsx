import React, { useState } from 'react'


export default function Slider({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (

        <div className='bg-[url(./assets/mobile-banner.png)] bg-no-repeat bg-cover bg-center flex items-center min-h-[20rem] relative'>

            <div>
                <svg className='ml-7' onClick={goToPrevious} width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="black" />
                </svg>
            </div>

            <div className='min-w-[240px] px-5'>
                <h3 className='text-3xl font-bold mb-6 font-montserrat'>
                    {slides[currentIndex].heading}
                </h3>
                <p className='text-sm mb-4 font-montserrat'>{slides[currentIndex].subHeading}</p>
                <button className='bg-[#FAA500] rounded w-[4.75rem] text-sm text-center p-0 h-7 font-bold font-montserrat'>{slides[currentIndex].callToActionText}</button>
            </div>

            <div>
                <svg className='mr-7' onClick={goToNext} width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="black" />
                </svg>

            </div>
        </div>
    )
}
