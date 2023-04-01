import axios from "axios";

const API = axios.create({
  baseURL: "https://stackoverflow-server-9k5a.onrender.com",
  // baseURL: "http://localhost:5000",
});


// checking token is valid or not

API.interceptors.request.use((req) => {
  if(localStorage.getItem('Profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
  }

  return req;
})

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
  API.post(`/questions/Ask`, questionData);

export const getAllQuestions = () => API.get("/questions/get");

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });

export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const fetchAllUsers = () => API.get('/user/getAllUsers')

export const UpdateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)

export const AllPosts = () => API.get("/community/posts/AllPosts");

export const UserPosts = (id) => API.get(`/community/posts/get/post/${id}`);