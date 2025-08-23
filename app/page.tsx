import Head from "next/head";
import Image from "next/image";

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
            src="/Tripitaka_Koreana_02.jpeg"
            alt="Tripitaka Koreana woodblocks at Haeinsa"
            fill
            priority
            className="object-cover object-center"
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

        {/* 3-column content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Books */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-6">Books</h2>
              <div className="space-y-8">
                <div className="flex flex-col items-center">
                  <Image
                    src="/malgohyangi.png"
                    alt="Pure and Fragrant"
                    width={180}
                    height={240}
                    className="rounded shadow"
                  />
                  <div className="text-center mt-3">
                    <a
                      href="https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ"
                      className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                      target="_blank"
                    >
                      Pure and Fragrant
                    </a>
                    <p className="text-sm mt-1">
                      Culminating work of Seon essays by Master Beopjeong
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/mabbh.jpg"
                    alt="May All Beings Be Happy"
                    width={180}
                    height={240}
                    className="rounded shadow"
                  />
                  <div className="text-center mt-3">
                    <a
                      href="https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736"
                      className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                      target="_blank"
                    >
                      May All Beings Be Happy
                    </a>
                    <p className="text-sm mt-1">
                      Dharma sayings of Master Beopjeong
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="/hyecho.png"
                    alt="Hyecho's Memoirs"
                    width={180}
                    height={240}
                    className="rounded shadow"
                  />
                  <div className="text-center mt-3">
                    <a
                      href="https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35"
                      className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                      target="_blank"
                    >
                      Hyecho&apos;s Memoirs of a Pilgrimage
                    </a>
                    <p className="text-sm mt-1">
                      In <em>Accounts of a Pilgrimage, Monuments, and Eminent Monks</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h2 className="text-2xl font-semibold text-center mb-6">Courses</h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Buddhist Beliefs in Korea",
                    korean: "한국의 불교 신앙",
                    img: "/beliefs.png",
                    url: "https://www.kmooc.kr/view/course/detail/15060?tm=20250413071136",
                  },
                  {
                    title: "Daily Life and Disciplines of Korean Monasteries",
                    korean: "한국사찰의 일상과 규범",
                    img: "/monasteries.png",
                    url: "https://www.kmooc.kr/view/course/detail/15064?tm=20250413074914",
                  },
                  {
                    title: "Korean Buddhist Literature",
                    korean: "한국의 불교문학",
                    img: "/literature.png",
                    url: "https://www.kmooc.kr/view/course/detail/13246?tm=20250413071115",
                  },
                  {
                    title: "History and Culture of Sŏn",
                    korean: "선의 역사와 문화",
                    img: "/song.png",
                    url: "https://www.kmooc.kr/view/course/detail/13251?tm=20250413074824",
                  },
                  {
                    title: "Korean Buddhism and Business",
                    korean: "한국불교와 비즈니스",
                    img: "/business.png",
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
                    <Image
                      src={img}
                      alt={title}
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-base">{title}</h3>
                      <p className="text-sm text-gray-600">{korean}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Academic + Current Work */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Academic Work
                </h2>
                <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
                  <Image
                    src="/SangilHan.jpg"
                    alt="Temple Fraternities article"
                    width={400}
                    height={220}
                    className="w-full object-cover"
                  />
                  <div className="p-4 text-sm text-gray-700">
                    <p className="font-semibold">
                      The Activities and Significance of Temple Fraternities in
                      Late Chosŏn Buddhism
                    </p>
                    <p>Sangkil Han, Matty Wegehaupt</p>
                    <p>
                      <em>Journal of Korean Religions</em>, University of Hawaiʻi Press
                    </p>
                    <p>Volume 3, Number 1, April 2012, pp. 29–63</p>
                    <a
                      href="/temple-fraternities.pdf"
                      download
                      className="text-indigo-600 underline hover:text-indigo-800"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Current Work
                </h2>
                <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
                  <Image
                    src="/Montafonmoonlight.jpg"
                    alt="Montafon Moonlight cover"
                    width={400}
                    height={220}
                    className="w-full object-cover"
                  />
                  <div className="p-4 text-sm text-gray-700 text-center">
                    <p className="font-semibold">Serialized Novel</p>
                    <a
                      href="https://omatty123.github.io/MontafonMoonlight/"
                      target="_blank"
                      className="text-indigo-600 underline hover:text-indigo-800"
                    >
                      Montafon Moonlight by Jeong Chanju
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Matty Wegehaupt
        </footer>
      </main>
    </>
  );
}
