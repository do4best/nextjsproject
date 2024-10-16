import React from 'react';
import {  IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,} from "@tabler/icons-react";
import {Meteors} from "@/app/ui/meteors";



function Contact() {
    return (
        <div className="p-12 bg-gray-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className={"mt-20 text-center"}>
                    <h2 className="text-8xl text-white font-bold tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-base leading-8 font-extrabold tracking-tight text-gray-600 sm:text-xl">We
                        are here to help with any question about our product. Reach out
                        so we may assist you regarding our products. Please feel free to contact us </p>


                </div>

                <form className="w-90 mx-auto mt-3 ">

                    <div className="mb-5  ">

                        <input type="text" id="username-success"
                               className="  bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                               placeholder="Enter Your Email"/>

                        <textarea id="message" rows="12"
                                  className="mt-[30px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Leave a comment..."></textarea>


                        <div className="flex items-center mt-3 h-5">

                            <input id="terms" type="checkbox" value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                   required/>
                            <label htmlFor="terms"
                                   className=" mt-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                                agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms
                                    and conditions</a></label>
                        </div>
                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Send Message
                        </button>

                    </div>
                    <Meteors number={20}/>
                </form>

            </div>

        </div>
    );
}

export default Contact;