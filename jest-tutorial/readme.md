# Jest tutorial

## commands
* init
    ```
    $ npm install -D typescript
    $ npx tsc --init
    $ npm install -D jest ts-jest @types/jest
    $ npx ts-jest config:init
    $ touch check.test.ts
        ## コードは check.test.ts 参照
    $ npx jest
        ## check.test.ts の動作確認
    $ rm check.test.ts 
        ## 必要に応じて実行
        ## このリポジトリでは便宜上残している(rm してない)
    $ 
    ```

## note
* npm install で -g してないので(?)パスが通っていない。  
  そのため、tsc コマンドなど、node_module 配下の実行ファイルを直接指定している。

## package
* jest
    * Jest 本体
    * Jest は TypeScript をそのままテストできない
    * https://jestjs.io/ja/docs/getting-started
* ts-jest
    * Jest を TypeScript に対応させるためのもの
    * TypeScript のコンパイルなしに Jest 実行できる
    * https://www.npmjs.com/package/ts-jest
* @types/jest
    * Jest の API の型定義ファイル

## cf
* https://typescriptbook.jp/tutorials/jest