import Nobel from "../assets/nobel.png";
import Tawny from "../assets/tawny.png";

const Close = () => {
    return (
        <div>
          <div className="active_section ">
          <div className="details_sec"><span>Closed Deposits</span><span>8</span></div>
          <div className="details">
            <div className="property pheader">
                <div>PROPERTY</div>
                <div>MOVE IN DATE</div>
                <div>RENT</div>
                <div>DEPOSIT</div>
                <div>STATUS</div>
                
            </div>
            <div className="property pdetails">
                <div><img src={Nobel} width="40rem" alt=""/><span>1694 Noble Cape<p>Las Vegas NV</p></span></div>
                <div>3 February 2020</div>
                <div>$3300</div>
                <div>$9000<p>First, Last &amp; Security</p></div>
                <div><span>Awaiting Bank Processing</span></div>
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" width="20rem" alt="yellow"/></div>
            </div>
            <div className="property pdetails">
                <div><img src={Tawny} width="40rem" alt=""/><span>1141 Tawny Maze<p>San Antonio TX</p></span></div>
                <div>12 January 2020</div>
                <div>$2300</div>
                <div>$4600<p>First &amp; Last</p></div>
                <div><span>Expired: No Payment Received</span></div>
                <div><img src="https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png" width="20rem" alt="green"/></div>
            </div>
          </div>
          <div className="check">
            <span className="checkD">ALL CLOSED DEPOSITS</span>
          </div>
          </div>
        </div>
    )
  }
  
  export default Close;