import React from 'react'
import { MdEmail } from "react-icons/md";


function Newslatter() {
    return (
        <div>
            <div class="bg-primary dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md sm:text-center">
                        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                        <p class="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div class="relative w-full">
                                    <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <MdEmail />
                                    </div>
                                    <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newslatter
