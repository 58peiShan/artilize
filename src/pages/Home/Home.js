//首頁
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import userIcon from '../../images/userIcon.svg'
import '../../styles/Home.scss'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import CountUp from 'react-countup'
import HomeSwiper1 from '../../images/homeSwiper1.svg'
import HomeSwiper2 from '../../images/homeSwiper2.svg'
import HomeSwiper3 from '../../images/homeSwiper3.svg'
import HomeSwiperRight1 from '../../images/homeSwiper1Right.svg'
import HomeSwiperRight2 from '../../images/homeSwiper2Right.svg'
import HomeSwiperRight3 from '../../images/homeSwiper3Right.svg'
import HomeSwiperLeft1 from '../../images/homeSwiper1left.svg'
import HomeSwiperLeft2 from '../../images/homeSwiper2left.svg'
import HomeSwiperLeft3 from '../../images/homeSwiper3left.svg'
import Rank1 from '../../images/Rank1.svg'
import Rank2 from '../../images/Rank2.svg'
import Rank3 from '../../images/Rank3.svg'
import HomeHotSale1 from '../../images/homeHotSale1.svg'
import HomeHotSale2 from '../../images/homeHotSale2.svg'
import HomeHotSale3 from '../../images/homeHotSale3.svg'
import HomeSologan from '../../images/homeSologan.svg'
import HomeTour from '../../images/homeTour.jpg'
import HomeSponsor1 from '../../images/homeSponsor1.png'
import HomeSponsor2 from '../../images/homeSponsor2.png'
import HomeSponsor3 from '../../images/homeSponsor3.png'
import HomeSponsor4 from '../../images/homeSponsor4.png'
import HomeSponsor5 from '../../images/homeSponsor5.png'
import HomeSponsor6 from '../../images/homeSponsor6.png'
import HomeSponsor7 from '../../images/homeSponsor7.png'
import HomeSponsor8 from '../../images/homeSponsor8.png'
import HomeSponsor9 from '../../images/homeSponsor9.png'
import HomeSponsor10 from '../../images/homeSponsor10.png'
import HomeSponsor11 from '../../images/homeSponsor11.png'
import HomeSponsor12 from '../../images/homeSponsor12.png'
import HomeMuseum1 from '../../images/homeMuseum1.svg'
import HomeMuseum2 from '../../images/homeMuseum2.svg'
import HomeMuseum3 from '../../images/homeMuseum3.svg'
import HomeMuseum4 from '../../images/homeMuseum4.svg'
import HomeMuseum5 from '../../images/homeMuseum5.svg'
import HomeMuseum6 from '../../images/homeMuseum6.svg'
import HomeMuseum7 from '../../images/homeMuseum7.svg'
import HomeMuseum8 from '../../images/homeMuseum8.svg'
import HomeMuseum9 from '../../images/homeMuseum9.svg'
import HomeMuseum10 from '../../images/homeMuseum10.svg'

