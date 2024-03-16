import Link from "next/link";
import Button from "@/components/Button";
import { motion } from "framer-motion";

type UrlItemProps = {
  url: Url;
  urlList: Url[];
  setUrlList: React.Dispatch<React.SetStateAction<Url[]>>;
};

const UrlItem = ({ url, urlList, setUrlList }: UrlItemProps) => {
  const toogleCopied = (url: Url, value: boolean) => {
    const newUrlList = urlList.map((item) => {
      return item.short === url.short ? { ...item, copied: value } : item;
    });
    setUrlList(newUrlList);
  };

  const handlyCopy = (selectedUrl: Url) => {
    toogleCopied(selectedUrl, true);

    navigator.clipboard.writeText(selectedUrl.short);

    setTimeout(() => {
      toogleCopied(selectedUrl, false);
    }, 1000);
  };

  return (
    <motion.div
      className="flex flex-col rounded-lg bg-white md:flex-row md:items-center lg:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <p className="w-full truncate border-b p-3 text-left text-very-dark-violet md:border-none lg:px-8 lg:py-6">
        {url.long}
      </p>
      <div className="flex flex-grow flex-col items-start justify-between gap-3 p-3 md:flex-row md:items-center lg:gap-6 lg:px-6">
        <Link
          href={`${url.short}`}
          className="text-cyan transition hover:text-very-dark-violet hover:underline"
        >
          {`${url.short}`}
        </Link>
        <Button
          classname="px-[1.6rem] py-2 rounded-md w-full md:w-[6.5rem] flex justify-center text-lg"
          bgColor={url.copied ? "bg-dark-violet" : ""}
          onClick={() => handlyCopy(url)}
        >
          {url.copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </motion.div>
  );
};
export default UrlItem;
