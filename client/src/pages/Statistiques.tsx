import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

// Data for charts
const dataOrigins = [
  { name: "Afrique", value: 48.9, color: "var(--color-primary)" },
  { name: "Europe", value: 30.9, color: "var(--color-secondary)" },
  { name: "Asie", value: 15.0, color: "var(--color-accent)" },
  { name: "Amér./Océ.", value: 5.2, color: "var(--color-chart-4)" },
];

const dataGender = [
  { name: "Hommes", value: 52, color: "#3b82f6" },
  { name: "Femmes", value: 48, color: "#ec4899" },
];

const dataRemittances = [
  { name: "Inde", value: 111, fill: "var(--color-primary)" },
  { name: "Mexique", value: 61, fill: "var(--color-secondary)" },
  { name: "Chine", value: 51, fill: "var(--color-accent)" },
  { name: "Philippines", value: 38, fill: "var(--color-chart-4)" },
  { name: "Égypte", value: 30, fill: "var(--color-chart-5)" },
];

const dataTopCountries = [
  { name: "États-Unis", value: 46, fill: "#3b82f6" },
  { name: "Allemagne", value: 15, fill: "#10b981" },
  { name: "France", value: 8, fill: "#f59e0b" },
  { name: "Canada", value: 8, fill: "#8b5cf6" },
  { name: "Australie", value: 7, fill: "#ef4444" },
];

const dataHistorical = [
  { year: 1970, migrants: 84 },
  { year: 1980, migrants: 102 },
  { year: 1990, migrants: 153 },
  { year: 2000, migrants: 175 },
  { year: 2010, migrants: 221 },
  { year: 2020, migrants: 281 },
  { year: 2024, migrants: 304 },
];

const dataRegions = [
  { name: "Europe", value: 94, color: "#3b82f6" },
  { name: "Asie", value: 88, color: "#10b981" },
  { name: "Amérique du Nord", value: 58, color: "#f59e0b" },
  { name: "Moyen-Orient", value: 37, color: "#8b5cf6" },
  { name: "Afrique", value: 21, color: "#ef4444" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-xl">
        <p className="font-bold text-foreground">{label ? label : payload[0].name}</p>
        <p className="text-primary">
          {payload[0].value} {label ? "M" : "%"}
        </p>
      </div>
    );
  }
  return null;
};

export default function Statistiques() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Statistiques Complètes 2024
        </h1>
        <p className="text-xl text-muted-foreground">
          Les données mondiales les plus récentes sur les migrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Global Stats - Big Number Cards */}
        <motion.div variants={item} className="col-span-1 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-primary/10 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Migrants Mondiaux</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-display font-bold text-primary">304M</div>
              <p className="text-xs text-muted-foreground mt-2">+23M depuis 2020</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/10 border-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Part Mondiale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-display font-bold text-secondary">3.7%</div>
              <p className="text-xs text-muted-foreground mt-2">1 sur 30 personnes</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Déplacés de Force</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-display font-bold text-accent">120M</div>
              <p className="text-xs text-muted-foreground mt-2">Record historique</p>
            </CardContent>
          </Card>
          <Card className="bg-chart-4/10 border-chart-4/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Remittances 2022</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-display font-bold text-chart-4">831Mds$</div>
              <p className="text-xs text-muted-foreground mt-2">Envois de fonds</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Evolution Historique */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 min-h-[400px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Évolution depuis 1970</CardTitle>
              <CardDescription>Nombre de migrants (en millions)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataHistorical} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="year" tick={{ fill: 'white' }} />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="migrants" stroke="var(--color-primary)" strokeWidth={3} dot={{ fill: 'var(--color-primary)', r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Origines France */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 min-h-[400px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Origines en France</CardTitle>
              <CardDescription>Par continent (2024)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataOrigins} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fill: 'white' }} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                    {dataOrigins.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Gender */}
        <motion.div variants={item} className="col-span-1 min-h-[400px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Hommes vs Femmes</CardTitle>
              <CardDescription>Répartition mondiale</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataGender}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataGender.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Remittances */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 min-h-[450px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Top 5 Pays Récepteurs</CardTitle>
              <CardDescription>Remittances en milliards $ (2022)</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataRemittances} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: 'white' }} />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {dataRemittances.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Top Destinations */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 min-h-[400px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Top 5 Destinations</CardTitle>
              <CardDescription>Pays accueillant le plus de migrants</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataTopCountries} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: 'white' }} angle={-45} textAnchor="end" height={80} />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {dataTopCountries.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chart: Regions */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 min-h-[400px]">
          <Card className="h-full border-white/10">
            <CardHeader>
              <CardTitle>Migrants par Région</CardTitle>
              <CardDescription>Distribution mondiale (millions)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataRegions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: 'white' }} angle={-45} textAnchor="end" height={80} />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {dataRegions.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

      </div>

      {/* Key Facts */}
      <motion.div variants={item} className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10">
        <h3 className="text-2xl font-display font-bold mb-6 text-center">Faits Importants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-bold text-primary mb-2">[Globe] Flux Mondiaux</p>
            <p className="text-sm text-muted-foreground">En 2023, 4,3 millions d'immigrants ont rejoint l'UE depuis des pays non-UE.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-bold text-secondary mb-2">[Trophy] Turquie</p>
            <p className="text-sm text-muted-foreground">Accueille le plus de réfugiés au monde : 3,8 millions de personnes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-bold text-accent mb-2">[Graph] Croissance</p>
            <p className="text-sm text-muted-foreground">Le nombre de migrants a augmenté de 128 millions entre 1990 et 2020.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-bold text-chart-4 mb-2">💰 Impact Économique</p>
            <p className="text-sm text-muted-foreground">Les remittances dépassent l'aide au développement officielle mondiale.</p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
