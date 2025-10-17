# 🚀 Guia Rápido - Configurar Email em 5 Minutos

## ✅ Passo 1: Editar arquivo .env

O arquivo `.env` já foi criado na raiz do projeto. Abra ele e edite:

```bash
# Antes:
EMAIL_USER=pedroocferreira@gmail.com
EMAIL_PASS=sua_senha_de_app_aqui

# Depois (com seus dados):
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  # Cole a senha de app aqui
```

## ✅ Passo 2: Obter Senha de App do Gmail

### Via Navegador:

1. **Acesse**: https://myaccount.google.com/
2. **Clique** em "Segurança" (menu lateral esquerdo)
3. **Ative** "Verificação em duas etapas" (se ainda não estiver)
4. **Procure** por "Senhas de app" (dentro de Segurança)
5. **Selecione**:
   - App: Email
   - Dispositivo: Outro (digite "Portfolio")
6. **Clique** em "Gerar"
7. **Copie** a senha de 16 caracteres
8. **Cole** no arquivo `.env` (sem espaços)

### ⚡ Link Direto:

Já tem 2FA ativado? Acesse direto:
👉 https://myaccount.google.com/apppasswords

## ✅ Passo 3: Testar

Execute no terminal:

```bash
npm run server
```

Acesse `http://localhost:3001` e teste o formulário!

---

## 🎯 Exemplo Visual

### Antes (.env)
```
EMAIL_USER=pedroocferreira@gmail.com
EMAIL_PASS=sua_senha_de_app_aqui
```

### Depois (.env)
```
EMAIL_USER=pedroocferreira@gmail.com
EMAIL_PASS=xyza bcde fghi jklm  ← Senha gerada pelo Google
```

---

## ⚠️ Não consegue acessar Senhas de App?

**Possíveis causas:**

1. **Verificação em duas etapas não está ativa**
   - Ative primeiro: https://myaccount.google.com/signinoptions/two-step-verification

2. **Conta do Google Workspace (empresa)**
   - Peça ao administrador para liberar "Apps menos seguros"

3. **Alternativa temporária** (menos seguro):
   - Ative "Apps menos seguros": https://myaccount.google.com/lesssecureapps
   - Use sua senha normal do Gmail

---

## 📋 Checklist Rápido

- [ ] Arquivo `.env` criado na raiz do projeto
- [ ] EMAIL_USER configurado com seu email
- [ ] Verificação em duas etapas ativada no Gmail
- [ ] Senha de app gerada
- [ ] EMAIL_PASS configurado no `.env`
- [ ] `npm install` executado
- [ ] `npm run server` funcionando
- [ ] Formulário testado e email recebido

---

## 🆘 Problemas?

### Erro: "Invalid login"
```bash
# Verifique se a senha está correta:
cat .env  # Deve mostrar sua senha de app
```

### Erro: "dotenv not found"
```bash
npm install dotenv
```

### Email não chega
- Verifique sua caixa de **spam**
- Confirme que o email está correto em `server.js` (linha 40)
- Veja os logs do console para mais detalhes

---

## 💡 Dica Pro

Para testar sem configurar email real:

```javascript
// No server.js, comente o envio e apenas logue:
console.log('📧 Email que seria enviado:', mailOptions);
res.json({ success: true, message: 'Teste OK!' });
```

---

**Pronto!** Agora você tem um sistema de contato profissional funcionando! 🎉

Para mais detalhes, consulte: `CONFIGURACAO_EMAIL.md`

