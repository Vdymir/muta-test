import "./styles.css"
import Aside from "../../molecules/aside/Aside";
import Main from "../../molecules/main/Main";

export default function Home() {
  return (
    <div className="home">
      <Aside />
      <Main />
    </div>
  );
}
