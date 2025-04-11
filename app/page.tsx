export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-8 py-16">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
            Korean to English Academic Translation
          </h1>
          <p className="text-gray-700 text-lg">
            Precision. Clarity. Cultural fluency. Built on two decades of experience translating academic articles, books, and university-level materials.
          </p>
        </header>

        <section className="space-y-6 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold font-serif text-gray-900">Academic Articles</h2>
            <p>Peer-reviewed journal submissions, conference papers, and research articles across humanities and social sciences.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold font-serif text-gray-900">Books & Manuscripts</h2>
            <p>Full-length books, edited volumes, and critical translations for publication or internal use.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold font-serif text-gray-900">University Materials</h2>
            <p>Course syllabi, lecture slides, academic bios, and grant proposals — all rendered in fluent academic English.</p>
          </div>
        </section>

        <div className="text-center pt-4">
          <a
            href="mailto:omatty@gmail.com"
            className="inline-block px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Let’s talk about your project — big or small.
        </p>
      </div>
    </main>
  );
}
