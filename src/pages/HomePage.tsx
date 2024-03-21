import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { getProductList } from '../config/product';
import { ProductCard } from '../components/elements/productCard';

const HomePage = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const data: any = await getProductList()
        setProductList(data.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1 className=" items-center text-5xl font-extrabold dark:text-white">
                Show Sản Phẩm
                <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                    PRO
                </span>
            </h1>
            <div className="grid grid-cols-4 gap-5 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">    
                {productList.map((product, index) => (
                    <ProductCard key={index} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
