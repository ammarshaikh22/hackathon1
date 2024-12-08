import Heading from '@/components/Heading'
import Products from '@/components/Products'
import ProductsDescriptions from '@/components/ProductsDescriptions'
import React from 'react'

const ProductsPage = () => {
    return (
        <main>
            <Heading heading='Product Details' />
            <Products />
            <ProductsDescriptions />
        </main>
    )
}

export default ProductsPage