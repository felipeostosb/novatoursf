FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html
COPY . .
COPY html/*.html ./
COPY html/destinos ./destinos
COPY html/blog ./blog
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
