import "./styles.css";

interface Props {
  text: string;
  icon: any;
  iconRight?: boolean;
}

export default function TextIcon({
  text,
  icon: Component,
  iconRight = false,
}: Props) {
  return (
    <div
      className="textIcon"
      style={{ flexDirection: iconRight ? "row" : "row-reverse" }}
    >
      <p>{text}</p>
      <Component />
    </div>
  );
}
