import { useNavigate, useNavigation } from "react-router-dom";
import End from "../components/end/End";

const Exit = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return <End />;
};
export default Exit;
