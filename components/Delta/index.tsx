import { Triangle, Number, Container } from "./Delta.style";

function Delta({ number }: { number: number }) {
  const up = number > 0;
  return (
    <Container>
      <Triangle up={up} />
      <Number up={up}>{number}</Number>
    </Container>
  );
}

export default Delta;
