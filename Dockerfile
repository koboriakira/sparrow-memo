# 2020/01時点のLTSのnodeをもとにする
FROM node:12.14.1-alpine3.11

# 作業ディレクトリを/workにする
WORKDIR /work

# 必要なパッケージをあらかじめインストール
RUN yarn install \
  && yarn global add firebase-tools \
  && yarn global add nuxt

# 環境変数の設定
ENV HOST 0.0.0.0
ENV PORT 80

# 80番ポートを公開
EXPOSE 80
