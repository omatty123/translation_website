import Image from "next/image";
import hanokBg from "/public/Hanok-Ondol-room-maru-floor.jpg";
import beliefsImg from "/public/beliefs.png";
import monasteriesImg from "/public/monasteries.png";
import literatureImg from "/public/literature.png";
import songImg from "/public/song.png";
import businessImg from "/public/business.png";
import pureImg from "/public/malgohyangi.jpg";
import happyImg from "/public/mabbh.jpg";

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
            Matty Wegehaupt
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
            {/* Pure and Fragrant */}
            <div className="flex flex-col items-center text-center space-y-4">
                            
              
             <Image
  src={pureImg}
  alt="Pure and Fragrant"
  height={320}
  style={{ width: "auto" }}
  className="rounded shadow"
/>
              <div>
                <a
                  href="https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ"
                  className="text-indigo-600 text-xl font-semibold underline hover:text-indigo-800"
                  target="_blank"
                >
                  Pure and Fragrant
                </a>
                <p className="mt-2 text-sm">
                  Seon essays by Beopjeong, translated by Matty Wegehaupt
                </p>
              </div>
            </div>

            {/* May All Beings Be Happy */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
  src={happyImg}
  alt="May All Beings Be Happy"
  height={320}
  style={{ width: "auto" }}
  className="rounded shadow"
/>
              <div>
                <a
                  href="https://books.google.com/books?id=A9tcMgAACAAJ&dq=may+all+beings+be+happy+beopjeong"
                  className="text-indigo-600 text-xl font-semibold underline hover:text-indigo-800"
                  target="_blank"
                >
                  May All Beings Be Happy
                </a>
                <p className="mt-2 text-sm">
                  Dharma sayings compiled by Ryu Shiva, translated by Matty Wegehaupt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      {/* Courses */}
<section className="py-20 px-6 bg-blue-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-10">Courses</h2>
    <ul className="space-y-6 text-lg leading-relaxed text-left">
      <li>
        <a
          href="https://www.kmooc.kr/view/course/detail/15060?tm=20250413071136"
          className="text-indigo-600 underline hover:text-indigo-800"
          target="_blank"
        >
          Buddhist Beliefs in Korea (한국의 불교 신앙)
        </a>
      </li>
      <li>
        <a
          href="https://www.kmooc.kr/view/course/detail/15064?tm=20250413074914"
          className="text-indigo-600 underline hover:text-indigo-800"
          target="_blank"
        >
          Daily Life and Disciplines of Korean Monasteries (한국사찰의 일상과 규범)
        </a>
      </li>
      <li>
        <a
          href="https://www.kmooc.kr/view/course/detail/13246?tm=20250413071115"
          className="text-indigo-600 underline hover:text-indigo-800"
          target="_blank"
        >
          Korean Buddhist Literature (한국의 불교문학)
        </a>
      </li>
      <li>
        <a
          href="https://www.kmooc.kr/view/course/detail/13251?tm=20250413074824"
          className="text-indigo-600 underline hover:text-indigo-800"
          target="_blank"
        >
          History and Culture of Sŏn (선의 역사와 문화)
        </a>
      </li>
      <li>
        <a
          href="https://www.kmooc.kr/view/course/detail/13254?tm=20250413071035"
          className="text-indigo-600 underline hover:text-indigo-800"
          target="_blank"
        >
          Korean Buddhism and Business (한국불교와 비즈니스)
        </a>
      </li>
    </ul>
  </div>
</section>

      {/* Article */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Academic Work</h2>
          <a
            href="https://muse.jhu.edu/article/481031/summary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline text-lg hover:text-indigo-800"
          >
            Read on Project MUSE
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
