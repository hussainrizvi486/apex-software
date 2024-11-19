import "./styles/main.css";

import React, { lazy } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { ArrowDown } from "lucide-react";

import { Header, Footer } from "./layouts";
import { Badge } from "./components/ui/Badge";
// const HomePage = lazy(() => import("./pages/home/index"));

const HomePage = React.lazy(() => import("./pages/home"));

function App() {
  const stacks = [
    {
      "label": "Python",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fj0zoSD0e4V7siSTI221US9cMrtjc8A2og&s"
    },
    {
      "label": "Django",
      "image": "https://static.djangoproject.com/img/logos/django-logo-positive.png"
    },
    {
      "label": "Flask",
      "image": "https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png"
    },
    {
      "label": "Tailwind",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
    },
    { "label": "Type Script", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" },
    { "label": "JavaScript", "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { "label": "Node JS", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" },

    {
      "label": "React",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
    },
    { "label": "Redux Toolkit", "image": "https://avatars.githubusercontent.com/u/13142323?v=4" },
    {
      "label": "React Router",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKG9SawQB_Exwr7iYB7SthPF3qYcAAh_dw&s"
    },
    {
      "label": "NEXT. JS",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png"
    },
    {
      "label": "ERPNext",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVAvlskqzddU64bZCIMjpgQ6PBE8UZYdog&s"
    },


    { "label": "Frappe", "image": "https://media.licdn.com/dms/image/v2/D4D12AQFSRzpL1sEOUA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720120405771?e=2147483647&v=beta&t=F2m6Yf67Q2gffJsPh4TmbWGf3KxCI_WEN2TH1zHWhQU" },

  ]
  const services = [
    {
      "title": "Frontend Development",
      "description": "We specialize in creating modular, high-performance web applications for both corporate clients and startups, leveraging modern and reliable technology stacks.",
      "tags": [
        "React JS",
        "JavaScript",
        "TypeScript",
        "CSS",
        "HTML"
      ]
    },
    {
      "title": "Backend Development",
      "description": "We have expertise in developing high-load, complex backend infrastructure for mobile and web applications, as well as enterprise services.",
      "tags": [
        "Python",
        "Django",
        "PostgreSQL",
        "Flask"
      ]
    },
    {
      "title": "Web Development",
      "description": "Our developers craft custom web solutions tailored to your specific needs, designed for seamless integration with popular frameworks like Next.js and Django, and easily adaptable to your existing internal systems.",
      "tags": [
        "Next JS",
        "Django",
        "Firebase",
        "Appwrite"
      ]
    },
    {
      "title": "ERP Development",
      "description": "Our team develops tailored ERP solutions to meet your unique requirements, ensuring seamless integration with leading frameworks like Next.js and Django and smooth compatibility with your existing internal systems.",
      "tags": [
        "ERPNext",
        "Python",
        "JavaScript",
        "Frappe"
      ]
    }
  ]

  return (
    <>
      <Header />
      <HomePage />

      <main>


        <div className="pg--contact-page">
          <div className="app-container">
            <div className="pg-section" >
              <div className="text-content">
                <div className="pg-heading">
                  Let’s build something <br />
                  great together
                </div>
                <div className="text-md mt-4">
                  We believe in turning ideas into reality and we're ready to join your journey. Reach out to us and let's start discussing your project.
                </div>
              </div>
              <div>
                <form className="contact-form pg-form ml-auto">
                  <div className="pg-form__row pg-form__field-container" >
                    <div className="widget-container">
                      <div className="widget-label">
                        First Name
                      </div>
                      <div className="widget-field input">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="widget-container">
                      <div className="widget-label">
                        Last Name
                      </div>
                      <div className="widget-field input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="pg-form__field-container">

                    <div className="widget-container">
                      <div className="widget-label">
                        Company name (optional)
                      </div>
                      <div className="widget-field input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>


                  <div className="pg-form__row pg-form__field-container">
                    <div className="widget-container">
                      <div className="widget-label">
                        Work email
                      </div>
                      <div className="widget-field input">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="widget-container">
                      <div className="widget-label">
                        Phone number
                      </div>
                      <div className="widget-field input">
                        <input type="text" />
                      </div>
                    </div>

                  </div>



                  <div className="pg-form__field-container">
                    <div className="widget-container">
                      <div className="widget-label">
                        Tell us about your project (optional)

                      </div>
                      <div className="widget-field textarea">
                        <textarea rows={6} ></textarea>
                      </div>
                    </div>
                  </div>



                  <div>

                  </div>
                  <button className="btn btn-lg w-full btn-secondary">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>



        <div className="pg--howwebuild-page">
          <div className="app-container">
            <div className="pg-section">
              <Badge>PROCESSES</Badge>

              <h1 className="pg-heading">How we build</h1>
              <div className="how-we-build__container">
                <div className="how-we-build__collapsable">
                  <div className="content">
                    <div className="left">
                      <img src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v4/discovery-stage-icon.png" alt="" />
                    </div>
                    <div className="right">
                      <div>
                        <div className="flex justify-content-between align-items-center">
                          <div className="text-xl font-bold">Discovery Stage</div>
                          <ArrowDown className="icon-md cursor-pointer" />
                        </div>
                        <div className="text-sm mt-3">We prioritize our clients success, understanding your unique needs, and delivering tailored solutions that drive your business growth. The workflow roll-out is usually:</div>
                      </div>

                      <div className="how-we-build__process mt-5">
                        <div className="process ">
                          <div className="font-semibold">2</div>
                          <div className="font-bold">R&D</div>
                        </div>

                        <div className="row">
                          <div className="process">
                            <div className="font-semibold">2</div>
                            <div className="font-bold">R&D</div>
                          </div>
                          <div className="process">
                            <div className="font-semibold">2</div>
                            <div className="font-bold">R&D</div>
                          </div>

                          <div className="process">
                            <div className="font-semibold">1</div>
                            <div className="font-bold">Get to know your project</div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="process">
                            <div className="font-semibold">2</div>
                            <div className="font-bold">R&D</div>
                          </div>

                          <div className="process">
                            <div className="font-semibold">1</div>
                            <div className="font-bold">Get to know your project</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <div className="pg--services-page">
          <div className="app-container">
            <div className="pg-section">
              <div className="pg-heading text-center">Our Stack</div>
              <div className="pg-stack-container">

                <div className="flex justify-content-center flex-warp gap-2 align-items-center">
                  {stacks.map((v, i) => (
                    <StackCard key={i} data={v} />
                  ))}
                </div>


              </div>




            </div>
          </div>
        </div> */}

      </main >
      <Footer />
    </>
  )
}

export default App

const StackCard = ({ data }) => {
  return (
    <div className="flex flex-column align-items-center w-max-content stack-card gap">
      <img src={data.image} alt="" />
    </div>
  )
}


const ServiceCard = ({ data }) => {
  return (
    <div className="flex gap-1 service-card" >
      <div className="left flex-auto">
        <div className="text-xl font-bold">
          {data?.title}
        </div>
        <div className="text-sm mt-3">
          {
            data.description
          }

        </div>
        <div className="flex gap mt-3">
          {
            <Badge>Cultural Fit</Badge>
          }
        </div>

        <div className="mt-3 flex gap">
          <button className="btn btn-sm">Let's chat</button>
          <button className="btn-outline btn btn-sm ">Learn More</button>
        </div>
      </div>

      <div className="right">
        <img src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/about-us-v4/s-3.svg" alt="" />
      </div>
    </div>

  )
}