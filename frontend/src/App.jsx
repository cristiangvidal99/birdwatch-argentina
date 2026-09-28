import { useState } from 'react'

const ANIMALS = ['Águila', 'Cóndor', 'Colibrí', 'Guanaco', 'Zorro']
const LOCATIONS = ['Precordillera', 'Patagonia', 'Selva', 'Monte', 'Delta']

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({ name: '', location: '' })

  const openModal = () => {
    setModalData({
      name: getRandomItem(ANIMALS),
      location: getRandomItem(LOCATIONS)
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setModalData({ name: '', location: '' }), 300)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Contenido principal */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">
          BirdWatch Argentina 🐦
        </h1>

        {/* Botón para abrir el modal */}
        <button
          onClick={openModal}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-200"
        >
          📊 Ver dato aleatorio (Modal)
        </button>

        <p className="text-gray-500 mt-4">
          Haz clic en el botón para ver un ejemplo de modal.
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          {/* Contenido del modal */}
          <div 
            className={`bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full transform transition-all duration-300 ease-out ${
              isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              ✕
            </button>

            {/* Contenido del modal */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🐦
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {modalData.name}
              </h2>

              <p className="text-gray-600 mb-6">
                Ubicación: <span className="font-semibold text-indigo-600">{modalData.location}</span>
              </p>

              {/* Información adicional simulada */}
              <div className="bg-gray-50 rounded-lg p-4 text-left">
                <h3 className="text-sm font-semibold text-gray-700 mb-2 border-b pb-1">
                  Datos adicionales:
                </h3>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Estado de conservación: Preocupación menor</li>
                  <li>• Hábitat típico: Zona templada</li>
                  <li>• Alimentación: Insectos y semillas</li>
                </ul>
              </div>

              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
