# はじめに
これはフロントエンドアプリケーションーバックエンドアプリケーションーDBをつないだシンプルなWebアプリケーションです。
- フロントエンド：Angular
- バックエンド：Node.js
- DB: MongoDB

# フロントエンドアプリケーション

## Angular CLIの導入
Angularのコンポーネントやサービスといったアプリの雛側を自動で生成するツールであるAngular CLIを導入します。
```
npm install -g angular/cli
```
導入出来たらアプリを生成したい場所に移動してAngularアプリを自動生成します。
```
cd [作業ディレクトリ:自分で入力します]
ng new [アプリケーション名]
```

Angularの標準サービスであるHttpサービスを導入する
1. HttpModuleをインポートする(app.module.ts)
1. コンポーネントからHttpサービスを呼び出す(base.component.ts)

# バックエンドエンドアプリケーション

## IBMCloudスターターキットからNode.jsアプリを作成
```
ibmcloud dev create
```
`ibmcloud`コマンドの利用にはIBM Cloud CLIが導入されている必要があります。インストールされていない場合は[こちら](https://cloud.ibm.com/docs/cli?topic=cli-getting-started)のステップ1:インストール・コマンドの実行からインストールしてください。

```
# mongooseを導入
npm i mongoose -S
```