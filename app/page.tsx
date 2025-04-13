import Image from "next/image";
import hanokBg from "/public/Hanok-Ondol-room-maru-floor.jpg";
import beliefsImg from "/public/beliefs.png";
import monasteriesImg from "/public/monasteries.png";
import literatureImg from "/public/literature.png";
import songImg from "/public/song.png";
import businessImg from "/public/business.png";
import pureImg from "/public/malgohyangi.png";
import happyImg from "/public/mabbh.jpg";
import hyechoImg from "/public/hyecho.png";

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
            Matty Wegehaupt (오상진)
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white max-w-xl drop-shadow-md">
            Translation, Editing, and Collaboration in Korean/English Buddhist work
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Pure and Fragrant",
                img: pureImg,
                url: "https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ",
                desc: "Seon essays by Master Beopjeong"
              },
              {
                title: "May All Beings Be Happy",
                img: happyImg,
                url: "https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736",
                desc: "Dharma sayings written by Master Beopjeong"
              },
              {
                title: "Memoirs of a Pilgrimage to the Five Indian Kingdoms",
                img: hyechoImg,
                url: "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
                desc: "in *Accounts of a Pilgrimage, Monuments, and Eminent Monks*"
              }
            ].map(({ title, img, url, desc }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[260px] aspect-[3/4] relative">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-contain rounded shadow"
                  />
                </div>
                <div className="text-center mt-4">
                  <a
                    href={url}
                    className="text-indigo-600 text-xl font-semibold underline hover:text-indigo-800"
                    target="_blank"
                  >
                    {title}
                  </a>
                  <p className="text-sm mt-1" dangerouslySetInnerHTML={{ __html: desc.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} Matty Wegehaupt. All rights reserved.
      </footer>
    </main>
  );
}
