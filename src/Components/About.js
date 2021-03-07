import React from 'react'
import Share from "../Assets/share.svg";

function About() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
  <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">About the App</h1>
    </div>
    <div class="flex flex-wrap w-full">

      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">

          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">Install the app</h2>
            <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eligendi?</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">Setup Your Profile</h2>
            <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.</p>
          </div>
        </div>


        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">Enjoy the features</h2>
          <p class="leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quasi.</p>
          </div>
        </div>
      </div>
      <img class="md:w-3/6 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={Share} alt="step"/>
    </div>
  </div>
</section>
    )
}

export default About
