import Heading from '@/components/Heading'
import Logos from '@/components/Logos'
import Products from '@/components/Products'
import ProductsDescriptions from '@/components/ProductsDescriptions'
import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'

const ProductsPage = () => {
    return (
        <main>
            <Heading heading='Product Details' />
            <Products />
            <ProductsDescriptions />
            <RelatedProducts />
            <Logos />
        </main>
    )
}

export default ProductsPage