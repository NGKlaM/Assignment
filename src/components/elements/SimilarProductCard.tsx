import { Link } from 'react-router-dom';
import { Product } from '../../typings/project';

type ProductCardProps = {
    product: Product;
};

const SimilarProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link
            to={`/products/${product.id}`}
            className="group block overflow-hidden"
        >
            <li>
                <img
                    src={product?.image}
                    alt=""
                    className="w-4/5 object-cover transition duration-500 group-hover:scale-105 "
                />
                <div className="relative pt-3 bg-white">
                    <h3 className="text-sm font-medium text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {product?.title}
                    </h3>
                    <p className="mt-2">
                        <span className="tracking-wider text-sm text-gray-900">
                            ${product?.price}
                        </span>
                    </p>
                </div>
            </li>
        </Link>
    );
};

export default SimilarProductCard;
