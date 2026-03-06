'use client'
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';

const equipements = [
  { id: 'EQ-001', nom: 'Générateur Diesel G1', categorie: 'Énergie', localisation: 'Usine Dakar - Zone A', statut: 'En service', derniereMaintenance: '12/05/2023' },
  { id: 'EQ-002', nom: 'Pompe à eau P-04', categorie: 'Hydraulique', localisation: 'Station de pompage Thiès', statut: 'En service', derniereMaintenance: '05/06/2023' },
  { id: 'EQ-003', nom: 'Convoyeur C-12', categorie: 'Production', localisation: 'Usine Dakar - Ligne 1', statut: 'En panne', derniereMaintenance: '28/04/2023' },
  { id: 'EQ-004', nom: 'Compresseur Air-2', categorie: 'Pneumatique', localisation: 'Atelier Central', statut: 'En service', derniereMaintenance: '15/06/2023' },
  { id: 'EQ-005', nom: 'Chariot Élévateur CE-3', categorie: 'Manutention', localisation: 'Entrepôt Rufisque', statut: 'En maintenance', derniereMaintenance: '20/06/2023' },
  { id: 'EQ-006', nom: 'Climatiseur Salle Serveur', categorie: 'CVC', localisation: 'Siège Social Dakar', statut: 'En service', derniereMaintenance: '10/01/2023' },
];

export default function Equipements() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Équipements</h2>
          <p className="text-gray-500">Gérez votre parc d&apos;équipements et actifs</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Nouvel équipement
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Rechercher par nom, ID, catégorie..."
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2 text-gray-500" />
            Filtres
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID / Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière Maint.</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {equipements.map((eq) => (
                <tr key={eq.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{eq.nom}</div>
                    <div className="text-sm text-gray-500">{eq.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{eq.categorie}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{eq.localisation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      eq.statut === 'En service' ? 'bg-emerald-100 text-emerald-800' : 
                      eq.statut === 'En panne' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {eq.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{eq.derniereMaintenance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <span className="text-sm text-gray-500">Affichage de 1 à 6 sur 42 équipements</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Précédent</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
