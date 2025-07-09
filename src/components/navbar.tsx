import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center text-xl font-bold text-blue-800 hover:text-blue-700 transition-colors duration-300">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              AtiviDade+
            </motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;