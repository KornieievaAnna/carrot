import apiInstance from "../services/api.js";

// PRODUCTS

const getProducts = async () => {
  const resp = await apiInstance.get("/products");
  return resp.data.products;
};


const getProductById = async (id) => {
    const resp = await apiInstance.get(`/products/${id}`)
    console.log(resp.data)
    return resp.data;
    
}
const createProduct = async (product) => { 
    const resp = await apiInstance.post('/products/add', product);
    console.log(resp)
};
const getCategories = async () => {};

const searchProductsByCategory = async () => {};

const filterProducts = async () => {};

const getProductsByLastCategory = async () => {};
const addProduct = async () => {};

const updateProduct = async () => {};

const deleteProduct = async () => {};

export default {
  getProducts,
    getProductById,
  createProduct,
  searchProductsByCategory,
  filterProducts,
  getCategories,
  getProductsByLastCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
