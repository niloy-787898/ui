import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProduct = async () => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

const addToWishList = async (productId) => {
  const response = await axios.put(`${base_url}product/wishlist`, { productId }, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProduct,
  addToWishList,
};
