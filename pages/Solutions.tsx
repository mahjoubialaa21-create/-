
import React from 'react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-20 pb-20 text-slate-100">
      <section className="bg-emerald-950/40 py-24 px-4 text-center backdrop-blur-md border-b border-emerald-900/20">
        <h1 className="text-5xl font-black mb-6 text-emerald-100 animate__animated animate__fadeInUp">الطريق نحو السلام</h1>
        <p className="text-xl text-emerald-200/60 max-w-2xl mx-auto">السلام ليس مستحيلاً، بل هو خيار استراتيجي يتطلب شجاعة أخلاقية وتخطيطاً مستداماً عبر الأجيال.</p>
      </section>

      {/* Preventive Diplomacy */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4 text-white">
            <span className="text-5xl drop-shadow-lg">🤝</span> الدبلوماسية الوقائية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "الوساطة الدولية", d: "تفعيل دور المنظمات الدولية لفض النزاعات في مهدها قبل التحول للمواجهة المسلحة الدامية." },
              { t: "أنظمة الإنذار المبكر", d: "استخدام تحليل البيانات المتقدمة لرصد بؤر التوتر المجتمعي والسياسي المحتملة عالمياً." },
              { t: "بناء الثقة", d: "تنظيم مسارات حوارية غير رسمية بين الأطراف لكسر الجمود وتقريب وجهات النظر المتناقضة." }
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-[2.5rem] border border-slate-800 shadow-2xl hover:bg-slate-900/50 transition-all duration-500 group border-t-[8px] border-t-emerald-600">
                <h3 className="text-2xl font-black mb-4 text-emerald-400 group-hover:text-white transition-colors">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Peacebuilding */}
      <section className="py-24 bg-slate-950/40 backdrop-blur-md border-y border-slate-900 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4 text-white">
            <span className="text-5xl drop-shadow-lg">📚</span> التعليم وبناء السلام
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "مناهج التسامح", d: "إدراج قيم السلام وتقبل الاختلاف كجزء أساسي من الهوية التربوية للأجيال القادمة." },
              { t: "تبادل ثقافي", d: "بناء جسور التواصل المباشر بين الشعوب لتفكيك الصور النمطية والعدائية الموروثة قديماً." },
              { t: "التفكير النقدي", d: "تمكين الأفراد من تحليل البروباغندا وخطاب الكراهية الذي يسبق دائماً اندلاع الحروب." },
              { t: "الفنون كرسالة", d: "توظيف الفنون التشكيلية والدراما لتوثيق فظاعة الحرب والحلم بمستقبل خالٍ من النزاع." }
            ].map((item, i) => (
              <div key={i} className="p-8 glass-card rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl">
                <h3 className="font-black text-xl mb-4 text-emerald-500">{item.t}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transitional Justice */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center text-white tracking-tighter">العدالة الانتقالية: تضميد الجراح</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="p-8 glass rounded-[2.5rem] border-r-8 border-r-emerald-600 shadow-xl">
                <h3 className="font-black text-2xl mb-4 text-emerald-400">لجان الحقيقة والمصالحة</h3>
                <p className="text-slate-400 leading-relaxed">كشف الحقائق التاريخية بشفافية لضمان عدم تكرار مآسي الماضي البشعة في المستقبل.</p>
              </div>
              <div className="p-8 glass rounded-[2.5rem] border-r-8 border-r-emerald-600 shadow-xl">
                <h3 className="font-black text-2xl mb-4 text-emerald-400">تعويض الضحايا</h3>
                <p className="text-slate-400 leading-relaxed">الاعتراف الرسمي بالمعاناة وجبر الضرر المادي والمعنوي للأفراد والمجتمعات المتضررة بشدة.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 glass rounded-[2.5rem] border-r-8 border-r-emerald-600 shadow-xl">
                <h3 className="font-black text-2xl mb-4 text-emerald-400">الإصلاح المؤسسي</h3>
                <p className="text-slate-400 leading-relaxed">إعادة بناء المؤسسات السيادية على أسس ديمقراطية تضمن حماية حقوق الإنسان للجميع بلا استثناء.</p>
              </div>
              <div className="p-8 glass rounded-[2.5rem] border-r-8 border-r-emerald-600 shadow-xl">
                <h3 className="font-black text-2xl mb-4 text-emerald-400">المساءلة والمحاسبة</h3>
                <p className="text-slate-400 leading-relaxed">ضمان سيادة القانون وعدم إفلات المتورطين في جرائم ضد الإنسانية من العقاب العادل والعلني.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
