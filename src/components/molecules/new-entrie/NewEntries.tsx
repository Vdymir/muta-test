import { useContext, useEffect, useState } from "react";
import { CollectionsContext } from "../../../context/CollectionsContext";
import recolecciones from "../../../utils/recolecciones";
import CustomButton from "../../atoms/custom-button/CustomButton";
import "./styles.css";

interface Props {
  onClose: () => void;
}

export interface Materials {
  name: string;
  value: number;
  desc: string;
}

export default function NewEntries({ onClose }: Props) {
  const [payment, setPayment] = useState(0);
  const [collections, setCollections] = useState(recolecciones);
  const { setSavedCollections } = useContext(CollectionsContext);
  const [client, setClient] = useState("");

  const onChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    collections[index] = {
      ...collections[index],
      value: target.value,
    };

    setCollections([...collections]);
  };

  const onSave = () => {
    let materials: Materials[] = [];
    let total = 0;
    collections.forEach((col) => {
      if (+col.value > 0) {
        materials.push({ name: col.name, value: +col.value, desc: col.label });
        total += +col.value;
      }
    });
    const body = {
      client,
      id: +Date.now().toString().substring(8),
      date: `${new Date()}`.slice(4, 15),
      status: "recogido",
      materials,
      total,
    };
    setSavedCollections((prev) => [...prev, body]);
    onClose();
  };

  useEffect(() => {
    let total = 0;
    collections.forEach((col) => {
      total += +col.value;
    });
    setPayment(total);
  }, [collections]);

  return (
    <div className="newEntries">
      <h2>Nueva Entrada</h2>
      <label htmlFor="select">Cliente</label>
      <select
        className="select"
        id="select"
        onChange={(event) => setClient(event.target.value)}
      >
        <option value="">Selecciona un cliente...</option>
        <option value="vladimir">Vladimir</option>
        <option value="juan">Juan</option>
        <option value="andres">Andres</option>
      </select>
      <div className="newEntries__options">
        <p>Recolección</p>
        {collections.map((collection, index) => (
          <div key={collection.id}>
            <span>{collection.label}</span>
            <input
              type="number"
              name={collection.name}
              value={collection.value}
              onChange={(event) => onChange(event, index)}
            />
          </div>
        ))}
      </div>
      <div className="newEntries__payment">
        <p>Pago</p>
        <span>$ {payment}</span>
      </div>
      <CustomButton
        text="crear"
        disabled={!(client.length > 0 && payment > 0)}
        fullWidth
        onClick={onSave}
      />
    </div>
  );
}
