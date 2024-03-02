import React from "react";
import { NavLink } from "react-router-dom";
import Form from "./Form";

export default function Home() {

    const msjInfo = `"Con tu ayuda, podemos construir un mundo donde la salud sea un derecho para todos."`;


  return (
<>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#0F9818-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#EAE3D9" />
                  <stop offset="1" stop-color="#EAE3D9" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Campaña por el cuidado de la salud mental
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                {msjInfo}{" "}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <NavLink to={"/Form"}>
                  <a className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Comenzar
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="flex items-center object-contain justify-center mx-2  w-[35rem] rounded-md"
                src={process.env.PUBLIC_URL + "/images/relax.jpg"}
                alt="App screenshot"
                style={{ width: "100%", height: "80%", marginTop: "20%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
