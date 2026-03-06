'use client'
import { Plus, Search, Mail, Phone } from 'lucide-react';

const techniciens = [
  { id: 'T-01', nom: 'Amadou Diallo', specialite: 'Électromécanicien', site: 'Usine Dakar', statut: 'Disponible', interventionsSemaine: 8 },
  { id: 'T-02', nom: 'Ousmane Ndiaye', specialite: 'Hydraulique', site: 'Thiès', statut: 'En intervention', interventionsSemaine: 12 },
  { id: 'T-03', nom: 'Fatou Sow', specialite: 'Automatisme', site: 'Usine Dakar', statut: 'Disponible', interventionsSemaine: 5 },
  { id: 'T-04', nom: 'Cheikh Fall', specialite: 'Mécanicien', site: 'Rufisque', statut: 'En congé', interventionsSemaine: 0 },
  { id: 'T-05', nom: 'Moussa Diop', specialite: 'CVC', site: 'Dakar', statut: 'En intervention', interventionsSemaine: 9 },
];

export default function Techniciens() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Ressources Humaines</h2>
          <p className="text-gray-500">Gérez vos équipes techniques et leurs plannings</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Nouveau technicien
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniciens.map((tech) => (
          <div key={tech.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg">
                  {tech.nom.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tech.nom}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{tech.specialite}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                tech.statut === 'Disponible' ? 'bg-emerald-100 text-emerald-800' : 
                tech.statut === 'En intervention' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {tech.statut}
              </span>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-700 w-24">Site:</span>
                {tech.site}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-700 w-24">Interventions:</span>
                {tech.interventionsSemaine} cette semaine
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end space-x-2">
              <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </button>
              <button className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                Planning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
