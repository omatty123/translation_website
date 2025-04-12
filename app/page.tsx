import Image from "next/image";
import hanokBg from "/public/Hanok-Ondol-room-maru-floor.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero with Background */}
      <section className="relative h-[90vh] w-full">
        <Image
          src={hanokBg}
          alt="Hanok with maru floor"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Matty Wegehaupt
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white max-w-xl drop-shadow-md">
            Literary translator and scholar of Korean Buddhism, grounded in tradition and clarity.
          </p>
          <a
            href="mailto:your@email.com"
            className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Books</h2>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Pure and Fragrant</strong> – Contemporary Zen essays by Korean monk Haean.
            </li>
            <li>
              <strong>May All Beings Be Happy</strong> – Translations of poetry and verse from Korean Buddhist traditions.
            </li>
          </ul>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Courses</h2>
          <p className="text-lg">
            Buddhism courses offered on Korean MOOC platforms, designed to make advanced Buddhist scholarship accessible to general audiences.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Featured Article</h2>
          <a
            href="https://muse.jhu.edu/article/481031/summary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline text-lg hover:text-indigo-800"
          >
            Read on Project MUSE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Matty Wegehaupt. All rights reserved.
      </footer>
    </main>
  );
}
