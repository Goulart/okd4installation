FROM quay.io/centos7/nodejs-12-centos7:1
RUN npm install restify sequelize mysql2 express dotenv
COPY run.sh build ${HOME}/
USER 0
RUN chown -R 1001 $HOME/ && chmod 755 $HOME/run.sh
USER 1001
EXPOSE 3000
CMD ["./run.sh"]
