import contact from './contactData'
import './RenderContact.css'

export default function RenderContact() {
  let user = contact.users.find((el) => el.userId === 1)
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={user.github_url}>
          <i className="bi bi-github"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={user.linkedin_url}>
          <i className="bi bi-linkedin"></i>
        </a>
      </li>
    </>
  )
}
