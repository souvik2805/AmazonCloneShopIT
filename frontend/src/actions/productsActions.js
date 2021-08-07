import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

import axios from "axios";

export const getProducts = () => async (disptach) => {
  try {
    disptach({ type: ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/v1/products");
    disptach({ type: ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    disptach({ type: ALL_PRODUCTS_FAIL, payload: error.response.data.message });
  }
};

// Clear Errors

export const clearErrors = () => async (disptach) => {
  disptach({ type: CLEAR_ERRORS });
};
