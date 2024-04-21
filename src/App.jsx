import './App.css';
import Card from './components/card';
import windowIcon from './assets/window.svg';
import layerIcon from './assets/layer.svg';
import terminalIcon from './assets/terminal.svg';
import Banner from './components/banner';
import Nav from './components/nav';
import Form from './components/form';
import React from 'react';



function App() {
  let featuresData = [
    {
      image: windowIcon,
      title: "Fully Responsive",
      description: "This theme will look great on any device, no matter the size!",
      type: "features"
    },
    {
      image: layerIcon,
      title: "Bootstrap 5 Ready",
      description: "Featuring the latest build of the new Bootstrap 5 framework!",
      type: "features"
    },
    {
      image: terminalIcon,
      title: "Easy to Use",
      description: "Ready to use with your own content, or customize the source files!",
      type: "features"
    }
  ];
  let testimonoial = [
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
      title: "Margret E.",
      description: "This is fantastic! Thanks so much guys!",
      type: "review"
    },
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
      title: "Fred S.",
      description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
      type: "review"
    },
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
      title: "Sarah W.",
      description: "Thanks so much for making these free resources available to us!",
      type: "review"
    }
  ]
  return (
    <div className='d-flex gap-2 flex-column'>
      <Nav type={"header"} />
      <Form title={"Generate more leads with a professional landing page!"} pos={"top"} />
      <div className='cards d-flex justify-content-evenly'>
        {featuresData.map((val) => (
          <Card {...val} key={val.title} />
        )
        )}
      </div>
      <Banners />
      <div className="d-flex flex-column gap-5">
        <div className='h4 text-center'>What people are saying...</div>
        <div className='cards d-flex justify-content-evenly'>
          {testimonoial.map((val) => (
            <Card {...val} key={val.title} />
          )
          )}
        </div>
      </div>
      <Form title={"Ready to get started? Sign up now!"} pos={"bottom"} />
      <div>
        <Nav type={"footer"} />
      </div>
    </div>
  )
}

// function Cards(){
//   let featuresData = [
//     {
//       image : windowIcon,
//       title : "Fully Responsive",
//       description : "This theme will look great on any device, no matter the size!",
//       type : "features"
//     },
//     {
//       image : layerIcon,
//       title : "Bootstrap 5 Ready",
//       description : "Featuring the latest build of the new Bootstrap 5 framework!",
//       type : "features"
//     },
//     {
//       image : terminalIcon,
//       title : "Easy to Use",
//       description : "Ready to use with your own content, or customize the source files!",
//       type : "features"
//     }
//   ];
// let testimonoial = [
//   {
//     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
//     title: "Margret E.",
//     description: "This is fantastic! Thanks so much guys!",
//     type: "review"
//   },
//   {
//     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
//     title: "Fred S.",
//     description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
//     type: "review"
//   },
//   {
//     image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
//     title: "Sarah W.",
//     description: "Thanks so much for making these free resources available to us!",
//     type: "review"
//   }
// ]
//   return (
//     <>
//       <div className='cards'>
//         {obj2.map((val) => (
//           <Card {...val} key={val.title}/>
//         )
//         )}
//       </div>
//     </>
//   )
// }
function Banners() {
  let obj = [
    {
      title: "Fully Responsive Design",
      description: "When you use a theme created by Start Bootstrap, \
                    you know that the theme will look great on any device, \
                    whether it's a phone, tablet, or desktop the page will behave responsively!",
      type: "description"
    },
    {
      type: "image",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
    },
    {
      type: "image",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
    },
    {
      title: "Updated For Bootstrap 5",
      description: "Newly improved, and full of great utility classes, Bootstrap 5 \
                    is leading the way in mobile responsive web development! All of \
                    the themes on Start Bootstrap are now using Bootstrap 5!",
      type: "description"
    },
    {
      title: "Easy to Use & Customize",
      description: "Landing Page is just HTML and CSS with a splash of SCSS for \
                    users who demand some deeper customization options. Out of the box,\
                    just add your content and images, and your new landing page will be ready to go!",
      type: "description"
    },
    {
      type: "image",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
    }
  ];
  return (
    <>
      <div className='banner'>
        {obj.map((val, index) => (
          <Banner {...val} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
