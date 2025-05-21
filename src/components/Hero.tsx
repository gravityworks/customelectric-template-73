
import { Button } from "./ui/button";

const Hero = () => {
  return <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/749e0679-b20d-41da-ae3d-4cdd48562e86.png')"
    }}>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-display text-white mb-8 leading-tight max-w-3xl mx-auto">Quality you can plug into.</h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">Licensed and insured electrical services for Lansing and Mid-Michigan homes and businesses.</p>
        <div className="max-w-xs mx-auto">
          <a href="#services">
            <Button size="lg" className="w-full text-lg py-6">View Our Services</Button>
          </a>
        </div>
      </div>
    </div>;
};
export default Hero;
