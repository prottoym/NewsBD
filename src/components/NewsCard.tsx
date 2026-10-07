
import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}


const NewsCard = ({news} : { news: News }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      <figure className="bg-gray-100">
        <Image
          src={news.imageUrl}
          alt={news.title}
          width={200}
          height={100}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="p-4">
        <p className="mb-1 text-xs font-bold text-red-700">{news.category}</p>
        <h2 className="line-clamp-2 text-base font-bold leading-snug text-gray-900">
          {news.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {news.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;