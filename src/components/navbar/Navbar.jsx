import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale: 0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 0.5}}
            >Akash Babu</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/akashbabu46/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/Akash4693"><img src="https://res.cloudinary.com/dajlabmrb/image/upload/v1713021018/github-mark-white_wbb8t5.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar