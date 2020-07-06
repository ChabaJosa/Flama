import React, { useState, useEffect } from "react";
import FooterArticle from "./footerArticle";
import axios from "axios";

export default function BootstrapFooter() {
  const [articleData, setArticleData] = useState(null);

  const getNews = () => {
    // Documentation at: https://newsapi.org/docs/endpoints/top-headlines
    const newsAPI =
      "https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=f8ae3578744f4e198d5632b34c90b58b";
    axios
      .get(newsAPI)
      .then((result) => {
        console.log("Full Result", result);
        setArticleData(result);
        console.log("Here's Article Data", articleData)

      })
      .catch((err) => console.log("Can’t access " + newsAPI, err));
  };

  useEffect(() => {
    getNews();
  }, []);


  if (articleData !== null && articleData.data !== undefined) {

    console.log("Here's Article Data", articleData)

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
              </div>
              <div className="col-lg-4 col-md-6">
                <h3>Latest Articles</h3>
                <FooterArticle
                  title={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].title}
                  text={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].description}
                  url={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].urlToImage}
                />
                <FooterArticle
                  title={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].title}
                  text={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].description}
                  url={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].urlToImage}
                />
                <FooterArticle
                  title={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].title}
                  text={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].description}
                  url={articleData.data.articles[Math.floor(Math.random() * articleData.data.articles.length)].urlToImage}
                />
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
  } else {
    return null;
  }
}
