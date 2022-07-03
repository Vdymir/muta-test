import "./styles.css";

interface Props {
  text: string;
  icon: any;
  iconRight?: boolean;
  fullWidth?: boolean;
}

export default function TextIcon({
  text,
  icon: Component,
  iconRight = false,
  fullWidth = false,
}: Props) {
  return (
    <div
      className="textIcon"
      style={{
        flexDirection: iconRight ? "row" : "row-reverse",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <p>{text}</p>
      <Component />
    </div>
  );
}
