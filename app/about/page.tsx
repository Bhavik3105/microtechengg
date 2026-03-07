import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Microtech Engineering | Pharmaceutical Machinery Manufacturer Mumbai",
  description:
    "Learn about Microtech Engineering – a leading manufacturer of pharmaceutical and industrial machinery in Mumbai since 2020. cGMP compliant, custom-engineered solutions.",
  alternates: {
    canonical: "https://www.microtechengineering.in/about",
  },
};

const capabilities = [
  {
    title: "SS Fabrication",
    description: "Expert fabrication of SS 304 & SS 316L vessels, tanks, and structural components.",
  },
  {
    title: "Precision Welding",
    description: "Orbital welding, TIG welding, and full penetration welds for pharmaceutical-grade equipment.",
  },
  {
    title: "Surface Finishing",
    description: "Mirror polishing (Ra ≤ 0.2–0.4 µm), electropolishing, and passivation services.",
  },
  {
    title: "Custom Engineering",
    description: "In-house design and engineering team delivering custom solutions to exact specifications.",
  },
  {
    title: "Quality Testing",
    description: "Hydrostatic testing, dye penetrant testing, radiography, and dimensional inspection.",
  },
  {
    title: "Installation Support",
    description: "On-site installation, commissioning, and operator training support across India.",
  },
];

const milestones = [
  { year: "2020", event: "Microtech Engineering founded in Mumbai." },
  { year: "2021", event: "Expanded product range to include pharmaceutical processing equipment." },
  { year: "2022", event: "Expanded workshop capacity." },
  { year: "2023", event: "Achieved 100+ client milestone across pharmaceutical and chemical sectors." },
  { year: "2024+", event: "Continuing expansion of product lines and manufacturing capacity." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Microtech Engineering</h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            A trusted manufacturer of industrial and pharmaceutical machinery, based in Mumbai since 2020.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 id="overview-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Microtech Engineering is a Mumbai-based manufacturer, exporter, and supplier of
                high-performance industrial and pharmaceutical machinery. Established in 2020, we have
                rapidly grown to serve clients across India and international markets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our product range covers the complete spectrum of pharmaceutical processing equipment — from
                pressure vessels and PW/WFI storage tanks to liquid oral processing plants, ointment
                manufacturing plants, blenders, dryers, and filtration systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every product we manufacture adheres to stringent quality standards including cGMP, GMP, and ASME — ensuring our clients receive equipment that not only
                performs optimally but also meets all regulatory inspection requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "2020", label: "Year Established" },
                { value: "11+", label: "Product Lines" },
                { value: "100+", label: "Clients Served" },
                { value: "PAN India", label: "Delivery Network" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gradient-to-br from-purple-100 to-orange-100 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-gray-50" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="capabilities-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Manufacturing Capabilities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our in-house manufacturing facility is equipped with state-of-the-art machinery and a
              highly skilled team to deliver precision-engineered equipment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-gray-900" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="quality-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Quality Assurance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At Microtech Engineering, quality is not an afterthought — it is embedded in every stage of
                our manufacturing process. From raw material selection to final dispatch, our quality control
                team ensures every product meets the required specifications and standards.
              </p>
              <ul className="space-y-3">
                {[
                  "Raw material certification",
                  "Dimensional inspection at each fabrication stage",
                  "Hydrostatic testing for pressure-rated equipment",
                  "Dye penetrant (DP) and radiography testing for welds",
                  "Surface roughness verification (Ra measurement)",
                  "Pre-dispatch inspection with customer documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { standard: "cGMP", desc: "Pharmaceutical Grade" },
                { standard: "ASME", desc: "Pressure Vessels" },
              ].map((cert) => (
                <div key={cert.standard} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">{cert.standard}</div>
                  <div className="text-xs text-gray-600">{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-16 bg-white" aria-labelledby="journey-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="journey-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" aria-hidden="true"></div>
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6 pl-10 relative">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-purple-200 to-orange-200 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden="true">
                    {m.year.slice(-2)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{m.year}</div>
                    <p className="text-sm text-gray-600">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Partner With Microtech Engineering
          </h2>
          <p className="text-gray-500 mb-6">
            Let our engineering team help you design and manufacture the perfect equipment for your process needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              View Our Products
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
