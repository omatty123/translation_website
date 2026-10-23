import Image from "next/image";
import portrait from "@/public/matty-wegehaupt.webp";
import library from "@/public/tripitaka-library.webp";
import pure from "@/public/malgohyangi.png";
import happy from "@/public/mabbh.jpg";
import hyecho from "@/public/hyecho.png";
import koreanBuddhism from "@/public/korean-buddhism-readings.jpg";
import montafon from "@/public/Montafonmoonlight.jpg";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

const books = [
  {
    title: "Hyech’o’s “Like the Moon through the Clouds”",
    image: koreanBuddhism,
    imageAlt: "Cover of Korean Buddhism: Selected Readings from Primary Texts",
    detail:
      "A contribution to Korean Buddhism: Selected Readings from Primary Texts, edited by Jin Y. Park and Sumi Lee.",
    credit: "University of Hawaiʻi Press · 2026",
    href: "https://uhpress.hawaii.edu/title/korean-buddhism-selected-readings-from-primary-texts/",
    action: "Publisher details",
  },
  {
    title: "Pure and Fragrant",
    image: pure,
    imageAlt: "Cover of Pure and Fragrant",
    detail:
      "Selected essays by Master Beopjeong. Translation and introduction by Matty Wegehaupt.",
    credit: "Jogye Order of Korean Buddhism · 2021",
    href: "https://books.google.com/books/about/Pure_and_Fragrant.html?id=qQ_qEAAAQBAJ",
    action: "Book details",
  },
  {
    title: "May All Beings Be Happy",
    image: happy,
    imageAlt: "Cover of May All Beings Be Happy",
    detail:
      "Dharma sayings of Beop Jeong, edited by Shiva Ryu and translated by Matty Wegehaupt.",
    credit: "The Good Life · 2006",
    href: "https://www.amazon.com/May-All-Beings-Happy-English/dp/8995757736",
    action: "Book details",
  },
  {
    title: "Hyecho’s Memoirs of a Pilgrimage to the Five Indian Kingdoms",
    image: hyecho,
    imageAlt: "Cover of Accounts of a Pilgrimage, Monuments, and Eminent Monks",
    detail:
      "An English translation of Hyecho’s pilgrimage account, in Accounts of a Pilgrimage, Monuments, and Eminent Monks.",
    credit: "Collected Works of Korean Buddhism · Vol. 10 · 2012",
    href: "https://www.buddhistelibrary.org/en/albums/central/Dhamma_books/10_Culture_web.pdf#page=35",
    action: "Read the volume · PDF",
  },
];

