import http from "../http-common";

const getAll = () => {
  return http.get("/post");
};

const get = profileusername => {
  return http.get(`/post/${profileusername}`);
};

const create = data => {
  return http.post("/post", data);
};



const PostService = {
  getAll,
  get,
  create
};

export default PostService;



// const update = (id, data) => {
//   return http.put(`/post/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/post/${id}`);
// };
