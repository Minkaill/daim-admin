import { Header } from "./components/Header";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="max-w-[1440px] w-full mx-auto mt-5 px-5 flex flex-col gap-4">
      <Header />
      <Layout />
    </div>
  );
}

export default App;
