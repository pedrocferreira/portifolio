# 📧 Configuração de Email - Guia Completo

## Passo 1: Criar Arquivo .env

Na raiz do projeto, crie um arquivo chamado `.env`:

```bash
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
PORT=3001
```

## Passo 2: Configurar Gmail (Recomendado)

### Opção A: Usando Senha de App (Mais Seguro)

1. **Acesse sua Conta Google**
   - Vá para: https://myaccount.google.com/

2. **Ative a Verificação em Duas Etapas**
   - Clique em **Segurança** (menu lateral)
   - Procure por **Verificação em duas etapas**
   - Clique em **Ativar** e siga os passos

3. **Crie uma Senha de App**
   - Volte em **Segurança**
   - Procure por **Senhas de app** (aparece após ativar 2FA)
   - Clique em **Senhas de app**
   - Selecione:
     - **App**: Email
     - **Dispositivo**: Outro (digite "Portfolio")
   - Clique em **Gerar**
   - **Copie a senha gerada** (16 caracteres sem espaços)

4. **Cole no arquivo .env**
   ```bash
   EMAIL_USER=pedroocferreira@gmail.com
   EMAIL_PASS=abcd efgh ijkl mnop  # Cole a senha gerada aqui (sem espaços)
   ```

### Opção B: Permitir Apps Menos Seguros (Não Recomendado)

Se não quiser usar senha de app:

1. Acesse: https://myaccount.google.com/lesssecureapps
2. Ative "Permitir apps menos seguros"
3. Use sua senha normal do Gmail no `.env`

⚠️ **Atenção**: Esta opção é menos segura e o Google pode bloquear.

## Passo 3: Atualizar server.js (Se Necessário)

O `server.js` já está configurado para usar as variáveis do `.env`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Passo 4: Instalar Dependência dotenv

Execute no terminal:

```bash
npm install dotenv
```

## Passo 5: Testar o Sistema

```bash
# Executar o servidor
npm run server

# Ou fazer build e executar em produção
npm run start
```

Acesse `http://localhost:3001` e teste o formulário!

## 🔧 Usando Outro Provedor de Email

### Outlook/Hotmail

```javascript
service: 'hotmail',
auth: {
  user: 'seu_email@outlook.com',
  pass: 'sua_senha'
}
```

### Yahoo

```javascript
service: 'yahoo',
auth: {
  user: 'seu_email@yahoo.com',
  pass: 'sua_senha'
}
```

### SMTP Customizado (Ex: cPanel, AWS SES)

```javascript
host: 'smtp.seudominio.com',
port: 587,
secure: false,
auth: {
  user: 'contato@seudominio.com',
  pass: 'sua_senha'
}
```

## 📋 Checklist de Configuração

- [ ] Criar arquivo `.env` na raiz do projeto
- [ ] Configurar EMAIL_USER com seu email
- [ ] Configurar EMAIL_PASS com senha de app
- [ ] Instalar dependências: `npm install`
- [ ] Instalar dotenv: `npm install dotenv`
- [ ] Executar servidor: `npm run server`
- [ ] Testar formulário de contato
- [ ] Verificar se recebeu o email

## ❌ Problemas Comuns

### "Error: Invalid login"
- ✅ Verifique se ativou a verificação em duas etapas
- ✅ Gere uma nova senha de app
- ✅ Cole a senha sem espaços no `.env`

### "Error: self signed certificate"
```javascript
// Adicione no transporter:
tls: {
  rejectUnauthorized: false
}
```

### Email não chega
- ✅ Verifique a caixa de spam
- ✅ Confirme que o email de destino está correto em `server.js` (linha 25)
- ✅ Verifique os logs do console

## 📱 Exemplo de .env Completo

```bash
# Email
EMAIL_USER=pedroocferreira@gmail.com
EMAIL_PASS=abcdefghijklmnop

# Servidor
PORT=3001

# Ambiente
NODE_ENV=production
```

## 🔒 Segurança

⚠️ **IMPORTANTE**: Adicione o `.env` no `.gitignore`:

```
# .gitignore
.env
node_modules/
dist/
```

Nunca compartilhe seu arquivo `.env` ou faça commit dele no Git!

