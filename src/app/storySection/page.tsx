import Image from "next/image";
import Link from "next/link";
export default function BrandStorySection() {
    return (
      <section className="w-full max-w-[1440px]  mx-auto">
        <div className=" md:grid-cols-2 h-full grid grid-rows-1">
          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 md:p-12 lg:p-24 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                When we started Avion, the idea was simple. Make high quality furniture 
                affordable and available for the mass market.
              </p>
              
              <p className="leading-relaxed">
                Handmade, and lovingly crafted furniture and homeware is what we live, 
                breathe and design so our Chelsea boutique become the hotbed for the 
                London interior design community.
              </p>
            </div>
  
            <div>
              <button className="mt-4 px-8 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-sm transition-colors duration-200">
                Get in touch
              </button>
            </div>
          </div>
  
          {/* Image Section */}

          <div className="relative h-full bg-[#E9E2D9] overflow-hidden">
            <Image
             src= {"/Image.png"}
             alt="product" height={503}width={720}
              className="object-cover w-full h-full"/>

         <Link href="/productListing">
         <div className="relative h-full bg-[#E9E2D9] overflow-hidden">
          </div>
         </Link>
        </div>
        </div>
      
      </section>
    )
  }
  
  