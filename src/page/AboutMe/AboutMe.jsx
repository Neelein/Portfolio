import React from 'react'
import './aboutMe.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

const AboutMe = () => {
  return (
    <>
      <Sidebar/>
      <div className='aboutMe'>
        <div className="aboutMe__wrapper">
          <div className="top">
            <div className="about__card">
              <div className="card__wrapper">
                <div className="title">
                  <h2>家庭背景</h2>
                </div>
                <div className="desc">
                  <p>我是台灣混尼泊爾的混血兒，從小我就受到了兩種不同的文化與觀點影響，所以對於來自不同文化或觀點跟我有所差異得人我都保持著開放的態度，而我也非常樂意討論以及分享自己的觀點．</p>
                </div>
                <div className="icon__container"><img src='asset/images/home-house.png' alt="" /></div>
              </div>
            </div>
            <div className="about__card">
              <div className="card__wrapper">
                <div className="title">
                  <h2>求學歷程</h2>
                </div>
                <div className="desc">
                  <p>我是就讀於虎尾科技大學光電工程系，大學時期的專題是研究透明導電薄膜的技術，那會想轉往前端工程師是因為大學時期有修程式語言以及單晶片的課程，發現自己對程式還蠻有興趣的，在資管系的朋友建議下決定轉職成前端工程師．</p>
                </div>
                <div className="icon__container"><img src='asset/images/student-boy.png' alt="" /></div>
              </div>
            </div>
            <div className="about__card">
              <div className="card__wrapper">
                <div className="title">
                  <h2>未來展望</h2>
                </div>
                <div className="desc">
                  <p className='plan'><big>短期:</big>我想學習像Tailwind css 這種前端框架讓開發網頁可以節省個多時間</p>
                  <p className='plan'><big>中期:</big>我想多做一些像MERN STACK 這種 FULL STACK 專案讓自己可以學習一些API的開發跟後端的東西</p>
                  <p className='plan'><big>長期:</big>學習Next.js框架</p>
                </div>
                <div className="icon__container"><img src='asset/images/realtime.png' alt="" /></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="skill__wrapper">
              <div className="title">
                <div className="title__icon">
                  <img src='asset/images/mind.png' alt="" />
                </div>
                <h1>Skill</h1>
              </div>
              <div className="skill__icon-container">
                <div className="skill__icon">
                  <img src='asset/images/html.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/css.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/javascript.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/node-js.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/react-js.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/redux.png' alt="" />
                </div>
                <div className="skill__icon">
                  <img src='asset/images/sass.png' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
