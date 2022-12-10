FROM node:16-bullseye-slim
# 作業ディレクトリを変更
WORKDIR /app
# 依存パッケージインストール
COPY package*.json ./
RUN npm install
# アプリケーションコード全体をコピー
COPY . .
# 3000ポートを公開
EXPOSE 3000
# コンテナ実行時に組み込みサーバを起動
CMD [ "npm", "run", "dev" ]