
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Headline = {
  id: string | number;
  title: string;
};

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=12", {
    next: { revalidate: 300 },
  });
  const data = await res.json();
  const headlines: Headline[] = data.data;

  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl items-stretch">
        {/* Label */}
        <div className="flex shrink-0 items-center bg-red-900 px-4 py-3 text-sm font-bold">
          সর্বশেষ
        </div>

        {/* Scrolling headlines */}
        <div className="flex min-w-0 flex-1 items-center overflow-hidden">
          <MarqueeText direction="right" duration={10} className="py-3 text-sm font-medium">
            {headlines.map((h) => (
              <span key={h.id} className="inline-flex items-center">
                <span>{h.title}</span>
                <span aria-hidden className="mx-6 text-red-300">
                  •
                </span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;