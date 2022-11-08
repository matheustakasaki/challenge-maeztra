import React from 'react'


export default function ProductSliderItem({ products }) {
    return (
        <>
            <div>ProductSliderItem</div>

            {products.map((product, index) => {

                <div key={index}>
                    <img src={product.productImage} alt="" />
                    <p>{product.name}</p>
                </div>
            })}
        </>
    )
}
