import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = () => {
    return(<footer className="h-24 mt-auto">
    <div className="w-10/12 mx-auto">
      <div className="md:flex justify-center md:justify-between text-center mt-6">
        <p className="font-barlow text-2xl text-pale-green mt-3">
          NISHIKA PABBA
        </p>
        
        <p className="font-dangrek text-md text-yellow mt-3">
          ©2023 Pabba. All Rights Reserved.
        </p>
        <SocialMediaIcons/>
      </div>
      
    </div>
    
  </footer>);
}

export default Footer;