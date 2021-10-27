FROM quay.io/centos7/nodejs-12-centos7:1
RUN npm install restify sequelize mysql2 express dotenv
COPY run.sh build ${HOME}/
EXPOSE 3000
CMD ["./run.sh"]

