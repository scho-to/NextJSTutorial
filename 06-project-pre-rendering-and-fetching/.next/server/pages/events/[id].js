(function() {
var exports = {};
exports.id = 32;
exports.ids = [32];
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

/***/ 9228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EventDetailPage; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./api/events.js
var api_events = __webpack_require__(9626);
// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(6888);
// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(5901);
// EXTERNAL MODULE: ./components/event-detail/logistics-item.module.css
var logistics_item_module = __webpack_require__(6261);
var logistics_item_module_default = /*#__PURE__*/__webpack_require__.n(logistics_item_module);
;// CONCATENATED MODULE: ./components/event-detail/logistics-item.js




function LogisticsItem(props) {
  const {
    icon: Icon
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: (logistics_item_module_default()).item,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (logistics_item_module_default()).icon,
      children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (logistics_item_module_default()).content,
      children: props.children
    })]
  });
}

/* harmony default export */ var logistics_item = (LogisticsItem);
// EXTERNAL MODULE: ./components/event-detail/event-logistics.module.css
var event_logistics_module = __webpack_require__(8300);
var event_logistics_module_default = /*#__PURE__*/__webpack_require__.n(event_logistics_module);
;// CONCATENATED MODULE: ./components/event-detail/event-logistics.js







function EventLogistics(props) {
  const {
    date,
    address,
    image,
    imageAlt
  } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const addressText = address.replace(', ', '\n');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (event_logistics_module_default()).logistics,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: imageAlt
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (event_logistics_module_default()).image,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: `/${image}`,
        alt: imageAlt
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (event_logistics_module_default()).list,
      children: [/*#__PURE__*/jsx_runtime_.jsx(logistics_item, {
        icon: date_icon/* default */.Z,
        children: /*#__PURE__*/jsx_runtime_.jsx("time", {
          children: humanReadableDate
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(logistics_item, {
        icon: address_icon/* default */.Z,
        children: /*#__PURE__*/jsx_runtime_.jsx("address", {
          children: addressText
        })
      })]
    })]
  });
}

/* harmony default export */ var event_logistics = (EventLogistics);
// EXTERNAL MODULE: ./components/event-detail/event-content.module.css
var event_content_module = __webpack_require__(1101);
var event_content_module_default = /*#__PURE__*/__webpack_require__.n(event_content_module);
;// CONCATENATED MODULE: ./components/event-detail/event-content.js



function EventContent(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: (event_content_module_default()).content,
    children: props.children
  });
}

/* harmony default export */ var event_content = (EventContent);
// EXTERNAL MODULE: ./components/ui/error-alert.js
var error_alert = __webpack_require__(8445);
;// CONCATENATED MODULE: ./pages/events/[id].jsx








function EventDetailPage(props) {
  const router = (0,router_.useRouter)();
  const eventId = props.id;
  const event = props.event;

  if (!event) {
    return /*#__PURE__*/jsx_runtime_.jsx(error_alert/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "No Event found!"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(event_logistics, {
      date: event.date,
      address: event.location,
      image: event.image,
      imageAlt: event.title
    }), /*#__PURE__*/jsx_runtime_.jsx(event_content, {
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: event.description
      })
    })]
  });
}
;
async function getStaticProps(context) {
  const {
    params
  } = context;
  const id = params.id;
  const events = await (0,api_events/* default */.Z)();
  const event = events.find(event => event.id === id);
  return {
    props: {
      id: id,
      event: event
    },
    revalidate: 5
  };
}
async function getStaticPaths() {
  let events = await (0,api_events/* default */.Z)();
  events = events.filter(event => event.isFeatured === true);
  events = events.map(event => event.id);
  const pathsWithParams = events.map(id => ({
    params: {
      id: id
    }
  }));
  return {
    paths: pathsWithParams,
    fallback: true
  };
}

/***/ }),

/***/ 1101:
/***/ (function(module) {

// Exports
module.exports = {
	"content": "event-content_content__2VRI6"
};


/***/ }),

/***/ 8300:
/***/ (function(module) {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__3HiYD",
	"image": "event-logistics_image__1ED6X",
	"list": "event-logistics_list__59rDU"
};


/***/ }),

/***/ 6261:
/***/ (function(module) {

// Exports
module.exports = {
	"item": "logistics-item_item__1FERm",
	"icon": "logistics-item_icon__1DIos"
};


/***/ }),

/***/ 6315:
/***/ (function(module) {

// Exports
module.exports = {
	"alert": "error-alert_alert__11Gsq"
};


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
var __webpack_exports__ = __webpack_require__.X(0, [35], function() { return __webpack_exec__(9228); });
module.exports = __webpack_exports__;

})();