import { countAtoms } from "@/recoil/atoms/countAtoms";
import { FC } from "react";

import { useRecoilValue } from "recoil";

const Counter: FC = ({}) => {
  const count = useRecoilValue(countAtoms);

  return <>{count}</>;
};

export default Counter;
