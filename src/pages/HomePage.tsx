import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../typings/project';
import ProductCard from '../components/elements/productCard';

const HomePage = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const { data: products } = await axios.get(
            'https://fakestoreapi.com/products'
        );
        setProductList(products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {productList.map((product, index) => (
                    <ProductCard key={index} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
