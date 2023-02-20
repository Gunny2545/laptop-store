import http from "../http-common.js";

const getAll = () => {
  return http.get("/contact")
}

const get = (id) => {
  return http.get(`/contact/${id}`)
}

const create = (contact) => {
  return http.post("/contact", contact);
}

const update = (id, contact) => {
  return http.put(`/contact/${id}`, contact)
}

const deleteContact = (id) => {
  return http.delete(`/contact/${id}`)
}

const ContactService = {
  getAll,
  get,
  create,
  update,
  deleteContact
}

export default ContactService 