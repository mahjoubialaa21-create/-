
import React from 'react';
import Counter from '../components/Counter';

const Impacts: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-transparent text-slate-100">
      <section className="bg-red-950/40 py-24 px-4 text-center backdrop-blur-md border-b border-red-900/20">
        <h1 className="text-5xl font-black mb-6 text-red-100 drop-shadow-lg">ندوب لا تمحى: آثار الحرب</h1>
        <p className="text-xl text-red-200/60 max-w-2xl mx-auto">خلف كل رصاصة، قصة ألم تمتد لأجيال. استعراض شامل لآثار النزاعات المسلحة على الفئات الهشة.</p>
      </section>

      {/* Impact on Children */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-800">
          <div className="md:w-1/3 bg-slate-950 text-white p-12 flex flex-col justify-center border-l border-slate-800">
             <div className="text-6xl mb-6">🧸</div>
             <h2 className="text-3xl font-black mb-4">الأطفال</h2>
             <div className="space-y-4">
                <div className="text-4xl font-black text-red-500"><Counter target={10} suffix=" مليون" /></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">طفل محروم من التعليم حالياً</p>
             </div>
          </div>
          <div className="md:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-900/40 backdrop-blur-sm">
            {[
              { t: "الصدمات النفسية", d: "اضطرابات ما بعد الصدمة والكوابيس الدائمة التي ترافق الطفولة العمر كله." },
              { t: "ضياع المستقبل", d: "انقطاع المسار التعليمي وضياع فرص التطور المهني والذاتي في المجتمعات." },
              { t: "التجنيد القسري", d: "استغلال براءة الأطفال في النزاعات المسلحة كوقود للحرب والقمع." },
              { t: "سوء التغذية", d: "أزمات صحية ونقص حاد في المستلزمات الطبية والنمو السليم البدني." }
            ].map((item, i) => (
              <div key={i} className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-3 text-red-400">{item.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact on Women */}
      <section className="py-20 px-4 bg-slate-950/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse glass rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
          <div className="md:w-1/3 bg-red-950/80 p-12 flex flex-col justify-center border-r border-red-900/30">
             <div className="text-6xl mb-6">👩‍👧</div>
             <h2 className="text-3xl font-black mb-4">النساء</h2>
             <div className="space-y-4">
                <div className="text-4xl font-black text-red-400"><Counter target={60} suffix="%" /></div>
                <p className="text-red-200/60 font-bold uppercase tracking-widest text-xs">من اللاجئين هم من النساء والفتيات</p>
             </div>
          </div>
          <div className="md:w-2/3 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-900/40">
            {[
              { t: "التهجير القسري", d: "فقدان المأوى والبحث عن الأمان في ظروف صعبة ومهينة أحياناً تحت وطأة اللجوء." },
              { t: "تحمل مسؤولية الأسرة", d: "فقدان المعيل والقيام بأدوار مضاعفة في غياب الرجال أو رحيلهم المبكر." },
              { t: "العنف الممنهج", d: "التعرض لانتهاكات جسدية وحقوقية بشعة خلال فترات النزاع والهروب من الموت." },
              { t: "نقص الرعاية الصحية", d: "صعوبة الحصول على خدمات الأمومة والطفولة في ظل انهيار الأنظمة الصحية." }
            ].map((item, i) => (
              <div key={i} className="hover:-translate-x-2 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-3 text-red-400">{item.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact Table */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-white tracking-tighter">الآثار الاقتصادية العالمية والمحلية</h2>
          <div className="overflow-x-auto rounded-[2.5rem] glass border border-slate-800 shadow-2xl">
            <table className="w-full text-right">
              <thead className="bg-slate-950/60 border-b border-slate-800">
                <tr>
                  <th className="p-6 font-black text-slate-300 tracking-wider uppercase text-xs">القطاع المتأثر</th>
                  <th className="p-6 font-black text-slate-300 tracking-wider uppercase text-xs">طبيعة الضرر</th>
                  <th className="p-6 font-black text-slate-300 tracking-wider uppercase text-xs">النتيجة الكارثية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-red-400">البنية التحتية</td>
                  <td className="p-6 text-slate-400">تدمير الطرق، الجسور، ومحطات الكهرباء والمياه الحيوية</td>
                  <td className="p-6 text-red-500 font-black">شلل اقتصادي تام للمجتمعات</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-red-400">الاستثمار</td>
                  <td className="p-6 text-slate-400">هروب رؤوس الأموال والمستثمرين العالميين والمحليين فوراً</td>
                  <td className="p-6 text-red-500 font-black">انهيار حاد في الناتج المحلي</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-red-400">العملة المحلية</td>
                  <td className="p-6 text-slate-400">انهيار القيمة الشرائية وارتفاع جنوني في أسعار السلع</td>
                  <td className="p-6 text-red-500 font-black">تضخم مفرط وفقر مدقع للسكان</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-bold text-red-400">الموارد البشرية</td>
                  <td className="p-6 text-slate-400">هجرة العقول والكفاءات والعمالة الماهرة نحو الخارج بحثاً عن الأمان</td>
                  <td className="p-6 text-red-500 font-black">توقف عجلة التنمية المستدامة</td>
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
