import Image from "next/image";
import { formatLikes } from "../utils/util";

function Card({ ...cardModel }: CardInterface) {
  const { title, img, hot, likes, trend, ranking } = { ...cardModel };

  const trendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return (
          <span className="text-green-citrus ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        );
      case "down":
        return (
          <span className="text-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </span>
        );
      default:
        return (
          <span className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </span>
        );
    }
  };

  return (
    <article className="card bg-white rounded-[2.5rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-4 border-transparent hover:border-citrus cursor-pointer">
      <div className="relative overflow-hidden rounded mb-4">
        <div className="h-70 w-70">
          <Image
            width={600}
            height={600}
            src={img ?? "/assets/placeholder.jpg"}
            alt={title ?? "no image available"}
            className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {hot && (
          <div className="absolute top-3 right-3 bg-green-citrus backdrop-blur px-2 py-1 rounded-full font-bold text-sm shadow-sm flex items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>

            <span>Hot</span>
          </div>
        )}
      </div>
      <div className="px-3 pb-3">
        <h3 className="text-2xl font-extrabold mb-1 truncate">{title}</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-rose-500 font-bold bg-rose-50 px-3 py-1.5 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

            <span>{formatLikes(likes)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 font-semibold bg-gray-100/80 px-3 py-1.5 rounded-full">
            <span>#{ranking}</span>
            {trendIcon(trend)}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
