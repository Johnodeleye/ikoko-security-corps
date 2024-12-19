'use client';

const Hero = () => {
    return (
        <div>
 {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://img.freepik.com/premium-photo/group-soldiers-outdoor-army-exercises-war-army-technology-people-concept_124865-4797.jpg?w=1380)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/60 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h1 className="text-3xl font-extrabold sm:text-5xl text-shadow-white">
  United for Peace,
  <strong className="block font-extrabold text-rose-700 text-shadow-white">
    Justice, & Security
  </strong>
</h1>

<p className="mt-4 max-w-lg sm:text-xl/relaxed text-red-700 text-shadow-white md:text-black">
  Ikoko Security Corps is committed to ending crime and bringing peace and love
  to our land. Together, we fight for safety, harmony, and a better future.
</p>


      <div className="mt-8 flex flex-wrap gap-4 text-center md:ml-16">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-transparent hover:border border-rose-600 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-transparent px-12 py-3 text-sm text-rose-600 shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto border border-white font-semibold hover:bg-rose-600 hover:text-white"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Hero