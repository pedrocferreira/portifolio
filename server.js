require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Verificar se as credenciais de email estão configuradas
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('⚠️  AVISO: Credenciais de email não configuradas!');
  console.warn('📧 Configure EMAIL_USER e EMAIL_PASS no arquivo .env');
  console.warn('📖 Consulte CONFIGURACAO_EMAIL.md para instruções');
}

// Configuração do transporter de email
const transporter = nodemailer.createTransporter({
  service: 'gmail', // ou outro provedor
  auth: {
    user: process.env.EMAIL_USER || 'admin@admin.com', // Seu email
    pass: process.env.EMAIL_PASS || 'admin1234' // Sua senha de app
  }
});

// Rota para enviar email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validação básica
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos os campos são obrigatórios' 
      });
    }

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'admin@admin.com',
      to: 'pedroocferreira@gmail.com', // Seu email de destino
      subject: `Nova mensagem de contato - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova mensagem do portfólio
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Detalhes do contato:</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 14px; color: #6c757d;">
            <p style="margin: 0;">Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
          </div>
        </div>
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Responderei em até 24 horas.' 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor. Tente novamente mais tarde.' 
    });
  }
});

// Servir a aplicação Vue.js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📧 Sistema de contato ativo`);
  console.log(`📱 WhatsApp: https://wa.me/5551981281898`);
});
