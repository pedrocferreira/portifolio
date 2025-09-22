<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container">
        <img src="/avatar.jpg" alt="Pedro Ferreira" class="hero-image" />
        <h1>Olá, sou Pedro Ferreira</h1>
        <p>Desenvolvedor Full Stack com experiência em Python, PHP e Inteligência Artificial. Crio soluções escaláveis, chatbots inteligentes e crawlers de dados.</p>
        <div>
          <a href="/cv-pedro-ferreira.pdf" class="btn" download>Download CV</a>
          <a href="#contact" class="btn btn-secondary" @click="scrollTo('contact')">Entre em Contato</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">Sobre Mim</h2>
        <div class="about-content">
          <div class="about-image">
            <video 
              src="/pedroTrabalhando.mp4" 
              alt="Pedro trabalhando" 
              autoplay 
              muted 
              loop 
              style="width: 100%; border-radius: 15px; max-height: 300px; object-fit: cover;"
            />
          </div>
          <div class="about-text">
            <h3>Minha Trajetória</h3>
            <p>Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação, com expertise em desenvolvimento web, automação e soluções de Inteligência Artificial. Minha jornada começou com PHP e Python, evoluindo para incluir tecnologias modernas de frontend e infraestrutura.</p>
            <p>Tenho facilidade para aprender novas tecnologias rapidamente e me adaptar a diferentes projetos e desafios. Sempre busco criar soluções eficientes e escaláveis que agreguem valor real aos negócios, desde desenvolvimento web até automação de processos e marketing digital.</p>
            <p>Minha experiência inclui desenvolvimento de sistemas web robustos, automação com Selenium e Puppeteer, integração com APIs de IA (OpenAI, LangChain), gestão de infraestrutura com Docker e VPS, além de campanhas de marketing digital e SEO.</p>
            
            <div class="skills">
              <span class="skill-tag">Desenvolvimento Full Stack</span>
              <span class="skill-tag">Automação & Web Scraping</span>
              <span class="skill-tag">IA & Machine Learning</span>
              <span class="skill-tag">DevOps & Infraestrutura</span>
              <span class="skill-tag">Marketing Digital & SEO</span>
              <span class="skill-tag">Integração de APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section id="technologies" class="section">
      <div class="container">
        <h2 class="section-title">Tecnologias</h2>
        <div class="tech-grid">
          <div class="tech-category">
            <h3>Backend</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fab fa-php tech-icon"></i>
                <span class="tech-name">PHP</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-laravel tech-icon"></i>
                <span class="tech-name">Laravel</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-code tech-icon"></i>
                <span class="tech-name">CodeIgniter</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-python tech-icon"></i>
                <span class="tech-name">Python</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-python tech-icon"></i>
                <span class="tech-name">Django</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-python tech-icon"></i>
                <span class="tech-name">Flask</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-node-js tech-icon"></i>
                <span class="tech-name">Node.js</span>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>Frontend</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fab fa-js-square tech-icon"></i>
                <span class="tech-name">JavaScript</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-angular tech-icon"></i>
                <span class="tech-name">Angular</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-vuejs tech-icon"></i>
                <span class="tech-name">Vue.js</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-react tech-icon"></i>
                <span class="tech-name">React</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-bootstrap tech-icon"></i>
                <span class="tech-name">Bootstrap</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-css3-alt tech-icon"></i>
                <span class="tech-name">Tailwind CSS</span>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>Banco de Dados</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fas fa-database tech-icon"></i>
                <span class="tech-name">MySQL</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-database tech-icon"></i>
                <span class="tech-name">PostgreSQL</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-leaf tech-icon"></i>
                <span class="tech-name">MongoDB</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-memory tech-icon"></i>
                <span class="tech-name">Redis</span>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>IA & Automação</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fas fa-robot tech-icon"></i>
                <span class="tech-name">OpenAI API</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-link tech-icon"></i>
                <span class="tech-name">LangChain</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-brain tech-icon"></i>
                <span class="tech-name">NLP</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-cog tech-icon"></i>
                <span class="tech-name">Selenium</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-cog tech-icon"></i>
                <span class="tech-name">Puppeteer</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-project-diagram tech-icon"></i>
                <span class="tech-name">N8N</span>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>DevOps & Infraestrutura</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fas fa-server tech-icon"></i>
                <span class="tech-name">VPS</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-docker tech-icon"></i>
                <span class="tech-name">Docker</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-cube tech-icon"></i>
                <span class="tech-name">Portainer.io</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-server tech-icon"></i>
                <span class="tech-name">Nginx</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-server tech-icon"></i>
                <span class="tech-name">Apache</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-aws tech-icon"></i>
                <span class="tech-name">AWS</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-git-alt tech-icon"></i>
                <span class="tech-name">Git/GitHub</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-sync-alt tech-icon"></i>
                <span class="tech-name">CI/CD</span>
              </div>
            </div>
          </div>
          
          <div class="tech-category">
            <h3>Marketing & SEO</h3>
            <div class="tech-icons">
              <div class="tech-item">
                <i class="fas fa-search tech-icon"></i>
                <span class="tech-name">SEO</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-google tech-icon"></i>
                <span class="tech-name">Google Ads</span>
              </div>
              <div class="tech-item">
                <i class="fab fa-facebook tech-icon"></i>
                <span class="tech-name">Facebook Ads</span>
              </div>
              <div class="tech-item">
                <i class="fas fa-chart-bar tech-icon"></i>
                <span class="tech-name">Relatórios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projetos</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <i class="fas fa-spider"></i>
            </div>
            <div class="project-content">
              <h3>ESG Data Crawler</h3>
              <p>Crawlers desenvolvidos em Python para coleta e análise automatizada de relatórios ESG de empresas. Sistema capaz de extrair dados de sustentabilidade, processar informações e gerar insights valiosos para análise de investimentos responsáveis.</p>
              <div class="project-links">
                <a href="https://github.com/pedro-ferreira/esg-crawler" class="btn" target="_blank">Ver no GitHub</a>
                <a href="#" class="btn btn-secondary">Saiba mais</a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <i class="fas fa-robot"></i>
            </div>
            <div class="project-content">
              <h3>Chatbot Inteligente</h3>
              <p>Chatbot avançado desenvolvido com LLM e LangChain, capaz de processar PDFs e imagens. Sistema de RAG (Retrieval-Augmented Generation) que permite conversas contextuais baseadas em documentos específicos, ideal para suporte ao cliente e consultas especializadas.</p>
              <div class="project-links">
                <a href="https://github.com/pedro-ferreira/chatbot-llm" class="btn" target="_blank">Ver no GitHub</a>
                <a href="#" class="btn btn-secondary">Saiba mais</a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <i class="fas fa-globe"></i>
            </div>
            <div class="project-content">
              <h3>Sistemas Web & Integrações</h3>
              <p>Desenvolvimento de aplicações web robustas em PHP e Python com integrações RESTful. Inclui sistemas de gestão, APIs personalizadas, integração com serviços externos e dashboards interativos para visualização de dados em tempo real.</p>
              <div class="project-links">
                <a href="https://github.com/pedro-ferreira/web-systems" class="btn" target="_blank">Ver no GitHub</a>
                <a href="#" class="btn btn-secondary">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contato</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Vamos conversar!</h3>
            <p>Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou precisa de um desenvolvedor para seu projeto, entre em contato comigo!</p>
            <p>Respondo rapidamente e adoro discutir sobre tecnologia, IA e soluções inovadoras.</p>
            
            <div class="social-links">
              <a href="https://github.com/pedro-ferreira" class="social-link" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/pedro-ferreira-dev" class="social-link" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:pedro@exemplo.com" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nome</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
              <label for="message">Mensagem</label>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
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
    submitForm() {
      // Aqui você pode implementar o envio do formulário
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>