import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Spreading Smiles</h3>
            <p className="text-gray-300">
              Making the world a better place, one smile at a time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaEnvelope />
                <span>contact@spreadingsmiles.org</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                <span>99999999990</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/spreading.__smiles?igsh=emhxMTJqenN4czIy" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Spreading Smiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}