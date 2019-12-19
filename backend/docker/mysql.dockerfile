FROM mysql:5

COPY mysql/my.cnf /etc/mysql/conf.d/my.cnf

CMD ["mysqld"]
