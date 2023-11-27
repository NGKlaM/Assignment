import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../typings/project';
import { useParams } from 'react-router-dom';
import SimilarProductCard from '../components/elements/SimilarProductCard';

type ProductDetail = Product & {
    productListRelated: Product[];
};

const ProductDetailPage = () => {
    const [product, setProduct] = useState<ProductDetail | null>(null);

    const { productId } = useParams();
    const fetchProduct = async (id: number) => {
        try {
            // const [{ data: proRes }, { data: proListRes }] = await Promise.all([
            //     axios.get(`https://fakestoreapi.com/products/${id}`),
            //     axios.get(`https://fakestoreapi.com/products`),
            // ]);

            const { data: product } = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );
            const { data: productListRelated } = await axios.get(
                `https://fakestoreapi.com/products/category/${product?.category}`
            );

            setProduct({
                ...product,
                productListRelated: productListRelated.filter(
                    (similarProduct: Product) =>
                        similarProduct.id !== product.id
                ),
            });
            // console.log({ product, productListRelated });
        } catch (error) {
            console.log(error);
        }
        // setProduct(data);
    };

    useEffect(() => {
        if (!productId) return;
        fetchProduct(Number(productId));
    }, [productId]);

    // const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
    // const fetchSimilarProducts = async (product: Product) => {
    //     const { data } = await axios.get(
    //         `https://fakestoreapi.com/products/category/${product?.category}`
    //     );

    //     const filteredData = data.filter(
    //         (similarProduct: Product) => similarProduct.id !== product.id
    //     );
    //     setSimilarProducts(filteredData);
    // };

    // useEffect(() => {
    //     fetchSimilarProducts(product as Product);
    // }, [product]);

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {/* PRODUCT DETAILS */}
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
                                    Ratings: {product?.rating.rate} (
                                    {product?.rating.count} reviews)
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
                        {product?.productListRelated.map((product, index) => (
                            <SimilarProductCard
                                key={index}
                                product={product}
                            ></SimilarProductCard>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
