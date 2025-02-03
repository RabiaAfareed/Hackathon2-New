// src/app/productListing/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Label } from '@/components/ui/label';
import { client } from '@/sanity/lib/client';
import { clerkGetUser } from '@/services/userApi';

import { useAtom } from "jotai";
import { searchName } from "@/globalState/globalState";
import { sanityFetch } from "@/services/sanityApi";

// interface Product {
//   src: any;
//   price: number;
//   image: string;
//   tags: string;
//   discountPercentage: number;
//   description: string;
//   name: string;
//   _id: string;
// }
// export default function Productv1() {
//   const [products, setProducts] = useState<Product[]>([]);
//   // Function to fetch products from Sanity
//   const fetchData = async () => {
//     const query = `*[_type == "product"]{
//       price,
//       "image": image.asset->url,
//       rating,
//       ratingCount,
//       "tags": tags[0],
//       discountPercentage,
//       description,
//       name,
//       _id
//     }`;

//     try {
//       const data = await client.fetch(query);
//       console.log('Fetched Data:', data);
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await fetchData();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);


//     useEffect(() => {
//       clerkGetUser()
//     }, []);

export interface Card {
  image: string;
  colors: string;
  productName: string;
  _id: string;
  category: string;
  status: string;
  description: string;
  inventory: number;
  price: number;
}

export default function ProductsCards({
  selectedCategory,
  price,
}: {
  selectedCategory: string | null;
  price: number;
}) {
  const [search] = useAtom(searchName);
  const [data, setData] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true); // Set loading to true before fetching
        setError(null); // Clear any previous errors

        let query = '*[_type == "product"]';

        if (search) {
          query = `*[_type == "product" && productName match "${search}*"]`;
        } else if (price) {
          query = `*[_type == 'product' && price < ${price}]`;
        } else if (selectedCategory) {
          query = `*[_type == 'product' && category == "${selectedCategory}"]`;
        }

        const res = await sanityFetch(query);

        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products. Please try again later."); // Set error message
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    }

    getData();
  }, [selectedCategory, price, search]);

  // Display loading state
  if (isLoading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  // Display error state
  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  // Display fallback UI when no products are available
  if (data.length === 0) {
    return <div className="text-center py-8">No products available.</div>;
  }


    
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

      {/* Main Links */}
      <div className="flex justify-center mt-4 md:mt-6">
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Plant pots", link: "/" },
            { name: "Ceramics", link: "/creamics" },
            { name: "Tables", link: "/productCards" },
            { name: "Chairs", link: "/productCards" },
            { name: "Crockery", link: "/productCards" },
            { name: "Tableware", link: "/productCards" },
            { name: "Cutlery", link: "/" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-base leading-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Image */}
      <div className="flex justify-center mt-8">
        <Image src="/productimg.png" width={1440} height={209} alt="Main Product" />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row mt-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 bg-white md:shadow-md">
          <div className="space-y-6">
            {/* Product Type Section */}
            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Product type</h3>
              <div className="space-y-3">
                {['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <Checkbox.Root id={item.toLowerCase()} className="w-4 h-4 border border-gray-300 rounded">
                      <Checkbox.Indicator className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <Label htmlFor={item.toLowerCase()} className="text-base text-[#2A254B]">
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Price</h3>
              <div className="space-y-3">
                {['0 - 100', '101 - 250', '250 +'].map((priceRange) => (
                  <div key={priceRange} className="flex items-center space-x-3">
                    <Checkbox.Root id={priceRange.replace(/\s/g, '-').toLowerCase()} className="w-4 h-4 border border-gray-300 rounded">
                      <Checkbox.Indicator className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <Label htmlFor={priceRange.replace(/\s/g, '-').toLowerCase()} className="text-base text-[#2A254B]">
                      {priceRange}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Designer Section */}
            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Designer</h3>
              <div className="space-y-3">
                {['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke'].map((designer) => (
                  <div key={designer} className="flex items-center space-x-3">
                    <Checkbox.Root id={designer.toLowerCase().replace(/\s/g, '-')} className="w-4 h-4 border border-gray-300 rounded">
                      <Checkbox.Indicator className="flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
                        </svg>
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <Label htmlFor={designer.toLowerCase().replace(/\s/g, '-')} className="text-base text-[#2A254B]">
                      {designer}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
        {data.map((item: Card, index: number) => {
          return(
            <Link href={`/productCards/productDetail?name=${item.productName}&description=${item.description}
            &price=${item.price}&image=${item.image}`} key={index}>
             
            
              <div className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105" key={index}>
                <Image
                  src={item.image}
                  alt="card Image"
                  width={305}
                  height={375}
                  className="w-full h-[375px] object-cover rounded-md"
                />
                <h4 className="font-bold mt-4 mb-2">{item.productName}</h4>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </>
  );
}
