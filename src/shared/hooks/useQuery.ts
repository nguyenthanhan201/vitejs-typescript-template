import { useEffect, useState } from "react";

function useQuery(queryFn: () => Promise<any>) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await queryFn();
        setData(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryFn]);

  return { data, isLoading, error };
}

export default useQuery;
