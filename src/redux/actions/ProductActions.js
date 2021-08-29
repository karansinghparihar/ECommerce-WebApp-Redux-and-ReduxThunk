import { ActionTypes } from '../constants/ActionTypes'
import { fakeStoreApi } from '../../apis/fakeStoreApi'

export const fetchProductsAction = () => async (dispatch) => {
    const response = await fakeStoreApi.get('/products')
        .catch((err) => {
            console.log(err)
        })
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}


// export const setProductsAction = (products) => {
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products 
//     }
// }

export const fetchProductAction = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`)
        .catch((err) => {
            console.log(err)
        })
    dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data })
}


// export const selectedProductAction = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCT,
//         payload: product
//     }
// }

export const removeSelectedProductAction = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}