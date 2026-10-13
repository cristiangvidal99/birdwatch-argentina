import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido a BirdWatch 🐦</h1>
        <p className="text-gray-600 mb-8">
          Explora las aves de Argentina, observa especies y registra tus primeras avistamientos.
        </p>

        <nav className="space-y-3">
          <Link to="/aves" className="block w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 rounded-lg transition-colors">
            Ver Aves
          </Link>
          <Link to="/observaciones" className="block w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-3 rounded-lg transition-colors">
            Mis Observaciones
          </Link>
        </nav>

        <div className="mt-8 p-4 bg-indigo-50 rounded-lg text-center text-sm text-indigo-700">
          ¡Comienza tu aventura avistando aves hoy!
        </div>
      </div>
    </div>
  )
}

export default HomePage