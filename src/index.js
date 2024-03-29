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
 const prline = 'We will help you implement a project of any complexity';
      const [username, setusername] = '';
      const para = 'Selemen® — is a company for the construction and decoration of premises. We carry out projects on time';
      const title = 'Selemen';
      const exp = '20+ years on the market';
      const rightexp = 'We guarantee the quality';
      const [designTitle, setdt] = '';
      const d1 = 'Design 1';
      const d2 = 'Design 2';
      const d3 = 'Design 3';
      const d4 = 'Design 4';
      const d5 = 'Design 5';
      const d6 = 'Design 6';
      const email = 'info@selemen';
      const number = '+128148312084';
      const [pic1Source, setpic1Source] = useState([pic1, null]);
      const [pic2Source, setpic2Source] = useState([pic2, null]);
      const [pic3Source, setpic3Source] = useState([pic3, null]);
      const [pic4Source, setpic4Source] = useState([pic4, null]);
    
      const [pic5Source, setpic5Source] = useState([pic5, null]);
      const [pic6Source, setpic6Source] = useState([pic6, null]);
      const [pic7Source, setpic7Source] = useState([pic7, null]);
      const [pic8Source, setpic8Source] = useState([pic8, null]);
      const [pic9Source, setpic9Source] = useState([pic9, null]);
      const [pic10Source, setpic10Source] = useState([pic10, null]);
    
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
