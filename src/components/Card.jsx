import swimmer from "../images/nadadora.png";

function Card() {
  return (
    <div className="cardBody">
      <img className="mainPic" src={swimmer} alt="professional swimmer"></img>
      <div className="activityInfo">
        <p>5.0 (6) USA</p>
        <p>Life lessons with Natalie Acevedo</p>
        <p>
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
