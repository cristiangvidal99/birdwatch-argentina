import { useState } from 'react'
import { Link } from 'react-router-dom'

const AVES = [
  { id: 1, nombre: 'Cóndor Andino', imagen: 'https://via.placeholder.com/150', habitat: 'Montañas de la Cordillera' },
  { id: 2, nombre: 'Churrinche', imagen: 'https://via.placeholder.com/150', habitat: 'Zonas arboladas de bosques y montañas' },
  { id: 3, nombre: 'Cariama', imagen: 'https://via.placeholder.com/150', habitat: 'Montañas andinas' },
  { id: 4, nombre: 'Colibrí de Soria', imagen: 'https://via.placeholder.com/150', habitat: 'Zonas montañosas y bosques' },
]

function AvesPage() {
  const [buscador, setBuscador] = useState('')

  const avesFiltradas = AVES.filter(ave => 
    ave.nombre.toLowerCase().includes(buscador.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Directorio de Aves</h1>

        {/* Barra de búsqueda */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Buscar ave..."
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <span className="absolute left-4 top-4 text-gray-400">🔍</span>
        </div>

        {/* Grid de avistamientos */}
        {avesFiltradas.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">No se encontraron aves.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avesFiltradas.map((ave) => (
              <div key={ave.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 transition-colors">
                  {ave.imagen}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{ave.nombre}</h3>
                  <p className="text-sm text-gray-600 mb-4">{ave.habitat}</p>
                  <Link to={`/aves/${ave.id}`} className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-2 rounded-lg transition-colors">
                    Ver detalle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <nav className="mt-8 flex justify-center space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">← Volver al inicio</Link>
        </nav>
      </div>
    </div>
  )
}

export default AvesPage