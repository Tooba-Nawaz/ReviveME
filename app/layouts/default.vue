<template>
  <div>
    <NavBar />
    <div class="mt-[72px] md:mt-[] lg:mt-[78px]"><slot /></div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "../components/shared/Navbar.vue";
import Footer from "../components/shared/Footer.vue";
</script>

<style scoped></style>
