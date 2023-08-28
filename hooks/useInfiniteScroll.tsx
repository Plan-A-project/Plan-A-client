import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = (api: any, path: any) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await api(page);
      console.log(332, response);
      setData((prevData: any) => [...prevData, ...response.data.data[path]]);
    };

    loadData();
  }, [page, api]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const handleObserver = (entities: any[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return { data, loader };
};

export default useInfiniteScroll;
