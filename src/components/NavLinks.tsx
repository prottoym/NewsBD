import Link from "next/link";

interface Navs {
    slug: string;
    title: string;
    topicId: string | null;
    scrapable: boolean;
    url: string;
}


const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const nav:Navs[] = data.data;
  const filteredNav = nav.filter((n) => n.scrapable);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 py-4">
        
        <Link href='/'>হোম</Link>

        {filteredNav.map((n) => (
          <Link
            key={n.slug}
            href={`/${n.slug}`}
            className="font-medium text-gray-700 transition hover:text-red-600"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;