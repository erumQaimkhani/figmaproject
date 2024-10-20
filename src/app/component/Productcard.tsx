interface ProductCardProps {
    image: string;
    name: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
    return (
        <div className="border border-orange-600 rounded-lg overflow-hidden shadow-lg bg-gray-300">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{price}</p>
                <button className="bg-orange-500 hover:bg-gray-400 text-white py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
