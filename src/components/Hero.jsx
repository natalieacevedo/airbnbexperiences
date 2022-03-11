import groupPic from "../images/photogroup.png";

function Hero() {
  return (
    <section className="heroContainer">
      <img src={groupPic} alt="many pictures" />
      <h1 className="mainTitle">Online Experiences</h1>
      <p>
        Join unique interactive activities led by<br></br>
        one-of-a-kind hosts-all without leaving home.
      </p>
    </section>
  );
}

export default Hero;
