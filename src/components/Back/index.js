import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";

function Back() {

  const navigate = useNavigate();

  function handleBack(e){
    e.preventDefault();
    navigate(-1);
  }
  
  return (
    <IoIosArrowBack style={{cursor: "pointer"}} onClick={(e) => handleBack(e)}/>
  )
}

export default Back;