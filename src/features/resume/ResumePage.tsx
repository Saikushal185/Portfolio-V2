import {
    Download,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Award,
    Cloud,
    Brain,
    Eye
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useFavicon } from "../../hooks/useFavicon";

export const ResumePage = () => {
    useFavicon('resume');

    return (
        <>
            <Helmet>
                <title>Resume | Sai Kushal</title>
                <meta name="description" content="View and download Sai Kushal Vittanala's resume. Data Analytics & AI/ML Specialist with expertise in Python, TensorFlow, Power BI, and cloud technologies." />
            </Helmet>
            <div className="min-h-screen py-12 px-4 md:px-8 print:p-0 print:bg-white flex flex-col">
                {/* Actions Bar - Hidden on Print */}
                <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center w-full print:hidden animate-fade-in">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Digital Resume</h1>
                    <div className="flex gap-4">
                        <a
                            href="/SaiKushalDA.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-bold text-xs uppercase tracking-widest shadow-sm"
                        >
                            <Eye className="w-4 h-4" />
                            View Original
                        </a>
                        <a
                            href="/SaiKushalDA.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20"
                        >
                            <Download className="w-4 h-4" />
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* Resume Sheet */}
                <div className="max-w-[210mm] mx-auto bg-white shadow-2xl shadow-gray-200/50 print:shadow-none print:w-full print:max-w-none rounded-none md:rounded-[2px] overflow-hidden relative flex-1">
                    {/* Top Accent Line */}
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 print:h-1" />

                    <div className="p-8 md:p-12 print:p-8 space-y-8">
                        {/* Header */}
                        <header className="border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between gap-6 md:items-start">
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                                    Vittanala Sai <span className="text-blue-600">Kushal</span>
                                </h1>
                                <p className="text-lg font-medium text-gray-500 tracking-wide uppercase">Data Analytics & AI/ML Specialist</p>
                            </div>

                            <div className="flex flex-col gap-2 text-sm text-gray-600 font-medium">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <a href="mailto:saikushal185@gmail.com" className="hover:text-blue-600">saikushal185@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span>+91 9121274005</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span>Andhra Pradesh, IN</span>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <a href="https://github.com/Saikushal185" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-900"><Github className="w-5 h-5" /></a>
                                    <a href="https://www.linkedin.com/in/sai-kushal-vittanala/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><Linkedin className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </header>

                        {/* Summary */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-blue-600" />
                                Professional Summary
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Computer Science student with a strong focus on Data Analytics and AI/ML. Expertise spans data analytics tools (Power BI, Tableau), machine learning (Scikit-learn, TensorFlow), and full-stack development. Demonstrated problem-solving skills with 500+ LeetCode problems solved (1800+ rating, Knight badge) and practical experience in building real-time computer vision systems and scalable web applications.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
                            {/* Main Column */}
                            <div className="md:col-span-2 space-y-8">

                                {/* Projects */}
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Selected Projects
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="group">
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Urban Congestion Prediction System</h4>
                                                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded whitespace-nowrap">Python, Scikit-learn</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                                Built traffic prediction model using Random Forest and Decision Trees on 50K+ records achieving 89% accuracy. Created web interface with TypeScript and Matplotlib heatmap visualizations.
                                            </p>
                                        </div>

                                        <div className="group">
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Retail Store Sales Analysis</h4>
                                                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded whitespace-nowrap">Power BI, SQL, Python</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                                Analyzed 25K+ sales transactions using SQL and Python to identify top-selling products and regional performance. Built Power BI dashboard with monthly trends.
                                            </p>
                                        </div>

                                        <div className="group">
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Face Recognition System</h4>
                                                <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded whitespace-nowrap">Python, TensorFlow, OpenCV</span>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                                Built face detection and recognition system achieving 97% accuracy with real-time processing at 30 FPS. Reduced incorrect matches by 70%.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Experience */}
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Experience
                                    </h3>
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-base font-bold text-gray-900">Data Analyst Intern</h4>
                                            <span className="text-sm font-bold text-gray-500">Jul - Sep 2025</span>
                                        </div>
                                        <p className="text-sm text-blue-600 font-medium">Brightix IT Solutions • Remote</p>
                                        <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                                            <li>Completed training in SQL queries, Python scripting, Tableau visualizations, and Power BI dashboards.</li>
                                            <li>Cleaned and prepared datasets using Excel and Python, removing duplicates and handling missing values.</li>
                                            <li>Created bar charts, line graphs, and pivot tables to track sales performance and customer trends.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Research */}
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Research Publications
                                    </h3>
                                    <div>
                                        <h4 className="text-base font-bold text-gray-900">Prediction of Kidney Disease and Urinary Disease using Machine Learning</h4>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Presented at ADSSS Conference 2024. Achieved 92.31% accuracy using Random Forest classifier. Cleaned patient medical records and selected important features using correlation analysis.
                                        </p>
                                    </div>
                                </section>

                                {/* Education */}
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Education
                                    </h3>
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-base font-bold text-gray-900">Vellore Institute of Technology</h4>
                                            <span className="text-sm font-bold text-gray-500">2022 - 2026</span>
                                        </div>
                                        <p className="text-sm text-gray-600 font-medium">B.Tech in Computer Science and Engineering</p>
                                        <p className="text-sm text-blue-600 font-bold mt-1">CGPA: 8.44/10</p>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Technical Skills
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">Programming Languages</h5>
                                            <div className="flex flex-wrap gap-1.5">
                                                {["Python", "JavaScript", "Java", "C"].map(s => (
                                                    <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">Backend & Database</h5>
                                            <div className="flex flex-wrap gap-1.5">
                                                {["Node.js", "MySQL", "MongoDB", "REST APIs"].map(s => (
                                                    <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">Data Science & AI/ML</h5>
                                            <div className="flex flex-wrap gap-1.5">
                                                {["TensorFlow", "OpenCV", "Pandas & NumPy", "Scikit-learn"].map(s => (
                                                    <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">Cloud & DevOps</h5>
                                            <div className="flex flex-wrap gap-1.5">
                                                {["AWS", "Docker", "Git", "CI/CD"].map(s => (
                                                    <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">{s}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-xs font-bold text-gray-900 uppercase mb-2">Development Tools</h5>
                                            <div className="flex flex-wrap gap-1.5">
                                                {["VS Code", "Jupyter Notebook", "Claude Code"].map(s => (
                                                    <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Certifications
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <Cloud className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                                            <span>AWS Certified: Cloud Practitioner, Foundations, Architecting</span>
                                        </li>
                                        <li className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <Brain className="w-3.5 h-3.5 text-red-600 shrink-0" />
                                            <span>Oracle Certified: OCI 2025 Generative AI Professional</span>
                                        </li>
                                        <li className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <Cloud className="w-3.5 h-3.5 text-green-600 shrink-0" />
                                            <span>MongoDB University: Intermediate DB Admin</span>
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-8 h-px bg-blue-600" />
                                        Achievements
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                            <span>LeetCode 500+ Solved (1800+ Rating, Knight Badge)</span>
                                        </li>
                                        <li className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <Award className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                                            <span>CodeChef 1-Star (1300+ Rating)</span>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Footer on Print */}
                    <div className="hidden print:block text-center mt-12 pt-4 border-t border-gray-100">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                            Generated from portfolio.saiii.in
                        </p>
                    </div>
                </div>

                {/* Global Footer (Screen Only) */}
                <footer className="mt-auto pt-16 text-center pb-8 animate-fade-in print:hidden">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] flex items-center justify-center gap-6">
                        <span className="w-16 h-px bg-gray-300" />
                        B.Tech CS • VIT • 2022-2026
                        <span className="w-16 h-px bg-gray-300" />
                    </p>
                </footer>
            </div>
        </>
    );
};

export default ResumePage;
