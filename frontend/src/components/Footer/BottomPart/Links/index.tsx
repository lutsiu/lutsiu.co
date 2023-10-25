import { Link } from "react-router-dom";

export default function Links() {

  return (
    <ul className="flex gap-[2rem] text-2xl lg:text-4xl flex-wrap justify-center">
      <li>
        <Link to="/services" className="hover:text-gray-400 duration-200">Services</Link>
      </li>
      <li>
        <Link to="/work" className="hover:text-gray-400 duration-200">Work</Link>
      </li>
      <li>
        <Link to="/blog" className="hover:text-gray-400 duration-200">Blog</Link>
      </li>
      <li>
        <Link to="/culture" className="hover:text-gray-400 duration-200">Culture</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-400 duration-200">Contact</Link>
      </li>
    </ul>
  )
}