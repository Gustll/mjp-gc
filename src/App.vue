<script setup>
import Transport from "./sections/Transport.vue";
import Welding from "./sections/Welding.vue";
</script>
<template>
  <div id="app">
    <header
      id="navbar"
      class="fixed top-0 left-0 w-100 flex justify-between items-center bg-white-90 z-5 pa2"
    >
      <!-- Logo -->
      <div class="logo" id="nav-logo">
        <a href="#o-nas">
          <img src="/assets/logo_gc.png" id="logo" />
        </a>
      </div>

      <div class="language-selector absolute">
        <select id="language-select" class="f4 fw5 bn pointer">
          <option value="si" class="si">🇸🇮 SI</option>
          <option value="en" class="en">🇬🇧 EN</option>
        </select>
      </div>

      <!-- Desktop Navigation -->
      <nav class="dn flex-l pa3">
        <a href="#varjenje" class="nav-link ml3">{{ $t("nav.welding") }} </a>
        <a href="#montaza" class="nav-link ml3">{{ $t("nav.assembly") }} </a>
        <a href="#servis" class="nav-link ml3"> {{ $t("nav.service") }}</a>
        <a
          href="#lokacije-dela"
          data-i18n="nav.lokacije_dela"
          class="nav-link ml3"
        >
          {{ $t("nav.locations") }}
        </a>
        <a
          href="#najem-bagrov"
          data-i18n="nav.najem_bagrov"
          class="nav-link ml3"
        >
          {{ $t("nav.rental") }}
        </a>
        <a href="#kontakt" class="nav-link ml3">{{ $t("nav.contact") }} </a>
      </nav>

      <!-- Mobile Burger (show on mobile, hide on desktop) -->
      <div class="burger flex dn-l items-center">
        <button id="burger-btn" class="f3 bg-transparent bn pointer">☰</button>
      </div>
    </header>

    <!-- Mobile expanded menu (hidden by default) -->
    <div
      id="mobile-menu"
      class="fixed top-0 right-0 w-100 h-100 bg-white flex-column items-center justify-center dn z-4"
    >
      <a href="#varjenje" class="mobile-link mb3 f3">
        {{ $t("nav.welding") }}
      </a>
      <a href="#montaza" class="mobile-link mb3 f3">
        {{ $t("nav.assembly") }}
      </a>
      <a href="#servis" class="mobile-link mb3 f3">{{ $t("nav.service") }} </a>
      <a href="#lokacije-dela" class="mobile-link mb3 f3">
        {{ $t("nav.locations") }}
      </a>
      <a href="#najem-bagrov" class="mobile-link mb3 f3">
        {{ $t("nav.rental") }}
      </a>
      <a href="#kontakt" class="mobile-link mb3 f3">
        {{ $t("nav.contact") }}
      </a>
      <button id="close-btn" class="mt4 f2 bg-transparent bn pointer">✕</button>
    </div>
    <main>
      <Welding />
      <Transport />
    </main>
  </div>
</template>

<style scoped lang="scss">
/* Navbar */
#navbar {
  transition: all 0.3s ease;
}

#navbar .logo {
  width: 120px;
}

#nav-logo {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.nav-link,
.mobile-link {
  text-decoration: none;
  //color: $black;
  font-weight: 600;
  transition: color 0.3s ease;
}

// .nav-link:hover,
// .mobile-link:hover {
//   color: $orange;
// }

// #mobile-menu {
//   background-color: $gray;
// }

// #burger-btn,
// #close-btn {
//   color: $black;
// }
</style>
