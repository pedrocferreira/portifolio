<template>
  <div id="app">
    <Header @scroll-top="scrollToTop" />
    <main class="main">
      <router-view />
    </main>
    <Footer @scroll-top="scrollToTop" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    scrollToTop() {
      const element = document.getElementById('home')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>