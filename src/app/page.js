import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <Image
              src="/logo-image.png"
              alt="Logo image"
              width={140}
              height={146}
              priority
            />
            <div className="logo-info">
              <div className="logo-title">EnotiCake</div>
              <div className="logo-description">
                Студия тортов ручной работы на заказ
              </div>
            </div>
          </div>
          <div className="call">
            <Image
              src="/call-image.svg"
              alt="Logo image"
              width={43}
              height={45}
              priority
            />
            <div className="call-info">
              +7-905-555-23-23 <br /> Есть вопросы? Пишите в WhatsApp
            </div>
          </div>
          <div className="address">
            <Image
              src="/address-image.svg"
              alt="Adress image"
              width={51}
              height={45}
              priority
            />
            <div className="address-info">
              Нижний Новгород <br /> Арктическая, 29
            </div>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#fillings">НАЧИНКИ</a>
          <a href="#reviews">ОТЗЫВЫ</a>
          <a href="#intro">О НАС</a>
          <a href="#contacts">КОНТАКТЫ</a>
        </nav>
      </header>
      <main className="main">
        <div className="featured centered-content">
          <h1 className="text-decoration">Доступные категории тортов:</h1>
          <div className="featured-cakes">
            <Image
              src="/featured-cake1.png"
              alt="Featured cake 1"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake2.png"
              alt="Featured cake 2"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake3.png"
              alt="Featured cake 3"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake4.png"
              alt="Featured cake 4"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake5.png"
              alt="Featured cake 5"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake6.png"
              alt="Featured cake 6"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake7.png"
              alt="Featured cake 7"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake8.png"
              alt="Featured cake 8"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake9.png"
              alt="Featured cake 9"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake10.png"
              alt="Featured cake 10"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake11.png"
              alt="Featured cake 11"
              width={290}
              height={404}
              priority
            />
            <Image
              src="/featured-cake12.png"
              alt="Featured cake 12"
              width={290}
              height={404}
              priority
            />
          </div>
        </div>
        <div id="fillings" className="fillings dark-background">
          <h1 className="text-decoration">
            А что внутри тортиков, какие начинки делаете?
          </h1>
          <a href="#" className="button">
            Полный перечень наших начинок здесь!
          </a>
        </div>
        <div id="reviews" className="reviews centered-content">
          <h1 className="text-decoration">
            Отзывы у Вас есть? <br />
            Да, у нас <span className="marked-red">более 200 отзывов</span>. Вот
            некоторые из них:
          </h1>
          <div className="review-cards-list">
            <div className="review-card">
              <Image
                src="/reviews1.png"
                alt="Reviews 1"
                width={130}
                height={130}
                priority
              />
              <p className="review-card-text">
                Попробовали капкейки, это безумно вкусно! Такое нежное сочетание
                крема и ягод. Спасибо Вам огромное! <br />
                <span className="review-author">Кристина Малинина</span>
              </p>
            </div>
            <div className="review-card">
              <Image
                src="/reviews2.png"
                alt="Reviews 2"
                width={130}
                height={130}
                priority
              />
              <p className="review-card-text">
                Спасибо огромное! Торт впечатлил абсолютно всех гостей! Жаль
                только,что кончился так быстро. Надо было больше брать! <br />
                <span className="review-author">Екатерина Романова</span>
              </p>
            </div>
            <div className="review-card">
              <Image
                src="/reviews3.png"
                alt="Reviews 3"
                width={130}
                height={130}
                priority
              />
              <p className="review-card-text">
                Огромное Вам спасибо за восхитительный тортик! Все были в
                восторге. Очень стильный и невероятно вкусный тортик. <br />
                <span className="review-author">Ксения Зверева</span>
              </p>
            </div>
          </div>
        </div>
        <div id="intro" className="intro dark-background">
          <div className="centered-content">
            <h1 className="text-decoration">Что еще про себя расскажете?</h1>
            <h1 className="text-decoration">
              Мы работаем <span className="marked-red">7 лет</span> и по нашей
              статистике <span className="marked-red">37%</span> клиентов
              приходят к нам повторно, а <span className="marked-red">70%</span>{" "}
              рекомендуют нас друзьям ;{")"}
            </h1>
            <div className="intro-content">
              <div className="intro-content-column text-align-right">
                <div>
                  <h2>Проверенные рецепты</h2>
                  <p>
                    Торты готовим по домашним рецептам,которые тщательно
                    проверенны временем.
                  </p>
                </div>
                <div>
                  <h2>Вкусовые качества</h2>
                  <p>
                    За 4 года работы мы добились высоких вкусовых качеств наших
                    тортов на основе натуральных ингредиентов, без применения
                    химии.
                  </p>
                </div>
                <div>
                  <h2>Качественные ингридиенты</h2>
                  <p>
                    Мы закупаем качественные ингредиенты для тортиков только у
                    проверенных поставщиков.
                  </p>
                </div>
              </div>
              <Image
                src="/intro-content-center.png"
                alt="Intro content center"
                width={609}
                height={884}
                priority
              />
              <div className="intro-content-column">
                <div>
                  <h2>Рекомендуем детям</h2>
                  <p>
                    Всегда особое внимание уделяем тортикам предназначенных для
                    детских праздников и день рождений.
                  </p>
                </div>
                <div>
                  <h2>Разнообразие оформлений</h2>
                  <p>
                    На тортиках всегда максимальное разнообразное количество
                    ягод и конфет, в зависимости от повода и Ваших пожеланий.
                  </p>
                </div>
                <div>
                  <h2>Аккуратно доставляем</h2>
                  <p>
                    Осуществляем доставку по Нижнему Новгороду и области к
                    назначенному времени.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer centered-content">
        <div className="footer-content">
          <Image
            src="/footer-logo.png"
            alt="Footer logo"
            width={200}
            height={200}
            priority
          />
          <div className="socials">
            <Image
              src="/footer-social1.svg"
              alt="Footer logo"
              width={60}
              height={60}
              priority
            />
            <Image
              src="/footer-social2.svg"
              alt="Footer logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <div id="contacts" className="contacts">
            <p>
              +7-905-555-23-23
              <br />
              Звоните с 10:00 до 22:00
              <br />
              Порекомендуем и расскажем!
            </p>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>© 2016-2023 EnotiCake. Студия тортов ручной работы на заказ</p>
        </div>
      </footer>
    </>
  );
}
