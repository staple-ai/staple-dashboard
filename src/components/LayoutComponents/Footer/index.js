import React from 'react'
import { Button } from 'antd'
import './style.scss'

class AppFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__bottom">
          <div className="row">
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6">
              <div className="footer__copyright">
                <img
                  src="resources/images/staple_logo.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Staple AI Pte Ltd"
                />
                <span>
                  © 2018{' '}
                  <a href="http://staple.io/" target="_blank" rel="noopener noreferrer">
                    Staple AI Pte. Ltd.
                  </a>
                  <br />
                  All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppFooter
