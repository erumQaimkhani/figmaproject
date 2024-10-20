


import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-yellow-400 p-4 text-black">
            {/* Navigation Bar */}
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo or Home Link */}
                <div className="text-2xl font-bold">
                    <Link href="/"  className='text-center'>
                            
                            
            <h2 className="text-center text-4xl font-extrabold my-8">My Bakery</h2>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/products" className="hover:text-yellow-500">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart" className="hover:text-yellow-500">
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Image Below Navbar */}
            <div className="mt-4 text-center">
                <Image 
                    src="/hyderabadicakes.png"  // Ensure the image file exists in the public folder or provide a URL
                    alt="Hyderabadi Cakes"
                    width={1500}  // Adjust the width to fit your design
                    height={1200} // Adjust the height accordingly
                    className=" mx-auto"
                />
            </div>
        </header>
    );
};

export default Header;
