import "twin.macro";
import { useEffect, useState } from "react"
import AvatarEditor from 'react-avatar-editor'
const Pad = ({ zoom, border }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return (
        <AvatarEditor
            scale={zoom}
            height={windowSize.height - 158}
            width={windowSize.width - 150}
            tw="mx-auto bg-black"
            borderRadius={border}
            image="https://images.unsplash.com/photo-1620307813776-d11c11723100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80"
            border={50} />
    )
}
export default Pad;