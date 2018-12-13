FROM php:7.2-fpm-stretch
RUN docker-php-ext-install mysqli opcache
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN mkdir /tmp/ci_session && chmod 777 /tmp/ci_session