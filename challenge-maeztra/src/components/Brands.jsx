import React from 'react'
import BrandItem from './BrandItem'
export default function Brands() {

    const brands = [
        {
            imageUrl: 'src/assets/comma.svg'
        },
        {
            imageUrl: 'src/assets/melissa.svg'
        },
        {
            imageUrl: 'src/assets/forever.svg'
        },
        {
            imageUrl: 'src/assets/zara.svg'
        },
        {
            imageUrl: 'src/assets/ann-taylor.svg'
        },
    ]
    return (


        <section className='my-10'>
            <h2 className='text-[#353535] font-bold text-2xl text-center'>Marcas Parceiras</h2>

            <section className='overflow-x-auto '>

                <div className='flex gap-4 flex-nowrap w-[1598px] h-[64px] my-[21px] ml-8 mr-[1.31rem]'>
                    <BrandItem
                        brandList={brands}
                    />
                </div>

            </section>
        </section>
    )
}
