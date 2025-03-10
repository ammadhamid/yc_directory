import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <div className="pink-container">
      <h1 className="heading">
        Pitch Your Startup <br />
        Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get noticed in Virtual Competetion
      </p>
      <SearchForm query={query} />
    </div>
  );
}
