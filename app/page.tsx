export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/Hanok-Ondol-room-maru-floor.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for blur and dimming */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm -z-10" />

      <div className="flex items-center justify-center px-4 py-24">
        <div className="max-w-3xl w-full bg-white/90 shadow-xl rounded-xl p-10 space-y-8">
          <header className="text-center space-y-1">
            <p className="text-sm text-gray-600 tracking-wide">한영 학술 번역</p>
            <h1 className="text-4xl font-serif font-semibold text-gray-900">
              Korean to English Academic Translation
            </h1>
            <p className="text-gray-700 text-lg">
              Precision. Clarity. Cultural fluency. Built on two decades of experience translating academic articles, books, and university-level materials.
            </p>
          </header>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">Academic Articles</h2>
              <p className="text-gray-800">Peer-reviewed journal submissions, conference papers, and research articles across humanities and social sciences.</p>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">Books & Manuscripts</h2>
              <p className="text-gray-800">Full-length books, edited volumes, and critical translations for publication or internal use.</p>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-semibold text-gray-900">University Materials</h2>
              <p className="text-gray-800">Course syllabi, lecture slides, academic bios, and grant proposals — all rendered in fluent academic English.</p>
            </div>
          </section>

          <div className="text-center pt-6">
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
            >
              Contact Me
            </a>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Let’s talk about your project — big or small.
          </p>
        </div>
      </div>
    </main>
  );
}
