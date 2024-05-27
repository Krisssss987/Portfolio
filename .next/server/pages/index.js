(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1182:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "home_content__1XkLb",
	"aboutWrapper": "home_aboutWrapper__vH9cJ",
	"excellenceWrapper": "home_excellenceWrapper__0FnhF",
	"viewSelectorWrapper": "home_viewSelectorWrapper__lf4j1",
	"projectsBtnWrapper": "home_projectsBtnWrapper__Qqcxz"
};


/***/ }),

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1182);
/* harmony import */ var _styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3420);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3280);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4823);
/* harmony import */ var _utils_analytics_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6377);








function Home({ initSectionId  }) {
    //-----------------------------------------
    // HELPERS
    //-----------------------------------------
    const darkSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleMoreProjectsGA = ()=>{
        (0,_utils_analytics_events__WEBPACK_IMPORTED_MODULE_6__/* .registerEvent */ .K)(_utils_analytics_events__WEBPACK_IMPORTED_MODULE_6__/* .events.pages.home.viewMoreProjects */ .U.pages.home.viewMoreProjects());
    };
    //-----------------------------------------
    // HOOKS
    //-----------------------------------------
    const { innerHeight: windowInnerHeight , innerWidth: windowInnerWidth  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .iP)();
    const { bannerRef , blackCoverRef , bannerHeight  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useHomePageInit */ .lL)({
        windowInnerHeight,
        windowInnerWidth,
        darkSectionRef,
        initSectionId
    });
    const { textsListRef  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAlternateTextOpacity */ .bt)();
    const { workContainerRef , mobileWorkContainerRef , onWorkDetailsKeyDown  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useWorkAnimation */ .Gd)({
        windowInnerWidth
    });
    const { textWrapperRef: thoughtOneText  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRevealParagraph */ .By)();
    const { textWrapperRef: thoughtTwoText  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRevealParagraph */ .By)();
    const { headingRef: skillsSectionTitlteRef  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRevealHeading */ .gF)({
        windowInnerWidth
    });
    const { headingRef: mobileSkillsSectionTitlteRef  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRevealHeading */ .gF)({
        windowInnerWidth
    });
    const { skillsContainerRef , mobileSkillsContainerRef  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSkillsAnimation */ .F1)({
        windowInnerWidth
    });
    const { headingRef: projectTitleRef  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRevealHeading */ .gF)({
        windowInnerWidth
    });
    const { selectedProjectId , onSelectProject , onDeselectProject , modalImgRef , modalRef , isOpen , onGoToProject  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSelectProjectAnimation */ .Ct)({});
    const { currentView , handleSetCurrentView  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useProjectsCurrentView */ .WP)({});
    const { containerRef , containerWidth  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useExcellenceAnimation */ .X5)();
    const { title , description , url , image  } = _constants__WEBPACK_IMPORTED_MODULE_3__/* .METADATA.home */ .IS.home;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "url",
                        content: url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#e1dfdd"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "image",
                        content: image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "image/*",
                        property: "og:image:type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:site",
                        content: "@KrishnLok"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Krishna, Lokhande, Software Developer, Fullstack, Fullstack Developer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Nav */ .JL, {
                showInBanner: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .BannerCurtain */ .up, {
                containerRef: blackCoverRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Banners.HomePage */ .c$.HomePage, {
                bannerRef: bannerRef,
                bannerHeight: bannerHeight
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Layout.DarkSection */ .Ar.DarkSection, {
                darkSectionRef: darkSectionRef,
                bannerHeight: bannerHeight,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().aboutWrapper),
                            id: "about",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .AlternatingOpacity */ .kR, {
                                textsListRef: textsListRef
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "work",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Work */ .mO, {
                                workContainerRef: workContainerRef,
                                mobileWorkContainerRef: mobileWorkContainerRef,
                                onWorkDetailsKeyDown: onWorkDetailsKeyDown
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Thoughts.One */ .ZX.One, {
                            textWrapperRef: thoughtOneText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().excellenceWrapper),
                            id: "Creativity",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Creativity */ .nj, {
                                containerRef: containerRef,
                                containerWidth: containerWidth
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "skills",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Skills */ .nA, {
                                skillsContainerRef: skillsContainerRef,
                                skillsSectionTitlteRef: skillsSectionTitlteRef,
                                mobileSkillsContainerRef: mobileSkillsContainerRef,
                                mobileSkillsSectionTitlteRef: mobileSkillsSectionTitlteRef
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Thoughts.Two */ .ZX.Two, {
                            textWrapperRef: thoughtTwoText
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "projects-list",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ProjectsHeading */ .Ld, {
                                    projectTitleRef: projectTitleRef
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().viewSelectorWrapper),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ProjectsViewSelector */ .mN, {
                                            currentView: currentView,
                                            handleSetCurrentView: handleSetCurrentView
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Projects */ .pj, {
                                    onViewProject: onSelectProject,
                                    displayedProjects: _constants__WEBPACK_IMPORTED_MODULE_3__/* .PROJECTS.slice */ .Fw.slice(0, 8),
                                    currentView: currentView
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Noise */ .cy, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .ProjectModal */ .FA, {
                selectedProjectId: selectedProjectId,
                modalRef: modalRef,
                onDeselectProject: onDeselectProject,
                modalImgRef: modalImgRef,
                isOpen: isOpen,
                onGoToProject: onGoToProject
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "footer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$_, {})
            })
        ]
    });
};
Home.withAnim = true;
async function getServerSideProps(ctx) {
    const { sectionId  } = ctx.query;
    return {
        props: {
            initSectionId: sectionId || ""
        }
    };
}


/***/ }),

/***/ 4098:
/***/ ((module) => {

"use strict";
module.exports = require("detect.js");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("fecha");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 4305:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.debounce");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5786:
/***/ ((module) => {

"use strict";
module.exports = require("smoothscroll-polyfill");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,823], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();