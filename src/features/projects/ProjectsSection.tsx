import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Search,
    Github,
    Cpu,
    Globe,
    Zap,
    Brain,
    Rocket,
    Folder,
    FlaskConical,
    Users,
    ShieldCheck,
    HeartPulse,
    Car,
    Plane,
    Building2,
    BarChart3,
    TrendingUp,
    Tv,
    Briefcase,
    Banknote,
    LineChart,
    PieChart,
    Layers
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useFavicon } from "../../hooks/useFavicon";

const projects = [
    {
        title: "A/B Testing Analytics",
        description:
            "Analyzed a real 90K-player mobile game experiment with two-proportion z-tests and 2,000-iteration bootstrap confidence intervals. Proved moving the gate hurt 7-day retention (p ≈ 0.001) and shipped a clear keep/rollback recommendation.",
        tech: ["Python", "SciPy", "Pandas", "Plotly", "Streamlit", "Statistics"],
        github: "https://github.com/Saikushal185/ab-testing-analytics",
        category: "Data Analytics",
        icon: <FlaskConical className="w-5 h-5" />,
        featured: true
    },
    {
        title: "Loan Default Risk System",
        description:
            "End-to-end credit risk engine: Logistic Regression, Random Forest and XGBoost with SHAP explainability mapped to an approve/decline policy. Streamlit dashboard simulates approvals with per-applicant risk scores and explanations.",
        tech: ["Python", "XGBoost", "SHAP", "Scikit-learn", "Streamlit"],
        github: "https://github.com/Saikushal185/loan-risk-system",
        category: "Machine Learning",
        icon: <Banknote className="w-5 h-5" />,
        featured: true
    },
    {
        title: "Customer Segmentation Platform",
        description:
            "Clustered 4,338 customers from 541K real retail transactions using RFM features and K-Means, validated with Elbow and Silhouette analysis. Named four actionable segments driving £8.9M revenue with per-segment marketing plans.",
        tech: ["Python", "K-Means", "Scikit-learn", "Pandas", "Streamlit"],
        github: "https://github.com/Saikushal185/customer-segmentation-platform",
        category: "Machine Learning",
        icon: <Users className="w-5 h-5" />,
        featured: true
    },
    {
        title: "Healthcare Readmission Analytics",
        description:
            "Predicted 30-day hospital readmissions on 100K real diabetic encounters with ICD-9 diagnosis grouping and imbalance-aware XGBoost. Dashboard includes a live patient risk-prediction form with honest, clinically-typical metrics.",
        tech: ["Python", "XGBoost", "Scikit-learn", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/healthcare-readmission-analytics",
        category: "Machine Learning",
        icon: <HeartPulse className="w-5 h-5" />,
        featured: true
    },
    {
        title: "Smart City Traffic Analytics",
        description:
            "Forecasted hourly highway traffic (R² 0.94, MAE 272 veh/h) on 40K+ sensor readings with a leakage-safe chronological split. Includes congestion classification, weather impact analysis, and a 24-hour what-if simulator.",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/traffic-analytics-platform",
        category: "Machine Learning",
        icon: <Car className="w-5 h-5" />
    },
    {
        title: "Flight Delay Analytics",
        description:
            "Mined 327K NYC departures to expose cascading delays — late rates climb from 13% at 6am to 35%+ by evening. Gradient-boosted 'Will my flight be late?' predictor (ROC-AUC 0.73) wrapped in an interactive checker.",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/flight-delay-analytics",
        category: "Data Analytics",
        icon: <Plane className="w-5 h-5" />
    },
    {
        title: "Airbnb NYC Pricing Analytics",
        description:
            "Modeled nightly prices across 48K real NYC listings with geospatial maps and a Random Forest regressor (MAE ≈ $42). Ships a price estimator that benchmarks any new listing against its live market median.",
        tech: ["Python", "Random Forest", "Plotly Maps", "Pandas", "Streamlit"],
        github: "https://github.com/Saikushal185/airbnb-pricing-analytics",
        category: "Machine Learning",
        icon: <Building2 className="w-5 h-5" />
    },
    {
        title: "Global Layoffs Analytics",
        description:
            "Tracked 383K layoffs across 51 countries (2020–2023) with choropleth maps, treemaps, trend forecasting and z-score anomaly detection. Auto-generates an executive summary with computed findings.",
        tech: ["Python", "Pandas", "Plotly", "Forecasting", "Streamlit"],
        github: "https://github.com/Saikushal185/layoffs-analytics-platform",
        category: "Data Analytics",
        icon: <TrendingUp className="w-5 h-5" />
    },
    {
        title: "HR Attrition Analytics",
        description:
            "Diagnosed why employees quit on the IBM HR dataset — overtime nearly triples attrition risk. Recall-prioritized Logistic Regression (ROC-AUC 0.81) chosen over Random Forest for interpretability, with a live risk-scoring form.",
        tech: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/hr-attrition-analytics",
        category: "Machine Learning",
        icon: <Briefcase className="w-5 h-5" />
    },
    {
        title: "Customer Churn Prediction",
        description:
            "Telecom churn classifier comparing multiple models on customer account and contract data. Identifies month-to-month, high-charge, short-tenure customers as the key churn segment and scores every customer with a churn probability.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        github: "https://github.com/Saikushal185/customer-churn-prediction",
        category: "Machine Learning",
        icon: <PieChart className="w-5 h-5" />
    },
    {
        title: "Global Energy Analytics",
        description:
            "The energy transition across 220 countries and 35 years of Our World in Data: world energy mix, renewables choropleth, per-capita comparisons, and a country-vs-country explorer. Renewables: 15% — fossil fuels still 81%.",
        tech: ["Python", "Pandas", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/energy-consumption-analytics",
        category: "Data Analytics",
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: "Netflix Content Analytics",
        description:
            "Exploratory analysis of ~7,800 Netflix titles: content growth, genre and country breakdowns, ratings, and duration patterns, with an auto-generated storytelling report computed live from the data.",
        tech: ["Python", "Pandas", "Plotly", "EDA"],
        github: "https://github.com/Saikushal185/Netflix-Analytics",
        category: "Data Analytics",
        icon: <Tv className="w-5 h-5" />
    },
    {
        title: "Sales Analytics Dashboard",
        description:
            "Retail sales reporting layer: revenue trends, top products, and regional performance with a generated business report and an interactive Streamlit dashboard for commercial teams.",
        tech: ["Python", "Pandas", "Plotly", "Streamlit"],
        github: "https://github.com/Saikushal185/sales-dashboard",
        category: "Data Analytics",
        icon: <BarChart3 className="w-5 h-5" />
    },
    {
        title: "Salary Prediction App",
        description:
            "Regression model predicting salaries from experience, role, and education — served through a Streamlit app where anyone can plug in a profile and get an instant estimate. Full train-to-deploy loop.",
        tech: ["Python", "Scikit-learn", "Streamlit", "Joblib"],
        github: "https://github.com/Saikushal185/salary-prediction",
        category: "Machine Learning",
        icon: <LineChart className="w-5 h-5" />
    },
    {
        title: "Stock Market Dashboard",
        description:
            "Live market dashboard pulling real-time stock data via the yfinance API: price history, moving averages, returns, and multi-ticker comparisons that update every trading day.",
        tech: ["Python", "yfinance", "Plotly", "Streamlit", "APIs"],
        github: "https://github.com/Saikushal185/stock-market-dashboard",
        category: "Data Analytics",
        icon: <TrendingUp className="w-5 h-5" />
    },
    {
        title: "Traffic Congestion Prediction",
        description:
            "Built traffic prediction model using Random Forest and Decision Trees on 50K+ records achieving 89% accuracy. Created web interface using TypeScript with Matplotlib heatmap visualizations.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "TypeScript"],
        github: "https://github.com/Saikushal185/Urban_Traffic_Congestion",
        category: "Machine Learning",
        icon: <Cpu className="w-5 h-5" />
    },
    {
        title: "Retail Store Sales Analysis",
        description:
            "Analyzed 25K+ sales transactions using SQL and Python to identify top-selling products, profit margins, and regional performance. Built Power BI dashboard with monthly trends.",
        tech: ["Power BI", "SQL", "Python", "Pandas", "Excel", "Matplotlib"],
        github: "https://github.com/Saikushal185/PowerBi-Dashboard",
        category: "Data Analytics",
        icon: <Globe className="w-5 h-5" />
    },
    {
        title: "Face Recognition System",
        description:
            "Built face detection and recognition system using OpenCV and TensorFlow achieving 97% accuracy with real-time processing at 30 FPS. Reduced incorrect matches by 70%.",
        tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Image Processing"],
        github: "https://github.com/Saikushal185/Face-Recognition-project",
        category: "Computer Vision",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "Hire Job Platform",
        description:
            "Full-stack job hiring platform connecting employers with job seekers. Features user authentication, job listings, and application management system.",
        tech: ["React.js", "Node.js", "MongoDB", "JavaScript"],
        github: "https://github.com/Saikushal185/Hire_Job",
        category: "Web Development",
        icon: <Brain className="w-5 h-5" />
    },
    {
        title: "Super Store Analysis",
        description:
            "Comprehensive data analysis project examining retail store performance metrics, customer segments, and sales patterns to derive actionable business insights.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
        github: "https://github.com/Saikushal185/Super_Store_Analysis",
        category: "Data Analytics",
        icon: <Rocket className="w-5 h-5" />
    }
];

export const ProjectsSection = () => {
    useFavicon('projects');
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") ?? "");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

    // Keep in sync with searches launched from the Home command bar
    useEffect(() => {
        const q = searchParams.get("q");
        if (q !== null) {
            setSearchQuery(q);
        }
    }, [searchParams]);

    useEffect(() => {
        const query = searchQuery.toLowerCase().trim();
        const filtered = projects.filter((p) => {
            const matchesQuery = p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.tech.some(t => t.toLowerCase().includes(query));
            const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
            return matchesQuery && matchesCategory;
        });
        setFilteredProjects(filtered);
    }, [searchQuery, selectedCategory]);

    return (
        <div className="home-container relative py-12 px-4 max-w-7xl mx-auto min-h-full">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

            <Helmet>
                <title>Projects | Sai Kushal</title>
                <meta name="description" content="Explore my portfolio of 20 data analytics, machine learning, and full-stack projects — churn, segmentation, A/B testing, risk modeling, forecasting, and more." />
            </Helmet>

            {/* Header section */}
            <header className="text-center space-y-8 mb-20 animate-fade-in px-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/40 backdrop-blur-md border border-white/40 rounded-full shadow-sm">
                    <Rocket className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Innovation Portfolio</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9]">
                    The Project <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Forge.
                    </span>
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                    {projects.length} mission-critical builds across machine learning, statistics, forecasting, and analytics — every one backed by real data and a working repo.
                </p>
            </header>

            {/* Controls: Search & Filters */}
            <div className="flex flex-col items-center gap-10 mb-20 relative z-10 px-4">
                <div className="w-full max-w-3xl space-y-8">
                    {/* Search Bar */}
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search projects by name, tech, or mission..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 bg-white border border-gray-100 rounded-[2rem] outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-gray-700 text-lg shadow-2xl shadow-gray-200/50"
                        />
                    </div>

                    {/* Category Chips */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${selectedCategory === cat
                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105"
                                    : "bg-white border border-gray-100 text-gray-400 hover:border-blue-200 hover:text-gray-900 shadow-sm"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filteredProjects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-blue-200/50 transition-all duration-500"
                    >
                        {/* Status Label */}
                        <div className="absolute top-8 right-8">
                            {project.featured ? (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Flagship</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Active</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                {project.icon}
                            </div>
                        </div>

                        <div className="space-y-3 flex-1">
                            <h3 className="text-xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed italic text-sm md:text-base line-clamp-3">
                                "{project.description}"
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, j) => (
                                    <span key={j} className="px-2.5 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-gray-50">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-colors active:scale-95">
                                        <Github className="w-3.5 h-3.5" />
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute -bottom-8 -right-8 text-[120px] font-black text-gray-900/[0.02] select-none group-hover:scale-110 transition-transform">
                            {project.title[0]}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 animate-fade-in">
                    <Folder className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm">No artifacts found matching your query</p>
                </div>
            )}

            {/* Journey Footer */}
            <footer className="mt-24 text-center pb-20 animate-fade-in">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] flex items-center justify-center gap-6">
                    <span className="w-16 h-px bg-gray-200" />
                    B.Tech CS • VIT • 2022-2026
                    <span className="w-16 h-px bg-gray-200" />
                </p>
            </footer>
        </div>
    );
};

export default ProjectsSection;
