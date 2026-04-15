/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Mail, 
  Linkedin, 
  Github,
  ArrowRight,
  Menu,
  X,
  Maximize2
} from "lucide-react";
import { useState, useEffect } from "react";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-px bg-black/10 w-full mt-8" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      title: "에어부산 신규 노선 검토 및 데이터 구조화",
      content: "노선별 마진, 시장 공급 추이 데이터 정제 및 경영진 보고용 핵심 지표 수립",
      result: "데이터 기반의 직관적 보고 체계 구축으로 경영진의 신속한 판단 지원",
      image: "https://picsum.photos/seed/airline/800/600",
      details: [
        "노선별 마진 분석 시스템 구축",
        "시장 공급 추이 실시간 모니터링 데이터 정제",
        "경영진 보고용 핵심 KPI 대시보드 구조화",
        "데이터 시각화를 통한 의사결정 속도 30% 향상"
      ]
    },
    {
      title: "재무 자금 집행 프로세스 최적화",
      content: "세금, 인건비, 대금 지급 업무 수행 및 데일리 체크리스트 도입",
      result: "월평균 1,500건 이상의 자금 집행 무사고(0건 오류) 달성",
      image: "https://picsum.photos/seed/finance/800/600",
      details: [
        "자금 집행 프로세스 표준화 및 매뉴얼 제작",
        "데일리 체크리스트 도입을 통한 휴먼 에러 원천 차단",
        "월평균 1,500건 이상의 고액 자금 집행 관리",
        "재무 건전성 확보를 위한 일일 자금 수지 보고 체계 강화"
      ]
    },
    {
      title: "교육봉사 소규모 프로젝트 학습 도입",
      content: "일방향 수업에서 '참여형 캐릭터 스토리텔링' 수업으로 커리큘럼 전환",
      result: "학생 참여도 증대 및 수강 인원 75% 증가 (4명 → 7명)",
      image: "https://picsum.photos/seed/education/800/600",
      details: [
        "H-점프스쿨 교육봉사 프로그램 참여",
        "캐릭터 스토리텔링 기반의 인터랙티브 커리큘럼 설계",
        "학생 개별 맞춤형 피드백 시스템 도입",
        "지역 사회 교육 격차 해소를 위한 소규모 학습 모델 성공적 안착"
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase">Portfix</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-widest hover:text-gray-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Let's Talk
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold uppercase tracking-tighter"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-massive font-bold uppercase mb-12"
            >
              KIM <br />
              <span className="text-outline">DANG DANG</span>
            </motion.h1>
            
            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[3/4] bg-gray-100 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src="https://picsum.photos/seed/business/800/1200" 
                    alt="Kim Dang-dang"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-4 -right-4 w-full h-full border border-black/10 -z-10" />
                </motion.div>
              </div>

              <div className="md:col-span-8">
                <div className="max-w-xl">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 block mb-4">
                      [ Management Support & Strategy Expert ]
                    </span>
                    <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight">
                      "주체적인 문제 해결 능력과 재무적 데이터 분석력을 바탕으로 조직의 전략적 의사결정을 지원하는 파트너입니다."
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest">
                      Available for Task
                    </div>
                    <div className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
                      Download CV <ArrowUpRight size={14} />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section id="skills" className="bg-black text-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 block mb-4">
                01 / Core Competencies
              </span>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                Why Choose <br /> My Service?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {[
                {
                  icon: <TrendingUp className="mb-6" />,
                  title: "전략적 분석력",
                  desc: "시장 데이터 및 실적 지표 정제/구조화를 통한 경영 의사결정 근거 수립",
                  tag: "STRATEGY"
                },
                {
                  icon: <ShieldCheck className="mb-6" />,
                  title: "재무적 전문성",
                  desc: "월평균 1,500건 이상의 자금 집행을 오류 없이 수행하는 꼼꼼함과 책임감",
                  tag: "FINANCE"
                },
                {
                  icon: <Zap className="mb-6" />,
                  title: "주체적 실행력",
                  desc: "비효율적인 프로세스를 감지하고 공용 양식 도입 등 실질적 개선안 도출",
                  tag: "EXECUTION"
                }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black p-12 group hover:bg-white hover:text-black transition-all duration-500"
                >
                  <div className="text-gray-500 group-hover:text-black transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-2 block">
                    {skill.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{skill.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-600 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Evidence */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeader 
            title="My Achievements" 
            subtitle="Quantitative indicators and professional milestones that define my career path."
          />

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
                Professional Experience
              </h3>
              <div className="space-y-12">
                {[
                  {
                    year: "2023 - 2024",
                    company: "에어부산",
                    role: "전략경영팀 기획파트 (1년)",
                    desc: "노선별 마진 및 시장 공급 추이 데이터 정제"
                  },
                  {
                    year: "2023",
                    company: "에어부산",
                    role: "재무팀 (5개월)",
                    desc: "자금 집행 및 데일리 체크리스트 도입"
                  },
                  {
                    year: "2022",
                    company: "현대중공업",
                    role: "인사총무팀 인턴",
                    desc: "조직 지원 및 행정 프로세스 보조"
                  }
                ].map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-12 group"
                  >
                    <div className="w-12 flex flex-col items-start text-[10px] font-mono text-gray-400 pt-1.5 leading-none gap-1 shrink-0">
                      {exp.year.split(' ').map((part, idx) => (
                        <span key={idx}>{part}</span>
                      ))}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {exp.company}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 mb-2">{exp.role}</p>
                      <p className="text-sm text-gray-400">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-12">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
                Key Skills & Education
              </h3>
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 block mb-2">MAJOR</span>
                  <p className="text-lg font-bold">경영학 전공 (재무/회계/전략 중심)</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "관리회계", "재무제표 분석", 
                    "데이터 정제", "시각화", 
                    "MS Office", "전략 수립"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-black" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Selected Projects" 
              subtitle="Real-world impact through data-driven strategies and process optimization."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white border border-black/5 group overflow-hidden cursor-pointer relative"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-black p-4 rounded-full">
                        <Maximize2 size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-4 leading-tight">{project.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 block mb-1 uppercase">Action</span>
                        <p className="text-sm text-gray-600">{project.content}</p>
                      </div>
                      <div className="pt-4 border-t border-black/5">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-black block mb-1 uppercase">Result</span>
                        <p className="text-sm font-bold text-black">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
                Crafting <br /> Strategic <br /> Stories
              </h2>
              <p className="text-xl text-gray-500 mb-12 max-w-md">
                조직의 성장을 위해 데이터와 전략을 연결합니다. <br />
                함께 더 나은 의사결정을 만들어가고 싶습니다.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:shortstop8820@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-xl font-bold">shortstop8820@gmail.com</span>
                </a>
                <div className="flex gap-4">
                  {[Linkedin, Github].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Name*</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="Jane Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email*</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject*</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message*</label>
                  <textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors h-32 resize-none" placeholder="How can I help you?" />
                </div>
                <button className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div>
              <h2 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                KIM D.D.
              </h2>
              <p className="text-gray-500 max-w-sm">
                Thanks for visiting my creative portfolio. Let's build something strategic together.
              </p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ArrowUpRight className="-rotate-45" />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Back to top</span>
            </div>
          </div>

          <div className="h-px bg-white/10 w-full mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <div className="flex gap-8">
              <span>© 2026 Kim Dang-dang</span>
              <span>All Rights Reserved</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 bg-black text-white p-2 hover:bg-gray-800 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="bg-gray-100">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 block mb-4 uppercase">
                    Project Details
                  </span>
                  <h3 className="text-3xl font-bold mb-8 leading-tight uppercase tracking-tighter">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">The Challenge & Action</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedProject.content}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Key Achievements</h4>
                      <ul className="space-y-3">
                        {selectedProject.details.map((detail: string, idx: number) => (
                          <li key={idx} className="flex gap-3 text-sm text-gray-600">
                            <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-black/10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-2">Final Impact</h4>
                      <p className="text-xl font-bold text-black tracking-tight">{selectedProject.result}</p>
                    </div>
                  </div>

                  <button 
                    className="mt-12 w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
