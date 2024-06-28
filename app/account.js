import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Account.css';
import { faArrowRightToBracket, faKey } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  const logout = () => {
    let keysToRemove = ["token", "kbsEmail", "logoutName"];

    keysToRemove.forEach((k) => {
      localStorage.removeItem(k)
    });

    window.location.href = '/';
  }

  return (
    <section className="acc-s">
      <div className="acc">
        <div className="cnt">
          <article className="card">
            <ul className="list">
              <li>
                <Link href="/changePassword">
                  <FontAwesomeIcon className="icon" icon={faKey} />Change Password
                </Link>
              </li>
              {/* <li>
                <Link href="/profile">
                  <FontAwesomeIcon className="icon" icon={faUserCircle} />View Profile
                </Link>
              </li> */}
              <div className="divider"></div>
              <li >
                <Link href="" onClick={logout}>
                  <FontAwesomeIcon className="icon" icon={faArrowRightToBracket} />Logout
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Account
