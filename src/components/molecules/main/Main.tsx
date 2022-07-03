import { useState } from "react";
import Filter from "../../../assets/svgs/components/Filter";
import Grid from "../../../assets/svgs/components/Grid";
import PlusCircle from "../../../assets/svgs/components/PlusCircle";
import CustomButton from "../../atoms/custom-button/CustomButton";
import Line from "../../atoms/line/Line";
import Search from "../../atoms/search/Search";
import TextIcon from "../../atoms/text-icon/TextIcon";
import Footer from "../footer/Footer";
import "./styles.css";

export default function Main() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState([]);

  return (
    <main className="main">
      <h1>Recolecciones</h1>
      <div className="main__toggleDay">
        <p>Hoy</p>
        <span>Todas</span>
      </div>
      <div className="main__filter">
        <div className="main__filter-search">
          <p>Buscar</p>
          <Search
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <Line />
        <TextIcon icon={Filter} text="Filtrar" iconRight />
        <Line />
        <TextIcon icon={Grid} text="Organizar" iconRight />
        <Line />
        <div className="main__filter-button">
          <CustomButton text="NUEVA ENTRADA" icon={PlusCircle} />
        </div>
      </div>
      <section className="main__section">
        {entries.length > 0 ? (
          <></>
        ) : (
          <div className="main__section-text">
            <p>Parece que aun no haz recoljido algo.</p>
            <span>
              Puedes registrar una recolección haciendo click en el boton de
              arriba.
            </span>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
