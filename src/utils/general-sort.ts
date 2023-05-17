import { TSort } from "../types";
import get from "lodash.get";

export default ((items: Array<any>, sort: TSort) => {
  const keypath = sort.sortKey;
  const ascending = sort.sortAsc;

  const factor = ascending ? 1 : -1;

  return [...items].sort((a, b) => {
    if (keypath) {
      const valueA = String(get(a, keypath, "") ?? "");
      const valueB = String(get(b, keypath, "") ?? "");

      return factor *
        valueA.toLowerCase().localeCompare(valueB.toLowerCase());
    } else {
      return 0;
    }
  });
});
