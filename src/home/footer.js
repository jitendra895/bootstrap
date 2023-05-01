import React from "react";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white small">
        <div className="pt-5 pb-4 pt-lg-7 pb-lg-5">
          <div className="container">
            <div className="row justify-content-md-between">
              <div className="col-md-5 col-lg-4 d-flex flex-column justify-content-between ">
                <Image
                  alt=""
                  src="./images/logo-white.png"
                  width="100"
                  height="40"
                ></Image>

                {/* Footer social links  */}
                <div className="mt-4 mb-3 mt-lg-5 pt-lg-2 mx-auto mx-md-0 ">
                  <a href="#" className="text-reset text-decoration-none ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white text-decoration-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white text-decoration-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white text-decoration-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pinterest mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white text-decoration-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-dribbble mx-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Footer links */}
              <div className="col-md-7 col-lg-6 mt-5 mt-md-0 ">
                <div className="row">
                  <div className="col-6 col-md-4 mb-4 mb-md-0">
                    <h3 className="h6 text-uppercase mb-3">SUPPORT</h3>
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Contact Us
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          FAQs
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Size Guide
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Shipping & Returns
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-4 mb-4 mb-md-0">
                    <h3 className="h6 text-uppercase mb-3">Company</h3>
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          About Us
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Our Story
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Careers
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-4">
                    <h3 className="h6 text-uppercase mb-3">Contact</h3>
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          +91 8596663566
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          +91 2562662252
                        </a>
                      </li>
                      <li className="mb-1">
                        <a href="#" className="text-reset">
                          help@arthub.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer bottom --> */}
        <div className="border-top border-gray py-3">
          <div className="container">
            <div className="row justify-content-between small">
              <div className="col-auto">
                <a href="#" className="text-reset">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="text-reset">
                  Cookie Policy
                </a>
              </div>
              <div className="col-auto">
                <a
                  data-scroll=""
                  href="#"
                  className="d-inline-block text-reset"
                  title="Up to the top"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-up-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z" />
                  </svg>
                </a>
              </div>
              <div className="col-auto">
                <span>© ArtHub, 2023 ArtHub Pvt. Ltd.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
