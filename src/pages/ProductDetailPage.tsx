import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { useParams } from 'react-router-dom';
import { getProductById } from '../config/product';
import SimilarProductCard from '../components/elements/SimilarProductCard';
import { getRelatedProducts } from '../config/product';

type ProductDetail = Product & {
    productListRelated: Product[];
};

const ProductDetailPage = () => {
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const { productId } = useParams();

    const fetchProduct = async (id: string) => {
        try {
            // Gọi hàm getProductById để lấy dữ liệu sản phẩm từ API
            const productData: any = await getProductById(id);
            // Bổ sung logic để lấy danh sách sản phẩm liên quan, dưới đây là một ví dụ giả định
            const relatedProducts: Product[] = await getRelatedProducts(id); 
            console.log('Related Products:', relatedProducts);          
            setProduct({
                ...productData.data,
                productListRelated: relatedProducts,
            });
        } catch (error) {            
            setProduct(null); 
        }
    };

    useEffect(() => {
        if (!productId) return;
        // Gọi hàm fetchProduct khi component được tạo hoặc productId thay đổi
        fetchProduct(productId);
    }, [productId]);
    return (
        <div>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className=" items-center text-5xl font-extrabold dark:text-white">
            PRODUCT DETAILS
                <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                    PRO
                </span>
            </h1>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container py-12 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                        <div className="w-1/2 h-[500px]">
                            <img
                                alt="ecommerce"
                                className="w-full h-full rounded border border-gray-200"
                                src={product?.image}
                            />
                        </div>
    
                        <div className="w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                                {product?.title}
                            </h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest pt-3">
                               {/* Ratings: {product?.rating.rate} (
                                    {product?.rating.count} reviews) */}
                            </h2>
                            <p className="leading-relaxed pt-3">
                                {product?.description}
                            </p>
                            {/* QTY INPUT */}
                            <div className="mt-48 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                {/* PRICE & CART BTN */}
                                <div className="flex mt-6">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ${product?.price}
                                    </span>
                                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* SIMILAR PRODUCT */}
            <div>
                <p className="title-font font-medium text-2xl text-gray-900">
                    Similar Products
                </p>
    
                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-7">
                    {Array.isArray(product?.productListRelated) &&
                        product?.productListRelated.map((relatedProducts, index) => (
                            <SimilarProductCard
                                key={index}
                                product={relatedProducts}
                            ></SimilarProductCard>
                        ))}
                </ul>
            </div>
        </div>
    </div>
    
    );
};

export default ProductDetailPage;
