import apiInstance from '../services/api.js';

// PRODUCTS

const getProducts = async () => {
}

const getProductById = async (id) => {
    const resp = await apiInstance.get(`/products/${id}`)
    console.log(resp.data)
    return resp.data;
    
}

const getCategories = async () => {
}

const searchProductsByCategory = async () => {
}

const filterProducts = async () => {
}

const getProductsByLastCategory = async () => {
}
const addProduct = async () => {
}

const updateProduct = async () => {
}

const deleteProduct = async () => {
}

export default {
getProducts,
getProductById,
searchProductsByCategory,
filterProducts,
getCategories,
getProductsByLastCategory,
addProduct,
updateProduct,
deleteProduct,
}