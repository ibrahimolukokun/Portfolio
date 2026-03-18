"use client";

const DefaultFooter = () => {
  return (
    <footer className="ib-footer">
      <div className="ib-container">
        <div className="ib-footer__inner">
          <p className="ib-footer__copy">
            © {new Date().getFullYear()} Ibrahim Olukokun. All rights reserved.
          </p>
          <ul className="ib-footer__links">
            <li>
              <a
                href="https://github.com/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-footer__link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-footer__link"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ibrahimolukokun"
                target="_blank"
                rel="noopener noreferrer"
                className="ib-footer__link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
