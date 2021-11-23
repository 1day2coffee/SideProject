const router = require("express").Router();

router.get("/shirts", function (요청, 응답) {
  응답.send("셔츠파는페이지");
});

module.exports = router;
