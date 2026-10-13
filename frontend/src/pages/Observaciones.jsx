function ObservacionesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Mis Observaciones</h1>
        <p className="text-gray-600 mb-8">
          Aquí podrás registrar tus primeros avistamientos de aves.
        </p>

        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg text-left text-sm">
          <strong>Próximamente:</strong> Podrás agregar nuevas observaciones con fotos, ubicación y detalles adicionales.
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
            + Nueva observación
          </button>
          <button disabled className="bg-gray-200 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed">
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ObservacionesPage