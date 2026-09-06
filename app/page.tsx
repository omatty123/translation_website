// app/page.tsx
import Head from "next/head";
import Image from "next/image";

// HERO
import heroImg from "/public/Tripitaka_Koreana_02.jpeg";

// BOOKS
import pureImg from "/public/malgohyangi.png";
import happyImg from "/public/mabbh.jpg";
import hyechoImg from "/public/hyecho.png";

// ACADEMIC + CURRENT WORK
import museShot from "/public/SangilHan.jpg";
import montafonCover from "/public/Montafonmoonlight.jpg";

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
        {/* Hero — short */}
        <section className="relative h-[42vh] md:h-[38vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImg}
            alt="Tripitaka Koreana library hall"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Translation, Editing, and Collaboration in Korean/English
              Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-5 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Three compact columns */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* COLUMN 1 — BOOKS */}
            <div className="mx-auto w-full max-w-[360px]">
              <h2 className="text-2xl font-semibold text-center mb-6">Books</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Pure and Fragrant",
                    img: pureImg,
                    url: "https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ",
                    desc:
                      "Culminating work of Seon essays by Master Beopjeong",
                  },
                  {
                    title: "May All Beings Be Happy",
                    img: happyImg,
                    url:
                      "https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736",
                    desc: "Dharma sayings of Master Beopjeong",
                  },
                  {
                    title:
                      "Hyecho's Memoirs of a Pilgrimage to the Five Indian Kingdoms",
                    img: hyechoImg,
                    url:
                      "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
                    desc:
                      "In <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>",
                  },
                ].map(({ title, img, url, desc }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {/* Uniform book-thumb */}
                    <div className="w-[120px] shrink-0">
                      <div className="relative w-[120px] aspect-[3/4]">
                        <Image
                          src={img}
                          alt={title}
                          fill
                          className="object-contain rounded shadow"
                        />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <a
                        href={url}
                        target="_blank"
                        className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                      >
                        {title}
                      </a>
                      <p
                        className="text-sm mt-1 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2 — COURSES */}
            <section aria-labelledby="courses-heading" className="mx-auto w-full max-w-[420px]">
              <h2 id="courses-heading" className="text-2xl font-semibold text-center mb-2">Courses</h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                Dongguk University · K-MOOC<br />
                2026 offerings · Links checked September 6, 2026
              </p>
              <ul className="divide-y divide-gray-200 border-y border-gray-200">
                {[
                  {
                    title: "Buddhist Beliefs in Korea",
                    kr: "한국의 불교 신앙",
                    url: "https://www.kmooc.kr/view/course/detail/18434",
                  },
                  {
                    title: "Daily Life and Disciplines of Korean Monasteries",
                    kr: "한국사찰의 일상과 규범",
                    url: "https://www.kmooc.kr/view/course/detail/18438",
                  },
                  {
                    title: "Korean Buddhist Literature",
                    kr: "한국의 불교문학",
                    url: "https://www.kmooc.kr/view/course/detail/18442",
                  },
                  {
                    title: "History and Culture of Sŏn",
                    kr: "선의 역사와 문화",
                    url: "https://www.kmooc.kr/view/course/detail/18446",
                  },
                  {
                    title: "Korean Buddhism and Business",
                    kr: "한국불교와 비즈니스",
                    url: "https://www.kmooc.kr/view/course/detail/18449",
                  },
                ].map(({ title, kr, url }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-4 px-2 -mx-2 hover:bg-indigo-50 transition-colors"
                    >
                      <h3 className="font-semibold text-base leading-snug group-hover:underline">{title}</h3>
                      <p lang="ko" className="text-sm text-gray-600 mt-1">{kr}</p>
                      <span className="inline-flex items-center gap-1 mt-2 text-sm text-indigo-700">
                        View course on K-MOOC
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Course availability and links can change. If a session has closed,
                search the Korean title in the{" "}
                <a href="https://www.kmooc.kr/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 underline underline-offset-4">K-MOOC catalog</a>.
              </p>
            </section>

            {/* COLUMN 3 — ACADEMIC + CURRENT WORK */}
            <div className="mx-auto w-full max-w-[360px]">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Academic Work
              </h2>

              {/* Academic card with image + direct PDF download */}
              <a
                href="/temple-fraternities.pdf"
                download
                className="block rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition"
                title="Download PDF"
              >
                <div className="relative w-full aspect-[16/9] bg-white">
                  <Image
                    src={museShot}
                    alt="Project MUSE article screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm">
                    The Activities and Significance of Temple Fraternities in
                    Late Chosŏn Buddhism
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sangkil Han, Matty Wegehaupt — Journal of Korean Religions,
                    University of Hawaiʻi Press
                  </p>
                </div>
              </a>

              {/* Current Work */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-center mb-3">
                  Current Work
                </h3>

                <a
                  href="https://omatty123.github.io/MontafonMoonlight/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition"
                >
                  <div className="relative w-full aspect-[3/4] bg-white">
                    <Image
                      src={montafonCover}
                      alt="Montafon Moonlight cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Serialized Novel
                    </p>
                    <h4 className="font-semibold text-sm mt-1">
                      Montafon Moonlight — Jeong Chanju
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Matty Wegehaupt
        </footer>
      </main>
    </>
  );
}
