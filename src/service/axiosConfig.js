import axios from 'axios';

// Tạo một instance của axios với các cấu hình mặc định
const axiosConfig = axios.create({
  baseURL: 'http://localhost:8000/api/', // URL cơ sở cho tất cả các yêu cầu
  headers: {
    'Content-Type': 'application/json', // Header mặc định
  },
});

// Interceptor để thêm token vào mỗi yêu cầu
axiosConfig.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Xuất apiClient để sử dụng trong các component khác
export default axiosConfig;