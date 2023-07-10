import { useMemo, useState } from "react";

const usePagination = (volume = 10, data: any[]) => {
  /** All pages in total. */
  const totalPages = useMemo(() => Math.floor(data.length / volume), [volume, data.length]);
  const [page, setPage] = useState(1);
  /** Data representing one single page. */
  const slicedData = useMemo(
    () => data.slice((page - 1) * volume, (page - 1) * volume + volume),
    [volume, page, data],
  );

  return { data: slicedData, page, totalPages, setPage };
};

export default usePagination;
