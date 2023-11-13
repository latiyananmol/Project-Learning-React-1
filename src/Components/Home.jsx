import React from "react";
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techie Star</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to the tech problems you face
            every day . we are leading tech conpany whose aim is to increase the
            problem solving ablility in children
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1> Who we are?</h1>
          <p>
            Lovoluptatem molesres! Facere ea
            aperiam repellat? oluptate. Eos obcaecati ut aspernatur molestiae in
            consequuntur laborum quidem, neque, id mollitia suscipit modi
            ratione incidunt beatae. Asperiores, excepturi eaque quos officia
            minus similique nostrum repellat corporis, inventore ut sequi. Odit
            dolores qui placeat, laborum natus ad aspernatur. Hic doloribus
            aliquid debitis! Natus facilis expedita deleniti eos voluptatum
            dolorem dicta? Aliquid eaque id omnis assumenda rem, quibusdam amet
            deserunt neque?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.5s"}} >
            <AiFillGoogleCircle/>
            <p>Google</p>
            </div>
            <div style={{animationDelay:"0.3s"}} >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}} >
         <AiFillYoutube/>
            <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}} >
            <AiFillInstagram/>
            <p>Instagram4</p>
            </div>
          
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
