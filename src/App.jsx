import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return <div className="background w-full h-screen flex flex-col overflow-x-hidden">
    <h1 className="bg-white rounded-lg w-full text-center mt-[40px] text-3xl font-bold">Random Gifs</h1>
    <div className="flex flex-col">
    <Random/>
    <Tag/>
    </div>
  </div>;
}
