# 1. Usar o Node.js versão 20 (leve)
FROM node:20-alpine

# 2. Criar a pasta do app dentro do container
WORKDIR /app

# 3. Copia os arquivos de configuração de pacotes
COPY package*.json ./

# 4. Instala as bibliotecas que você vai usar
RUN npm install --omit=dev

# 5. Copia todo o seu código da pasta atual para dentro do container
COPY . .

# 6. Avisa que o SSR vai rodar na porta 3001
EXPOSE 3001

# 7. Comando para ligar o servidor SSR
CMD ["node", "server-ssr.js"]