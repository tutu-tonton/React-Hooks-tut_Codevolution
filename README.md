# React-Hooks-Tutorial_Codevolution

[React Hooks Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

---

## 2.useState

## 3.useState with previous state

-   State の setter 更新注意点： 古い値を利用して新しい値を算出する場合には、関数を与えるのが安全

## 4.useState with object

-   hooks の stateSetter は object を merge しない.クラス型との違い

-   => spread 演算子使うこと

## 5.useState with array

-   state の setter には、spread 演算子使うこと

## 7 useEffect after render

-   useEffect: render 後に実行される

## 8 Conditionally run effects

-   useEffect の dependency ー state が変更される -> 再レンダリング -> 余分なものまで際レンダリングされてしまう可能性あり
-   => dependency を設定する

## 9 Run effects only once

-   componentDidMount と同じように、1 度だけ実行したい

## 10 useEffect with cleanup

-   アンマウント時には、subscription, listener を解除すること

## 11 useEffect with incorrect dependency

-   dependency は変更を監視する必要があるものを記述する
-   dependency に[]宣言するときは、本当に何もなくていいのか確認

## 12 FEtching data with useEffect

-   useEffect で dataFetch

## 13 Fetching data with useEffect

-   入力欄の数値に応じた post を取得できるように

## 14 Fetching data with useEffect

-   ボタンクリックで FetchData

## 16 useContext Hook part2

-   ContextAPI を使った context
-   context3 ステップ - create / provider / consumer
-   :x: ネストが多く見辛い

## 17 useContext Hook part3

-   useContext は 3 ステップの内、consumer 部分を簡単にする

## 19 useReducer(simple state & action)

-   useReducer ミニマム構成
-   3 ステップ : イニシャライズ / reducer 定義 / リターン

## 20 useReducer(complex state & action)

-   state / action オブジェクト形式にする
-   state オブジェクトになってるので、分割代入
-   action オブジェクト形式になってるので、payload にその他情報記入できる

## 21 Multiple useReducers

-   ロジックが同じなら、reducerFunc を使い回せる

## 22 useReducer with useContext

1. useReducer 作成 - state, action
2. useContext 作成 - create, Provider
3. useContext-value に dispatch 乗せる
4. [受け手] useContext 変数化して使用

## 23 Fetching data with useReducer part1

-   :x: エラー発生中
-   データフェッチ - useState を使ったやり方

## 24 Fetching data with useReducer part2

-   :x: ~~エラー発生中~~
-   データフェッチ : useReducer 使ったやり方