const courses = [
  {
    title: "Buddhist Beliefs in Korea",
    korean: "한국의 불교 신앙",
    image: "/courses/beliefs.jpg",
    id: "18434",
  },
  {
    title: "Daily Life and Disciplines of Korean Monasteries",
    korean: "한국사찰의 일상과 규범",
    image: "/courses/monasteries.jpg",
    id: "18438",
  },
  {
    title: "Korean Buddhist Literature",
    korean: "한국의 불교문학",
    image: "/courses/literature.jpg",
    id: "18442",
  },
  {
    title: "History and Culture of Sŏn",
    korean: "선의 역사와 문화",
    image: "/courses/song.jpg",
    id: "18446",
  },
  {
    title: "Korean Buddhism and Business",
    korean: "한국불교와 비즈니스",
    image: "/courses/business.jpg",
    id: "18449",
  },
  {
    title: "Buddhist Ethics and Modern Society",
    korean: "불교윤리와 현대사회",
    image: "/courses/ethics.png",
    id: "19663",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a
          className="wordmark"
          href="#main"
          aria-label="Banglangdang Translations home"
        >
          Banglangdang<span>Translations</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#translations">Translations</a>
          <a href="#current">Current work</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main">
        <section className="intro wrap" aria-labelledby="intro-heading">
          <div className="intro-copy">
            <h1 id="intro-heading">Matty Wegehaupt</h1>
            <p className="korean-name" lang="ko">
              오상진
            </p>
            <p className="intro-role">
              Korean–English translation &amp; editing
            </p>
            <p className="intro-description">
              I translate Korean Buddhist writing and literature into English.
              My work spans books, academic research, and courses—making these
              texts available to new readers.
            </p>
            <div className="intro-actions">
              <a className="button" href="#translations">
                Explore my work <Arrow />
              </a>
              <a className="text-link" href="mailto:omatty@gmail.com">
                Get in touch <Arrow diagonal />
              </a>
            </div>
          </div>
          <Image
            className="portrait"
            src={portrait}
            alt="Matty Wegehaupt"
            priority
            sizes="(max-width: 500px) 108px, (max-width: 700px) 150px, (max-width: 1000px) 200px, 244px"
          />
        </section>
        <section
          id="translations"
          className="translations wrap section"
          aria-labelledby="translations-heading"
        >
          <div className="section-heading">
            <h2 id="translations-heading">Selected translations</h2>
            <p>
              Books and contributions on Korean Buddhist thought, practice, and
              life.
            </p>
          </div>
          <div className="book-grid">
            {books.map((book) => (
              <article className="book" key={book.title}>
                <div className="book-cover">
                  <Image
                    src={book.image}
                    alt={book.imageAlt}
                    sizes="(max-width: 500px) 88px, (max-width: 1000px) 100px, 116px"
                  />
                </div>
                <div className="book-copy">
                  <h3>
                    <a href={book.href}>{book.title}</a>
                  </h3>
                  <p className="book-detail">{book.detail}</p>
                  <p className="publication-credit">{book.credit}</p>
                  <a className="text-link" href={book.href}>
                    {book.action} <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="current"
          className="current-section"
          aria-labelledby="current-heading"
        >
          <div className="current-inner wrap">
            <div className="current-cover">
              <Image
                src={montafon}
                alt="Montafon Moonlight cover artwork"
                sizes="(max-width: 500px) 100px, (max-width: 700px) 136px, 190px"
              />
            </div>
            <div className="current-copy">
              <h2 id="current-heading">Montafon Moonlight</h2>
              <p className="current-credit">
                Current work · Jeong Chanju · English translation by Matty Wegehaupt
              </p>
              <p>
                An autobiographical novel about Jeong Chanju’s encounters with
                Austrian composer Herbert Willi. Read the English translation
                online.
              </p>
              <a
                className="text-link"
                href="https://omatty123.github.io/MontafonMoonlight/"
              >
                Read the serialization <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          id="courses"
          className="courses wrap section"
          aria-labelledby="courses-heading"
        >
          <div className="section-heading">
            <h2 id="courses-heading">Course translations</h2>
            <p>
              Seven translations for Dongguk University’s K-MOOC courses on
              Korean Buddhism.
            </p>
          </div>
          <ul className="course-grid">
            {courses.map((course) => (
              <li key={course.id}>
                <a
                  className="course"
                  href={`https://www.kmooc.kr/view/course/detail/${course.id}`}
                >
                  <Image
                    src={course.image}
                    alt=""
                    width={68}
                    height={68}
                    sizes="68px"
                  />
                  <span className="course-copy">
                    <span className="course-title">{course.title}</span>
                    <span className="course-korean" lang="ko">
                      {course.korean}
                    </span>
                    <span className="course-action">View on K-MOOC</span>
                  </span>
                  <Arrow diagonal />
                </a>
              </li>
            ))}
          </ul>
          <div className="pending-course">
            <div>
              <h3>Travel and Buddhism in Chosŏn and the Modern Era</h3>
              <p lang="ko">조선과 근대의 여행과 불교</p>
            </div>
            <p>
              Translation completed.<span>Public course link pending.</span>
            </p>
          </div>
          <div className="course-footer">
            <p>Six public course links · Checked September 6, 2026</p>
            <a
              className="text-link"
              href="https://www.kmooc.kr/view/course/institution/kaep_dongguk"
            >
              Browse Dongguk’s catalog <Arrow diagonal />
            </a>
          </div>
        </section>
        <section
          className="academic wrap section"
          aria-labelledby="academic-heading"
        >
          <div className="section-heading">
            <h2 id="academic-heading">Academic translation</h2>
          </div>
          <article className="article-row">
            <div>
              <h3>
                The Activities and Significance of Temple Fraternities in Late
                Chosŏn Buddhism
              </h3>
              <p>Sangkil Han · Translated by Matty Wegehaupt</p>
              <p className="publication-credit">
                <cite>Journal of Korean Religions</cite> 3, no. 1 · 2012 · pp.
                29–63
              </p>
            </div>
            <a className="text-link" href="/temple-fraternities.pdf">
              Read article · PDF <Arrow diagonal />
            </a>
          </article>
        </section>
        <section
          id="contact"
          className="contact wrap"
          aria-labelledby="contact-heading"
        >
          <figure className="library-photo">
            <Image
              src={library}
              alt="Rows of wooden printing blocks inside the Tripitaka Koreana library hall"
              sizes="(max-width: 700px) 100vw, 480px"
            />
            <figcaption>Tripitaka Koreana library hall</figcaption>
          </figure>
          <div className="contact-copy">
            <h2 id="contact-heading">Let’s work together.</h2>
            <p>
              For translation, editing, and collaboration on Korean Buddhist
              writing and literature, I’d be glad to hear from you.
            </p>
            <a className="email-link" href="mailto:omatty@gmail.com">
              omatty@gmail.com <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <p>© {new Date().getFullYear()} Matty Wegehaupt</p>
        <p>Banglangdang Translations</p>
        <a href="#main">
          Back to top{" "}
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M12 20V4m-6 6 6-6 6 6" />
          </svg>
        </a>
      </footer>
    </>
  );
}
