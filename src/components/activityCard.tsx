import { Activity } from '../types/activities';
import { motion } from 'framer-motion';

interface ActivityCardProps {
  activity: Activity;
  className?: string; 
}

const ActivityCard = ({ activity, className = "" }: ActivityCardProps) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full ${className}`}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.titulo}</h3>
        <div className="flex items-center text-gray-600 mb-1">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="capitalize">{activity.categoria}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{activity.local}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;