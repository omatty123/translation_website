import Head from 'next/head'
import Image from 'next/image'
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
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
          <Image
            src={hanokBg}
            alt="Traditional Hanok ondol floor"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6">
              Translation, Editing, and Collaboration in Korean/English Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Books */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
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
                  title: "Hyecho's Memoirs of a Pilgrimage to the Five Indian Kingdoms",
                  img: hyechoImg,
                  url: "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
                  desc: "in *Accounts of a Pilgrimage, Monuments, and Eminent Monks*",
                },
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
                  <div className="text-center mt-4 min-h-[120px]">
                    <a
                      href={url}
                      className="text-indigo-600 text-xl font-semibold underline hover:text-indigo-800"
                      target="_blank"
                    >
                      {title}
                    </a>
                    <p
                      className="text-sm mt-1"
                      dangerouslySetInnerHTML={{ __html: desc.replace(/\*(.*?)\*/g, "<em>$1</em>") }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map(({ title, korean, img, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition block"
                >
                  <Image src={img} alt={title} className="w-full object-cover" />
                  <div className="p-4 space-y-1">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-600">{korean}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Work */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Academic Work</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>
                  The Activities and Significance of Temple Fraternities in Late
                  Chosŏn Buddhism
                </strong>
              </p>
              <p>Sangkil Han, Matty Wegehaupt</p>
              <p>
                <em>Journal of Korean Religions</em>, University of Hawaiʻi Press
              </p>
              <p>Volume 3, Number 1, April 2012, pp. 29–63</p>
