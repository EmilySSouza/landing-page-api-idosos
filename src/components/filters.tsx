import { useState } from 'react';

interface FiltrosProps {
  estados: string[];
  categorias: string[];
  onFilterChange: (filtro: { estado?: string; categoria?: string }) => void;
}

export const Filtros = ({ estados, categorias, onFilterChange }: FiltrosProps) => {
  const [filtros, setFiltros] = useState<{ estado?: string; categoria?: string }>({});

  const handleChange = (tipo: 'estado' | 'categoria', valor: string) => {
    const novosFiltros = {
      ...filtros,
      [tipo]: valor === '' ? undefined : valor
    };
    
    setFiltros(novosFiltros);
    onFilterChange(novosFiltros);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold mb-4">Filtrar Atividades</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
            Estado
          </label>
          <select
            id="estado"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={filtros.estado || ''}
            onChange={(e) => handleChange('estado', e.target.value)}
          >
            <option value="">Todos os estados</option>
            {estados.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
            Categoria
          </label>
          <select
            id="categoria"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={filtros.categoria || ''}
            onChange={(e) => handleChange('categoria', e.target.value)}
          >
            <option value="">Todas categorias</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};