type Props = {
  nombre: string;
};

export default function Saludo({ nombre }: Props) {
  return <p>Hola profe 👋, mi nombre es {nombre}</p>;
}