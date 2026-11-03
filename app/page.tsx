export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#202020]">
      {/* Шапка */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-tight text-[#202d54]">
            BOXPACK
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#333]">
            <a href="#services" className="hover:text-[#45b7c8]">Услуги</a>
            <a href="#steps" className="hover:text-[#45b7c8]">Как это работает</a>
            <a href="#video" className="hover:text-[#45b7c8]">Видеофиксация</a>
            <a href="#calculator" className="hover:text-[#45b7c8]">Калькулятор</a>
            <a href="#cases" className="hover:text-[#45b7c8]">Кейсы</a>
            <a href="#contacts" className="hover:text-[#45b7c8]">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Первый экран */}
      <section className="bg-[#202d54] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-sm text-slate-300">
              Автоматизированный фулфилмент
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
              Автоматизированная упаковка, видеоконтроль каждого заказа
              и отправка в день поступления. Мы берём на себя хранение,
              сборку, маркировку и логистику.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="#calculator"
                className="font-semibold text-white hover:text-[#55c1d0]"
              >
                
              </a>

              <a
                href="#contacts"
                className="rounded border border-slate-400 px-5 py-3 text-sm hover:bg-white/10"
              >
                Получить консультацию
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-[#354267] p-4">
                <p className="text-xl font-bold">5000+</p>
                <p className="mt-1 text-xs text-slate-300">заказов в день</p>
              </div>
              <div className="rounded-lg bg-[#354267] p-4">
                <p className="text-xl font-bold">99,8%</p>
                <p className="mt-1 text-xs text-slate-300">точность сборки</p>
              </div>
              <div className="rounded-lg bg-[#354267] p-4">
                <p className="text-xl font-bold">FBO/FBS</p>
                <p className="mt-1 text-xs text-slate-300">все маркетплейсы</p>
              </div>
            </div>
          </div>

          <div
            id="video"
            className="flex min-h-64 items-center justify-center rounded-lg bg-[#d1d5df] p-8 text-center text-sm text-[#333]"
          >
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>

      {/* Этапы работы */}
      <section id="steps" className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">
            Как начать работать с нами
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600">
            Подключение занимает всего несколько дней. Все процессы
            максимально автоматизированы.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm"><p className="text-xs font-bold">ШАГ 1</p>
              <h3 className="mt-2 text-sm font-semibold">Оставляете заявку</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">Через сайт или Telegram</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 2</p>
              <h3 className="mt-2 text-sm font-semibold">Получаете расчёт</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">Под ваш объём и формат работы</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 3</p>
              <h3 className="mt-2 text-sm font-semibold">Подписываем договор</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">Через ЭДО</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 4</p>
              <h3 className="mt-2 text-sm font-semibold">Принимаем товар</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">От поставщика или транспортной компании</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 5</p>
              <h3 className="mt-2 text-sm font-semibold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">С видеоконтролем каждого этапа</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 6</p>
              <h3 className="mt-2 text-sm font-semibold">Отправляем</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">На маркетплейсы по всей России</p>
            </article>
            <article className="min-h-32 rounded-lg border-t-4 border-[#d7d7d7] bg-[#f0f0f0] p-5 shadow-sm">
              <p className="text-xs font-bold">ШАГ 7</p>
              <h3 className="mt-2 text-sm font-semibold">Получаете результат</h3>
              <p className="mt-2 text-xs leading-4 text-gray-500">Отчёты и прозрачную статистику</p>
            </article>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="bg-[#f7f7f7] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">
            Услуги фулфилмента
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Полный цикл обработки товара от приёмки до доставки.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Приёмка и сортировка</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                Принимаем поставки любого объёма и размещаем товар на адресное хранение.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Проверка на брак</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                Контролируем качество перед отправкой покупателю.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Автоматизированная упаковка</h3><p className="mt-2 text-xs leading-5 text-gray-500">
                Автоматические линии и видеоконтроль каждого заказа.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Сборка заказов</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                Быстрая комплектация заказов по данным маркетплейсов.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Отправка на маркетплейсы</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                FBO и FBS для основных торговых площадок.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Хранение товаров</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                Безопасное адресное хранение продукции.
              </p>
            </article>
            <article className="min-h-36 rounded-lg border-t-4 border-[#50bdcc] bg-white p-6 transition-shadow hover:shadow-md">
              <h3 className="text-sm font-bold">Интеграции</h3>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                Синхронизация с маркетплейсами и CRM.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="why" className="bg-[#202d54] px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold">
            Почему выбирают BOXPACK
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg bg-[#354267] p-5">
              <h3 className="font-bold">Скорость</h3>
              <p className="mt-3 text-xs leading-5 text-slate-300">
                До 20 000 товаров за смену и отправка в день заказа.
              </p>
            </article>
            <article className="rounded-lg bg-[#354267] p-5">
              <h3 className="font-bold">Точность</h3>
              <p className="mt-3 text-xs leading-5 text-slate-300">
                99,8% точности сборки благодаря автоматизации.
              </p>
            </article>
            <article className="rounded-lg bg-[#354267] p-5">
              <h3 className="font-bold">Надёжность</h3>
              <p className="mt-3 text-xs leading-5 text-slate-300">
                Страхование товаров и круглосуточный контроль.
              </p>
            </article>
            <article className="rounded-lg bg-[#354267] p-5">
              <h3 className="font-bold">Поддержка</h3>
              <p className="mt-3 text-xs leading-5 text-slate-300">
                Персональный менеджер и оперативная помощь.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Калькулятор */}
      <section id="calculator" className="px-5 py-16 text-center">
        <h2 className="text-3xl font-bold">Рассчитайте стоимость</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600">
          Оставьте заявку, чтобы получить индивидуальный расчёт услуг
          фулфилмента.
        </p>
        <a
          href="#contacts"
          className="mt-6 inline-block rounded bg-[#202d54] px-7 py-3 font-semibold text-white hover:bg-[#354267]"
        >
          Получить расчёт
        </a>
      </section>

      {/* Контакты */}
      <footer id="contacts" className="bg-[#202d54] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
          <div><p className="text-2xl font-black">BOXPACK</p>
            <p className="mt-2 text-sm text-slate-300">
              Автоматизированный фулфилмент для маркетплейсов
            </p>
          </div>
          <a
            href="mailto:info@boxpack.ru"
            className="font-semibold hover:text-[#55c1d0]"
          >
            Оставить заявку
          </a>
        </div>
      </footer>
    </main>
  );
}