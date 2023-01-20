import apiInstance from "../services/api.js";

// PRODUCTS

const getProducts = async () => {
  const resp = await apiInstance.get("/products");
  return resp.data.products;
};

const getProductById = async () => {};

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
  searchProductsByCategory,
  filterProducts,
  getCategories,
  getProductsByLastCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
