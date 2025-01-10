const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios')

const util = require('./utils')

const GUESTBOOK_API_ADDR = process.env.GUESTBOOK_API_ADDR

const BACKEND_URI = `http://${GUESTBOOK_API_ADDR}/messages`

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

const router = express.Router()
app.use(router)

app.use(express.static('public'))
router.use(bodyParser.urlencoded({ extended: false }))



// 환경변수 검증
if(!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

if(!process.env.GUESTBOOK_API_ADDR) {
  const errMsg = "GUESTBOOK_API_ADDR environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

// 환경변수로 포트해주는거
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

// PATCH 요청: tracknum으로 조회 후 views 증가
router.patch("/:tracknum", async (req, res) => {
  const { tracknum } = req.params;

  if (!tracknum) {
    return res.status(400).send("tracknum is required");
  }

  try {
    // 백엔드 API 호출
    const response = await axios.patch(`${BACKEND_URI}/${tracknum}`);
    console.log(`PATCH request successful for tracknum ${tracknum}:`, response.data);

    // 성공적으로 업데이트된 데이터를 반환
    res.json(response.data);
  } catch (error) {
    console.error(`Error in PATCH request for tracknum ${tracknum}:`, error.message);
    res.status(500).send(`Error updating views for tracknum ${tracknum}: ${error.message}`);
  }
});


// 백엔드로 부터 가져오는거
router.get("/", (req, res) => {
   
    axios.get(BACKEND_URI)
      .then(response => {
        console.log(`response from ${BACKEND_URI}: ` + response.data)
        const result = util.formatMessages(response.data)
        res.render("home", {messages: result})
      }).catch(error => {
        console.error('error: ' + error)
    })
});

router.get('/refresh-list', async (req, res) => {
  try {
      const response = await axios.get(BACKEND_URI); // 백엔드에서 데이터 가져오기
      const result = util.formatMessages(response.data); // 메시지 데이터 포맷팅
      res.render('list', { messages: result }); // list.pug 렌더링
  } catch (error) {
      console.error('Error fetching list:', error.message);
      res.status(500).send('Error loading list');
  }
});


//버튼눌러서 백엔드에 제출할 떄 쓰는 것
router.post('/post', (req, res) => {
  console.log(`received request: ${req.method} ${req.url}`)

  // 응답 검증할때
  const title = req.body.title
  const message = req.body.message
  const slength = req.body.slength
  const image = req.body.image
  const mp3 = req.body.mp3
  const tracknum = req.body.tracknum
  const views = req.body.views
  if (!title || title.length == 0) {
    res.status(400).send("title is not specified")
    return
  }

  if (!message || message.length == 0) {
    res.status(400).send("message is not specified")
    return
  }
  
  if (!slength || slength.length == 0) {
    res.status(400).send("slength is not specified")
    return
  }

  if (!image || image.length == 0) {
    res.status(400).send("image is not specified")
    return
  }
  // 백엔드에 보내고 홈페이지로 리다이렉트
  console.log(`posting to ${BACKEND_URI}- name: ${title} artist: ${message} slength: ${slength} image: ${image} mp3: ${mp3} tracknum: ${tracknum} views: ${views}`)
  axios.post(BACKEND_URI, {
    title: title,
    artist: message,
    slength: slength,
    image:image,
    mp3:mp3,
    tracknum:tracknum
  }).then(response => {
      console.log(`response from ${BACKEND_URI}` + response.status)
      res.redirect('/')
  }).catch(error => {
      console.error('error: ' + error)
  })
});
