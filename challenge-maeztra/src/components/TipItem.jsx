import React from 'react'

export default function TipItem({ tips }) {

    return (

        <>
            {tips.map((item, index) => (
                <div key={index} className="bg-[#efefef] py-4 px-[1.6rem] flex items-center w-72 max-w-[298px] h-full rounded-[0.275rem] gap-x-5">
                    <img src={item.imageUrl} />

                    <div className='flex-1 h-full flex flex-col justify-center'>
                        <h3 className='font-bold text-sm text-[#353535]'>{item.heading}</h3>
                        <p className='text-xs text-[#4A4441]'>{item.subHeading}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
