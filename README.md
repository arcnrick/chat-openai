# chat-openai

Recriando o ChatGPT

Feito com base em vídeo da DIO, pelo tutor Felipão da DIO ( show )
https://www.youtube.com/watch?v=V83WW8puWks

alguns comandos antes de iniciar:

certificar versão do node (se necessário, precisa instalar):
node -v ->

executar o serviço do backend (pós clone):
cd server
npm install
npm start

começar o projeto do zero (backend):
cd server
npm init -Y

algumas dependências:
npm install nodemon -D -> para recompilar em tempo real (-D para deixar dependência somente em ambiente de dev)
npm install cors -> controla quem pode ou não acessar a aplicação
npm install dotenv -> para criar configurações desacopladas do servidor (como se fosse nosso molho de chaves)
npm install express -> para criar aplicações REST com Node de forma mais intuitiva
npm install openai -> biblioteca oficial da OpenAI

se precisar ver a doc de alguma biblioteca, como a 'dotenv', por exemplo: npmjs.com/package/dotenv

também é bom ver sobre a OpenAI antes de começar:
https://platform.openai.com/overview

navegando pela documentação do Text Completion (a que foi usada aqui):
https://platform.openai.com/docs/guides/completion/prompt-design

navegando e vendo sobre planos de pagamento no playground:
https://platform.openai.com/playground

criação da chave OPENAI_API_KEY:
https://platform.openai.com/account/api-keys

para testar, utilizei o Postman, mas fique a vontade para usar o que quiser