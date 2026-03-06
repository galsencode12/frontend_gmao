'use client'
import { Plus, Search, Calendar, Filter } from 'lucide-react';

const interventions = [
  { id: 'INT-2023-089', equipement: 'Générateur Diesel G1', type: 'Correctif', priorite: 'Haute', statut: 'En cours', technicien: 'Amadou Diallo', datePrevue: '20/06/2023', description: 'Bruit anormal au démarrage' },
  { id: 'INT-2023-088', equipement: 'Pompe à eau P-04', type: 'Préventif', priorite: 'Moyenne', statut: 'Terminé', technicien: 'Ousmane Ndiaye', datePrevue: '19/06/2023', description: 'Graissage et vérification des joints' },
  { id: 'INT-2023-087', equipement: 'Convoyeur C-12', type: 'Correctif', priorite: 'Critique', statut: 'En attente pièce', technicien: 'Fatou Sow', datePrevue: '19/06/2023', description: 'Rupture de la courroie principale' },
  { id: 'INT-2023-086', equipement: 'Compresseur Air-2', type: 'Préventif', priorite: 'Basse', statut: 'Terminé', technicien: 'Amadou Diallo', datePrevue: '18/06/2023', description: 'Changement filtre à air' },
  { id: 'INT-2023-090', equipement: 'Chariot CE-3', type: 'Préventif', priorite: 'Moyenne', statut: 'Planifié', technicien: 'Cheikh Fall', datePrevue: '22/06/2023', description: 'Révision des 500h' },
];

export default function Interventions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Interventions</h2>
          <p className="text-gray-500">Gérez les bons de travail préventifs et correctifs</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle intervention
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-1 gap-4">
            <div className="relative w-full sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Rechercher un bon de travail..."
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
              Planning
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2 text-gray-500" />
              Filtres
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID / Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Équipement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type & Priorité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technicien</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Prévue</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interventions.map((int) => (
                <tr key={int.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{int.id}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{int.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{int.equipement}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium w-fit ${
                        int.type === 'Préventif' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {int.type}
                      </span>
                      <span className={`text-xs font-medium ${
                        int.priorite === 'Critique' ? 'text-red-600' :
                        int.priorite === 'Haute' ? 'text-orange-500' :
                        int.priorite === 'Moyenne' ? 'text-blue-500' : 'text-gray-500'
                      }`}>
                        Priorité: {int.priorite}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      int.statut === 'Terminé' ? 'bg-gray-100 text-gray-800' : 
                      int.statut === 'En cours' ? 'bg-blue-100 text-blue-800' : 
                      int.statut === 'Planifié' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {int.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{int.technicien}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{int.datePrevue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
