"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"(api)/./lib/data/user.ts\");\n\nconst Data = {\n  user: _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUVELElBQUlBLCtDQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYWlyYm5iLy4vbGliL2RhdGEvaW5kZXgudHM/YTI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5cbmNvbnN0IERhdGEgPSB7IHVzZXIgfTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YTtcbiJdLCJuYW1lcyI6WyJ1c2VyIiwiRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/user.ts":
/*!**************************!*\
  !*** ./lib/data/user.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//* 유저 리스트 데이터 불러오기\nconst getList = () => {\n  const usersBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/user.json\");\n  const usersString = usersBuffer.toString();\n\n  if (!usersString) {\n    return [];\n  }\n\n  const users = JSON.parse(usersString);\n  return users;\n}; //* email의 유저가 있는지 확인\n\n\nconst exist = ({\n  email\n}) => {\n  const users = getList();\n  return users.some(user => user.email === email);\n}; //* 유저 리스트 저장하기\n\n\nconst write = async users => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/user.json\", JSON.stringify(users));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBO0FBQ0EsTUFBTUUsT0FBTyxHQUFHLE1BQU07RUFDbEIsTUFBTUMsV0FBVyxHQUFHSCxnREFBWSxDQUFDLGdCQUFELENBQWhDO0VBQ0EsTUFBTUksV0FBVyxHQUFHRCxXQUFXLENBQUNFLFFBQVosRUFBcEI7O0VBRUEsSUFBRyxDQUFDRCxXQUFKLEVBQWlCO0lBQ2IsT0FBTyxFQUFQO0VBQ0g7O0VBQ0QsTUFBTUUsS0FBdUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFdBQVgsQ0FBaEM7RUFDQSxPQUFPRSxLQUFQO0FBQ0gsQ0FURCxFQVdBOzs7QUFDQSxNQUFNRyxLQUFLLEdBQUcsQ0FBQztFQUFDQztBQUFELENBQUQsS0FBK0I7RUFDekMsTUFBTUosS0FBSyxHQUFHSixPQUFPLEVBQXJCO0VBQ0EsT0FBT0ksS0FBSyxDQUFDSyxJQUFOLENBQVlDLElBQUQsSUFBVUEsSUFBSSxDQUFDRixLQUFMLEtBQWVBLEtBQXBDLENBQVA7QUFDSCxDQUhELEVBS0E7OztBQUNBLE1BQU1HLEtBQUssR0FBRyxNQUFPUCxLQUFQLElBQW1DO0VBQzdDTCxpREFBYSxDQUFDLGdCQUFELEVBQW1CTSxJQUFJLENBQUNPLFNBQUwsQ0FBZVIsS0FBZixDQUFuQixDQUFiO0FBQ0gsQ0FGRDs7QUFJQSxpRUFBZTtFQUFFSixPQUFGO0VBQVdPLEtBQVg7RUFBa0JJO0FBQWxCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL2xpYi9kYXRhL3VzZXIudHM/NDkzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IFN0b3JlZFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3VzZXJcIjtcblxuLy8qIOycoOyggCDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sFxuY29uc3QgZ2V0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2Vyc0J1ZmZlciA9IHJlYWRGaWxlU3luYyhcImRhdGEvdXNlci5qc29uXCIpO1xuICAgIGNvbnN0IHVzZXJzU3RyaW5nID0gdXNlcnNCdWZmZXIudG9TdHJpbmcoKTtcblxuICAgIGlmKCF1c2Vyc1N0cmluZykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdID0gSlNPTi5wYXJzZSh1c2Vyc1N0cmluZyk7XG4gICAgcmV0dXJuIHVzZXJzO1xufTtcblxuLy8qIGVtYWls7J2YIOycoOyggOqwgCDsnojripTsp4Ag7ZmV7J24XG5jb25zdCBleGlzdCA9ICh7ZW1haWx9IDoge2VtYWlsOiBzdHJpbmd9KSA9PiB7XG4gICAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XG4gICAgcmV0dXJuIHVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsKTtcbn07XG5cbi8vKiDsnKDsoIAg66as7Iqk7Yq4IOyggOyepe2VmOq4sFxuY29uc3Qgd3JpdGUgPSBhc3luYyAodXNlcnM6IFN0b3JlZFVzZXJUeXBlW10pID0+IHtcbiAgICB3cml0ZUZpbGVTeW5jKFwiZGF0YS91c2VyLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TGlzdCwgZXhpc3QsIHdyaXRlIH07XG5cbiJdLCJuYW1lcyI6WyJyZWFkRmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiZ2V0TGlzdCIsInVzZXJzQnVmZmVyIiwidXNlcnNTdHJpbmciLCJ0b1N0cmluZyIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJlbWFpbCIsInNvbWUiLCJ1c2VyIiwid3JpdGUiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/data/user.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"POST\") {\n    const {\n      email,\n      password,\n      firstname,\n      lastname,\n      birthday\n    } = req.body;\n\n    if (!email || !firstname || !lastname || !password || !birthday) {\n      res.statusCode = 400;\n      return res.send('필수 데이터가 없습니다.');\n    }\n\n    const userExist = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.exist({\n      email\n    });\n\n    if (userExist) {\n      res.statusCode = 409;\n      return res.send(\"이미 가입된 이메일입니다.\");\n    }\n\n    const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, 8);\n    const users = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.getList();\n    let userId;\n\n    if (users.length === 0) {\n      userId = 1;\n    } else {\n      userId = users[users.length - 1].id + 1;\n    }\n\n    const newUser = {\n      id: userId,\n      email,\n      firstname,\n      lastname,\n      password: hashedPassword,\n      birthday,\n      profileImage: \"/public/static/image/user/default_user_profile_image.jpg\"\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.write([...users, newUser]);\n    const token = jwt.sign(String(newUser.email), process.env.JWT_SECRET);\n    console.log(token);\n    res.setHeader(\"Set-Cookie\", `access_token=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3).toISOString()}; httponly`);\n    return res.status(200).send(newUser);\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQW5COztBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0VBQ2xFLElBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0lBQ3pCLE1BQU07TUFBRUMsS0FBRjtNQUFTQyxRQUFUO01BQW1CQyxTQUFuQjtNQUE4QkMsUUFBOUI7TUFBd0NDO0lBQXhDLElBQXFEUCxHQUFHLENBQUNRLElBQS9EOztJQUNBLElBQUcsQ0FBQ0wsS0FBRCxJQUFVLENBQUNFLFNBQVgsSUFBd0IsQ0FBQ0MsUUFBekIsSUFBcUMsQ0FBQ0YsUUFBdEMsSUFBa0QsQ0FBQ0csUUFBdEQsRUFBaUU7TUFDL0ROLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtNQUNBLE9BQU9SLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLGVBQVQsQ0FBUDtJQUNEOztJQUlELE1BQU1DLFNBQVMsR0FBR2YsNERBQUEsQ0FBZ0I7TUFBRU87SUFBRixDQUFoQixDQUFsQjs7SUFDQSxJQUFJUSxTQUFKLEVBQWU7TUFDYlYsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT1IsR0FBRyxDQUFDUyxJQUFKLENBQVMsZ0JBQVQsQ0FBUDtJQUNEOztJQUVELE1BQU1JLGNBQWMsR0FBR2pCLHdEQUFBLENBQWdCTyxRQUFoQixFQUEwQixDQUExQixDQUF2QjtJQUVBLE1BQU1ZLEtBQUssR0FBR3BCLDhEQUFBLEVBQWQ7SUFDQSxJQUFJc0IsTUFBSjs7SUFDQSxJQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7TUFDdEJELE1BQU0sR0FBRyxDQUFUO0lBQ0QsQ0FGRCxNQUVPO01BQ0xBLE1BQU0sR0FBR0YsS0FBSyxDQUFDQSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFoQixDQUFMLENBQXdCQyxFQUF4QixHQUE2QixDQUF0QztJQUNEOztJQUVELE1BQU1DLE9BQXVCLEdBQUc7TUFDOUJELEVBQUUsRUFBRUYsTUFEMEI7TUFFOUJmLEtBRjhCO01BRzlCRSxTQUg4QjtNQUk5QkMsUUFKOEI7TUFLOUJGLFFBQVEsRUFBRVUsY0FMb0I7TUFNOUJQLFFBTjhCO01BTzlCZSxZQUFZLEVBQUU7SUFQZ0IsQ0FBaEM7SUFVQTFCLDREQUFBLENBQWdCLENBQUMsR0FBR29CLEtBQUosRUFBV0ssT0FBWCxDQUFoQjtJQUVBLE1BQU1HLEtBQUssR0FBRzFCLEdBQUcsQ0FBQzJCLElBQUosQ0FBU0MsTUFBTSxDQUFDTCxPQUFPLENBQUNsQixLQUFULENBQWYsRUFBZ0N3QixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBNUMsQ0FBZDtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtJQUNBdkIsR0FBRyxDQUFDK0IsU0FBSixDQUNFLFlBREYsRUFFRyxnQkFBZVIsS0FBTSxxQkFBb0IsSUFBSVMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBZixHQUFzQixDQUE1QyxFQUErQ0MsV0FBL0MsRUFBNkQsWUFGekc7SUFLQSxPQUFPbEMsR0FBRyxDQUFDbUMsTUFBSixDQUFXLEdBQVgsRUFBZ0IxQixJQUFoQixDQUFxQlcsT0FBckIsQ0FBUDtFQUNEOztFQUdEcEIsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0VBRUEsT0FBT1IsR0FBRyxDQUFDb0MsR0FBSixFQUFQO0FBQ0QsQ0FwREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFpcmJuYi8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50cz83ZjFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgU3RvcmVkVXNlclR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvdXNlclwiO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgYmlydGhkYXkgfSA9IHJlcS5ib2R5O1xuICAgIGlmKCFlbWFpbCB8fCAhZmlyc3RuYW1lIHx8ICFsYXN0bmFtZSB8fCAhcGFzc3dvcmQgfHwgIWJpcnRoZGF5ICkge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoJ+2VhOyImCDrjbDsnbTthLDqsIAg7JeG7Iq164uI64ukLicpXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IHVzZXJFeGlzdCA9IERhdGEudXNlci5leGlzdCh7IGVtYWlsIH0pO1xuICAgIGlmICh1c2VyRXhpc3QpIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA5O1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi7J2066+4IOqwgOyeheuQnCDsnbTrqZTsnbzsnoXri4jri6QuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCA4KTtcblxuICAgIGNvbnN0IHVzZXJzID0gRGF0YS51c2VyLmdldExpc3QoKTtcbiAgICBsZXQgdXNlcklkO1xuICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVzZXJJZCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJJZCA9IHVzZXJzW3VzZXJzLmxlbmd0aCAtIDFdLmlkICsgMTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdVc2VyOiBTdG9yZWRVc2VyVHlwZSA9IHtcbiAgICAgIGlkOiB1c2VySWQsXG4gICAgICBlbWFpbCxcbiAgICAgIGZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lLFxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgYmlydGhkYXksXG4gICAgICBwcm9maWxlSW1hZ2U6IFwiL3B1YmxpYy9zdGF0aWMvaW1hZ2UvdXNlci9kZWZhdWx0X3VzZXJfcHJvZmlsZV9pbWFnZS5qcGdcIixcbiAgICB9O1xuXG4gICAgRGF0YS51c2VyLndyaXRlKFsuLi51c2VycywgbmV3VXNlcl0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihTdHJpbmcobmV3VXNlci5lbWFpbCksIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICBcIlNldC1Db29raWVcIixcbiAgICAgIGBhY2Nlc3NfdG9rZW49JHt0b2tlbn07IHBhdGg9LzsgZXhwaXJlcz0ke25ldyBEYXRlKERhdGUubm93KCkgKyA2MCAqIDYwICogMjQgKiAxMDAwICogMykudG9JU09TdHJpbmcoKX07IGh0dHBvbmx5YFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQobmV3VXNlcik7XG4gIH1cblxuXG4gIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuXG4gIHJldHVybiByZXMuZW5kKCk7XG59O1xuXG4iXSwibmFtZXMiOlsiRGF0YSIsImJjcnlwdCIsImp3dCIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJiaXJ0aGRheSIsImJvZHkiLCJzdGF0dXNDb2RlIiwic2VuZCIsInVzZXJFeGlzdCIsInVzZXIiLCJleGlzdCIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFN5bmMiLCJ1c2VycyIsImdldExpc3QiLCJ1c2VySWQiLCJsZW5ndGgiLCJpZCIsIm5ld1VzZXIiLCJwcm9maWxlSW1hZ2UiLCJ3cml0ZSIsInRva2VuIiwic2lnbiIsIlN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiY29uc29sZSIsImxvZyIsInNldEhlYWRlciIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();