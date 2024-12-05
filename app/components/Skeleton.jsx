export default function Skeleton() {
  return (
    <div className="border p-6 m-4 rounded-lg shadow-zinc-300 shadow animate-pulse max-sm:p-3">
      <div className="h-6 bg-gray-300 w-[90%] mb-2 max-sm:mb-4"></div>
      <div className="h-4 bg-gray-300 w-2/3 mb-2 max-sm:mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/2 mb-2 max-sm:mb-4"></div>
    </div>
  );
}
