# Recriando o ChatGPT

Feito com base em vídeo da DIO, pelo tutor Felipão da DIO 😆
https://www.youtube.com/watch?v=V83WW8puWks

Alguns comandos antes de iniciar:

Certificar versão do node (se necessário, precisa instalar):  
**node -v**

Executar o serviço do backend (pós clone):  
**cd server**  
**npm install**  
**npm start**

Começar o projeto do zero (backend):  
**cd server**  
**npm init -Y**

Algumas dependências:

Para recompilar em tempo real (-D para deixar dependência somente em ambiente de dev)  
**npm install nodemon -D**

Controla quem pode ou não acessar a aplicação  
**npm install cors**

Para criar configurações desacopladas do servidor (como se fosse nosso molho de chaves)  
**npm install dotenv**

Para criar aplicações REST com Node de forma mais intuitiva  
**npm install express**

Biblioteca oficial da OpenAI  
**npm install openai**

Se precisar ver a doc de alguma biblioteca, como a 'dotenv', por exemplo, acesse a doc: https://npmjs.com/package/dotenv

Também é bom ver sobre a OpenAI antes de começar:  
https://platform.openai.com/overview

Documentação do Text Completion (a que foi usada aqui):  
https://platform.openai.com/docs/guides/completion/prompt-design

Criação da sua chave **OPENAI_API_KEY**:  
https://platform.openai.com/account/api-keys

Para testar, utilizei o [Postman](https://www.postman.com/downloads/?utm_source=postman-home), mas fique a vontade para usar o que quiser