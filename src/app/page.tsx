
import Header from "./header/page";
import HeroSection from "./heroSection/page";
import BrandDifferent from "./brand/page";
import Creamics from "./creamics/page";
import Email from "./email/page";
import PopularProducts from "./popularProduct/page";
import BrandStorySection from "./storySection/page";



export default function Home() {
  return (
   <div className="lg:ml-[80px]">
     <Header/>
    {/* <HeroSection/> */}
    <BrandDifferent/>
    <Creamics/>
    {/* <PopularProducts/> */}
    <Email/>
    <BrandStorySection/>
   </div>
  );
}
