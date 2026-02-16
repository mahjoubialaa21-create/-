
import React from 'react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-20 pb-20 bg-slate-50">
      <section className="bg-green-700 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-black mb-6">الطريق نحو السلام</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">السلام ليس مستحيلاً، بل هو خيار يتطلب شجاعة وتخطيطاً مستمراً.</p>
      </section>

      {/* Preventive Diplomacy */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
            <span className="text-4xl">🤝</span> الدبلوماسية الوقائية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "الوساطة الدولية", d: "تفعيل دور الأمم المتحدة والمنظمات الإقليمية لفض النزاعات قبل تفاقمها." },
              { t: "أنظمة الإنذار المبكر", d: "استخدام البيانات والتحليلات لرصد بؤر التوتر المحتملة والتدخل السريع." },
              { t: "بناء الثقة", d: "تنظيم لقاءات دورية بين الأطراف المتنازعة لتقريب وجهات النظر." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow border-t-8 border-t-green-600">
                <h3 className="text-xl font-bold mb-4 text-slate-800">{item.t}</h3>
                <p className="text-slate-600 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Peacebuilding */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
            <span className="text-4xl">📚</span> التعليم وبناء السلام
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "مناهج التسامح", d: "إدراج مفاهيم تقبل الآخر والحوار في المناهج الدراسية." },
              { t: "تبادل ثقافي", d: "برامج لتبادل الطلاب بين الدول لكسر الصور النمطية." },
              { t: "التفكير النقدي", d: "تعليم الأجيال كيفية تمييز الأخبار المضللة وخطاب الكراهية." },
              { t: "الفنون من أجل السلام", d: "استخدام المسرح والموسيقى كوسيلة للتعبير عن الرفض للحرب." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-green-500 transition-colors">
                <h3 className="font-bold text-lg mb-3 text-green-400">{item.t}</h3>
                <p className="text-sm text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transitional Justice */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">العدالة الانتقالية: تضميد الجراح</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="p-6 bg-green-50 rounded-2xl">
                <h3 className="font-bold mb-2">لجان الحقيقة والمصالحة</h3>
                <p className="text-sm text-slate-600">كشف الحقائق التاريخية وضمان عدم تكرار الانتهاكات.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl">
                <h3 className="font-bold mb-2">تعويض الضحايا</h3>
                <p className="text-sm text-slate-600">جبر الضرر المادي والمعنوي للمتضررين من النزاع.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-green-50 rounded-2xl">
                <h3 className="font-bold mb-2">الإصلاح المؤسسي</h3>
                <p className="text-sm text-slate-600">تطهير المؤسسات الأمنية والقضائية من الفساد والظلم.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl">
                <h3 className="font-bold mb-2">المساءلة والمحاسبة</h3>
                <p className="text-sm text-slate-600">ضمان عدم إفلات مرتكبي جرائم الحرب من العقاب.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Development */}
      <section className="py-24 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
            <span className="text-4xl">🌍</span> التنمية المستدامة والعدالة الاجتماعية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-green-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-xl font-bold mb-4">توزيع عادل للثروات</h3>
              <p className="text-slate-600">تقليل الفجوة بين الأغنياء والفقراء يقلل من احتمالية الصدامات الداخلية.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-green-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-xl font-bold mb-4">الأمن الغذائي والمائي</h3>
              <p className="text-slate-600">الاستثمار في الزراعة المستدامة يمنع الحروب القادمة على الموارد.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-green-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-xl font-bold mb-4">تمكين الشباب</h3>
              <p className="text-slate-600">توفير فرص عمل كريمة يحمي الشباب من الانخراط في الجماعات المسلحة.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
