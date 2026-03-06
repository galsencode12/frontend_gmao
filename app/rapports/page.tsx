export default function Rapports() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Rapports & Analyses</h2>
        <p className="text-gray-500">Générez des rapports détaillés sur vos performances de maintenance</p>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
        <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Module de reporting en construction</h3>
        <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
          Ce module vous permettra de générer des rapports PDF et Excel sur les coûts, le MTBF, le MTTR et la disponibilité de vos équipements.
        </p>
        <div className="mt-6">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Être notifié de la disponibilité
          </button>
        </div>
      </div>
    </div>
  );
}
