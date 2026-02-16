
import React from 'react';
import Counter from '../components/Counter';

const Impacts: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50">
      <section className="bg-red-700 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-black mb-6">ندوب لا تمحى: آثار الحرب</h1>
        <p className="text-xl text-red-100 max-w-2xl mx-auto">خلف كل رصاصة، قصة ألم تمتد لأجيال. استعراض شامل لآثار النزاعات المسلحة.</p>
      </section>

      {/* Impact on Children */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
          <div className="md:w-1/3 bg-slate-900 text-white p-12 flex flex-col justify-center">
             <div className="text-6xl mb-6">🧸</div>
             <h2 className="text-3xl font-black mb-4">الأطفال</h2>
             <div className="space-y-4">
                <div className="text-2xl font-bold text-red-500"><Counter target={10} suffix=" مليون" /></div>
                <p className="text-slate-400">طفل محروم من التعليم بسبب الحروب</p>
             </div>
          </div>
          <div className="md:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { t: "الصدمات النفسية", d: "اضطرابات ما بعد الصدمة والكوابيس الدائمة." },
              { t: "ضياع المستقبل", d: "انقطاع المسار التعليمي وضياع فرص التطور." },
              { t: "التجنيد القسري", d: "استغلال براءة الأطفال في النزاعات المسلحة." },
              { t: "سوء التغذية", d: "أزمات صحية ونقص حاد في المستلزمات الطبية." }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact on Women */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse rounded-3xl overflow-hidden border border-slate-800">
          <div className="md:w-1/3 bg-red-900 p-12 flex flex-col justify-center">
             <div className="text-6xl mb-6">👩‍👧</div>
             <h2 className="text-3xl font-black mb-4">النساء</h2>
             <div className="space-y-4">
                <div className="text-2xl font-bold text-red-400"><Counter target={60} suffix="%" /></div>
                <p className="text-slate-300">من اللاجئين هم من النساء والأطفال</p>
             </div>
          </div>
          <div className="md:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-800">
            {[
              { t: "التهجير القسري", d: "فقدان المأوى والبحث عن الأمان في ظروف صعبة." },
              { t: "تحمل مسؤولية الأسرة", d: "فقدان المعيل والقيام بأدوار مضاعفة في غياب الرجال." },
              { t: "العنف الممنهج", d: "التعرض لانتهاكات جسدية وحقوقية خلال النزاعات." },
              { t: "نقص الرعاية الصحية", d: "صعوبة الحصول على خدمات الأمومة والطفولة." }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg mb-2 text-red-400">{item.t}</h3>
                <p className="text-sm text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact on Soldiers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
          <div className="md:w-1/3 bg-slate-800 text-white p-12 flex flex-col justify-center">
             <div className="text-6xl mb-6">🪖</div>
             <h2 className="text-3xl font-black mb-4">الجنود</h2>
             <div className="space-y-4">
                <div className="text-2xl font-bold text-blue-500"><Counter target={300} suffix=" ألف+" /></div>
                <p className="text-slate-400">حالة إعاقة جسدية سنوياً بسبب الألغام</p>
             </div>
          </div>
          <div className="md:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { t: "الإعاقات الجسدية", d: "فقدان الأطراف والإصابات المستديمة." },
              { t: "الاضطراب النفسي", d: "صعوبة الاندماج في المجتمع المدني بعد العودة." },
              { t: "التفكك الأسري", d: "الغياب الطويل يؤدي إلى تصدع العلاقات الاجتماعية." },
              { t: "أزمة الهوية", d: "صراع داخلي حول جدوى القتال وآثاره الأخلاقية." }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact Table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">الآثار الاقتصادية العالمية والمحلية</h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-right">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-6 font-black text-slate-700">القطاع المتأثر</th>
                  <th className="p-6 font-black text-slate-700">طبيعة الضرر</th>
                  <th className="p-6 font-black text-slate-700">النتيجة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold">البنية التحتية</td>
                  <td className="p-6">تدمير الطرق، الجسور، ومحطات الكهرباء</td>
                  <td className="p-6 text-red-600">شلل اقتصادي تام</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold">الاستثمار</td>
                  <td className="p-6">هروب رؤوس الأموال والمستثمرين</td>
                  <td className="p-6 text-red-600">انخفاض الناتج المحلي</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold">العملة المحلية</td>
                  <td className="p-6">انهيار القيمة الشرائية للعملة</td>
                  <td className="p-6 text-red-600">تضخم مفرط وفقر</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold">الموارد البشرية</td>
                  <td className="p-6">هجرة العقول والعمالة الماهرة</td>
                  <td className="p-6 text-red-600">توقف عجلة التنمية</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impacts;
