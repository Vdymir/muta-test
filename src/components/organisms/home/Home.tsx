import "./styles.css";
import Aside from "../../molecules/aside/Aside";
import Main from "../../molecules/main/Main";
import { CollectionsProvider } from "../../../context/CollectionsContext";

export default function Home() {
  return (
    <CollectionsProvider>
      <div className="home">
        <Aside />
        <Main />
      </div>
    </CollectionsProvider>
  );
}
