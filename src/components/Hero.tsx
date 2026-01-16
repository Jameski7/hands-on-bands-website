import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/0e01946f0f740efe765be58294ae64310055e4aa.png";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden" aria-label="Hero section">
      {/* Background texture/pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-32 right-16 w-3 h-16 bg-white -rotate-45 opacity-15 hidden md:block"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full py-8">
        {/* Logo */}
        <div className="mb-1 w-full">
          <ImageWithFallback 
            src={logoImage}
            alt="Hands on Bands Logo - Mobile Therapy for Musicians"
            className="mx-auto w-full max-w-lg h-auto"
            loading="eager"
          />
        </div>
        
        {/* Tagline */}
        <h1 className="text-white mb-6 leading-tight px-2">
          <span className="block text-xl sm:text-2xl md:text-3xl">KEEP THE MUSIC PLAYING</span>
          <span className="block text-gray-300 text-base sm:text-lg md:text-xl mt-2">Professional therapy services for touring musicians across the UK & Ireland</span>
        </h1>
        
        {/* CTA Buttons - Enhanced for mobile touch */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-8 w-full sm:w-auto px-4">
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 px-8 py-6 sm:py-4 text-base sm:text-lg min-h-[48px] touch-manipulation flex-1 sm:flex-initial"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Book treatment - scroll to contact form"
          >
            BOOK TREATMENT
          </Button>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 px-8 py-6 sm:py-4 text-base sm:text-lg min-h-[48px] touch-manipulation flex-1 sm:flex-initial"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Learn more about our services"
          >
            LEARN MORE
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-600 w-full">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-white mb-2 text-3xl sm:text-4xl">500+</div>
            <div className="text-gray-400 text-sm sm:text-base">Musicians Treated</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-white mb-2 text-3xl sm:text-4xl">100+</div>
            <div className="text-gray-400 text-sm sm:text-base">UK Venues Covered</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-white mb-2 text-2xl sm:text-3xl">Emergency</div>
            <div className="text-gray-400 text-sm sm:text-base">Last-Minute Support</div>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-24 h-px bg-gray-600 mx-auto mt-8 sm:mt-12"></div>

        {/* Coverage Areas */}
        <div className="mt-8 sm:mt-12 mb-12 sm:mb-16 w-full">
          <div className="text-gray-300 mb-4 tracking-wide text-sm sm:text-base">KEY AREAS COVERED</div>
          <div className="max-w-2xl mx-auto flex flex-col gap-3 px-4">
            {/* First row - 2 cities */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["London", "Manchester"].map((city, index) => (
                <div key={index} className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white mr-3 rotate-45 flex-shrink-0"></div>
                  {city}
                </div>
              ))}
            </div>
            {/* Second row - 3 cities */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["Edinburgh", "Glasgow", "Aberdeen"].map((city, index) => (
                <div key={index} className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white mr-3 rotate-45 flex-shrink-0"></div>
                  {city}
                </div>
              ))}
            </div>
            {/* Third row - 2 cities */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["Belfast", "Dublin"].map((city, index) => (
                <div key={index} className="flex items-center text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white mr-3 rotate-45 flex-shrink-0"></div>
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}