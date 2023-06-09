import { countAtoms } from "@/recoil/atoms/countAtoms";
import { FC } from "react";

import { useRecoilState } from "recoil";

const Button: FC = ({}) => {
  const [count, setCount] = useRecoilState(countAtoms);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      +1する
    </button>
  );
};

export default Button;
