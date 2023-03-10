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
    $ touch isZero.ts
        ## コードは isZero.ts 参照
    $ touch isZero.test.ts
        ## コードは isZero.test.ts 参照
    $ npx jest
    ```

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

## note
* 「サバイバルTypeScript」の「Jestでテストを書こう」ページを参考に練習  
  テキスト内では yarn を使用しているが、内容的に不要なため今回は npm のみで実行した。
* npx tsc --init 後に vscode 上で tsconfig.json がエラーになる場合、 vscode の再起動を試す。

## cf
* サバイバルTypeScript Jestでテストを書こう
    * https://typescriptbook.jp/tutorials/jest