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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Pure and Fragrant",
                img: pureImg,
                url: "https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ",
                desc: "Seon essays by Beopjeong, translated by Matty Wegehaupt",
              },
              {
                title: "May All Beings Be Happy",
                img: happyImg,
                url: "https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736",
                desc: "Dharma sayings compiled by Ryu Shiva, translated by Matty Wegehaupt",
              },
              {
                title: "Memoirs of a Pilgrimage to the Five Indian Kingdoms",
                img: hyechoImg,
                url: "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
                desc:
                  "Hyecho’s *Memoirs of a Pilgrimage to the Five Indian Kingdoms* in *Accounts of a Pilgrimage, Monuments, and Eminent Monks*. Translated by Matty Wegehaupt, Michael Finch, and Sem Vermeersch",
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
                    dangerouslySetInnerHTML={{
                      __html: desc.replace(/\*(.*?)\*/g, "<em>$1</em>"),
                    }}
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
          </div>
          <a
            href="/temple-fraternities.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Download Full Article (PDF)
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
