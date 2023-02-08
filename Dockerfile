FROM node:18 as node
WORKDIR /GerenciadorEmpresa
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.22
COPY --from=node /GerenciadorEmpresa/dist/gerenciador-empresa /usr/share/nginx/html

EXPOSE 80
