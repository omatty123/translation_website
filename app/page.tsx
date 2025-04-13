import Image from "next/image";
import hanokBg from "/public/Hanok-Ondol-room-maru-floor.jpg";
import beliefsImg from "/public/beliefs.png";
import monasteriesImg from "/public/monasteries.png";
import literatureImg from "/public/literature.png";
import songImg from "/public/song.png";
import businessImg from "/public/business.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero */}
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
            Translator, educator, and scholar of Korean Buddhism.
          </p>
          <a
            href="mailto:omatty@gmail.com"
            className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Books */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Books</h2>
          <ul className="space-y-6 text-lg leading-relaxed">
            <li>
              <strong>
                <a
                  href="https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ"
                  className="text-indigo-600 underline hover:text-indigo-800"
                  target="_blank"
                >
                  Pure and Fragrant
                </a>
              </strong>
              <br />
              Seon essays by Korean Buddhist monk Beopjeong, translated by Matty Wegehaupt.
            </li>
            <li>
              <strong>
                <a
                  href="https://books.google.com/books?id=A9tcMgAACAAJ&dq=may+all+beings+be+happy+beopjeong"
                  className="text-indigo-600 underline hover:text-indigo-800"
                  target="_blank"
                >
                  May All Beings Be Happy
                </a>
              </strong>
              <br />
              Dharma sayings compiled by Ryu Shiva, translated by Matty Wegehaupt.
            </li>
          </ul>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Buddhist Beliefs in Korea", prof: "Prof. Ok Nayeong", img: beliefsImg },
              { title: "Daily Life and Disciplines of Korean Monasteries", prof: "Prof. Lee Jarang", img: monasteriesImg },
              { title: "Korean Buddhist Literature", prof: "Prof. Kim Jongjin", img: literatureImg },
              { title: "History and Culture of Sŏn", prof: "Prof. Cho Myung-je", img: songImg },
              { title: "Korean Buddhism and Business", prof: "Prof. Cho Ki-ryong", img: businessImg },
            ].map(({ title, prof, img }, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
                <Image src={img} alt={title} className="w-full object-cover" />
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-600">{prof}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Academic Article</h2>
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
