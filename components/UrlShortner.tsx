import Button from "./Button";

const UrlShortner = () => {
  return (
    <div className="mx-auto max-w-[69.6rem]">
      <form
        action="#"
        className="-mt-[5.2rem] flex flex-col gap-6 rounded-xl bg-dark-violet bg-shorten-mobile bg-right-top bg-no-repeat p-6 text-white lg:-mt-28 lg:flex-row lg:items-center lg:bg-shorten-desktop lg:bg-cover lg:px-[4.15rem] lg:py-[3.25rem]"
      >
        <input
          type="text"
          className="w-full rounded-xl
        px-4 py-2.5 tracking-wider placeholder:text-base lg:px-8 lg:py-[1.125rem] lg:placeholder:text-lg"
          placeholder="Shorten a link here..."
        />
        <Button classname="w-full py-2.5 rounded-xl lg:w-1/4 lg:py-[1.15rem]">
          Shorten It!
        </Button>
      </form>
      <div></div>
    </div>
  );
};
export default UrlShortner;
