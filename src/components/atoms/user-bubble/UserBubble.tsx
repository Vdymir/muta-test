import "./styles.css";

interface Props {
  text: string;
  img: string;
}

export default function UserBubble({ text, img }: Props) {
  return (
    <div className="userBubble">
      <img alt="user-image" src={img} /> <p>{text}</p>
    </div>
  );
}
