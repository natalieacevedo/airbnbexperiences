function MyPlaces(props) {
  console.log(props.title);

  return (
    <div className="cardBody">
      <img className="placePic" src={props.imageUrl} alt="placePic" />
      <div className="content">
        <header className="headerLocation">
          <h4>{props.location}</h4>

          <a href="https://www.google.com/maps/@38.7252224,-9.1357184,14z">
            View on Google maps
          </a>
        </header>
        <h1 className="mainTitle">{props.title}</h1>
        <p className="dates">{`${props.startDate}  ${props.endDate}`}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
export default MyPlaces;
