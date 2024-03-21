import { AxiosResponse } from "axios";
import axiosConfig from './axios'
import { Product } from "../types/Product";

const getProductList = async (): Promise<Product[]> => {
    try {
        const response: AxiosResponse<Product[]> = await axiosConfig.get('/api/products');
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getProductById = async (id: string): Promise<Product | null> => {
    try {
        const response: AxiosResponse<Product> = await axiosConfig.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        return null;
    }
};

const getRelatedProducts = async (id: string): Promise<Product[]> => {
    try {
        const response = await axiosConfig.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        return []; 
    }
};

const createProduct = async (newProduct: Product): Promise<Product> => {
    try {
        const response: AxiosResponse<Product> = await axiosConfig.post('/api/products', newProduct);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (id: string, updatedProduct: Product): Promise<Product | null> => {
    try {
        const response: AxiosResponse<Product> = await axiosConfig.put(`/products/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        return null;
    }
};

const deleteProduct = async (id: string): Promise<void> => {
    try {
        await axiosConfig.delete(`/api/products/${id}`);
    } catch (error) {
        throw error;
    }
};

export {getRelatedProducts, getProductList, createProduct, deleteProduct, updateProduct, getProductById}