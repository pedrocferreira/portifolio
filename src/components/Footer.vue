<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__brand">
        <a href="#home" @click.prevent="$emit('scroll-top')">Pedro Ferreira</a>
        <span>Construindo produtos digitais com propósito.</span>
      </div>

      <div class="footer__links">
        <a href="https://github.com/pedroocferreira" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/pedroocferreira/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:pedroocferreira@gmail.com">E-mail</a>
        <a href="https://wa.me/5551981281898" target="_blank" rel="noopener">WhatsApp</a>
      </div>

      <div class="footer__legal">
        <span>&copy; {{ new Date().getFullYear() }} Pedro Ferreira</span>
        <span>Todos os direitos reservados</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>