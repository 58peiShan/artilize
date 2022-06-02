import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in/lib/FadeIn'
import CommentCount from './CommentCount'
function Article(props) {
  const articleDetails = props.articDetails
  console.log(articleDetails)

  const article = articleDetails.map((v, i) => {
    return (
      <FadeIn key={i}>
        <div className="perContentHead my-4 d-flex justify-content-between">
          <div className="text-start d-flex align-items-center ">
            <div>
              <img
                className="avatar m-1"
                src="https://picsum.photos/id/222/200"
                alt=""
              />
              <p className="pBig text-center">{articleDetails[i].nickname}</p>
            </div>
            <Link
              to={`/forum/${articleDetails[i].article_id}`}
              className="h5 ExtraBold mx-auto ms-2 mb-0 title "
            >
              {articleDetails[i].title}
            </Link>
          </div>
          <div>
            <p className="category pBig">{articleDetails[i].thema}</p>
          </div>
        </div>
        <div
          className="preViewContent pb-3"
          dangerouslySetInnerHTML={{ __html: `${articleDetails[i].content}` }}
        ></div>
        <div className="social d-flex justify-content-between align-items-center">
          <time>{articleDetails[i].created_time}</time>
          <div className="d-flex align-items-center">
            <CommentCount num={articleDetails[i].article_id} />
            <div className="p-2"></div>
            <FaStar
              className={`${articleDetails[i].favorited ? 'likeIt' : ''}`}
            />
          </div>
        </div>
        <hr />
      </FadeIn>
    )
  })
  return <>{article}</>
}

export default Article
