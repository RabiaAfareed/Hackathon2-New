
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


export default async function CeramicsCollection() {

   
 const res = await client.fetch(
  `*[_type == 'Creamics'][0]{
    'creamicsHeading': creamicsHeading,
    'cards': cards[] {
      'cardCremImg': cardCremImg.asset->url,
      'cardCremHeading': cardCremHeading,
      'cardCremPrice': cardCremPrice} }`);

  return (
    <section className="max-w-[1440px] min-h-[761px] mx-auto px-4 md:px-8 py-16">
      <h2 className="text-4xl md:text-5xl font-light mb-12 px-4">
       {res.creamicsHeading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {(res.cards).map((item: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div className={`aspect-square mb-6 ${item.background || ""}`}>
              <Link href="/productCards">
              <Image

                src={res.cards[index].cardCremImg}
                alt={item.name}
                height={400}
                width={400}
                className="w-full h-full object-cover transition-transform duration-300
                 ease-in-out hover:scale-105 hover:translate-y-1"
               
              />
              </Link>
            </div>
            <h3 className="text-xl font-normal mb-2">
            {res.cards[index].cardCremHeading}
            </h3>
            <p className="text-lg text-gray-600">
              £{res.cards[index].cardCremPrice}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white text-black hover:bg-gray-500 border border-gray-200 rounded-sm transition-colors">
          View collection
        </button>
      </div>
    </section>
  );
}