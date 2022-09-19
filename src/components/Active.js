import Lost from "../assets/lost.png";
import Jagged from "../assets/jagged.png";


const Active = () => {
    return (
      <div>
      <div className="active_section ">
      <div className="details_sec"><span>Active Deposits</span><span>2</span><img src="https://cdn-icons-png.flaticon.com/512/864/864380.png" width="20rem" alt="plus"/></div>
      <div className="details">
        <div className="property pheader">
            <div>PROPERTY</div>
            <div>MOVE IN DATE</div>
            <div>RENT</div>
            <div>DEPOSIT</div>
            <div>STATUS</div>
            
        </div>
        <div className="property pdetails">
            <div><img src={Lost} width="40rem" alt=""/><span>771 Lost Round<p>Sacramento CA</p></span></div>
            <div>25 February 2020</div>
            <div>$3000</div>
            <div>$9000<p>First, Last &amp; Security</p></div>
            <div><span>Awaiting Bank Processing</span></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" width="20rem" alt="yellow"/></div>
        </div>
        <div className="property pdetails">
            <div><img src={Jagged} width="40rem" alt=""/><span>1491 Jagged Arbor<p>San Antonio TX</p></span></div>
            <div>12 March 2020</div>
            <div>$2300</div>
            <div>$4600<p>First &amp; Last</p></div>
            <div><span>Payment Processed</span></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" width="20rem" alt="green"/></div>
        </div>
      </div>
      <div className="check">
        <span className="checkD">ALL ACTIVE DEPOSITS</span>
      </div>
      </div>
      </div>
    )
  }
  
  export default Active;