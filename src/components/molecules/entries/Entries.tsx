import { Fragment, useState } from "react";
import { Collections } from "../../../context/CollectionsContext";
import Modal from "../../atoms/Modal/Modal";
import Tag from "../../atoms/tag/Tag";
import ShowInfoEntrie from "../show-info-entrie/ShowInfoEntrie";
import "./styles.css";

interface Props {
  data: Collections[];
}

const colors = {
  acu: "yellow",
  pet: "blue",
  pasta: "green",
  trampa: "black",
};

export default function Entries({ data }: Props) {
  const [showModal, setShowModal] = useState({
    open: false,
    data: {} as Collections,
  });

  const getColor = (name: "acu" | "pet" | "pasta" | "trampa") => colors[name];

  const showCollection = (collection: Collections) =>
    setShowModal({ open: true, data: collection });

  return (
    <Fragment>
      <table className="entires">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>ID</th>
          <th>Fecha</th>
          <th>Cliente </th>
          <th>Estado </th>
          <th>Materiales </th>
          <th>Pago Total </th>
        </tr>
        {data.map((collection) => (
          <tr key={collection.id} onClick={() => showCollection(collection)}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{collection.id}</td>
            <td> {collection.date}</td>
            <td>
              <span>{collection.client}</span>
            </td>
            <td>
              <Tag text={collection.status} color="green" />
            </td>
            <td>
              <div>
                {collection.materials.map((material) => (
                  <Tag
                    text={material.name}
                    color={getColor(
                      material.name as unknown as
                        | "acu"
                        | "pet"
                        | "pasta"
                        | "trampa"
                    )}
                  />
                ))}
              </div>
            </td>
            <td>$ {collection.total}</td>
          </tr>
        ))}
      </table>
      <Modal
        isOpen={showModal.open}
        onClose={() => setShowModal({ open: false, data: {} as Collections })}
      >
        <ShowInfoEntrie data={showModal.data} />
      </Modal>
    </Fragment>
  );
}
