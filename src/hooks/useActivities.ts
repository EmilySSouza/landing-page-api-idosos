import { useState, useEffect, useMemo } from 'react';
import { Activity } from '../types/activities';

export const useActivities = () => {
  const [allActivities, setAllActivities] = useState<Activity[]>([]);
  const [healthActivities, setHealthActivities] = useState<Activity[]>([]);
  const [spActivities, setSpActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    estado?: string;
    categoria?: string;
  }>({});

  const API_BASE_URL = 'https://apiidosos.onrender.com';

  const { estados, categorias } = useMemo(() => {
    const estadosUnicos = Array.from(
      new Set(
        allActivities
          .map(a => {
            const parts = a.local.split('-');
            return parts[parts.length - 1].trim();
          })
          .filter(Boolean)
      )
    ).sort();

    const categoriasUnicas = Array.from(
      new Set(allActivities.map(a => a.categoria))
    ).sort();

    return { estados: estadosUnicos, categorias: categoriasUnicas };
  }, [allActivities]);

  const filteredActivities = useMemo(() => {
    let result = allActivities;

    if (filters.estado) {
      result = result.filter(a =>
        a.local.toLowerCase().includes(filters.estado!.toLowerCase())
      );
    }

    if (filters.categoria) {
      result = result.filter(a => a.categoria === filters.categoria);
    }

    return result;
  }, [allActivities, filters]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const allRes = await fetch(`${API_BASE_URL}/eventos`);

        if (!allRes.ok) {
          throw new Error(`HTTP error! status: ${allRes.status}`);
        }

        const allData = await allRes.json();
        setAllActivities(allData);

      } catch (err) {
        console.error('Error:', err);
        setError('Falha ao carregar atividades');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateFilters = (newFilters: { estado?: string; categoria?: string }) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    allActivities,
    healthActivities,
    spActivities,
    filteredActivities,
    estados,
    categorias,
    filters,
    loading,
    error,
    updateFilters
  };
};