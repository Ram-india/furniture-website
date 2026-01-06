import api from "./axios";

// get all products
export const getProducts = () => api.get("/getProducts");

// get product categories
export const getProductCategories = () => api.get("/getProductCategory");

// get product Details by ID
export const getProductsDetails = (product_id) => {
    const formData = new FormData();
    formData.append("product_id", product_id);

    return api.post("/getProductDetails", formData);    
};

