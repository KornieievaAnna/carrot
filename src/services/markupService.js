const renderProductsMarkup = (products) => {
  const markup = products
    .map(
      ({ title, description }) => `<li>
  <h2>${title}</h2>
  <p>${description}</p>
</li>`
    )
    .join("");

  const list = document.querySelector("#allProducts");
  list.insertAdjacentHTML("beforeend", markup);
};

const renderProductByIdMarkup = ({ title, description }) => {
  const markup = `<h2>${title}</h2><p>${description}</p>`;

  const div = document.querySelector("#singleProduct");
  div.innerHTML = markup;
};

export default {
  renderProductsMarkup,
  renderProductByIdMarkup,
};
