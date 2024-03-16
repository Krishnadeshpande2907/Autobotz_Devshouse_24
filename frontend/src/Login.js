import React from 'react'

import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['login']}>
        <span className={styles['text']}>
          <span>Welcome Back .!</span>
        </span>
        <div className={styles['frame1']}>
          <span className={styles['text02']}>
            <span>Skip the lag ?</span>
          </span>
        </div>
        <img
          src="/ellipse1166-s679-400h.png"
          alt="Ellipse1166"
          className={styles['ellipse1']}
        />
        <img
          src="/ellipse2167-n2wh-300h.png"
          alt="Ellipse2167"
          className={styles['ellipse2']}
        />
        <div className={styles['frame2']}>
          <div className={styles['frame5']}>
            <div className={styles['frame4']}>
              <div className={styles['upper-section']}>
                <div className={styles['logintext']}>
                  <span className={styles['text04']}>
                    <span>Login</span>
                  </span>
                  <span className={styles['text06']}>
                    <span>Glad you’re back.!</span>
                  </span>
                </div>
                <div className={styles['credentials']}>
                  <div className={styles['username']}>
                    <span className={styles['text08']}>
                      <span>Username</span>
                    </span>
                  </div>
                  <div className={styles['password-rem']}>
                    <div className={styles['password']}>
                      <span className={styles['text10']}>
                        <span>Password</span>
                      </span>
                      <img
                        src="/closedeye181-w5irb.svg"
                        alt="closedeye181"
                        className={styles['closedeye']}
                      />
                    </div>
                    <div className={styles['remember']}>
                      <img
                        src="/fluentcheckboxchecked16filled184-pql2.svg"
                        alt="fluentcheckboxchecked16filled184"
                        className={styles['fluentcheckboxchecked16filled']}
                      />
                      <span className={styles['text12']}>
                        <span>Remember me</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles['loginbt-fp']}>
                    <div className={styles['login1']}>
                      <span className={styles['text14']}>
                        <span>Login</span>
                      </span>
                    </div>
                    <span className={styles['text16']}>
                      <span>Forgot password ?</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles['otherlogins']}>
                <div className={styles['or']}>
                  <img
                    src="/line1193-w1p.svg"
                    alt="Line1193"
                    className={styles['line1']}
                  />
                  <span className={styles['text18']}>
                    <span>Or</span>
                  </span>
                  <img
                    src="/line2195-tr4k.svg"
                    alt="Line2195"
                    className={styles['line2']}
                  />
                </div>
                <div className={styles['frame3']}>
                  <img
                    src="/devicongoogle197-vda.svg"
                    alt="devicongoogle197"
                    className={styles['devicongoogle']}
                  />
                  <img
                    src="/logosfacebook1103-r9bqj.svg"
                    alt="logosfacebook1103"
                    className={styles['logosfacebook']}
                  />
                  <img
                    src="/bigithub1106-0wo.svg"
                    alt="bigithub1106"
                    className={styles['bigithub']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['frame9']}>
              <span className={styles['text20']}>
                <span>Don’t have an account ? Signup</span>
              </span>
              <div className={styles['customercare']}>
                <div className={styles['frame6']}>
                  <span className={styles['text22']}>
                    <span>Terms &amp; Conditions</span>
                  </span>
                </div>
                <div className={styles['frame7']}>
                  <span className={styles['text24']}>
                    <span>Support</span>
                  </span>
                </div>
                <div className={styles['frame8']}>
                  <span className={styles['text26']}>
                    <span>Customer Care</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/line31117-k3p5.svg"
          alt="Line31117"
          className={styles['line3']}
        />
      </div>
    </div>
  )
}

export default Login
