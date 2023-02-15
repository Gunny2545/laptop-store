import http from '../http-common1'

const getAll = () => {
    return http.get("/product")
  }
  
  const get = (id) => {
    return http.get(`/product/${id}`)
  }
  
  const create = (product) => {
    return http.post("/product", product);
  }
  
  const update = (id, product) => {
    return http.put(`/product/${id}`, product)
  }
  
  const deleteProduct = (id) => {
    return http.delete(`/product/${id}`)
  }
  
  const addReview = (id, review) => {
    console.log(`/product/${id}`);
    console.log(review)
    return http.patch(`/product/${id}`, review)
  }
const MouseService = {
    getAll,
    get,
    create,
    addReview,
    update,
    deleteProduct
  }

export default MouseService