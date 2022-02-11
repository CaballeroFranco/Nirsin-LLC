import about from "../resources/aboutUs-bc.jpg";

const Content = (props) => {
  return (
    <>
      <p className="text"> {props.text}</p>
    </>
  );
};

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us">
      <div className="container-fluid">
        <div className="row about-content">
          <div className="col-6  about-img">
            <img className="about-img" src={about} alt="About" />
          </div>
          <div className="col-6 container-article ">
            <article>
              <h2 className="title">
                About Us{" "}
                <span>
                  <hr className="line-1" />
                </span>{" "}
              </h2>
              <Content text="Nirsin LLC is a genuine consulting brand for the travel industry, made up of a team of tourism and communications professionals who are passionate and focused on the future." />
              <Content text="We know first-hand the essence of the destinations, the secrets of the hotels, the keys to the means of transport, the most experienced guides... But for us the most important thing is to know our client in order to design, together, their trip totally to measurement, taking care of the smallest detail and with maximum flexibility." />
              <Content text="We are lovers of those trips that are dreamed of and make you sigh before and after lived, which are transforming experiences, full of meaning; that is our mission and commitment to you and yours." />
              <Content text="We have the experience, solidity and the most prestigious tourism providers to provide you with top quality services and human warmth, since, from the first contact, you will have a professional travel agent who will do everything possible to make all your wishes come true." />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
