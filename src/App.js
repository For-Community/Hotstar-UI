import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaAd from "./MediaAd";

function App() {
  return (
    <div className="App">
      {/* <h1>HOTSTAR</h1> */}
      <Header />
      <MediaAd />
      <div className="watch">
        <span className="span">Continue watch</span>
      </div>
      <div className="media-row">
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
      </div>
      <div className="watch">
        <span className="span">Shows Recommended For You</span>
      </div>
      <div className="media-row">
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
      </div>
      <div className="watch">
        <span className="span">Specials & Latest Movies</span>
      </div>
      <div className="media-row">
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
