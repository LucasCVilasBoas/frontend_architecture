import { HeaderOverview } from "./components/HeaderOverview";
import { Navbar } from "./components/Navbar";
import { PostsList } from "./components/PostsList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderOverview />
      <PostsList />
    </div>
  );
}
