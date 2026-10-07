
import Image from "next/image";

interface News{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const MainNews = ({ news }: { news: News[] }) => {

    const [firstNews, ...otherNews ] = news;

  console.log(news);


  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* Lead story */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <figure className="bg-gray-100">
          <Image
            src={firstNews.imageUrl} alt={firstNews.title} width={400} height={300} className="h-72 w-full object-cover"
          />
        </figure>
        <div className="p-5">
          <p className="mb-2 text-xs font-bold text-red-700">{firstNews.category}</p>
          <h2 className="text-2xl font-bold leading-snug text-gray-900">{firstNews.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
            {firstNews.description}
          </p>
        </div>
      </div>

      {/* Headline list */}
      <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {
            otherNews.slice(0, 4).map((newsItem) => (
                <div key={newsItem.id} className="px-5 py-4">
                    <p className="mb-1 text-xs font-bold text-red-700">{newsItem.category}</p>
                    <h3 className="text-base font-semibold leading-snug text-gray-900">{newsItem.title}</h3>
                    {/* <p>{newsItem.description}</p> */}
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default MainNews;