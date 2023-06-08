import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";
// const { persistAtom } = recoilPersist();

export const countAtoms = atom<number>({
  key: "countAtomsKey",
  default: 0,
  // effects_UNSTABLE: [persistAtom], //この1行を加えるだけで、ローカルストレージに保存されるようになる
});
