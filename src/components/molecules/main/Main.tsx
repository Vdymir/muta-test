import { Fragment, useContext, useState } from "react";
import Filter from "../../../assets/svgs/components/Filter";
import Grid from "../../../assets/svgs/components/Grid";
import PlusCircle from "../../../assets/svgs/components/PlusCircle";
import { CollectionsContext } from "../../../context/CollectionsContext";
import CustomButton from "../../atoms/custom-button/CustomButton";
import Line from "../../atoms/line/Line";
import Modal from "../../atoms/Modal/Modal";
import Search from "../../atoms/search/Search";
import TextIcon from "../../atoms/text-icon/TextIcon";
import Entries from "../entries/Entries";
import Footer from "../footer/Footer";
import NewEntries from "../new-entrie/NewEntries";
import "./styles.css";

export default function Main() {
  const [search, setSearch] = useState("");
  const { savedCollections } = useContext(CollectionsContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
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
            <CustomButton
              text="NUEVA ENTRADA"
              icon={PlusCircle}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <section className="main__section">
          {savedCollections.length > 0 ? (
            <Entries data={savedCollections}/>
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NewEntries onClose={() => setIsOpen(false)} />
      </Modal>
    </Fragment>
  );
}
