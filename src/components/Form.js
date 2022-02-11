import React from "react";

function Form() {
  return (
    <div className="container-fluid">
      <section
        id="contacts"
        className="row justify-content-center topSmall contacts"
      >
        <div className="col-md-7 col-lg-8">
          <h4 className="text-6 contactosT">Contact Us</h4>
          <hr className="line-3" />
          <form className="p-4">
            <div className="row g-3">
              <div className="col-sm-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                />
              </div>
              <div className="col-sm-6">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lirstName"
                  placeholder=""
                />
              </div>
              <div className="col-12">
                <label>Email</label>
                <input
                  type="mail"
                  className="form-control"
                  id="email"
                  placeholder=""
                />
              </div>
              <div className="col-12">
                <label>Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder=""
                />
              </div>
            </div>
            <div className="d.flex text-center">
              <button type="button" class="btn btn-dark mt-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
