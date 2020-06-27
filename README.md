# React-Hooks-Tutorial_Codevolution

[React Hooks Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

---

## 2.useState

## 3.useState with previous state

- Stateのsetter更新注意点： 古い値を利用して新しい値を算出する場合には、関数を与えるのが安全

## 4.useState with object

- hooksのstateSetterはobjectをmergeしない.クラス型との違い

- => spread演算子使うこと

## 5.useState with array

- stateのsetterには、spread演算子使うこと

## 7 useEffect after render

- useEffect: render後に実行される

## 8 Conditionally run effects

- useEffectのdependency ー stateが変更される -> 再レンダリング -> 余分なものまで際レンダリングされてしまう可能性あり
- => dependencyを設定する

## 9 Run effects only once

- componentDidMountと同じように、1度だけ実行したい

