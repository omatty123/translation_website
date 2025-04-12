export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 text-gray-800 px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          Precision. Clarity. Connection.
        </h1>
        <p className="text-lg leading-relaxed">
          Thoughtful, professional translation for your most important ideas. From Korean to English, English to Korean — built on nuance and care.
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
