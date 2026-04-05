import { useParams } from "react-router-dom";

export default function TaskDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1> prod details</h1>
      prod num: {id}
    </div>
  );
}
