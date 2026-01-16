import logoImage from "figma:asset/0e01946f0f740efe765be58294ae64310055e4aa.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-fr">
          {/* Logo & Brand */}
          <div className="md:col-span-2 flex flex-col">
            <ImageWithFallback 
              src={logoImage}
              alt="Hands on Bands Logo"
              className="w-64 h-auto mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Professional performance therapy for touring musicians across the UK. 
              Keeping the music alive, one treatment at a time.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0">
                <span>f</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0">
                <span>t</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0">
                <span>in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white mb-4">QUICK LINKS</h4>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Treatment</a></li>
              <li><a href="#emergency" className="hover:text-white transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white mb-4">CONTACT INFO</h4>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex flex-col">
                <div className="text-white">Contact Us</div>
                <a href="tel:+447824388682" className="hover:text-white transition-colors">+44 (0) 7824388682</a>
              </div>
              <div className="flex flex-col">
                <div className="text-white">Booking Line</div>
                <a href="tel:+447824388682" className="hover:text-white transition-colors">+44 (0) 7824388682</a>
              </div>
              <div className="flex flex-col">
                <div className="text-white">Email</div>
                <a href="mailto:contact@handsonbands.com" className="hover:text-white transition-colors">contact@handsonbands.com</a>
              </div>
              <div className="flex flex-col">
                <div className="text-white">Coverage</div>
                <div>Nationwide UK and Ireland</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2024 Hands on Bands. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}