/**
 * 두 개의 array의 값을 비교(재귀)
 */
export default <T extends string[], K extends string[]>(
  origin: T,
  tobeCompare: K
): boolean => {
  const compareRepeat = (index = 0): (() => {}) | boolean => {
    if (index !== origin.length - 1) {
      // console.log(index, origin[index]);
      if (tobeCompare.find((ele) => ele === origin[index])) {
        return compareRepeat(index + 1);
      }
      return false;
    }
    return true;
  };

  return compareRepeat() as boolean;
};
