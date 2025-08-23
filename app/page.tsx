import Head from "next/head";
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
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
          <Image
            src={hanokBg}
            alt="Traditional Hanok ondol floor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-4 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Matty Wegehaupt (오상진)
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-5">
              Translation, Editing, and Collaboration in Korean/English Buddhist work
            </p>
            <a
              href="mailto:omatty@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-5 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* 3-column layout */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Books */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Books</h2>
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
                <div key={idx} className="mb-8">
                  <div className="w-[160px] aspect-[3/4] relative mx-auto">
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
                      className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                      target="_blank"
                    >
                      {title}
                    </a>
                    <p
                      className="text-sm mt-1"
                      dangerouslySetInnerHTML={{
                        __html: desc.replace(/\*(.*?)\*/g, "<em>$1</em>"),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Courses */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Buddhist Beliefs in Korea",
                    korean: "한국의 불교 신앙",
                    img: beliefsImg,
                    url: "https://www.kmooc.kr/view/course/detail/15060",
                  },
                  {
                    title: "Daily Life and Disciplines of Korean Monasteries",
                    korean: "한국사찰의 일상과 규범",
                    img: monasteriesImg,
                    url: "https://www.kmooc.kr/view/course/detail/15064",
                  },
                  {
                    title: "Korean Buddhist Literature",
                    korean: "한국의 불교문학",
                    img: literatureImg,
                    url: "https://www.kmooc.kr/view/course/detail/13246",
                  },
                  {
                    title: "History and Culture of Sŏn",
                    korean: "선의 역사와 문화",
                    img: songImg,
                    url: "https://www.kmooc.kr/view/course/detail/13251",
                  },
                  {
                    title: "Korean Buddhism and Business",
                    korean: "한국불교와 비즈니스",
                    img: businessImg,
                    url: "https://www.kmooc.kr/view/course/detail/13254",
                  },
                ].map(({ title, korean, img, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition block"
                  >
                    <Image src={img} alt={title} className="w-full object-cover" />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm">{title}</h3>
                      <p className="text-xs text-gray-600">{korean}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Academic Work */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Academic Work</h2>
              <div className="p-4 border rounded-lg bg-gray-50 text-sm leading-relaxed space-y-1">
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
                <a
                  href="/temple-fraternities.pdf"
                  download
                  className="inline-block mt-2 text-indigo-600 hover:underline font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Matty Wegehaupt
        </footer>
      </main>
    </>
  );
}
