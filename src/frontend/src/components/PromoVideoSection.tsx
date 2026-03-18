export default function PromoVideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See AYAN TECH SOLUTIONS in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform businesses with SAP, EMR, ERP, and RCM
            solutions.
          </p>
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dep5immO3qo"
            title="AYAN TECH SOLUTIONS Promo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
