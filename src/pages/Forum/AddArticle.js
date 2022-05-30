//新增文章
import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'
import { Link, useHistory } from 'react-router-dom'
// import tinymce from 'tinymce/tinymce'
import { Editor } from '@tinymce/tinymce-react'
import { Form, Button, Alert } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import BackBtn from '../../component/BackBtn'

function AddArticle(props) {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  //TinyMCE setting
  const editorRef = useRef(null)
  const [show, setShow] = useState(false)
  const created_time = new Date()
  const [content_msg, setContent_msg] = useState("")
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [ChioseCategory, setChioseCategory] = useState("")

  const categoryChoice = category.map((v, i) => {
    return (
      <>
        <option key={i} value={category[i].sn}>
          {category[i].thema}
        </option>
      </>
    )
  })

  let body = {
    "title": title,
    "content": content,
    "category": ChioseCategory,
    "userid": props.id
  }
  // 新增文章
  function postArticle(e) {
    e.preventDefault();
    let isPass = true; // 有沒有通過檢查
    setContent_msg(""); // 清空訊息

    //表單資料送出之前, 做格式檢查
    if (content.length < 50) {
      isPass = false;
      setContent_msg('討論區字數需50字以上，請重新輸入')
    }
    if (isPass) {
      setShow(true)
      Swal.fire({
        title: '確定新增討論?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4153bb',
        cancelButtonColor: '#f4b942',
        confirmButtonText: '確定'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/forum/addarticle`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(body)
          })
            .then(json => console.log(json))
          Swal.fire(
            '新增成功!',
            '',
            'success'
          ).then(goBack())
            .catch(err => console.log(`沒有成功新增，因為${err}`));
        }
      })
    }
  }


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
      })
  }, [])


  return (
    <>
      <Header />
      <BackBtn />
      <div className="container">
        <div className="frContent">
          <h3>新增討論</h3>
          <form method="post" enctype="multipart/form-data" action={`${process.env.REACT_APP_API_URL}/upload`}>
            <input type="file" name="abc"></input>
            <input type="submit" value="Submit"></input>
          </form>
          <form name='articleForm'>
            <Form.Control
              value={title}
              name="title"
              className="my-5"
              size="lg"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <Form.Control
              value={content}
              form='articleForm'
              neme="content"
              style={{ height: '300px' }}
              as='textarea'
              onChange={(e) => setContent(e.target.value)}
            /> */}
            <div style={{ color: 'red' }}>{content_msg}</div>
            <Editor
              id='inputContent'
              onEditorChange={(e) => setContent(editorRef.current.getContent())}
              //value={content}file_picker_types: 'image',
              apiKey="e4s1xgrvd4r96o20xx1rznb6s86xopp4ex9qrle63uvyvhoq"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                automatic_uploads: true,
                file_picker_types: 'image',
                images_upload_handler: function (blobInfo, succFun, failFun) {
                  var xhr, formData;
                  var file = blobInfo.blob();//转化为易于理解的file对象
                  xhr = new XMLHttpRequest();
                  xhr.withCredentials = false;

                  xhr.open('POST', `${process.env.REACT_APP_API_URL}/upload`);
                  xhr.onload = function () {
                    var json;
                    if (xhr.status != 200) {
                      failFun('HTTP Error: ' + xhr.status);
                      return;
                    }
                    json = JSON.parse(xhr.responseText);

                    if (!json || json.status != 1) {
                      failFun('Invalid JSON: ' + xhr.responseText);
                      return;
                    }
                    var fullImgUrl = json.data.full_url;
                    succFun(fullImgUrl);
                  };
                  formData = new FormData();
                  formData.append('file', file, file.name);
                  xhr.send(formData);
                },
                //处理表单ajax提交不保存信息的情况
                setup: function (editor) {
                  editor.on('change', function () { editor.save(); });
                },
                height: 600,
                menubar: false,
                language: 'zh_TW',
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'fullscreen',
                  'insertdatetime',
                  'table',
                  'preview',
                  'wordcount',
                ],
                toolbar:
                  'undo redo | blocks | image | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style:
                  "body { font-family: 'Noto Sans TC', sans-serif; font-size:14px }",
              }}
            />
            <div className="container">
              <div className="row mx-auto">
                <Form.Select id='pp' className="mt-5" aria-label=""
                  onChange={(e) => setChioseCategory(e.target.value)}>
                  <option>文章分類</option>
                  {categoryChoice}
                </Form.Select>
                <Button onClick={postArticle} variant="primary col-sm-12 col-md-5 rounded-pill my-5 mx-auto">
                  新增討論
                </Button>
              </div>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddArticle