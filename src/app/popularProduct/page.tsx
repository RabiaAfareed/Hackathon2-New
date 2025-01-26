import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default async function PopularProducts() {
  const res = await client.fetch(
    `*[_type == 'PopularProducts'][0]{
      'PopularProductsHeading': PopularProductsHeading,
      'cards': cards[] {
        'cardPopularProductsImg': cardPopularProductsImg.asset->url,
        'cardPopularProductsHeading': cardPopularProductsHeading,
        'cardPopularProductsPrice': cardPopularProductsPrice
      }
    }`
  );

  return (
    <section className="w-full max-w-[1440px] min-h-[744px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
      <h2 className="text-3xl sm:text-4xl font-light mb-8 sm:mb-12">
        {res.PopularProductsHeading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {res.cards.map((product: any, index: number) => (
          <div key={index} className="cursor-pointer">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
              <Link href="/productCards">
                <Image
                  src={product.cardPopularProductsImg}
                  alt={product.cardPopularProductsHeading || 'Product Image'}
                  height={400}
                  width={600}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                />
              </Link>
            </div>

            <h3 className="text-lg sm:text-xl mb-2">
              {product.cardPopularProductsHeading}
            </h3>
            <p className="text-base sm:text-lg">
              £{product.cardPopularProductsPrice}
            </p>
          </div>
        ))}
      </div>

      <button
        className="px-8 py-3 bg-white text-black hover:bg-gray-500 border border-gray-200 rounded-sm transition-colors"
      >
        View collection
      </button>
    </section>
  );
}
