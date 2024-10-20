const Footer: React.FC = () => {
    return (
        <footer className="bg-yellow-400 text-black py-6">
            <img src="bg.jpg" alt="cakes" height={1300} width={1600}  className=" rounded-3xl"/>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Social Media Links */}
                <div className="mb-2 md:mb-0 ">
                    <p className="text-lg font-bold from-neutral-800 mb-2">Follow Us</p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500  font-extrabold ">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500  font-extrabold">
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} My Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


