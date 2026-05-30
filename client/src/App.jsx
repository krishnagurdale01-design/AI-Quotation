import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LayoutDashboard, UploadCloud, PieChart, LogOut, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="glass-panel p-10 rounded-2xl w-full max-w-md text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent glow-text">AI Logistics</h1>
        <p className="text-gray-400 mb-8">Sign in to your account</p>
        <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-surface border border-gray-700 text-white" defaultValue="admin@logistics.com" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded bg-surface border border-gray-700 text-white" defaultValue="password123" />
          <button type="submit" className="w-full p-3 bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg font-semibold hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-transparent relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <aside className="w-64 glass-panel border-r border-white/5 flex flex-col z-10 m-4 rounded-2xl">
        <div className="p-6 text-2xl font-bold text-white border-b border-white/5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Nexus AI</div>
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all group"><LayoutDashboard size={20} className="text-primary group-hover:text-white transition-colors"/> Dashboard</Link>
          <Link to="/upload" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all group"><UploadCloud size={20} className="text-secondary group-hover:text-white transition-colors"/> Upload Data</Link>
          <Link to="/reports" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all group"><PieChart size={20} className="text-accent group-hover:text-white transition-colors"/> AI Reports</Link>
        </nav>
        <div className="p-4 border-t border-white/5">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-all hover:translate-x-2"><LogOut size={20} /> Logout</Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8 animate-fade-in z-10">
        {children}
      </main>
    </div>
  );
};

const mockChartData = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 2000, profit: 9800 },
  { name: 'Apr', revenue: 2780, profit: 3908 },
  { name: 'May', revenue: 1890, profit: 4800 },
  { name: 'Jun', revenue: 2390, profit: 3800 },
];

const mockRouteData = [
  { name: 'NY-LA', trips: 120 },
  { name: 'CHI-TX', trips: 98 },
  { name: 'MIA-ATL', trips: 86 },
  { name: 'SEA-SF', trips: 54 },
];

const Dashboard = () => (
  <Layout>
    <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 glow-text">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {[{title: 'Total Trips', val: '1,284', color: 'from-blue-500 to-cyan-400'}, {title: 'Total Revenue', val: '$842K', color: 'from-emerald-400 to-green-500'}, {title: 'Total Profit', val: '$210K', color: 'from-purple-500 to-pink-500'}, {title: 'Delayed Deliveries', val: '12%', color: 'from-red-500 to-orange-500'}].map(kpi => (
        <div key={kpi.title} className="glass-panel p-6 rounded-2xl animate-slide-up group relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${kpi.color}`}></div>
          <h3 className="text-gray-400 mb-2 group-hover:text-white transition-colors">{kpi.title}</h3>
          <p className="text-4xl font-bold text-white tracking-tight">{kpi.val}</p>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="glass-panel p-6 rounded-xl h-96 flex flex-col">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><TrendingUp size={20} className="text-primary"/> Revenue vs Profit</h3>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: '#1A2035', borderColor: '#333' }} />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="glass-panel p-6 rounded-xl h-96 flex flex-col">
        <h3 className="text-xl font-semibold mb-4 text-white">Top Performing Routes</h3>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockRouteData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" stroke="#888" />
              <YAxis dataKey="name" type="category" stroke="#888" width={80} />
              <Tooltip contentStyle={{ backgroundColor: '#1A2035', borderColor: '#333' }} />
              <Bar dataKey="trips" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </Layout>
);

const Upload = () => {
  const [file, setFile] = useState(null);
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Upload Trip Data</h1>
      <div className="glass-panel border-dashed border-2 border-primary/50 p-12 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition">
        <UploadCloud size={48} className="text-primary mb-4" />
        <p className="text-xl font-medium mb-2">Drag & Drop your CSV/Excel file here</p>
        <p className="text-gray-400 mb-6">or click to browse from your computer</p>
        <input type="file" className="hidden" id="fileUpload" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="fileUpload" className="px-6 py-2 bg-primary rounded text-white cursor-pointer hover:bg-blue-600 transition">Browse Files</label>
        {file && <p className="mt-4 text-secondary">Selected: {file.name}</p>}
      </div>
    </Layout>
  );
};

const Reports = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Generated Insights</h1>
        <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm transition">Download PDF</button>
      </div>
      
      <div className="space-y-6">
        <div className="glass-panel p-8 rounded-xl border-l-4 border-l-primary animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-primary" /> Executive Summary
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Based on the analysis of 1,284 trips, your logistics network is performing well with an average profit margin of 24.9%. However, we identified significant bottlenecks in the CHI-TX route accounting for 40% of all delayed deliveries. Optimizing fuel consumption on long-haul routes could increase overall profit by an estimated 8%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">High-Value Customers</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Acme Corp</span><span className="font-semibold">$145K</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Global Freight</span><span className="font-semibold">$98K</span></li>
              <li className="flex justify-between"><span>FastShip LLC</span><span className="font-semibold">$76K</span></li>
            </ul>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border-t-2 border-t-red-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
              <AlertTriangle size={20} /> Risk Alerts
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="bg-red-500/10 p-3 rounded border border-red-500/20"><strong>Severe Weather Risk:</strong> 15 active trips on the eastern seaboard may face 12+ hour delays.</p>
              <p className="bg-yellow-500/10 p-3 rounded border border-yellow-500/20"><strong>Maintenance Overdue:</strong> 4 trucks in the heavy-duty fleet have exceeded recommended mileage.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Business Growth Recommendations</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex gap-4 p-3 hover:bg-white/5 rounded transition">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">Renegotiate Toll Contracts</h4>
                <p className="text-sm">Toll costs on the NY-LA corridor are 15% higher than industry average. Bulk passing could save $22K annually.</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 hover:bg-white/5 rounded transition">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">Expand into Chicago Market</h4>
                <p className="text-sm">Demand for refrigerated transport in CHI area is rising. Dedicating 3 more trucks here could boost margin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
