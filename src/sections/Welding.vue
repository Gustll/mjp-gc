<template>
  <section id="varjenje">
    <div class="varjenje-layout pa4">
      <!-- Mobile Order 1-3 -->
      <div
        class="varjenje-col1-row1 ph3 ph5-ns pv3 flex justify-end items-center flex-column flex-end landing-title"
      >
        <h1 class="f2">{{ $t("nav.welding") }}</h1>
      </div>
      <div
        class="varjenje-col1-row2 ph3 ph5-ns pv3 flex flex-column items-start justify-center lh-copy"
      >
        <span>{{ $t("welding.t1") }}</span>
        <span>{{ $t("welding.t2") }}</span>
      </div>
      <div class="varjenje-col1-row3 pa3 flex justify-center items-start">
        <a
          href="#montaza"
          class="navigation-button inline-flex items-center no-underline f4 fw5 justify-between"
        >
          <span>{{ $t("nav.assembly") }}</span>
          <span class="material-symbols-outlined ml2">arrow_downward</span>
        </a>
      </div>

      <!-- Mobile Order 4 -->
      <div
        class="varjenje-col2-3-span pa4 flex justify-center items-center relative"
      >
        <!-- <img src="img/varjenje_1.jpg" class="varjenje-slide w-auto h-100" />
        <img src="img/varjenje_2.jpg" class="varjenje-slide w-auto h-100 dn" />
        <img src="img/varjenje_3.jpg" class="varjenje-slide w-auto h-100 dn" /> -->

        <button
          class="slider-btn slider-left absolute ml4"
          onclick="plusDivs('varjenje-slide', -1)"
        >
          &#10094;
        </button>
        <button
          class="slider-btn slider-right absolute mr4"
          onclick="plusDivs('varjenje-slide', +1)"
        >
          &#10095;
        </button>
      </div>
    </div>
  </section>
</template>
