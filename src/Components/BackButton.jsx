import { useNavigate } from "react-router-dom";
import Button from "./Button";
function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      //we can define how many steps u can go back like -1,-2 and go forward +1,+2...
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
