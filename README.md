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
-   :x: ネストが多く見辛い
