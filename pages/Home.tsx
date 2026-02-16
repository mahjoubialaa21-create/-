
import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img src="https://picsum.photos/1920/1080?grayscale" alt="War background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate__animated animate__fadeInDown">الحرب: حقيقة مرة وأمل باقٍ</h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">عندما تتحدث المدافع، تصمت القوانين. لكن صوت الإنسانية يجب أن يظل مسموعاً.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 animate__animated animate__fadeInUp delay-1">
              <div className="text-4xl font-black text-red-500 mb-2">
                <Counter target={100} suffix=" مليون+" />
              </div>
              <p className="text-sm text-slate-300">نازح قسراً حول العالم</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 animate__animated animate__fadeInUp delay-2">
              <div className="text-4xl font-black text-red-500 mb-2">
                <Counter target={2} suffix=" تريليون" />
              </div>
              <p className="text-sm text-slate-300">دولار تكلفة الحروب سنوياً</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 animate__animated animate__fadeInUp delay-3">
              <div className="text-4xl font-black text-red-500 mb-2">
                <Counter target={430} suffix=" مليون" />
              </div>
              <p className="text-sm text-slate-300">طفل يعيشون في مناطق نزاع</p>
            </div>
          </div>
          
          <Link 
            to="/causes"
            role="button"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 animate__animated animate__bounceIn animate__delay-2s shadow-lg"
          >
            ابدأ رحلة المعرفة
          </Link>
        </div>
      </section>

      {/* Philosophical Vision */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900">الرؤية الفلسفية</h2>
          <div className="relative p-10 bg-slate-50 rounded-3xl border-r-8 border-red-600 italic text-xl text-slate-700 leading-relaxed shadow-sm">
            "السلام ليس مجرد غياب الحرب، بل هو فضيلة، وحالة ذهنية، ونزعة للخير والثقة والعدالة. إن الحرب هي هزيمة للإنسانية بامتياز، وفهم جذورها هو الخطوة الأولى نحو اقتلاعها."
            <div className="mt-4 text-sm font-bold text-slate-500 not-italic">— رؤية فريق البحث</div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">أركان البحث الثلاثة</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "الجذور والأسباب", desc: "تحليل للعوامل السياسية والاقتصادية والنفسية التي تشعل فتيل الأزمات.", icon: "🔍", path: "/causes" },
              { title: "الندوب والآثار", desc: "توثيق للأضرار البشرية والاجتماعية والمادية التي تخلفها النزاعات.", icon: "🩹", path: "/impacts" },
              { title: "طريق الخلاص", desc: "استشراف الحلول الدبلوماسية والتعليمية لتحقيق سلام مستدام.", icon: "🕊️", path: "/solutions" }
            ].map((pillar, i) => (
              <Link 
                key={i} 
                to={pillar.path}
                className="group p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-red-600 transition-all cursor-pointer block hover:-translate-y-2 transform duration-300"
              >
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
                <div className="mt-6 flex items-center text-red-500 font-bold text-sm gap-2">
                  <span>اقرأ المزيد</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Dialogue */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">شاركنا في حوار السلام</h2>
          <p className="mb-8 text-red-100">استخدم المساعد الذكي الخاص بنا في أسفل الصفحة لطرح أي تساؤلات حول محتوى البحث.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
