import Head from "next/head";
import Image from "next/image";

// HERO
import tripitakaBg from "/public/Tripitaka_Koreana_02.jpeg";

// BOOKS
import pureImg from "/public/malgohyangi.png";
import happyImg from "/public/mabbh.jpg";
import hyechoImg from "/public/hyecho.png";

// COURSES
import beliefsImg from "/public/beliefs.png";
import monasteriesImg from "/public/monasteries.png";
import literatureImg from "/public/literature.png";
import songImg from "/public/song.png";
import businessImg from "/public/business.png";

// COLUMN 3 thumbs
import sangilHanImg from "/public/SangilHan.jpg";
import montafonImg from "/public/Montafonmoonlight.jpg";

export default function Home() {
  const books = [
    {
      title: "Pure and Fragrant",
      img: pureImg,
      url: "https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ",
      desc: "Culminating work of Seon essays by Master Beopjeong",
    },
    {
      title: "May All Beings Be Happy",
      img: happyImg,
      url: "https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736",
      desc: "Dharma sayings of Master Beopjeong",
    },
    {
      title:
        "Hyecho's Memoirs of a Pilgrimage to the Five Indian Kingdoms",
      img: hyechoImg,
      url: "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
      desc:
        "in <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>",
    },
  ];

  const courses = [
    {
      title: "Buddhist Beliefs in Korea",
      korean: "한국의 불교 신앙",
      img: beliefsImg,
      url: "https://www.kmooc.kr/view/course/detail/15060?tm=20250413071136",
    },
    {
      title: "Daily Life and Disciplines of Korean Monasteries",
      korean: "한국사찰의 일상과 규범",
      img: monasteriesImg,
      url: "https://www.kmooc.kr/view/course/detail/15064?tm=20250413074914",
    },
    {
      title: "Korean Buddhist Literature",
      korean: "한국의 불교문학",
      img: literatureImg,
      url: "https://www.kmooc.kr/view/course/detail/13246?tm=20250413071115",
    },
    {
      title: "History and Culture of Sŏn",
      korean: "선의 역사와 문화",
      img: songImg,
      url: "https://www.kmooc.kr/view/course/detail/13251?tm=20250413074824",
    },
    {
      title: "Korean Buddhism and Business",
      korean: "한국불교와 비즈니스",
      img: businessImg,
      url: "https://www.kmooc.kr/view/course/detail/13254?tm=20250413071035",
    },
  ];

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
        {/* HERO (shorter banner) */}
        <section className="relative h-[42vh] min-h-[280px] max-h-[420px] flex items-center justify-center overflow-hidden">
          <Image
            src={tripitakaBg}
            alt="Tripitaka Koreana woodblocks at Haeinsa"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <h1 className="text-3xl md:text-[2.6rem] leading-tight font-bold text-white mb-3">
              Matty Wegehaupt <span className="whitespace-nowrap">(오상진)</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-5">
              Translation, Editing, and Collaboration in Korean/English Buddhist
              work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-5 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* THREE COLUMNS */}
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* COLUMN 1 — BOOKS */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-5">Books</h2>
              <ul className="space-y-6">
                {books.map(({ title, img, url, desc }, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-24 shrink-0 relative">
                      <Image
                        src={img}
                        alt={title}
                        className="object-contain rounded shadow-sm"
                        fill
                        sizes="96px"
                      />
                    </div>
                    <div className="pt-1">
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 font-semibold hover:underline"
                      >
                        {title}
                      </a>
                      <p
                        className="text-sm text-gray-700 mt-1"
                        // allow <em> in the third entry
                        dangerouslySetInnerHTML={{
                          __html: desc,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 — COURSES (2-up grid, continues downward) */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-5">
                Courses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map(({ title, korean, img, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow transition block"
                  >
                    <div className="w-full aspect-[16/9] relative">
                      <Image
                        src={img}
                        alt={title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-600">{korean}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 3 — ACADEMIC WORK + CURRENT WORK */}
            <div className="space-y-8">
              {/* Academic Work */}
              <div>
                <h2 className="text-2xl font-semibold text-center mb-5">
                  Academic Work
                </h2>
                <div className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4">
                  <div className="w-28 shrink-0 relative">
                    <Image
                      src={sangilHanImg}
                      alt="Journal of Korean Religions article"
                      fill
                      className="object-cover rounded"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold leading-snug">
                      The Activities and Significance of Temple Fraternities in
                      Late Chosŏn Buddhism
                    </p>
                    <p className="text-sm text-gray-700">
                      Sangkil Han, Matty Wegehaupt
                    </p>
                    <p className="text-xs text-gray-600">
                      <em>Journal of Korean Religions</em>, University of
                      Hawaiʻi Press — Volume 3, Number 1, April 2012, pp. 29–63
                    </p>
                    <div className="flex gap-3 mt-2 text-sm">
                      <a
                        href="https://muse.jhu.edu/article/476253"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        Read on Project MUSE
                      </a>
                      <span className="text-gray-400">•</span>
                      {/* Force download from /public */}
                      <a
                        href="/temple-fraternities.pdf"
                        download
                        className="text-indigo-600 hover:underline"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Work */}
              <div>
                <h2 className="text-2xl font-semibold text-center mb-5">
                  Current Work
                </h2>
                <a
                  href="https://omatty123.github.io/MontafonMoonlight/"
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-white rounded-xl border border-gray-200 hover:shadow transition overflow-hidden"
                >
                  <div className="w-full aspect-[16/10] relative">
                    <Image
                      src={montafonImg}
                      alt="Montafon Moonlight"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Serialized Novel</p>
                    <h3 className="font-semibold">
                      Montafon Moonlight by Jeong Chanju
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} Matty Wegehaupt
          </p>
        </section>
      </main>
    </>
  );
}
