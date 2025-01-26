import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { FaSkype } from "react-icons/fa";
import { MdOutlinePinInvoke } from "react-icons/md";




function Footer() {
  return (
    <footer className="bg-[#2A224C] text-white py-10 mt-[65px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Menu Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our company</h4>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Join Mailing List Section */}
          <div className=''>
            <h4 className="font-semibold text-lg mb-4">Join our mailing list</h4>
            <form className="flex items-center bg-[#3A345B] rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent px-4 py-2 w-[503px] h-[56px] text-sm text-gray-300 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#2A224C] font-semibold py-2 px-4 w-[118px] h-[56px] text-[16px] leading-[24px]"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-500" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300"> <Linkedin/></Link>
            <Link href="#" className="hover:text-gray-300"> <Facebook/></Link>
            <Link href="#" className="hover:text-gray-300"><Instagram /></Link>
            <Link href="#" className="hover:text-gray-300"><FaSkype size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-300"> <Twitter /></Link>
            <Link href="#" className="hover:text-gray-300">
            <MdOutlinePinInvoke size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;