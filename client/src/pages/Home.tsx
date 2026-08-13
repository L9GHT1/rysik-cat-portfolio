/**
 * Design philosophy: «Полевой дневник Рыcика» — светлая редакционная история,
 * где личные фотографии кота важнее декоративной графики.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cat,
  ChevronLeft,
  ChevronRight,
  Compass,
  Heart,
  MapPin,
  Menu,
  PawPrint,
  Sparkles,
  X,
} from "lucide-react";

const gallery = [
  {
    src: "/assets/2_82e5f491.jpg",
    title: "Осмотр владений",
    note: "Когда всё уже проверено, можно просто смотреть.",
    style: "gallery-card gallery-card--wide",
  },
  {
    src: "/assets/5_9e271c93.jpg",
    title: "Важный разговор",
    note: "Взгляд, в котором уже принято решение.",
    style: "gallery-card gallery-card--tall",
  },
  {
    src: "/assets/7_d9936546.jpg",
    title: "Тихий час",
    note: "Никаких планов. Только сон и белый воротник.",
    style: "gallery-card gallery-card--wide",
  },
  {
    src: "/assets/8_f385381c.jpg",
    title: "Возбуждённый взгляд",
    note: "Плед услышал слишком много важных новостей.",
    style: "gallery-card gallery-card--tall",
  },
];

const moments = [
  ["06:40", "Проверить, как просыпается свет", "Окно"],
  ["11:10", "Найти самый тёплый квадрат пола", "Маршрут"],
  ["15:30", "Выслушать все домашние новости", "Штаб"],
  ["20:05", "Разрешить себя погладить", "Важное"],
];

const archivePhotos = [
  { src: "/assets/rysik-closeup_904f8851.png", title: "Проверка камеры", note: "Одобрения не будет." },
  { src: "/assets/rysik-bed_3dd4a907.png", title: "Геометрия отдыха", note: "Все лапы на своих местах." },
  { src: "/assets/rysik-bad-haircut_b80ede34.png", title: "Неудачная стрижка", note: "Период экспериментов закончился." },
  { src: "/assets/rysik-window-note_14d1d118.png", title: "Официальная бумага", note: "Документы приняты к сведению." },
  { src: "/assets/rysik-plant_80636c35.png", title: "Зелёный кабинет", note: "Совещание у кактуса." },
  { src: "/assets/rysik-royal-bed_e0438ff5.png", title: "Утренний трон", note: "Аудиенция по записи." },
  { src: "/assets/rysik-sofa-sleep_a03c2c22.webp", title: "Плюшевый министр", note: "Государственные дела подождут." },
  { src: "/assets/rysik-toy_311320b9.png", title: "Королевский портрет", note: "Игрушка — для антуража." },
  { src: "/assets/rysik-gold-balloons_0caae30b.png", title: "Праздничный инспектор", note: "Проверил золотые декорации." },
  { src: "/assets/rysik-good-morning_584ca049.png", title: "Утреннее обращение", note: "Сообщение доставлено лично." },
  { src: "/assets/rysik-kitten_9cfa0f41.png", title: "Зло растёт", note: "Будущий король ещё очень маленький." },
  { src: "/assets/rysik-royal-back_5bcaee01.png", title: "Попа Короля", note: "Парадный вид. Вопросы — через секретаря." },
];

const stories = [
  {
    number: "01",
    tag: "Первое знакомство",
    title: "Веня и комок рыжести",
    copy: "Рысик появился в семье ещё котёнком: прежняя хозяйка отдала его из-за аллергии. В первый день он увидел Веню — семейного пса — и зашипел от полного недоумения. Веня же бегал вокруг и просто смотрел на этот маленький рыжий комок.",
  },
  {
    number: "02",
    tag: "Спортивный регламент",
    title: "Мячик — только по протоколу",
    copy: "Рысик любит мячики, но правила устанавливает сам. Мяч нужно аккуратно катить ему в лапы — тогда он величественно пнёт его обратно. Если бросить мяч в стену или положить рядом, погони не будет: только взгляд на человека, который явно не понял задачу.",
  },
  {
    number: "03",
    tag: "Садовое дело",
    title: "Три дня свободы",
    copy: "Однажды на садах Рысик всего испугался и исчез. Его искали три дня — в панике, со слезами и обвинениями всех подряд. А потом он нашёлся живой и невозмутимый. По одной версии, сидел за диваном. По другой — тайно охотился на птиц. История умалчивает.",
  },
  {
    number: "04",
    tag: "Смена резиденции",
    title: "Где кормят — там и трон",
    copy: "Рысик всегда спал рядом с хозяином и умел утешать, когда это было нужно. Но после отъезда в институт он рационально перебрался к родителям: там надёжнее расписание еды и больше людей для аудиенции. Любовь, вероятно, сохранилась. По настроению.",
  },
  {
    number: "05",
    tag: "Домашнее расследование",
    title: "Туалетный инцидент",
    copy: "Когда Рысик подрос, он однажды сходил в лоток настолько основательно, что бабушка сперва решила: папа промахнулся мимо. Всё выглядело слишком серьёзно для кота. Но Рысик продолжал сидеть с видом короля, которому такие вопросы не задают.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const nextPhoto = () => setActivePhoto((current) => (current + 1) % gallery.length);
  const prevPhoto = () =>
    setActivePhoto((current) => (current - 1 + gallery.length) % gallery.length);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Главная навигация">
        <a className="brand" href="#top" aria-label="Рысик — на главную">
          <span className="brand-mark">
            <img src="/assets/rysik-paw-mark_2222a24d.png" alt="" />
          </span>
          <span>
            <strong>Рысик</strong>
            <em>домашний дневник</em>
          </span>
        </a>

        <nav className={isMenuOpen ? "nav-links nav-links--open" : "nav-links"}>
          <a href="#dossier" onClick={() => setIsMenuOpen(false)}>Досье</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Кадры</a>
          <a href="#stories" onClick={() => setIsMenuOpen(false)}>Байки</a>
          <a href="#route" onClick={() => setIsMenuOpen(false)}>Маршрут</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-paper" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><PawPrint size={15} /> Карточка наблюдения · 01</p>
          <h1 id="hero-title">Рысик —<br /><i>Королевский</i> кот.</h1>
          <p className="hero-intro">
            Рыжий хранитель солнечных мест, внимательный слушатель и специалист по тихим дням.
          </p>
          <a className="text-link" href="#gallery">
            Смотреть дневник <ArrowDownRight size={18} />
          </a>
        </div>

        <figure className="hero-photo reveal reveal--delay">
          <div className="photo-tape">портрет · без спешки</div>
          <img src="/assets/5_9e271c93.jpg" alt="Рысик внимательно смотрит в камеру" />
          <figcaption><span>Кот Рысик</span><span>2025</span></figcaption>
        </figure>

        <aside className="hero-side-note reveal reveal--late">
          <span className="note-index">РЫС / 001</span>
          <Cat size={22} strokeWidth={1.5} />
          <p>«Не лежит —<br />контролирует<br />горизонт.»</p>
          <span className="note-line" />
          <small>профессия: хозяин дома</small>
        </aside>

        <div className="hero-scroll"><span>прокрутить</span><ChevronRight size={16} /></div>
      </section>

      <section className="dossier section-grid" id="dossier" aria-labelledby="dossier-title">
        <div className="section-label">
          <span>02</span>
          <p>Личное дело</p>
        </div>
        <div className="dossier-heading">
          <p className="eyebrow"><Sparkles size={15} /> Без выдумки, но с характером</p>
          <h2 id="dossier-title">Солнце, шерсть<br />и свои правила.</h2>
        </div>
        <div className="dossier-portrait">
          <img src="/assets/rysik-roses_b42c4992.png" alt="Рысик рядом с букетом красных роз" />
          <span className="round-stamp">100%<br />кот</span>
        </div>
        <div className="dossier-copy">
          <p>
            Рысик умеет появляться именно там, где нужен уют. Он занимает подоконник раньше солнца, слышит шуршание пакета из другой комнаты и относится к фотографированию с достоинством человека, у которого плотный график сна.
          </p>
          <dl className="fact-list">
            <div><dt>Окрас</dt><dd>медный с белой манишкой</dd></div>
            <div><dt>Суперсила</dt><dd>обнаруживать мягкие места</dd></div>
            <div><dt>Любимая роль</dt><dd>просит жрать</dd></div>
          </dl>
        </div>
      </section>

      <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow"><Heart size={15} /> Частная коллекция</p>
            <h2 id="gallery-title">Дни, которые<br /><i>пахнут домом.</i></h2>
          </div>
          <p className="gallery-summary">Несколько кадров из жизни Рысика: без постановки, зато с шерстью на каждом важном предмете.</p>
        </div>

        <div className="gallery-layout">
          {gallery.map((image, index) => (
            <button
              className={`${image.style} ${activePhoto === index ? "gallery-card--active" : ""}`}
              key={image.title}
              type="button"
              onClick={() => setActivePhoto(index)}
              aria-label={`Открыть фотографию: ${image.title}`}
            >
              <img src={image.src} alt={image.title} />
              <span className="gallery-overlay">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span><strong>{image.title}</strong><small>{image.note}</small></span>
                <ArrowUpRight size={20} />
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-pager" aria-label="Переключатель фотографий">
          <button onClick={prevPhoto} type="button" aria-label="Предыдущая фотография"><ChevronLeft size={18} /></button>
          <span>{String(activePhoto + 1).padStart(2, "0")} <i>/</i> {String(gallery.length).padStart(2, "0")}</span>
          <button onClick={nextPhoto} type="button" aria-label="Следующая фотография"><ChevronRight size={18} /></button>
        </div>
      </section>

      <section className="archive-section" aria-labelledby="archive-title">
        <div className="archive-heading">
          <div>
            <p className="eyebrow"><Sparkles size={15} /> Архив наблюдений</p>
            <h2 id="archive-title">Ещё немного<br /><i>Рысика.</i></h2>
          </div>
          <p>Портреты, важные совещания, спящие часы и один эксперимент с причёской, который остался в семейной истории.</p>
        </div>
        <div className="archive-grid">
          {archivePhotos.map((photo, index) => (
            <figure className="archive-photo" key={photo.title}>
              <img src={photo.src} alt={`Рысик: ${photo.title}`} />
              <figcaption>
                <span>{String(index + 5).padStart(2, "0")}</span>
                <div><strong>{photo.title}</strong><small>{photo.note}</small></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stories-section" id="stories" aria-labelledby="stories-title">
        <div className="stories-heading">
          <p className="eyebrow"><Heart size={15} /> Из уст очевидца</p>
          <h2 id="stories-title">Хроники<br /><i>доброго короля.</i></h2>
          <p>Рысику примерно 8–10 лет. Он не самый игривый кот, в душе немного пикми и местами цундере, но всегда добрый, ласковый и очень внимательный к своим людям.</p>
        </div>
        <div className="story-list">
          {stories.map((story) => (
            <article className="story-card" key={story.number}>
              <span className="story-number">{story.number}</span>
              <div>
                <p className="story-tag">{story.tag}</p>
                <h3>{story.title}</h3>
              </div>
              <p className="story-copy">{story.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="route-section" id="route" aria-labelledby="route-title">
        <div className="route-visual">
          <img src="/assets/rysik-personal-route-map_bb365906.png" alt="Иллюстрация маршрута с Рысиком и кошачьими следами" />
          <div className="route-pin route-pin--one"><MapPin size={19} /><span>окно</span></div>
          <div className="route-pin route-pin--two"><MapPin size={19} /><span>плед</span></div>
          <div className="route-pin route-pin--three"><MapPin size={19} /><span>миска</span></div>
        </div>
        <div className="route-copy">
          <p className="eyebrow"><Compass size={15} /> Обычный день</p>
          <h2 id="route-title">Маршрут,<br />который нельзя<br /><i>нарушать.</i></h2>
          <div className="moment-list">
            {moments.map(([time, activity, place]) => (
              <div className="moment" key={time}>
                <time>{time}</time>
                <p>{activity}</p>
                <span>{place}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-note">
        <figure className="closing-photo">
          <img src="/assets/rysik-masterplan_c3db6577.png" alt="Рысик задумчиво смотрит в камеру" />
          <figcaption>Планирует план по захвату человечества</figcaption>
        </figure>
        <div>
          <p className="eyebrow"><PawPrint size={15} /> Конец заметки</p>
          <h2>Завтра он снова<br />будет <i>главным.</i></h2>
          <p>А пока — можно просто посидеть рядом.</p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand brand--footer" href="#top">
          <span className="brand-mark"><img src="/assets/rysik-paw-mark_2222a24d.png" alt="" /></span>
          <span><strong>Рысик</strong><em>домашний дневник</em></span>
        </a>
        <p>Собрано из тёплых дней, рыжей шерсти и фотографий.</p>
        <a href="#top" className="back-top">К началу <ArrowUpRight size={16} /></a>
      </footer>
    </main>
  );
}
