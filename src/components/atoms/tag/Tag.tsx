import "./styles.css";

interface Props {
  text: string;
  color: string;
}

export default function Tag({ text, color }: Props) {
  console.log(color);
  return (
    <div className={`tag tag__color-${color}`}>
      <p>{text}</p>
    </div>
  );
}
