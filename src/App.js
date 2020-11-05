import React from "react"

import "./App.scss"
import { Switch, Route } from "react-router-dom"

import Home from "./pages/home/home"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import ProjectPage from "./pages/single-project/single-project"

import StateContext from "./state-context"
import Cursor from "./components/cursor/cursor"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      amelie: {
        id: 1,
        name: "Amelie Rose",
        url: "amelie-rose",
        title: "Amelie Rose E-commerce Website.",
        heroImage: "https://iili.io/38dvMN.jpg",
        about: {
          brief: "Amelie Rose, a contemporary brand for men and women with an exciting range of luxury leather, denim and ready-to-wear products. Crafted with obsessive detail, the collections are a passionate combination of style, quality and fit, resulting in a brand that promotes storytelling and genuine customer contact that goes beyond expectations.",
          features: "Fully Responsive, Cart Functionality, Payment API, Modern Design",
          technology: "React, Redux, Stripe API, Email JS, Firebase Authentication, Firestore, Styled Components, HOC, SASS",
        },
        featureImages: ["https://iili.io/3vGkjs.jpg", "https://iili.io/38dauj.jpg"],
        preview: {
          description: "The app contains dedicated page for categories and for the items it self. There is an overlay search page for item browsing which also has elegant animations. Also included is a contact page which is powered by Email Js library that sends email from this website to any desired email address. Lastly a simple straight forward layout for the checkout page powered by Stripe API to simulate a purchase transaction including shipping and billing details.",
          images: ["https://iili.io/38dqyG.png", "https://iili.io/38dnj4.png", "https://iili.io/38doZl.jpg", "https://iili.io/38dCuf.png"],
          link: "https://amelie-rose.herokuapp.com/",
        },
      },

      tokyo: {
        id: 2,
        name: "Tokyo Tokyo",
        url: "tokyo-tokyo",
        title: "Tokyo-Tokyo Philippines Website Re-design",
        heroImage: "https://iili.io/3PZTBV.jpg",
        about: {
          brief: "No.1 Japanese Restaurant in the Philippines  For more than 30 years, Tokyo Tokyo has been serving high-quality Japanese food as we bring Japan closer to Filipinos.Over the years, Tokyo Tokyo has firmly made its mark as the pioneer and #1 Japanese restaurant in the country giving its customers a memorable and satisfying Japanese dining experience.",
          features: "Cart Functionality, Order Simulation, Modern Design",
          technology: "Glide JS, SASS, Full page JS, Vanilla JS, GSAP",
        },
        featureImages: ["https://iili.io/3PQcs2.jpg", "https://iili.io/3PQaWl.jpg"],
        preview: {
          description: "I chose to re-design Tokyo Tokyo as the current website does not have an ordering platform. This is the problem I want to solve. I made a modern, user-friendly UI for the menu where one can have additional ingredients, add quantity and navigate to each product. Using full page scrolling, one can easily switch from one product to another. I also made a simulation for transactions which the current website also lacks. Lastly I made the single page for all the informations of the company so the user doesn't have to load another page.",
          images: ["https://iili.io/3PQYx4.jpg", "https://iili.io/3PQ5bf.png", "https://iili.io/3PQIUX.png", "https://iili.io/3PQuJn.png", "https://iili.io/3PQARs.png"],
          link: "https://kennosamulde.github.io/tokyo-tokyo/",
        },
      },
      agency: {
        id: 3,
        name: "K&S Media",
        url: "k&s-media",
        title: "K&S Media Creative Agency Website",
        heroImage: "https://iili.io/38IyBe.jpg",
        about: {
          brief: "K&S Media is a modern, creative agency branded as minimalist, modern and professional. This UI was inspired by modern awwwards website like bornfight, basic agency etc. I wanted to showcase my pixel perfect, sleek and minimalist design skills in the user interface. My typography skill is also highlighted here as shown in the overall layout of the website. The website is also very interactive, I've made animations that interact with the user's behavior across the page.",
          features: "Fully Responsive, Modern UI Design and interactive",
          technology: "SASS, Luxy JS for parallax and inertia scrolling, GSAP, Jquery, Waypoint",
        },
        featureImages: ["https://iili.io/3rFRA7.jpg"],
        preview: {
          description: "The app contains dedicated page for categories and for the items it self. There is an overlay search page for item browsing which also has elegant animations. Also included is a contact page which is powered by Email Js library that sends email from this website to any desired email address. Lastly a simple straight forward layout for the checkout page powered by Stripe API to simulate a purchase transaction including shipping and billing details.",
          images: ["https://iili.io/3rFA9S.png", "https://iili.io/3rFTS2.png", "https://iili.io/3rFoPf.png", "https://iili.io/3rFzF4.png", "https://iili.io/3rFIcl.png"],
          link: "https://kennosamulde.github.io/ksmedia/",
        },
      },
      task: {
        id: 4,
        name: "Task App",
        url: "task-app",
        title: "Desktop Task App (on-going)",
        heroImage: "https://iili.io/3i3tnt.jpg",
        about: {
          brief: "Desktop task app is actually a simple todo-list project which I intend to scale in the near future, hopefully with other fellow developers. Altho many todo app is already up in the market, I still want to create a todo-app that is very easy to use with simple clean UI.",
          features: "Add task, Add category, Add list, Schedule, Add notes",
          technology: "SASS, Vanilla JS",
        },
        featureImages: ["https://iili.io/3idoSR.png"],
        preview: {
          description: "The app is not yet finished, but I want fellow developers who come visit my portfolio site take a look, and who knows, see the potential and collaborate with me to upscale the app in the future.",
          images: ["https://iili.io/3iJayB.png", "https://iili.io/3iJlTP.png", "https://iili.io/3iJYvV.png", "https://iili.io/3iJ7YQ.png", "https://iili.io/3iJHhX.png"],
          link: "https://kennosamulde.github.io/Task-Management-Desktop-App/",
        },
      },
      social: {
        id: 4,
        name: "Our App",
        url: "our-app",
        title: "Our App - Social Media Web App",
        heroImage: "https://iili.io/3iC2CN.jpg",
        about: {
          brief: "Our App is just like any common apps today, it has follow capabilities, search for posts, login and sign up pages, live chat and people can create, edit or delete their posts. Bootstrap is used as framework for UI. The app is powered by back-end technologies such as, Node Js and Express Js.It has live chat and live search capabilities as well.",
          features: "Live Chat, CRUD, Follow, Form Validations, Live Search",
          technology: "React, Node Js, MongoDB Atlas, Express Js, Socket.io, Webpack, React Hooks, Heroku, Babel, Axios, Bootstrap",
        },
        featureImages: ["https://iili.io/3iqv5J.png", "https://iili.io/3iqOUg.png"],
        preview: {
          description: "Our app is powered by Node js, Express and MongoDB atlas, almost a full-stack app. My back end skills are on the working knowledge level as of now, thus most of the functionalities are basic. The main goal of this app is not UI design but more on the technical side. I'll be working on its UI in the near future for the updated version. ",
          images: ["https://iili.io/3iqN0F.png", "https://iili.io/3iqwf1.png", "https://iili.io/3iqhiP.png", "https://iili.io/3iqXWB.png", "https://iili.io/3iqkJa.png"],
          link: "https://fullstack-js-app.herokuapp.com/",
        },
      },
    }
  }

  render() {
    const keys = Object.keys(this.state)
    const projects = keys.map((key) => {
      return this.state[key]
    })

    return (
      <StateContext.Provider value={projects}>
        <div className="App">
          <Cursor />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:project" component={ProjectPage} />
          </Switch>
          <Footer />
        </div>
      </StateContext.Provider>
    )
  }
}

export default App
