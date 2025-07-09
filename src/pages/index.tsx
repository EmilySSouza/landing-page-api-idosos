import Head from 'next/head';
import { useActivities } from '../hooks/useActivities';
import ActivityCard from '../components/activityCard';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Section from '../components/section';
import SectionTitle from '../components/sectionTitle';

export default function Home() {
  const {
    allActivities,
    filteredActivities,
    estados,
    filters,
    categorias,
    loading,
    error,
    updateFilters
  } = useActivities();

  const handleFilterChange = (type: 'estado' | 'categoria', value: string) => {
    updateFilters({ [type]: value || undefined });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  {error} Algumas atividades podem estar indisponíveis no momento.
                </p>
              </div>
            </div>
          </div>
          <Section id="all-activities">
            <SectionTitle>Atividades Disponíveis</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {allActivities.slice(0, 6).map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Atividades para Idosos</title>
        <meta name="description" content="Encontre atividades para a terceira idade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Header />

        <Section id="filtros-section">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <SectionTitle>Filtrar Atividades</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <select
                    id="estado"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handleFilterChange('estado', e.target.value)}
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
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria
                  </label>
                  <select
                    id="categoria"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handleFilterChange('categoria', e.target.value)}
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
          </div>
        </Section>

        {filters.estado || filters.categoria ? (
          <Section id="filtered-activities" className="bg-blue-50">
            <SectionTitle>
              Atividades {filters.estado ? `em ${filters.estado}` : ''}
              {filters.estado && filters.categoria ? ' e ' : ''}
              {filters.categoria ? `de ${filters.categoria}` : ''}
            </SectionTitle>
            {filteredActivities.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Nenhuma atividade encontrada com os filtros selecionados.</p>
                <button
                  onClick={() => updateFilters({ estado: undefined, categoria: undefined })}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className={`flex justify-center ${filteredActivities.length === 1 ? 'px-4' : ''}`}>
                <div className={`
                  grid 
                  ${filteredActivities.length === 1 ? 'grid-cols-1 max-w-md' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}
                  gap-6 
                  mt-8
                  w-full
                `}>
                  {filteredActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      className={filteredActivities.length === 1 ? 'mx-auto' : ''}
                    />
                  ))}
                </div>
              </div>
            )}
          </Section>
        ) : null}

        <Section id="all-activities">
          <SectionTitle>Todas as Atividades</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {allActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </Section>

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Atividades para Idosos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}