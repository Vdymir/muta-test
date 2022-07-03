import "./styles.css";
import logo from "../../../assets/svgs/logo.svg";
import links from "../../../utils/router";
import TextIcon from "../../atoms/text-icon/TextIcon";
import UserBubble from "../../atoms/user-bubble/UserBubble";
import vladimir from "../../../assets/imgs/vladimir.jpg";

export default function Aside() {
  return (
    <aside className="aside">
      <img alt="logo-muta" src={logo} />
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <TextIcon icon={link.icon} text={link.label} fullWidth/>
          </li>
        ))}
      </ul>
      <UserBubble img={vladimir} text="Vladimir Castaneda" />
    </aside>
  );
}
