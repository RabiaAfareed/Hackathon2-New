'use client'

import React from 'react';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    Snipcart: any;
  }
}

export default function ProductCardDetail() {
  const searchParams = useSearchParams();
  const heading = searchParams.get('heading');
  const subHeading = searchParams.get('subHeading');
  const price = searchParams.get('price');
  const src = searchParams.get('src');

  // Function to add to cart
  const handleAddToCart = () => {
    window.Snipcart.api.cart.items.add({
      id: heading,
      name: heading,
      price: price,
      url: `/productListing/ProductDetail?heading=${heading}&subHeading=${subHeading}&price=${price}`,
      description: subHeading,
      image: src,
    });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-black text-3xl font-bold flex items-center space-x-4">
            <div className="relative w-8 h-8">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <h1 className="text-center">
              <Link href="/">Avion</Link>
            </h1>
            <div className="relative w-8 h-8">
              <ShoppingCart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative w-8 h-8">
              <CircleUserRound className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 p-6 bg-white md:shadow-md">
            {/* Filters */}
            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Product Filters</h3>
              {/* Add filter components here */}
            </div>
          </aside>

          {/* Product Details */}
          <main className="flex-1 p-6">
            {src && (
              <Image
                src={src}
                alt={heading || 'Product image'}
                width={600}
                height={400}
                className="rounded-md object-cover"
              />
            )}
            <h1 className="text-3xl font-bold mt-4">{heading}</h1>
            <p className="text-xl text-gray-600 mt-2">{price}</p>
            
            <Link href="/shopingBasket">
            <button 
              className="mt-6 bg-black text-white px-6 py-2 rounded shadow"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            </Link>
          </main>
        </div>
      </div>
    </>
  );
}

