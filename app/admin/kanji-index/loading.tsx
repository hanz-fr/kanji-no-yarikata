import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <CgSpinner size={50} className="animate-spin duration-700" />
    </div>
  );
}
