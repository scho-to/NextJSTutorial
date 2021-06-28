(function() {
var exports = {};
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 8445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6315);
/* harmony import */ var _error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1__);



function ErrorAlert(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_error_alert_module_css__WEBPACK_IMPORTED_MODULE_1___default().alert),
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (ErrorAlert);

/***/ }),

/***/ 3043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ filteredEventPage; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./api/events.js
var api_events = __webpack_require__(9626);
// EXTERNAL MODULE: ./components/events/event-list.jsx + 2 modules
var event_list = __webpack_require__(4326);
// EXTERNAL MODULE: ./components/events/events-search.jsx
var events_search = __webpack_require__(9485);
// EXTERNAL MODULE: ./components/ui/button.jsx
var ui_button = __webpack_require__(8957);
// EXTERNAL MODULE: ./components/events/results-title.module.css
var results_title_module = __webpack_require__(5546);
var results_title_module_default = /*#__PURE__*/__webpack_require__.n(results_title_module);
;// CONCATENATED MODULE: ./components/events/results-title.js





function ResultsTitle(props) {
  const {
    date
  } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (results_title_module_default()).title,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      children: ["Events in ", humanReadableDate]
    }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
      link: "/events",
      children: "Show all events"
    })]
  });
}

/* harmony default export */ var results_title = (ResultsTitle);
// EXTERNAL MODULE: ./components/ui/error-alert.js
var error_alert = __webpack_require__(8445);
;// CONCATENATED MODULE: ./pages/events/[...slug].jsx










function filteredEventPage(props) {
  const router = (0,router_.useRouter)();
  const filterData = router.query.slug;
  let date = null;
  let filteredYear = null;
  let filteredMonth = null;
  let events = [];

  if (!filterData) {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "center",
      children: "Loading..."
    });
  }

  filteredYear = +filterData[0];
  filteredMonth = +filterData[1];
  events = props.events;

  if (events.length === 0) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(error_alert/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "center",
          children: "Nothing Found"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "center",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          link: "/events",
          children: "Show All Events"
        })
      })]
    });
  }

  date = new Date(filteredYear, filteredMonth - 1);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(results_title, {
      date: date
    }), /*#__PURE__*/jsx_runtime_.jsx(event_list/* default */.Z, {
      items: events
    })]
  });
}
;
async function getServerSideProps(context) {
  const {
    params,
    res,
    req
  } = context;
  const events = await (0,api_events/* default */.Z)();
  let filteredEvents = [];
  let filteredYear = +params.slug[0];
  let filteredMonth = +params.slug[1];
  filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filteredYear && eventDate.getMonth() === filteredMonth - 1;
  });
  return {
    props: {
      events: filteredEvents
    }
  };
}

/***/ }),

/***/ 5546:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "results-title_title__2xLZJ"
};


/***/ }),

/***/ 6315:
/***/ (function(module) {

// Exports
module.exports = {
	"alert": "error-alert_alert__11Gsq"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,35,605,485], function() { return __webpack_exec__(3043); });
module.exports = __webpack_exports__;

})();