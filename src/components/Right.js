import dp from "../assets/profilelg.png";

import Active from './Active';
import Close from './Close';
const Right = () => {
    return (
      <div>
        <div className="right">
          <div className="header">
              <img src="https://cdn-icons-png.flaticon.com/512/2814/2814914.png" width="30rem" alt=""/>
              <img src={dp} alt="invalid_image" width="30rem"/>
          </div>
          <Active/>
          <Close/>
        </div>
      </div>
    )
  }
  
  export default Right;