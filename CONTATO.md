# Configuração do Sistema de Contato

## 📧 Configuração de Email

Para receber emails do formulário de contato, você precisa configurar suas credenciais de email:

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
```

### 2. Configurar Senha de App (Gmail)

1. Acesse sua conta Google
2. Vá em **Segurança** → **Verificação em duas etapas**
3. Ative a verificação em duas etapas
4. Vá em **Senhas de app**
5. Gere uma nova senha de app para "Mail"
6. Use essa senha no arquivo `.env`

### 3. Executar o Sistema

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Executar em produção
npm run start
```

## 📱 Integração WhatsApp

O WhatsApp já está integrado com:
- **Botão flutuante** no canto da tela
- **Link direto** na seção de contato
- **Número**: +55 51 98128-1898

## 🚀 Como Funciona

1. **Formulário**: Usuário preenche nome, email e mensagem
2. **Validação**: Frontend valida os campos obrigatórios
3. **Envio**: Dados são enviados para `/api/contact`
4. **Email**: Backend envia email formatado para `pedroocferreira@gmail.com`
5. **Confirmação**: Usuário recebe feedback de sucesso/erro

## 📋 Estrutura do Email Recebido

- **Assunto**: "Nova mensagem de contato - [Nome]"
- **Conteúdo**: Nome, email, data e mensagem formatados
- **Design**: Email responsivo e profissional

## 🔧 Personalização

Para alterar o email de destino, edite em `server.js`:
```javascript
to: 'seu_email@exemplo.com', // Linha 25
```

Para alterar o número do WhatsApp, edite em `Home.vue`:
```html
href="https://wa.me/SEU_NUMERO" // Substitua SEU_NUMERO
```
