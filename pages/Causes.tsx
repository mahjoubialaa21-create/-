
import React from 'react';

const Causes: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-black mb-6">لماذا تندلع الحروب؟</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">تحليل عميق للجذور التي تغذي الصراعات المسلحة في العصر الحديث.</p>
      </section>

      {/* Political Causes */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">1</div>
            <h2 className="text-3xl font-black">الأسباب السياسية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "النزاع على الحدود", d: "خلافات تاريخية أو استعمارية حول ترسيم الحدود الجغرافية بين الدول." },
              { t: "أطماع السلطة", d: "رغبة بعض الأنظمة في توسيع نفوذها السياسي وفرض سيطرتها على مناطق جديدة." },
              { t: "فشل الدبلوماسية", d: "عندما تغيب لغة الحوار وتفشل المنظمات الدولية في احتواء الأزمات الناشئة." },
              { t: "التدخلات الأجنبية", d: "دعم أطراف خارجية لنزاعات داخلية سعياً وراء مصالح جيوسياسية." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-red-700">{item.t}</h3>
                <p className="text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Causes */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">2</div>
            <h2 className="text-3xl font-black">الأسباب الاقتصادية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { t: "الصراع على الموارد", d: "التنافس المحموم على النفط، الغاز، والمعادن الثمينة." },
              { t: "أزمات المياه", d: "ندرة المياه العذبة أصبحت سبباً رئيسياً لتوتر العلاقات الدولية." },
              { t: "الفقر والبطالة", d: "تدهور الأوضاع المعيشية يخلق بيئة خصبة للتطرف والنزاع المسلح." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 text-green-500">{item.t}</h3>
                <p className="text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <table className="w-full text-right bg-slate-800">
              <thead className="bg-slate-700">
                <tr>
                  <th className="p-4 text-slate-300">عامل الصراع</th>
                  <th className="p-4 text-slate-300 text-center">نسبة الارتباط بالنزاع</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr><td className="p-4">الموارد الطبيعية (نفط/معادن)</td><td className="p-4 text-center text-red-400">40%</td></tr>
                <tr><td className="p-4">اللا مساواة الاقتصادية</td><td className="p-4 text-center text-red-400">25%</td></tr>
                <tr><td className="p-4">الأزمات الغذائية</td><td className="p-4 text-center text-red-400">20%</td></tr>
                <tr><td className="p-4">عوامل أخرى</td><td className="p-4 text-center text-red-400">15%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Psychological Causes */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">3</div>
            <h2 className="text-3xl font-black">الأسباب النفسية والاجتماعية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "القومية المتطرفة", d: "الاعتقاد بتفوق عرق أو أمة على أخرى مما يبرر العدوان." },
              { t: "الكراهية التاريخية", d: "تراكم الأحقاد من صراعات سابقة وتوريثها للأجيال الجديدة." },
              { t: "التلاعب الإعلامي", d: "استخدام البروباغندا لشيطنة الطرف الآخر وتعبئة الرأي العام للحرب." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-blue-800">{item.t}</h3>
                <p className="text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
