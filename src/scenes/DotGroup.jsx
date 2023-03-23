import AnchorLink from "react-anchor-link-smooth-scroll"
const DotGroup = ({selectedPage, setSelectedPage}) => {
    const selectedStyles = `relative bg-pale-blue before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-pale-pink before:left-[-50%]
    before:top-[-50%]`;
    // const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    // before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${
                selectedPage === "home" ? selectedStyles : "bg-pale-blue"} 
                w-3 h-3 rounded-full`}
                href={`#home`}
                onClick={() => setSelectedPage("home")}
            />
            <AnchorLink
                className={`${
                selectedPage === "experience" ? selectedStyles : "bg-pale-blue"} 
                w-3 h-3 rounded-full`}
                href={`#experience`}
                onClick={() => setSelectedPage("experience")}
            />
        </div>
    )
}

export default DotGroup