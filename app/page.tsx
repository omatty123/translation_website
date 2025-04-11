export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800 px-4">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Precision Translation, Beautifully Delivered
        </h1>
        <p className="text-lg leading-relaxed">
          Professional, nuanced, and culturally-sensitive translations tailored to your specific needs. Transforming words into bridges across languages.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-5 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </main>
  );
}
