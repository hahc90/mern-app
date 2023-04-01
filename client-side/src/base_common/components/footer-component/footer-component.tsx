import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStackOverflow, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { useAddNewEmailToNewsletterListQuery } from '../../api/newsletterApi';

const FooterComponent = () => {
  return (
	<footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to my newsletter</h5>
          <p>Recieve updated information about my work!</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="email" pattern=".+@globex\.com" className="form-control" placeholder="Email address" required/>
            <button className="btn btn-primary" type="button" onClick={ useAddNewEmailToNewsletterListQuery } >Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Timbo's Digital Solutions, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="/"><FontAwesomeIcon icon={ faHomeUser } /></a></li>
		<li className="ms-3"><a className="link-dark" href="https://www.linkedin.com/in/hector-alexis-hechavarria-cuba/" target="blank"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
		<li className="ms-3"><a className="link-dark" href="https://github.com/hahc90" target="blank"><FontAwesomeIcon icon={ faGithub } /></a></li>
		<li className="ms-3"><a className="link-dark" href="https://gitlab.com/hahc90" target="blank"><FontAwesomeIcon icon={ faGitlab } /></a></li>
		<li className="ms-3"><a className="link-dark" href="https://stackoverflow.com/users/12293164/hector-alexis-hechavarria-cuba" target="blank"><FontAwesomeIcon icon={ faStackOverflow } /></a></li>
      </ul>
    </div>
  </footer>
  )
}

export default FooterComponent