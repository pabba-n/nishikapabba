import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

const SocialMediaIcons = () => {
    return (
        <div className="justify-center flex gap-8 mt-3"><a href="https://www.linkedin.com/in/nishika-pabba/" target="_blank" rel="noreferrer"><img alt="linkedin"  src={linkedin}/></a><a href="https://github.com/pabba-n/" target="_blank" rel="noreferrer"><img alt="github" src={github}/></a></div>
    )
}

export default SocialMediaIcons;