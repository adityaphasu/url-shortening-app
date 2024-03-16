"use client";

import { useEffect, useState } from "react";

import InputForm from "./InputForm";
import UrlItem from "./UrlItem";
import { AnimatePresence } from "framer-motion";

const UrlShortner = () => {
  const [urlList, setUrlList] = useState<Url[]>([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("urls") as string) || [];

    if (storedUrls.length > 0) {
      const newUrls = [...urlList, ...storedUrls];
      setUrlList(newUrls);
    }
  }, []);

  return (
    <div className="relative mx-auto max-w-[69.6rem] space-y-6">
      <InputForm setUrlList={setUrlList} />
      <div className="flex flex-col-reverse gap-4" aria-live="polite">
        <AnimatePresence>
          {urlList.length > 0 &&
            urlList
              .slice(-3)
              ?.map((url) => (
                <UrlItem
                  key={url.short}
                  url={url}
                  urlList={urlList}
                  setUrlList={setUrlList}
                />
              ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default UrlShortner;
