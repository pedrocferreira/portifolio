<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container hero__container">
        <div class="hero__visual">
          <div class="hero__image-wrapper">
            <img src="/avatar.jpg" alt="Pedro Ferreira" class="hero__image" />
            <div class="hero__badge">
              <span></span>
              <strong>Disponível</strong>
            </div>
          </div>
        </div>

        <div class="hero__content">
          <span class="hero__tag">
            <i class="fas fa-code"></i>
            Desenvolvedor Full Stack & IA
          </span>

          <h1 class="hero__title">
            Soluções digitais sob medida para acelerar o seu negócio.
          </h1>

          <p class="hero__subtitle">
            Especialista em Python, PHP, Vue e Inteligência Artificial. Transformo ideias em produtos digitais que entregam resultados mensuráveis.
          </p>

          <div class="hero__highlights">
            <div class="hero__highlight">
              <i class="fas fa-clock"></i>
              <div>
                <strong>7+ anos</strong>
                <span>de experiência</span>
              </div>
            </div>
            <div class="hero__highlight">
              <i class="fas fa-project-diagram"></i>
              <div>
                <strong>40+</strong>
                <span>projetos entregues</span>
              </div>
            </div>
            <div class="hero__highlight">
              <i class="fas fa-users"></i>
              <div>
                <strong>92%</strong>
                <span>clientes recorrentes</span>
              </div>
            </div>
          </div>

          <div class="hero__cta">
            <a href="/cv-pedro-ferreira.pdf" class="btn btn--primary" download>
              <i class="fas fa-download"></i>
              Download CV
            </a>
            <button class="btn btn--ghost" type="button" @click="scrollTo('projects')">
              Ver Projetos
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>

          <div class="hero__tech">
            <span>Stack principal:</span>
            <div class="hero__tech-list">
              <span>Python</span>
              <span>Laravel</span>
              <span>Vue.js</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__scroll" @click="scrollTo('about')">
        <span>Role para saber mais</span>
        <i class="fas fa-arrow-down"></i>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section section--contrast">
      <div class="container">
        <div class="section__header" v-animate-on-scroll data-animate="fade-up">
          <span class="section__eyebrow">Sobre mim</span>
          <h2 class="section__title">Transformo desafios complexos em experiências digitais memoráveis.</h2>
          <p class="section__subtitle">
            Minha jornada combina engenharia de software, automação inteligente e design centrado no usuário para construir produtos que performam.
          </p>
        </div>

        <div class="about__content" v-animate-on-scroll data-animate="fade-up" data-animate-delay="120">
          <div class="about__media" v-animate-on-scroll data-animate="zoom-in">
            <video 
              class="about__video"
              src="/pedroTrabalhando.mp4" 
              alt="Pedro trabalhando" 
              autoplay 
              muted 
              loop 
              playsinline
            />
            <div class="about__badge" v-tilt>
              <span>+7 anos</span>
              <small>Construindo produtos digitais</small>
            </div>
          </div>

          <div class="about__details" v-animate-on-scroll data-animate="fade-left" data-animate-delay="160">
            <div class="about__grid">
              <article class="about__card" v-animate-on-scroll data-animate="fade-up" data-animate-delay="120">
                <h3>Full Stack & Arquitetura</h3>
                <p>
                  Projetos completos do backend ao frontend com foco em escalabilidade, performance e segurança. Experiência com microsserviços, APIs e integrações complexas.
                </p>
              </article>

              <article class="about__card" v-animate-on-scroll data-animate="fade-up" data-animate-delay="200">
                <h3>Automação & IA aplicada</h3>
                <p>
                  Robots inteligentes, chatbots e pipelines de dados com LangChain, OpenAI, Selenium e RAG para transformar dados em insights acionáveis.
                </p>
              </article>

              <article class="about__card" v-animate-on-scroll data-animate="fade-up" data-animate-delay="280">
                <h3>DevOps & Observabilidade</h3>
                <p>
                  Entregas contínuas com Docker, CI/CD, monitoramento e infraestrutura resiliente em cloud (AWS, VPS, Nginx, Portainer).
                </p>
              </article>

              <article class="about__card" v-animate-on-scroll data-animate="fade-up" data-animate-delay="360">
                <h3>Growth & Estratégia digital</h3>
                <p>
                  Implementação de estratégias de SEO, automações de marketing e sistemas de relatórios para potencializar resultados.
                </p>
              </article>
            </div>

            <ul class="about__stats" v-animate-on-scroll data-animate="fade-up" data-animate-delay="420">
              <li>
                <span>40+</span>
                <small>Projetos entregues</small>
              </li>
              <li>
                <span>12</span>
                <small>Produtos de SaaS lançados</small>
              </li>
              <li>
                <span>5 países</span>
                <small>Clientes atendidos</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section id="technologies" class="section">
      <div class="container">
        <div class="section__header" v-animate-on-scroll data-animate="fade-up">
          <span class="section__eyebrow">Stack principal</span>
          <h2 class="section__title">Ferramentas que uso para acelerar entregas.</h2>
          <p class="section__subtitle">
            Escolho tecnologias de acordo com o contexto do negócio, garantindo equilíbrio entre velocidade, manutenibilidade e inovação.
          </p>
          </div>
          
        <div class="tech__grid">
          <div class="tech__column" v-animate-on-scroll data-animate="fade-right">
            <h3>Backend & APIs</h3>
            <ul class="tech__list">
              <li>
                <span class="tech__icon"><i class="fab fa-python"></i></span>
                <span>Python · Django · FastAPI</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fab fa-php"></i></span>
                <span>PHP · Laravel · CodeIgniter</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fab fa-node-js"></i></span>
                <span>Node.js · Express · Nest</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fas fa-database"></i></span>
                <span>PostgreSQL · MySQL · MongoDB</span>
              </li>
            </ul>
          </div>
          
          <div class="tech__column" v-animate-on-scroll data-animate="fade-up" data-animate-delay="140">
            <h3>Frontend & Produtos</h3>
            <ul class="tech__list">
              <li>
                <span class="tech__icon"><i class="fab fa-vuejs"></i></span>
                <span>Vue.js · Nuxt · React</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fas fa-code"></i></span>
                <span>TypeScript · Vite</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fab fa-css3-alt"></i></span>
                <span>Tailwind · Styled Systems</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fas fa-shapes"></i></span>
                <span>Design Systems escaláveis</span>
              </li>
            </ul>
          </div>
          
          <div class="tech__column" v-animate-on-scroll data-animate="fade-left" data-animate-delay="240">
            <h3>IA, Automação & DevOps</h3>
            <ul class="tech__list">
              <li>
                <span class="tech__icon"><i class="fas fa-robot"></i></span>
                <span>LangChain · OpenAI · RAG</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fas fa-cogs"></i></span>
                <span>Selenium · Puppeteer · N8N</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fab fa-docker"></i></span>
                <span>Docker · CI/CD · Observabilidade</span>
              </li>
              <li>
                <span class="tech__icon"><i class="fab fa-aws"></i></span>
                <span>Infraestrutura em AWS e VPS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section section--contrast">
      <div class="container">
        <div class="section__header" v-animate-on-scroll data-animate="fade-up">
          <span class="section__eyebrow">Projetos</span>
          <h2 class="section__title">Casos de uso que combinam tecnologia e impacto.</h2>
          <p class="section__subtitle">
            Projetos construídos com foco em escala, automação e entrega de valor contínuo.
          </p>
            </div>

        <div class="projects__grid">
          <article class="project" v-animate-on-scroll data-animate="fade-right">
            <div class="project__header">
              <span class="project__icon"><i class="fas fa-spider"></i></span>
              <div>
                <span class="project__tag">Data Intelligence</span>
              <h3>ESG Data Crawler</h3>
              </div>
            </div>
            <p>
              Plataforma para coleta, processamento e análise de relatórios ESG com crawlers inteligentes. Dados prontos para dashboards e avaliação de investimentos responsáveis.
            </p>
            <ul class="project__stack">
              <li>Python</li>
              <li>LangChain</li>
              <li>Docker</li>
            </ul>
            <div class="project__actions">
              <a href="https://github.com/pedrocferreira/esg-puppeteer" target="_blank" rel="noopener" class="btn btn--primary">GitHub</a>
              <button type="button" class="btn btn--ghost">Case completo</button>
            </div>
          </article>

          <article class="project" v-animate-on-scroll data-animate="fade-up" data-animate-delay="160">
            <div class="project__header">
              <span class="project__icon"><i class="fas fa-robot"></i></span>
              <div>
                <span class="project__tag">Conversational AI</span>
              <h3>Chatbot Inteligente</h3>
              </div>
            </div>
            <p>
              Assistente com RAG e LangChain capaz de consultar PDFs, imagens e bancos de dados. Permite criar fluxos customizados para suporte e consultoria especializada.
            </p>
            <ul class="project__stack">
              <li>Vue.js</li>
              <li>LangChain</li>
              <li>OpenAI</li>
            </ul>
            <div class="project__actions">
              <a href="https://github.com/pedro-ferreira/chatbot-llm" target="_blank" rel="noopener" class="btn btn--primary">GitHub</a>
              <button type="button" class="btn btn--ghost">Case completo</button>
            </div>
          </article>

          <article class="project" v-animate-on-scroll data-animate="fade-left" data-animate-delay="240">
            <div class="project__header">
              <span class="project__icon"><i class="fas fa-globe"></i></span>
              <div>
                <span class="project__tag">Product Ops</span>
              <h3>Sistemas Web & Integrações</h3>
              </div>
            </div>
            <p>
              Aplicações web robustas com integrações RESTful, dashboards em tempo real e automação de processos críticos para equipes operacionais.
            </p>
            <ul class="project__stack">
              <li>Laravel</li>
              <li>Vue.js</li>
              <li>CI/CD</li>
            </ul>
            <div class="project__actions">
              <a href="https://github.com/pedro-ferreira/web-systems" target="_blank" rel="noopener" class="btn btn--primary">GitHub</a>
              <button type="button" class="btn btn--ghost">Case completo</button>
          </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container contact" v-animate-on-scroll data-animate="fade-up">
        <div class="contact__intro" v-animate-on-scroll data-animate="fade-up" data-animate-delay="120">
          <span class="section__eyebrow">Contato</span>
          <h2>Vamos construir algo juntos?</h2>
          <p>
            Adoro conversar sobre novos desafios, produtos digitais e automações inteligentes. Respondo em até 24 horas.
          </p>
          <div class="contact__channels">
            <a href="mailto:pedroocferreira@gmail.com" class="contact__channel">
              <i class="fas fa-envelope"></i>
              pedroocferreira@gmail.com
            </a>
            <a href="tel:+5551981281898" class="contact__channel">
              <i class="fas fa-phone"></i>
              +55 51 98128-1898
            </a>
            <a href="https://wa.me/5551981281898" class="contact__channel contact__whatsapp" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i>
              WhatsApp Direto
            </a>
          </div>
          <div class="contact__social">
            <a href="https://github.com/pedroocferreira" target="_blank" rel="noopener">
              <i class="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pedroocferreira/" target="_blank" rel="noopener">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
          </div>
          
        <form class="contact__form" @submit.prevent="submitForm" v-animate-on-scroll data-animate="fade-left" data-animate-delay="200">
          <div class="form__group">
              <label for="name">Nome</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
          <div class="form__group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
          <div class="form__group">
              <label for="message">Mensagem</label>
            <textarea id="message" v-model="form.message" rows="4" required></textarea>
            </div>
          <button type="submit" class="btn btn--primary">Enviar mensagem</button>
          </form>
      </div>
    </section>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/5551981281898" class="whatsapp-float" target="_blank" title="Fale comigo no WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    async submitForm() {
      try {
        // Validação básica
        if (!this.form.name || !this.form.email || !this.form.message) {
          alert('Por favor, preencha todos os campos.')
          return
        }

        // Mostrar loading
        const submitBtn = document.querySelector('.contact__form button[type="submit"]')
        const originalText = submitBtn.textContent
        submitBtn.textContent = 'Enviando...'
        submitBtn.disabled = true

        // Enviar dados para o backend
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        })

        const result = await response.json()

        if (result.success) {
          alert('✅ ' + result.message)
          this.form = { name: '', email: '', message: '' }
        } else {
          alert('❌ ' + result.message)
        }

      } catch (error) {
        console.error('Erro ao enviar formulário:', error)
        alert('❌ Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.')
      } finally {
        // Restaurar botão
        const submitBtn = document.querySelector('.contact__form button[type="submit"]')
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    }
  }
}
</script>