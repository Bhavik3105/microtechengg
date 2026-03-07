import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Microtech Engineering | Palghar Machinery Manufacturer",
  description:
    "Contact Microtech Engineering for inquiries on pressure vessels, pharmaceutical machinery, and industrial equipment. Based in Vasai East, Palghar, Maharashtra. Get a free quote today.",
  alternates: {
    canonical: "https://www.microtechengg.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-purple-600">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Reach out to our team for product inquiries, custom quotations, or technical consultations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Our Contact Details</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Address</h3>
                      <address className="text-sm text-gray-600 not-italic leading-relaxed">
                        Plot 06/302, Umar Compound, Nalasopara Phata,<br />
                        Vasai East, Palghar – 401208,<br />
                        Maharashtra, India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+917045326871" className="text-sm text-gray-900 hover:underline">+91 704 532 6871 / +91 770 097 9405</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Email</h3>
                      <div className="text-sm text-gray-900 space-y-1">
                        <a href="mailto:admin@microtechengg.in" className="block hover:underline">admin@microtechengg.in</a>
                        <a href="mailto:sales@microtechengg.in" className="block hover:underline">sales@microtechengg.in</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-sm text-gray-600">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Find Us on Map</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.096649729446!2d72.8800949095407!3d19.43627188444746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x619a959f3c8b7db9%3A0x3fe97721e51b8e7c!2sMicrotech%20Engineering!5e0!3m2!1sen!2sin!4v1772702838749!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Microtech Engineering location map"
                    aria-label="Google Map showing Microtech Engineering location"
                  />
                  <a
                    href="https://www.google.com/maps/place/Microtech+Engineering/@19.4362719,72.8800949,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-lg shadow-md text-xs font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


