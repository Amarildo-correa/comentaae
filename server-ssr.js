const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1>🚀 Comentaaê SSR Online!</h1>
            <p>O módulo de SEO está pronto para receber os bots.</p>
            <hr style="width: 200px; border: 1px solid #eee;">
            <p><strong>Status:</strong> Rodando dentro do Docker na Vultr</p>
            <p><strong>Ambiente:</strong> ${process.env.NODE_ENV || 'Desenvolvimento'}</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ [SSR] Servidor Comentaaê iniciado na porta ${PORT}`);
});