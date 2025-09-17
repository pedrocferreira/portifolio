<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">Pedro Ferreira</div>
        <ul class="nav-links">
          <li><a href="#home" @click="scrollTo('home')">Início</a></li>
          <li><a href="#about" @click="scrollTo('about')">Sobre</a></li>
          <li><a href="#technologies" @click="scrollTo('technologies')">Tecnologias</a></li>
          <li><a href="#projects" @click="scrollTo('projects')">Projetos</a></li>
          <li><a href="#contact" @click="scrollTo('contact')">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>