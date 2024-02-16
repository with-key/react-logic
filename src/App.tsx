/**
 * View
 */

import { useUser } from "./model/repository";
import { useCounts } from "./view-model/counts/useCount";

const User = () => {
  const user = useUser();
  const { counts, increase, decrease } = useCounts();

  return (
    <div>
      <button onClick={increase}>올림</button>
      <button onClick={decrease}>내림</button>
      <div>
        {user?.isSeoul ? "서울주민" : "부산주민"}
        {user?.name}의 공의 갯수는 {counts}개 입니다.
      </div>
    </div>
  );
};

export default User;
