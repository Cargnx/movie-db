import Cards from "./components/Cards";

export default function Home() {
  return (
    <div className="pt-40">
      <div className="text-center">
        <h1 className="text-7xl capitalize font-bold mb-4">Movie DB</h1>
        <a href="https://github.com/Cargnx" className="font-bold">
          My GitHub
        </a>
      </div>

      <div className="pt-20 grid grid-cols-3 gap-y-7">
        <Cards
          hasImage={true}
          image="/sw-episode-3.jpg"
          alt="Image description"
          title="Card Title"
          description="HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD"
        />

        <Cards
          hasImage={true}
          image=""
          alt="Image description"
          title="Card Title"
          description="HELLO WORLD"
        />

        <Cards
          hasImage={true}
          image="/Django.jpg"
          alt="Image description"
          title="Card Title"
          description="HELLO WORLD"
        />

        <Cards
          alt="Image description"
          title="WHATS UP"
          description="HELLO WORLD"
        />

        <Cards
          alt="Image description"
          title="WHATS UP"
          description="HELLO WORLD"
        />
      </div>
    </div>
  );
}
