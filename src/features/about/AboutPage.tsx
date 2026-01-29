import {
  Sparkles,
  Terminal,
  Layers,
  Binary,

  Zap,
  Target
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useFavicon } from "../../hooks/useFavicon";

export const AboutPage = () => {
  useFavicon('about');
  const stats = [
    { label: "Experience", value: "3+ Years", icon: <Layers className="w-4 h-4" />, color: "blue" },
    { label: "Projects", value: "7+", icon: <Zap className="w-4 h-4" />, color: "amber" },
    { label: "Problems", value: "500+", icon: <Binary className="w-4 h-4" />, color: "emerald" },
  ];

  return (
    <div className="home-container relative py-12 px-4 max-w-6xl mx-auto min-h-full overflow-visible">
      <Helmet>
        <title>About Sai Kushal | Data Scientist & Machine Learning Engineer</title>
        <meta name="description" content="Learn about Sai Kushal's journey from competitive programmer to Data Scientist & Machine Learning Engineer. Expertise in LLMs, RAG systems, and cloud-native AI solutions." />
      </Helmet>
      {/* Background Narrative blurs */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      {/* Header: Pure Impact */}
      <header className="relative z-10 mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/50 backdrop-blur-sm border border-blue-100 rounded-full mb-6 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
          <Sparkles className="w-3 h-3" />
          Evolution of an Engineer
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-[ -0.05em] text-gray-900 leading-[0.95] mb-8">
          Data & AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
            Specialist.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl leading-relaxed">
          I am Vittanala Sai Kushal — transforming complex data into meaningful insights and building intelligent systems that make a real impact.
        </p>
      </header>

      {/* The Bento Masterclass */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

        {/* Main Bio Card - Span 8 */}
        <div className="md:col-span-8 p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col justify-between group hover:border-blue-200/50 hover:-translate-y-2 transition-all duration-700">
          <div className="space-y-8">

            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed max-w-2xl">
              <p>
                With a solid foundation in Data Structures and Algorithms—demonstrated through <span className="text-gray-900 font-bold">500+ LeetCode problems solved (1800+ rating, Knight Badge)</span>—I combine strong problem-solving skills with practical implementation experience.
              </p>
              <p>
                I specialize in <span className="text-blue-600 font-bold">Data Analytics & Machine Learning</span>, developing real-time computer vision systems and interactive dashboards. My published research on disease prediction (92.31% accuracy) reflects my commitment to technical excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Stat Strip - Span 4 */}
        <div className="md:col-span-4 grid grid-rows-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-4 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform ${stat.color === 'blue' ? 'text-blue-500' :
                stat.color === 'amber' ? 'text-amber-500' :
                  'text-emerald-500'
                }`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Badge Grid - Span 4 */}
        <div className="md:col-span-4 p-10 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col justify-between overflow-hidden relative group hover:border-blue-200/50 hover:-translate-y-2 transition-all duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[60px] rounded-full group-hover:bg-blue-500/10 transition-all" />
          <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-8 flex items-center gap-3">
            Verified Authority <div className="h-px flex-1 bg-gray-100" />
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-10 rounded-full bg-blue-500" />
              <div>
                <p className="text-xl font-black tracking-tight text-gray-900">LeetCode</p>
                <p className="text-sm font-bold text-gray-500">1800+ Rating • Knight</p>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">500+ Solved</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-10 rounded-full bg-orange-500" />
              <div>
                <p className="text-xl font-black tracking-tight text-gray-900">CodeChef</p>
                <p className="text-sm font-bold text-gray-500">1 Star</p>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">1300+ Rating</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-10 rounded-full bg-emerald-500" />
              <div>
                <p className="text-xl font-black tracking-tight text-gray-900">Research</p>
                <p className="text-sm font-bold text-gray-500">Published</p>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">92.31% Accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise List - Span 8 */}
        <div className="md:col-span-8 p-10 rounded-[3rem] bg-gray-50/50 backdrop-blur-xl border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-gray-900/[0.02] select-none">AI</div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
              Core Expertise
              <Target className="w-5 h-5 text-blue-600" />
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xl">
              Building intelligent systems using TensorFlow and OpenCV, analyzing data with Power BI and Tableau, and developing scalable MERN stack applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {["Power BI", "Tableau", "TensorFlow", "OpenCV", "React.js", "Node.js", "MongoDB", "AWS", "Azure"].map((tool, i) => (
              <div key={i} className="px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default flex items-center gap-2">
                <Terminal className="w-3 h-3 text-blue-500" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Tagline */}
      <div className="mt-20 text-center animate-fade-in">
        <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] flex items-center justify-center gap-8">
          <span className="w-12 h-px bg-gray-200" />
          B.Tech CS • VIT • 2022-2026
          <span className="w-12 h-px bg-gray-200" />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
