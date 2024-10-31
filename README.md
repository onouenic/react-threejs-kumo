# Projeto Next.js com Three.js - Renderização de uma Aranha 3D 🕷️

Este é um projeto de exemplo utilizando [Next.js](https://nextjs.org/) e [Three.js](https://threejs.org/) para criar uma renderização em 3D de uma aranha interativa. O objetivo é explorar o potencial do Next.js para aplicativos React renderizados no lado do servidor (SSR) juntamente com a poderosa biblioteca Three.js para gráficos 3D na web.

## Demonstração

Você pode ver a visualização do modelo de aranha em 3D, rotacioná-lo e aplicar interações básicas de visualização.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Three.js**: Biblioteca para renderização 3D baseada em WebGL.
- **React Three Fiber**: Uma biblioteca que facilita o uso do Three.js com React, tornando a integração mais natural para aplicativos React.
  
## Estrutura do Projeto

- **/components**: Contém componentes React, incluindo o componente principal para renderizar a aranha.
- **/pages**: Páginas do Next.js. A página inicial contém a cena Three.js onde a aranha é renderizada.
- **/public**: Recursos estáticos, como texturas e modelos 3D (no formato `.glb` ou `.obj`) da aranha.
- **/styles**: Arquivos CSS ou Styled Components para estilização da interface.

## Requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** para gerenciar dependências

## Instruções de Instalação

1. **Clone o repositório:**
   git clone git@github.com:onouenic/react-threejs-kumo.git
   cd seurepositorio

2. **Instale as dependências:**
   npm install
   ou
   yarn install

3. **Execute o projeto em desenvolvimento:**
   npm run dev
   ou
   yarn dev

4. **Abra o projeto:**
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000) para ver a renderização da aranha.

## Scripts Disponíveis

- **`npm run dev`** ou **`yarn dev`**: Inicia o ambiente de desenvolvimento.
- **`npm run build`** ou **`yarn build`**: Cria a versão de produção do projeto.
- **`npm start`** ou **`yarn start`**: Executa o projeto no modo de produção após o build.

## Créditos

- Este projeto utiliza [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) e [drei](https://github.com/pmndrs/drei) para controles adicionais.

## Licença

Esse projeto é licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo como desejar.
