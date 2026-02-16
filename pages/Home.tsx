
import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col text-slate-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?auto=format&fit=crop&q=80&w=2070" 
            alt="War and transition landscape" 
            className="w-full h-full object-cover animate-[pulse_15s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight animate__animated animate__fadeInDown tracking-tighter">الحرب: حقيقة مرة وأمل باقٍ</h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s leading-relaxed">عندما تتحدث المدافع، تصمت القوانين. لكن صوت الإنسانية يجب أن يظل مسموعاً لبناء مستقبل يسوده الحوار.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-3xl animate__animated animate__fadeInUp transform hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="text-4xl font-black text-red-500 mb-2">
                <Counter target={100} suffix=" مليون+" />
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">نازح قسراً حول العالم</p>
            </div>
            <div className="glass-card p-6 rounded-3xl animate__animated animate__fadeInUp delay-1 transform hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="text-4xl font-black text-emerald-500 mb-2">
                <Counter target={2} suffix=" تريليون" />
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">دولار تكلفة الحروب سنوياً</p>
            </div>
            <div className="glass-card p-6 rounded-3xl animate__animated animate__fadeInUp delay-2 transform hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="text-4xl font-black text-sky-500 mb-2">
                <Counter target={430} suffix=" مليون" />
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">طفل يعيشون في مناطق نزاع</p>
            </div>
          </div>
          
          <Link 
            to="/causes"
            role="button"
            aria-label="ابدأ رحلة المعرفة واستكشف أسباب الحروب"
            className="inline-block bg-red-600 hover:bg-white hover:text-red-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all duration-300 shadow-2xl animate__animated animate__bounceIn animate__delay-2s"
          >
            ابدأ رحلة المعرفة
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Philosophical Vision */}
      <section className="relative py-32 px-4 overflow-hidden bg-transparent">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-black mb-12 text-white tracking-tight">الرؤية الفلسفية</h2>
          <div className="relative p-12 glass rounded-[3rem] border-r-[12px] border-red-600 italic text-2xl text-slate-200 leading-relaxed shadow-2xl transition-all hover:border-emerald-600 duration-1000">
            "السلام ليس مجرد غياب الحرب، بل هو فضيلة، وحالة ذهنية، ونزعة للخير والثقة والعدالة. إن الحرب هي هزيمة للإنسانية بامتياز، وفهم جذورها هو الخطوة الأولى نحو اقتلاعها."
            <div className="mt-8 text-base font-black text-slate-500 not-italic tracking-widest uppercase">— رؤية فريق البحث (2025/2026)</div>
          </div>
        </div>
      </section>

      {/* Research Pillars - The 3 Main Buttons/Cards */}
      <section className="py-32 bg-slate-950/30 text-white px-4 relative overflow-hidden border-y border-slate-900/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">أركان البحث الثلاثة</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "الجذور والأسباب", desc: "تحليل للعوامل السياسية والاقتصادية والنفسية التي تشعل فتيل الأزمات.", icon: "🔍", path: "/causes", color: "border-red-600" },
              { title: "الندوب والآثار", desc: "توثيق للأضرار البشرية والاجتماعية والمادية التي تخلفها النزاعات.", icon: "🩹", path: "/impacts", color: "border-amber-600" },
              { title: "طريق الخلاص", desc: "استشراف الحلول الدبلوماسية والتعليمية لتحقيق سلام مستدام.", icon: "🕊️", path: "/solutions", color: "border-emerald-600" }
            ].map((pillar, i) => (
              <Link 
                key={i} 
                to={pillar.path}
                role="button"
                aria-label={`استكشف قسم ${pillar.title}`}
                className={`group p-10 rounded-[2.5rem] glass border-t-4 ${pillar.color} hover:bg-slate-900/80 transition-all duration-500 cursor-pointer block hover:-translate-y-4 shadow-2xl`}
              >
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">{pillar.desc}</p>
                <div className="flex items-center text-red-500 font-bold text-sm gap-2 mt-auto">
                  <span>تصفح المحتوى الكامل</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Dialogue */}
      <section className="py-24 bg-gradient-to-r from-red-900/50 to-red-800/50 backdrop-blur-md text-white text-center relative overflow-hidden border-t border-red-700/20">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-black mb-8">شاركنا في حوار السلام</h2>
          <p className="mb-10 text-xl text-red-50 font-light leading-relaxed">استخدم المساعد الذكي الخاص بنا في أسفل الصفحة لطرح أي تساؤلات حول محتوى البحث، أو لاستكشاف حلول جديدة لمستقبل البشرية.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
