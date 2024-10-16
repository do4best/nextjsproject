import React from 'react';

function Footer() {
    return (
        <footer className={"bg-black text-gray-400 p-12"}>
            <div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa delectus, doloremque est exercitationem illo ipsum iste nam nemo, praesentium saepe tempora veniam voluptatibus? Blanditiis eos magni omnis quae sint?</span><span>Aperiam, debitis eaque laudantium nam nisi numquam quam quibusdam ratione sit voluptatem! Minima omnis quas veniam. Dicta enim excepturi inventore itaque. Distinctio esse, iste modi numquam velit voluptate voluptatibus voluptatum!</span>
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>14/2 Abkari Road, New Anarkali, Lahore</p>
                    <p>Lahore</p>
                    <p>Email: ravi_scientific@yahoo.com</p>
                    <p>Phone: 0320-9992999 </p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 Ravi Scientific Traders. All rights reserved.</p>

        </footer>
    );
}

export default Footer;