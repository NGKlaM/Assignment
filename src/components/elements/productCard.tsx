import { Link } from "react-router-dom";
import { Product } from "../../typings/project";

type ProductCardProps = {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return(
        <Link
        to={`/products/${product.id}`}
        className="group block overflow-hidden"
    >
        <div className="max-w-2xl mx-auto h-full">
            <div className="shadow-md border-[3px] rounded-xl max-w-sm h-full flex flex-col justify-between">
                <div>
                    <img
                        className="rounded-t-lg p-8 w-[300px] h-[350px]"
                        src={product.image}
                        alt="product image"
                    />

                    <h3 className="px-5 text-gray-900 font-semibold text-lg tracking-tight">
                        {product.title}
                    </h3>
                </div>

                <div>
                    <div className="px-5 pb-5">
                        <div className="flex items-center mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Ratings: {product.rating.rate} (
                                {product.rating.count} reviews)
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            <a
                                href="#"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}

export default ProductCard