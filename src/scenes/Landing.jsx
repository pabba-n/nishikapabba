import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion"
import headshot from "../assets/headshot.jpg"
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-10 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 before:absolute before:-top-20 before:-left-20 
            before:w-full before:max-w-[450px] md:before:max-w-[450px] before:h-full before:bg-gradient-rainbow before:z-[-4]"
          >
            <div id="black-box" className="absolute bottom-12 right-12 -top-12 inline-block bg-black w-full z-[-1]"/>
            <img
              alt="headshot"
              className="hover:filter hover:scale-105 transition duration-500 z-10 w-full max-w-[450px] md:max-w-[450px]"
              src={headshot}
            />
          </div>

        ) : (
          <img
            alt="headshot"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={headshot}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-0 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >

            <div className="font-dangrek text-4xl text-white md:text-5xl">
            hi, i&apos;m <br className="block md:hidden" />
            <span className="relative leading-loose">
                <span className="h-18 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                nishika!<span className="text-3xl md:text-5xl">{"   "}👋</span>
                </span>
                <span
                    id="cursor"
                className={`absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change`}
                ></span>
            </span>
            <div className="mt-5 mb-5 text-xl font-barlow text-start md:w-[80%] text-pale-pink">
                    <p> I'm a computer science and community health student with interests in software engineering and healthtech.</p></div>
            </div>
        </motion.div>
        <motion.div 
            className="flex mt-5 justify-center md:justify-start md:ml-[25%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}>
            <SocialMediaIcons/>
        </motion.div>



      </div>
    </section>
    )
}

export default Landing;