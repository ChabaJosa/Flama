import React, { useState, useEffect, useCallback } from "react";
import FooterArticle from "./footerArticle";
import axios from "axios";

export default function BootstrapFooter() {
  const [articleData, setArticleData] = useState(null);
  const [Images, SetImages] = useState(null);

  const getNews = useCallback(() => {
    // Documentation at: https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/endpoints

    axios({
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "5566489ac1mshfe14f7b0a8d9395p1426dcjsn66b2ca08e291",
        "x-bingapis-sdk": "true",
        useQueryString: true,
      },
      params: {
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
        q: "Aromatherapy",
      },
    })
      .then((response) => {
        console.log("First response", response);
        setArticleData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getPics = useCallback(() => {
    // Documentation: https://unsplash.com/oauth/applications/146767 process.env.REACT_APP_APP_ID

    console.log("Here's the paypal key", process.env.REACT_APP_PAYPAL);
    const API_KEY = process.env.REACT_APP_UNSPLASH;
    const unsplash = `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=1&q=candles`;
    axios.get(unsplash).then((result) => {
      console.log("Full Unsplash Result", result);
      SetImages(result.data);
    });
  }, []);

  const ApiLessFooter = ({length}) => {
    return (
      <>
        <div className={`col-lg-${length} col-md-6`} >
          <h3>Follow us on Social Media</h3>
          <div className="row sm-div">
            <a
              href="https://www.facebook.com/"
              className="fa fa-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
            </a>
            <a
              href="https://www.Twitter.com/"
              className="fa fa-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
            </a>
            <a
              href="https://www.Pinterest.com"
              className="fa fa-pinterest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
            </a>
            <a
              href="https://www.LinkedIn.com"
              className="fa fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
            </a>
            <a
              href="https://www.Instagram.com"
              className="fa fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
            </a>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    getNews();
    getPics();
  }, [getNews, getPics]);

  if (
    articleData !== null &&
    articleData.data !== undefined &&
    articleData.data.value.length > 3 &&
    Images !== undefined
  ) {
    let filteredResults = articleData.data.value.filter((eachArticle) => {
      return eachArticle.image !== undefined;
    });

    if (filteredResults.length > 3) {
      console.log("Here's Article Data", articleData);
      console.log("Hey filtered results heere", filteredResults);

      return (
        <>
          <footer className="mt-1 b-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <h3>Latest Articles</h3>
                  <FooterArticle
                    title={filteredResults[0].name}
                    text={filteredResults[0].description}
                    url={filteredResults[0].image.thumbnail.contentUrl}
                  />
                  <FooterArticle
                    title={filteredResults[1].name}
                    text={filteredResults[1].description}
                    url={filteredResults[1].image.thumbnail.contentUrl}
                  />
                  <FooterArticle
                    title={filteredResults[2].name}
                    text={filteredResults[2].description}
                    url={filteredResults[2].image.thumbnail.contentUrl}
                  />
                </div>

                <div className="col-lg-4">
                  <h3>"Our Fav Pics of the day" </h3>
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[0].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[1].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[2].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[3].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                </div>
                <ApiLessFooter length={4} />
                {/* </div> */}
              </div>
            </div>
            <div className="copyright text-center">
              Copyright © 2020 <span>Flama</span>
            </div>
          </footer>
        </>
      );
    } else {
      return (
        <>
          <footer className="mt-1 b-footer">
            <div className="container">
              <div className="row">
                <ApiLessFooter length={6} />

                <div className="col-lg-6">
                  <h3>"Our Fav Pics of the day" </h3>
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[0].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[1].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[2].urls.thumb
                        : "http://placehold.it/150x100"
                    }
                    alt=""
                  />
                  <img
                    className="img-thumbnail b-footer-img"
                    src={
                      Images
                        ? Images[3].urls.thumb
                        : "http://placehold.it/150x100"
                    }
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
  } else {
    return <ApiLessFooter length={12} />;
  }
}
