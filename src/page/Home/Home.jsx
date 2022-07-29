import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__wrapper">
        <div className="left">
          <div className="auth-introduce">
            <div className="title">
              <h2>你好！</h2>
              <h1>我是 <span>沙伲連</span></h1>
              <p>前端工程師/網頁開發者</p>
            </div>
            <div className="desc">
              持續努力的學習著前端工程的各種技術，勇於面對各種未知以及挑戰
            </div>
            <Link to='/AboutMe' className='link'><div className="button">MORE ABOUT ME</div></Link>
          </div>
        </div>
        <div className="right">
          <div className="picture">
            <img src='asset/images/homePicture.png' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
