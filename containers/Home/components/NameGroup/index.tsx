import Image from "next/image";
import { Container } from "./NameGroup.style";

interface NameGroupProps {
  iconUrl: string;
  name: string;
}
function NameGroup(props: NameGroupProps) {
  const { iconUrl, name } = props;
  return (
    <Container>
      <span className="symbolImg">
        <Image
          loader={() => iconUrl}
          src={iconUrl}
          alt={name}
          width={24}
          height={24}
        />
      </span>
      <span className="name">{name}</span>
    </Container>
  );
}

export default NameGroup;
