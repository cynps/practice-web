# vuejs tutorial

## commands
---
init
```
$ npm create vue@latest
  project name
    * vue-test
  Yes
    * Typescript
    * Vue Router
    * Pinia
    * Vitest
    * ESLint
    * Prettier
  No
    * JSX
    * E2E testing solution
$ cd vue-test
$ npm install
$ npm run lint
$ npm run dev
```

remove files
```
$ rm -R ./src/assets/*
$ rm -R ./src/components/__tests__/*
$ rm -R ./src/components/icons/*
$ rm ./src/components/HelloWorld.vue
$ rm ./src/components/WelcomItem.vue
$ rm ./src/components/TheWelcome.vue
```

modified files
```
$ vi ./src/views/HomeView.vue
$ vi ./src/App.vue
$ vi ./README.md
```


## note / memo
---
* windows 11 の場合(?)、Git Bash で npm init vue@latest した場合に表示される「プロジェクト生成ウィザード」で矢印キーがうまく反応しない？事象
  * 画面上では同期的にカーソルが移動しないが、Enter 押下時に再描画されているので動作してはいる
  * PowerShell を使うとこの事象は発生しない。
* Pinia
  * Global state を管理するための状態管理ツール
* VSCode で Vue SFC を利用する場合、TypeScript Vue Plugin アドインを導入する
* npm warn 出てる@2023-02-03
  * @vue/compiler-sfc が magic-string@0.25.9 指定してるため。
  * magic-string@0.27.x では sourcemap-codec を指定していない。

## cf
---
* vuejs introduction  
  https://ja.vuejs.org/guide/introduction.html
* vuejs tutorial  
  https://ja.vuejs.org/tutorial/
* Composition API faq  
  https://ja.vuejs.org/guide/extras/composition-api-faq.html
* vue-jest  
  https://reffect.co.jp/vue/vue-jest-test
* vue-router  
  https://router.vuejs.org/installation.html
* pinia  
  https://www.webdesignleaves.com/pr/plugins/vue-basic-05.html
* TypeScript で Vue を使用する  
  https://ja.vuejs.org/guide/typescript/overview.html
* tsconfig.json  
  https://zenn.dev/sa2knight/articles/vue-3-ts-config
