// app/page.tsx
import Head from 'next/head'
import Image from 'next/image'

// Hero background
import hanokBg from '/public/Hanok-Ondol-room-maru-floor.jpg'

// Books
import pureImg from '/public/malgohyangi.png'
import happyImg from '/public/mabbh.jpg'
import hyechoImg from '/public/hyecho.png'

// Courses
import beliefsImg from '/public/beliefs.png'
import monasteriesImg from '/public/monasteries.png'
import literatureImg from '/public/literature.png'
import songImg from '/public/song.png'
import businessImg from '/public/business.png'

export default function Home() {
  const books = [
    {
      title: 'Pure and Fragrant',
      img: pureImg,
      url: 'https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ',
      desc: 'Culminating work of Seon essays by Master Beopjeong',
    },
    {
      title: 'May All Beings Be Happy',
      img: happyImg,
      url: 'https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736',
      desc: 'Dharma sayings of Master Beopjeong',
    },
    {
      title:
        "Hyecho's Memoirs of a Pilgrimage to the Five Indian Kingdoms",
      img: hyechoImg,
      url: 'https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35',
      desc:
        'in <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>',
    },
  ]

  const courses = [
    {
      title: 'Buddhist Beliefs in Korea',
      ko: '한국의 불교 신앙',
      img: beliefsImg,
      url: 'https://www.kmooc.kr/view/course/detail/15060?tm=20250413071136',
    },
    {
      title: 'Daily Life and Disciplines of Korean Monasteries',
      ko: '한국사찰의 일상과 규범',
      img: monasteriesImg,
      url: 'https://www.kmooc.kr/view/course/detail/15064?tm=20250413074914',
    },
    {
      title: 'Korean Buddhist Literature',
      ko: '한국의 불교문학',
      img: literatureImg,
      url: 'https://www.kmooc.kr/view/course/detail/13246?tm=20250413071115',
    },
    {
      title: 'History and Culture of Sŏn',
      ko: '선의 역사와 문화',
      img: songImg,
      url: 'https://www.kmooc.kr/view/course/detail/13251?tm=20250413074824',
    },
    {
      title: 'Korean Buddhism and Business',
      ko: '한국불교와 비즈니스',
      img: businessImg,
      url: 'https://www.kmooc.kr/view/course/detail/13254?tm=20250413071035',
    },
  ]

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
        {/* HERO — shorter */}
        <section className="relative h-[34vh] min-h-[220px] max-h-[360px] flex items-center justify-center overflow-hidden">
          <Image
            src={hanokBg}
            alt="Traditional Hanok ondol floor"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-[clamp(22px,3.5vw,36px)] font-bold text-white leading-tight">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-[clamp(12px,2vw,16px)] text-gray-200 mt-2">
              Translation, Editing, and Collaboration in Korean/English Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2.5 px-5 rounded-lg mt-4 transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* CONTENT: three columns, each flows downward */}
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* BOOKS */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Books</h2>
              <ul className="space-y-6">
                {books.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 block"
                      aria-label={b.title}
                    >
                      {/* compact thumbnail */}
                      <Image
                        src={b.img}
                        alt={b.title}
                        width={120}
                        height={160}
                        className="rounded shadow object-contain bg-white"
                      />
                    </a>
                    <div className="min-w-0">
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-semibold hover:underline"
                      >
                        {b.title}
                      </a>
                      <p
                        className="text-sm mt-1 text-gray-700"
                        // keep the <em> in Hyecho description
                        dangerouslySetInnerHTML={{ __html: b.desc }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* COURSES — two across, flows down */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Courses</h2>
              <div className="grid grid-cols-2 gap-4">
                {courses.map((c, i) => (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow transition"
                  >
                    <div className="relative w-full aspect-[16/9]">
                      <Image
                        src={c.img}
                        alt={c.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-0.5">{c.ko}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* ACADEMIC WORK — with PDF link */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Academic Work</h2>
              <article className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold leading-snug">
                  The Activities and Significance of Temple Fraternities in Late
                  Chosŏn Buddhism
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Sangkil Han, Matty Wegehaupt
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  <em>Journal of Korean Religions</em>, University of Hawaiʻi
                  Press — Volume 3, Number 1, April 2012, pp. 29–63
                </p>
                <div className="mt-3">
                  <a
                    href="https://github.com/omatty123/translation_website/blob/main/public/temple-fraternities.pdf" // PDF link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:underline text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9m-6-6 6 6m-6-6v6h6" />
                    </svg>
                    PDF
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Matty Wegehaupt
        </footer>
      </main>
    </>
  )
}
