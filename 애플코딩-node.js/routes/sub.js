const router = require("express").Router();

router.get("/sports", function (요청, 응답) {
  응답.send("스포츠파는페이지");
});

router.get("/game", function (요청, 응답) {
  응답.send("게임파는페이지");
});

module.exports = router;
