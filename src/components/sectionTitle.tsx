import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2 
      className="text-3xl font-bold text-center text-gray-800 mb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <motion.div 
        className="w-16 h-1 bg-blue-500 mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.h2>
  );
};

export default SectionTitle;