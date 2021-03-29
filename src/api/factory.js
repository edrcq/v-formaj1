export default function repo_factory($axios, resource = '/posts') {
  return {
    get() {
      return $axios.get(`${resource}`);
    },

    getById(id) {
        console.log({ id })
      return $axios.get(`${resource}/${id}`);
    },

    create(payload) {
      return $axios.post(`${resource}`, payload);
    },

    update(payload, id) {
      return $axios.put(`${resource}/${id}`, payload);
    },

    delete(id) {
      return $axios.delete(`${resource}/${id}`);
    },
  };
}
