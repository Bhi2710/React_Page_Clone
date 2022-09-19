import dp from "../assets/profilelg.png";

const Left = () => {
    return (
      <div>
        <div className="left_container">
          <span className="profile"><img src={dp} alt="invalid_image" width="90rem"/>Scott Grant</span>
          <div className="catagory">
              <span><img src={"https://cdn-icons-png.flaticon.com/512/1946/1946488.png"} width="20rem" alt="home"/>Home</span>
              <span><img src={"https://cdn-icons-png.flaticon.com/512/3936/3936902.png"} width="20rem" alt="deposit"/>Deposits</span>
              <span><img src={"https://cdn-icons-png.flaticon.com/512/1611/1611173.png"} width="20rem" alt="gift"/>Offers</span>
              <span><img src={"https://cdn-icons-png.flaticon.com/512/3023/3023976.png"} width="20rem" alt="bank"/>Payments</span>
              <span><img src={"https://cdn-icons-png.flaticon.com/512/3524/3524636.png"} width="20rem" alt="setting"/>Settings</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default Left;