import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import twilio from 'twilio';

dotenv.config();

const app = express();

// Configuração do CORS para permitir chamadas do frontend
app.use(cors({
  origin: 'http://localhost:5173', // seu front-end React com Vite
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

// Rota de envio de OTP
app.post('/send-otp', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ error: 'Número de telefone é obrigatório' });
    }

    if (!/^\+[1-9]\d{1,14}$/.test(phoneNumber)) {
      return res.status(400).json({ error: 'Formato de número inválido. Use o formato internacional (+244...)' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const message = await client.messages.create({
      body: `Seu código de verificação é: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    console.log(`OTP enviado para ${phoneNumber}: ${otp}`);
    console.log(`Twilio Message SID: ${message.sid}`);

    // Em produção, salve o OTP + phone temporariamente em DB ou cache
    res.json({ success: true, message: 'OTP enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao enviar OTP:', error);

    let errorMessage = 'Erro ao enviar código de verificação';
    if (error.code === 21211) {
      errorMessage = 'Número de telefone inválido';
    } else if (error.code === 21614) {
      errorMessage = 'Número não é um celular válido';
    }

    res.status(500).json({ 
      success: false, 
      error: errorMessage,
      twilioError: error.code || null
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
