import {create} from "zustand";
import axios from "axios";

const useStore = create((set) => ({
    products: [],
    addProduct: async (newProduct) => {
        try {
            const response = await axios.post('http://localhost:7007/api/dishes/create', newProduct);
            if (!response.data) {
                throw new Error('Ошибка создания нового продукта');
            }
            const createdProduct = response.data;
            set(state => ({
                products: [...state.products, createdProduct]
            }));
        } catch (error) {
            console.error('Ошибка при создании нового продукта:', error.message);
        }
    },
    delProduct: async (idDel) => {
        try {
            const response = await axios.delete(`http://localhost:7007/api/dishes/${idDel}`);
            if (!response.data) {
                throw new Error('Ошибка удаления продукта');
            }
            set(state => ({
                products: state.products.filter(pr => pr.id !== idDel)
            }));
        } catch (error) {
            console.error('Ошибка при удалении продукта:', error.message);
        }
    },
    getProduct: async () => {
        try {
            const response = await axios.get('http://localhost:7007/api/dishes');
            if (!response.data) {
                throw new Error('Ошибка загрузки данных');
            }
            const data = response.data;
            const selectedFields = data.map(({ id, name, category, photo, price }) => ({ id, name, category, photo, price }));
            set({ products: selectedFields });
        } catch (error) {
            console.error('Ошибка при получении данных:', error.message);
        }
    },

    updateProduct: async (updatedProduct) => {
        try {
            
            const response = await axios.put(`http://localhost:7007/api/dishes/${updatedProduct.id}`, updatedProduct);
            if (!response.data) {
                throw new Error('Ошибка обновления продукта');
            }
            const updatedProductData = response.data;
            set(state => ({
                products: state.products.map(product => {
                    if (product.id === updatedProductData.id) {
                        return updatedProductData;
                    }
                    return product;
                })
            }));
        } catch (error) {
            console.error('Ошибка при обновлении продукта:', error.message);
        }
    }
})

)

export default useStore