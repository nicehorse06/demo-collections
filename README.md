[demo page](https://nicehorse06.github.io/demo-collections/dist/index.html)

此專案為 react demo + 專案收集頁面

## todo

1. 加上更多CSS，選定一下CSS in React方案
2. 規劃網站內容配置
3. 導入 Redux 
4. 加入 React 應用的頁面

* 整理 [game-score-recorder](https://github.com/nicehorse06/game-score-recorder)
* [redux_count_button_test](https://github.com/nicehorse06/redux_count_button_test)
* [react_test](https://github.com/nicehorse06/react_test)

## 使用方法：

1. git clone 這個專案

2. 下 npm install 指令，載入所有npm包

3. npm run dev 指令，在記憶體裡產生bundle檔案，並執行測試server在 127.0.0.1:8080

4. npm run build 指令，實際產生bundle檔案在 dist/ 資料夾裡面

## webpack設定

* entry進入點為預設的值 ./src/index.js

* output輸出為預設值 ./dist/main.js

* 詳細參閱文件[url](https://webpack.js.org/concepts/)

## 特殊的 tag

* [此專案最小React設定的tag](https://github.com/nicehorse06/demo-collections/tree/v0.0.1)

## 參考網站
* [30天React從入門到入坑](https://ithelp.ithome.com.tw/users/20107317/ironman/1261)

* [w3shcool 排版樣式參考](https://www.w3schools.com/css/css_templates.asp)

* [The best “styling in React” tutorial you’ve ever seen](https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945)

* [React 初学者教程4: 在 React 中设置样式](https://www.w3cplus.com/react/styling-in-react.html)

* [React篇: TodoList程式 + 樣式(Style)](https://github.com/eyesofkids/ironman2017/tree/master/day19_todolist_style/)

* [[React學習筆記] React Component的inline style](https://andy6804tw.github.io/2018/02/02/styling-react-components/)

* [手把手教你用React實現一個簡單的個人部落格](https://codertw.com/%E8%BB%9F%E9%AB%94%E9%96%8B%E7%99%BC%E5%B7%A5%E5%85%B7/26994/)

* [Redux 入门教程（一）：基本用法](https://medium.com/@nicehorse06/react-redux-component%E7%9A%84%E5%88%9D%E5%A7%8B%E5%89%B5%E5%BB%BA%E6%B5%81%E7%A8%8B-1796e0e97e42)

## React Redux component的初始創建流程

* 實作代碼：[簡單的 Redux 加法器](https://codesandbox.io/s/z2kx5y96r4)

在此<Counter /> 用來計算加法用的函式，裡面的變數依賴了 Redux 中的 value 去計算數量，還繼承了一個函式onIncreaseClick 可以 dispatch(action) 去+1 redux中的 value值

### 1.建立初始的<Counter /> component，僅需寫一些hello world確定有顯示在畫面上，完整的功能需依賴了兩個prop，value和onIncreaseClick
```
class Counter extends Component {
  render() {
    return (
      <div> hello world </div>
    )
  }
}
ReactDOM.render(
   <Counter /> ,
   document.getElementById('root')
)
```
### 2.依據state的資料結構定義 Reducer 函式，reducer 不依賴其他變數，定義的時候以預想 Action 的數量
```
function counter(state = { count: 0 }, action) {
 const count = state.count
 switch (action.type) {
  case 'increase':
   return { count: count + 1 }
  default:
  return state
 }
}
```

### 3.合併所有的Reducer，使用 createStore 函式把 reducer 帶入去定義 store
`const store = createStore(counter)`

### 4.依據state的可能 type 數量去定義不同type 的 action
`const increaseAction = { type: 'increase' }`
### 5.定義 mapStateToProps 和 mapDispatchToProps 兩個無依賴函式，這兩個函式是讓我們跟reducer 中的state能做交流唯一途徑，mapStateToProps 讓我們取出 reducer 的變數 value，mapDispatchToProps 能讓我們使用dispatch(action) 去改變 reducer 的 value 值
```
function mapStateToProps(state) {
 return {
  value: state.count
 }
}
function mapDispatchToProps(dispatch) {
 return {
  onIncreaseClick: () => dispatch(increaseAction)
 }
}
```
### 6.使用 connect 函式把 mapStateToProps 、mapDispatchToProps、Counter得到Root component <App />
```
const App = connect(
 mapStateToProps,
 mapDispatchToProps
)(Counter)
```
### 7.使用 Provider component class 並帶入store做參數、root component <App />子層，然後放入 ReactDOM.render()做渲染，自此我們的component已經可以使用 this.props 取用到reducer的狀態
8. 在 <Counter /> 帶入 value, onIncreaseClick 來實現邏輯
```
class Counter extends Component {
 render() {
  const { value, onIncreaseClick } = this.props
  return (
   <div>
    <span>{value}</span>
    <button onClick={onIncreaseClick}>Increase</button>
   </div>
   )
 }
}
```
