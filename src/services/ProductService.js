import http from "../http-common.js";

const getAll = () => {
  return http.get("/product")
}

const get = (id) => {
  return http.get(`/product/${id}`)
}

const create = (product) => {
  return http.post("/product", product);
}

const addReview = (id, review) => {
  console.log(`/product/${id}`);
  console.log(review)
  return http.patch(`/product/${id}`, review)
}

const ProductService = {
  getAll,
  get,
  create,
  addReview
}

export default ProductService 