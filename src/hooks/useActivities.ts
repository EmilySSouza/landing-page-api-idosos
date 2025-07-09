import { useState, useEffect } from 'react';
import { Activity, Category } from '../types/activities';

const API_URL = 'https://apiidosos.onrender.com';

export const useActivities = () => {
  const [allActivities, setAllActivities] = useState<Activity[]>([]);
  const [healthActivities, setHealthActivities] = useState<Activity[]>([]);
  const [spActivities, setSpActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const allRes = await fetch(`${API_URL}/eventos`);
        const allData = await allRes.json();
        setAllActivities(allData);

        const healthRes = await fetch(`${API_URL}/eventos/categoria/saúde`);
        const healthData = await healthRes.json();
        setHealthActivities(healthData);

        const spRes = await fetch(`${API_URL}/eventos/local/SP`);
        const spData = await spRes.json();
        setSpActivities(spData);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch activities');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allActivities, healthActivities, spActivities, loading, error };
};