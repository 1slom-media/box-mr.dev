import React from 'react'
import ProductMoreHero from './productmore-hero'
import ProductDetails from './product-details'
import { Form } from '../form/index'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {ProductGet} from '../../redux/products/index'
import ProductFactory from './product-factory'
import { useEffect } from 'react'

const ProductMoreComponent = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const productGetState = useSelector((state) => state.product.productGet?.data)
    const filterProduct = productGetState.filter(elem => elem.id == id)
    useEffect(() => {
      dispatch(ProductGet())
    }, [])
    return (
        <>
            <ProductMoreHero filterProduct={filterProduct} />
            <ProductDetails />
            <ProductFactory />
            <Form />
        </>
    )
}

export default ProductMoreComponent