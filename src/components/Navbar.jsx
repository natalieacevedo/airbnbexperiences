import logo from "../images/airbnblogo.png";

function Navbar() {
  return (
    <nav className="NavBarContainer">
      <img src={logo} alt="main-logo" />
    </nav>
  );
}

export default Navbar;

// eslint-disable-next-line prettier/prettier

// function App() {

//     const dataCats = [{
//         img:"./images/mr-whiskerson.png",
//         name:"Mr. Whiskerson",
//         phone="(212) 555-1234",
//         email="mr.whiskaz@catnap.meow"
//     },
//     {
//         img:"./images/fluffykins.png",
//         name:"fluffylicios",
//         phone="(212) 555-1234",
//         email="mr.whiskaz@catnap.meow"
//     },
//     {
//         img:"./images/felix.png",
//         name:"Felix el gato",
//         phone="(212) 555-1234",
//         email="mr.whiskaz@catnap.meow"
//     },
//     {
//         img:"./images/pumpkin.png",
//         name:"senora calabaza",
//         phone="(212) 555-1234",
//         email="mr.whiskaz@catnap.meow"
//     }]

//     return (
//         <div className="contacts">
//          {
//              dataCats.map(el => {
//                  return (
//                      <Contact img={el.img}
//                                   name={el.name}
//                                   phone={el.phone}
//                                   email={el.email}
//                  />
//                  )
//              })
//          }
//         </div>
//     )
// }
