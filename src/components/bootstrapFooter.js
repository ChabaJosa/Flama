import React from "react";

export default function bootstrapFooter() {
  return (
    <>
      <footer className="mt-1 b-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h3>Site Map</h3>
              <ul className="list-unstyled three-column">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                {/* <li>Code</li>
                <li>Design</li>
                <li>Host</li>
                <li>Contact</li>
                <li>Company</li> */}
              </ul>
                <div className="row sm-div">
                  <a
                    href="Facebook.com"
                    className="fa fa-facebook"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      window.open("Facebook.com", "_blank");
                    }}
                  >
                    <span></span>
                  </a>
                  <a
                    href="Twitter.com"
                    className="fa fa-twitter"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      window.open("Twitter.com", "_blank");
                    }}
                  >
                    <span></span>
                  </a>
                  <a
                    href="Pinterest.com"
                    className="fa fa-pinterest"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      window.open("Pinterest.com", "_blank");
                    }}
                  >
                    <span></span>
                  </a>
                  <a
                    href="LinkedIn.com"
                    className="fa fa-linkedin"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      window.open("LinkedIn.com", "_blank");
                    }}
                  >
                    <span></span>
                  </a>
                  <a
                    href="Instagram.com"
                    className="fa fa-instagram"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      window.open("Instagram.com", "_blank");
                    }}
                  >
                    <span></span>
                  </a>
                </div>

              {/* <ul className="">
                <li>
                  <a href="facebook.com" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="/" className="fa fa-facebook"></a>
                </li> */}
              {/* <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li>
                <li>
                  <img src="http://placehold.it/48x48" alt="" />
                </li> */}
              {/* </ul> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Latest Articles</h3>
              <div className="media">
                <a href="/" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Programming</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="media">
                <a href="/" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Coding</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="media">
                <a href="/" className="pull-left">
                  <img
                    src="http://placehold.it/64x64"
                    alt=""
                    className="media-object"
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">Web Sesign</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3>Candles of the Month</h3>
              <img
                className="img-thumbnail"
                src="http://placehold.it/150x100"
                alt=""
              />
              <img
                className="img-thumbnail"
                src="http://placehold.it/150x100"
                alt=""
              />
              <img
                className="img-thumbnail"
                src="http://placehold.it/150x100"
                alt=""
              />
              <img
                className="img-thumbnail"
                src="http://placehold.it/150x100"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          Copyright © 2020 <span>Flama</span>
        </div>
      </footer>
    </>
  );
}
