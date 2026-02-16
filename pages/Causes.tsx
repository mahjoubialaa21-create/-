
import React from 'react';

const Causes: React.FC = () => {
  return (
    <div className="pt-20 pb-20 text-slate-100">
      <section className="bg-slate-950/40 py-24 px-4 text-center backdrop-blur-md border-b border-slate-900">
        <h1 className="text-5xl font-black mb-6 animate__animated animate__fadeInDown">لماذا تندلع الحروب؟</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">تحليل عميق للجذور التي تغذي الصراعات المسلحة في العصر الحديث.</p>
      </section>

      {/* Political Causes */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-red-900/30">1</div>
            <h2 className="text-3xl font-black">الأسباب السياسية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "النزاع على الحدود", d: "خلافات تاريخية أو استعمارية حول ترسيم الحدود الجغرافية بين الدول." },
              { t: "أطماع السلطة", d: "رغبة بعض الأنظمة في توسيع نفوذها السياسي وفرض سيطرتها على مناطق جديدة." },
              { t: "فشل الدبلوماسية", d: "عندما تغيب لغة الحوار وتفشل المنظمات الدولية في احتواء الأزمات الناشئة." },
              { t: "التدخلات الأجنبية", d: "دعم أطراف خارجية لنزاعات داخلية سعياً وراء مصالح جيوسياسية." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] glass hover:bg-slate-900/60 transition-all duration-300 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold mb-3 text-red-500 tracking-tight">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Causes */}
      <section className="py-24 bg-slate-950/60 backdrop-blur-md border-y border-slate-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-emerald-900/30">2</div>
            <h2 className="text-3xl font-black">الأسباب الاقتصادية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { t: "الصراع على الموارد", d: "التنافس المحموم على النفط، الغاز، والمعادن الثمينة كسبب لزعزعة استقرار الدول." },
              { t: "أزمات المياه", d: "ندرة المياه العذبة أصبحت سبباً رئيسياً لتوتر العلاقات الدولية في العقد الأخير." },
              { t: "الفقر والبطالة", d: "تدهور الأوضاع المعيشية يخلق بيئة خصبة للتطرف والنزاع المسلح العنيف." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] glass border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold mb-3 text-emerald-500">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
            <table className="w-full text-right glass-card">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="p-6 text-slate-300 font-black">عامل الصراع</th>
                  <th className="p-6 text-slate-300 text-center font-black">نسبة الارتباط بالنزاع</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40 transition-colors"><td className="p-6">الموارد الطبيعية (نفط/معادن)</td><td className="p-6 text-center text-red-400 font-bold">40%</td></tr>
                <tr className="hover:bg-slate-800/40 transition-colors"><td className="p-6">اللا مساواة الاقتصادية</td><td className="p-6 text-center text-red-400 font-bold">25%</td></tr>
                <tr className="hover:bg-slate-800/40 transition-colors"><td className="p-6">الأزمات الغذائية</td><td className="p-6 text-center text-red-400 font-bold">20%</td></tr>
                <tr className="hover:bg-slate-800/40 transition-colors"><td className="p-6">عوامل أخرى</td><td className="p-6 text-center text-red-400 font-bold">15%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Psychological Causes */}
      <section className="py-24 bg-transparent px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-sky-900/30">3</div>
            <h2 className="text-3xl font-black">الأسباب النفسية والاجتماعية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "القومية المتطرفة", d: "الاعتقاد بتفوق عرق أو أمة على أخرى مما يبرر العدوان وتبرئة الذات." },
              { t: "الكراهية التاريخية", d: "تراكم الأحقاد من صراعات سابقة وتوريثها للأجيال الجديدة بلا نقد." },
              { t: "التلاعب الإعلامي", d: "استخدام البروباغندا لشيطنة الطرف الآخر وتعبئة الرأي العام للحرب والموت." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] glass border border-slate-800 hover:border-sky-500/30 transition-all shadow-xl">
                <h3 className="text-xl font-bold mb-3 text-sky-400">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
