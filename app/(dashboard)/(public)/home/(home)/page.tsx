import Hero from "../_components/hero";
import Pricing from "../_components/pricing";

export default function Welcome() {
  return (
   <div className="*:mb-5 mt-[100px]  max-w-[100vw] overflow-hidden"> 
      <div>
        <Hero/>
      </div>
      <div className="">
        <Pricing/>
      </div>
  </div>
  );
}
