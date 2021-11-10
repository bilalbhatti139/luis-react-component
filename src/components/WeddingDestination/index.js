import React, { Fragment } from "react";

// import style
import "./style.scss";

// import images
import SpaAndWellnessGallery from "../../assets/zoetry-montego-bay-jamaica-spa-wellness-thumb.jpg";
import WeddingandHoneymoonGallery from "../../assets/zoetry-montego-bay-jamaica-wedding-honeymoon-01.jpg";
import ZoetryMontegoBayGallery from "../../assets/zoetry-montego-bay-jamaica-featured-video-01.jpg";
import FeaturedVideo from "../../assets/zoetryWedding-Style-Large-Video-Template.jpg";

const WeddingDestination = () => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="main-wrapper__wedding-destination">
          <div className="main-wrapper__wedding-destination-left-content">
            <div className="main-wrapper__wedding-destination-left-content-top">
              <div className="main-wrapper__empty-box"></div>
              <div className="main-wrapper__spa-and-wellness-gallery">
                <img
                  src={SpaAndWellnessGallery}
                  alt="gallery-thumbnail"
                  className="img-fluid main-wrapper__spa-and-wellness-img"
                />
                <a href="/" className="main-wrapper__link">
                  Spa & Wellness Gallery
                </a>
              </div>
            </div>
            <div className="main-wrapper__wedding-and-honeymoon-gallery">
              <img
                src={WeddingandHoneymoonGallery}
                alt="gallery-thumbnail"
                className="img-fluid main-wrapper__wedding-and-honeymoon-img"
              />
              <a href="/" className="main-wrapper__link">
                Weddings & Honeymoons Gallery
              </a>
            </div>
          </div>
          <div className="main-wrapper__wedding-destination-right-content">
            <div className="main-wrapper__zoetry-montego-bay-gallery">
              <img
                src={ZoetryMontegoBayGallery}
                alt="gallery-thumbnail"
                className="img-fluid"
              />
              <a href="/" className="main-wrapper__link">
                Zöetry Montego Bay Gallery
              </a>
            </div>
            <div className="main-wrapper__featured-video-container">
              <div className="main-wrapper__featured-video">
                <img
                  src={FeaturedVideo}
                  alt="gallery-thumbnail"
                  className="img-fluid"
                />
                <a href="/" className="main-wrapper__link">
                  Featured Video
                </a>
              </div>
              <div className="main-wrapper__featured-video-text">
                <div className="main-wrapper__text-border-top"></div>
                <h1>Celebrate love at Zoëtry Montego Bay Jamaica</h1>
                <div className="main-wrapper__text-border-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper__empty-box"></div>
      </div>
    </Fragment>
  );
};

export default WeddingDestination;
