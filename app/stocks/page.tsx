'use client'
import { Plus, Search, AlertCircle } from 'lucide-react';

const pieces = [
  { id: 'P-101', nom: 'Filtre à huile FH-20', categorie: 'Consommable', stock: 45, seuil: 20, prix: 15000, fournisseur: 'Dakar Auto Parts' },
  { id: 'P-102', nom: 'Courroie de transmission CT-5', categorie: 'Mécanique', stock: 8, seuil: 10, prix: 35000, fournisseur: 'Sénégal Mécanique' },
  { id: 'P-103', nom: 'Roulement à billes R-6004', categorie: 'Mécanique', stock: 120, seuil: 50, prix: 8500, fournisseur: 'Industrie Fournitures' },
  { id: 'P-104', nom: 'Contacteur 24V', categorie: 'Électrique', stock: 3, seuil: 5, prix: 22000, fournisseur: 'Élec Pro Dakar' },
  { id: 'P-105', nom: 'Huile moteur 15W40 (Fût 200L)', categorie: 'Lubrifiant', stock: 2, seuil: 2, prix: 250000, fournisseur: 'Total Sénégal' },
];

export default function Stocks() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Stocks & Achats</h2>
          <p className="text-gray-500">Gérez vos pièces de rechange et commandes</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
            Nouvelle commande
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une pièce
          </button>
        </div>
      </div>

      {/* Alertes de stock */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-amber-800">Alertes de réapprovisionnement (2)</h3>
          <p className="text-sm text-amber-700 mt-1">
            Certaines pièces ont atteint ou dépassé leur seuil critique. Pensez à générer des commandes.
          </p>
        </div>
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
              placeholder="Rechercher une pièce..."
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Référence / Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Actuel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seuil Min.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix Unitaire</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fournisseur</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pieces.map((piece) => {
                const isLowStock = piece.stock <= piece.seuil;
                return (
                  <tr key={piece.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{piece.nom}</div>
                      <div className="text-sm text-gray-500">{piece.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{piece.categorie}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        isLowStock ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {piece.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{piece.seuil}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Intl.NumberFormat('fr-SN', { style: 'currency', currency: 'XOF' }).format(piece.prix)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{piece.fournisseur}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
