import "./styles/normalize.css";
import "./styles/index.css";

import productsApi from "./requests/products";
import usersApi from "./requests/users";
import postsApi from "./requests/posts";

import renderService from "./services/markupService";

// Завдання 1
const renderProducts = async () => {
  const result = await productsApi.getProducts();

  renderService.renderProductsMarkup(result);
  console.log(result);
};

// renderProducts();

// Завдання 2
// const form = document.querySelector('#singleProductForm');
// const renderProductById = async (event) => {
//     event.preventDefault()
//     const id = event.target.elements[0].value;
//     const product = await productsApi.getProductById(id);
//     renderService.renderProductByIdMarkup(product);

//     console.log(id);

// }

// form.addEventListener('submit', renderProductById);

// Завдання 3
const form = document.querySelector("#form");
form.addEventListener("submit", createProduct);

function createProduct(event) {
  event.preventDefault();
  const { description, price, title } = event.target.elements;
  const product = {
    description: description.value,
    price: price.value,
    title: title.value,
  };
  productsApi.createProduct(product);
}

// Завдання 4
const deleteForm = document.querySelector("#deletionProductForm");
deleteForm.addEventListener("submit", onDelete);

async function onDelete(event) {
  event.preventDefault();
  const { deletionId } = event.target.elements;
  const id = deletionId.value;
  console.log(id);
  const response = await productsApi.deleteProductById(id);
  console.log(response);
  if (!response.isDeleted) {
    alert("error");
  } else {
    alert("sucsess");
  }
}

// Завдання 5

// productsApi.searchProductsByCategory('smartphones');
// productsApi.filterProducts(5, 10, ['title', 'price']);
// productsApi.getCategories();
// productsApi.getProductsByLastCategory();
// productsApi.addProduct();
// productsApi.updateProduct(10);
// productsApi.deleteProduct(1);

// usersApi.getUsers();
// usersApi.getUserById(10);
// usersApi.getUsersByName('Med');
// usersApi.getCartsByUserId(1);
// usersApi.getPostsByUserId(1);
// usersApi.getTodosByUserId(1);
// usersApi.addUser();

// postsApi.getPosts();
// postsApi.getPostById(10);
// postsApi.getPostByContentKey('dreams');
// postsApi.getPostComments(5);
// postsApi.addPost();
// postsApi.updatePost(1);
// postsApi.deletePost(15);
