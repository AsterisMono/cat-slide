import { useEffect, useState } from "react";

export const useSlideshow = (query: string, interval: number) => {
  const [url, setUrl] = useState(query);

  useEffect(() => {
    const timerId = setInterval(() => {
      fetch(query)
        .then((res) => {
          if (document.startViewTransition) {
            document.startViewTransition(() => {
              setUrl(res.url);
            });
          } else {
            setUrl(res.url);
          }
        })
        .catch((err) => console.error(`${err}`));
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [query, interval]);

  return [url, setUrl] as const;
};
