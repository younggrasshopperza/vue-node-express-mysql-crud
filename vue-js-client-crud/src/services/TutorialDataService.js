import api from "../api";
export default {
  getAll() {
    return api.get("/tutorials");
  },
  get(id) {
    return api.get(`/tutorials/${id}`);
  },
  create(data) {
    return api.post("/tutorials", data);
  },
  update(id, data) {
    return api.put(`/tutorials/${id}`, data);
  },
  delete(id) {
    return api.delete(`/tutorials/${id}`);
  },
  deleteAll() {
    return api.delete(`/tutorials`);
  },
  findByTitle(title) {
    return api.get(`/tutorials?title=${title}`);
  }
}