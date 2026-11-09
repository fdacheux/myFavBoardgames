import Card from "./components/Card";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function Home() {
  //We receive a list of cards from backend
  // proccess by adding hot depending on the number of likes and the one of a week ago
  // we also add the trend to display the arrow up or down depending on last classment and new classment
  //finally add the rank of the card in the list 

  const listOfCards = [
    {
      img: "/assets/Ticket_to_Ride_Board_Game_Box_EN.jpg",
      title: "Ticket to Ride",
      hot: true,
      likes: 12400,
      trend: "up",
      ranking: 1,
    },
    {
      img: "/assets/Catan-2015-boxart.jpg",
      title: "Catan",
      hot: false,
      likes: 10200,
      trend: "down",
      ranking: 2,
    },
    {
      img: "/assets/root.jpg",
      title: "Root",
      hot: false,
      likes: 8500,
      trend: "equal",   
      ranking: 8,
    },
  ];
  return (
    <div>
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Header />
        <SearchBar />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {listOfCards.map((card) => (
            <li className="list-none" key={card.title}>
              <Card {...card} />
            </li>
          ))}
        </section>
      </main>
    </div>
  );
}
