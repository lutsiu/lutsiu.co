import { Link } from "react-router-dom";

export default function Links() {

  return (
    <ul className="flex gap-[2rem] text-2xl lg:text-4xl flex-wrap justify-center">
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/culture">Culture</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}