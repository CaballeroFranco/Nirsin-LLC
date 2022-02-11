import imgServices from "../resources/services-img.jpg";
import logoAvion from "../resources/nirsinAvion.svg";

const Content = (props) => {
  return (
    <>
      <li>
        <img className="avion" src={logoAvion} alt="Avion" />
        {props.text}
      </li>
    </>
  );
};

function Services() {
  return (
    <div id="services" className="services">
      <div className="container ">
        <div className="row">
          <div className="col services-one">
            <article>
              <h2>Travel - Transform</h2>
              <hr className="line-2" />
              <p>
                We live in a time of unprecedented competition, markets volatile
                and disruptive business models. Expectations are higher than
                ever. The change is not fast. It is exponential.
              </p>
              <p>
                Companies have to keep up the pace to become agile, real-time
                and connected travel platforms. must reinvent themselves to
                offer better customer experiences interesting and stronger
                loyalty programs. The leaders must modernize technology to meet
                the demands of users, while improving the operational component.
              </p>
            </article>
          </div>
        </div>
        <div className="row">
          <div className="col-6 services-two">
            <h3>WHAT DO WE OFFER YOU?</h3>
            <ul>
              <Content text="Personalized assistance from an assigned executive agent" />
              <Content text="Hotels, Flights, Packages, Cruises, Tours" />
              <Content text="Trips for Sweet 16" />
              <Content text="Specialists in Your Beach Wedding" />
              <Content text="Honeymoons" />
              <Content text="Study abroad" />
              <Content text="Traveler insurance" />
              <Content text="English Spoken" />
              <Content text="Secure payment" />
            </ul>
          </div>
          <div className="col-6 services-three">
            <img src={imgServices} alt="Services" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
