import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import EntranceExams from "./components/EntranceExams";
import ExamData from "./data/ExamData";
import Card from "./components/Card";
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact>
              <Home />{" "}
            </Route>
            <Route path="/entrance-exams" component={EntranceExams} exact>
              {" "}
              <EntranceExams />{" "}
            </Route>
            <Route path="/about" component={About} exact>
              <About />{" "}
            </Route>
            <Route path="/contact" component={Contact} exact>
              <Contact />{" "}
            </Route>

            {ExamData.map((exam, index) => (
              <Route key={index} path={exam.link} component={exam.component} />
            ))}
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
