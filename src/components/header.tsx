import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative h-96 flex items-center justify-center bg-blue-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center px-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Atividades para a Melhor Idade</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Descubra eventos e atividades especialmente planejados para o público da terceira idade.
          </p>
          <motion.a
            href="#all-activities"
            className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Atividades
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;