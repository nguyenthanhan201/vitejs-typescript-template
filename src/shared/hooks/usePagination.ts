import { useMemo, useState } from "react";

type PaginationProps = {
  volume?: number;
  data: any[];

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;
};

const usePagination = (props: PaginationProps) => {
  const { volume = 10, boundaries = 1, siblings = 1, data } = props;
  /** All pages in total. */
  const total = useMemo(() => Math.floor(data.length / volume), [volume, data.length]);
  const [page, setPage] = useState(5);

  const next = () => {
    if (page < total) {
      setPage((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const range = useMemo(() => {
    const _range = [];
    for (let i = 1; i <= total; i++) {
      if (
        i <= boundaries ||
        i > total - boundaries ||
        (i >= page - siblings && i <= page + siblings)
      ) {
        _range.push(i);
      } else if (i === page - siblings - 1 || i === page + siblings + 1) {
        _range.push("dots");
      }
    }
    return _range;
  }, [boundaries, page, siblings, total]);

  /** Data representing one single page. */
  const slicedData = useMemo(
    () => data.slice((page - 1) * volume, (page - 1) * volume + volume),
    [volume, page, data],
  );

  return { data: slicedData, page, total, setPage, next, previous, range };
};

export default usePagination;
