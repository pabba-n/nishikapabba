import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const Experience = () => {
    return(
        <section id="experience" className="pt-10 pb-24 py-48">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
          <p className="font-dangrek text-4xl mb-5">
           <span>EXPERIENCE</span>
          </p>
          <LineGradient width="md:w-1/5" />
          <h1 className="mt-10 font-dangrek font-bold text-2xl">Delfina Care <span className="font-barlow text-sm ml-5 text-pale-blue"> Jun 2022 - Dec 2022</span></h1>
          <p className="mt-5 mb-7 font-barlow text-xl ">
            SOFTWARE ENGINEERING INTERN
            <ul className="ml-5 list-disc ">
                <li>Routed and created new Flutter pages to deliver a better user experience to log health measurements using state management</li>
                <li>Developed an image serializer to fetch and parse in-line images from third-party content management system; updated REST API and used FastAPI to support new features</li>
                <li>Rebuilt blog feature to include in-line images and rich-text to inform users of crucial health information during each stage of the pregnancy</li>
                <li>Obtained debugging and SWE design skills through Python unit testing and Dart developer tools</li>
            </ul>
            
          </p>
          <h1 className="mt-10 font-dangrek font-bold text-2xl">Tufts Jumbocode <span className="font-barlow text-sm ml-5 text-pale-blue"> Oct 2021 - May 2022</span></h1>
          <p className="mt-5 mb-7 font-barlow text-xl">
            FRONT-END DEVELOPER FOR FOOD BRIGADE PROJECT
            <ul className="ml-5 list-disc ">
                <li>Implemented a website with React and CSS to meet the needs of a food pantry non-profit</li>
                <li>Learned UI principles to make design decisions to improve the flow of the website interface</li>
                <li>Utilized git to accomplish compartmentalized engineering tasks in a timely manner</li>
            </ul>
          </p>
          <h1 className="mt-10 font-dangrek font-bold text-2xl">SUNY University at Albany Scimemi Lab <span className="font-barlow text-sm ml-5 text-pale-blue">May 2021 - Aug 2021</span></h1>
          <p className="mt-5 mb-7 font-barlow text-xl ">
            SUMMER ASSISTANT (NSF FELLOW)
            <ul className="ml-5 list-disc ">
                <li>Conducted data analysis and modeling of cells of interest on sagittal brain slices in a fast-paced lab</li>
                <li>Troubleshooted and debugged cell counting software to streamline the process </li>
            </ul>
          </p>
          <h1 className="mt-10 font-dangrek font-bold text-2xl">Cambridge Health Alliance<span className="font-barlow text-sm ml-5 text-pale-blue">Feb 2021 - May 2021</span></h1>
          <p className="mt-5 mb-7 font-barlow text-xl">
            RESEARCH INTERN FOR PRODUCE STUDY
            <ul className="ml-5 list-disc ">
                <li>Studied the public health effects of a free produce market in Revere, MA</li>
                <li>Received Social and Behavioural CITI certification and conducted human subject research by surveying population</li>
                <li>Managed website content about the study and its findings</li>
            </ul>
          </p>
       
      </div>
        </section>
    )
}

export default Experience