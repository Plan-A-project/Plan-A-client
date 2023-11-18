import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = (api: any, path: any, postId = 0) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      let response: { data: { data: { [x: string]: any } } };
      if (postId) {
        response = await api(postId, page);
      } else {
        response = await api(page);
      }
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
  }, [loader.current]);

  const handleObserver = (entities: any[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return { data, loader };
};

export default useInfiniteScroll;
