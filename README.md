## 起動
`yarn install`  
`yarn dev`

## 内容
buttonコンポーネントでグローバルな`count`stateを+1する。  
counterコンポーネントでは表示をしているだけ。

## 一意なkeyのatomsを作ることでグローバルに管理できる。
使い方  
useStateとほぼ同じ。
```
const [count, setCount] = useRecoilState<number>(countAtoms);
```

## localStorageにstateを保持したい場合
`countAtoms.ts`に` effects_UNSTABLE: [persistAtom]`の1行を加えるだけでOK。

---
https://github.com/Akihide-Tsue/my-app/assets/56462284/1b44e356-dce7-48ce-a1b3-996b095ca2dc

`effects_UNSTABLE: [persistAtom],`を加えた場合
![image](https://github.com/Akihide-Tsue/my-app/assets/56462284/8ed72720-7963-4802-a1f0-31a6697996c4)
