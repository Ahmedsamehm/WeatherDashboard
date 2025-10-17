import { Spinner } from "./ui/spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[30vh] ">
      <Spinner className="size-24" />
    </div>
  );
};

export default Loading;
