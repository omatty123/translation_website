// app/page.tsx
import Head from "next/head";
import Image from "next/image";

// Hero
import hanokBg from "/public/Hanok-Ondol-room-maru-floor.jpg";

// Books
import pureImg from "/public/malgohyangi.png";
import happyImg from "/public/mabbh.jpg";
import hyechoImg from "/public/hyecho.png";

// Courses
import beliefsImg from "/public/beliefs.png";
import monasteriesImg from "/public/monasteries.png";
import literatureImg from "/public/literature.png";
import songImg from "/public/song.png";
import businessImg from "/public/business.png";

// NEW right-column images
import sangilImg from "/public/SangilHan.jpg";             // <- Academic work image
import montafonImg from "/public/Montafonmoonlight.jpg";   // <- Serialized novel image

export default function Home() {
  return (
    <>
      <Head>
        <title>Matty Wegehaupt | Banglangdang Translations</title>
        <meta
          name="description"
          content="Translation, Editing, and Collaboration in Korean/English Buddhist work"
        />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Hero */}
        <section className="relative h-[36vh] md:h-[38vh] flex items-center justify-center overflow-hidden">
          <Image
            src={hanokBg}
            alt="Traditional Hanok ondol floor"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-4">
              Translation, Editing, and Collaboration in Korean/English Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-5 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Three columns */}
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* BOOKS */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-4">Books</h2>
              <div className="space-y-8">
                {/* Book 1 */}
                <div className="grid grid-cols-[96px,1fr] gap-4 items-start">
                  <div className="w-24 aspect-[3/4] relative">
                    <Image src={pureImg} alt="Pure and Fragrant" fill className="object-contain rounded shadow" />
                  </div>
                  <div>
                    <a
                      href="https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ"
                      target="_blank"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Pure and Fragrant
                    </a>
                    <p className="text-sm mt-1">
                      Essay anthology of Master Beopjeong
                    </p>
                  </div>
                </div>

                {/* Book 2 */}
                <div className="grid grid-cols-[96px,1fr] gap-4 items-start">
                  <div className="w-24 aspect-[3/4] relative">
                    <Image src={happyImg} alt="May All Beings Be Happy" fill className="object-contain rounded shadow" />
                  </div>
                  <div>
                    <a
                      href="https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736"
                      target="_blank"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      May All Beings Be Happy
                    </a>
                    <p className="text-sm mt-1">Dharma sayings of Master Beopjeong</p>
                  </div>
                </div>

                {/* Book 3 */}
                <div className="grid grid-cols-[96px,1fr] gap-4 items-start">
                  <div className="w-24 aspect-[3/4] relative">
                    <Image src={hyechoImg} alt="Hyecho" fill className="object-contain rounded shadow" />
                  </div>
                  <div>
                    <a
                      href="https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35"
                      target="_blank"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Hyecho’s Memoirs of a Pilgrimage to the Five Indian Kingdoms
                    </a>
                    <p className="text-sm mt-1">
                      in <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COURSES */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-4">Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Buddhist Beliefs in Korea", kr: "한국의 불교 신앙", img: beliefsImg, url: "https://www.kmooc.kr/view/course/detail/15060?tm=20250413071136" },
                  { title: "Daily Life and Disciplines of Korean Monasteries", kr: "한국사찰의 일상과 규범", img: monasteriesImg, url: "https://www.kmooc.kr/view/course/detail/15064?tm=20250413074914" },
                  { title: "Korean Buddhist Literature", kr: "한국의 불교문학", img: literatureImg, url: "https://www.kmooc.kr/view/course/detail/13246?tm=20250413071115" },
                  { title: "History and Culture of Sŏn", kr: "선의 역사와 문화", img: songImg, url: "https://www.kmooc.kr/view/course/detail/13251?tm=20250413074824" },
                  { title: "Korean Buddhism and Business", kr: "한국불교와 비즈니스", img: businessImg, url: "https://www.kmooc.kr/view/course/detail/13254?tm=20250413071035" },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition block"
                  >
                    <Image src={c.img} alt={c.title} className="w-full h-28 object-cover" />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm">{c.title}</h3>
                      <p className="text-xs text-gray-600">{c.kr}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ACADEMIC + CURRENT WORK */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-4">Academic Work</h2>
              <div className="space-y-6">
                {/* Academic Work */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <Image src={sangilImg} alt="Journal of Korean Religions" className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold text-base">
                      The Activities and Significance of Temple Fraternities in Late Chosŏn Buddhism
                    </h3>
                    <p className="text-sm mt-1">Sangkil Han, Matty Wegehaupt</p>
                    <p className="text-xs text-gray-600 italic">
                      Journal of Korean Religions, Univ. of Hawai‘i Press, 2012
                    </p>
                    <a
                      href="https://raw.githubusercontent.com/omatty123/translation_website/main/public/temple-fraternities.pdf"
                      download
                      className="text-indigo-600 text-sm hover:underline block mt-2"
                    >
                      ⬇ Download PDF
                    </a>
                  </div>
                </div>

                {/* Current Work */}
                <div>
                  <h2 className="text-2xl font-semibold text-center mb-4">Current Work</h2>
                  <a
                    href="https://omatty123.github.io/MontafonMoonlight/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden block"
                  >
                    <Image src={montafonImg} alt="Montafon Moonlight" className="w-full h-48 object-cover" />
                    <div className="p-3 text-center">
                      <h3 className="font-semibold text-base">Serialized Novel</h3>
                      <p className="text-sm text-gray-600 italic">Moonlight of Montafon by Jeong Chanju</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-6 text-xs text-gray-500">
          © 2025 Matty Wegehaupt
        </footer>
      </main>
    </>
  );
}
