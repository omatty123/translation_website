// app/page.tsx
import Head from 'next/head'
import Image from 'next/image'

// Images
import hanokBg from '/public/Hanok-Ondol-room-maru-floor.jpg'
import beliefsImg from '/public/beliefs.png'
import monasteriesImg from '/public/monasteries.png'
import literatureImg from '/public/literature.png'
import songImg from '/public/song.png'
import businessImg from '/public/business.png'
import pureImg from '/public/malgohyangi.png'
import happyImg from '/public/mabbh.jpg'
import hyechoImg from '/public/hyecho.png'

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
      title: "Hyecho's Memoirs of a Pilgrimage to the Five Indian Kingdoms",
      img: hyechoImg,
      url: 'https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35',
      desc: 'in <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>',
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

  const academic = [
    {
      title:
        'The Activities and Significance of Temple Fraternities in Late Chosŏn Buddhism',
      by: 'Sangkil Han, Matty Wegehaupt',
      journal:
        'Journal of Korean Religions, University of Hawaiʻi Press — Volume 3, Number 1, April 2012, pp. 29–63',
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

      <main className="bg-white text-gray-800 font-sans">
        {/* Slim Hero */}
        <section className="relative h-40 md:h-48 flex items-center justify-center overflow-hidden">
          <Image
            src={hanokBg}
            alt="Traditional Hanok ondol floor"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-sm md:text-base text-gray-200">
              Translation, Editing, and Collaboration in Korean/English Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="mt-3 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-medium py-2 px-4 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Three Columns */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Books */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Books</h2>
              <ul className="space-y-6">
                {books.map(({ title, img, url, desc }, i) => (
                  <li key={i}>
                    <div className="w-full flex flex-col items-center">
                      <div className="w-[140px] md:w-[180px] aspect-[3/4] relative">
                        <Image
                          src={img}
                          alt={title}
                          fill
                          className="object-contain rounded shadow"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <a
                          href={url}
                          target="_blank"
                          className="text-indigo-600 font-medium hover:underline"
                        >
                          {title}
                        </a>
                        <p
                          className="text-sm text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: desc.replace(/\*(.*?)\*/g, '<em>$1</em>'),
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Courses</h2>
              <ul className="space-y-4">
                {courses.map(({ title, ko, img, url }, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-gray-200 hover:shadow transition"
                    >
                      <div className="relative w-full h-28 rounded-t-lg overflow-hidden">
                        <Image src={img} alt={title} fill className="object-cover" />
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs text-gray-600">{ko}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Academic Work</h2>
              <ul className="space-y-6">
                {academic.map(({ title, by, journal }, i) => (
                  <li key={i} className="rounded-lg border border-gray-200 p-4">
                    <p className="font-medium text-sm">{title}</p>
                    <p className="text-sm text-gray-700">{by}</p>
                    <p className="text-xs text-gray-600 mt-1">{journal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-500 py-4">
          © {new Date().getFullYear()} Matty Wegehaupt
        </footer>
      </main>
    </>
  )
}
