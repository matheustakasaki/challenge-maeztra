import React from 'react'
import TipItem from './TipItem';

export default function Tips() {

    const tips = [
        {
            imageUrl: 'src/assets/world.svg',
            heading: 'Produtos Importados',
            subHeading: 'Produto de Alta Qualidade',
        },
        {
            imageUrl: 'src/assets/garage.svg',
            heading: 'Estoque no Brasil',
            subHeading: 'Produtos mais perto de você!',
        },
        {
            imageUrl: 'src/assets/change.svg',
            heading: 'Trocas Garantidas',
            subHeading: 'Trocas em até 48 horas, vejas as regras',
        },
        {
            imageUrl: 'src/assets/discount.svg',
            heading: 'Ganhe 5% off',
            subHeading: 'Pagando à vista no Cartão',
        },
        {
            imageUrl: 'src/assets/truck.svg',
            heading: 'Frete Grátis',
            subHeading: 'Em compras acima de R$ 499,00',
        }
    ]


    return (

        <section className='my-6 '>
            <h2 className='text-[#353535] font-bold text-base text-center'>Porque comprar na Maeztra?</h2>
            <section className='overflow-x-auto '>

                <div className='flex gap-4 flex-nowrap w-[1598px] h-[64px] my-[21px] mx-8'>
                    <TipItem
                        tips={tips}
                    />
                </div>

            </section>
        </section>


    )
}
