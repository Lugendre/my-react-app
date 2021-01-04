FROM node:lts-buster

RUN apt-get update \
  && apt-get install -y --no-install-recommends --no-install-suggests \
  sudo \
  curl \
  git \
  gnupg2 \
  git-lfs \
  zsh \
  vim \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /home/node