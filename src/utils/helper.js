import axios from '../service/axiosConfig'; 

export function formatPrice(price) {
    if (price >= 1000) {
      return (price / 1000).toFixed(0) + 'K';
    }
    return price;
}

// Hàm yêu cầu POST để like/unlike item
export const toggleLike = async (id) => {
  try {
    const response = await axios.post(`/api/bar/like/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error toggling like:', error);
    throw error;
  }
};