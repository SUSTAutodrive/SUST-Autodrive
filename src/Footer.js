import { Facebook, Twitter, Send, Linkedin, AtSign } from "react-feather";

export default function Footer() {
  return (
    <div>
      <div className="container mt-5 pb-4  text-light ">
        <footer
          className="text-center"

          // eslint-disable-next-line react/style-prop-object
          //   style={"background-color: #3f51b5"}
        >
          <div className="container">
            <section className="mt-5">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Facebook />
                    <a href="#!">Facebook</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Twitter />
                    <br />
                    <a href="#!">X</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Send />
                    <a href="#!">Telegram</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Linkedin />
                    <br />
                    <a href="#!">Linkdin</a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <AtSign /> <a href="#!">Contacts</a>
                  </h6>
                </div>
              </div>
            </section>

            <hr className="my-5" />

            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5>
                    Our mission is to make an auto car for you that will not
                    need a driver.
                  </h5>
                </div>
              </div>
            </section>

            <section className="text-center mb-5">
              <a href="/" className="   me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="   me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="   me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="   me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="   me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="   me-4">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            // eslint-disable-next-line react/style-prop-object
            // style="background-color: rgba(0, 0, 0, 0.2)"
          >
            © 2024 Copyright:
            <a href="https://mdbootstrap.com/">Md. Mahabub</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
