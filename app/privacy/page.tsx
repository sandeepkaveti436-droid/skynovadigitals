"use client";

export default function LegalPage() {
  return (
    <main className="bg-white text-black min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tighter mb-12 text-[#F2B800]">
          Legal Transparency.
        </h1>
        <div className="space-y-8 text-gray-500 text-sm leading-relaxed">
          <section>
            <h2 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
              1. Data Collection
            </h2>
            <p>
              At SkyNova Digitals, we value your privacy. We only collect
              information that is necessary for us to provide you with our
              digital services. This includes your name and email provided
              through our contact forms.
            </p>
          </section>
          <section>
            <h2 className="text-black font-bold uppercase tracking-widest text-xs mb-4">
              2. Cookies & Speed
            </h2>
            <p>
              We use essential cookies to ensure your experience on our website
              is as fast as possible, following our 100% PageSpeed performance
              standards.
            </p>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
    </main>
  );
}
