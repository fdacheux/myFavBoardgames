import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div>
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"><Header /><SearchBar /></main>
    </div>
  );
}
