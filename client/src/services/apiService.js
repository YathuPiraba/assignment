import { apiClient, authApiClient } from "./apiClient";

// Register a new user
export const registerUserAPI = (data) => apiClient.post('/register', data);

// Login a user
export const loginUserAPI = (data) => apiClient.post('/login', data);

// Fetch all posts
export const getPostsAPI = () => apiClient.get('/posts');

// Fetch a specific post by ID
export const getPostByIdAPI = (id) => apiClient.get(`/post/${id}`);

// Fetch user details (authenticated route)
export const fetchUserDetailsAPI = () => authApiClient.get('/user/details');

// Update user details (authenticated route)
export const updateUserAPI = (id, data) => authApiClient.post(`/user/${id}`, data);

// Delete user image (authenticated route)
export const deleteUserImageAPI = (id) => authApiClient.delete(`/user/${id}/deleteImage`);

// Change user password (authenticated route)
export const changePasswordAPI = (id, data) => authApiClient.put(`/user/${id}/password`, data);
