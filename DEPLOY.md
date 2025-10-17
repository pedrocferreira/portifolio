# 🚀 Guia de Deploy do Portfólio

## ✅ Correções Aplicadas

### Problema: Arquivos Estáticos Não Carregam Após Deploy

**O que foi corrigido:**
- ✅ CV não baixava após deploy
- ✅ Avatar não aparecia
- ✅ Vídeo não carregava

**Solução implementada:**
Todos os arquivos da pasta `public/` agora usam o `BASE_URL` do Vite, que automaticamente ajusta o caminho baseado no ambiente (desenvolvimento vs produção).

## 📁 Estrutura de Arquivos Públicos

```
public/
  ├── avatar.jpg              → Foto do perfil
  ├── cv-pedro-ferreira.pdf   → Currículo para download
  ├── pedroTrabalhando.mp4    → Vídeo da seção "Sobre"
  └── favicon.svg             → Ícone do site
```

## 🔧 Configuração do Vite

No arquivo `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/portifolio/' : '/',
```

Isso significa:
- **Desenvolvimento** (`npm run dev`): arquivos em `http://localhost:5173/arquivo.pdf`
- **Produção** (deploy): arquivos em `https://seusite.com/portifolio/arquivo.pdf`

## 📦 Como Fazer Deploy

### 1. Deploy no GitHub Pages

```bash
# 1. Build do projeto
npm run build

# 2. Deploy automático
npm run deploy
```

O comando `npm run deploy` faz:
- Build da aplicação
- Envia para o branch `gh-pages`
- Publica automaticamente

### 2. Deploy Manual (Outro Servidor)

```bash
# 1. Build
npm run build

# 2. O conteúdo estará em /dist
# Faça upload da pasta dist/ para seu servidor
```

**Atenção**: Se for fazer deploy em outro domínio (não GitHub Pages), **ajuste o `base`** no `vite.config.js`:

```javascript
// Para domínio próprio (ex: seusite.com)
base: '/',

// Para subpasta (ex: seusite.com/meu-portfolio)
base: '/meu-portfolio/',
```

### 3. Deploy com Backend (Email)

Se quiser que o formulário de contato funcione, você precisará:

#### Opção A: Backend em Servidor Separado

1. **Deploy do frontend** (GitHub Pages, Vercel, Netlify)
2. **Deploy do backend** (Heroku, Railway, VPS)
3. **Atualizar a URL** da API no `Home.vue`:

```javascript
// Mudar de:
const response = await fetch('/api/contact', { ... })

// Para:
const response = await fetch('https://seu-backend.herokuapp.com/api/contact', { ... })
```

#### Opção B: Deploy Completo (Frontend + Backend)

Deploy tudo junto em um servidor Node.js:

```bash
# No servidor (VPS, Heroku, Railway)
npm install
npm run build
npm run start
```

O servidor servirá tanto o frontend (pasta `dist/`) quanto a API de contato.

**Variáveis de ambiente no servidor:**
```bash
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
PORT=3001
NODE_ENV=production
```

## 🌐 Opções de Hospedagem

### Frontend Apenas (Gratuito)

| Serviço | Comando | Observações |
|---------|---------|-------------|
| **GitHub Pages** | `npm run deploy` | Já configurado |
| **Vercel** | `vercel` | Instale: `npm i -g vercel` |
| **Netlify** | Drag & drop da pasta `dist/` | Interface web |

### Frontend + Backend

| Serviço | Preço | Suporta Node.js |
|---------|-------|-----------------|
| **Railway** | Grátis (limite) | ✅ |
| **Render** | Grátis (limite) | ✅ |
| **Heroku** | $7/mês | ✅ |
| **VPS** (DigitalOcean, AWS) | $5-10/mês | ✅ |

## 🔍 Verificar se Deploy Funcionou

Após fazer deploy, teste:

1. ✅ **Avatar carrega?** - Veja se a foto aparece na hero section
2. ✅ **Vídeo carrega?** - Veja se o vídeo roda na seção "Sobre"
3. ✅ **CV baixa?** - Clique no botão "Download CV"
4. ✅ **WhatsApp funciona?** - Clique no botão flutuante
5. ✅ **Formulário envia?** - Preencha e envie (se tiver backend)

## ⚙️ Configurações Avançadas

### Mudar o Base Path

Se seu site estará em `seusite.com/portfolio`:

```javascript
// vite.config.js
base: '/portfolio/',
```

Depois faça build novamente:
```bash
npm run build
```

### Adicionar Domínio Customizado (GitHub Pages)

1. Crie arquivo `public/CNAME` com:
```
seudominio.com
```

2. No GitHub: Settings → Pages → Custom domain
3. Adicione seu domínio

### Variáveis de Ambiente no Deploy

Para serviços como Vercel/Netlify:

1. Acesse o painel do serviço
2. Vá em **Environment Variables**
3. Adicione:
   - `EMAIL_USER`
   - `EMAIL_PASS`

## 🐛 Problemas Comuns

### CV não baixa após deploy
✅ **Resolvido!** Agora usa `BASE_URL` do Vite

### Imagens quebradas
- Verifique se as imagens estão em `public/`
- Verifique se o `base` no `vite.config.js` está correto

### Formulário não envia
- Se for só frontend (GitHub Pages), formulário **não funcionará**
- Use serviço como Formspree ou EmailJS
- Ou faça deploy do backend também

### Erro 404 ao recarregar página
No servidor, configure redirect para `index.html`:

**Netlify** (`netlify.toml`):
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 📊 Monitoramento

Após deploy, monitore:
- Google Analytics (para visitas)
- Google Search Console (para SEO)
- Logs do servidor (para erros de backend)

## 🎯 Checklist de Deploy

- [ ] Atualizar conteúdo (texto, projetos, links)
- [ ] Testar localmente (`npm run dev`)
- [ ] Fazer build (`npm run build`)
- [ ] Verificar pasta `dist/`
- [ ] Configurar variáveis de ambiente (se usar backend)
- [ ] Fazer deploy (`npm run deploy`)
- [ ] Testar site em produção
- [ ] Verificar CV download
- [ ] Verificar imagens e vídeo
- [ ] Testar formulário (se aplicável)
- [ ] Testar em mobile
- [ ] Compartilhar! 🎉

---

**Dica**: Sempre teste localmente antes de fazer deploy:
```bash
npm run build
npm run preview  # Testa o build localmente
```

