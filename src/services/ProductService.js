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

const ProductService = {
  getAll,
  get,
  create
}

export default ProductService 