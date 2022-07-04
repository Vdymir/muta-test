import "./styles.css";
import { Collections } from "../../../context/CollectionsContext";

interface Props {
  data: Collections;
}

export default function ShowInfoEntrie({ data }: Props) {
  return (
    <div className="showInfoEntrie">
      <span>{data.date}</span>
      <h3>{data.id}</h3>

      <p>Usuario</p>
      <h4>{data.client}</h4>

      <p>Material Recolectado</p>
      {data.materials.map((material) => (
        <div key={material.name} className="showInfoEntrie__material">
          <p>{material.desc}</p>
          <span>{material.value} Kg</span>
        </div>
      ))}

      <p>Pago</p>
      <h5>$ {data.total}</h5>
    </div>
  );
}
