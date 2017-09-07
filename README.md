# Mkenハッカソン用のインフラ

## 前提

DEVレベル。用が済んだら消す

## ディレクトリ構成

```
.
├── README.md
├── docker    ... node.js,aws-sdk, clouudformation-z入りのイメージ
├── docker-compose.yaml
├── marchant-site ... WEBサイト
└── database       ... DynamoDBのテーブル
```

## 使い方

* dockr-compose前提です

```
$ AWS_PROFILE=XXX NODE_ENV=DEV docker-compose run スタック名 アクション
```

指定する環境変数

| 名前 | 内容|
|:----|:-------------|
|AWS_PROFILE|作業端末の`~/.aws/credentials`に記載されるプロファイル名|
|NODE_ENV   |ステージレベルを指定|

指定する引数

| 名前 | 内容|
|:----|:-------------|
|スタック名|ディレクトリ名と同じ|
|アクション|`validate`,`deploy`,`balus!`|

