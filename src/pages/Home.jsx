import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

    return () => {
      // Cleanup event listeners when component unmounts
      keenSlider.destroy();
    };
  }, []);
  return (
    <div>
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your

              <strong className="block font-extrabold text-rose-500"> Forever Home. </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
          <div className="mx-auto w-full px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Don't just take our word for it...
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
                  harum porro optio fugit a culpa sunt id!
                </p>

                <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                  >
                    <svg
                      className="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="-mx-6 lg:col-span-2 lg:mx-0">
                <div id="keen-slider" className="keen-slider">
                  <div className="keen-slider__slide">
                    <blockquote
                      className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            No, Rose, they are not breathing. And they have no arms or legs … Where are
                            they? You know what? If we come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote
                      className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            No, Rose, they are not breathing. And they have no arms or legs … Where are
                            they? You know what? If we come across somebody with no arms or legs, do we
                            bother resuscitating them? I mean, what quality of life do we have there?
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Michael Scott
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
      </section>
      <div class="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
              dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
              dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
              dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
      </div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                  sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                  volutpat quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt=""
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
