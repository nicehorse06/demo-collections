[demo page](https://nicehorse06.github.io/demo-collections/dist/index.html)

此專案為 react demo + 專案收集頁面

## todo

1. 加上更多CSS
2. 規劃網站內容配置
3. 導入 Redux 
4. 加入 React 應用的頁面

[此專案最小React設定的tag](https://github.com/nicehorse06/demo-collections/tree/v0.0.1)

參考網站
* [30天React從入門到入坑](https://ithelp.ithome.com.tw/users/20107317/ironman/1261)

* 此node版本為 6.1.0

* 功能為每秒更新時間

* 運用webpack babel轉檔、引入CSS module

## 使用方法：

1. git clone 這個專案

2. 下 npm install 指令，載入所有npm包

3. npm run dev 指令，在記憶體裡產生bundle檔案，並執行測試server在 127.0.0.1:8080

4. npm run build 指令，實際產生bundle檔案在 dist/ 資料夾裡面

## webpack設定

* entry進入點為預設的值 ./src/index.js

* output輸出為預設值 ./dist/main.js

* 詳細參閱文件[url](https://webpack.js.org/concepts/)
