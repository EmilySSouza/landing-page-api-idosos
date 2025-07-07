'use client';
import { useEffect, useState } from 'react';

type Evento = {
  id: number;
  titulo: string;
  categoria: string;
  local: string;
};

export default function IdososSection() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const res = await fetch('/api/eventos');
        const data = await res.json();
        console.log('Eventos carregados:', data);
        setEventos(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }

    fetchEventos();
  }, []);

  return (
    <div>
      <h2>Eventos para Idosos</h2>
      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            {evento.titulo} – {evento.local}
          </li>
        ))}
      </ul>
    </div>
  );
}
