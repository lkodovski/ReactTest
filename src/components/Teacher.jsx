import reactImg from "../assets/react-core-concepts.png";

export default function Teacher({ subject, teacher }) {
  return (
    <div>
      <p>Predmet: {subject}</p>
      <p>Profesor: {teacher} </p>
    </div>
  );
}
