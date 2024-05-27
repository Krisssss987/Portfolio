(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7464:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "projects_content__js0aR",
	"filterWrapper": "projects_filterWrapper__l1UEp",
	"note": "projects_note__tLqvs",
	"header": "projects_header__N1ynE"
};


/***/ }),

/***/ 9587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4823);
/* harmony import */ var _styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7464);
/* harmony import */ var _styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3280);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3420);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6377);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9667);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5127);











const { scrollToProjectsSection  } = _utils_animations__WEBPACK_IMPORTED_MODULE_9__/* .projectAnimations */ .z2;
function ProjectsPage({ initFilterBy , initFilterKey  }) {
    const { 0: initialPageLoad , 1: setInitialPageLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    //---------------------------------------------------------
    // TOGGLE FILTER DISPLAY
    //---------------------------------------------------------
    const { 0: showFilter , 1: setShowFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const onOpenFilter = ()=>{
        if (showFilter) return;
        setShowFilter(true);
        (0,_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .registerEvent */ .K)(_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .events.pages.projects.openProjectsFilter */ .U.pages.projects.openProjectsFilter());
    };
    const onCloseFilter = ()=>{
        setShowFilter(false);
        (0,_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .registerEvent */ .K)(_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .events.pages.projects.closeProjectsFilter */ .U.pages.projects.closeProjectsFilter());
    };
    const darkSectionRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { innerHeight: windowInnerHeight , innerWidth: windowInnerWidth  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .iP)();
    const { textWrapperRef , scrollIndicatorRef , blackCoverRef , bannerRef , bannerHeight  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProjectsPageInit */ .fP)({
        windowInnerHeight,
        windowInnerWidth,
        darkSectionRef,
        onOpenFilter
    });
    const { selectedProjectId , onSelectProject , onDeselectProject , modalImgRef , modalRef , onGoToProject , isOpen  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSelectProjectAnimation */ .Ct)({});
    //---------------------------------------------------------
    // TOGGLE BETWEEN GRID AND LIST VIEW
    //---------------------------------------------------------
    const { currentView , handleSetCurrentView  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useProjectsCurrentView */ .WP)({});
    (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        if (windowInnerWidth < 768) {
            handleSetCurrentView("grid");
        }
    }, [
        windowInnerWidth
    ]);
    //---------------------------------------------------------
    // TOGGLE PROJECTS DISPLAYED BASED ON FILTER
    //---------------------------------------------------------
    const { 0: filterKey , 1: setFilterKey  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initFilterKey);
    const { 0: filterBy , 1: setFilterBy  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initFilterBy);
    const onSelectFilterBy = (e)=>{
        setFilterBy(e.target.value);
        (0,_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .registerEvent */ .K)(_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .events.pages.projects.toggleProjectsFilterBy */ .U.pages.projects.toggleProjectsFilterBy({
            filter_by: e.target.value
        }));
    };
    let currProjects = "All";
    //---------------------------------------------------------
    // DISPLAYED PROJECTS
    //---------------------------------------------------------
    const onFilterProjects = ({ key  })=>{
        (0,_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .registerEvent */ .K)(_utils_analytics_events__WEBPACK_IMPORTED_MODULE_7__/* .events.pages.projects.filterProjectsByKey */ .U.pages.projects.filterProjectsByKey({
            filter_key: key
        }));
        setFilterKey(key);
    };
    let displayedProjects = _constants__WEBPACK_IMPORTED_MODULE_4__/* .PROJECTS */ .Fw;
    (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        if (!initialPageLoad) {
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.refresh();
            scrollToProjectsSection();
        } else {
            setInitialPageLoad(false);
        }
    }, [
        displayedProjects.length
    ]);
    const { title , description , url , image  } = _constants__WEBPACK_IMPORTED_MODULE_4__/* .METADATA.projects */ .IS.projects;
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Nav */ .JL, {
                hasBackdropFilter: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .BannerCurtain */ .up, {
                containerRef: blackCoverRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Banners.OtherPages */ .c$.OtherPages, {
                texts: [
                    "Projects",
                    "Creations",
                    "Replicas",
                    "Designs"
                ],
                textWrapperRef: textWrapperRef,
                scrollIndicatorRef: scrollIndicatorRef,
                bannerRef: bannerRef,
                bannerHeight: bannerHeight
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout.DarkSection */ .Ar.DarkSection, {
                darkSectionRef: darkSectionRef,
                bannerHeight: bannerHeight,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),
                    id: "projects-list",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10___default().filterWrapper),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onOpenFilter,
                                "data-key": "open-filter-btn",
                                "aria-label": "Open Filter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_8__/* .FilterIcon */ .k1, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10___default().note),
                            children: "Note: Projects listed here are mainly freelance/personal projects"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_pages_projects_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    ref: contentRef,
                                    children: [
                                        "Viewing ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: currProjects
                                        }),
                                        " projects"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ProjectsViewSelector */ .mN, {
                                    currentView: currentView,
                                    handleSetCurrentView: handleSetCurrentView
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Projects */ .pj, {
                            onViewProject: onSelectProject,
                            displayedProjects: displayedProjects,
                            currentView: currentView
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Noise */ .cy, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ProjectModal */ .FA, {
                selectedProjectId: selectedProjectId,
                modalRef: modalRef,
                onDeselectProject: onDeselectProject,
                modalImgRef: modalImgRef,
                onGoToProject: onGoToProject,
                isOpen: isOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ProjectsFilterModal */ .J7, {
                isOpen: showFilter,
                onFilterProjects: onFilterProjects,
                onCloseFilter: onCloseFilter,
                filterKey: filterKey,
                filterBy: filterBy,
                onSelectFilterBy: onSelectFilterBy
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);
async function getServerSideProps(ctx) {
    const { query  } = ctx;
    return {
        props: {
            initFilterBy: query.filter_by || "tech-stack",
            initFilterKey: query.filter_key || "all"
        }
    };
}
ProjectsPage.withAnim = true;


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,823], () => (__webpack_exec__(9587)));
module.exports = __webpack_exports__;

})();