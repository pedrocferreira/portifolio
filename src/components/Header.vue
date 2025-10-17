<template>
  <header class="header" :class="{ 'header--scrolled': hasScrolled }">
    <div class="container">
      <nav class="nav">
        <a href="#home" class="logo" @click.prevent="scrollTo('home')">
          <span class="logo__icon">PF</span>
          <span class="logo__text">
            <span class="logo__name">Pedro Ferreira</span>
            <span class="logo__tagline">Full Stack Developer</span>
          </span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="primary-navigation"
          aria-label="Alternar navegação"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="primary-navigation" class="nav-links" :class="{ 'is-active': isMenuOpen }">
          <li><a href="#home" @click.prevent="scrollTo('home')">Início</a></li>
          <li><a href="#about" @click.prevent="scrollTo('about')">Sobre</a></li>
          <li><a href="#technologies" @click.prevent="scrollTo('technologies')">Tecnologias</a></li>
          <li><a href="#projects" @click.prevent="scrollTo('projects')">Projetos</a></li>
          <li><a href="#contact" @click.prevent="scrollTo('contact')">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      hasScrolled: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      this.closeMenu()
    },
    handleScroll() {
      this.hasScrolled = window.scrollY > 16
      if (window.innerWidth > 1024 && this.isMenuOpen) {
        this.closeMenu()
      }
    }
  }
}
</script>