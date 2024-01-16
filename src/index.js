import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import pic1 from "../src/assets/pic1.png";
import pic2 from "../src/assets/pic2.png";
import pic3 from "../src/assets/pic3.png";
import pic4 from "../src/assets/pic4.png";
import pic5 from "../src/assets/pic5.png";
import pic6 from "../src/assets/pic6.png";
import pic7 from "../src/assets/pic7.png";
import pic8 from "../src/assets/pic8.png";
import pic9 from "../src/assets/pic9.png";
import pic10 from "../src/assets/pic10.png";

const Index = () => {


  //Content
 const prline = ddddfdfdfdfdf
      const [username, setusername] = '';
      const para = checking;
      const title = thundujaaa;
      const exp = bgg;
      const rightexp = ddd;
      const [designTitle, setdt] = '';
      const d1 = Desidfdfdfgn 1;
      const d2 = Dfffesign 2;
      const d3 = Desifsdfsfgn 6;
      const d4 = Design 4;
      const d5 = Design 5;
      const d6 = Design 6;
      const email = info@sale;
      const number = 696969969;
      const pic1Source = pic1;
      const pic2Source = pic2;
      const pic3Source = pic3;
      const pic4Source = pic4;
      const pic5Source = pic5;
      const pic6Source = pic6;
      const pic7Source = pic7;
      const pic8Source = pic8;
      const pic9Source = pic9;
      const pic10Source = pic10;
//Content
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          para={para}
          
          title={title}
          
          exp={exp}
         
          rightexp={rightexp}
          
          pic1Source={pic1Source}
          pic2Source={pic2Source}
          pic3Source={pic3Source}
          pic4Source={pic4Source}
         
          number={number}
        />
      ),
    },
    {
      path: "/projects",
      element: (
        <Projects
          prline={prline}
         
          pic5Source={pic5Source}
          
          pic6Source={pic6Source}
          pic7Source={pic7Source}
          pic8Source={pic8Source}
          pic9Source={pic9Source}
          pic10Source={pic10Source}
          d1={d1}
          d2={d2}
          d3={d3}
          d4={d4}
          d5={d5}
          d6={d6}
          number={number}
        />
      ),
    },

    {
      path: "/contact",
      element: (
        <Contacts
          email={email}
          number={number}
        />
      ),
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
