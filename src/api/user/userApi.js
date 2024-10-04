import { publicClient, privateClient } from '../../config/axiosConfig';
import userEndpoints from './userEndpoints';

// API liên quan đến người dùng
const userApi = {
  // API đăng nhập
  signin: async ({ username, password }) => {
    try {
      console.log(username, password);
      const response = await publicClient.post(userEndpoints.signin, { username, password });
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  },

  // API đăng ký
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Signup failed");
    }
  },

  // API lấy thông tin người dùng (yêu cầu xác thực)
  getUserInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to fetch user info");
    }
  },

  // API cập nhật mật khẩu (yêu cầu xác thực)
  updatePassword: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.updatePassword, {
        password,
        newPassword,
        confirmNewPassword,
      });
      return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Password update failed");
    }
  },
};

export default userApi;