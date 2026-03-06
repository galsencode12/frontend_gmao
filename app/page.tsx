'use client'
import { 
  Wrench, 
  AlertTriangle, 
  CheckCircle2, 
  Clock
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const kpiData = [
  { title: 'Interventions en cours', value: '12', icon: Wrench, color: 'text-blue-600', bg: 'bg-blue-100' },
  { title: 'Pannes critiques', value: '3', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
  { title: 'Taux de résolution', value: '94%', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { title: 'Temps moyen (MTTR)', value: '4.2h', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
];

const interventionData = [
  { name: 'Lun', preventif: 4, correctif: 2 },
  { name: 'Mar', preventif: 3, correctif: 4 },
  { name: 'Mer', preventif: 5, correctif: 1 },
  { name: 'Jeu', preventif: 2, correctif: 5 },
  { name: 'Ven', preventif: 6, correctif: 2 },
  { name: 'Sam', preventif: 1, correctif: 1 },
  { name: 'Dim', preventif: 0, correctif: 0 },
];

const costData = [
  { month: 'Jan', cout: 1250000 },
  { month: 'Fév', cout: 980000 },
  { month: 'Mar', cout: 1450000 },
  { month: 'Avr', cout: 1100000 },
  { month: 'Mai', cout: 850000 },
  { month: 'Juin', cout: 1050000 },
];

const recentInterventions = [
  { id: 'INT-2023-089', equipement: 'Générateur Diesel G1', type: 'Correctif', statut: 'En cours', technicien: 'Amadou Diallo', date: "Aujourd'hui" },
  { id: 'INT-2023-088', equipement: 'Pompe à eau P-04', type: 'Préventif', statut: 'Terminé', technicien: 'Ousmane Ndiaye', date: 'Hier' },
  { id: 'INT-2023-087', equipement: 'Convoyeur C-12', type: 'Correctif', statut: 'En attente pièce', technicien: 'Fatou Sow', date: 'Hier' },
  { id: 'INT-2023-086', equipement: 'Compresseur Air-2', type: 'Préventif', statut: 'Terminé', technicien: 'Amadou Diallo', date: 'Il y a 2 jours' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Tableau de bord</h2>
        <p className="text-gray-500">Vue d&apos;ensemble de vos opérations de maintenance</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.title} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${kpi.bg}`}>
                <Icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Interventions de la semaine</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={interventionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="preventif" name="Préventif" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="correctif" name="Correctif" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Évolution des coûts (FCFA)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('fr-SN', { style: 'currency', currency: 'XOF' }).format(value as number)}
                />
                <Line type="monotone" dataKey="cout" name="Coût" stroke="#3b82f6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Interventions */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Interventions récentes</h3>
          <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Voir tout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Équipement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technicien</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentInterventions.map((intervention) => (
                <tr key={intervention.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{intervention.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{intervention.equipement}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      intervention.type === 'Préventif' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {intervention.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      intervention.statut === 'Terminé' ? 'bg-gray-100 text-gray-800' : 
                      intervention.statut === 'En cours' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {intervention.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{intervention.technicien}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{intervention.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
