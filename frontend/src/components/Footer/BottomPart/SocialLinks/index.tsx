import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function SocialLink() {

  return (
    <div>
      <Link to={`https://www.linkedin.com/in/sasha-lutsiuk-27862527`} target="_blank">
        <FaLinkedinIn/>
      </Link>
      <Link to={`https://github.com/lutsiu`} target='_blank'>
        <AiFillGithub/>
      </Link >
      <Link to={`https://t.me/lutsiu`} target="_blank">
        <BsTelegram/>
      </Link>
    </div>
  )
}