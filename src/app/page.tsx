"use client"
import Header from './component/Header';
import ProductCard from './component/Productcard';
import Footer from './component/Footer';
interface Product {
    image: string;
    name: string;
    price: string;
}

const ProductsPage: React.FC = () => {
    const products: Product[] = [
        { image: "/choclate cake.jpg", name: "Chocolate Cake", price: "$10.00" },
        { image: "/vanila.png", name: "Vanilla Cake", price: "$8.50" },
        { image: "/cup.png", name: "Cupcakes (6 pack)", price: "$6.00" },
        { image: "/cheescake.jpg", name: "chees cake", price: "$4.50" },
        { image: "/redvalvet.jpg", name: "Cookies (12 pack)", price: "$5.50" },
        { image: "/COOKIESS.jpg", name: "Cookies (12 pack)", price: "$5.50" },
    ];

    return (
        <div>
            <Header />
            <h2 className="text-center text-4xl font-extrabold my-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {products.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        image={product.image} 
                        name={product.name} 
                        price={product.price} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ProductsPage;

