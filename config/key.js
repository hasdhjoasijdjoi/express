if (process.env.NODE_ENV === "production") {
  // production 개발 단계에서 process.env값을 가져올수 있음
  module.exports = require("./prod"); // 값이 존재하면 prod.js를 가져온다.
} else {
  module.exports = require("./dev"); // 값이 null이라면 dev.js를 가져온다.
}
