<script setup>
import About from './sections/About.vue';
import Assembly from './sections/Assembly.vue';
import Contact from './sections/Contact.vue';
import Locations from './sections/Locations.vue';
import Rental from './sections/Rental.vue';
import Service from './sections/Service.vue';
import Transport from './sections/Transport.vue';
import Welding from './sections/Welding.vue';
import Nav from './shared/components/Nav.vue';
</script>
<template>
    <div id="app">
        <Nav />

        <About />
        <Welding />
        <Assembly />
        <Service />
        <Locations />
        <Rental />
        <Contact />
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
