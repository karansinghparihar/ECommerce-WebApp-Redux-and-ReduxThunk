import { useEffect } from "react"
import ProductComponent from "./ProductComponent"
// import axios from 'axios'
import { useDispatch } from "react-redux"
// import { setProductsAction } from '../redux/actions/ProductActions'
import { fetchProductsAction } from '../redux/actions/ProductActions'

const ProductsListing = () => {

    const dispatch = useDispatch()
    
    // const getAllProducts = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     dispatch(setProductsAction(response.data))
    // }

    useEffect(() => {
        dispatch(fetchProductsAction())
    }, [])

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}
export default ProductsListing