
import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

interface IotherSections {
  currentId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();

  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections : IotherSections[] = sections.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Marquee />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
        {/* Left: main news + sections (2/3) */}
        <div className="lg:col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-10 space-y-10">
            {otherSections.map((section, currentId) => (
              <div key={section.currentId}>
                <h3 className="mb-5 border-b-2 border-red-700 pb-2 text-xl font-bold text-gray-900">
                  {section.title}
                </h3>

                {/* News Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Most read section (1/3) */}
        <aside className="self-start rounded-lg border border-gray-200 bg-white p-6 lg:col-span-1">
          <h3 className="mb-4 text-xl font-bold text-gray-900">সর্বাধিক পঠিত</h3>

          <ol className="divide-y divide-gray-100">
            {/* Most read items go here */}
          </ol>
        </aside>
      </div>
    </div>
  );
}