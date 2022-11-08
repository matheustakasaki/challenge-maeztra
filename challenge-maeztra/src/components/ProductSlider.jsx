import React from 'react'
import ProductSliderItem from './ProductSliderItem'

export default function ProductSlider() {


    const productList = [
        {
            productImage: 'src/assets/product-img-1.png',
            price: 'R$ 500,00',
            name: 'Faux Suede Mini Skirt',
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
        },
        {
            productImage: 'src/assets/product-img-2.png',
            price: 'R$ 320,00',
            name: 'Ruched Rose Print Mini Skirt',
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
        },
    ]

    return (
        <div className='mt-10'>

            <h2 className='text-2xl font-bold flex justify-center text-[#353535]'>As Mais Pedidas</h2>

            <div className='overflow-x-auto'>
                <div className='my-4 flex w-[1600px] '>
                    <div className='px-4 max-w-[308px]'>
                        <img src="src/assets/product-img-1.png" alt="" />

                        <div className='my-2 flex flex-col gap-2 px-6'>
                            <div className='flex gap-2 '>
                                <span className='w-[27px] h-[27px] bg-[#DEAC71] rounded border-solid border-[#353535] border-[1px]'></span>
                                <span className='w-[27px] h-[27px] bg-[#D37164] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#6497D3] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#3C3B79] rounded'></span>
                            </div>

                            <strong className='text-[#353535] font-bold leading-[1.85rem]'>R$ 500,00</strong>

                            <h2 className='text-base'>Faux Suede Mini Skirt</h2>

                            <p className='text-[#353535] '>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>

                            <button className='w-full bg-[#FAA500]'>Adicionar</button>
                        </div>
                    </div>

                    <div className='px-4 max-w-[308px]'>
                        <img src="src/assets/product-img-2.png" alt="" />

                        <div className='my-2 flex flex-col gap-2 px-6'>
                            <div className='flex gap-2 '>
                                <span className='w-[27px] h-[27px] bg-[#1C1A19] rounded border-solid border-[#353535] border-[1px]'></span>
                                <span className='w-[27px] h-[27px] bg-[#D84E4B] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#CFC9B0] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#EAE9E5] rounded'></span>
                            </div>

                            <strong className='text-[#353535] font-bold leading-[1.85rem]'>R$ 320,00</strong>

                            <h2 className='text-base'>Ruched Rose Print Mini Skirt</h2>

                            <p className='text-[#353535] '>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>

                            <button className='w-full bg-[#FAA500]'>Adicionar</button>
                        </div>


                    </div>

                    <div className='px-4 max-w-[308px]'>
                        <img src="src/assets/product-img-1.png" alt="" />

                        <div className='my-2 flex flex-col gap-2 px-6'>
                            <div className='flex gap-2 '>
                                <span className='w-[27px] h-[27px] bg-[#DEAC71] rounded border-solid border-[#353535] border-[1px]'></span>
                                <span className='w-[27px] h-[27px] bg-[#D37164] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#6497D3] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#3C3B79] rounded'></span>
                            </div>

                            <strong className='text-[#353535] font-bold leading-[1.85rem]'>R$ 500,00</strong>

                            <h2 className='text-base'>Faux Suede Mini Skirt</h2>

                            <p className='text-[#353535] '>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>

                            <button className='w-full bg-[#FAA500]'>Adicionar</button>
                        </div>
                    </div>

                    <div className='px-4 max-w-[308px]'>
                        <img src="src/assets/product-img-2.png" alt="" />

                        <div className='my-2 flex flex-col gap-2 px-6'>
                            <div className='flex gap-2 '>
                                <span className='w-[27px] h-[27px] bg-[#1C1A19] rounded border-solid border-[#353535] border-[1px]'></span>
                                <span className='w-[27px] h-[27px] bg-[#D84E4B] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#CFC9B0] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#EAE9E5] rounded'></span>
                            </div>

                            <strong className='text-[#353535] font-bold leading-[1.85rem]'>R$ 320,00</strong>

                            <h2 className='text-base'>Ruched Rose Print Mini Skirt</h2>

                            <p className='text-[#353535] '>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>

                            <button className='w-full bg-[#FAA500]'>Adicionar</button>
                        </div>


                    </div>

                    <div className='px-4 max-w-[308px]'>
                        <img src="src/assets/product-img-1.png" alt="" />

                        <div className='my-2 flex flex-col gap-2 px-6'>
                            <div className='flex gap-2 '>
                                <span className='w-[27px] h-[27px] bg-[#DEAC71] rounded border-solid border-[#353535] border-[1px]'></span>
                                <span className='w-[27px] h-[27px] bg-[#D37164] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#6497D3] rounded'></span>
                                <span className='w-[27px] h-[27px] bg-[#3C3B79] rounded'></span>
                            </div>

                            <strong className='text-[#353535] font-bold leading-[1.85rem]'>R$ 500,00</strong>

                            <h2 className='text-base'>Faux Suede Mini Skirt</h2>

                            <p className='text-[#353535] '>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>

                            <button className='w-full bg-[#FAA500]'>Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