function Home(props) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      {/* <div>首頁</div>
      <Link to="/search">全站搜尋頁</Link>
      <br />
      <Link to="/users">會員資料</Link>
      <br />
      <Link to="/exhibition">展覽</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/forum">討論區</Link>
      <br />
      <Link to="/b2b">廠商後臺</Link>
      <br />
      <h1>
        <Link to="/style">樣式</Link>
      </h1> */}
      <Header />
      <section>
        <Container fluid>
          <Row>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'1'}
              loop={true}
              autoplay={{
                display: 2500,
                disableOnInteraction: false,
                allowTouchMove: false,
                // pauseOnMouseEnter: true,
              }}
              allowTouchMove={false}
              style={{ height: 466 }}
              className="ps-0 pe-0 align-self-end homeSwiperLeft"
            >
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperLeft1} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperLeft2} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperLeft3} alt=""></img>
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'1'}
              // navigation
              loop={true}
              autoplay={{
                display: 2500,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
              }}
              // pagination={{ clickable: true }}
              allowTouchMove={false}
              style={{ height: 890 }}
              className="ps-0 pe-0 homeSwiper"
            >
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiper1} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiper2} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiper3} alt=""></img>
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                display: 2500,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
              }}
              allowTouchMove={false}
              style={{ height: 547 }}
              className="ps-0 pe-0 homeSwiperRight"
            >
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperRight1} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperRight2} alt=""></img>
              </SwiperSlide>
              <SwiperSlide className="swiperImg">
                <img src={HomeSwiperRight3} alt=""></img>
              </SwiperSlide>
            </Swiper>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="homeMap">
          <Row>
            <div>
              <Container className="homeMapInside d-flex flex-column  justify-content-center">
                <div className="d-flex align-items-center">
                  <CountUp start={0} end={1689} delay={0} duration={5}>
                    {({ countUpRef }) => (
                      <h1 className="ExtraBold">
                        <span ref={countUpRef} />
                      </h1>
                    )}
                  </CountUp>
                  <h5 className="ExtraBold ">
                    場展覽在此舉
                    <br />行
                  </h5>
                </div>
                <div className="d-flex homeMapButton justify-content-between ">
                  <button className=" btn btn-primary">
                    <h2>關鍵字搜尋</h2>
                  </button>
                  <button className=" btn ">
                    <h2>地圖搜尋</h2>
                  </button>
                </div>
                <div className="homeMapSearchBar d-flex  align-items-stretch">
                  <form className="d-flex align-items-center justify-content-center ">
                    <input type="search" placeholder="" />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="homeRank">
          <Row>
            <div>
              <Container className="d-flex">
                <div className="d-flex flex-column justify-content-center homeRankContainer align-items-center">
                  <div className="homeRankHeader">
                    <h1 className="SemiBold">
                      <span>展覽活動排行榜</span>
                    </h1>
                  </div>
                  <h6 className="mt-3">
                    此時此刻最熱門的展覽，活動與藝術家介紹
                  </h6>
                  <button className="btn d-flex justify-content-between align-items-center">
                    <h6>更多展覽活動</h6>
                  </button>
                </div>
                <div className="homeRank123">
                  <ul className="d-flex justify-content-end">
                    <li className="align-self-end">
                      <Link to="*">
                        <figure>
                          <img src={Rank1} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">塩田千春：顫動的靈魂</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li className="align-self-center ms-4 me-4">
                      <Link to="*">
                        <figure>
                          <img src={Rank2} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">挑戰—安藤忠雄展</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li className="align-self-baseline mt-4">
                      <Link to="*">
                        <figure>
                          <img src={Rank3} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">缺席 洪鈞元個展</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="d-flex flex-column homeHotSale">
            <div
              className=" d-flex justify-content-center align-items-end"
              style={{ height: '131px' }}
            >
              <h1 className="SemiBold">熱銷商品</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center homeHotSaleCardGroup">
              <Link to="*">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale1}
                    style={{ height: '350px' }}
                  />
                  <Card.Body style={{ padding: '16px 16px' }}>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          日常展 - 365天日記
                        </h6>
                        <h5 className="SemiBold">NT$ 150</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to="*">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale2}
                    style={{ height: '350px' }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          迷你擺飾-迷你圓滿博古架文物組
                        </h6>
                        <h5 className="SemiBold">NT$ 980</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to="">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale3}
                    style={{ height: '350px' }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          郎世寧系列·吉鶴歲 萬用袋(單色6入)
                        </h6>
                        <h5 className="SemiBold">NT$ 220</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <div className="homeSologan d-flex justify-content-between align-items-center">
              <div className="ms-5">
                <h5 className="ExtraBold">為你的生活上色，綻放..</h5>
                <h1 className="ExtraBold">自我的光彩</h1>
              </div>
              <div>
                <img src={HomeSologan} alt=""></img>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="homeTour d-flex justify-content-between">
            <div className="align-self-center">
              <img src={HomeTour} alt=""></img>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-around">
              <h1 className="SemiBold">導覽服務</h1>
              <h4 className="Regular">
                由館方專員為您解說，以最簡單有趣的方式，帶您認識博物館的館藏、歷史、文化及作品。
              </h4>
              <h4 className="Regular">
                歡迎報名參加，凡線上報名者皆可參與抽獎
              </h4>
              <button className="btn btn-primary">報名</button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <div className="homeApp"></div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="homeSponsor d-flex flex-column justify-content-between mt-5">
            <h1 className="SemiBold">合作單位</h1>
            <div className="row-cols-6">
              <div className="card">
                <img
                  src={HomeSponsor1}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 160, height: 160 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor2}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 160, height: 160 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor3}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 160 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor4}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 120, height: 120 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor5}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 120, height: 90 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor6}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 60, height: 90 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor7}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 160, height: 160 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor8}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor9}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 120, height: 120 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor10}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 120, height: 120 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor11}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 160 }}
                />
              </div>
              <div className="card">
                <img
                  src={HomeSponsor12}
                  className="card-img-top"
                  alt="..."
                  style={{ width: 120, height: 120 }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="homeMuseum ">
            <div className="d-flex justify-content-end">
              <h1 className="SemiBold">夥伴館所</h1>
            </div>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mt-5"
            >
              <SwiperSlide className="homeMuseumSwiperSlide">
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum1} alt=""></img>
                  </div>
                  <h6 className="Regular">高雄美術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum2} alt=""></img>
                  </div>
                  <h6 className="Regular">奇美博物館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum3} alt=""></img>
                  </div>
                  <h6 className="Regular">台北當代藝術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum4} alt=""></img>
                  </div>
                  <h6 className="Regular">故宮博物院</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum5} alt=""></img>
                  </div>
                  <h6 className="Regular">台北美術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum6} alt=""></img>
                  </div>
                  <h6 className="Regular">台中美術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum7} alt=""></img>
                  </div>
                  <h6 className="Regular">蘭陽博物館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum8} alt=""></img>
                  </div>
                  <h6 className="Regular">北師美術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum9} alt=""></img>
                  </div>
                  <h6 className="Regular">嘉義美術館</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="homeMuseumCircle d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <img src={HomeMuseum10} alt=""></img>
                  </div>
                  <h6 className="Regular">澎湖生活博物館</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="homeFooter d-flex justify-content-end align-items-center ">
            <div className="d-flex flex-column">
              <div className="align-self-center">
                <h1 className="SemiBold">立即加入最受歡迎的展覽售票平台</h1>
                <h4 className="SemiBold">讓您的展覽被更多人看到</h4>
              </div>
              <div className="align-self-end">
                <button className="btn ">
                  <h2 className="Regular">成為夥伴</h2>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Home
