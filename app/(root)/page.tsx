import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Ammad" },
      _id: 1,
      description: "THis is post's description",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGpNnj60ZkXelnfyH2p7Xe-VdmJjfJ3AnlA&s",
      category: "Robots",
      title: "We are Robots",
    },
  ];

  return (
    <>
      <section className="pink-container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get noticed in Virtual Competetion
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard post={post} key={post?._id} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
