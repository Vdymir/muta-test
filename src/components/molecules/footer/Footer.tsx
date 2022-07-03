import "./styles.css";
import ArrowLeftCircle from "../../../assets/svgs/components/ArrowLeftCircle";
import ArrowRightCircle from "../../../assets/svgs/components/ArrowRightCircle";
import Line from "../../atoms/line/Line";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Pagina 1 de 1</p>
      <Line />
      <ArrowLeftCircle />
      <ArrowRightCircle />
    </footer>
  );
}
