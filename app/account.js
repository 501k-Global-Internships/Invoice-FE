import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from './api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faKey } from '@fortawesome/free-solid-svg-icons';
import './account.css';

const Account = () => {
  const [isPasswordSet, setIsPasswordSet] = useState(false);

  useEffect(() => {
    const checkPasswordSet = async () => {
      try {
        const response = await axios.get('/check-password-set', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.data;
        setIsPasswordSet(data.isPasswordSet);
      } catch (error) {
        console.error('Error checking password set:', error);
      }
    };

    checkPasswordSet();
  }, []);

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
              {isPasswordSet ? (
                <li>
                  <Link href="/changePassword">
                    <FontAwesomeIcon className="icon" icon={faKey} />Change Password
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/resetPasswordEmail">
                    <FontAwesomeIcon className="icon" icon={faKey} />Set Password
                  </Link>
                </li>
              )}
              <div className="divider"></div>
              <li>
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

export default Account;
