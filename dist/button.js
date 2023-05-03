/*! For license information please see button.js.LICENSE.txt */
module.exports = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    };
    __webpack_require__.t = function(value, mode) {
        1 & mode && (value = __webpack_require__(value));
        if (8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return {}.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 14);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(useSourceMap) {
        var list = [];
        list.toString = function() {
            return this.map((function(item) {
                var content = function(item, useSourceMap) {
                    var content = item[1] || "";
                    var cssMapping = item[3];
                    if (!cssMapping) return content;
                    if (useSourceMap && "function" == typeof btoa) {
                        var sourceMapping = (base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))), 
                        data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64), 
                        "/*# ".concat(data, " */"));
                        var sourceURLs = cssMapping.sources.map((function(source) {
                            return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
                        }));
                        return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
                    }
                    var base64, data;
                    return [ content ].join("\n");
                }(item, useSourceMap);
                return item[2] ? "@media ".concat(item[2], " {").concat(content, "}") : content;
            })).join("");
        };
        list.i = function(modules, mediaQuery, dedupe) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            var alreadyImportedModules = {};
            if (dedupe) for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                null != id && (alreadyImportedModules[id] = !0);
            }
            for (var _i = 0; _i < modules.length; _i++) {
                var item = [].concat(modules[_i]);
                if (!dedupe || !alreadyImportedModules[item[0]]) {
                    mediaQuery && (item[2] = item[2] ? "".concat(mediaQuery, " and ").concat(item[2]) : mediaQuery);
                    list.push(item);
                }
            }
        };
        return list;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var inserted = {};
    function removeCss(ids) {
        ids.forEach((function(id) {
            if (--inserted[id] <= 0) {
                var elem = document.getElementById(id);
                elem && elem.parentNode.removeChild(elem);
            }
        }));
    }
    module.exports = function(styles, _temp) {
        var _ref = void 0 === _temp ? {} : _temp, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace, _ref$prepend = _ref.prepend, prepend = void 0 !== _ref$prepend && _ref$prepend, _ref$prefix = _ref.prefix, prefix = void 0 === _ref$prefix ? "s" : _ref$prefix;
        var ids = [];
        for (var i = 0; i < styles.length; i++) {
            var _styles$i = styles[i], css = _styles$i[1], media = _styles$i[2], sourceMap = _styles$i[3];
            var id = "" + prefix + _styles$i[0] + "-" + i;
            ids.push(id);
            if (!inserted[id] || replace) {
                inserted[id] = 1;
                var elem = document.getElementById(id);
                var create = !1;
                if (!elem) {
                    create = !0;
                    (elem = document.createElement("style")).setAttribute("type", "text/css");
                    elem.id = id;
                    media && elem.setAttribute("media", media);
                }
                var cssText = css;
                if (sourceMap && "function" == typeof btoa) {
                    cssText += "\n/*# sourceMappingURL=data:application/json;base64," + (str = JSON.stringify(sourceMap), 
                    btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(match, p1) {
                        return String.fromCharCode("0x" + p1);
                    })))) + "*/";
                    cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
                }
                "textContent" in elem ? elem.textContent = cssText : elem.styleSheet.cssText = cssText;
                create && (prepend ? document.head.insertBefore(elem, document.head.childNodes[0]) : document.head.appendChild(elem));
            } else inserted[id]++;
        }
        var str;
        return removeCss.bind(null, ids);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(9);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(10);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(8);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(11);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(12);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    var css = __webpack_require__(13);
    var insertCss = __webpack_require__(1);
    var content = "string" == typeof css ? [ [ module.i, css, "" ] ] : css;
    (exports = module.exports = css.locals || {})._getContent = function() {
        return content;
    };
    exports._getCss = function() {
        return "" + css;
    };
    exports._insertCss = function(options) {
        return insertCss(content, options);
    };
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, ".placeholder--lPbcyavQthOO0r1_P3vzT{display:inline-block;color:rgba(0,0,0,0);background:#fff;opacity:.15;border-radius:2px;animation:1s :local(loading-placeholder) ease-in-out infinite;position:relative;top:10%;height:80%}.placeholder--lPbcyavQthOO0r1_P3vzT.color-black--3Tk_lbdM447ORLDYRQ0dRp{background:#000}.placeholder--lPbcyavQthOO0r1_P3vzT.color-white--3oh7J7dCQs8OA5hLzzKH2P{background:#fff}@keyframes loading-placeholder--1tWP7jZhwqETMvlLNT-kNU{0%{opacity:.15}50%{opacity:.3}100%{opacity:.15}}", "" ]);
    exports.locals = {
        placeholder: "placeholder--lPbcyavQthOO0r1_P3vzT",
        "color-black": "color-black--3Tk_lbdM447ORLDYRQ0dRp",
        "color-white": "color-white--3oh7J7dCQs8OA5hLzzKH2P",
        "loading-placeholder": "loading-placeholder--1tWP7jZhwqETMvlLNT-kNU"
    };
    module.exports = exports;
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, ".wallet-label--24D3SbsjKXSsRg7szNFS3b{display:block;height:100%;text-align:center}.wallet-label--24D3SbsjKXSsRg7szNFS3b *{display:inline-block;vertical-align:middle;height:100%}.wallet-label--24D3SbsjKXSsRg7szNFS3b .divider--26qxeF9D5G5jPSp7fekQ04{margin:0 5px;opacity:.2}.wallet-label--24D3SbsjKXSsRg7szNFS3b .paypal-wordmark--3A80UcWB1-EpIbUTN30tNV{display:none}.wallet-label--24D3SbsjKXSsRg7szNFS3b .card-art--3MQswwxsHuBUtJaeZGavic{border-radius:3px}.wallet-label--24D3SbsjKXSsRg7szNFS3b .label--1WBklKI6pqWvt9TmwBdMuc{max-width:40%}.wallet-label--24D3SbsjKXSsRg7szNFS3b .label--1WBklKI6pqWvt9TmwBdMuc .limit--12nwqOBt-tlUfMd0f5Pk3h{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 249px){.wallet-label--24D3SbsjKXSsRg7szNFS3b .paypal-mark--cK04z-NiIRM6SCbRhTLk7,.wallet-label--24D3SbsjKXSsRg7szNFS3b .paypal-wordmark--3A80UcWB1-EpIbUTN30tNV{display:inline-block}.wallet-label--24D3SbsjKXSsRg7szNFS3b .label--1WBklKI6pqWvt9TmwBdMuc,.wallet-label--24D3SbsjKXSsRg7szNFS3b .divider--26qxeF9D5G5jPSp7fekQ04,.wallet-label--24D3SbsjKXSsRg7szNFS3b .card-art--3MQswwxsHuBUtJaeZGavic,.wallet-label--24D3SbsjKXSsRg7szNFS3b .pay-label--bbNpetZnIZH1uLfip48OP,.wallet-label--24D3SbsjKXSsRg7szNFS3b .logo--tJQ60vbJd60iGc1Q6adJb{display:none}}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx{display:flex;height:100%;width:100%;text-align:left}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx *{display:inline-block;vertical-align:top;height:100%}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .paypal-wordmark--3A80UcWB1-EpIbUTN30tNV{display:none}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .card-art--3MQswwxsHuBUtJaeZGavic{border-radius:3px}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .logo--tJQ60vbJd60iGc1Q6adJb{margin-left:auto}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .show-pay-label--1hlWg0pBH2GxRS7a_xCKna{all:inherit}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .show-instruments-on-file--2tk42jv4Ct06VznIxbn5y5{margin:auto;display:flex}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .fi-container--20c0DUNPMEV0Y7neTEdv9Q{display:flex}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .balance--2SooWr2hVJKhK8OLgAsCaO,.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .fi-logo--GoScEt9PQk1cYNV-uYFVh,.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .fi-label--TV7MRva8N7Z45PqelWAvN{display:flex;align-items:center}@media only screen and (max-width: 150px){.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx{text-align:center;display:inline-block}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .logo--tJQ60vbJd60iGc1Q6adJb{display:none}.wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx .pay-label--bbNpetZnIZH1uLfip48OP{display:none}}", "" ]);
    exports.locals = {
        "wallet-label": "wallet-label--24D3SbsjKXSsRg7szNFS3b",
        divider: "divider--26qxeF9D5G5jPSp7fekQ04",
        "paypal-wordmark": "paypal-wordmark--3A80UcWB1-EpIbUTN30tNV",
        "card-art": "card-art--3MQswwxsHuBUtJaeZGavic",
        label: "label--1WBklKI6pqWvt9TmwBdMuc",
        limit: "limit--12nwqOBt-tlUfMd0f5Pk3h",
        "paypal-mark": "paypal-mark--cK04z-NiIRM6SCbRhTLk7",
        "pay-label": "pay-label--bbNpetZnIZH1uLfip48OP",
        logo: "logo--tJQ60vbJd60iGc1Q6adJb",
        "wallet-label-new": "wallet-label-new--2VFuPMXsimTs5yv4vQ5mHx",
        "show-pay-label": "show-pay-label--1hlWg0pBH2GxRS7a_xCKna",
        "show-instruments-on-file": "show-instruments-on-file--2tk42jv4Ct06VznIxbn5y5",
        "fi-container": "fi-container--20c0DUNPMEV0Y7neTEdv9Q",
        balance: "balance--2SooWr2hVJKhK8OLgAsCaO",
        "fi-logo": "fi-logo--GoScEt9PQk1cYNV-uYFVh",
        "fi-label": "fi-label--TV7MRva8N7Z45PqelWAvN"
    };
    module.exports = exports;
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, ".app-label--3NRyJor-Ni8dDn7mnz2OoP{margin-left:.25rem}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz{height:100%;width:100%;text-align:center}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz .divider--2bifz1Q25RudMVaWaN46ro{margin:0 5px;opacity:.2}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz *{display:inline-block;vertical-align:top;height:100%}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz .logo--2qGzNhxpXQIoifOmOku5pL{margin-left:auto}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz .label--1WXMqZ3M3pG-h13M_EoZfE{max-width:40%}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz .label--1WXMqZ3M3pG-h13M_EoZfE .limit--22z2UWf7yBWLg1YEstO6dM{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 150px){.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz{text-align:center;display:inline-block}.wallet-label-venmo--2B34a6jPytYzlUQISvPnJz .logo--2qGzNhxpXQIoifOmOku5pL{display:none}}", "" ]);
    exports.locals = {
        "app-label": "app-label--3NRyJor-Ni8dDn7mnz2OoP",
        "wallet-label-venmo": "wallet-label-venmo--2B34a6jPytYzlUQISvPnJz",
        divider: "divider--2bifz1Q25RudMVaWaN46ro",
        logo: "logo--2qGzNhxpXQIoifOmOku5pL",
        label: "label--1WXMqZ3M3pG-h13M_EoZfE",
        limit: "limit--22z2UWf7yBWLg1YEstO6dM"
    };
    module.exports = exports;
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, ".paypal-mark--3WFWdZ-2Y5MLUMnNEXRNW7 .paypal-logo-applepay--3inJ9uy1HqlH-Dv8m7yTzU{height:30px}", "" ]);
    exports.locals = {
        "paypal-mark": "paypal-mark--3WFWdZ-2Y5MLUMnNEXRNW7",
        "paypal-logo-applepay": "paypal-logo-applepay--3inJ9uy1HqlH-Dv8m7yTzU"
    };
    module.exports = exports;
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, "", "" ]);
    module.exports = exports;
}, function(module, exports, __webpack_require__) {
    (exports = __webpack_require__(0)(!1)).push([ module.i, ".menu-button--3hyUIBVJw98yeIJZ3qf38s{position:relative;display:inline-block;margin-left:2px;cursor:pointer}.menu-button--3hyUIBVJw98yeIJZ3qf38s:focus{outline:none;box-shadow:0 0 0 2px rgba(50,50,50,.9) inset}.menu-button--3hyUIBVJw98yeIJZ3qf38s img{height:30%;width:30%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}", "" ]);
    exports.locals = {
        "menu-button": "menu-button--3hyUIBVJw98yeIJZ3qf38s"
    };
    module.exports = exports;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "validateButtonProps", (function() {
        return validateButtonProps;
    }));
    __webpack_require__.d(__webpack_exports__, "Buttons", (function() {
        return Buttons;
    }));
    __webpack_require__.d(__webpack_exports__, "DEFAULT_PROPS", (function() {
        return DEFAULT_PROPS;
    }));
    function _renderChildren(children, renderer) {
        var result = [];
        for (var _i2 = 0; _i2 < children.length; _i2++) {
            var renderedChild = children[_i2].render(renderer);
            if (renderedChild) if (Array.isArray(renderedChild)) for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
                var subchild = renderedChild[_i4];
                subchild && result.push(subchild);
            } else result.push(renderedChild);
        }
        return result;
    }
    var node_ElementNode = function() {
        function ElementNode(name, props, children) {
            this.type = "element";
            this.name = void 0;
            this.props = void 0;
            this.children = void 0;
            this.onRender = void 0;
            this.name = name;
            this.props = props || {};
            this.children = children;
            var onRender = this.props.onRender;
            if ("function" == typeof onRender) {
                this.onRender = onRender;
                delete props.onRender;
            }
        }
        var _proto = ElementNode.prototype;
        _proto.render = function(renderer) {
            var el = renderer(this);
            this.onRender && this.onRender(el);
            return el;
        };
        _proto.renderChildren = function(renderer) {
            return _renderChildren(this.children, renderer);
        };
        return ElementNode;
    }();
    var node_FragmentNode = function() {
        function FragmentNode(children) {
            this.type = "fragment";
            this.children = void 0;
            this.children = children;
        }
        FragmentNode.prototype.render = function(renderer) {
            return _renderChildren(this.children, renderer);
        };
        return FragmentNode;
    }();
    var node_TextNode = function() {
        function TextNode(text) {
            this.type = "text";
            this.text = void 0;
            this.text = text;
        }
        TextNode.prototype.render = function(renderer) {
            return renderer(this);
        };
        return TextNode;
    }();
    var node_ComponentNode = function() {
        function ComponentNode(component, props, children) {
            this.type = "component";
            this.component = void 0;
            this.props = void 0;
            this.children = void 0;
            this.component = component;
            this.props = props || {};
            this.children = children;
            this.props.children = children;
        }
        var _proto4 = ComponentNode.prototype;
        _proto4.renderComponent = function(renderer) {
            var child = function(child) {
                var children = normalizeChildren(Array.isArray(child) ? child : [ child ]);
                return 1 === children.length ? children[0] : children.length > 1 ? new node_FragmentNode(children) : void 0;
            }(this.component(this.props, this.children));
            if (child) return child.render(renderer);
        };
        _proto4.render = function(renderer) {
            return renderer(this);
        };
        _proto4.renderChildren = function(renderer) {
            return _renderChildren(this.children, renderer);
        };
        return ComponentNode;
    }();
    function normalizeChildren(children) {
        var result = [];
        for (var _i6 = 0; _i6 < children.length; _i6++) {
            var child = children[_i6];
            if (child) if ("string" == typeof child || "number" == typeof child) result.push(new node_TextNode(child.toString())); else {
                if ("boolean" == typeof child) continue;
                if (Array.isArray(child)) for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) result.push(_normalizeChildren2[_i8]); else {
                    if (!child || "element" !== child.type && "text" !== child.type && "component" !== child.type) throw new TypeError("Unrecognized node type: " + typeof child);
                    result.push(child);
                }
            }
        }
        return result;
    }
    var node_node = function(element, props) {
        for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) children[_key - 2] = arguments[_key];
        children = normalizeChildren(children);
        if ("string" == typeof element) return new node_ElementNode(element, props, children);
        if ("function" == typeof element) return new node_ComponentNode(element, props, children);
        throw new TypeError("Expected jsx element to be a string or a function");
    };
    var Fragment = function(props, children) {
        return children;
    };
    var _ELEMENT_DEFAULT_XML_, _ATTRIBUTE_DEFAULT_XM, _ADD_CHILDREN;
    var ELEMENT_DEFAULT_XML_NAMESPACE = ((_ELEMENT_DEFAULT_XML_ = {}).svg = "http://www.w3.org/2000/svg", 
    _ELEMENT_DEFAULT_XML_);
    var ATTRIBUTE_DEFAULT_XML_NAMESPACE = ((_ATTRIBUTE_DEFAULT_XM = {})["xlink:href"] = "http://www.w3.org/1999/xlink", 
    _ATTRIBUTE_DEFAULT_XM);
    function createTextElement(doc, node) {
        return doc.createTextNode(node.text);
    }
    function addProps(el, node) {
        var props = node.props;
        for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
            var prop = _Object$keys2[_i4];
            var val = props[prop];
            if (null != val && "el" !== prop && "innerHTML" !== prop) if (prop.match(/^on[A-Z][a-z]/) && "function" == typeof val) el.addEventListener(prop.slice(2).toLowerCase(), val); else if ("string" == typeof val || "number" == typeof val) {
                var xmlNamespace = ATTRIBUTE_DEFAULT_XML_NAMESPACE[prop];
                xmlNamespace ? el.setAttributeNS(xmlNamespace, prop, val.toString()) : el.setAttribute(prop, val.toString());
            } else "boolean" == typeof val && !0 === val && el.setAttribute(prop, "");
        }
        "iframe" !== el.tagName.toLowerCase() || props.id || el.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
            return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
        })));
    }
    var ADD_CHILDREN = ((_ADD_CHILDREN = {}).iframe = function(el, node) {
        var firstChild = node.children[0];
        if (1 !== node.children.length || !firstChild || "element" !== firstChild.type || "html" !== firstChild.name) throw new Error("Expected only single html element node as child of iframe element");
        el.addEventListener("load", (function() {
            var win = el.contentWindow;
            if (!win) throw new Error("Expected frame to have contentWindow");
            var doc = win.document;
            var docElement = doc.documentElement;
            for (;docElement.children && docElement.children.length; ) docElement.removeChild(docElement.children[0]);
            var child = firstChild.render(function(opts) {
                void 0 === opts && (opts = {});
                var _opts$doc = opts.doc, doc = void 0 === _opts$doc ? document : _opts$doc;
                return function domRenderer(node) {
                    if ("component" === node.type) return node.renderComponent(domRenderer);
                    if ("text" === node.type) return createTextElement(doc, node);
                    if ("element" === node.type) {
                        var xmlNamespace = ELEMENT_DEFAULT_XML_NAMESPACE[node.name.toLowerCase()];
                        if (xmlNamespace) return function xmlNamespaceDomRenderer(node, xmlNamespace) {
                            if ("component" === node.type) return node.renderComponent((function(childNode) {
                                return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                            }));
                            if ("text" === node.type) return createTextElement(doc, node);
                            if ("element" === node.type) {
                                var el = function(doc, node, xmlNamespace) {
                                    return doc.createElementNS(xmlNamespace, node.name);
                                }(doc, node, xmlNamespace);
                                addProps(el, node);
                                addChildren(el, node, doc, (function(childNode) {
                                    return xmlNamespaceDomRenderer(childNode, xmlNamespace);
                                }));
                                return el;
                            }
                            throw new TypeError("Unhandleable node");
                        }(node, xmlNamespace);
                        var el = function(doc, node) {
                            return node.props.el ? node.props.el : doc.createElement(node.name);
                        }(doc, node);
                        addProps(el, node);
                        addChildren(el, node, doc, domRenderer);
                        return el;
                    }
                    throw new TypeError("Unhandleable node");
                };
            }({
                doc: doc
            }));
            for (;child.children.length; ) docElement.appendChild(child.children[0]);
        }));
    }, _ADD_CHILDREN.script = function(el, node) {
        var firstChild = node.children[0];
        if (1 !== node.children.length || !firstChild || "text" !== firstChild.type) throw new Error("Expected only single text node as child of script element");
        el.text = firstChild.text;
    }, _ADD_CHILDREN.default = function(el, node, renderer) {
        for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) el.appendChild(_node$renderChildren2[_i6]);
    }, _ADD_CHILDREN);
    function addChildren(el, node, doc, renderer) {
        if (node.props.hasOwnProperty("innerHTML")) {
            if (node.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
            var html = node.props.innerHTML;
            if ("string" != typeof html) throw new TypeError("innerHTML prop must be string");
            if ("script" === node.name) el.text = html; else {
                el.innerHTML = html;
                !function(el, doc) {
                    void 0 === doc && (doc = window.document);
                    for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll("script"); _i2 < _el$querySelectorAll2.length; _i2++) {
                        var script = _el$querySelectorAll2[_i2];
                        var parentNode = script.parentNode;
                        if (parentNode) {
                            var newScript = doc.createElement("script");
                            newScript.text = script.textContent;
                            parentNode.replaceChild(newScript, script);
                        }
                    }
                }(el, doc);
            }
        } else (ADD_CHILDREN[node.name] || ADD_CHILDREN.default)(el, node, renderer);
    }
    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }).apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (null == source) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) excluded.indexOf(key = sourceKeys[i]) >= 0 || (target[key] = source[key]);
        return target;
    }
    var SELF_CLOSING_TAGS = {
        br: !0
    };
    function htmlEncode(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
    }
    function Style(_ref) {
        var css = _ref.css, nonce = _ref.nonce, children = _ref.children;
        return node_node(Fragment, null, node_node("style", {
            innerHTML: "string" == typeof css ? css : css._getCss(),
            nonce: nonce
        }), children);
    }
    var COUNTRY = {
        AD: "AD",
        AE: "AE",
        AG: "AG",
        AI: "AI",
        AL: "AL",
        AM: "AM",
        AN: "AN",
        AO: "AO",
        AR: "AR",
        AT: "AT",
        AU: "AU",
        AW: "AW",
        AZ: "AZ",
        BA: "BA",
        BB: "BB",
        BE: "BE",
        BF: "BF",
        BG: "BG",
        BH: "BH",
        BI: "BI",
        BJ: "BJ",
        BM: "BM",
        BN: "BN",
        BO: "BO",
        BR: "BR",
        BS: "BS",
        BT: "BT",
        BW: "BW",
        BY: "BY",
        BZ: "BZ",
        CA: "CA",
        CD: "CD",
        CG: "CG",
        CH: "CH",
        CI: "CI",
        CK: "CK",
        CL: "CL",
        CM: "CM",
        CN: "CN",
        CO: "CO",
        CR: "CR",
        CV: "CV",
        CY: "CY",
        CZ: "CZ",
        DE: "DE",
        DJ: "DJ",
        DK: "DK",
        DM: "DM",
        DO: "DO",
        DZ: "DZ",
        EC: "EC",
        EE: "EE",
        EG: "EG",
        ER: "ER",
        ES: "ES",
        ET: "ET",
        FI: "FI",
        FJ: "FJ",
        FK: "FK",
        FM: "FM",
        FO: "FO",
        FR: "FR",
        GA: "GA",
        GB: "GB",
        GD: "GD",
        GE: "GE",
        GF: "GF",
        GI: "GI",
        GL: "GL",
        GM: "GM",
        GN: "GN",
        GP: "GP",
        GR: "GR",
        GT: "GT",
        GW: "GW",
        GY: "GY",
        HK: "HK",
        HN: "HN",
        HR: "HR",
        HU: "HU",
        ID: "ID",
        IE: "IE",
        IL: "IL",
        IN: "IN",
        IS: "IS",
        IT: "IT",
        JM: "JM",
        JO: "JO",
        JP: "JP",
        KE: "KE",
        KG: "KG",
        KH: "KH",
        KI: "KI",
        KM: "KM",
        KN: "KN",
        KR: "KR",
        KW: "KW",
        KY: "KY",
        KZ: "KZ",
        LA: "LA",
        LC: "LC",
        LI: "LI",
        LK: "LK",
        LS: "LS",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        MA: "MA",
        MC: "MC",
        MD: "MD",
        ME: "ME",
        MG: "MG",
        MH: "MH",
        MK: "MK",
        ML: "ML",
        MN: "MN",
        MQ: "MQ",
        MR: "MR",
        MS: "MS",
        MT: "MT",
        MU: "MU",
        MV: "MV",
        MW: "MW",
        MX: "MX",
        MY: "MY",
        MZ: "MZ",
        NA: "NA",
        NC: "NC",
        NE: "NE",
        NF: "NF",
        NG: "NG",
        NI: "NI",
        NL: "NL",
        NO: "NO",
        NP: "NP",
        NR: "NR",
        NU: "NU",
        NZ: "NZ",
        OM: "OM",
        PA: "PA",
        PE: "PE",
        PF: "PF",
        PG: "PG",
        PH: "PH",
        PL: "PL",
        PM: "PM",
        PN: "PN",
        PT: "PT",
        PW: "PW",
        PY: "PY",
        QA: "QA",
        RE: "RE",
        RO: "RO",
        RS: "RS",
        RU: "RU",
        RW: "RW",
        SA: "SA",
        SB: "SB",
        SC: "SC",
        SE: "SE",
        SG: "SG",
        SH: "SH",
        SI: "SI",
        SJ: "SJ",
        SK: "SK",
        SL: "SL",
        SM: "SM",
        SN: "SN",
        SO: "SO",
        SR: "SR",
        ST: "ST",
        SV: "SV",
        SZ: "SZ",
        TC: "TC",
        TD: "TD",
        TG: "TG",
        TH: "TH",
        TJ: "TJ",
        TM: "TM",
        TN: "TN",
        TO: "TO",
        TR: "TR",
        TT: "TT",
        TV: "TV",
        TW: "TW",
        TZ: "TZ",
        UA: "UA",
        UG: "UG",
        US: "US",
        UY: "UY",
        VA: "VA",
        VC: "VC",
        VE: "VE",
        VG: "VG",
        VN: "VN",
        VU: "VU",
        WF: "WF",
        WS: "WS",
        YE: "YE",
        YT: "YT",
        ZA: "ZA",
        ZM: "ZM",
        ZW: "ZW"
    };
    var COUNTRY_LANGS = {
        AD: [ "en", "fr", "es", "zh" ],
        AE: [ "en", "fr", "es", "zh", "ar" ],
        AG: [ "en", "fr", "es", "zh" ],
        AI: [ "en", "fr", "es", "zh" ],
        AL: [ "sq", "en" ],
        AM: [ "en", "fr", "es", "zh" ],
        AN: [ "en", "fr", "es", "zh" ],
        AO: [ "en", "fr", "es", "zh" ],
        AR: [ "es", "en" ],
        AT: [ "de", "en" ],
        AU: [ "en" ],
        AW: [ "en", "fr", "es", "zh" ],
        AZ: [ "en", "fr", "es", "zh" ],
        BA: [ "en" ],
        BB: [ "en", "fr", "es", "zh" ],
        BE: [ "en", "nl", "fr" ],
        BF: [ "fr", "en", "es", "zh" ],
        BG: [ "bg", "en" ],
        BH: [ "ar", "en", "fr", "es", "zh" ],
        BI: [ "fr", "en", "es", "zh" ],
        BJ: [ "fr", "en", "es", "zh" ],
        BM: [ "en", "fr", "es", "zh" ],
        BN: [ "ms", "en" ],
        BO: [ "es", "en", "fr", "zh" ],
        BR: [ "pt", "en" ],
        BS: [ "en", "fr", "es", "zh" ],
        BT: [ "en" ],
        BW: [ "en", "fr", "es", "zh" ],
        BY: [ "en" ],
        BZ: [ "en", "es", "fr", "zh" ],
        CA: [ "en", "fr" ],
        CD: [ "fr", "en", "es", "zh" ],
        CG: [ "en", "fr", "es", "zh" ],
        CH: [ "de", "fr", "en" ],
        CI: [ "fr", "en" ],
        CK: [ "en", "fr", "es", "zh" ],
        CL: [ "es", "en", "fr", "zh" ],
        CM: [ "fr", "en" ],
        CN: [ "zh" ],
        CO: [ "es", "en", "fr", "zh" ],
        CR: [ "es", "en", "fr", "zh" ],
        CV: [ "en", "fr", "es", "zh" ],
        CY: [ "en" ],
        CZ: [ "cs", "en" ],
        DE: [ "de", "en" ],
        DJ: [ "fr", "en", "es", "zh" ],
        DK: [ "da", "en" ],
        DM: [ "en", "fr", "es", "zh" ],
        DO: [ "es", "en", "fr", "zh" ],
        DZ: [ "ar", "en", "fr", "es", "zh" ],
        EC: [ "es", "en", "fr", "zh" ],
        EE: [ "et", "en", "ru" ],
        EG: [ "ar", "en", "fr", "es", "zh" ],
        ER: [ "en", "fr", "es", "zh" ],
        ES: [ "es", "en" ],
        ET: [ "en", "fr", "es", "zh" ],
        FI: [ "fi", "en" ],
        FJ: [ "en", "fr", "es", "zh" ],
        FK: [ "en", "fr", "es", "zh" ],
        FM: [ "en" ],
        FO: [ "da", "en", "fr", "es", "zh" ],
        FR: [ "fr", "en" ],
        GA: [ "fr", "en", "es", "zh" ],
        GB: [ "en" ],
        GD: [ "en", "fr", "es", "zh" ],
        GE: [ "en", "fr", "es", "zh" ],
        GF: [ "en", "fr", "es", "zh" ],
        GI: [ "en", "fr", "es", "zh" ],
        GL: [ "da", "en", "fr", "es", "zh" ],
        GM: [ "en", "fr", "es", "zh" ],
        GN: [ "fr", "en", "es", "zh" ],
        GP: [ "en", "fr", "es", "zh" ],
        GR: [ "el", "en" ],
        GT: [ "es", "en", "fr", "zh" ],
        GW: [ "en", "fr", "es", "zh" ],
        GY: [ "en", "fr", "es", "zh" ],
        HK: [ "en", "zh_Hant", "zh" ],
        HN: [ "es", "en", "fr", "zh" ],
        HR: [ "en" ],
        HU: [ "hu", "en" ],
        ID: [ "id", "en" ],
        IE: [ "en", "fr", "es", "zh" ],
        IL: [ "he", "en" ],
        IN: [ "en" ],
        IS: [ "en" ],
        IT: [ "it", "en" ],
        JM: [ "en", "es", "fr", "zh" ],
        JO: [ "ar", "en", "fr", "es", "zh" ],
        JP: [ "ja", "en" ],
        KE: [ "en", "fr", "es", "zh" ],
        KG: [ "en", "fr", "es", "zh" ],
        KH: [ "en" ],
        KI: [ "en", "fr", "es", "zh" ],
        KM: [ "fr", "en", "es", "zh" ],
        KN: [ "en", "fr", "es", "zh" ],
        KR: [ "ko", "en" ],
        KW: [ "ar", "en", "fr", "es", "zh" ],
        KY: [ "en", "fr", "es", "zh" ],
        KZ: [ "en", "fr", "es", "zh" ],
        LA: [ "en" ],
        LC: [ "en", "fr", "es", "zh" ],
        LI: [ "en", "fr", "es", "zh" ],
        LK: [ "si", "en" ],
        LS: [ "en", "fr", "es", "zh" ],
        LT: [ "lt", "en", "ru", "zh" ],
        LU: [ "en", "de", "fr", "es", "zh" ],
        LV: [ "lv", "en", "ru" ],
        MA: [ "ar", "en", "fr", "es", "zh" ],
        MC: [ "fr", "en" ],
        MD: [ "en" ],
        ME: [ "en" ],
        MG: [ "en", "fr", "es", "zh" ],
        MH: [ "en", "fr", "es", "zh" ],
        MK: [ "en" ],
        ML: [ "fr", "en", "es", "zh" ],
        MN: [ "en" ],
        MQ: [ "en", "fr", "es", "zh" ],
        MR: [ "en", "fr", "es", "zh" ],
        MS: [ "en", "fr", "es", "zh" ],
        MT: [ "en" ],
        MU: [ "en", "fr", "es", "zh" ],
        MV: [ "en" ],
        MW: [ "en", "fr", "es", "zh" ],
        MX: [ "es", "en" ],
        MY: [ "ms", "en" ],
        MZ: [ "en", "fr", "es", "zh" ],
        NA: [ "en", "fr", "es", "zh" ],
        NC: [ "en", "fr", "es", "zh" ],
        NE: [ "fr", "en", "es", "zh" ],
        NF: [ "en", "fr", "es", "zh" ],
        NG: [ "en" ],
        NI: [ "es", "en", "fr", "zh" ],
        NL: [ "nl", "en" ],
        NO: [ "no", "en" ],
        NP: [ "en" ],
        NR: [ "en", "fr", "es", "zh" ],
        NU: [ "en", "fr", "es", "zh" ],
        NZ: [ "en", "fr", "es", "zh" ],
        OM: [ "ar", "en", "fr", "es", "zh" ],
        PA: [ "es", "en", "fr", "zh" ],
        PE: [ "es", "en", "fr", "zh" ],
        PF: [ "en", "fr", "es", "zh" ],
        PG: [ "en", "fr", "es", "zh" ],
        PH: [ "tl", "en" ],
        PL: [ "pl", "en" ],
        PM: [ "en", "fr", "es", "zh" ],
        PN: [ "en", "fr", "es", "zh" ],
        PT: [ "pt", "en" ],
        PW: [ "en", "fr", "es", "zh" ],
        PY: [ "es", "en" ],
        QA: [ "en", "fr", "es", "zh", "ar" ],
        RE: [ "en", "fr", "es", "zh" ],
        RO: [ "ro", "en" ],
        RS: [ "en", "fr", "es", "zh" ],
        RU: [ "ru", "en" ],
        RW: [ "fr", "en", "es", "zh" ],
        SA: [ "ar", "en", "fr", "es", "zh" ],
        SB: [ "en", "fr", "es", "zh" ],
        SC: [ "fr", "en", "es", "zh" ],
        SE: [ "sv", "en" ],
        SG: [ "en" ],
        SH: [ "en", "fr", "es", "zh" ],
        SI: [ "sl", "en" ],
        SJ: [ "en", "fr", "es", "zh" ],
        SK: [ "sk", "en" ],
        SL: [ "en", "fr", "es", "zh" ],
        SM: [ "en", "fr", "es", "zh" ],
        SN: [ "fr", "en", "es", "zh" ],
        SO: [ "en", "fr", "es", "zh" ],
        SR: [ "en", "fr", "es", "zh" ],
        ST: [ "en", "fr", "es", "zh" ],
        SV: [ "es", "en", "fr", "zh" ],
        SZ: [ "en", "fr", "es", "zh" ],
        TC: [ "en", "fr", "es", "zh" ],
        TD: [ "fr", "en", "es", "zh" ],
        TG: [ "fr", "en", "es", "zh" ],
        TH: [ "th", "en" ],
        TJ: [ "en", "fr", "es", "zh" ],
        TM: [ "en", "fr", "es", "zh" ],
        TN: [ "ar", "en", "fr", "es", "zh" ],
        TO: [ "en" ],
        TR: [ "tr", "en" ],
        TT: [ "en", "fr", "es", "zh" ],
        TV: [ "en", "fr", "es", "zh" ],
        TW: [ "zh_Hant", "zh", "en" ],
        TZ: [ "en", "fr", "es", "zh" ],
        UA: [ "en", "ru", "fr", "es", "zh" ],
        UG: [ "en", "fr", "es", "zh" ],
        US: [ "en", "fr", "es", "zh" ],
        UY: [ "es", "en", "fr", "zh" ],
        VA: [ "en", "fr", "es", "zh" ],
        VC: [ "en", "fr", "es", "zh" ],
        VE: [ "es", "en", "fr", "zh" ],
        VG: [ "en", "fr", "es", "zh" ],
        VN: [ "vi", "en" ],
        VU: [ "en", "fr", "es", "zh" ],
        WF: [ "en", "fr", "es", "zh" ],
        WS: [ "en" ],
        YE: [ "ar", "en", "fr", "es", "zh" ],
        YT: [ "en", "fr", "es", "zh" ],
        ZA: [ "en", "fr", "es", "zh" ],
        ZM: [ "en", "fr", "es", "zh" ],
        ZW: [ "en" ]
    };
    var ENV = {
        LOCAL: "local",
        STAGE: "stage",
        SANDBOX: "sandbox",
        PRODUCTION: "production",
        TEST: "test"
    };
    var FUNDING = {
        PAYPAL: "paypal",
        VENMO: "venmo",
        APPLEPAY: "applepay",
        ITAU: "itau",
        CREDIT: "credit",
        PAYLATER: "paylater",
        CARD: "card",
        IDEAL: "ideal",
        SEPA: "sepa",
        BANCONTACT: "bancontact",
        GIROPAY: "giropay",
        SOFORT: "sofort",
        EPS: "eps",
        MYBANK: "mybank",
        P24: "p24",
        PAYU: "payu",
        BLIK: "blik",
        TRUSTLY: "trustly",
        OXXO: "oxxo",
        BOLETO: "boleto",
        BOLETOBANCARIO: "boletobancario",
        WECHATPAY: "wechatpay",
        MERCADOPAGO: "mercadopago",
        MULTIBANCO: "multibanco",
        SATISPAY: "satispay",
        PAIDY: "paidy"
    };
    var PLATFORM = {
        DESKTOP: "desktop",
        MOBILE: "mobile"
    };
    var APM_LIST = [ FUNDING.IDEAL, FUNDING.BANCONTACT, FUNDING.GIROPAY, FUNDING.SOFORT, FUNDING.EPS, FUNDING.MYBANK, FUNDING.P24, FUNDING.PAYU, FUNDING.BLIK, FUNDING.TRUSTLY, FUNDING.OXXO, FUNDING.BOLETO, FUNDING.BOLETOBANCARIO, FUNDING.WECHATPAY, FUNDING.MERCADOPAGO, FUNDING.MULTIBANCO, FUNDING.SATISPAY, FUNDING.PAIDY ];
    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            o.__proto__ = p;
            return o;
        })(o, p);
    }
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }
    function utils_isPromise(item) {
        try {
            if (!item) return !1;
            if ("undefined" != typeof Promise && item instanceof Promise) return !0;
            if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
            if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
            var _toString = {}.toString;
            if (_toString) {
                var name = _toString.call(item);
                if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
            }
            if ("function" == typeof item.then) return !0;
        } catch (err) {
            return !1;
        }
        return !1;
    }
    var dispatchedErrors = [];
    var possiblyUnhandledPromiseHandlers = [];
    var activeCount = 0;
    var flushPromise;
    function flushActive() {
        if (!activeCount && flushPromise) {
            var promise = flushPromise;
            flushPromise = null;
            promise.resolve();
        }
    }
    function startActive() {
        activeCount += 1;
    }
    function endActive() {
        activeCount -= 1;
        flushActive();
    }
    var promise_ZalgoPromise = function() {
        function ZalgoPromise(handler) {
            var _this = this;
            this.resolved = void 0;
            this.rejected = void 0;
            this.errorHandled = void 0;
            this.value = void 0;
            this.error = void 0;
            this.handlers = void 0;
            this.dispatching = void 0;
            this.stack = void 0;
            this.resolved = !1;
            this.rejected = !1;
            this.errorHandled = !1;
            this.handlers = [];
            if (handler) {
                var _result;
                var _error;
                var resolved = !1;
                var rejected = !1;
                var isAsync = !1;
                startActive();
                try {
                    handler((function(res) {
                        if (isAsync) _this.resolve(res); else {
                            resolved = !0;
                            _result = res;
                        }
                    }), (function(err) {
                        if (isAsync) _this.reject(err); else {
                            rejected = !0;
                            _error = err;
                        }
                    }));
                } catch (err) {
                    endActive();
                    this.reject(err);
                    return;
                }
                endActive();
                isAsync = !0;
                resolved ? this.resolve(_result) : rejected && this.reject(_error);
            }
        }
        var _proto = ZalgoPromise.prototype;
        _proto.resolve = function(result) {
            if (this.resolved || this.rejected) return this;
            if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
            this.resolved = !0;
            this.value = result;
            this.dispatch();
            return this;
        };
        _proto.reject = function(error) {
            var _this2 = this;
            if (this.resolved || this.rejected) return this;
            if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
            if (!error) {
                var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                error = new Error("Expected reject to be called with Error, got " + _err);
            }
            this.rejected = !0;
            this.error = error;
            this.errorHandled || setTimeout((function() {
                _this2.errorHandled || function(err, promise) {
                    if (-1 === dispatchedErrors.indexOf(err)) {
                        dispatchedErrors.push(err);
                        setTimeout((function() {
                            throw err;
                        }), 1);
                        for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                    }
                }(error, _this2);
            }), 1);
            this.dispatch();
            return this;
        };
        _proto.asyncReject = function(error) {
            this.errorHandled = !0;
            this.reject(error);
            return this;
        };
        _proto.dispatch = function() {
            var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
            if (!this.dispatching && (resolved || rejected)) {
                this.dispatching = !0;
                startActive();
                var chain = function(firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        secondPromise.resolve(res);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < handlers.length; i++) {
                    var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                    var _result2 = void 0;
                    if (resolved) try {
                        _result2 = onSuccess ? onSuccess(this.value) : this.value;
                    } catch (err) {
                        promise.reject(err);
                        continue;
                    } else if (rejected) {
                        if (!onError) {
                            promise.reject(this.error);
                            continue;
                        }
                        try {
                            _result2 = onError(this.error);
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        }
                    }
                    if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                        var promiseResult = _result2;
                        promiseResult.resolved ? promise.resolve(promiseResult.value) : promise.reject(promiseResult.error);
                        promiseResult.errorHandled = !0;
                    } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                }
                handlers.length = 0;
                this.dispatching = !1;
                endActive();
            }
        };
        _proto.then = function(onSuccess, onError) {
            if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
            if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
            var promise = new ZalgoPromise;
            this.handlers.push({
                promise: promise,
                onSuccess: onSuccess,
                onError: onError
            });
            this.errorHandled = !0;
            this.dispatch();
            return promise;
        };
        _proto.catch = function(onError) {
            return this.then(void 0, onError);
        };
        _proto.finally = function(onFinally) {
            if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
            return this.then((function(result) {
                return ZalgoPromise.try(onFinally).then((function() {
                    return result;
                }));
            }), (function(err) {
                return ZalgoPromise.try(onFinally).then((function() {
                    throw err;
                }));
            }));
        };
        _proto.timeout = function(time, err) {
            var _this3 = this;
            if (this.resolved || this.rejected) return this;
            var timeout = setTimeout((function() {
                _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
            }), time);
            return this.then((function(result) {
                clearTimeout(timeout);
                return result;
            }));
        };
        _proto.toPromise = function() {
            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
        };
        _proto.lazy = function() {
            this.errorHandled = !0;
            return this;
        };
        ZalgoPromise.resolve = function(value) {
            return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                return value.then(resolve, reject);
            })) : (new ZalgoPromise).resolve(value);
        };
        ZalgoPromise.reject = function(error) {
            return (new ZalgoPromise).reject(error);
        };
        ZalgoPromise.asyncReject = function(error) {
            return (new ZalgoPromise).asyncReject(error);
        };
        ZalgoPromise.all = function(promises) {
            var promise = new ZalgoPromise;
            var count = promises.length;
            var results = [].slice();
            if (!count) {
                promise.resolve(results);
                return promise;
            }
            var chain = function(i, firstPromise, secondPromise) {
                return firstPromise.then((function(res) {
                    results[i] = res;
                    0 == (count -= 1) && promise.resolve(results);
                }), (function(err) {
                    secondPromise.reject(err);
                }));
            };
            for (var i = 0; i < promises.length; i++) {
                var prom = promises[i];
                if (prom instanceof ZalgoPromise) {
                    if (prom.resolved) {
                        results[i] = prom.value;
                        count -= 1;
                        continue;
                    }
                } else if (!utils_isPromise(prom)) {
                    results[i] = prom;
                    count -= 1;
                    continue;
                }
                chain(i, ZalgoPromise.resolve(prom), promise);
            }
            0 === count && promise.resolve(results);
            return promise;
        };
        ZalgoPromise.hash = function(promises) {
            var result = {};
            var awaitPromises = [];
            var _loop = function(key) {
                if (promises.hasOwnProperty(key)) {
                    var value = promises[key];
                    utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                        result[key] = res;
                    }))) : result[key] = value;
                }
            };
            for (var key in promises) _loop(key);
            return ZalgoPromise.all(awaitPromises).then((function() {
                return result;
            }));
        };
        ZalgoPromise.map = function(items, method) {
            return ZalgoPromise.all(items.map(method));
        };
        ZalgoPromise.onPossiblyUnhandledException = function(handler) {
            return function(handler) {
                possiblyUnhandledPromiseHandlers.push(handler);
                return {
                    cancel: function() {
                        possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                    }
                };
            }(handler);
        };
        ZalgoPromise.try = function(method, context, args) {
            if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
            var result;
            startActive();
            try {
                result = method.apply(context, args || []);
            } catch (err) {
                endActive();
                return ZalgoPromise.reject(err);
            }
            endActive();
            return ZalgoPromise.resolve(result);
        };
        ZalgoPromise.delay = function(_delay) {
            return new ZalgoPromise((function(resolve) {
                setTimeout(resolve, _delay);
            }));
        };
        ZalgoPromise.isPromise = function(value) {
            return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
        };
        ZalgoPromise.flush = function() {
            return function(Zalgo) {
                var promise = flushPromise = flushPromise || new Zalgo;
                flushActive();
                return promise;
            }(ZalgoPromise);
        };
        return ZalgoPromise;
    }();
    var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
    function getActualProtocol(win) {
        void 0 === win && (win = window);
        return win.location.protocol;
    }
    function getProtocol(win) {
        void 0 === win && (win = window);
        if (win.mockDomain) {
            var protocol = win.mockDomain.split("//")[0];
            if (protocol) return protocol;
        }
        return getActualProtocol(win);
    }
    function isAboutProtocol(win) {
        void 0 === win && (win = window);
        return "about:" === getProtocol(win);
    }
    function canReadFromWindow(win) {
        try {
            return !0;
        } catch (err) {}
        return !1;
    }
    function getActualDomain(win) {
        void 0 === win && (win = window);
        var location = win.location;
        if (!location) throw new Error("Can not read window location");
        var protocol = getActualProtocol(win);
        if (!protocol) throw new Error("Can not read window protocol");
        if ("file:" === protocol) return "file://";
        if ("about:" === protocol) {
            var parent = function(win) {
                void 0 === win && (win = window);
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }(win);
            return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
        }
        var host = location.host;
        if (!host) throw new Error("Can not read window host");
        return protocol + "//" + host;
    }
    function getDomain(win) {
        void 0 === win && (win = window);
        var domain = getActualDomain(win);
        return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
    }
    function isSameDomain(win) {
        if (!function(win) {
            try {
                if (win === window) return !0;
            } catch (err) {}
            try {
                var desc = Object.getOwnPropertyDescriptor(win, "location");
                if (desc && !1 === desc.enumerable) return !1;
            } catch (err) {}
            try {
                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
            } catch (err) {}
            try {
                if (function(win) {
                    void 0 === win && (win = window);
                    return "mock:" === getProtocol(win);
                }(win) && canReadFromWindow()) return !0;
            } catch (err) {}
            try {
                if (getActualDomain(win) === getActualDomain(window)) return !0;
            } catch (err) {}
            return !1;
        }(win)) return !1;
        try {
            if (win === window) return !0;
            if (isAboutProtocol(win) && canReadFromWindow()) return !0;
            if (getDomain(window) === getDomain(win)) return !0;
        } catch (err) {}
        return !1;
    }
    var iframeWindows = [];
    var iframeFrames = [];
    function isWindowClosed(win, allowMock) {
        void 0 === allowMock && (allowMock = !0);
        try {
            if (win === window) return !1;
        } catch (err) {
            return !0;
        }
        try {
            if (!win) return !0;
        } catch (err) {
            return !0;
        }
        try {
            if (win.closed) return !0;
        } catch (err) {
            return !err || err.message !== IE_WIN_ACCESS_ERROR;
        }
        if (allowMock && isSameDomain(win)) try {
            if (win.mockclosed) return !0;
        } catch (err) {}
        try {
            if (!win.parent || !win.top) return !0;
        } catch (err) {}
        var iframeIndex = function(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }(iframeWindows, win);
        if (-1 !== iframeIndex) {
            var frame = iframeFrames[iframeIndex];
            if (frame && function(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                    var parent = frame;
                    for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                    if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                }
                return !1;
            }(frame)) return !0;
        }
        return !1;
    }
    function isWindow(obj) {
        try {
            if (obj === window) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if ("[object Window]" === {}.toString.call(obj)) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (window.Window && obj instanceof window.Window) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.self === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.parent === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && obj.top === obj) return !0;
        } catch (err) {
            if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
        }
        try {
            if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
        } catch (err) {
            return !0;
        }
        try {
            if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
        } catch (err) {}
        return !1;
    }
    function util_safeIndexOf(collection, item) {
        for (var i = 0; i < collection.length; i++) try {
            if (collection[i] === item) return i;
        } catch (err) {}
        return -1;
    }
    var weakmap_CrossDomainSafeWeakMap = function() {
        function CrossDomainSafeWeakMap() {
            this.name = void 0;
            this.weakmap = void 0;
            this.keys = void 0;
            this.values = void 0;
            this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
            if (function() {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                    var testWeakMap = new WeakMap;
                    var testKey = {};
                    Object.freeze(testKey);
                    testWeakMap.set(testKey, "__testvalue__");
                    return "__testvalue__" === testWeakMap.get(testKey);
                } catch (err) {
                    return !1;
                }
            }()) try {
                this.weakmap = new WeakMap;
            } catch (err) {}
            this.keys = [];
            this.values = [];
        }
        var _proto = CrossDomainSafeWeakMap.prototype;
        _proto._cleanupClosedWindows = function() {
            var weakmap = this.weakmap;
            var keys = this.keys;
            for (var i = 0; i < keys.length; i++) {
                var value = keys[i];
                if (isWindow(value) && isWindowClosed(value)) {
                    if (weakmap) try {
                        weakmap.delete(value);
                    } catch (err) {}
                    keys.splice(i, 1);
                    this.values.splice(i, 1);
                    i -= 1;
                }
            }
        };
        _proto.isSafeToReadWrite = function(key) {
            return !isWindow(key);
        };
        _proto.set = function(key, value) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                weakmap.set(key, value);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var name = this.name;
                var entry = key[name];
                entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                    value: [ key, value ],
                    writable: !0
                });
                return;
            } catch (err) {}
            this._cleanupClosedWindows();
            var keys = this.keys;
            var values = this.values;
            var index = util_safeIndexOf(keys, key);
            if (-1 === index) {
                keys.push(key);
                values.push(value);
            } else values[index] = value;
        };
        _proto.get = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                if (weakmap.has(key)) return weakmap.get(key);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                return entry && entry[0] === key ? entry[1] : void 0;
            } catch (err) {}
            this._cleanupClosedWindows();
            var index = util_safeIndexOf(this.keys, key);
            if (-1 !== index) return this.values[index];
        };
        _proto.delete = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                weakmap.delete(key);
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                entry && entry[0] === key && (entry[0] = entry[1] = void 0);
            } catch (err) {}
            this._cleanupClosedWindows();
            var keys = this.keys;
            var index = util_safeIndexOf(keys, key);
            if (-1 !== index) {
                keys.splice(index, 1);
                this.values.splice(index, 1);
            }
        };
        _proto.has = function(key) {
            if (!key) throw new Error("WeakMap expected key");
            var weakmap = this.weakmap;
            if (weakmap) try {
                if (weakmap.has(key)) return !0;
            } catch (err) {
                delete this.weakmap;
            }
            if (this.isSafeToReadWrite(key)) try {
                var entry = key[this.name];
                return !(!entry || entry[0] !== key);
            } catch (err) {}
            this._cleanupClosedWindows();
            return -1 !== util_safeIndexOf(this.keys, key);
        };
        _proto.getOrSet = function(key, getter) {
            if (this.has(key)) return this.get(key);
            var value = getter();
            this.set(key, value);
            return value;
        };
        return CrossDomainSafeWeakMap;
    }();
    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        })(o);
    }
    function _isNativeReflectConstruct() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
            return !0;
        } catch (e) {
            return !1;
        }
    }
    function construct_construct(Parent, args, Class) {
        return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
            var a = [ null ];
            a.push.apply(a, args);
            var instance = new (Function.bind.apply(Parent, a));
            Class && _setPrototypeOf(instance, Class.prototype);
            return instance;
        }).apply(null, arguments);
    }
    function wrapNativeSuper_wrapNativeSuper(Class) {
        var _cache = "function" == typeof Map ? new Map : void 0;
        return (wrapNativeSuper_wrapNativeSuper = function(Class) {
            if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
            var fn;
            if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== _cache) {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            return _setPrototypeOf(Wrapper, Class);
        })(Class);
    }
    function isElement(element) {
        var passed = !1;
        try {
            (element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument) && (passed = !0);
        } catch (_) {}
        return passed;
    }
    function getFunctionName(fn) {
        return fn.name || fn.__name__ || fn.displayName || "anonymous";
    }
    function setFunctionName(fn, name) {
        try {
            delete fn.name;
            fn.name = name;
        } catch (err) {}
        fn.__name__ = fn.displayName = name;
        return fn;
    }
    function base64encode(str) {
        if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        }))).replace(/[=]/g, "");
        if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
        throw new Error("Can not find window.btoa or Buffer");
    }
    function util_uniqueID() {
        var chars = "0123456789abcdef";
        return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
    var objectIDs;
    function serializeArgs(args) {
        try {
            return JSON.stringify([].slice.call(args), (function(subkey, val) {
                return "function" == typeof val ? "memoize[" + function(obj) {
                    objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                    if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                    var uid = objectIDs.get(obj);
                    if (!uid) {
                        uid = typeof obj + ":" + util_uniqueID();
                        objectIDs.set(obj, uid);
                    }
                    return uid;
                }(val) + "]" : isElement(val) ? {} : val;
            }));
        } catch (err) {
            throw new Error("Arguments not serializable -- can not be used to memoize");
        }
    }
    function getEmptyObject() {
        return {};
    }
    var memoizeGlobalIndex = 0;
    var memoizeGlobalIndexValidFrom = 0;
    function memoize(method, options) {
        void 0 === options && (options = {});
        var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
        var simpleCache;
        var thisCache;
        var memoizeIndex = memoizeGlobalIndex;
        memoizeGlobalIndex += 1;
        var memoizedFunction = function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                simpleCache = null;
                thisCache = null;
                memoizeIndex = memoizeGlobalIndex;
                memoizeGlobalIndex += 1;
            }
            var cache;
            cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
            var cacheKey;
            try {
                cacheKey = serializeArgs(args);
            } catch (_unused) {
                return method.apply(this, arguments);
            }
            var cacheResult = cache[cacheKey];
            if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                delete cache[cacheKey];
                cacheResult = null;
            }
            if (cacheResult) return cacheResult.value;
            var time = Date.now();
            var value = method.apply(this, arguments);
            cache[cacheKey] = {
                time: time,
                value: value
            };
            return value;
        };
        memoizedFunction.reset = function() {
            simpleCache = null;
            thisCache = null;
        };
        return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
    }
    memoize.clear = function() {
        memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
    };
    function src_util_noop() {}
    function util_values(obj) {
        if (Object.values) return Object.values(obj);
        var result = [];
        for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
        return result;
    }
    memoize(util_values);
    function perc(pixels, percentage) {
        return Math.round(pixels * percentage / 100);
    }
    function max() {
        return Math.max.apply(Math, arguments);
    }
    function roundUp(num, nearest) {
        var remainder = num % nearest;
        return remainder ? num - remainder + nearest : num;
    }
    function svgToBase64(svg) {
        return "data:image/svg+xml;base64," + base64encode(svg);
    }
    function objFilter(obj, filter) {
        void 0 === filter && (filter = Boolean);
        var result = {};
        for (var key in obj) obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
        return result;
    }
    var util_ExtendableError = function(_Error) {
        _inheritsLoose(ExtendableError, _Error);
        function ExtendableError(message) {
            var _this6;
            (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
            "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
            return _this6;
        }
        return ExtendableError;
    }(wrapNativeSuper_wrapNativeSuper(Error));
    function isDocumentReady() {
        return Boolean(document.body) && "complete" === document.readyState;
    }
    function isDocumentInteractive() {
        return Boolean(document.body) && "interactive" === document.readyState;
    }
    memoize((function() {
        return new promise_ZalgoPromise((function(resolve) {
            if (isDocumentReady() || isDocumentInteractive()) return resolve();
            var interval = setInterval((function() {
                if (isDocumentReady() || isDocumentInteractive()) {
                    clearInterval(interval);
                    return resolve();
                }
            }), 10);
        }));
    }));
    function dom_isBrowser() {
        return "undefined" != typeof window && void 0 !== window.location;
    }
    _inheritsLoose((function() {
        return _ExtendableError.apply(this, arguments) || this;
    }), _ExtendableError = util_ExtendableError);
    var _ExtendableError;
    var currentScript = "undefined" != typeof document ? document.currentScript : null;
    var getCurrentScript = memoize((function() {
        if (currentScript) return currentScript;
        if (currentScript = function() {
            try {
                var stack = function() {
                    try {
                        throw new Error("_");
                    } catch (err) {
                        return err.stack || "";
                    }
                }();
                var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                var scriptLocation = stackDetails && stackDetails[1];
                if (!scriptLocation) return;
                for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                    var script = _Array$prototype$slic2[_i22];
                    if (script.src && script.src === scriptLocation) return script;
                }
            } catch (err) {}
        }()) return currentScript;
        throw new Error("Can not determine current script");
    }));
    var currentUID = util_uniqueID();
    var getCurrentScriptUID = memoize((function() {
        var script;
        try {
            script = getCurrentScript();
        } catch (err) {
            return currentUID;
        }
        var uid = script.getAttribute("data-uid");
        if (uid && "string" == typeof uid) return uid;
        if ((uid = script.getAttribute("data-uid-auto")) && "string" == typeof uid) return uid;
        if (script.src) {
            var hashedString = function(str) {
                var hash = "";
                for (var i = 0; i < str.length; i++) {
                    var total = str[i].charCodeAt(0) * i;
                    str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                    hash += String.fromCharCode(97 + Math.abs(total) % 26);
                }
                return hash;
            }(JSON.stringify({
                src: script.src,
                dataset: script.dataset
            }));
            uid = "uid_" + hashedString.slice(hashedString.length - 30);
        } else uid = util_uniqueID();
        script.setAttribute("data-uid-auto", uid);
        return uid;
    }));
    var http_headerBuilders = [];
    function request(_ref) {
        var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
        return new promise_ZalgoPromise((function(resolve, reject) {
            if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
            var normalizedHeaders = {};
            for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
                var _key2 = _Object$keys2[_i4];
                normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
            }
            json ? normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/json" : (data || body) && (normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/x-www-form-urlencoded; charset=utf-8");
            normalizedHeaders.accept = normalizedHeaders.accept || "application/json";
            for (var _i6 = 0; _i6 < http_headerBuilders.length; _i6++) {
                var builtHeaders = (0, http_headerBuilders[_i6])();
                for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
                    var _key3 = _Object$keys4[_i8];
                    normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                }
            }
            var xhr = new win.XMLHttpRequest;
            xhr.addEventListener("load", (function() {
                var responseHeaders = function(rawHeaders) {
                    void 0 === rawHeaders && (rawHeaders = "");
                    var result = {};
                    for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split("\n"); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
                        var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                        result[_key.toLowerCase()] = values.join(":").trim();
                    }
                    return result;
                }(this.getAllResponseHeaders());
                if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                var contentType = responseHeaders["content-type"];
                var isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json"));
                var responseBody = this.responseText;
                try {
                    responseBody = JSON.parse(responseBody);
                } catch (err) {
                    if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                }
                return resolve({
                    status: this.status,
                    headers: responseHeaders,
                    body: responseBody
                });
            }), !1);
            xhr.addEventListener("error", (function(evt) {
                reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
            }), !1);
            xhr.open(method, url, !0);
            for (var _key4 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
            json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map((function(key) {
                return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
            })).join("&"));
            xhr.timeout = timeout;
            xhr.ontimeout = function() {
                reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
            };
            xhr.send(body);
        }));
    }
    var BUTTON_LABEL = {
        PAYPAL: "paypal",
        CHECKOUT: "checkout",
        BUYNOW: "buynow",
        PAY: "pay",
        INSTALLMENT: "installment",
        SUBSCRIBE: "subscribe",
        DONATE: "donate"
    };
    var BUTTON_LAYOUT = {
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical"
    };
    var DEFAULT = "default";
    var CLASS = {
        CONTAINER: "paypal-button-container",
        BUTTON_ROW: "paypal-button-row",
        BUTTON: "paypal-button",
        BUTTON_LABEL: "paypal-button-label-container",
        LOGO_PP: "paypal-logo-pp",
        LABEL: "paypal-button-label",
        COLOR: "paypal-button-color",
        TEXT_COLOR: "paypal-button-text-color",
        SHAPE: "paypal-button-shape",
        LAYOUT: "paypal-button-layout",
        NUMBER: "paypal-button-number",
        ENV: "paypal-button-env",
        WALLET: "paypal-button-wallet",
        WALLET_MENU: "paypal-button-wallet-menu",
        LOADING: "paypal-button-loading",
        SPINNER: "paypal-button-spinner",
        TAGLINE: "paypal-button-tagline",
        POWERED_BY: "paypal-powered-by",
        TEXT: "paypal-button-text",
        SPACE: "paypal-button-space",
        CARD: "paypal-button-card",
        PERSONALIZATION_TEXT: "paypal-personalization-text",
        VAULT_LABEL: "paypal-vault-label",
        VAULT_HEADER: "paypal-vault-header",
        SEPARATOR: "paypal-separator",
        DOM_READY: "dom-ready",
        HIDDEN: "hidden",
        IMMEDIATE: "immediate"
    };
    function getPayPalDomain() {
        return __PAYPAL_DOMAIN__;
    }
    var getSDKScript = memoize((function() {
        try {
            return getCurrentScript();
        } catch (error) {
            throw function(host, path, error) {
                var errorString = error ? function stringifyError(err, level) {
                    void 0 === level && (level = 1);
                    if (level >= 3) return "stringifyError stack overflow";
                    try {
                        if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                        if ("string" == typeof err) return err;
                        if (err instanceof Error) {
                            var stack = err && err.stack;
                            var message = err && err.message;
                            if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                            if (stack) return stack;
                            if (message) return message;
                        }
                        return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
                    } catch (newErr) {
                        return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                    }
                }(error) : "";
                return new Error('PayPal Payments SDK script not found on page! Expected to find <script src="https://' + host + path + '">\n\n' + errorString);
            }(__SDK_HOST__, __PATH__, error);
        }
    }));
    memoize((function() {
        var result = {};
        for (var _i2 = 0, _sdkScript$attributes2 = getSDKScript().attributes; _i2 < _sdkScript$attributes2.length; _i2++) {
            var attr = _sdkScript$attributes2[_i2];
            0 === attr.name.indexOf("data-") && (result[attr.name] = attr.value);
        }
        result["data-uid"] = getCurrentScriptUID();
        return result;
    }));
    var AUTO_FLUSH_LEVEL = [ "warn", "error" ];
    var LOG_LEVEL_PRIORITY = [ "error", "warn", "info", "debug" ];
    var sendBeacon = function(_ref2) {
        var _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win, url = _ref2.url, data = _ref2.data, _ref2$useBlob = _ref2.useBlob, useBlob = void 0 === _ref2$useBlob || _ref2$useBlob;
        try {
            var json = JSON.stringify(data);
            if (!win.navigator.sendBeacon) throw new Error("No sendBeacon available");
            if (useBlob) {
                var blob = new Blob([ json ], {
                    type: "application/json"
                });
                return win.navigator.sendBeacon(url, blob);
            }
            return win.navigator.sendBeacon(url, json);
        } catch (e) {
            return !1;
        }
    };
    var extendIfDefined = function(target, source) {
        for (var key in source) source.hasOwnProperty(key) && (target[key] = source[key]);
    };
    function Logger(_ref) {
        var url = _ref.url, prefix = _ref.prefix, _ref$logLevel = _ref.logLevel, logLevel = void 0 === _ref$logLevel ? "warn" : _ref$logLevel, _ref$transport = _ref.transport, transport = void 0 === _ref$transport ? function(_ref) {
            var url = _ref.url, method = _ref.method, headers = _ref.headers, json = _ref.json, _ref$enableSendBeacon = _ref.enableSendBeacon, enableSendBeacon = void 0 !== _ref$enableSendBeacon && _ref$enableSendBeacon;
            return promise_ZalgoPromise.try((function() {
                var httpWindow = httpWin || window;
                var win = isSameDomain(httpWindow) ? function(win) {
                    if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                    return win;
                }(httpWindow) : window;
                var beaconResult = !1;
                (function(_ref) {
                    var headers = _ref.headers, enableSendBeacon = _ref.enableSendBeacon;
                    var hasHeaders = headers && Object.keys(headers).length;
                    return !!(window && window.navigator.sendBeacon && !hasHeaders && enableSendBeacon && window.Blob);
                })({
                    headers: headers,
                    enableSendBeacon: enableSendBeacon
                }) && (beaconResult = function(url) {
                    return "https://api2.amplitude.com/2/httpapi" === url;
                }(url) ? sendBeacon({
                    win: win,
                    url: url,
                    data: json,
                    useBlob: !1
                }) : sendBeacon({
                    win: win,
                    url: url,
                    data: json,
                    useBlob: !0
                }));
                return beaconResult || request({
                    win: win,
                    url: url,
                    method: method,
                    headers: headers,
                    json: json
                });
            })).then(src_util_noop);
        } : _ref$transport, amplitudeApiKey = _ref.amplitudeApiKey, _ref$flushInterval = _ref.flushInterval, flushInterval = void 0 === _ref$flushInterval ? 6e4 : _ref$flushInterval, _ref$enableSendBeacon = _ref.enableSendBeacon, enableSendBeacon = void 0 !== _ref$enableSendBeacon && _ref$enableSendBeacon;
        var httpWin;
        var events = [];
        var tracking = [];
        var metrics = [];
        var payloadBuilders = [];
        var metaBuilders = [];
        var trackingBuilders = [];
        var headerBuilders = [];
        function print(level, event, payload) {
            if (dom_isBrowser() && window.console && window.console.log && !(LOG_LEVEL_PRIORITY.indexOf(level) > LOG_LEVEL_PRIORITY.indexOf(logLevel))) {
                var args = [ event ];
                args.push(payload);
                (payload.error || payload.warning) && args.push("\n\n", payload.error || payload.warning);
                try {
                    window.console[level] && window.console[level].apply ? window.console[level].apply(window.console, args) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, args);
                } catch (err) {}
            }
        }
        function immediateFlush() {
            return promise_ZalgoPromise.try((function() {
                if (dom_isBrowser() && "file:" !== window.location.protocol && (events.length || tracking.length || metrics.length)) {
                    var meta = {};
                    for (var _i2 = 0; _i2 < metaBuilders.length; _i2++) extendIfDefined(meta, (0, metaBuilders[_i2])(meta));
                    var headers = {};
                    for (var _i4 = 0; _i4 < headerBuilders.length; _i4++) extendIfDefined(headers, (0, 
                    headerBuilders[_i4])(headers));
                    var res;
                    url && (res = transport({
                        method: "POST",
                        url: url,
                        headers: headers,
                        json: {
                            events: events,
                            meta: meta,
                            tracking: tracking,
                            metrics: metrics
                        },
                        enableSendBeacon: enableSendBeacon
                    }).catch(src_util_noop));
                    amplitudeApiKey && transport({
                        method: "POST",
                        url: "https://api2.amplitude.com/2/httpapi",
                        headers: {},
                        json: {
                            api_key: amplitudeApiKey,
                            events: tracking.map((function(payload) {
                                return _extends({
                                    event_type: payload.transition_name || "event",
                                    event_properties: payload
                                }, payload);
                            }))
                        },
                        enableSendBeacon: enableSendBeacon
                    }).catch(src_util_noop);
                    events = [];
                    tracking = [];
                    metrics = [];
                    return promise_ZalgoPromise.resolve(res).then(src_util_noop);
                }
            }));
        }
        var flush = function(method, delay) {
            void 0 === delay && (delay = 50);
            var promise;
            var timeout;
            return setFunctionName((function() {
                timeout && clearTimeout(timeout);
                var localPromise = promise = promise || new promise_ZalgoPromise;
                timeout = setTimeout((function() {
                    promise = null;
                    timeout = null;
                    promise_ZalgoPromise.try(method).then((function(result) {
                        localPromise.resolve(result);
                    }), (function(err) {
                        localPromise.reject(err);
                    }));
                }), delay);
                return localPromise;
            }), getFunctionName(method) + "::promiseDebounced");
        }(immediateFlush);
        function log(level, event, payload) {
            void 0 === payload && (payload = {});
            if (!dom_isBrowser()) return logger;
            prefix && (event = prefix + "_" + event);
            var logPayload = _extends({}, objFilter(payload), {
                timestamp: Date.now().toString()
            });
            for (var _i6 = 0; _i6 < payloadBuilders.length; _i6++) extendIfDefined(logPayload, (0, 
            payloadBuilders[_i6])(logPayload));
            !function(level, event, payload) {
                events.push({
                    level: level,
                    event: event,
                    payload: payload
                });
                -1 !== AUTO_FLUSH_LEVEL.indexOf(level) && flush();
            }(level, event, logPayload);
            print(level, event, logPayload);
            return logger;
        }
        function addBuilder(builders, builder) {
            builders.push(builder);
            return logger;
        }
        dom_isBrowser() && (method = flush, time = flushInterval, function loop() {
            setTimeout((function() {
                method();
                loop();
            }), time);
        }());
        var method, time;
        if ("object" == typeof window) {
            window.addEventListener("beforeunload", (function() {
                immediateFlush();
            }));
            window.addEventListener("unload", (function() {
                immediateFlush();
            }));
            window.addEventListener("pagehide", (function() {
                immediateFlush();
            }));
        }
        var logger = {
            debug: function(event, payload) {
                return log("debug", event, payload);
            },
            info: function(event, payload) {
                return log("info", event, payload);
            },
            warn: function(event, payload) {
                return log("warn", event, payload);
            },
            error: function(event, payload) {
                return log("error", event, payload);
            },
            track: function(payload) {
                void 0 === payload && (payload = {});
                if (!dom_isBrowser()) return logger;
                var trackingPayload = objFilter(payload);
                for (var _i8 = 0; _i8 < trackingBuilders.length; _i8++) extendIfDefined(trackingPayload, (0, 
                trackingBuilders[_i8])(trackingPayload));
                print("debug", "track", trackingPayload);
                tracking.push(trackingPayload);
                return logger;
            },
            metric: function(metricPayload) {
                if (!dom_isBrowser()) return logger;
                print("debug", "metric." + metricPayload.name, metricPayload.dimensions || {});
                metrics.push(metricPayload);
                return logger;
            },
            flush: flush,
            immediateFlush: immediateFlush,
            addPayloadBuilder: function(builder) {
                return addBuilder(payloadBuilders, builder);
            },
            addMetaBuilder: function(builder) {
                return addBuilder(metaBuilders, builder);
            },
            addTrackingBuilder: function(builder) {
                return addBuilder(trackingBuilders, builder);
            },
            addHeaderBuilder: function(builder) {
                return addBuilder(headerBuilders, builder);
            },
            setTransport: function(newTransport) {
                transport = newTransport;
                return logger;
            },
            configure: function(opts) {
                opts.url && (url = opts.url);
                opts.prefix && (prefix = opts.prefix);
                opts.logLevel && (logLevel = opts.logLevel);
                opts.transport && (transport = opts.transport);
                opts.amplitudeApiKey && (amplitudeApiKey = opts.amplitudeApiKey);
                opts.flushInterval && (flushInterval = opts.flushInterval);
                opts.enableSendBeacon && (enableSendBeacon = opts.enableSendBeacon);
                return logger;
            },
            __buffer__: {
                get events() {
                    return events;
                },
                get tracking() {
                    return tracking;
                },
                get metrics() {
                    return metrics;
                }
            }
        };
        Object.defineProperty(logger, "__buffer__", {
            writable: !1
        });
        return logger;
    }
    function buildPayPalUrl(path) {
        void 0 === path && (path = "");
        return "" + getPayPalDomain() + path;
    }
    function buildPayPalAPIUrl(path) {
        void 0 === path && (path = "");
        return "" + (domain = getPayPalDomain(), "undefined" != typeof window && void 0 !== window.location && getDomain() === domain ? getPayPalDomain() : __PAYPAL_API_DOMAIN__) + path;
        var domain;
    }
    var getLogger = memoize((function() {
        return Logger({
            url: buildPayPalUrl("/xoplatform/logger/api/logger")
        });
    }));
    memoize((function(clientID) {
        getLogger().info("rest_api_create_access_token");
        var basicAuth = base64encode(clientID + ":");
        return request({
            method: "post",
            url: buildPayPalAPIUrl("/v1/oauth2/token"),
            headers: {
                Authorization: "Basic " + basicAuth
            },
            data: {
                grant_type: "client_credentials"
            }
        }).then((function(_ref) {
            var body = _ref.body;
            if (body && "invalid_client" === body.error) throw new Error("Auth Api invalid client id: " + clientID + ":\n\n" + JSON.stringify(body, null, 4));
            if (!body || !body.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(body, null, 4));
            return body.access_token;
        }));
    }));
    memoize((function() {
        var triggered = {};
        var handlers = {};
        var emitter = {
            on: function(eventName, handler) {
                var handlerList = handlers[eventName] = handlers[eventName] || [];
                handlerList.push(handler);
                var cancelled = !1;
                return {
                    cancel: function() {
                        if (!cancelled) {
                            cancelled = !0;
                            handlerList.splice(handlerList.indexOf(handler), 1);
                        }
                    }
                };
            },
            once: function(eventName, handler) {
                var listener = emitter.on(eventName, (function() {
                    listener.cancel();
                    handler();
                }));
                return listener;
            },
            trigger: function(eventName) {
                for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                var handlerList = handlers[eventName];
                var promises = [];
                if (handlerList) {
                    var _loop = function() {
                        var handler = handlerList[_i2];
                        promises.push(promise_ZalgoPromise.try((function() {
                            return handler.apply(void 0, args);
                        })));
                    };
                    for (var _i2 = 0; _i2 < handlerList.length; _i2++) _loop();
                }
                return promise_ZalgoPromise.all(promises).then(src_util_noop);
            },
            triggerOnce: function(eventName) {
                if (triggered[eventName]) return promise_ZalgoPromise.resolve();
                triggered[eventName] = !0;
                for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                return emitter.trigger.apply(emitter, [ eventName ].concat(args));
            },
            reset: function() {
                handlers = {};
            }
        };
        return emitter;
    }));
    var SUPPORTED_FUNDING_SOURCES = [ FUNDING.PAYPAL, FUNDING.VENMO, FUNDING.ITAU, FUNDING.CREDIT, FUNDING.PAYLATER, FUNDING.APPLEPAY, FUNDING.IDEAL, FUNDING.SEPA, FUNDING.BANCONTACT, FUNDING.GIROPAY, FUNDING.EPS, FUNDING.SOFORT, FUNDING.MYBANK, FUNDING.BLIK, FUNDING.P24, FUNDING.WECHATPAY, FUNDING.PAYU, FUNDING.TRUSTLY, FUNDING.OXXO, FUNDING.BOLETO, FUNDING.BOLETOBANCARIO, FUNDING.MERCADOPAGO, FUNDING.MULTIBANCO, FUNDING.SATISPAY, FUNDING.PAIDY, FUNDING.CARD ];
    var components_excluded = [ "svg", "cdnUrl" ], _excluded2 = [ "render", "name", "logoColor" ], _excluded3 = [ "render", "name" ];
    function SVG(props) {
        var svg = props.svg, cdnUrl = props.cdnUrl, otherProps = _objectWithoutPropertiesLoose(props, components_excluded);
        if (cdnUrl) {
            var _svgProps = _extends({
                src: cdnUrl
            }, otherProps);
            return node_node("img", _svgProps);
        }
        if (!svg) throw new TypeError("Expected svg prop");
        if ("string" != typeof (svg = svg.render((function htmlRenderer(node) {
            if ("component" === node.type) return [].concat(node.renderComponent(htmlRenderer)).join("");
            if ("element" === node.type) {
                var renderedProps = (props = node.props, (keys = Object.keys(props).filter((function(key) {
                    var val = props[key];
                    return "innerHTML" !== key && ("string" == typeof val || "number" == typeof val || !0 === val);
                }))).length ? " " + keys.map((function(key) {
                    var val = props[key];
                    if (!0 === val) return "" + htmlEncode(key);
                    if ("string" != typeof val && "number" != typeof val) throw new TypeError("Unexpected prop type: " + typeof val);
                    return "" === val ? htmlEncode(key) : htmlEncode(key) + '="' + htmlEncode(val.toString()) + '"';
                })).join(" ") : "");
                if (SELF_CLOSING_TAGS[node.name]) return "<" + node.name + renderedProps + " />";
                var renderedChildren = "string" == typeof node.props.innerHTML ? node.props.innerHTML : node.renderChildren(htmlRenderer).join("");
                return "<" + node.name + renderedProps + ">" + renderedChildren + "</" + node.name + ">";
            }
            var props, keys;
            if ("text" === node.type) return htmlEncode(node.text);
            throw new TypeError("Unhandleable node: " + node.type);
        })))) throw new TypeError("Expected svg prop to be a string or jsx node");
        var svgProps = _extends({
            src: svgToBase64(svg)
        }, otherProps);
        return node_node("img", svgProps);
    }
    function SVGLogo(_ref) {
        var render = _ref.render, name = _ref.name, logoColor = _ref.logoColor, props = _objectWithoutPropertiesLoose(_ref, _excluded2);
        return node_node(SVG, _extends({}, props, {
            svg: render ? render() : null,
            alt: "",
            class: "paypal-logo paypal-logo-" + name + " " + (logoColor ? "paypal-logo-color-" + logoColor : "")
        }));
    }
    function SVGCardLogo(_ref2) {
        var render = _ref2.render, name = _ref2.name, props = _objectWithoutPropertiesLoose(_ref2, _excluded3);
        return node_node(SVG, _extends({}, props, {
            svg: render ? render() : null,
            alt: (string = name, string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()),
            class: "paypal-logo-card paypal-logo-card-" + name
        }));
        var string;
    }
    function getLogoColors(name, logoColorMap, logoColor) {
        var colors;
        logoColor && (colors = logoColorMap[logoColor]);
        colors || (colors = logoColorMap.default);
        if (!colors) throw new Error("No " + (logoColor || "default") + " logo available for " + name);
        return colors;
    }
    var logo_excluded2 = [ "logoColor" ];
    var _APPLEPAY_LOGO_COLORS;
    var APPLEPAY_LOGO_COLORS = ((_APPLEPAY_LOGO_COLORS = {}).default = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, _APPLEPAY_LOGO_COLORS.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, _APPLEPAY_LOGO_COLORS.black = {
        primary: "#000000",
        secondary: "#000000"
    }, _APPLEPAY_LOGO_COLORS);
    function _objectDestructuringEmpty(obj) {
        if (null == obj) throw new TypeError("Cannot destructure undefined");
    }
    function ApplePayMarkInlineSVG(_ref2) {
        var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
        var svg = node_node("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            id: "Artwork",
            x: "0px",
            y: "0px",
            width: "165.52107px",
            height: "105.9651px",
            viewBox: "0 0 165.52107 105.9651",
            "enable-background": "new 0 0 165.52107 105.9651"
        }, node_node("g", null, node_node("path", {
            id: "XMLID_4_",
            d: "M150.69807,0H14.82318c-0.5659,0-1.1328,0-1.69769,0.0033c-0.47751,0.0034-0.95391,0.0087-1.43031,0.0217   c-1.039,0.0281-2.0869,0.0894-3.1129,0.2738c-1.0424,0.1876-2.0124,0.4936-2.9587,0.9754   c-0.9303,0.4731-1.782,1.0919-2.52009,1.8303c-0.73841,0.7384-1.35721,1.5887-1.83021,2.52   c-0.4819,0.9463-0.7881,1.9166-0.9744,2.9598c-0.18539,1.0263-0.2471,2.074-0.2751,3.1119   c-0.0128,0.4764-0.01829,0.9528-0.0214,1.4291c-0.0033,0.5661-0.0022,1.1318-0.0022,1.6989V91.142   c0,0.5671-0.0011,1.13181,0.0022,1.69901c0.00311,0.4763,0.0086,0.9527,0.0214,1.4291   c0.028,1.03699,0.08971,2.08469,0.2751,3.11069c0.1863,1.0436,0.4925,2.0135,0.9744,2.9599   c0.473,0.9313,1.0918,1.7827,1.83021,2.52c0.73809,0.7396,1.58979,1.3583,2.52009,1.8302   c0.9463,0.4831,1.9163,0.7892,2.9587,0.9767c1.026,0.1832,2.0739,0.2456,3.1129,0.2737c0.4764,0.0108,0.9528,0.0172,1.43031,0.0194   c0.56489,0.0044,1.13179,0.0044,1.69769,0.0044h135.87489c0.5649,0,1.13181,0,1.69659-0.0044   c0.47641-0.0022,0.95282-0.0086,1.4314-0.0194c1.0368-0.0281,2.0845-0.0905,3.11301-0.2737   c1.041-0.1875,2.0112-0.4936,2.9576-0.9767c0.9313-0.4719,1.7805-1.0906,2.52011-1.8302c0.7372-0.7373,1.35599-1.5887,1.8302-2.52   c0.48299-0.9464,0.78889-1.9163,0.97429-2.9599c0.1855-1.026,0.2457-2.0737,0.2738-3.11069   c0.013-0.4764,0.01941-0.9528,0.02161-1.4291c0.00439-0.5672,0.00439-1.1319,0.00439-1.69901V14.8242   c0-0.5671,0-1.1328-0.00439-1.6989c-0.0022-0.4763-0.00861-0.9527-0.02161-1.4291c-0.02811-1.0379-0.0883-2.0856-0.2738-3.1119   c-0.18539-1.0432-0.4913-2.0135-0.97429-2.9598c-0.47421-0.9313-1.093-1.7816-1.8302-2.52   c-0.73961-0.7384-1.58881-1.3572-2.52011-1.8303c-0.9464-0.4818-1.9166-0.7878-2.9576-0.9754   c-1.0285-0.1844-2.0762-0.2457-3.11301-0.2738c-0.47858-0.013-0.95499-0.0183-1.4314-0.0217C151.82988,0,151.26297,0,150.69807,0   L150.69807,0z"
        }), node_node("path", {
            id: "XMLID_3_",
            fill: "#FFFFFF",
            d: "M150.69807,3.532l1.67149,0.0032c0.4528,0.0032,0.90561,0.0081,1.36092,0.0205   c0.79201,0.0214,1.71849,0.0643,2.58209,0.2191c0.7507,0.1352,1.38029,0.3408,1.9845,0.6484   c0.5965,0.3031,1.14301,0.7003,1.62019,1.1768c0.479,0.4797,0.87671,1.0271,1.18381,1.6302   c0.30589,0.5995,0.51019,1.2261,0.64459,1.9823c0.1544,0.8542,0.1971,1.7832,0.21881,2.5801   c0.01219,0.4498,0.01819,0.8996,0.0204,1.3601c0.00429,0.5569,0.0042,1.1135,0.0042,1.6715V91.142   c0,0.558,0.00009,1.1136-0.0043,1.6824c-0.00211,0.4497-0.0081,0.8995-0.0204,1.3501c-0.02161,0.7957-0.0643,1.7242-0.2206,2.5885   c-0.13251,0.7458-0.3367,1.3725-0.64429,1.975c-0.30621,0.6016-0.70331,1.1484-1.18022,1.6251   c-0.47989,0.48-1.0246,0.876-1.62819,1.1819c-0.5997,0.3061-1.22821,0.51151-1.97151,0.6453   c-0.88109,0.157-1.84639,0.2002-2.57339,0.2199c-0.4574,0.0103-0.9126,0.01649-1.37889,0.0187   c-0.55571,0.0043-1.1134,0.0042-1.6692,0.0042H14.82318c-0.0074,0-0.0146,0-0.0221,0c-0.5494,0-1.0999,0-1.6593-0.0043   c-0.4561-0.00211-0.9112-0.0082-1.3512-0.0182c-0.7436-0.0201-1.7095-0.0632-2.5834-0.2193   c-0.74969-0.1348-1.3782-0.3402-1.9858-0.6503c-0.59789-0.3032-1.1422-0.6988-1.6223-1.1797   c-0.4764-0.4756-0.8723-1.0207-1.1784-1.6232c-0.3064-0.6019-0.5114-1.2305-0.64619-1.9852   c-0.15581-0.8626-0.19861-1.7874-0.22-2.5777c-0.01221-0.4525-0.01731-0.9049-0.02021-1.3547l-0.0022-1.3279l0.0001-0.3506V14.8242   l-0.0001-0.3506l0.0021-1.3251c0.003-0.4525,0.0081-0.9049,0.02031-1.357c0.02139-0.7911,0.06419-1.7163,0.22129-2.5861   c0.1336-0.7479,0.3385-1.3765,0.6465-1.9814c0.3037-0.5979,0.7003-1.1437,1.17921-1.6225   c0.477-0.4772,1.02309-0.8739,1.62479-1.1799c0.6011-0.3061,1.2308-0.5116,1.9805-0.6465c0.8638-0.1552,1.7909-0.198,2.5849-0.2195   c0.4526-0.0123,0.9052-0.0172,1.3544-0.0203l1.6771-0.0033H150.69807"
        }), node_node("g", null, node_node("g", null, node_node("path", {
            d: "M45.1862,35.64053c1.41724-1.77266,2.37897-4.15282,2.12532-6.58506c-2.07464,0.10316-4.60634,1.36871-6.07207,3.14276     c-1.31607,1.5192-2.4809,3.99902-2.17723,6.3293C41.39111,38.72954,43.71785,37.36345,45.1862,35.64053"
        }), node_node("path", {
            d: "M47.28506,38.98252c-3.38211-0.20146-6.25773,1.91951-7.87286,1.91951c-1.61602,0-4.08931-1.81799-6.76438-1.76899     c-3.48177,0.05114-6.71245,2.01976-8.4793,5.15079c-3.63411,6.2636-0.95904,15.55471,2.57494,20.65606     c1.71618,2.5238,3.78447,5.30269,6.50976,5.20287c2.57494-0.10104,3.58421-1.66732,6.71416-1.66732     c3.12765,0,4.03679,1.66732,6.76252,1.61681c2.82665-0.05054,4.59381-2.52506,6.30997-5.05132     c1.96878-2.877,2.77473-5.65498,2.82542-5.80748c-0.0507-0.05051-5.45058-2.12204-5.50065-8.33358     c-0.05098-5.20101,4.23951-7.6749,4.44144-7.82832C52.3832,39.4881,48.5975,39.08404,47.28506,38.98252"
        })), node_node("g", null, node_node("path", {
            d: "M76.73385,31.94381c7.35096,0,12.4697,5.06708,12.4697,12.44437c0,7.40363-5.22407,12.49704-12.65403,12.49704h-8.13892     v12.94318h-5.88037v-37.8846H76.73385z M68.41059,51.9493h6.74732c5.11975,0,8.0336-2.75636,8.0336-7.53479     c0-4.77792-2.91385-7.50845-8.00727-7.50845h-6.77365V51.9493z"
        }), node_node("path", {
            d: "M90.73997,61.97864c0-4.8311,3.70182-7.79761,10.26583-8.16526l7.56061-0.44614v-2.12639     c0-3.07185-2.07423-4.90959-5.53905-4.90959c-3.28251,0-5.33041,1.57492-5.82871,4.04313h-5.35574     c0.31499-4.98859,4.56777-8.66407,11.3941-8.66407c6.69466,0,10.97377,3.54432,10.97377,9.08388v19.03421h-5.43472v-4.54194     h-0.13065c-1.60125,3.07185-5.09341,5.01441-8.71623,5.01441C94.52078,70.30088,90.73997,66.94038,90.73997,61.97864z      M108.56641,59.4846v-2.17905l-6.8,0.41981c-3.38683,0.23649-5.30306,1.73291-5.30306,4.09579     c0,2.41504,1.99523,3.99046,5.04075,3.99046C105.46823,65.81161,108.56641,63.08108,108.56641,59.4846z"
        }), node_node("path", {
            d: "M119.34167,79.9889v-4.5946c0.4193,0.10483,1.36425,0.10483,1.83723,0.10483c2.6252,0,4.04313-1.10245,4.90908-3.9378     c0-0.05267,0.49931-1.68025,0.49931-1.70658l-9.97616-27.64562h6.14268l6.98432,22.47371h0.10432l6.98433-22.47371h5.9857     l-10.34483,29.06304c-2.36186,6.69517-5.0924,8.84789-10.81577,8.84789C121.17891,80.12006,119.76098,80.06739,119.34167,79.9889     z"
        })))), node_node("g", null), node_node("g", null), node_node("g", null), node_node("g", null), node_node("g", null), node_node("g", null));
        return node_node(SVGLogo, _extends({}, props, {
            name: "applepay",
            alt: "Apple Pay mark",
            "aria-label": "Apple Pay mark",
            render: function() {
                return svg;
            }
        }));
    }
    var bancontact_logo_excluded2 = [ "logoColor" ];
    var _BANCONTACT_LOGO_COLO;
    var BANCONTACT_LOGO_COLORS = ((_BANCONTACT_LOGO_COLO = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#FFFFFF",
        quaternary: "#FFFFFF"
    }, _BANCONTACT_LOGO_COLO.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#FFFFFF",
        quaternary: "#FFFFFF"
    }, _BANCONTACT_LOGO_COLO.black = {
        primary: "#1E3764",
        secondary: "#005AB9",
        tertiary: "#FBA900",
        quaternary: "#FFD800"
    }, _BANCONTACT_LOGO_COLO);
    var glyph_logo_excluded2 = [ "logoColor" ];
    var _GLYPH_BANK_LOGO_COLO;
    var GLYPH_BANK_LOGO_COLORS = ((_GLYPH_BANK_LOGO_COLO = {}).default = {
        primary: "#142C8E"
    }, _GLYPH_BANK_LOGO_COLO);
    function GlyphBankInlineSVG(_temp2) {
        var _ref3 = void 0 === _temp2 ? {} : _temp2, logoColor = _ref3.logoColor, props = _objectWithoutPropertiesLoose(_ref3, glyph_logo_excluded2);
        var svg = (primary = getLogoColors("bank", GLYPH_BANK_LOGO_COLORS, logoColor).primary, 
        node_node("svg", {
            width: "32",
            height: "21",
            viewBox: "0 0 32 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("g", {
            "clip-path": "url(#clip0_3480_40125)"
        }, node_node("rect", {
            width: "31.4286",
            height: "20.1533",
            fill: "#F7F5F0"
        }), node_node("path", {
            d: "M20.442 14.4427H10.9873C10.7057 14.4427 10.4766 14.678 10.4766 14.9671V15.5922C10.4766 15.888 10.7057 16.1233 10.9873 16.1233H20.4355C20.717 16.1233 20.9462 15.888 20.9462 15.5989V14.9738C20.9528 14.678 20.7236 14.4427 20.442 14.4427Z",
            fill: primary
        }), node_node("path", {
            d: "M15.7758 4.03867C15.7356 4.02878 15.6937 4.02878 15.6535 4.03867L10.6773 5.26477C10.5596 5.29379 10.4766 5.4019 10.4766 5.52623V6.75275C10.4766 6.90125 10.5938 7.02164 10.7385 7.02164H20.6908C20.8355 7.02164 20.9528 6.90125 20.9528 6.75275V5.52623C20.9528 5.4019 20.8697 5.29379 20.752 5.26477L15.7758 4.03867Z",
            fill: primary
        }), node_node("path", {
            d: "M11.9956 12.4261C11.7075 12.4261 11.4718 12.6681 11.4718 12.9639V13.3C11.4718 13.3739 11.5307 13.4344 11.6028 13.4344H19.8528C19.9248 13.4344 19.9837 13.3739 19.9837 13.3V12.9639C19.9837 12.6681 19.748 12.4261 19.4599 12.4261H19.1849V9.03824H19.4664C19.7545 9.03824 19.9903 8.79625 19.9903 8.50048V8.16438C19.9903 8.09044 19.9313 8.02994 19.8593 8.02994H16.2188C16.1468 8.02994 16.0879 8.09044 16.0879 8.16438V8.50048C16.0879 8.79625 16.3236 9.03824 16.6117 9.03824H16.8932V12.4261H14.5688V9.03824H14.8504C15.1385 9.03824 15.3742 8.79625 15.3742 8.50048V8.16438C15.3742 8.09044 15.3153 8.02994 15.2432 8.02994H11.6093C11.5373 8.02994 11.4783 8.09044 11.4783 8.16438V8.50048C11.4783 8.79625 11.7141 9.03824 12.0022 9.03824H12.2837V12.4261H11.9956Z",
            fill: primary
        })), node_node("defs", null, node_node("clipPath", {
            id: "clip0_3480_40125"
        }, node_node("rect", {
            width: "31.4286",
            height: "20.1533",
            rx: "4",
            fill: "white"
        })))));
        var primary;
        return node_node(SVGLogo, _extends({}, props, {
            name: "bank",
            render: function() {
                return svg;
            }
        }));
    }
    function AmexLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
            fill: "rgb(20, 119, 190)"
        }), node_node("path", {
            d: "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
            fill: "rgb(255, 255, 255)"
        }), node_node("path", {
            d: "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
            fill: "rgb(255, 255, 255)"
        }));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "amex",
            render: function() {
                return svg;
            }
        }));
    }
    function DiscoverLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
            fill: "rgb(17, 49, 82)"
        }), node_node("path", {
            d: "M 5.498 13.349 C 5.16 13.654 4.722 13.787 4.028 13.787 L 3.738 13.787 L 3.738 10.141 L 4.028 10.141 C 4.722 10.141 5.143 10.265 5.498 10.587 C 5.868 10.917 6.093 11.431 6.093 11.959 C 6.093 12.489 5.869 13.019 5.498 13.349 Z M 4.243 9.206 L 2.666 9.206 L 2.666 14.721 L 4.236 14.721 C 5.069 14.721 5.671 14.524 6.199 14.084 C 6.829 13.564 7.199 12.779 7.199 11.968 C 7.199 10.34 5.985 9.206 4.243 9.206 Z M 7.696 14.721 L 8.77 14.721 L 8.77 9.207 L 7.696 9.207 M 11.393 11.323 C 10.748 11.083 10.559 10.926 10.559 10.628 C 10.559 10.281 10.897 10.018 11.359 10.018 C 11.681 10.018 11.946 10.15 12.226 10.464 L 12.788 9.727 C 12.326 9.322 11.773 9.115 11.17 9.115 C 10.195 9.115 9.452 9.793 9.452 10.695 C 9.452 11.455 9.798 11.845 10.807 12.208 C 11.227 12.356 11.442 12.455 11.55 12.522 C 11.765 12.662 11.872 12.862 11.872 13.092 C 11.872 13.54 11.518 13.872 11.038 13.872 C 10.528 13.872 10.114 13.614 9.868 13.136 L 9.173 13.806 C 9.668 14.532 10.263 14.856 11.08 14.856 C 12.196 14.856 12.98 14.111 12.98 13.044 C 12.98 12.168 12.617 11.771 11.395 11.324 Z M 13.316 11.968 C 13.316 13.588 14.586 14.845 16.223 14.845 C 16.685 14.845 17.081 14.755 17.57 14.525 L 17.57 13.258 C 17.14 13.688 16.76 13.862 16.273 13.862 C 15.191 13.862 14.423 13.077 14.423 11.962 C 14.423 10.902 15.215 10.067 16.223 10.067 C 16.735 10.067 17.123 10.25 17.57 10.687 L 17.57 9.421 C 17.098 9.181 16.71 9.081 16.248 9.081 C 14.621 9.081 13.316 10.364 13.316 11.968 Z M 26.088 12.911 L 24.62 9.206 L 23.446 9.206 L 25.783 14.862 L 26.361 14.862 L 28.741 9.207 L 27.576 9.207 M 29.226 14.721 L 32.272 14.721 L 32.272 13.787 L 30.299 13.787 L 30.299 12.299 L 32.199 12.299 L 32.199 11.365 L 30.299 11.365 L 30.299 10.141 L 32.272 10.141 L 32.272 9.206 L 29.226 9.206 M 34.373 11.745 L 34.059 11.745 L 34.059 10.075 L 34.389 10.075 C 35.059 10.075 35.423 10.355 35.423 10.893 C 35.423 11.447 35.059 11.745 34.373 11.745 Z M 36.528 10.835 C 36.528 9.802 35.818 9.207 34.578 9.207 L 32.986 9.207 L 32.986 14.721 L 34.059 14.721 L 34.059 12.506 L 34.199 12.506 L 35.686 14.721 L 37.006 14.721 L 35.273 12.398 C 36.083 12.233 36.528 11.678 36.528 10.835 Z",
            fill: "rgb(255, 255, 255)"
        }), node_node("g", {
            id: "MarkingBase_1_",
            transform: "matrix(0.089776, 0, 0, 0.089776, 2.192296, 5.72498)"
        }, node_node("linearGradient", {
            id: "SVGID_1_",
            gradientUnits: "userSpaceOnUse",
            x1: "224.3917",
            y1: "44.1731",
            x2: "201.33",
            y2: "80.2807",
            gradientTransform: "matrix(1 0 0 -1 0 141.7323)"
        }, node_node("stop", {
            offset: "0",
            "stop-color": "#F89F21"
        }), node_node("stop", {
            offset: "0.2502",
            "stop-color": "#F79A23"
        }), node_node("stop", {
            offset: "0.5331",
            "stop-color": "#F78E22"
        }), node_node("stop", {
            offset: "0.6196",
            "stop-color": "#F68721"
        }), node_node("stop", {
            offset: "0.7232",
            "stop-color": "#F48220"
        }), node_node("stop", {
            offset: "1",
            "stop-color": "#F27623"
        })), node_node("circle", {
            fill: "url(#SVGID_1_)",
            cx: "207.343",
            cy: "70.866",
            r: "33.307"
        }), node_node("linearGradient", {
            id: "SVGID_2_",
            gradientUnits: "userSpaceOnUse",
            x1: "220.7487",
            y1: "44.664",
            x2: "187.0436",
            y2: "110.5426",
            gradientTransform: "matrix(1 0 0 -1 0 141.7323)"
        }, node_node("stop", {
            offset: "0",
            "stop-color": "#F68721",
            "stop-opacity": "0"
        }), node_node("stop", {
            offset: "0.3587",
            "stop-color": "#E27027",
            "stop-opacity": "0.2704"
        }), node_node("stop", {
            offset: "0.703",
            "stop-color": "#D4612C",
            "stop-opacity": "0.5299"
        }), node_node("stop", {
            offset: "0.9816",
            "stop-color": "#D15D2D",
            "stop-opacity": "0.74"
        })), node_node("circle", {
            opacity: "0.65",
            fill: "url(#SVGID_2_)",
            cx: "207.343",
            cy: "70.866",
            r: "33.307"
        })), node_node("g", {
            id: "Orange_1_",
            "enable-background": "new    ",
            transform: "matrix(0.469224, 0, 0, 0.469224, 13.785085, 6.199149)"
        }, node_node("g", {
            id: "Orange"
        }, node_node("g", null, node_node("path", {
            d: "M13,38c20.1,0,40,0,40,0c1.7,0,3-1.3,3-3V18C56,18,51.2,31.8,13,38z",
            fill: "rgb(255, 129, 38)"
        })))));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "discover",
            render: function() {
                return svg;
            }
        }));
    }
    function EloLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
            fill: "rgb(21, 21, 21)"
        }), node_node("path", {
            class: "st0",
            d: "M 9.229 8.55 C 9.592 8.431 9.977 8.365 10.382 8.365 C 12.14 8.365 13.602 9.613 13.939 11.268 L 16.427 10.762 C 15.855 7.946 13.365 5.824 10.379 5.824 C 9.693 5.824 9.037 5.935 8.42 6.142 L 9.229 8.55 Z",
            fill: "rgb(255, 205, 5)"
        }), node_node("path", {
            class: "st1",
            d: "M 6.292 16.616 L 7.973 14.716 C 7.221 14.052 6.749 13.08 6.749 11.999 C 6.749 10.917 7.221 9.945 7.973 9.279 L 6.292 7.38 C 5.015 8.51 4.209 10.16 4.209 11.999 C 4.209 13.836 5.019 15.488 6.292 16.616",
            fill: "rgb(0, 164, 224)"
        }), node_node("path", {
            class: "st2",
            d: "M 13.939 12.723 C 13.602 14.379 12.136 15.626 10.382 15.626 C 9.977 15.626 9.592 15.562 9.229 15.442 L 8.422 17.849 C 9.039 18.055 9.698 18.167 10.382 18.167 C 13.365 18.167 15.855 16.05 16.427 13.235 L 13.939 12.723 Z",
            fill: "rgb(239, 66, 35)"
        }), node_node("path", {
            d: "M 18.603 14.794 C 18.521 14.663 18.412 14.453 18.343 14.296 C 17.948 13.381 17.932 12.434 18.264 11.526 C 18.631 10.527 19.33 9.765 20.233 9.378 C 21.366 8.889 22.626 8.986 23.713 9.632 C 24.406 10.028 24.897 10.641 25.269 11.506 C 25.319 11.615 25.358 11.737 25.398 11.835 L 18.603 14.794 Z M 20.87 10.845 C 20.066 11.194 19.65 11.949 19.734 12.834 L 23.151 11.363 C 22.565 10.675 21.802 10.444 20.87 10.845 Z M 23.578 14.044 C 23.578 14.044 23.578 14.044 23.578 14.044 L 23.508 13.998 C 23.302 14.331 22.985 14.595 22.584 14.768 C 21.82 15.1 21.113 15.014 20.602 14.569 L 20.559 14.643 C 20.559 14.643 20.559 14.643 20.559 14.643 L 19.688 15.936 C 19.905 16.088 20.134 16.213 20.376 16.315 C 21.333 16.712 22.311 16.693 23.279 16.273 C 23.978 15.971 24.527 15.509 24.9 14.924 L 23.578 14.044 Z",
            fill: "rgb(255, 255, 255)"
        }), node_node("path", {
            d: "M 27.77 7.466 L 27.77 14.673 L 28.891 15.13 L 28.254 16.614 L 27.018 16.1 C 26.742 15.979 26.552 15.797 26.409 15.588 C 26.272 15.377 26.171 15.085 26.171 14.698 L 26.171 7.466 L 27.77 7.466 Z",
            fill: "rgb(255, 255, 255)"
        }), node_node("g", {
            transform: "matrix(0.037801, 0, 0, 0.037801, 1.0913, 0.089785)"
        }, node_node("path", {
            d: "M782.7,337.2c0-16.2,7.2-30.8,18.5-40.7l-30.4-33.9c-20.6,18.2-33.6,44.9-33.6,74.6c0,29.7,12.9,56.4,33.6,74.7l30.4-34 C789.8,367.9,782.6,353.4,782.7,337.2z",
            fill: "rgb(255, 255, 255)"
        }), node_node("path", {
            d: "M836.7,391.4c-6,0-11.8-1-17.1-2.8L805,431.7c9.9,3.3,20.6,5.1,31.6,5.2c48.2,0,88.4-34.1,97.7-79.6l-44.7-9.1 C884.6,372.9,862.8,391.4,836.7,391.4z",
            fill: "rgb(255, 255, 255)"
        }), node_node("path", {
            d: "M836.8,237.6c-11,0-21.7,1.8-31.6,5.1l14.4,43.2c5.4-1.8,11.2-2.8,17.1-2.8c26.2,0,48,18.6,53,43.3l44.7-9.1 C925.2,272,885,237.7,836.8,237.6z",
            fill: "rgb(255, 255, 255)"
        })));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "elo",
            render: function() {
                return svg;
            }
        }));
    }
    function HiperLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
            fill: "rgb(243, 97, 24)"
        }), node_node("path", {
            id: "path16",
            fill: "rgb(255, 255, 255)",
            style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
            d: "M 3.206 6.45 L 3.206 16.929 L 5.586 16.929 L 5.586 12.545 L 9.489 12.545 L 9.489 16.929 L 11.853 16.929 L 11.853 6.45 L 9.489 6.45 L 9.489 10.477 L 5.586 10.477 L 5.586 6.45 L 3.206 6.45"
        }), node_node("path", {
            id: "path18",
            fill: "rgb(255, 255, 255)",
            style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
            d: "M 32.319 13.882 C 32.351 13.71 32.397 13.353 32.397 12.949 C 32.397 11.068 31.464 9.155 29.008 9.155 C 26.364 9.155 25.167 11.285 25.167 13.213 C 25.167 15.592 26.644 17.085 29.225 17.085 C 30.251 17.085 31.2 16.929 31.977 16.618 L 31.666 15.017 C 31.029 15.219 30.376 15.328 29.567 15.328 C 28.463 15.328 27.499 14.861 27.422 13.882 Z M 27.406 12.265 C 27.468 11.628 27.873 10.725 28.868 10.725 C 29.956 10.725 30.205 11.689 30.205 12.265 L 27.406 12.265"
        }), node_node("path", {
            id: "path20",
            fill: "rgb(255, 255, 255)",
            style: "fill-opacity: 1; fill-rule: nonzero; stroke: none;",
            d: "M 33.155 16.929 L 35.519 16.929 L 35.519 13.073 C 35.519 12.887 35.533 12.7 35.565 12.545 C 35.72 11.814 36.31 11.348 37.182 11.348 C 37.446 11.348 37.648 11.378 37.819 11.41 L 37.819 9.186 C 37.648 9.155 37.539 9.155 37.321 9.155 C 36.591 9.155 35.658 9.621 35.269 10.725 L 35.207 10.725 L 35.129 9.326 L 33.092 9.326 C 33.123 9.979 33.155 10.709 33.155 11.829 L 33.155 16.929"
        }), node_node("path", {
            id: "path22",
            fill: "rgb(254, 234, 1)",
            style: "fill-opacity: 1; fill-rule: evenodd; stroke: none;",
            d: "M 14.256 6.028 C 14.927 6.028 15.472 6.572 15.472 7.243 C 15.472 7.914 14.927 8.458 14.256 8.458 C 13.585 8.458 13.041 7.914 13.041 7.243 C 13.041 6.572 13.585 6.028 14.256 6.028"
        }), node_node("path", {
            id: "path24",
            fill: "rgb(255, 255, 255)",
            style: "fill-opacity: 1; fill-rule: evenodd; stroke: none;",
            d: "M 19.247 15.159 L 20.433 15.159 C 21.624 15.159 22.163 14.395 22.163 13.6 C 22.163 12.805 22.106 11.006 20.633 11.006 C 18.943 11.006 19.218 13.238 19.224 14.408 C 19.226 14.658 19.24 14.908 19.247 15.159 Z M 13.041 9.315 L 15.472 9.315 L 15.472 13.6 C 15.472 14.395 15.912 15.157 16.887 15.159 C 16.894 13.229 16.886 11.243 16.822 9.315 L 18.852 9.315 C 18.896 9.687 18.936 10.059 18.973 10.432 C 19.932 8.514 22.954 8.937 23.971 10.555 C 25.022 12.228 25.379 17.017 20.433 17.017 L 19.282 17.017 C 19.293 17.988 19.295 18.963 19.295 19.936 L 16.865 19.936 C 16.865 19.001 16.871 18.022 16.878 17.016 C 14.252 17.007 13.041 15.339 13.041 13.6 L 13.041 9.315"
        }));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "hiper",
            render: function() {
                return svg;
            }
        }));
    }
    function JcbLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("defs", null, node_node("pattern", {
            id: "pattern-0",
            x: "0",
            y: "0",
            width: "20",
            height: "20",
            patternUnits: "userSpaceOnUse",
            viewBox: "0 0 100 100"
        }, node_node("path", {
            d: "M 0 0 L 50 0 L 50 100 L 0 100 Z",
            style: "fill: black;"
        }))), node_node("path", {
            d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
            fill: "rgb(255, 255, 255)",
            style: "stroke: rgb(233, 234, 231);"
        }), node_node("g", {
            transform: "matrix(0.100306, 0, 0, 0.100306, 4.733743, 10.105099)",
            id: "g6321"
        }, node_node("g", {
            transform: "matrix(1.8215159,0,0,1.8215159,-8.5437653,-109.83667)",
            id: "g6323"
        }, node_node("path", {
            style: "fill:#ffffff",
            id: "path6325",
            d: "m 174,108.3 c 0,14 -11.4,25.4 -25.4,25.4 l -138.2,0 0,-100.6 c 0,-14 11.4,-25.4 25.4,-25.4 l 138.2,0 0,100.6 z",
            class: "st0"
        }), node_node("g", {
            id: "g6327"
        }, node_node("linearGradient", {
            gradientTransform: "matrix(1.125,0,0,1.125,-11.9755,-13.8615)",
            y2: "81.398598",
            x2: "157.3299",
            y1: "81.398598",
            x1: "117.3856",
            gradientUnits: "userSpaceOnUse",
            id: "SVGID_1_"
        }, node_node("stop", {
            id: "stop6330",
            style: "stop-color:#007940",
            offset: "0"
        }), node_node("stop", {
            id: "stop6332",
            style: "stop-color:#00873F",
            offset: "0.2285"
        }), node_node("stop", {
            id: "stop6334",
            style: "stop-color:#40A737",
            offset: "0.7433"
        }), node_node("stop", {
            id: "stop6336",
            style: "stop-color:#5CB531",
            offset: "1"
        })), node_node("path", {
            style: "fill:url(#SVGID_1_)",
            id: "path6338",
            d: "m 129,82.5 10.5,0 c 0.3,0 1,-0.1 1.3,-0.1 2,-0.4 3.7,-2.2 3.7,-4.7 0,-2.4 -1.7,-4.2 -3.7,-4.7 -0.3,-0.1 -0.9,-0.1 -1.3,-0.1 l -10.5,0 0,9.6 z",
            class: "st1"
        }), node_node("linearGradient", {
            gradientTransform: "matrix(1.125,0,0,1.125,-11.9755,-13.8615)",
            y2: "75.171402",
            x2: "157.3318",
            y1: "75.171402",
            x1: "117.3844",
            gradientUnits: "userSpaceOnUse",
            id: "SVGID_2_"
        }, node_node("stop", {
            id: "stop6341",
            style: "stop-color:#007940",
            offset: "0"
        }), node_node("stop", {
            id: "stop6343",
            style: "stop-color:#00873F",
            offset: "0.2285"
        }), node_node("stop", {
            id: "stop6345",
            style: "stop-color:#40A737",
            offset: "0.7433"
        }), node_node("stop", {
            id: "stop6347",
            style: "stop-color:#5CB531",
            offset: "1"
        })), node_node("path", {
            style: "fill:url(#SVGID_2_)",
            id: "path6349",
            d: "m 138.3,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,18.9 25.7,0 c 0.6,0 1.3,0 1.8,0.1 5.8,0.3 10.1,3.3 10.1,8.5 0,4.1 -2.9,7.6 -8.3,8.3 l 0,0.2 c 5.9,0.4 10.4,3.7 10.4,8.8 0,5.5 -5,9.1 -11.6,9.1 l -28.2,0 0,37 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.9 -26.6,0 z",
            class: "st2"
        }), node_node("linearGradient", {
            gradientTransform: "matrix(1.125,0,0,1.125,-11.9755,-13.8615)",
            y2: "68.399101",
            x2: "157.33051",
            y1: "68.399101",
            x1: "117.3846",
            gradientUnits: "userSpaceOnUse",
            id: "SVGID_3_"
        }, node_node("stop", {
            id: "stop6352",
            style: "stop-color:#007940",
            offset: "0"
        }), node_node("stop", {
            id: "stop6354",
            style: "stop-color:#00873F",
            offset: "0.2285"
        }), node_node("stop", {
            id: "stop6356",
            style: "stop-color:#40A737",
            offset: "0.7433"
        }), node_node("stop", {
            id: "stop6358",
            style: "stop-color:#5CB531",
            offset: "1"
        })), node_node("path", {
            style: "fill:url(#SVGID_3_)",
            id: "path6360",
            d: "m 143.2,63.1 c 0,-2.4 -1.7,-4 -3.7,-4.3 -0.2,0 -0.7,-0.1 -1,-0.1 l -9.5,0 0,8.8 9.5,0 c 0.3,0 0.9,0 1,-0.1 2,-0.3 3.7,-1.9 3.7,-4.3 z",
            class: "st3"
        })), node_node("linearGradient", {
            gradientTransform: "matrix(1.125,0,0,1.125,-11.9755,-13.8615)",
            y2: "75.171402",
            x2: "68.522102",
            y1: "75.171402",
            x1: "27.9594",
            gradientUnits: "userSpaceOnUse",
            id: "SVGID_4_"
        }, node_node("stop", {
            id: "stop6363",
            style: "stop-color:#1F286F",
            offset: "0"
        }), node_node("stop", {
            id: "stop6365",
            style: "stop-color:#004E94",
            offset: "0.4751"
        }), node_node("stop", {
            id: "stop6367",
            style: "stop-color:#0066B1",
            offset: "0.8261"
        }), node_node("stop", {
            id: "stop6369",
            style: "stop-color:#006FBC",
            offset: "1"
        })), node_node("path", {
            style: "fill:url(#SVGID_4_)",
            id: "path6371",
            d: "m 37.7,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,44.9 c 5.1,2.5 10.4,4.1 15.7,4.1 6.3,0 9.7,-3.8 9.7,-9 l 0,-21.2 15.6,0 0,21.1 c 0,8.2 -5.1,14.9 -22.4,14.9 -10.5,0 -18.7,-2.3 -18.7,-2.3 l 0,38.3 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.8 -26.6,0 z",
            class: "st4"
        }), node_node("linearGradient", {
            gradientTransform: "matrix(1.125,0,0,1.125,-11.9755,-13.8615)",
            y2: "75.171402",
            x2: "111.8553",
            y1: "75.171402",
            x1: "72.459503",
            gradientUnits: "userSpaceOnUse",
            id: "SVGID_5_"
        }, node_node("stop", {
            id: "stop6374",
            style: "stop-color:#6C2C2F",
            offset: "0"
        }), node_node("stop", {
            id: "stop6376",
            style: "stop-color:#882730",
            offset: "0.1735"
        }), node_node("stop", {
            id: "stop6378",
            style: "stop-color:#BE1833",
            offset: "0.5731"
        }), node_node("stop", {
            id: "stop6380",
            style: "stop-color:#DC0436",
            offset: "0.8585"
        }), node_node("stop", {
            id: "stop6382",
            style: "stop-color:#E60039",
            offset: "1"
        })), node_node("path", {
            style: "fill:url(#SVGID_5_)",
            id: "path6384",
            d: "m 88,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,23.8 c 4.6,-3.9 12.6,-6.4 25.5,-5.8 6.9,0.3 14.3,2.2 14.3,2.2 l 0,7.7 c -3.7,-1.9 -8.1,-3.6 -13.8,-4 -9.8,-0.7 -15.7,4.1 -15.7,12.5 0,8.5 5.9,13.3 15.7,12.5 5.7,-0.4 10.1,-2.2 13.8,-4 l 0,7.7 c 0,0 -7.3,1.9 -14.3,2.2 -12.9,0.6 -20.9,-1.9 -25.5,-5.8 l 0,42 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-91 -26.7,0 z",
            class: "st5"
        })), node_node("g", {
            id: "g6386"
        })));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "jcb",
            render: function() {
                return svg;
            }
        }));
    }
    function MastercardLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
            fill: "rgb(62, 57, 57)"
        }), node_node("path", {
            fill: "rgb(255, 95, 0)",
            d: "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589"
        }), node_node("path", {
            d: "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
            fill: "rgb(235, 0, 27)"
        }), node_node("path", {
            d: "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
            fill: "rgb(247, 158, 27)"
        }), node_node("path", {
            d: "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
            fill: "rgb(255, 255, 255)"
        }));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "mastercard",
            render: function() {
                return svg;
            }
        }));
    }
    function VisaLogoInlineSVG(_temp2) {
        var _ref2 = void 0 === _temp2 ? {} : _temp2, props = _extends({}, (_objectDestructuringEmpty(_ref2), 
        _ref2));
        var svg = node_node("svg", {
            width: "40",
            height: "24",
            viewBox: "0 0 40 24",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
            fill: "rgb(33, 86, 154)"
        }), node_node("path", {
            d: "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
            fill: "rgb(255, 255, 255)"
        }));
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "visa",
            render: function() {
                return svg;
            }
        }));
    }
    var card_glyph_logo_excluded2 = [ "logoColor" ];
    var _GLYPH_CARD_LOGO_COLO;
    var GLYPH_CARD_LOGO_COLORS = ((_GLYPH_CARD_LOGO_COLO = {}).default = {
        primary: "#333030"
    }, _GLYPH_CARD_LOGO_COLO.white = {
        primary: "#ffffff"
    }, _GLYPH_CARD_LOGO_COLO.black = {
        primary: "#333030"
    }, _GLYPH_CARD_LOGO_COLO);
    function GlyphCardInlineSVG(_temp2) {
        var _ref3 = void 0 === _temp2 ? {} : _temp2, logoColor = _ref3.logoColor, props = _objectWithoutPropertiesLoose(_ref3, card_glyph_logo_excluded2);
        var svg = (_ref = getLogoColors("card", GLYPH_CARD_LOGO_COLORS, logoColor), node_node("svg", {
            width: "24px",
            height: "18px",
            viewBox: "0 0 24 18",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("g", {
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, node_node("g", {
            transform: "translate(-3.000000, -6.000000)",
            fill: _ref.primary,
            "fill-rule": "nonzero"
        }, node_node("path", {
            d: "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
            id: "Stroke-1"
        })))));
        var _ref;
        return node_node(SVGCardLogo, _extends({}, props, {
            name: "",
            render: function() {
                return svg;
            }
        }));
    }
    var credit_logo_excluded2 = [ "logoColor", "locale" ];
    var _CREDIT_LOGO_COLORS;
    var CREDIT_LOGO_COLORS = ((_CREDIT_LOGO_COLORS = {}).default = {
        primary: "#003087"
    }, _CREDIT_LOGO_COLORS.blue = {
        primary: "#003087"
    }, _CREDIT_LOGO_COLORS.white = {
        primary: "#ffffff"
    }, _CREDIT_LOGO_COLORS.black = {
        primary: "#333030"
    }, _CREDIT_LOGO_COLORS);
    function CreditLogoInlineSVG(_ref3) {
        var logoColor = _ref3.logoColor, locale = _ref3.locale, props = _objectWithoutPropertiesLoose(_ref3, credit_logo_excluded2);
        var svg = function(_ref) {
            var primary = _ref.primary;
            switch (_ref.country) {
              case COUNTRY.DE:
                return node_node("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, node_node("g", {
                    transform: "matrix(1.3333333,0,0,-1.3333333,10,40)",
                    fill: primary
                }, node_node("g", {
                    transform: "matrix(0.17016911,0,0,0.17819595,39.327112,22.053803)"
                }, node_node("path", {
                    d: "m 0,0 -1.35,-8.619 c -0.146,-0.929 -0.946,-1.613 -1.886,-1.613 h -40.935 c -0.922,0 -1.445,1.057 -0.884,1.79 l 29.853,39.007 h -19.237 c -0.683,0 -1.205,0.611 -1.099,1.286 l 1.35,8.619 c 0.145,0.929 0.945,1.613 1.885,1.613 H 7.112 c 0.922,0 1.444,-1.055 0.886,-1.788 L -21.724,1.286 H -1.1 C -0.416,1.286 0.106,0.675 0,0 m 203.3312,42.0833 c 0.684,0 1.206,-0.611 1.1,-1.287 l -4.446,-28.132 c -1.041,-6.73 -2.359,-13.391 -8.395,-18.456 -5.065,-4.302 -12.143,-5.828 -18.248,-5.828 -6.106,0 -12.767,1.526 -16.444,5.828 -4.371,5.065 -3.608,11.726 -2.567,18.456 l 4.394,27.808 c 0.146,0.928 0.946,1.611 1.885,1.611 h 10.668 c 0.683,0 1.205,-0.61 1.1,-1.285 l -4.101,-26.261 c -1.11,-6.799 -1.804,-14.223 6.938,-14.223 8.743,0 10.408,7.424 11.518,14.223 l 4.05,25.932 c 0.145,0.929 0.945,1.614 1.885,1.614 z m -361.2517,-52.3157 h -10.665 c -0.685,0 -1.207,0.611 -1.1,1.287 l 6.249,39.511 h -9.939 c -0.684,0 -1.206,0.61 -1.1,1.285 l 1.35,8.619 c 0.146,0.929 0.946,1.614 1.886,1.614 h 33.145 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -9.608 l -6.198,-39.188 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 m -98.5277,28.8638 h 1.318 c 4.441,0 9.549,0.837 10.477,6.522 0.929,5.688 -2.034,6.505 -6.779,6.522 h -1.927 c -0.58,0 -1.075,-0.422 -1.166,-0.995 z m 23.345,-28.864 h -13.977 c -0.594,0 -1.136,0.341 -1.393,0.878 l -9.224,19.244 h -0.139 l -2.985,-18.819 c -0.119,-0.75 -0.766,-1.303 -1.526,-1.303 h -10.977 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.848,49.725 c 0.119,0.751 0.766,1.304 1.526,1.304 h 19.009 c 10.339,0 17.416,-4.926 15.681,-16.097 -1.179,-7.216 -6.175,-13.461 -13.807,-14.779 l 12.015,-19.748 c 0.451,-0.742 -0.083,-1.692 -0.951,-1.692 m 445.918,52.3159 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 m -304.5422,0 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 M 131.156,1.2855 h 15.004 c 0.684,0 1.206,-0.61 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.928 -0.945,-1.613 -1.885,-1.613 h -26.969 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.927 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.612 1.099,-1.287 z m -33.5321,20.607 2.937,18.58 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.1,-1.287 l -7.8,-49.418 c -0.146,-0.927 -0.946,-1.611 -1.885,-1.611 h -10.664 c -0.685,0 -1.207,0.612 -1.1,1.288 l 3.196,20.152 h -19.636 l -3.145,-19.83 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 h -10.666 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.099,-1.287 l -2.988,-18.904 z m 221.8207,-2.9142 c 0.699,0 1.224,-0.638 1.094,-1.325 -1.342,-7.069 -3.07,-13.21 -8.427,-19.351 -6.245,-7.147 -14.432,-10.269 -23.175,-10.269 -16.444,0 -26.088,11.171 -23.521,27.615 2.706,16.999 15.958,28.17 32.819,28.17 10.373,0 17.776,-4.519 20.966,-13.617 0.198,-0.566 -0.087,-1.189 -0.644,-1.409 l -11.599,-4.569 c -0.598,-0.236 -1.275,0.081 -1.466,0.694 -1.354,4.349 -4.637,7.175 -9.686,7.175 -8.95,0 -14.987,-8.535 -16.236,-16.514 -1.318,-8.118 2.29,-16.374 11.24,-16.374 5.898,0 10.894,3.053 12.351,9.089 h -9.793 c -0.686,0 -1.209,0.614 -1.099,1.292 l 1.373,8.458 c 0.088,0.539 0.553,0.935 1.099,0.935 z m -438.1464,9.9777 -1.132,-7.133 h 14.032 c 0.684,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -12.076 c -0.937,0 -1.735,-0.68 -1.884,-1.605 l -1.198,-7.415 h 14.865 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -26.831 c -0.684,0 -1.206,0.611 -1.099,1.286 l 7.799,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 h 26.834 c 0.683,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.146,-0.929 -0.946,-1.614 -1.886,-1.614 h -12.904 c -0.939,0 -1.738,-0.682 -1.885,-1.609 M 34.135,25.9168 H 33.996 L 25.739,9.2648 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 H 2.701 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 L 55.21,-8.8812 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 H 41.905 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m -216.5493,27.06 h -0.139 l -8.257,-16.652 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 h -11.907 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 l 10.961,-50.089 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 h -12.217 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m 517.9793,-39.4791 -6.146,-39.098 c -0.119,-0.757 0.467,-1.442 1.233,-1.442 h 6.181 c 1.024,0 1.896,0.745 2.055,1.756 l 6.06,38.396 c 0.119,0.757 -0.466,1.442 -1.233,1.442 h -6.917 c -0.614,0 -1.138,-0.447 -1.233,-1.054 m -77.0618,-12.7966 h -7.207 c -0.689,0 -1.334,-0.342 -1.721,-0.912 l -9.942,-14.642 -4.213,14.07 c -0.263,0.88 -1.073,1.484 -1.993,1.484 h -7.084 c -0.856,0 -1.457,-0.842 -1.182,-1.651 l 7.936,-23.294 -7.464,-10.531 c -0.586,-0.827 0.005,-1.97 1.018,-1.97 h 7.2 c 0.683,0 1.322,0.334 1.71,0.895 l 23.968,34.591 c 0.574,0.828 -0.019,1.96 -1.026,1.96 m 58.6183,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.53,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.234,-1.054 l -0.315,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.922,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -116.7913,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.531,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.233,-1.054 l -0.316,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.921,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -43.0269,-0.172 c -0.818,-5.375 -4.924,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.618,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.149 c 1.024,0 1.896,0.745 2.055,1.756 l 1.634,10.358 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.904,3.825 -10.913,3.825 m 108.5272,-14.023 c -0.818,-5.375 -4.923,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.619,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.683 c 0.717,0 1.327,0.521 1.438,1.229 l 1.717,10.885 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.903,3.825 -10.913,3.825 m -161.6161,-40.475 -4.55,18.557 h 3.561 l 3.442,-14.442 7.914,14.442 h 3.798 l -15.748,-27.656 h -3.758 z M 82.525,-65.6994 c -0.989,1.121 -2.328,1.681 -4.016,1.681 -1.319,0 -2.546,-0.356 -3.679,-1.068 -1.135,-0.712 -2.045,-1.701 -2.731,-2.967 -0.686,-1.267 -1.028,-2.691 -1.028,-4.274 0,-1.767 0.5,-3.205 1.503,-4.313 1.002,-1.107 2.242,-1.661 3.719,-1.661 1.346,0 2.612,0.369 3.799,1.108 1.187,0.738 2.136,1.746 2.848,3.026 0.713,1.28 1.069,2.672 1.069,4.175 0,1.74 -0.495,3.171 -1.484,4.293 m -8.527,12.206 -1.661,-10.604 c 0.791,0.976 1.806,1.761 3.047,2.354 1.239,0.594 2.65,0.891 4.233,0.891 1.529,0 2.908,-0.376 4.135,-1.128 1.226,-0.752 2.182,-1.787 2.868,-3.106 0.686,-1.319 1.029,-2.809 1.029,-4.472 0,-2.162 -0.515,-4.153 -1.543,-5.974 -1.029,-1.819 -2.388,-3.264 -4.075,-4.332 -1.689,-1.068 -3.469,-1.602 -5.342,-1.602 -1.635,0 -2.981,0.329 -4.036,0.988 -1.055,0.659 -1.912,1.623 -2.571,2.889 l -0.515,-3.205 h -3.403 l 4.313,27.301 z M 39.4576,-76.5416 c 0.976,-1.121 2.308,-1.681 3.996,-1.681 1.319,0 2.552,0.356 3.699,1.069 1.148,0.712 2.064,1.701 2.751,2.967 0.685,1.266 1.028,2.691 1.028,4.273 0,1.767 -0.501,3.198 -1.503,4.293 -1.003,1.095 -2.256,1.642 -3.759,1.642 -1.32,0 -2.572,-0.37 -3.759,-1.108 -1.187,-0.738 -2.136,-1.741 -2.849,-3.007 -0.712,-1.266 -1.068,-2.651 -1.068,-4.155 0,-1.741 0.488,-3.171 1.464,-4.293 m 9.892,-4.253 0.474,2.968 c -0.844,-1.108 -1.899,-1.986 -3.165,-2.631 -1.266,-0.647 -2.704,-0.969 -4.313,-0.969 -1.53,0 -2.902,0.369 -4.115,1.107 -1.214,0.738 -2.163,1.767 -2.848,3.086 -0.687,1.319 -1.029,2.823 -1.029,4.51 0,2.111 0.507,4.083 1.523,5.916 1.016,1.833 2.347,3.29 3.996,4.372 1.648,1.081 3.357,1.622 5.124,1.622 3.297,0 5.553,-1.279 6.766,-3.837 l 1.781,11.157 h 3.521 l -4.313,-27.301 z m -28.8284,15.3321 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.395,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.688,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.306,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.205,1.484 l -0.476,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.845,1.806 2.124,3.323 3.839,4.55 1.714,1.226 3.824,1.84 6.33,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -18.0138,-1.4448 c -1.556,0 -2.875,-0.561 -3.956,-1.681 -1.082,-1.122 -1.794,-2.751 -2.137,-4.888 l -1.543,-9.772 h -3.522 l 3.047,19.308 h 3.403 l -0.515,-3.283 c 1.583,2.268 3.483,3.402 5.698,3.402 0.554,0 1.068,-0.039 1.543,-0.119 l -0.475,-3.086 c -0.474,0.079 -0.989,0.119 -1.543,0.119 m -24.5657,-1.0092 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.396,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.689,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.305,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.204,1.484 l -0.475,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.844,1.806 2.124,3.323 3.838,4.55 1.715,1.226 3.824,1.84 6.331,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -24.4869,-17.7856 h -3.561 l -2.057,14.837 -6.766,-14.837 h -3.522 l -2.77,19.308 h 3.522 l 1.741,-15.193 6.805,15.193 h 3.324 l 2.017,-15.154 6.529,15.154 h 3.6 z M -59.063,-65.225 c -1.201,-0.778 -2.124,-1.807 -2.77,-3.086 -0.647,-1.28 -0.969,-2.619 -0.969,-4.017 0,-1.741 0.494,-3.171 1.484,-4.292 0.988,-1.122 2.261,-1.682 3.817,-1.682 1.53,0 2.889,0.402 4.076,1.207 1.187,0.805 2.11,1.852 2.769,3.146 0.659,1.292 0.99,2.637 0.99,4.035 0,1.715 -0.495,3.12 -1.484,4.215 -0.989,1.093 -2.262,1.641 -3.818,1.641 -1.53,0 -2.896,-0.389 -4.095,-1.167 M -50.28,-62 c 1.332,-0.766 2.368,-1.827 3.106,-3.185 0.738,-1.359 1.108,-2.896 1.108,-4.61 0,-1.952 -0.482,-3.825 -1.444,-5.618 -0.963,-1.794 -2.321,-3.251 -4.075,-4.372 -1.755,-1.122 -3.766,-1.682 -6.034,-1.682 -1.688,0 -3.199,0.383 -4.531,1.148 -1.331,0.764 -2.374,1.833 -3.125,3.205 -0.752,1.37 -1.128,2.914 -1.128,4.628 0,1.979 0.481,3.859 1.444,5.639 0.963,1.781 2.321,3.224 4.076,4.332 1.753,1.108 3.764,1.663 6.033,1.663 1.715,0 3.238,-0.383 4.57,-1.148 m -20.7559,4.1545 c -0.897,0.87 -2.255,1.305 -4.075,1.305 h -4.471 l -1.82,-11.513 h 4.668 c 2.401,0 4.175,0.639 5.322,1.919 1.148,1.279 1.721,2.894 1.721,4.847 0,1.424 -0.448,2.571 -1.345,3.442 m 3.027,2.373 c 1.464,-1.318 2.196,-3.112 2.196,-5.38 0,-3.113 -0.944,-5.599 -2.829,-7.459 -1.887,-1.859 -4.715,-2.789 -8.487,-2.789 h -4.748 l -1.543,-9.694 h -3.759 l 4.313,27.301 h 8.309 c 2.901,0 5.084,-0.66 6.548,-1.979"
                }))));

              default:
                return node_node("svg", {
                    width: "95",
                    height: "32",
                    viewBox: "0 0 95 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, node_node("path", {
                    fill: primary,
                    d: "M 52.732 3.83 C 52.83 3.446 53.122 3.158 53.512 3.158 L 60.626 3.158 C 66.571 3.158 70.664 7.67 69.69 13.334 C 68.813 18.998 63.16 23.414 57.313 23.414 L 50.004 23.414 C 49.711 23.414 49.516 23.222 49.614 22.934 L 52.732 3.83 Z M 55.753 18.998 L 57.02 18.998 C 60.236 18.998 63.355 17.27 64.037 13.334 C 64.622 9.686 62.478 7.67 58.97 7.67 L 57.995 7.67 C 57.8 7.67 57.605 7.766 57.605 7.958 L 55.753 18.998 Z"
                }), node_node("path", {
                    fill: primary,
                    d: "M 43.571 8.246 L 43.084 11.03 L 48.737 11.03 C 49.029 11.03 49.224 11.222 49.224 11.51 L 48.639 14.87 C 48.542 15.254 48.249 15.446 47.859 15.446 L 42.987 15.446 C 42.597 15.446 42.304 15.734 42.207 16.118 L 41.72 18.998 L 47.762 18.998 C 48.054 18.998 48.249 19.19 48.152 19.478 L 47.665 22.838 C 47.567 23.126 47.275 23.414 46.885 23.414 L 36.067 23.414 C 35.775 23.414 35.58 23.126 35.58 22.934 L 38.699 3.83 C 38.796 3.446 39.186 3.158 39.478 3.158 L 50.393 3.158 C 50.588 3.158 50.881 3.446 50.783 3.638 L 50.296 6.998 C 50.198 7.382 49.906 7.574 49.516 7.574 L 44.254 7.574 C 43.864 7.67 43.571 7.862 43.571 8.246 Z"
                }), node_node("path", {
                    fill: primary,
                    d: "M 74.563 23.414 L 70.274 23.414 C 69.982 23.414 69.787 23.222 69.787 22.934 L 73.003 3.83 C 73.003 3.446 73.393 3.158 73.685 3.158 L 78.071 3.158 C 78.266 3.158 78.558 3.446 78.461 3.734 L 75.342 22.838 C 75.245 23.126 74.952 23.414 74.563 23.414 Z"
                }), node_node("path", {
                    fill: primary,
                    d: "M 34.118 23.414 L 28.466 23.414 C 28.173 23.414 27.978 23.318 27.881 23.126 L 24.178 15.638 L 24.08 15.638 L 22.911 22.934 C 22.813 23.222 22.618 23.414 22.326 23.414 L 17.843 23.414 C 17.551 23.414 17.356 23.222 17.453 22.934 L 20.572 3.734 C 20.669 3.446 20.864 3.158 21.156 3.158 L 28.855 3.158 C 33.046 3.158 35.97 5.078 35.288 9.398 C 34.8 12.182 32.754 14.678 29.635 15.158 L 34.508 22.838 C 34.703 23.03 34.411 23.414 34.118 23.414 Z M 24.665 12.278 L 25.152 12.278 C 27.004 12.278 29.05 11.894 29.44 9.686 C 29.83 7.574 28.661 7.19 26.711 7.19 L 25.932 7.19 C 25.639 7.19 25.445 7.382 25.445 7.574 L 24.665 12.278 Z"
                }), node_node("path", {
                    fill: primary,
                    d: "M 86.16 23.414 L 81.872 23.414 C 81.579 23.414 81.384 23.222 81.482 22.934 L 83.918 7.67 L 79.923 7.67 C 79.63 7.67 79.435 7.382 79.533 7.094 L 80.02 3.83 C 80.118 3.446 80.41 3.158 80.8 3.158 L 94.249 3.158 C 94.444 3.158 94.736 3.446 94.639 3.734 L 94.054 6.998 C 94.054 7.382 93.761 7.67 93.372 7.67 L 89.473 7.67 L 86.939 22.838 C 86.939 23.126 86.647 23.414 86.16 23.414 Z"
                }), node_node("path", {
                    fill: primary,
                    d: "M 17.648 8.918 C 17.648 9.302 17.161 9.494 16.868 9.206 C 15.894 8.246 14.529 7.766 13.068 7.766 C 9.657 7.766 7.025 10.262 6.441 13.334 C 5.953 16.502 7.902 18.806 11.313 18.806 C 12.678 18.806 14.237 18.326 15.407 17.462 C 15.796 17.27 16.284 17.558 16.186 17.942 L 15.407 22.55 C 15.309 22.838 15.114 23.03 14.822 23.126 C 13.165 23.606 11.898 23.99 10.339 23.99 C 1.178 23.99 -0.284 16.502 0.203 13.334 C 1.47 4.406 9.072 2.39 13.652 2.678 C 15.114 2.678 16.479 2.87 17.745 3.35 C 18.233 3.542 18.428 3.926 18.33 4.406 L 17.648 8.918 Z"
                }));
            }
        }(_extends({
            country: locale.country
        }, getLogoColors("credit", CREDIT_LOGO_COLORS, logoColor)));
        return node_node(SVGLogo, _extends({}, props, {
            name: "credit",
            logoColor: logoColor,
            render: function() {
                return svg;
            }
        }));
    }
    function CreditMarkInlineSVG(_ref2) {
        var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
        var svg = node_node("svg", {
            width: "48px",
            height: "30px",
            viewBox: "0 0 48 30",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("defs", null, node_node("radialGradient", {
            cx: "21.8145957%",
            cy: "17.9147256%",
            fx: "21.8145957%",
            fy: "17.9147256%",
            r: "154.485751%",
            gradientTransform: "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
            id: "radialGradient-1"
        }, node_node("stop", {
            "stop-color": "#FFFFFF",
            offset: "0%"
        }), node_node("stop", {
            "stop-color": "#EFF0F4",
            offset: "100%"
        }))), node_node("g", {
            id: "PPC-Card-art",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, node_node("g", {
            id: "New-PPC-card-art---2",
            transform: "translate(-49.000000, -452.000000)"
        }, node_node("g", {
            id: "Cards",
            transform: "translate(16.000000, 375.000000)"
        }, node_node("g", {
            id: "PayPal-Credit-Card",
            transform: "translate(33.000000, 77.000000)"
        }, node_node("rect", {
            id: "Rectangle",
            stroke: "#EAECED",
            fill: "url(#radialGradient-1)",
            x: "0.5",
            y: "0.5",
            width: "47",
            height: "29",
            rx: "2"
        }), node_node("g", {
            id: "Logos/PayPal-Credit/paypal-credit-logo-monotone-transparent",
            transform: "translate(9.000000, 7.500000)",
            fill: "#003087",
            "fill-rule": "nonzero"
        }, node_node("g", {
            id: "paypal-credit-logo-monotone-transparent",
            transform: "translate(0.629340, 0.629340)"
        }, node_node("g", {
            id: "Group",
            transform: "translate(0.553819, 0.629340)"
        }, node_node("path", {
            d: "M17.8103299,6.32486979 L15.7335069,6.32486979 C15.6391059,6.32486979 15.5447049,6.41927083 15.5132378,6.51367188 L14.6006944,12.3350694 C14.6006944,12.3350694 14.6006944,12.3350694 14.6006944,12.3665365 C14.6006944,12.4294705 14.6636285,12.4924045 14.7265625,12.4924045 L16.8348524,12.4924045 C18.5340712,12.4924045 20.1703559,11.1393229 20.453559,9.40863715 C20.7052951,7.67795139 19.5095486,6.32486979 17.8103299,6.32486979 Z M18.7858073,9.37717014 C18.5970052,10.5729167 17.6844618,11.1078559 16.7404514,11.1078559 L16.3628472,11.1078559 L16.8977865,7.77235243 C16.8977865,7.7094184 16.9607205,7.67795139 17.0236545,7.67795139 L17.2753906,7.67795139 C18.3138021,7.67795139 18.9431424,8.27582465 18.7858073,9.37717014 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M13.0273437,7.67795139 L14.5377604,7.67795139 C14.6321615,7.67795139 14.7265625,7.58355035 14.7580295,7.48914931 L14.9153646,6.48220486 C14.9153646,6.48220486 14.9153646,6.45073785 14.9153646,6.45073785 C14.9153646,6.38780382 14.8524306,6.32486979 14.7894965,6.32486979 L11.6427951,6.32486979 C11.5483941,6.32486979 11.4539931,6.41927083 11.422526,6.51367188 L10.5099826,12.3036024 C10.5099826,12.3036024 10.5099826,12.3036024 10.5099826,12.3350694 C10.5099826,12.3980035 10.5729167,12.4609375 10.6358507,12.4609375 L13.7825521,12.4609375 C13.8769531,12.4609375 13.9713542,12.3665365 14.0028212,12.2721354 L14.1601562,11.265191 C14.1601562,11.265191 14.1601562,11.265191 14.1601562,11.233724 C14.1601562,11.1707899 14.0972222,11.1078559 14.0342882,11.1078559 L12.2721354,11.1078559 L12.3980035,10.2267795 C12.4294705,10.1323785 12.4924045,10.0379774 12.6182726,10.0379774 L14.0342882,10.0379774 C14.1286892,10.0379774 14.2230903,9.94357639 14.2545573,9.84917535 L14.4118924,8.8422309 C14.4118924,8.8422309 14.4118924,8.81076389 14.4118924,8.81076389 C14.4118924,8.74782986 14.3489583,8.68489583 14.2860243,8.68489583 L12.6497396,8.68489583 L12.7756076,7.83528646 C12.8385417,7.74088542 12.9329427,7.67795139 13.0273437,7.67795139 Z",
            id: "Path"
        }), node_node("path", {
            d: "M22.8450521,6.32486979 L21.5863715,6.32486979 C21.4919705,6.32486979 21.3975694,6.41927083 21.3661024,6.51367188 L20.453559,12.3036024 C20.453559,12.3036024 20.453559,12.3350694 20.453559,12.3350694 C20.453559,12.3980035 20.5164931,12.4609375 20.5794271,12.4609375 L21.8381076,12.4609375 C21.9325087,12.4609375 22.0583767,12.3665365 22.0583767,12.2721354 L22.9709201,6.45073785 C22.9709201,6.45073785 22.9709201,6.45073785 22.9709201,6.41927083 C22.9709201,6.35633681 22.9394531,6.32486979 22.8450521,6.32486979 Z",
            id: "Path"
        }), node_node("path", {
            d: "M8.55902778,6.32486979 L6.32486979,6.32486979 C6.23046875,6.32486979 6.16753472,6.38780382 6.13606771,6.48220486 L5.22352431,12.3350694 C5.22352431,12.3350694 5.22352431,12.3665365 5.22352431,12.3665365 C5.22352431,12.4294705 5.28645833,12.4924045 5.34939236,12.4924045 L6.63953993,12.4924045 C6.73394097,12.4924045 6.796875,12.4294705 6.82834201,12.3350694 L7.17447917,10.1323785 L7.20594618,10.1323785 L8.27582465,12.3980035 C8.30729167,12.4609375 8.37022569,12.4924045 8.43315972,12.4924045 L10.0694444,12.4924045 C10.1009115,12.4924045 10.1009115,12.4924045 10.1323785,12.4609375 C10.1953125,12.4294705 10.2267795,12.3350694 10.1638455,12.2721354 L8.74782986,9.94357639 C9.62890625,9.78624132 10.2267795,9.0625 10.3841146,8.21289062 C10.6043837,6.89127604 9.78624132,6.32486979 8.55902778,6.32486979 Z M8.71636285,8.30729167 C8.62196181,8.96809896 7.99262153,9.0625 7.48914931,9.0625 L7.33181424,9.0625 L7.55208333,7.64648437 C7.55208333,7.58355035 7.61501736,7.52061632 7.67795139,7.52061632 L7.89822049,7.52061632 C8.49609375,7.55208333 8.8422309,7.61501736 8.71636285,8.30729167 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M27.5651042,6.32486979 L23.6631944,6.32486979 C23.5687934,6.32486979 23.4743924,6.41927083 23.4429253,6.51367188 L23.2855903,7.52061632 C23.2855903,7.52061632 23.2855903,7.52061632 23.2855903,7.55208333 C23.2855903,7.61501736 23.3485243,7.67795139 23.4114583,7.67795139 L24.5757378,7.67795139 L23.8519965,12.3350694 C23.8519965,12.3350694 23.8519965,12.3665365 23.8519965,12.3665365 C23.8519965,12.4294705 23.9149306,12.4924045 23.9778646,12.4924045 L25.2365451,12.4924045 C25.3309462,12.4924045 25.4253472,12.3980035 25.4568142,12.3036024 L26.1805556,7.7094184 L27.3133681,7.7094184 C27.4077691,7.7094184 27.5021701,7.61501736 27.5336372,7.52061632 L27.6909722,6.51367188 C27.6909722,6.51367188 27.6909722,6.51367188 27.6909722,6.48220486 C27.6909722,6.35633681 27.6280382,6.32486979 27.5651042,6.32486979 Z",
            id: "Path"
        }), node_node("path", {
            d: "M5.31792535,8.05555556 L5.53819444,6.67100694 C5.56966146,6.54513889 5.47526042,6.41927083 5.38085938,6.35633681 C5.00325521,6.23046875 4.59418403,6.13606771 4.18511285,6.13606771 C2.83203125,6.07313368 0.660807292,6.67100694 0.283203125,9.37717014 C0.157335069,10.3526476 0.56640625,12.5868056 3.20963542,12.5868056 C3.65017361,12.5868056 4.02777778,12.4924045 4.53125,12.3350694 C4.62565104,12.3036024 4.68858507,12.2406684 4.68858507,12.1777344 L4.90885417,10.7617188 C4.90885417,10.7302517 4.90885417,10.6987847 4.87738715,10.6673177 C4.84592014,10.6043837 4.7515191,10.6043837 4.68858507,10.6358507 C4.34244792,10.8875868 3.90190972,11.0449219 3.49283854,11.0449219 C2.4858941,11.0449219 1.95095486,10.3526476 2.07682292,9.37717014 C2.23415799,8.43315972 3.02083333,7.67795139 3.96484375,7.67795139 C4.37391493,7.67795139 4.78298611,7.83528646 5.06618924,8.11848958 C5.09765625,8.1499566 5.09765625,8.1499566 5.16059028,8.1499566 C5.22352431,8.18142361 5.28645833,8.11848958 5.31792535,8.05555556 Z",
            id: "Path"
        }), node_node("path", {
            d: "M11.233724,3.99631076 C11.233724,3.99631076 11.233724,3.99631076 11.233724,3.99631076 L11.9574653,3.99631076 C12.0203993,3.99631076 12.0833333,3.96484375 12.0833333,3.90190972 L12.2406684,2.89496528 C12.2721354,2.80056424 12.3350694,2.73763021 12.4294705,2.73763021 L12.8700087,2.73763021 C13.7825521,2.73763021 14.3174913,2.29709201 14.4433594,1.41601562 C14.5062934,1.03841146 14.4433594,0.723741319 14.2860243,0.534939236 C14.0972222,0.283203125 13.7510851,0.188802083 13.2790799,0.188802083 L11.8945312,0.188802083 C11.8001302,0.188802083 11.7371962,0.251736111 11.7057292,0.346137153 L11.1393229,3.90190972 C11.1393229,3.93337674 11.1707899,3.99631076 11.233724,3.99631076 Z M12.5553385,1.00694444 C12.5553385,0.944010417 12.6182726,0.912543403 12.6497396,0.912543403 L12.7441406,0.912543403 C12.9958767,0.912543403 13.2161458,0.912543403 13.3420139,1.06987847 C13.4049479,1.16427951 13.4364149,1.29014757 13.4049479,1.44748264 C13.3420139,1.95095486 12.9644097,1.95095486 12.5868056,1.95095486 L12.3665365,1.95095486 L12.5553385,1.00694444 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M1.3530816,3.99631076 C1.3530816,3.99631076 1.3530816,3.99631076 1.3530816,3.99631076 L2.0453559,3.99631076 C2.13975694,3.99631076 2.23415799,3.93337674 2.23415799,3.83897569 L2.39149306,2.89496528 C2.42296007,2.80056424 2.4858941,2.73763021 2.58029514,2.73763021 L3.02083333,2.73763021 C3.93337674,2.73763021 4.46831597,2.29709201 4.59418403,1.41601562 C4.65711806,1.03841146 4.59418403,0.723741319 4.43684896,0.534939236 C4.24804687,0.314670139 3.90190972,0.188802083 3.42990451,0.188802083 L2.0453559,0.188802083 C1.95095486,0.188802083 1.88802083,0.251736111 1.85655382,0.346137153 L1.25868056,3.87044271 C1.25868056,3.93337674 1.29014757,3.99631076 1.3530816,3.99631076 Z M2.67469618,1.00694444 C2.67469618,0.944010417 2.73763021,0.912543403 2.76909722,0.912543403 L2.86349826,0.912543403 C3.11523437,0.912543403 3.33550347,0.912543403 3.46137153,1.06987847 C3.52430556,1.16427951 3.55577257,1.29014757 3.52430556,1.44748264 C3.46137153,1.95095486 3.08376736,1.95095486 2.70616319,1.95095486 L2.51736111,1.95095486 L2.67469618,1.00694444 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M4.65711806,3.71310764 C4.84592014,3.96484375 5.16059028,4.05924479 5.50672743,4.05924479 C5.85286458,4.05924479 6.16753472,3.93337674 6.41927083,3.68164063 L6.38780382,3.87044271 C6.38780382,3.93337674 6.41927083,3.99631076 6.48220486,3.99631076 C6.48220486,3.99631076 6.48220486,3.99631076 6.51367188,3.99631076 L7.11154514,3.99631076 C7.20594618,3.99631076 7.26888021,3.93337674 7.30034722,3.83897569 L7.64648437,1.57335069 C7.64648437,1.51041667 7.61501736,1.44748264 7.55208333,1.44748264 C7.55208333,1.44748264 7.52061632,1.44748264 7.52061632,1.44748264 L6.85980903,1.44748264 C6.796875,1.44748264 6.76540799,1.47894965 6.76540799,1.54188368 L6.73394097,1.73068576 L6.70247396,1.66775174 C6.54513889,1.44748264 6.23046875,1.38454861 5.91579861,1.38454861 C5.19205729,1.38454861 4.56271701,1.95095486 4.43684896,2.70616319 C4.34244792,3.05230035 4.43684896,3.42990451 4.65711806,3.71310764 Z M5.31792535,2.70616319 C5.38085938,2.32855903 5.69552951,2.07682292 6.07313368,2.07682292 C6.23046875,2.07682292 6.38780382,2.13975694 6.51367188,2.265625 C6.60807292,2.39149306 6.67100694,2.58029514 6.60807292,2.73763021 C6.54513889,3.11523437 6.23046875,3.3984375 5.85286458,3.36697049 C5.56966146,3.3984375 5.31792535,3.1781684 5.28645833,2.89496528 C5.28645833,2.83203125 5.28645833,2.76909722 5.31792535,2.70616319 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M14.5377604,3.71310764 C14.7265625,3.96484375 15.0412326,4.05924479 15.3873698,4.05924479 C15.7335069,4.05924479 16.0481771,3.93337674 16.2999132,3.68164062 L16.2684462,3.87044271 C16.2684462,3.93337674 16.2999132,3.99631076 16.3628472,3.99631076 C16.3628472,3.99631076 16.3628472,3.99631076 16.3943142,3.99631076 L16.9921875,3.99631076 C17.0865885,3.99631076 17.1495226,3.93337674 17.1809896,3.83897569 L17.5271267,1.57335069 C17.5271267,1.51041667 17.4956597,1.44748264 17.4327257,1.44748264 C17.4327257,1.44748264 17.4012587,1.44748264 17.4012587,1.44748264 L16.7404514,1.44748264 C16.6775174,1.44748264 16.6460503,1.47894965 16.6460503,1.54188368 L16.6145833,1.73068576 L16.5831163,1.66775174 C16.4257813,1.44748264 16.1111111,1.38454861 15.796441,1.38454861 C15.0726997,1.38454861 14.4433594,1.95095486 14.3174913,2.70616319 C14.2230903,3.05230035 14.3174913,3.42990451 14.5377604,3.71310764 Z M15.1671007,2.70616319 C15.2300347,2.32855903 15.5447049,2.07682292 15.922309,2.07682292 C16.0796441,2.07682292 16.2369792,2.13975694 16.3628472,2.265625 C16.4572483,2.39149306 16.5201823,2.58029514 16.4572483,2.73763021 C16.3943142,3.11523437 16.0796441,3.3984375 15.7020399,3.36697049 C15.5447049,3.36697049 15.3873698,3.30403646 15.2615017,3.1781684 C15.1671007,3.05230035 15.1356337,2.86349826 15.1671007,2.70616319 Z",
            id: "Shape"
        }), node_node("path", {
            d: "M8.71636285,3.74457465 L8.02408854,4.72005208 C7.99262153,4.78298611 7.99262153,4.84592014 8.05555556,4.87738715 C8.08702257,4.90885417 8.08702257,4.90885417 8.11848958,4.90885417 L8.77929687,4.90885417 C8.8422309,4.90885417 8.90516493,4.87738715 8.93663194,4.81445312 L11.1393229,1.60481771 C11.1707899,1.54188368 11.1707899,1.47894965 11.1078559,1.44748264 C11.0763889,1.44748264 11.0763889,1.41601562 11.0449219,1.41601562 L10.3841146,1.41601562 C10.3211806,1.41601562 10.2582465,1.44748264 10.2267795,1.51041667 L9.31423611,2.86349826 L8.93663194,1.57335069 C8.90516493,1.47894965 8.8422309,1.44748264 8.74782986,1.44748264 L8.08702257,1.44748264 C8.02408854,1.44748264 7.96115451,1.51041667 7.96115451,1.57335069 C7.96115451,1.57335069 7.96115451,1.60481771 7.96115451,1.60481771 L8.71636285,3.74457465 Z",
            id: "Path"
        }), node_node("path", {
            d: "M17.7159288,3.99631076 C17.7159288,3.99631076 17.7159288,3.99631076 17.7159288,3.99631076 L18.3138021,3.99631076 C18.4082031,3.99631076 18.4711372,3.93337674 18.5026042,3.83897569 L19.0690104,0.283203125 C19.0690104,0.220269097 19.0375434,0.157335069 18.9746094,0.157335069 C18.9746094,0.157335069 18.9746094,0.157335069 18.9431424,0.157335069 L18.3138021,0.157335069 C18.2508681,0.157335069 18.219401,0.188802083 18.187934,0.251736111 L17.6215278,3.87044271 C17.5900608,3.93337674 17.6529948,3.99631076 17.7159288,3.99631076 Z",
            id: "Path"
        })))))))));
        return node_node(SVGLogo, _extends({}, props, {
            name: "credit",
            render: function() {
                return svg;
            }
        }));
    }
    var eps_logo_excluded2 = [ "logoColor" ];
    var _EPS_LOGO_COLORS;
    var EPS_LOGO_COLORS = ((_EPS_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _EPS_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _EPS_LOGO_COLORS.black = {
        primary: "#C8036F",
        secondary: "#71706F"
    }, _EPS_LOGO_COLORS);
    var giropay_logo_excluded2 = [ "logoColor" ];
    var _GIROPAY_LOGO_COLORS;
    var GIROPAY_LOGO_COLORS = ((_GIROPAY_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#003A7D",
        tertiary: "#ED1C24",
        quaternary: "#FFFFFF",
        quinary: "#FFFFFF"
    }, _GIROPAY_LOGO_COLORS.white = {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#FFFFFF",
        quaternary: "#000000",
        quinary: "#FFFFFF"
    }, _GIROPAY_LOGO_COLORS.black = {
        primary: "#FFFFFF",
        secondary: "#003A7D",
        tertiary: "#ED1C24",
        quaternary: "#FFFFFF",
        quinary: "#003A7D"
    }, _GIROPAY_LOGO_COLORS);
    var ideal_logo_excluded2 = [ "logoColor" ];
    var _IDEAL_LOGO_COLORS;
    var IDEAL_LOGO_COLORS = ((_IDEAL_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#CC0066"
    }, _IDEAL_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#CC0066"
    }, _IDEAL_LOGO_COLORS.black = {
        primary: "#FFFFFF",
        secondary: "#CC0066"
    }, _IDEAL_LOGO_COLORS);
    var mybank_logo_excluded2 = [ "logoColor" ];
    var _MYBANK_LOGO_COLORS;
    var MYBANK_LOGO_COLORS = ((_MYBANK_LOGO_COLORS = {}).default = {
        primary: "#00C0EE",
        secondary: "#FFFFFF"
    }, _MYBANK_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _MYBANK_LOGO_COLORS.black = {
        primary: "#00C0EE",
        secondary: "#1A4B67"
    }, _MYBANK_LOGO_COLORS);
    var p24_logo_excluded2 = [ "logoColor" ];
    var _P24_LOGO_COLORS;
    var P24_LOGO_COLORS = ((_P24_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _P24_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _P24_LOGO_COLORS.black = {
        primary: "#B3B1B1",
        secondary: "#D03238"
    }, _P24_LOGO_COLORS);
    var paypal_logo_excluded2 = [ "logoColor" ], _excluded4 = [ "logoColor" ];
    var _PAYPAL_LOGO_COLORS, _PP_LOGO_COLORS;
    var PAYPAL_LOGO_COLORS = ((_PAYPAL_LOGO_COLORS = {}).default = {
        primary: "#003087",
        secondary: "#009cde"
    }, _PAYPAL_LOGO_COLORS.blue = {
        primary: "#003087",
        secondary: "#009cde"
    }, _PAYPAL_LOGO_COLORS.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, _PAYPAL_LOGO_COLORS.black = {
        primary: "#333030",
        secondary: "#636363"
    }, _PAYPAL_LOGO_COLORS.monochrome = {
        primary: "#000000",
        secondary: "#000000"
    }, _PAYPAL_LOGO_COLORS);
    function PayPalLogoInlineSVG(_ref3) {
        var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "default" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, paypal_logo_excluded2);
        var svg = (secondary = (_ref = getLogoColors("paypal", PAYPAL_LOGO_COLORS, logoColor)).secondary, 
        node_node("svg", {
            width: "101px",
            height: "32",
            viewBox: "0 0 101 32",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            fill: primary = _ref.primary,
            d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
        }), node_node("path", {
            fill: primary,
            d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
        }), node_node("path", {
            fill: primary,
            d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
        }), node_node("path", {
            fill: secondary,
            d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
        }), node_node("path", {
            fill: secondary,
            d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
        }), node_node("path", {
            fill: secondary,
            d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
        })));
        var _ref, primary, secondary;
        return node_node(SVGLogo, _extends({}, props, {
            name: "paypal",
            alt: "PayPal",
            role: "presentation",
            logoColor: logoColor,
            render: function() {
                return svg;
            }
        }));
    }
    var PayPalLogo = PayPalLogoInlineSVG;
    var PP_LOGO_COLORS = ((_PP_LOGO_COLORS = {}).default = {
        primary: "#009cde",
        secondary: "#012169",
        tertiary: "#003087"
    }, _PP_LOGO_COLORS.blue = {
        primary: "#009cde",
        secondary: "#012169",
        tertiary: "#003087"
    }, _PP_LOGO_COLORS.white = {
        primary: "#ffffff",
        primaryOpacity: "0.7",
        secondary: "#ffffff",
        secondaryOpacity: "0.7",
        tertiary: "#ffffff"
    }, _PP_LOGO_COLORS.black = {
        primary: "#808080",
        secondary: "#000000",
        tertiary: "#1a1a1a"
    }, _PP_LOGO_COLORS);
    function PPLogoInlineSVG(_ref6) {
        var _ref6$logoColor = _ref6.logoColor, logoColor = void 0 === _ref6$logoColor ? "default" : _ref6$logoColor, props = _objectWithoutPropertiesLoose(_ref6, _excluded4);
        var svg = (secondary = (_ref4 = getLogoColors("pp", PP_LOGO_COLORS, logoColor)).secondary, 
        tertiary = _ref4.tertiary, secondaryOpacity = void 0 === (_ref4$secondaryOpacit = _ref4.secondaryOpacity) ? "1" : _ref4$secondaryOpacit, 
        tertiaryOpacity = void 0 === (_ref4$tertiaryOpacity = _ref4.tertiaryOpacity) ? "1" : _ref4$tertiaryOpacity, 
        node_node("svg", {
            width: "24",
            height: "32",
            viewBox: "0 0 24 32",
            preserveAspectRatio: "xMinYMin meet",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("path", {
            fill: _ref4.primary,
            opacity: void 0 === (_ref4$primaryOpacity = _ref4.primaryOpacity) ? "1" : _ref4$primaryOpacity,
            d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
        }), node_node("path", {
            fill: secondary,
            opacity: secondaryOpacity,
            d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
        }), node_node("path", {
            fill: tertiary,
            opacity: tertiaryOpacity,
            d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
        })));
        var _ref4, secondary, tertiary, _ref4$primaryOpacity, _ref4$secondaryOpacit, secondaryOpacity, _ref4$tertiaryOpacity, tertiaryOpacity;
        return node_node(SVGLogo, _extends({}, props, {
            name: "pp",
            alt: "PP",
            role: "presentation",
            logoColor: logoColor,
            render: function() {
                return svg;
            }
        }));
    }
    function PayPalMarkInlineSVG(_ref2) {
        var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
        var svg = node_node("svg", {
            width: "40px",
            height: "25px",
            viewBox: "0 0 40 25",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, node_node("title", null, "Group 53"), node_node("defs", null, node_node("radialGradient", {
            cx: "21.8145957%",
            cy: "17.9147256%",
            fx: "21.8145957%",
            fy: "17.9147256%",
            r: "154.485751%",
            gradientTransform: "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
            id: "radialGradient-1"
        }, node_node("stop", {
            "stop-color": "#FFFFFF",
            offset: "0%"
        }), node_node("stop", {
            "stop-color": "#EFF0F4",
            offset: "100%"
        }))), node_node("g", {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, node_node("g", {
            id: "Group-53",
            transform: "translate(0.410281, 0.000000)"
        }, node_node("rect", {
            id: "Rectangle",
            stroke: "#EAECED",
            fill: "url(#radialGradient-1)",
            x: "0.5",
            y: "0.5",
            width: "38",
            height: "23.375",
            rx: "2"
        }), node_node("g", {
            id: "Group",
            transform: "translate(10.968750, 4.875000)"
        }, node_node("g", {
            id: "paypal-mark-color",
            transform: "translate(1.650391, 0.660156)"
        }, node_node("path", {
            d: "M11.1896484,3.696875 C11.3876953,2.57460938 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054687 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.06972656,14.1273438 C3.03671875,14.3583984 3.20175781,14.5234375 3.39980469,14.5234375 L5.74335937,14.5234375 C6.04042969,14.5234375 6.27148437,14.2923828 6.30449219,14.0613281 L6.3375,13.9623047 L6.76660156,11.1896484 L6.79960938,11.0576172 C6.83261719,10.7935547 7.09667969,10.5955078 7.36074219,10.5955078 L7.72382813,10.5955078 C10.0013672,10.5955078 11.7837891,9.67128906 12.3119141,6.99765625 C12.5429687,5.90839844 12.4109375,4.95117188 11.8498047,4.29101563 C11.6847656,3.99394531 11.4537109,3.82890625 11.1896484,3.696875",
            id: "Fill-8",
            fill: "#009CDE"
        }), node_node("path", {
            d: "M11.1896484,3.696875 C11.3876953,2.57460937 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.9609375,8.48300781 L3.92792969,8.61503906 C3.99394531,8.28496094 4.29101562,8.05390625 4.58808594,8.05390625 L5.90839844,8.05390625 C8.51601562,8.05390625 10.5294922,6.99765625 11.1566406,3.9609375 C11.1566406,3.86191406 11.1896484,3.76289063 11.1896484,3.696875",
            id: "Fill-9",
            fill: "#012169"
        }), node_node("path", {
            d: "M4.753125,3.696875 C4.78613281,3.49882813 4.88515625,3.36679688 5.08320312,3.26777344 C5.14921875,3.23476563 5.21523438,3.20175781 5.34726562,3.20175781 L8.87910156,3.20175781 C9.27519531,3.23476563 9.67128906,3.26777344 10.0673828,3.30078125 C10.1664062,3.30078125 10.2654297,3.33378906 10.3644531,3.36679688 C10.4634766,3.39980469 10.5625,3.39980469 10.6615234,3.4328125 C10.6945312,3.4328125 10.7275391,3.46582031 10.7935547,3.46582031 C10.9916016,3.53183594 11.1236328,3.56484375 11.2556641,3.696875 C11.4537109,2.57460937 11.2556641,1.78242187 10.6285156,1.08925781 C9.96835937,0.330078125 8.74707031,0 7.16269531,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L4.753125,3.696875",
            id: "Fill-10",
            fill: "#003087"
        }))))));
        return node_node(SVGLogo, _extends({}, props, {
            name: "pp",
            render: function() {
                return svg;
            }
        }));
    }
    var sepa_logo_excluded2 = [ "logoColor" ];
    var _SEPA_LOGO_COLORS;
    var SEPA_LOGO_COLORS = ((_SEPA_LOGO_COLORS = {}).default = {
        main: "#005DA0",
        card: "#AEB1BC"
    }, _SEPA_LOGO_COLORS.white = {
        main: "#FFFFFF",
        card: "#FFFFFF"
    }, _SEPA_LOGO_COLORS.black = {
        main: "#333030",
        card: "#333030"
    }, _SEPA_LOGO_COLORS);
    var sofort_logo_excluded2 = [ "logoColor" ];
    var _SOFORT_LOGO_COLORS;
    var SOFORT_LOGO_COLORS = ((_SOFORT_LOGO_COLORS = {}).default = {
        primary: "#EDEDED",
        secondary: "#393A41"
    }, _SOFORT_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#000000"
    }, _SOFORT_LOGO_COLORS.black = {
        primary: "#393A41",
        secondary: "#EDEDED"
    }, _SOFORT_LOGO_COLORS);
    var venmo_logo_excluded2 = [ "logoColor" ];
    var _VENMO_LOGO_COLORS;
    var VENMO_LOGO_COLORS = ((_VENMO_LOGO_COLORS = {}).default = {
        primary: "#3D93CE"
    }, _VENMO_LOGO_COLORS.blue = {
        primary: "#3D93CE"
    }, _VENMO_LOGO_COLORS.white = {
        primary: "#ffffff"
    }, _VENMO_LOGO_COLORS.black = {
        primary: "#333030"
    }, _VENMO_LOGO_COLORS);
    function VenmoLogoInlineSVG(_ref3) {
        var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "default" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, venmo_logo_excluded2);
        var svg = (_ref = getLogoColors("venmo", VENMO_LOGO_COLORS, logoColor), node_node("svg", {
            width: "101",
            height: "32",
            viewBox: "0 0 101 32",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMinYMin meet"
        }, node_node("g", {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, node_node("g", {
            id: "Blue",
            fill: _ref.primary
        }, node_node("g", {
            id: "Logo",
            transform: "translate(0.000000, 6.000000)"
        }, node_node("path", {
            d: "M16.6660484,0.18 C17.3466626,1.3390991 17.6535069,2.53297297 17.6535069,4.04108108 C17.6535069,8.85117117 13.671346,15.0998198 10.439346,19.4875676 L3.05725952,19.4875676 L0.0966314879,1.23315315 L6.56045675,0.60036036 L8.12578201,13.5895495 C9.58835986,11.1326126 11.3932543,7.27153153 11.3932543,4.6390991 C11.3932543,3.1981982 11.1538599,2.21675676 10.7797405,1.40864865 L16.6660484,0.18 Z M24.9071592,11.6938739 C24.9071592,13.8367568 26.062718,14.6774775 27.5946678,14.6774775 C29.2629152,14.6774775 30.860218,14.2571171 32.9363097,13.1691892 L32.154346,18.6445045 C30.6915934,19.3814414 28.4119291,19.8731532 26.1991903,19.8731532 C20.5863512,19.8731532 18.5775346,16.3632432 18.5775346,11.9753153 C18.5775346,6.28810811 21.8451817,0.249369369 28.5819516,0.249369369 C32.2909931,0.249369369 34.3649879,2.39207207 34.3649879,5.37567568 C34.3653374,10.1855856 28.3783789,11.6590991 24.9071592,11.6938739 Z M25.0434567,8.2181982 C26.2329152,8.2181982 29.2274429,7.65711712 29.2274429,5.90216216 C29.2274429,5.05945946 28.6495761,4.6390991 27.9686125,4.6390991 C26.7772318,4.6390991 25.2138287,6.11225225 25.0434567,8.2181982 Z M53.0187093,4.4636036 C53.0187093,5.16558559 52.9154377,6.18378378 52.8126903,6.84918919 L50.8730709,19.4873874 L44.5790934,19.4873874 L46.3483408,7.90216216 C46.381891,7.58792793 46.4849879,6.95531532 46.4849879,6.60432432 C46.4849879,5.76162162 45.9743962,5.55135135 45.3605329,5.55135135 C44.5451938,5.55135135 43.7279325,5.93711712 43.1836159,6.21873874 L41.1768962,19.4875676 L34.8474464,19.4875676 L37.7390519,0.565945946 L43.2171661,0.565945946 L43.2865381,2.07621622 C44.5789187,1.19873874 46.2807163,0.24972973 48.6952803,0.24972973 C51.8942543,0.249369369 53.0187093,1.93495495 53.0187093,4.4636036 Z M71.7037093,2.32072072 C73.5063322,0.988108108 75.2084792,0.249369369 77.5554187,0.249369369 C80.7872439,0.249369369 81.9113495,1.93495495 81.9113495,4.4636036 C81.9113495,5.16558559 81.8084273,6.18378378 81.7056799,6.84918919 L79.7683322,19.4873874 L73.4726073,19.4873874 L75.2755796,7.6572973 C75.3087803,7.34108108 75.3785017,6.95531532 75.3785017,6.71063063 C75.3785017,5.7618018 74.8677353,5.55135135 74.2540467,5.55135135 C73.4722578,5.55135135 72.6908183,5.90234234 72.1106799,6.21873874 L70.1043097,19.4875676 L63.8101574,19.4875676 L65.6131298,7.65747748 C65.6463304,7.34126126 65.713955,6.9554955 65.713955,6.71081081 C65.713955,5.76198198 65.2030138,5.55153153 64.5914221,5.55153153 C63.7743356,5.55153153 62.9588218,5.9372973 62.4145052,6.21891892 L60.4062128,19.4877477 L54.0788599,19.4877477 L56.9701159,0.566126126 L62.3813045,0.566126126 L62.551327,2.14576577 C63.8101574,1.1990991 65.5105571,0.25009009 67.7900467,0.25009009 C69.7637405,0.249369369 71.0559464,1.12702703 71.7037093,2.32072072 Z M83.55059,11.7998198 C83.55059,5.83279279 86.6120433,0.249369369 93.6558322,0.249369369 C98.9633997,0.249369369 100.903543,3.47981982 100.903543,7.93873874 C100.903543,13.8365766 97.8751159,19.9443243 90.6614792,19.9443243 C85.3196626,19.9443243 83.55059,16.3281081 83.55059,11.7998198 Z M94.4374464,7.83279279 C94.4374464,6.28810811 94.0628028,5.23495495 92.9409689,5.23495495 C90.4570329,5.23495495 89.9469654,9.76306306 89.9469654,12.0794595 C89.9469654,13.8367568 90.4238322,14.9243243 91.5453166,14.9243243 C93.8931298,14.9243243 94.4374464,10.149009 94.4374464,7.83279279 Z"
        }))))));
        var _ref;
        return node_node(SVGLogo, _extends({}, props, {
            name: "venmo",
            logoColor: logoColor,
            render: function() {
                return svg;
            }
        }));
    }
    var itau_logo_excluded2 = [ "logoColor" ];
    var _ITAU_LOGO_COLORS;
    var ITAU_LOGO_COLORS = ((_ITAU_LOGO_COLORS = {}).default = {
        primary: "#ffffff"
    }, _ITAU_LOGO_COLORS.blue = {
        primary: "#003087"
    }, _ITAU_LOGO_COLORS.white = {
        primary: "#ffffff"
    }, _ITAU_LOGO_COLORS.black = {
        primary: "#333030"
    }, _ITAU_LOGO_COLORS);
    var wechatpay_logo_excluded2 = [ "logoColor" ];
    var _WECHATPAY_LOGO_COLOR;
    var WECHATPAY_LOGO_COLORS = ((_WECHATPAY_LOGO_COLOR = {}).default = {
        primary: "#1AAD19",
        secondary: "#FFFFFF"
    }, _WECHATPAY_LOGO_COLOR.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _WECHATPAY_LOGO_COLOR.black = {
        primary: "#1AAD19",
        secondary: "#4D4D4D"
    }, _WECHATPAY_LOGO_COLOR);
    var payu_logo_excluded2 = [ "logoColor" ];
    var _PAYU_LOGO_COLORS;
    var PAYU_LOGO_COLORS = ((_PAYU_LOGO_COLORS = {}).default = {
        primary: "#A6C307"
    }, _PAYU_LOGO_COLORS.white = {
        primary: "#FFFFFF"
    }, _PAYU_LOGO_COLORS.black = {
        primary: "#2C2E2F"
    }, _PAYU_LOGO_COLORS);
    var blik_logo_excluded2 = [ "logoColor" ];
    var _BLIK_LOGO_COLORS;
    var BLIK_LOGO_COLORS = ((_BLIK_LOGO_COLORS = {}).default = {
        primary: "#FF0000",
        secondary: "#E83E49",
        tertiary: "#FF00FF",
        quaternary: "#000000",
        senary: "#FFFFFF"
    }, _BLIK_LOGO_COLORS.white = {
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#000000",
        quaternary: "#000000",
        senary: "#FFFFFF"
    }, _BLIK_LOGO_COLORS.black = {
        primary: "#FF0000",
        secondary: "#E83E49",
        tertiary: "#FF00FF",
        quaternary: "#4D4D4F",
        senary: "#FFFFFF"
    }, _BLIK_LOGO_COLORS);
    var trustly_logo_excluded2 = [ "logoColor" ];
    var _TRUSTLY_LOGO_COLORS;
    var TRUSTLY_LOGO_COLORS = ((_TRUSTLY_LOGO_COLORS = {}).default = {
        primary: "#0EE06E"
    }, _TRUSTLY_LOGO_COLORS.white = {
        primary: "#FFFFFF"
    }, _TRUSTLY_LOGO_COLORS.black = {
        primary: "#000000"
    }, _TRUSTLY_LOGO_COLORS);
    var oxxo_logo_excluded2 = [ "logoColor" ];
    var _OXXO_LOGO_COLORS;
    var OXXO_LOGO_COLORS = ((_OXXO_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _OXXO_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _OXXO_LOGO_COLORS.black = {
        primary: "#E39E39",
        secondary: "#D8232A"
    }, _OXXO_LOGO_COLORS);
    var boleto_logo_excluded2 = [ "logoColor" ];
    var _BOLETO_LOGO_COLORS;
    var BOLETO_LOGO_COLORS = ((_BOLETO_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF"
    }, _BOLETO_LOGO_COLORS.white = {
        primary: "#FFFFFF"
    }, _BOLETO_LOGO_COLORS.black = {
        primary: "#000000"
    }, _BOLETO_LOGO_COLORS);
    var mercadopago_logo_excluded2 = [ "logoColor" ];
    var _MERCADOPAGO_LOGO_COL;
    var MERCADOPAGO_LOGO_COLORS = ((_MERCADOPAGO_LOGO_COL = {}).default = {
        primary: "#009EE3",
        secondary: "#FFFFFF",
        tertiary: "#009EE3",
        quaternary: "#FFFFFF"
    }, _MERCADOPAGO_LOGO_COL.white = {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#000000",
        quaternary: "#FFFFFF"
    }, _MERCADOPAGO_LOGO_COL.black = {
        primary: "#FFFFFF",
        secondary: "#2D3277",
        tertiary: "#009EE3",
        quaternary: "#009EE3"
    }, _MERCADOPAGO_LOGO_COL);
    var multibanco_logo_excluded2 = [ "logoColor" ];
    var _MULTIBANCO_LOGO_COLO;
    var MULTIBANCO_LOGO_COLORS = ((_MULTIBANCO_LOGO_COLO = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _MULTIBANCO_LOGO_COLO.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, _MULTIBANCO_LOGO_COLO.black = {
        primary: "#1866AB",
        secondary: "#373535"
    }, _MULTIBANCO_LOGO_COLO);
    var satispay_logo_excluded2 = [ "logoColor" ];
    var _SATISPAY_LOGO_COLORS;
    var SATISPAY_LOGO_COLORS = ((_SATISPAY_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF"
    }, _SATISPAY_LOGO_COLORS.white = {
        primary: "#FFFFFF"
    }, _SATISPAY_LOGO_COLORS.black = {
        primary: "#2C2E2F"
    }, _SATISPAY_LOGO_COLORS);
    var paidy_logo_excluded2 = [ "logoColor" ];
    var _PAIDY_LOGO_COLORS;
    var PAIDY_LOGO_COLORS = ((_PAIDY_LOGO_COLORS = {}).default = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#FFFFFF"
    }, _PAIDY_LOGO_COLORS.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#FFFFFF"
    }, _PAIDY_LOGO_COLORS.black = {
        primary: "#A6009C",
        secondary: "#FF009C",
        tertiary: "#1C1C1C"
    }, _PAIDY_LOGO_COLORS);
    var style_scoped = __webpack_require__(4);
    var style_scoped_default = __webpack_require__.n(style_scoped);
    var text_excluded = [ "optional", "className", "animate" ];
    function Text(_ref, children) {
        var optional = _ref.optional, _ref$className = _ref.className, className = void 0 === _ref$className ? [] : _ref$className, animate = _ref.animate, rest = _objectWithoutPropertiesLoose(_ref, text_excluded);
        return node_node("span", _extends({
            class: [ CLASS.TEXT ].concat(className, [ animate || CLASS.IMMEDIATE ]).filter(Boolean).join(" "),
            optional: optional
        }, rest), children);
    }
    function Space() {
        return node_node("span", {
            class: [ CLASS.SPACE ].join(" ")
        }, " ");
    }
    function PlaceHolder(_ref2) {
        var chars = _ref2.chars, _ref2$color = _ref2.color;
        return node_node(Style, {
            css: style_scoped_default.a
        }, node_node("div", {
            class: [ "placeholder", "color-" + (void 0 === _ref2$color ? "white" : _ref2$color) ].join(" ")
        }, new Array(chars).fill("x").join("")));
    }
    var componentContent = {
        ar: {
            Checkout: function(_ref) {
                var logo = _ref.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "السداد بواسطة", " "), logo);
            },
            Subscribe: function(_ref2) {
                return node_node(Fragment, null, _ref2.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "اشتراك"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "الطريقة الأسهل والأكثر أماناً في الدفع");
            },
            Pay: function(_ref3) {
                var logo = _ref3.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "دفع بواسطة", " "), logo);
            },
            BuyNow: function(_ref4) {
                return node_node(Fragment, null, _ref4.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "شراء الآن"));
            },
            Donate: function(_ref5) {
                return node_node(Fragment, null, _ref5.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "تبرع", " "));
            }
        },
        bg: {
            Checkout: function(_ref6) {
                return node_node(Fragment, null, _ref6.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Финализиране"));
            },
            Subscribe: function(_ref7) {
                return node_node(Fragment, null, _ref7.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Абониране"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "По-безопасният и по-лесен начин за плащане");
            },
            Pay: function(_ref8) {
                var logo = _ref8.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Плащане с", " "), logo);
            },
            BuyNow: function(_ref9) {
                return node_node(Fragment, null, _ref9.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Купете сега"));
            },
            Donate: function(_ref10) {
                return node_node(Fragment, null, _ref10.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Дарение"));
            }
        },
        cs: {
            Checkout: function(_ref11) {
                var logo = _ref11.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Zaplatit přes", " "), logo);
            },
            Subscribe: function(_ref12) {
                return node_node(Fragment, null, _ref12.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Předplatit"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Jednodušší a bezpečnější způsob placení");
            },
            Pay: function(_ref13) {
                var logo = _ref13.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Zaplatit přes", " "), logo);
            },
            BuyNow: function(_ref14) {
                var logo = _ref14.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Koupit ihned přes", " "), logo);
            },
            Donate: function(_ref15) {
                return node_node(Fragment, null, _ref15.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Přispět"));
            }
        },
        da: {
            Checkout: function(_ref16) {
                return node_node(Fragment, null, _ref16.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Betal"));
            },
            Subscribe: function(_ref17) {
                return node_node(Fragment, null, _ref17.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abonner"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Betal nemt og sikkert");
            },
            Pay: function(_ref18) {
                var logo = _ref18.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Betal med", " "), logo);
            },
            BuyNow: function(_ref19) {
                return node_node(Fragment, null, _ref19.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Køb nu"));
            },
            Donate: function(_ref20) {
                return node_node(Fragment, null, _ref20.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Doner"));
            }
        },
        de: {
            Checkout: function(_ref21) {
                var logo = _ref21.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Direkt zu", " "), logo);
            },
            Subscribe: function(_ref22) {
                return node_node(Fragment, null, _ref22.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abonnieren"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Überall schnell und sicher bezahlen");
            },
            Pay: function(_ref23) {
                var logo = _ref23.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Mit", " "), logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "zahlen"));
            },
            BuyNow: function(_ref24) {
                return node_node(Fragment, null, _ref24.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Jetzt kaufen"));
            },
            Donate: function(_ref25) {
                return node_node(Fragment, null, _ref25.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Spenden"));
            }
        },
        el: {
            Checkout: function(_ref26) {
                var logo = _ref26.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ολοκλήρωση αγοράς μέσω", " "), logo);
            },
            Subscribe: function(_ref27) {
                return node_node(Fragment, null, _ref27.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Εγγραφή"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ο ασφαλέστερος και ευκολότερος τρόπος πληρωμής");
            },
            Pay: function(_ref28) {
                var logo = _ref28.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Πληρωμή μέσω", " "), logo);
            },
            BuyNow: function(_ref29) {
                return node_node(Fragment, null, _ref29.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Αγορά τώρα"));
            },
            Donate: function(_ref30) {
                return node_node(Fragment, null, _ref30.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Δωρεά"));
            }
        },
        en: {
            Checkout: function(_ref31) {
                return node_node(Fragment, null, _ref31.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref32) {
                return node_node(Fragment, null, _ref32.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Subscribe"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "The safer, easier way to pay");
            },
            Pay: function(_ref33) {
                var logo = _ref33.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Pay with", " "), logo);
            },
            Installment: function(_ref34) {
                var period = _ref34.period;
                return node_node(Fragment, null, _ref34.logo, period ? node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pay up to ", period.toString(), "x", node_node("br", null), " without interest") : node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Interest free", node_node("br", null), " payments"));
            },
            DualTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Two easy ways to pay");
            },
            BuyNow: function(_ref35) {
                return node_node(Fragment, null, _ref35.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Buy Now"));
            },
            Donate: function(_ref36) {
                return node_node(Fragment, null, _ref36.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donate"));
            }
        },
        es: {
            Checkout: function(_ref37) {
                return node_node(Fragment, null, _ref37.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pagar"));
            },
            Subscribe: function(_ref38) {
                return node_node(Fragment, null, _ref38.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Suscribirse"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "La forma rápida y segura de pagar");
            },
            Pay: function(_ref39) {
                var logo = _ref39.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Pagar con", " "), logo);
            },
            Installment: function(_ref40) {
                var period = _ref40.period;
                return node_node(Fragment, null, _ref40.logo, period ? node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pague hasta ", period.toString(), "x", node_node("br", null), " sin interés") : node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pagos en", node_node("br", null), " mensualidades"));
            },
            BuyNow: function(_ref41) {
                return node_node(Fragment, null, _ref41.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Comprar ahora"));
            },
            Donate: function(_ref42) {
                return node_node(Fragment, null, _ref42.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donar"));
            }
        },
        et: {
            Checkout: function(_ref43) {
                return node_node(Fragment, null, _ref43.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Kassa"));
            },
            Subscribe: function(_ref44) {
                return node_node(Fragment, null, _ref44.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Tellige"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ohutum ja lihtsam viis maksmiseks");
            },
            Pay: function(_ref45) {
                var logo = _ref45.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Makske", " "), logo);
            },
            BuyNow: function(_ref46) {
                return node_node(Fragment, null, _ref46.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Osta kohe"));
            },
            Donate: function(_ref47) {
                return node_node(Fragment, null, _ref47.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Annetage"));
            }
        },
        fi: {
            Checkout: function(_ref48) {
                return node_node(Fragment, null, _ref48.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "-maksu"));
            },
            Subscribe: function(_ref49) {
                return node_node(Fragment, null, _ref49.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Tilaa"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Turvallisempi ja helpompi maksutapa");
            },
            Pay: function(_ref50) {
                return node_node(Fragment, null, _ref50.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "-maksu"));
            },
            BuyNow: function(_ref51) {
                return node_node(Fragment, null, _ref51.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Osta nyt"));
            },
            Donate: function(_ref52) {
                return node_node(Fragment, null, _ref52.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Lahjoita"));
            }
        },
        fr: {
            Checkout: function(_ref53) {
                return node_node(Fragment, null, _ref53.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Payer"));
            },
            Subscribe: function(_ref54) {
                return node_node(Fragment, null, _ref54.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "S'abonner"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Votre réflexe sécurité pour payer en ligne");
            },
            Pay: function(_ref55) {
                var logo = _ref55.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Payer avec", " "), logo);
            },
            BuyNow: function(_ref56) {
                return node_node(Fragment, null, _ref56.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Acheter"));
            },
            Donate: function(_ref57) {
                return node_node(Fragment, null, _ref57.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Faire un don"));
            }
        },
        he: {
            Checkout: function(_ref58) {
                return node_node(Fragment, null, _ref58.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "שלם"));
            },
            Subscribe: function(_ref59) {
                return node_node(Fragment, null, _ref59.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "הצטרפות כמנוי"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, ".הדרך הקלה והבטוחה יותר לשלם");
            },
            Pay: function(_ref60) {
                var logo = _ref60.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "שלם באמצעות", " "), logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "‏"));
            },
            BuyNow: function(_ref61) {
                return node_node(Fragment, null, _ref61.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "קנה עכשיו"));
            },
            Donate: function(_ref62) {
                return node_node(Fragment, null, _ref62.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "שליחת תרומה"));
            }
        },
        hu: {
            Checkout: function(_ref63) {
                return node_node(Fragment, null, _ref63.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "-fizetés"));
            },
            Subscribe: function(_ref64) {
                return node_node(Fragment, null, _ref64.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Feliratkozás"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Biztonságosabb, könnyebb fizetési mód");
            },
            Pay: function(_ref65) {
                return node_node(Fragment, null, _ref65.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "-fizetés"));
            },
            BuyNow: function(_ref66) {
                return node_node(Fragment, null, _ref66.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Vásárlás"));
            },
            Donate: function(_ref67) {
                return node_node(Fragment, null, _ref67.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Adományozás"));
            }
        },
        id: {
            Checkout: function(_ref68) {
                return node_node(Fragment, null, _ref68.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref69) {
                return node_node(Fragment, null, _ref69.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Berlangganan"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Cara yang lebih mudah dan aman untuk membayar");
            },
            Pay: function(_ref70) {
                var logo = _ref70.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Bayar dengan", " "), logo);
            },
            BuyNow: function(_ref71) {
                return node_node(Fragment, null, _ref71.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Beli Sekarang"));
            },
            Donate: function(_ref72) {
                return node_node(Fragment, null, _ref72.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donasikan"));
            }
        },
        it: {
            Checkout: function(_ref73) {
                return node_node(Fragment, null, _ref73.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Paga adesso"));
            },
            Subscribe: function(_ref74) {
                return node_node(Fragment, null, _ref74.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abbonati"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Il modo rapido e sicuro per pagare");
            },
            Pay: function(_ref75) {
                var logo = _ref75.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Paga con", " "), logo);
            },
            BuyNow: function(_ref76) {
                return node_node(Fragment, null, _ref76.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Paga adesso"));
            },
            Donate: function(_ref77) {
                return node_node(Fragment, null, _ref77.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donazione"));
            }
        },
        ja: {
            Checkout: function(_ref78) {
                return node_node(Fragment, null, _ref78.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "で支払う"));
            },
            Subscribe: function(_ref79) {
                return node_node(Fragment, null, _ref79.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "サブスクリプション登録"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "より安全・簡単にお支払い");
            },
            Pay: function(_ref80) {
                return node_node(Fragment, null, _ref80.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "で支払う"));
            },
            BuyNow: function(_ref81) {
                return node_node(Fragment, null, _ref81.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "購入"));
            },
            Donate: function(_ref82) {
                return node_node(Fragment, null, _ref82.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "寄付する"));
            }
        },
        ko: {
            Checkout: function(_ref83) {
                return node_node(Fragment, null, _ref83.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "체크 아웃"));
            },
            Subscribe: function(_ref84) {
                return node_node(Fragment, null, _ref84.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "정기결제"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "더 안전하고 빠른 결제 방법");
            },
            Pay: function(_ref85) {
                return node_node(Fragment, null, _ref85.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "로 지불하기"));
            },
            BuyNow: function(_ref86) {
                return node_node(Fragment, null, _ref86.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "바로 구매"));
            },
            Donate: function(_ref87) {
                return node_node(Fragment, null, _ref87.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "기부"));
            }
        },
        lt: {
            Checkout: function(_ref88) {
                return node_node(Fragment, null, _ref88.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "„Checkout“"));
            },
            Subscribe: function(_ref89) {
                return node_node(Fragment, null, _ref89.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "prenumeruoti"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Saugesnis ir paprastesnis mokėjimo būdas");
            },
            Pay: function(_ref90) {
                var logo = _ref90.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Mokėti naudojant", " "), logo);
            },
            BuyNow: function(_ref91) {
                return node_node(Fragment, null, _ref91.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "pirkti dabar"));
            },
            Donate: function(_ref92) {
                return node_node(Fragment, null, _ref92.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Paaukoti"));
            }
        },
        lv: {
            Checkout: function(_ref93) {
                return node_node(Fragment, null, _ref93.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref94) {
                return node_node(Fragment, null, _ref94.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "abonēt"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Drošāks, ērtāks norēķinu veids");
            },
            Pay: function(_ref95) {
                var logo = _ref95.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Maksāt ar", " "), logo);
            },
            BuyNow: function(_ref96) {
                return node_node(Fragment, null, _ref96.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "pirkt tūlīt", " "));
            },
            Donate: function(_ref97) {
                return node_node(Fragment, null, _ref97.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Ziedot"));
            }
        },
        ms: {
            Checkout: function(_ref98) {
                var logo = _ref98.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Daftar keluar", " "), logo);
            },
            Subscribe: function(_ref99) {
                var logo = _ref99.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Langgan", " "), logo);
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Kaedah bayaran yang lebih selamat dan mudah");
            },
            Pay: function(_ref100) {
                var logo = _ref100.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Bayar dengan", " "), logo);
            },
            BuyNow: function(_ref101) {
                var logo = _ref101.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Beli Sekarang", " "), logo);
            },
            Donate: function(_ref102) {
                var logo = _ref102.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Derma", " "), logo);
            }
        },
        nl: {
            Checkout: function(_ref103) {
                return node_node(Fragment, null, _ref103.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Betalen"));
            },
            Subscribe: function(_ref104) {
                return node_node(Fragment, null, _ref104.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abonneren"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "De veiligere en snellere manier om te betalen");
            },
            Pay: function(_ref105) {
                var logo = _ref105.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Betalen met", " "), logo);
            },
            BuyNow: function(_ref106) {
                return node_node(Fragment, null, _ref106.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Nu kopen"));
            },
            Donate: function(_ref107) {
                return node_node(Fragment, null, _ref107.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Doneren"));
            }
        },
        no: {
            Checkout: function(_ref108) {
                return node_node(Fragment, null, _ref108.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Betal"));
            },
            Subscribe: function(_ref109) {
                return node_node(Fragment, null, _ref109.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abonner"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "En trygg og enkel betalingsmetode");
            },
            Pay: function(_ref110) {
                var logo = _ref110.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Betal med", " "), logo);
            },
            BuyNow: function(_ref111) {
                return node_node(Fragment, null, _ref111.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Kjøp nå"));
            },
            Donate: function(_ref112) {
                return node_node(Fragment, null, _ref112.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Doner"));
            }
        },
        pl: {
            Checkout: function(_ref113) {
                return node_node(Fragment, null, _ref113.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Do kasy"));
            },
            Subscribe: function(_ref114) {
                return node_node(Fragment, null, _ref114.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Subskrybuj"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Płać wygodnie i bezpiecznie");
            },
            Pay: function(_ref115) {
                var logo = _ref115.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Zapłać z", " "), logo);
            },
            BuyNow: function(_ref116) {
                return node_node(Fragment, null, _ref116.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Kup teraz"));
            },
            Donate: function(_ref117) {
                return node_node(Fragment, null, _ref117.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Przekaż darowiznę"));
            }
        },
        pt: {
            Checkout: function(_ref118) {
                return node_node(Fragment, null, _ref118.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref119) {
                return node_node(Fragment, null, _ref119.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Assinar"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "A maneira fácil e segura de pagar");
            },
            Pay: function(_ref120) {
                var logo = _ref120.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Pague com", " "), logo);
            },
            Installment: function(_ref121) {
                var period = _ref121.period;
                return node_node(Fragment, null, _ref121.logo, period ? node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pague em até", node_node("br", null), " ", period.toString(), "x sem juros") : node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Pagamentos", node_node("br", null), " parcelados"));
            },
            BuyNow: function(_ref122) {
                return node_node(Fragment, null, _ref122.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Comprar agora"));
            },
            Donate: function(_ref123) {
                return node_node(Fragment, null, _ref123.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Doar"));
            }
        },
        ro: {
            Checkout: function(_ref124) {
                return node_node(Fragment, null, _ref124.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref125) {
                return node_node(Fragment, null, _ref125.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Abonează-te"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Modalitatea sigură și ușoară de plată");
            },
            Pay: function(_ref126) {
                var logo = _ref126.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Plătește cu", " "), logo);
            },
            BuyNow: function(_ref127) {
                return node_node(Fragment, null, _ref127.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Cumpără acum"));
            },
            Donate: function(_ref128) {
                return node_node(Fragment, null, _ref128.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donează"));
            }
        },
        ru: {
            Checkout: function(_ref129) {
                return node_node(Fragment, null, _ref129.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Оформить покупку"));
            },
            Subscribe: function(_ref130) {
                return node_node(Fragment, null, _ref130.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Подписаться"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Более безопасный и простой способ оплаты");
            },
            Pay: function(_ref131) {
                var logo = _ref131.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Оплатить через", " "), logo);
            },
            BuyNow: function(_ref132) {
                return node_node(Fragment, null, _ref132.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Купить сейчас"));
            },
            Donate: function(_ref133) {
                return node_node(Fragment, null, _ref133.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Сделать пожертвование"));
            }
        },
        si: {
            Checkout: function(_ref134) {
                return node_node(Fragment, null, _ref134.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ගෙවා පිටවීම"));
            },
            Subscribe: function(_ref135) {
                return node_node(Fragment, null, _ref135.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "දායක වන්න"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "ගෙවීමට වඩා ආරක්ෂිත, පහසු ක්‍රමය");
            },
            Pay: function(_ref136) {
                return node_node(Fragment, null, _ref136.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "සමග ගෙවන්න"));
            },
            BuyNow: function(_ref137) {
                return node_node(Fragment, null, _ref137.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "දැන් මිලදී ගන්න"));
            },
            Donate: function(_ref138) {
                return node_node(Fragment, null, _ref138.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "පරිත්‍යාග කරන්න"));
            }
        },
        sk: {
            Checkout: function(_ref139) {
                var logo = _ref139.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Zaplatiť cez", " "), logo);
            },
            Subscribe: function(_ref140) {
                return node_node(Fragment, null, _ref140.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Predplatiť"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Jednoduchší a bezpečnejší spôsob platby");
            },
            Pay: function(_ref141) {
                var logo = _ref141.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Zaplatiť cez", " "), logo);
            },
            BuyNow: function(_ref142) {
                return node_node(Fragment, null, _ref142.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Kúpiť"));
            },
            Donate: function(_ref143) {
                return node_node(Fragment, null, _ref143.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Prispieť"));
            }
        },
        sl: {
            Checkout: function(_ref144) {
                return node_node(Fragment, null, _ref144.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Blagajna"));
            },
            Subscribe: function(_ref145) {
                return node_node(Fragment, null, _ref145.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Naroči se"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Varnejši, lažji način plačil");
            },
            Pay: function(_ref146) {
                var logo = _ref146.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Plačaj z", " "), logo);
            },
            BuyNow: function(_ref147) {
                return node_node(Fragment, null, _ref147.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Kupi zdaj"));
            },
            Donate: function(_ref148) {
                return node_node(Fragment, null, _ref148.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donirajte"));
            }
        },
        sq: {
            Checkout: function(_ref149) {
                var logo = _ref149.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Arka e", " "), logo);
            },
            Subscribe: function(_ref150) {
                var logo = _ref150.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Abonohu në", " "), logo);
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Mënyra më e sigurt dhe më e lehtë për të paguar");
            },
            Pay: function(_ref151) {
                var logo = _ref151.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Paguaj me", " "), logo);
            },
            BuyNow: function(_ref152) {
                var logo = _ref152.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Bli tani me", " "), logo);
            },
            Donate: function(_ref153) {
                var logo = _ref153.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Dhuro", " "), logo);
            }
        },
        sv: {
            Checkout: function(_ref154) {
                return node_node(Fragment, null, _ref154.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Betala"));
            },
            Subscribe: function(_ref155) {
                return node_node(Fragment, null, _ref155.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Prenumerera"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ett tryggt och smidigt sätt att betala");
            },
            Pay: function(_ref156) {
                var logo = _ref156.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Betala med", " "), logo);
            },
            BuyNow: function(_ref157) {
                return node_node(Fragment, null, _ref157.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Köp nu"));
            },
            Donate: function(_ref158) {
                return node_node(Fragment, null, _ref158.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Donera"));
            }
        },
        th: {
            Checkout: function(_ref159) {
                return node_node(Fragment, null, _ref159.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ชำระเงิน"));
            },
            Subscribe: function(_ref160) {
                return node_node(Fragment, null, _ref160.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ชำระค่าสมาชิก"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "วิธีชำระเงินที่ปลอดภัยและง่ายกว่า");
            },
            Pay: function(_ref161) {
                var logo = _ref161.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "ชำระเงินด้วย", " "), logo);
            },
            BuyNow: function(_ref162) {
                return node_node(Fragment, null, _ref162.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ซื้อทันที"));
            },
            Donate: function(_ref163) {
                return node_node(Fragment, null, _ref163.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "บริจาค"));
            }
        },
        tl: {
            Checkout: function(_ref164) {
                return node_node(Fragment, null, _ref164.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Checkout"));
            },
            Subscribe: function(_ref165) {
                return node_node(Fragment, null, _ref165.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Mag-subscribe"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ang mas ligtas, mas madaling paraan para magbayad");
            },
            Pay: function(_ref166) {
                var logo = _ref166.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Magbayad gamit ang", " "), logo);
            },
            BuyNow: function(_ref167) {
                return node_node(Fragment, null, _ref167.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Bumili Ngayon"));
            },
            Donate: function(_ref168) {
                return node_node(Fragment, null, _ref168.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Mag-donate"));
            }
        },
        tr: {
            Checkout: function(_ref169) {
                return node_node(Fragment, null, _ref169.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ile Satın Alın"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Ödeme yapmanın daha güvenli ve kolay yolu");
            },
            Pay: function(_ref170) {
                return node_node(Fragment, null, _ref170.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "ile Öde"));
            },
            BuyNow: function(_ref171) {
                return node_node(Fragment, null, _ref171.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Hemen Satın Alın"));
            }
        },
        vi: {
            Checkout: function(_ref172) {
                return node_node(Fragment, null, _ref172.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Thanh toán"));
            },
            Subscribe: function(_ref173) {
                return node_node(Fragment, null, _ref173.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Đăng ký"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Cách thanh toán an toàn hơn, dễ dàng hơn");
            },
            Pay: function(_ref174) {
                var logo = _ref174.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Thanh toán bằng", " "), logo);
            },
            BuyNow: function(_ref175) {
                return node_node(Fragment, null, _ref175.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Mua ngay"));
            },
            Donate: function(_ref176) {
                return node_node(Fragment, null, _ref176.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "Quyên góp"));
            }
        },
        zh: {
            Checkout: function(_ref177) {
                return node_node(Fragment, null, _ref177.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "結帳"));
            },
            Subscribe: function(_ref178) {
                return node_node(Fragment, null, _ref178.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "订购"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "更安全、更便捷的付款方式");
            },
            Pay: function(_ref179) {
                var logo = _ref179.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "用"), logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "付款"));
            },
            Donate: function(_ref180) {
                return node_node(Fragment, null, _ref180.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "捐赠"));
            },
            BuyNow: function(_ref181) {
                return node_node(Fragment, null, _ref181.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "立即购买"));
            }
        },
        zh_Hant: {
            Checkout: function(_ref182) {
                return node_node(Fragment, null, _ref182.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "結帳"));
            },
            Subscribe: function(_ref183) {
                return node_node(Fragment, null, _ref183.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "訂閱"));
            },
            SaferTag: function() {
                return node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "更安全方便的付款方式");
            },
            Pay: function(_ref184) {
                var logo = _ref184.logo;
                return node_node(Fragment, null, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "使用"), logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "付款"));
            },
            Donate: function(_ref185) {
                return node_node(Fragment, null, _ref185.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "捐款"));
            },
            BuyNow: function(_ref186) {
                return node_node(Fragment, null, _ref186.logo, node_node(Text, {
                    animate: !0,
                    optional: !0
                }, " ", "立即購"));
            }
        }
    };
    var common_logoColors, _textColors, common_secondaryColors, _secondaryVaultColors, _logoColors2, _textColors2, _secondaryColors2;
    function BasicLabel(_ref) {
        var logo = _ref.logo, label = _ref.label, period = _ref.period;
        var _componentContent$lan = componentContent[_ref.locale.lang], Pay = _componentContent$lan.Pay, BuyNow = _componentContent$lan.BuyNow, Installment = _componentContent$lan.Installment, Subscribe = _componentContent$lan.Subscribe, Donate = _componentContent$lan.Donate;
        return label === BUTTON_LABEL.CHECKOUT ? node_node(_componentContent$lan.Checkout, {
            logo: logo
        }) : label === BUTTON_LABEL.SUBSCRIBE && Subscribe ? node_node(Subscribe, {
            logo: logo
        }) : label === BUTTON_LABEL.DONATE && Donate ? node_node(Donate, {
            logo: logo
        }) : label === BUTTON_LABEL.PAY ? node_node(Pay, {
            logo: logo
        }) : label === BUTTON_LABEL.BUYNOW ? node_node(BuyNow, {
            logo: logo
        }) : label === BUTTON_LABEL.INSTALLMENT && Installment ? node_node(Installment, {
            logo: logo,
            period: period
        }) : logo;
    }
    var DEFAULT_FUNDING_CONFIG = {
        enabled: !0,
        automatic: !0,
        layouts: [ BUTTON_LAYOUT.VERTICAL ],
        platforms: [ PLATFORM.DESKTOP, PLATFORM.MOBILE ],
        flows: [ "purchase" ],
        colors: [ "silver", "black", "white" ],
        logoColors: (common_logoColors = {}, common_logoColors.black = "white", common_logoColors),
        shapes: [ "rect", "pill" ],
        textColors: (_textColors = {}, _textColors[DEFAULT] = "black", _textColors.blue = "white", 
        _textColors.black = "white", _textColors.darkblue = "white", _textColors),
        secondaryColors: (common_secondaryColors = {}, common_secondaryColors[DEFAULT] = "silver", 
        common_secondaryColors.black = "black", common_secondaryColors.white = "white", 
        common_secondaryColors),
        secondaryVaultColors: (_secondaryVaultColors = {}, _secondaryVaultColors[DEFAULT] = "silver", 
        _secondaryVaultColors.black = "black", _secondaryVaultColors.white = "white", _secondaryVaultColors),
        Logo: function() {
            throw new Error("Not implemented");
        },
        Label: BasicLabel,
        showWalletMenu: function() {
            return !0;
        }
    };
    var DEFAULT_APM_FUNDING_CONFIG = _extends({}, DEFAULT_FUNDING_CONFIG, {
        colors: [ "default", "silver", "white", "black" ],
        logoColors: (_logoColors2 = {}, _logoColors2.default = "default", _logoColors2.silver = "black", 
        _logoColors2.white = "black", _logoColors2.black = "white", _logoColors2),
        textColors: (_textColors2 = {}, _textColors2.default = "white", _textColors2.black = "white", 
        _textColors2.silver = "black", _textColors2.white = "black", _textColors2),
        secondaryColors: (_secondaryColors2 = {}, _secondaryColors2[DEFAULT] = "default", 
        _secondaryColors2.silver = "silver", _secondaryColors2.white = "white", _secondaryColors2.black = "black", 
        _secondaryColors2)
    });
    function TrackingBeacon(_ref) {
        var url = _ref.url;
        return node_node(Fragment, null, node_node("style", {
            nonce: _ref.nonce,
            innerHTML: "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                "
        }), node_node("img", {
            class: "tracking-beacon",
            src: url
        }));
    }
    var COMPRESSED = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n";
    var EXPANDED = "\n    max-width: 100%;\n    opacity: 1;\n";
    var HIDDEN = "\n    position: absolute;\n    visibility: hidden;\n";
    var VISIBLE = "\n    position: static;\n    visibility: visible;\n";
    var labelStyle = "\n\n    ." + CLASS.BUTTON + " ." + CLASS.TEXT + " {\n        height: 100%;\n        " + HIDDEN + "\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.TEXT + "." + CLASS.IMMEDIATE + ":not(." + CLASS.PERSONALIZATION_TEXT + "):not(." + CLASS.HIDDEN + ") {\n        " + VISIBLE + "\n        " + EXPANDED + "\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.VAULT_LABEL + " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." + CLASS.DOM_READY + " ." + CLASS.BUTTON + " ." + CLASS.TEXT + ":not(." + CLASS.IMMEDIATE + "):not(." + CLASS.PERSONALIZATION_TEXT + "):not(." + CLASS.HIDDEN + ") {\n        " + VISIBLE + "\n        " + COMPRESSED + "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " + COMPRESSED + " }\n        100% { " + EXPANDED + " }\n    }\n";
    var paypal_style_scoped = __webpack_require__(2);
    var paypal_style_scoped_default = __webpack_require__.n(paypal_style_scoped);
    var template_excluded = [ "buttonDesignComponent" ];
    function template_Logo(_ref) {
        return node_node(PayPalLogoInlineSVG, {
            logoColor: _ref.logoColor
        });
    }
    function getPersonalizationText(_ref2) {
        var personalization = _ref2.personalization, layout = _ref2.layout, multiple = _ref2.multiple;
        var personalizationText = personalization && personalization.buttonText && personalization.buttonText.text;
        if (personalizationText && !(personalizationText.match(/[{}]/) || layout === BUTTON_LAYOUT.HORIZONTAL && multiple)) return personalizationText;
    }
    function ButtonPersonalization(opts) {
        var nonce = opts.nonce;
        if (!opts.tagline && opts.label) {
            var personalizationText = getPersonalizationText(opts);
            var personalizationTracker = function(_ref3) {
                var personalization = _ref3.personalization;
                var personalizationTracker = personalization && personalization.buttonText && personalization.buttonText.tracking && personalization.buttonText.tracking.impression;
                if (personalizationTracker) return personalizationTracker;
            }(opts);
            if (personalizationText) return node_node(Fragment, null, node_node(Text, {
                className: [ CLASS.PERSONALIZATION_TEXT ],
                optional: 2
            }, personalizationText), personalizationTracker && node_node(TrackingBeacon, {
                url: personalizationTracker,
                nonce: nonce
            }), function(opts) {
                var personalizationText = !opts.tagline && getPersonalizationText(opts);
                var PAYPAL_BUTTON = "." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAYPAL + "]";
                return node_node("style", {
                    innerHTML: "\n            @media only screen and (max-width: 300px) {\n                ." + CLASS.DOM_READY + " " + PAYPAL_BUTTON + " ." + CLASS.PERSONALIZATION_TEXT + " {\n                    " + HIDDEN + "\n                }\n            }\n\n            @media only screen and (min-width: 300px) {\n                ." + CLASS.DOM_READY + " " + PAYPAL_BUTTON + " .paypal-logo.paypal-logo-" + FUNDING.PAYPAL + " {\n                    animation: " + (personalizationText ? "toggle-paypal-logo 5s 0s forwards" : "none") + ";\n                }\n\n                ." + CLASS.DOM_READY + " " + PAYPAL_BUTTON + " ." + CLASS.TEXT + ":not(." + CLASS.PERSONALIZATION_TEXT + "):not(." + CLASS.HIDDEN + ") {\n                    " + COMPRESSED + "\n                    " + VISIBLE + "\n                    animation: " + (personalizationText ? "show-text-delayed 5s 0s forwards" : "show-text 1s 0s forwards") + ";\n                }\n\n                ." + CLASS.DOM_READY + " " + PAYPAL_BUTTON + " ." + CLASS.PERSONALIZATION_TEXT + " {\n                    " + COMPRESSED + "\n                    " + VISIBLE + "\n                    animation: show-personalization-text 5s 0s forwards;\n                }\n            }\n\n            @keyframes toggle-paypal-logo {\n                0% { " + EXPANDED + " }\n                15% { " + COMPRESSED + " }\n                85% { " + COMPRESSED + " }\n                100% { " + EXPANDED + " }\n            }\n\n            @keyframes show-text-delayed {\n                0% { " + COMPRESSED + " }\n                85% { " + COMPRESSED + " }\n                100% { " + EXPANDED + " }\n            }\n\n            @keyframes show-personalization-text {\n                0% { " + COMPRESSED + " }\n                15% { " + COMPRESSED + " }\n                25% { " + EXPANDED + " }\n                70% { " + EXPANDED + " }\n                85% { " + COMPRESSED + " }\n                100% { " + COMPRESSED + " }\n            }\n        "
                });
            }(opts));
        }
    }
    function template_Label(opts) {
        return node_node(Fragment, null, node_node(BasicLabel, opts), node_node(ButtonPersonalization, opts));
    }
    function DesignExperimentLabel(opts) {
        var buttonDesignComponent = opts.buttonDesignComponent, updatedOpts = _objectWithoutPropertiesLoose(opts, template_excluded);
        var basicLabel = node_node(BasicLabel, updatedOpts);
        var buttonPersonalization = node_node(ButtonPersonalization, updatedOpts);
        return node_node(Fragment, null, basicLabel, buttonDesignComponent, buttonPersonalization);
    }
    function ShowPayLabel(opts) {
        var instrument = opts.instrument, content = opts.content, payNow = opts.payNow, textColor = opts.textColor, logo = opts.logo, label = opts.label;
        return node_node("div", {
            class: "show-pay-label"
        }, node_node("div", {
            class: "pay-label",
            optional: 2
        }, node_node(Space, null), node_node(Text, null, instrument && content ? payNow ? content.payNow : content.payWith : node_node(PlaceHolder, {
            chars: 7,
            color: textColor
        })), node_node(Space, null)), node_node("div", {
            class: "logo",
            optional: 1
        }, instrument && logo ? logo : node_node(Text, null, node_node(PlaceHolder, {
            chars: 4,
            color: textColor
        }))), node_node("div", {
            class: "label"
        }, node_node(Space, null), node_node(Text, null, instrument && label ? label : node_node(PlaceHolder, {
            chars: 6,
            color: textColor
        }))));
    }
    function ShowInstrumentsOnFile(opts) {
        var _instrument$secondary;
        var instrument = opts.instrument, textColor = opts.textColor, logo = opts.logo, label = opts.label, content = opts.content;
        return node_node("div", {
            class: "show-instruments-on-file"
        }, null != instrument && null != (_instrument$secondary = instrument.secondaryInstruments) && _instrument$secondary[0] ? node_node("div", {
            class: "balance"
        }, node_node(Text, null, null == content ? void 0 : content.balance, " &"), node_node(Space, null)) : null, "balance" === (null == instrument ? void 0 : instrument.type) ? node_node("div", {
            class: "paypal-balance"
        }, node_node(Text, null, null == content ? void 0 : content.payPalBalance)) : node_node("div", {
            class: "fi-container"
        }, node_node("div", {
            class: "fi-logo"
        }, instrument && logo ? logo : node_node(Text, null, node_node(PlaceHolder, {
            chars: 4,
            color: textColor
        }))), node_node("div", {
            class: "fi-label"
        }, node_node(Space, null), node_node(Text, null, instrument && label ? label : node_node(PlaceHolder, {
            chars: 6,
            color: textColor
        })))));
    }
    function template_WalletLabel(opts) {
        var logoColor = opts.logoColor, instrument = opts.instrument, content = opts.content, commit = opts.commit, vault = opts.vault, textColor = opts.textColor, fundingSource = opts.fundingSource, showPayLabel = opts.showPayLabel;
        if (instrument && !instrument.type) return function(opts) {
            var logoColor = opts.logoColor, instrument = opts.instrument, locale = opts.locale, content = opts.content, commit = opts.commit;
            if (!instrument) throw new Error("Expected instrument");
            var logo;
            instrument.logoUrl ? logo = node_node("img", {
                class: "card-art",
                src: instrument.logoUrl
            }) : "card" === instrument.type ? logo = node_node(GlyphCardInlineSVG, {
                logoColor: logoColor
            }) : "bank" === instrument.type ? logo = node_node(GlyphBankInlineSVG, {
                logoColor: logoColor
            }) : "credit" === instrument.type && (logo = node_node(CreditLogoInlineSVG, {
                locale: locale,
                logoColor: logoColor
            }));
            return node_node(Style, {
                css: paypal_style_scoped_default.a
            }, node_node("div", {
                class: "wallet-label"
            }, node_node("div", {
                class: "paypal-mark"
            }, node_node(PPLogoInlineSVG, {
                logoColor: logoColor
            })), instrument.oneClick && commit && content && node_node("div", {
                class: "pay-label"
            }, node_node(Space, null), node_node(Text, null, content.payNow)), node_node("div", {
                class: "paypal-wordmark"
            }, node_node(Space, null), node_node(PayPalLogoInlineSVG, {
                logoColor: logoColor
            })), node_node("div", {
                class: "divider"
            }, "|"), logo && node_node("div", {
                class: "logo",
                optional: !0
            }, logo, node_node(Space, null)), node_node("div", {
                class: "label"
            }, node_node(Text, {
                className: [ "limit" ]
            }, instrument.label))));
        }(opts);
        var logo;
        var label;
        var branded;
        branded = instrument && "boolean" == typeof instrument.branded ? instrument.branded : fundingSource === FUNDING.PAYPAL || fundingSource === FUNDING.CREDIT || fundingSource !== FUNDING.CARD;
        if (instrument) {
            var cardSVG = node_node(GlyphCardInlineSVG, {
                logoColor: logoColor
            });
            var bankSVG = node_node(GlyphBankInlineSVG, {
                logoColor: logoColor
            });
            if ("card" === instrument.type && instrument.label) {
                logo = instrument.logoUrl ? node_node("img", {
                    class: "card-art",
                    src: instrument.logoUrl
                }) : cardSVG;
                label = instrument.label.replace("••••", "••");
            } else if ("bank" === instrument.type && instrument.label) {
                logo = instrument.logoUrl ? node_node("img", {
                    class: "card-art",
                    src: instrument.logoUrl
                }) : bankSVG;
                label = instrument.label.replace("••••", "••");
            } else if ("credit" === instrument.type) {
                logo = node_node(CreditMarkInlineSVG, null);
                label = content && content.credit;
            } else if ("balance" === instrument.type) {
                logo = node_node(PayPalMarkInlineSVG, null);
                label = content && content.balance;
            } else instrument.label && (label = instrument.label);
        }
        var payNow = Boolean(instrument && instrument.oneClick && commit && !vault);
        var attrs = {};
        payNow && (attrs["data-pay-now"] = !0);
        return node_node(Style, {
            css: paypal_style_scoped_default.a
        }, node_node("div", _extends({
            class: "wallet-label-new"
        }, attrs), branded ? node_node("div", {
            class: "paypal-mark"
        }, node_node(PPLogoInlineSVG, {
            logoColor: logoColor
        }), node_node(Space, null)) : null, showPayLabel ? node_node(ShowPayLabel, {
            instrument: instrument,
            content: content,
            payNow: payNow,
            textColor: textColor,
            logo: logo,
            label: label
        }) : node_node(ShowInstrumentsOnFile, {
            instrument: instrument,
            textColor: textColor,
            logo: logo,
            label: label,
            content: content
        })));
    }
    function template_Tag(_ref4) {
        var _componentContent$lan = componentContent[_ref4.locale.lang], DualTag = _componentContent$lan.DualTag;
        return node_node(_ref4.multiple && DualTag ? DualTag : _componentContent$lan.SaferTag, {
            optional: !0
        });
    }
    var venmo_style_scoped = __webpack_require__(3);
    var venmo_style_scoped_default = __webpack_require__.n(venmo_style_scoped);
    function venmo_template_WalletLabel(_ref) {
        var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
        var instrument = props.instrument;
        var label;
        var logo = node_node(VenmoLogoInlineSVG, {
            logoColor: props.logoColor
        });
        instrument && instrument.label && (label = instrument.label);
        return node_node(Style, {
            css: venmo_style_scoped_default.a
        }, node_node("div", {
            class: "wallet-label-venmo"
        }, node_node("div", {
            class: "divider"
        }, "|"), logo && node_node("div", {
            class: "logo",
            optional: !0
        }, logo, node_node(Space, null)), label && node_node("div", {
            class: "label"
        }, node_node(Text, {
            className: [ "limit" ]
        }, label))));
    }
    var applepay_style_scoped = __webpack_require__(5);
    var applepay_style_scoped_default = __webpack_require__.n(applepay_style_scoped);
    var paylater_style_scoped = __webpack_require__(6);
    var paylater_style_scoped_default = __webpack_require__.n(paylater_style_scoped);
    function getLabelText(fundingEligibility) {
        var _paylater$products, _paylater$products$pa, _paylater$products2, _paylater$products2$p, _paylater$products3, _paylater$products3$p, _paylater$products4, _paylater$products4$p, _paylater$products5, _paylater$products5$p, _paylater$products6, _paylater$products6$p, _paylater$products7, _paylater$products7$p, _paylater$products8, _paylater$products8$p, _paylater$products9, _paylater$products9$p;
        var paylater = fundingEligibility.paylater;
        var labelText;
        null != paylater && null != (_paylater$products = paylater.products) && null != (_paylater$products$pa = _paylater$products.paylater) && _paylater$products$pa.eligible && "DE" === (null == paylater || null == (_paylater$products2 = paylater.products) || null == (_paylater$products2$p = _paylater$products2.paylater) ? void 0 : _paylater$products2$p.variant) && (labelText = "Später Bezahlen");
        null != paylater && null != (_paylater$products3 = paylater.products) && null != (_paylater$products3$p = _paylater$products3.payIn3) && _paylater$products3$p.eligible && "ES" === (null == paylater || null == (_paylater$products4 = paylater.products) || null == (_paylater$products4$p = _paylater$products4.payIn3) ? void 0 : _paylater$products4$p.variant) && (labelText = "Paga en 3 plazos");
        null != paylater && null != (_paylater$products5 = paylater.products) && null != (_paylater$products5$p = _paylater$products5.payIn3) && _paylater$products5$p.eligible && "IT" === (null == paylater || null == (_paylater$products6 = paylater.products) || null == (_paylater$products6$p = _paylater$products6.payIn3) ? void 0 : _paylater$products6$p.variant) && (labelText = "Paga in 3 rate");
        null != paylater && null != (_paylater$products7 = paylater.products) && null != (_paylater$products7$p = _paylater$products7.payIn4) && _paylater$products7$p.eligible && (labelText = "Pay in 4");
        null != paylater && null != (_paylater$products8 = paylater.products) && null != (_paylater$products8$p = _paylater$products8.payIn4) && _paylater$products8$p.eligible && "FR" === (null == paylater || null == (_paylater$products9 = paylater.products) || null == (_paylater$products9$p = _paylater$products9.payIn4) ? void 0 : _paylater$products9$p.variant) && (labelText = "4X PayPal");
        return labelText;
    }
    var errors_ValidationError = function(_Error) {
        _inheritsLoose(ValidationError, _Error);
        function ValidationError(message) {
            var _this;
            (_this = _Error.call(this, message) || this).code = void 0;
            _this.name = "ValidationError";
            _this.code = "validation_error";
            return _this;
        }
        return ValidationError;
    }(wrapNativeSuper_wrapNativeSuper(Error));
    var config_excluded = [ "logo" ];
    var bancontact_config_excluded = [ "logo" ];
    var giropay_config_excluded = [ "logo" ];
    var sofort_config_excluded = [ "logo" ];
    var eps_config_excluded = [ "logo" ];
    var mybank_config_excluded = [ "logo" ];
    var p24_config_excluded = [ "logo" ];
    var wechatpay_config_excluded = [ "logo" ];
    var payu_config_excluded = [ "logo" ];
    var blik_config_excluded = [ "logo" ];
    var trustly_config_excluded = [ "logo" ];
    var oxxo_config_excluded = [ "logo" ];
    var boleto_config_excluded = [ "logo" ];
    function getBoletoConfig() {
        return _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
            automatic: !1,
            shippingChange: !1,
            layouts: [ BUTTON_LAYOUT.VERTICAL ],
            Logo: function(_ref) {
                return function(_ref3) {
                    var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, boleto_logo_excluded2);
                    var svg = (_ref = getLogoColors("boleto", BOLETO_LOGO_COLORS, logoColor), node_node("svg", {
                        width: "57",
                        height: "48",
                        viewBox: "0 0 57 48",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, node_node("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0.709351 17.7931V35.5862H4.0197V0H0.709351V17.7931ZM51.393 41.9584C50.0334 42.4078 49.4308 43.1883 49.324 44.607C49.2293 45.9902 49.809 47.0071 50.9792 47.5392C51.4997 47.7756 51.7953 47.8227 52.7882 47.8227C53.7696 47.8227 54.0651 47.7756 54.5616 47.5506C55.7909 46.983 56.2638 46.2145 56.2759 44.8199C56.2759 43.4248 55.7559 42.6086 54.5145 42.0531C53.746 41.7105 52.2682 41.6628 51.393 41.9584ZM54.1357 42.9518C54.786 43.3892 55.0109 43.9332 54.9518 44.9973C54.9283 45.6355 54.8451 45.9431 54.6677 46.191C53.746 47.4324 51.5347 47.3262 50.873 45.9902C50.5539 45.387 50.5063 44.4176 50.7663 43.8265C50.9677 43.3536 51.5233 42.8216 51.9726 42.6798C52.5638 42.4904 53.6393 42.6207 54.1357 42.9518ZM46.5813 40.7882V40.197V39.6059H47.7635V40.7882H46.5813ZM7.56649 12.3547V24.7094H10.0493L10.0372 12.3547V0H7.56649V12.3547ZM46.5813 47.7635V44.8079V41.8522H47.7635V47.7635H46.5813ZM13.2414 12.3547V24.7094H15.665V0H13.2414V12.3547ZM43.1883 42.3607C43.3892 42.1598 43.6727 41.9469 43.8029 41.8757C44.1106 41.6984 44.7843 41.6984 45.2928 41.8643C45.5172 41.9469 45.7066 42.0175 45.7302 42.0296C45.7537 42.0416 45.671 42.2425 45.5643 42.4789L45.3634 42.8807L44.6305 42.8336C43.9447 42.7745 43.8741 42.798 43.5309 43.1057C43.0465 43.543 42.9162 44.2167 42.9162 46.2387V47.7635H41.734V41.8522H42.798V42.7269L43.1883 42.3607ZM17.4975 12.3547V24.7094H18.5616V0H17.4975V12.3547ZM36.0591 41.0717C36.0591 40.989 36.272 40.5873 36.6147 40.0432C36.8867 39.6059 36.8988 39.6059 37.6787 39.6059H38.4707L37.7143 40.3744C37.0405 41.0482 36.8988 41.1429 36.5085 41.1429C36.26 41.1429 36.0591 41.1073 36.0591 41.0717ZM21.3869 11.9053C21.3869 18.4669 21.3634 24.0235 21.352 24.26L21.3278 24.7094H24.7094V0H21.399L21.3869 11.9053ZM34.2857 42.3131C34.451 42.1948 34.8768 42.0175 35.2315 41.9234C36.5085 41.5802 38.601 41.781 39.1686 42.3016C39.653 42.7389 39.7241 43.0701 39.7241 45.0087C39.7362 46.2622 39.7832 47.0186 39.8894 47.3142L40.0553 47.7635H39.405C38.8018 47.7635 38.7548 47.74 38.648 47.4209L38.5298 47.0777L37.7969 47.4559C37.1111 47.7991 36.9814 47.8227 35.8227 47.8227C34.7351 47.8227 34.5222 47.7871 34.0963 47.5506C32.8905 46.8533 32.9496 45.4225 34.2145 44.8079C34.6169 44.6185 37.584 44.1106 38.341 44.0985C38.3881 44.0985 38.4236 43.9212 38.4236 43.6968C38.4236 42.9518 37.7854 42.5616 36.5676 42.5616C35.7515 42.5616 35.1603 42.8101 34.9004 43.2709C34.7116 43.6021 34.6639 43.6256 34.1204 43.6021C33.8007 43.5786 33.5172 43.5074 33.4937 43.4362C33.4346 43.2709 33.919 42.5736 34.2857 42.3131ZM36.3547 47.1012C37.6787 46.9595 38.4236 46.3092 38.4236 45.3043C38.4236 45.0323 38.3881 44.8079 38.341 44.8199C38.2819 44.8199 38.1045 44.867 37.9151 44.9261C37.7378 44.9852 37.0996 45.0914 36.4964 45.1626C35.2671 45.3278 34.8057 45.5172 34.6169 45.9431C34.4986 46.1795 34.5222 46.2857 34.723 46.5578C35.0421 46.983 35.6333 47.1845 36.3547 47.1012ZM27.9015 12.3547V24.7094H30.3842V0H27.9015V12.3547ZM26.861 42.6086C27.2156 42.2781 27.7832 41.994 28.3388 41.8643C29.9825 41.474 31.6968 42.0175 32.2047 43.0936C32.3229 43.3301 32.3941 43.543 32.3706 43.5665C32.3585 43.5786 32.0865 43.6256 31.7909 43.6727C31.2589 43.7559 31.2353 43.7438 30.9874 43.3301C30.3131 42.1713 28.2206 42.3487 27.5703 43.6256C27.2156 44.3229 27.2392 45.6711 27.618 46.1796C28.0667 46.7942 28.4455 46.983 29.2967 47.0307C29.9704 47.0662 30.1478 47.0307 30.5025 46.7942C30.7268 46.6404 31.0109 46.3092 31.1406 46.0613C31.2504 45.8422 31.3066 45.7299 31.3971 45.6805C31.4922 45.6287 31.6251 45.6464 31.8976 45.6825C32.1932 45.7181 32.4653 45.7893 32.5002 45.8249C32.5358 45.8599 32.4411 46.1204 32.2759 46.416C31.1292 48.6032 26.9557 48.2956 26.1751 45.9666C25.7969 44.8314 26.116 43.283 26.861 42.6086ZM32.7488 12.3547V24.7094H33.8128V0H32.7488V12.3547ZM19.8856 42.3131C20.075 42.1713 20.4653 41.994 20.7252 41.8993C21.8249 41.5566 23.3262 41.8052 23.9174 42.4198C24.3547 42.8692 24.4729 43.6256 24.4729 45.884V47.7635H23.1724V45.7658C23.1724 43.5309 23.0898 43.1171 22.5342 42.8336C22.0728 42.5851 20.9852 42.5736 20.5123 42.8216C19.7082 43.2353 19.6847 43.318 19.6491 45.6475L19.6135 47.7635H18.3251V41.8402L18.8927 41.8757C19.4012 41.9113 19.4483 41.9349 19.4839 42.2425L19.5194 42.5616L19.8856 42.3131ZM36.8867 12.3547V24.7094H38.069V0H36.8867V12.3547ZM10.2266 43.0465C10.4751 42.5495 11.0777 42.1243 11.8347 41.9113C12.2835 41.781 12.8276 41.746 13.6552 41.781C14.9436 41.8402 15.4997 42.006 15.9606 42.5025C16.2441 42.8101 16.2561 42.8807 16.3153 44.9617C16.3623 46.3328 16.4335 47.208 16.5282 47.3733L16.5317 47.3803C16.6011 47.5197 16.6699 47.658 16.6699 47.6924C16.6699 47.728 16.3744 47.7635 16.0076 47.7635C15.405 47.7635 15.3459 47.74 15.2392 47.4324L15.1209 47.1012L14.4116 47.4559C13.8446 47.74 13.5014 47.8227 12.7329 47.8582C11.5271 47.9174 10.8648 47.7515 10.3092 47.2315C9.91897 46.8768 9.87191 46.7707 9.87191 46.2501C9.87191 45.5764 10.144 45.1861 10.9004 44.7958C11.2436 44.6185 14.2107 44.1106 14.9321 44.0985C15.0859 44.0985 15.0148 43.33 14.8374 43.0701C14.613 42.751 13.9863 42.5616 13.1467 42.5616C12.3426 42.5616 11.7515 42.8101 11.4915 43.2709C11.3142 43.59 11.2315 43.6256 10.7351 43.6256C10.0728 43.6256 9.97808 43.5194 10.2266 43.0465ZM14.0334 46.8413C14.7427 46.4751 15.0148 46.0728 15.0148 45.387C15.0148 44.867 14.9321 44.7017 14.7548 44.867C14.7192 44.9026 14.116 45.0087 13.4067 45.1155C12.6973 45.2217 11.9409 45.3755 11.728 45.4702C11.0542 45.7416 11.0071 46.4039 11.6333 46.8768C12.0826 47.208 13.3475 47.1845 14.0334 46.8413ZM40.6699 12.3547V24.7094H43.9803V0H40.6699V12.3547ZM0.709351 47.7635V43.6727V39.5824L3.34592 39.6415C4.91845 39.665 6.14777 39.7477 6.41981 39.8303C7.01095 40.0197 7.75589 40.7055 7.92117 41.214C8.16969 41.9584 7.75589 42.8101 6.92831 43.2354C6.67979 43.3656 6.62068 43.4483 6.73891 43.4839C8.34703 43.9568 8.94963 45.3164 8.11057 46.5813C7.48385 47.5392 6.54951 47.7635 3.19211 47.7635H0.709351ZM6.62068 41.8402C6.62068 41.1899 6.24247 40.8117 5.45047 40.67C5.10726 40.5988 4.18498 40.5517 3.4165 40.5517H2.00984V43.0345H3.64149C4.52819 43.0345 5.43841 42.9874 5.66281 42.9163C6.28953 42.7389 6.62068 42.3607 6.62068 41.8402ZM6.91625 45.9902C7.27093 45.3043 6.99889 44.5594 6.28953 44.2403C5.97043 44.1106 5.33225 44.0394 3.93706 44.0038L2.00984 43.9568V46.8413L3.99617 46.7942C6.18336 46.7586 6.57363 46.6404 6.91625 45.9902ZM46.8177 12.3547V24.7094H49.1823V0H46.8177V12.3547ZM41.2611 34.3213C41.2611 32.7132 42.1357 31.6727 43.7794 31.33C44.5002 31.1762 45.8249 31.2945 46.451 31.5786C47.6453 32.0985 48.2364 33.0087 48.2364 34.3448C48.2364 36.2956 46.9951 37.3596 44.7488 37.3596C42.5145 37.3596 41.2611 36.272 41.2611 34.3213ZM46.8177 33.4111C46.6524 32.8905 46.0257 32.3229 45.4346 32.1697C44.5835 31.9332 43.7438 32.122 43.1406 32.7017C42.6919 33.139 42.526 33.6825 42.5851 34.5933C42.6563 35.6924 43.2118 36.3426 44.2288 36.532C45.2217 36.7214 46.0728 36.4017 46.6283 35.6688C46.9239 35.2786 47.0307 34.0372 46.8177 33.4111ZM50.601 17.7931V35.5862H51.665V0H50.601V17.7931ZM38.0098 29.8878L38.5419 29.6158L39.0739 29.3437L39.1451 31.33H40.4335V32.1576H39.1209L39.1565 34.1675L39.1565 34.1691C39.1921 36.4017 39.1923 36.4138 39.9841 36.4138C40.3864 36.4138 40.4335 36.4494 40.5282 36.792C40.6579 37.2884 40.5517 37.3596 39.6885 37.3596C38.9086 37.3596 38.2584 37.1352 38.081 36.792C37.9978 36.6382 37.9507 35.7044 37.9507 34.3569V32.1576H37.4778C37.017 32.1576 37.0049 32.1456 37.0049 31.7318C37.0049 31.318 37.017 31.318 37.4543 31.3536L37.8916 31.3892L37.9507 30.6327L38.0098 29.8878ZM31.6256 31.3656C30.786 31.59 30.3486 31.85 29.8643 32.4176C29.3672 32.9973 29.202 33.4937 29.202 34.4395C29.202 36.2835 30.5025 37.3596 32.7367 37.3596C33.884 37.3596 34.5692 37.1823 35.1845 36.7094C35.5391 36.4373 36.1417 35.6218 36.047 35.5392C36.0235 35.515 35.7165 35.468 35.3733 35.4445C34.7821 35.3853 34.7466 35.3968 34.5222 35.7635C34.2031 36.2835 33.5528 36.5676 32.7488 36.5676C32.0159 36.5676 31.2118 36.2244 30.9162 35.7871C30.6919 35.4445 30.4554 34.7586 30.538 34.6875C30.5736 34.6525 31.8265 34.6283 33.3278 34.6404H36.0591V34.0848C36.0591 33.352 35.6097 32.3941 35.0898 32.0038C34.2387 31.3536 32.7367 31.0815 31.6256 31.3656ZM33.8363 32.3585C34.2736 32.607 34.6048 33.0443 34.7116 33.4817L34.7821 33.8128H30.6207V33.5172C30.6207 33.1155 31.2709 32.4297 31.8621 32.2047C32.4411 32.0038 33.3399 32.0629 33.8363 32.3585ZM26.3645 37.2414V33.1505V29.0717L26.9912 29.1073L27.6059 29.1429L27.6415 33.1861L27.665 37.2414H26.3645ZM20.335 31.3656C18.751 31.7318 17.9825 32.5714 17.8757 34.0613C17.8052 35.1368 18.0651 35.8938 18.7268 36.5085C19.4483 37.1702 20.2047 37.3952 21.5643 37.3361C22.4986 37.3005 22.7586 37.2534 23.3497 36.9458C24.3667 36.4259 24.7564 35.7635 24.8041 34.4631C24.8396 33.659 24.8041 33.4111 24.5911 32.9382C23.9879 31.6612 22.0848 30.9633 20.335 31.3656ZM22.5813 32.4061C23.2786 32.7958 23.5627 33.4702 23.5036 34.5222C23.4559 35.3853 23.2671 35.7635 22.676 36.2129C22.0137 36.7094 20.5835 36.6738 19.9091 36.1538C19.2353 35.6218 18.9398 34.191 19.318 33.3043C19.8029 32.1576 21.3634 31.7318 22.5813 32.4061ZM8.74876 37.2649V33.1505V29.0482L11.3262 29.1193C13.9863 29.1784 14.4827 29.2611 15.133 29.7105C15.7712 30.1357 16.0197 30.5616 16.0197 31.2118C16.0197 31.8856 15.7477 32.335 15.0739 32.7017L14.6366 32.9617L15.0618 33.1034C17.0126 33.7416 17.0481 36.0356 15.133 36.9223C14.648 37.1467 14.341 37.1823 11.6809 37.2178L8.74876 37.2649ZM14.0569 32.2994C14.8965 31.8856 14.8965 30.7624 14.069 30.3607C13.7734 30.219 13.2293 30.1478 12.1182 30.1007C10.8643 30.0538 10.3667 30.007 10.1711 30.2278C10.02 30.3984 10.0493 30.7287 10.0493 31.3421V32.5123H11.8582C13.3361 32.5123 13.7263 32.4767 14.0569 32.2994ZM14.2342 36.1303C15.405 35.6453 15.4286 34.191 14.2819 33.7658C13.9272 33.6355 13.2534 33.5764 12.0235 33.5528C11.0662 33.5293 10.2266 33.5293 10.1675 33.5528C10.0963 33.5764 10.0493 34.1675 10.0493 34.948V36.2956H11.9409C13.2884 36.2956 13.9507 36.2485 14.2342 36.1303Z",
                        fill: _ref.primary
                    })));
                    var _ref;
                    return node_node(SVGLogo, _extends({}, props, {
                        name: "boleto",
                        logoColor: logoColor,
                        render: function() {
                            return svg;
                        }
                    }));
                }({
                    logoColor: _ref.logoColor,
                    optional: _ref.optional
                });
            },
            Label: function(_ref2) {
                var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, boleto_config_excluded);
                var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                    animate: !0,
                    optional: !0
                }, "Boleto Bancário"));
                return node_node(BasicLabel, _extends({}, opts, {
                    logo: apmLogo
                }));
            }
        });
    }
    var mercadopago_config_excluded = [ "logo" ];
    var multibanco_config_excluded = [ "logo" ];
    var satispay_config_excluded = [ "logo" ];
    var paidy_config_excluded = [ "logo" ];
    function getFundingConfig() {
        return function(method, logic, args) {
            void 0 === args && (args = []);
            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
            var key = serializeArgs(args);
            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = function() {
                var _ref;
                return (_ref = {})[FUNDING.PAYPAL] = _extends({}, DEFAULT_FUNDING_CONFIG, {
                    flows: [ "purchase", "billing_setup", "subscription_setup", "vault_without_purchase" ],
                    layouts: [ BUTTON_LAYOUT.VERTICAL, BUTTON_LAYOUT.HORIZONTAL ],
                    colors: [ "gold", "blue", "silver", "black", "white" ],
                    logoColors: (_logoColors = {}, _logoColors.gold = "blue", _logoColors.silver = "blue", 
                    _logoColors.blue = "white", _logoColors.black = "white", _logoColors.white = "blue", 
                    _logoColors),
                    labelText: "PayPal",
                    Logo: template_Logo,
                    Label: template_Label,
                    WalletLabel: template_WalletLabel,
                    Tag: template_Tag
                }), _ref[FUNDING.VENMO] = function() {
                    var _logoColors, _extends2;
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        shippingChange: !1,
                        layouts: [ BUTTON_LAYOUT.HORIZONTAL, BUTTON_LAYOUT.VERTICAL ],
                        eligible: function(_ref) {
                            var experiment = _ref.experiment;
                            return !experiment || !1 !== experiment.enableVenmo;
                        },
                        requires: function(_ref2) {
                            return _ref2.platform === PLATFORM.MOBILE ? {
                                native: !0,
                                popup: !0
                            } : {};
                        },
                        Logo: function(_ref3) {
                            return VenmoLogoInlineSVG({
                                logoColor: _ref3.logoColor,
                                optional: _ref3.optional
                            });
                        },
                        Label: function(_ref4) {
                            var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
                            return props.experiment && props.experiment.enableVenmoAppLabel ? (AppLogo = node_node(Style, {
                                css: venmo_style_scoped_default.a
                            }, node_node(VenmoLogoInlineSVG, {
                                logoColor: (opts = props).logoColor
                            }), node_node(Text, {
                                className: [ "app-label" ]
                            }, "App")), node_node(BasicLabel, _extends({}, opts, {
                                logo: AppLogo
                            }))) : function(opts) {
                                return node_node(BasicLabel, opts);
                            }(props);
                            var opts, AppLogo;
                        },
                        WalletLabel: function() {
                            return venmo_template_WalletLabel.apply(void 0, arguments);
                        },
                        showWalletMenu: function() {
                            return !1;
                        },
                        colors: [ "blue", "silver", "black", "white" ],
                        logoColors: (_logoColors = {}, _logoColors.blue = "white", _logoColors.silver = "blue", 
                        _logoColors.black = "white", _logoColors.white = "blue", _logoColors),
                        secondaryColors: _extends({}, DEFAULT_FUNDING_CONFIG.secondaryColors, (_extends2 = {}, 
                        _extends2.gold = "blue", _extends2.blue = "silver", _extends2.silver = "blue", _extends2))
                    });
                }(), _ref[FUNDING.APPLEPAY] = function() {
                    var _logoColors;
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        requires: function() {
                            return {
                                applepay: !0
                            };
                        },
                        eligible: function(_ref) {
                            var components = _ref.components;
                            return !(null != components && components.includes(FUNDING.APPLEPAY));
                        },
                        platforms: [ PLATFORM.DESKTOP, PLATFORM.MOBILE ],
                        layouts: [ BUTTON_LAYOUT.HORIZONTAL, BUTTON_LAYOUT.VERTICAL ],
                        Logo: function(_ref2) {
                            return logoColor = void 0 === (_ref3$logoColor = (_ref3 = {
                                logoColor: _ref2.logoColor,
                                optional: _ref2.optional
                            }).logoColor) ? "default" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, logo_excluded2), 
                            svg = (_ref = getLogoColors("applepay", APPLEPAY_LOGO_COLORS, logoColor), node_node("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "800",
                                width: "1200",
                                viewBox: "-76.79115 -52.55 665.5233 315.3"
                            }, node_node("path", {
                                d: "M93.541 27.1c-6 7.1-15.6 12.7-25.2 11.9-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 27.1m8.7 13.8c-13.9-.8-25.8 7.9-32.4 7.9-6.7 0-16.8-7.5-27.8-7.3-14.3.2-27.6 8.3-34.9 21.2-15 25.8-3.9 64 10.6 85 7.1 10.4 15.6 21.8 26.8 21.4 10.6-.4 14.8-6.9 27.6-6.9 12.9 0 16.6 6.9 27.8 6.7 11.6-.2 18.9-10.4 26-20.8 8.1-11.8 11.4-23.3 11.6-23.9-.2-.2-22.4-8.7-22.6-34.3-.2-21.4 17.5-31.6 18.3-32.2-10-14.8-25.6-16.4-31-16.8m80.3-29v155.9h24.2v-53.3h33.5c30.6 0 52.1-21 52.1-51.4s-21.1-51.2-51.3-51.2zm24.2 20.4h27.9c21 0 33 11.2 33 30.9s-12 31-33.1 31h-27.8zm129.8 136.7c15.2 0 29.3-7.7 35.7-19.9h.5v18.7h22.4V90.2c0-22.5-18-37-45.7-37-25.7 0-44.7 14.7-45.4 34.9h21.8c1.8-9.6 10.7-15.9 22.9-15.9 14.8 0 23.1 6.9 23.1 19.6v8.6l-30.2 1.8c-28.1 1.7-43.3 13.2-43.3 33.2 0 20.2 15.7 33.6 38.2 33.6zm6.5-18.5c-12.9 0-21.1-6.2-21.1-15.7 0-9.8 7.9-15.5 23-16.4l26.9-1.7v8.8c0 14.6-12.4 25-28.8 25zm82 59.7c23.6 0 34.7-9 44.4-36.3l42.5-119.2h-24.6l-28.5 92.1h-.5l-28.5-92.1h-25.3l41 113.5-2.2 6.9c-3.7 11.7-9.7 16.2-20.4 16.2-1.9 0-5.6-.2-7.1-.4v18.7c1.4.4 7.4.6 9.2.6z",
                                fill: _ref.primary
                            }))), node_node(SVGLogo, _extends({}, props, {
                                name: "applepay",
                                logoColor: logoColor,
                                alt: "Apple Pay",
                                "aria-label": "Apple Pay",
                                render: function() {
                                    return svg;
                                }
                            }));
                            var _ref3, _ref3$logoColor, logoColor, props, svg, _ref;
                        },
                        Mark: function(_ref3) {
                            var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
                            return function(_ref) {
                                var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
                                return node_node(Style, {
                                    css: applepay_style_scoped_default.a
                                }, node_node(ApplePayMarkInlineSVG, props));
                            }(_extends({}, props));
                        },
                        colors: [ "black", "white" ],
                        logoColors: (_logoColors = {}, _logoColors.black = "white", _logoColors.white = "black", 
                        _logoColors),
                        shippingChange: !0
                    });
                }(), _ref[FUNDING.ITAU] = function() {
                    var _logoColors, _extends2;
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        layouts: [ BUTTON_LAYOUT.HORIZONTAL, BUTTON_LAYOUT.VERTICAL ],
                        Logo: function(_ref) {
                            return logoColor = void 0 === (_ref3$logoColor = (_ref3 = {
                                logoColor: _ref.logoColor,
                                optional: _ref.optional
                            }).logoColor) ? "default" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, itau_logo_excluded2), 
                            svg = (primary = getLogoColors("itau", ITAU_LOGO_COLORS, logoColor).primary, node_node("svg", {
                                version: "1.1",
                                id: "Layer_1",
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 181 33",
                                preserveAspectRatio: "xMinYMin meet"
                            }, node_node("path", {
                                fill: "#FF7900",
                                d: "M136.5,5.6L153,1.8c2.2-0.5,4.4,0.8,5,2.9l4,15.2c0.5,2.1-0.8,4.2-3,4.7l-16.5,3.8c-2.2,0.5-4.4-0.8-5-2.9 l-4-15.2C132.8,8.3,134.2,6.1,136.5,5.6z"
                            }), node_node("path", {
                                fill: "#004995",
                                d: "M144.5,6.1h10.1c1.5,0,2.7,1.2,2.7,2.5v9.7c0,1.3-1.2,2.5-2.7,2.5h-10.1c-1.5,0-2.7-1.2-2.7-2.5V8.6 C141.9,7.2,143.1,6.1,144.5,6.1z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M108.2,19.9c-0.1-1-0.5-1.9-1.1-2.8c-1.1-1.3-2.8-2-4.6-1.9c-1.6,0.1-3.9,0.3-5.3,1.3L98,19 c0,0,1.3-1.1,3.9-1.1c1.1,0,2.1,0.6,2.3,1.3v0.2c-1.4,0-5.7,0.3-7.4,2.8c-2,3,1.1,5.8,3.1,5.8c1.6,0,3.2,0.1,4.6-1.3l0.2,1.1h3.4 v-7.3c0-0.1,0-0.2,0-0.2L108.2,19.9L108.2,19.9z M100.4,24.1c0.2-1.8,2.7-1.9,3.9-1.9v2.1C103,26,100.2,25.8,100.4,24.1z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M95.2,16.1c0,0-7.6-2-10,3c-1.3,2.8-0.7,5.7,0.8,7.3c0.7,0.7,1.6,1.2,2.6,1.5c2,0.6,5.4,0.4,6.5-0.2l-0.4-2.8 c0,0-3.4,1.1-5.2-0.6c-2.2-2.2-0.2-5.7,2.1-5.7c2.3,0,3.1,0.4,3.1,0.4L95.2,16.1z"
                            }), node_node("rect", {
                                fill: primary,
                                x: "42.3",
                                y: "11.7",
                                width: "3.9",
                                height: "16.3"
                            }), node_node("path", {
                                fill: primary,
                                d: "M55.7,18.7v-3h-2.1v-4.1h-3.9v4.1h-2v3h2v6.2c0,1.7,1.3,3,3,3l0,0h3.1v-3h-1.1c-0.7,0-1.1-0.5-1.1-1.1l0,0v-5.2 L55.7,18.7L55.7,18.7z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M69,19.9c-0.1-1-0.5-1.9-1.1-2.8c-1.2-1.3-2.8-2-4.6-1.9c-1.6,0.1-3.9,0.3-5.3,1.3l0.8,2.5c0,0,1.3-1.1,3.9-1.1 c1.1,0,2.1,0.6,2.3,1.3v0.2c-1.4,0-5.8,0.3-7.4,2.8c-2,3,1.1,5.8,3.1,5.8c1.6,0,3.2,0.1,4.6-1.3l0.2,1.1H69V19.9L69,19.9z M61.1,24.1c0.2-1.8,2.7-1.9,3.9-1.9v2.1C63.8,26,60.9,25.8,61.1,24.1L61.1,24.1z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M79.1,15.7v7.2c0,0.3-0.1,0.5-0.2,0.7c-0.5,0.7-1.1,1.3-2,1.3c-0.9,0.1-1.8-0.5-2.1-1.3 c-0.1-0.2-0.1-0.4-0.1-0.6v-7.3h-3.9V24c0,2.1,1.8,4.1,3.9,4.1c3.9,0.2,4.6-1.8,4.6-1.8v-0.1l0.4,1.5H83V15.6L79.1,15.7z"
                            }), node_node("rect", {
                                fill: "#FFF100",
                                x: "143.1",
                                y: "13.5",
                                width: "1.2",
                                height: "5"
                            }), node_node("path", {
                                fill: "#FFF100",
                                d: "M147.3,15.7v-0.9h-0.7v-1.3h-1.2v1.3h-0.6v0.9h0.6v1.9c0,0.5,0.4,0.9,1,0.9h1v-0.9H147c-0.2,0-0.4-0.2-0.4-0.3 l0,0v-1.6C146.6,15.7,147.3,15.7,147.3,15.7z"
                            }), node_node("path", {
                                fill: "#FFF100",
                                d: "M151.6,16c0-0.3-0.2-0.6-0.4-0.8c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.7,0.4l0.3,0.8c0.4-0.3,0.8-0.3,1.2-0.3 c0.3,0,0.6,0.2,0.7,0.3v0.1c-0.4,0-1.9,0.1-2.3,0.8c-0.4,0.6-0.2,1.3,0.4,1.6c0.2,0.1,0.4,0.2,0.5,0.2c0.5,0.1,1.1-0.1,1.5-0.3 l0.1,0.3h1.1L151.6,16L151.6,16z M149.1,17.3c0.1-0.6,0.9-0.6,1.2-0.6v0.7C149.9,17.9,149,17.8,149.1,17.3L149.1,17.3z"
                            }), node_node("path", {
                                fill: "#FFF100",
                                d: "M154.8,14.8V17c-0.1,0.3-0.4,0.4-0.7,0.5c-0.4,0-0.6-0.2-0.7-0.5v-2.3h-1.2v2.5c0,0.7,0.5,1.2,1.2,1.3 c1.2,0.1,1.5-0.5,1.5-0.5l0,0l0.2,0.4h1.1v-3.8L154.8,14.8L154.8,14.8z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M113.5,17.9l-0.2-2.1H110V28h3.9v-6.8c0.4-0.8,1.2-2.1,3.4-2.1v-3.6C115.9,15.4,114.4,16.3,113.5,17.9z"
                            }), node_node("path", {
                                fill: primary,
                                d: "M128.1,10.4v6.4c-0.7-0.6-1.7-1.4-3.7-1.4c-3.6,0-6.1,3.2-6.1,6.8c-0.1,3.2,2.6,5.9,5.9,6 c1.5-0.1,3-0.6,4.2-1.4L129,28h3.1V10.5L128.1,10.4L128.1,10.4z M125.4,25.1c-2.3,0-2.8-1.9-2.8-3.4s0.7-3.2,2.8-3.2 c1.3,0,2.1,0.9,2.7,1.8v3C127.5,24.1,126.6,25.1,125.4,25.1z"
                            }), node_node("polygon", {
                                fill: "#FFF100",
                                points: "154.6,14.4 153.5,14.4 154.4,13.5 155.7,13.5 "
                            }), node_node("line", {
                                fill: "none",
                                x1: "35.6",
                                y1: "8.3",
                                x2: "35.6",
                                y2: "28.2"
                            }), node_node("rect", {
                                fill: "#D8D8D8",
                                x: "22.4",
                                y: "32.2",
                                width: "0.1",
                                height: "0.1"
                            }), node_node("path", {
                                fill: primary,
                                opacity: "0.7",
                                "enable-background": "new    ",
                                d: "M25.3,12.9c0.2-1.6,0-2.6-0.9-3.7s-2.6-1.5-4.6-1.5h-6.1c-0.4,0-0.8,0.3-0.9,0.8l-2.5,16.8 c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l-0.3,1.7c-0.1,0.2,0.2,0.5,0.4,0.5H18c0.4,0,0.6-0.3,0.7-0.7l0.1-0.2l0.6-3.9l0.1-0.2 c0.1-0.5,0.4-0.7,0.7-0.7h0.5c3.1,0,5.4-1.4,6.1-5.1c0.3-1.6,0.1-2.9-0.6-3.8C25.9,13.4,25.6,13.1,25.3,12.9L25.3,12.9"
                            }), node_node("path", {
                                fill: primary,
                                opacity: "0.7",
                                "enable-background": "new    ",
                                d: "M25.3,12.9c0.2-1.6,0-2.6-0.9-3.7s-2.6-1.5-4.6-1.5h-6.1c-0.4,0-0.8,0.3-0.9,0.8l-2.5,16.8 c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l0.9-6.3l-0.1,0.2c0.1-0.5,0.4-0.8,0.9-0.8h1.8c3.5,0,6.2-1.5,7-5.8C25.2,13.2,25.2,13,25.3,12.9"
                            }), node_node("path", {
                                fill: primary,
                                d: "M16.6,12.9c0-0.2,0.1-0.5,0.4-0.6c0.1,0,0.2-0.1,0.3-0.1h4.8c0.6,0,1.1,0.1,1.6,0.1c0.1,0,0.2,0,0.4,0.1 c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.2c0.2-1.6,0-2.6-0.9-3.6c-0.9-1.1-2.6-1.6-4.6-1.6h-6.1 c-0.4,0-0.8,0.4-0.9,0.8l-2.5,16.8c-0.1,0.4,0.1,0.7,0.5,0.7h3.8l0.9-6.3L16.6,12.9z"
                            }), node_node("g", {
                                transform: "matrix(0.379173, 0, 0, 0.397443, 9.686229, 4.778377)",
                                opacity: "0.2"
                            }, node_node("path", {
                                fill: "#231F20",
                                d: "M41.1,20.5c0.9,0.5,1.7,1.1,2.3,1.8c1,1.1,1.6,2.5,1.9,4.1c0.3-3.2-0.2-5.8-1.9-7.8c-0.6-0.7-1.3-1.2-2.1-1.7 C41.3,18,41.3,19.2,41.1,20.5z"
                            }), node_node("path", {
                                fill: "#231F20",
                                d: "M2.2,49L8.5,9.4c0.1-1.1,1.1-1.9,2.2-1.9h16c5.5,0,9.8,1.2,12.2,3.9c1.2,1.4,1.9,3,2.2,4.8 c0.4-3.6-0.2-6.1-2.2-8.4c-2.4-2.8-6.7-4-12.2-4h-16c-1.1,0-2.1,0.8-2.3,1.9L1.8,47.9C1.8,48.3,1.9,48.7,2.2,49z"
                            }), node_node("path", {
                                fill: "#231F20",
                                d: "M12.5,53.2l-0.1,0.6c-0.1,0.4,0.1,0.8,0.4,1.1l0.3-1.7C13.1,53.2,12.5,53.2,12.5,53.2z"
                            })), node_node("rect", {
                                fill: primary,
                                x: "35.5",
                                y: "6.7",
                                width: "1.1",
                                height: "21.5"
                            }))), node_node(SVGLogo, _extends({}, props, {
                                name: "itau",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                            var _ref3, _ref3$logoColor, logoColor, props, svg, primary;
                        },
                        colors: [ "darkblue", "blue", "black" ],
                        logoColors: (_logoColors = {}, _logoColors.darkblue = "white", _logoColors.blue = "white", 
                        _logoColors.black = "white", _logoColors),
                        secondaryColors: _extends({}, DEFAULT_FUNDING_CONFIG.secondaryColors, (_extends2 = {}, 
                        _extends2[DEFAULT] = "darkblue", _extends2.gold = "darkblue", _extends2.blue = "blue", 
                        _extends2.silver = "darkblue", _extends2.white = "darkblue", _extends2))
                    });
                }(), _ref[FUNDING.CREDIT] = function() {
                    var _extends2, _logoColors;
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        flows: [ "purchase", "billing_setup", "subscription_setup" ],
                        layouts: [ BUTTON_LAYOUT.HORIZONTAL, BUTTON_LAYOUT.VERTICAL ],
                        Logo: function(_ref) {
                            var locale = _ref.locale, logoColor = _ref.logoColor;
                            return locale.country === COUNTRY.DE ? node_node(CreditLogoInlineSVG, {
                                locale: locale,
                                logoColor: logoColor
                            }) : node_node(Fragment, null, node_node(PPLogoInlineSVG, {
                                logoColor: logoColor
                            }), node_node(Space, null), node_node("span", {
                                optional: !0
                            }, node_node(PayPalLogoInlineSVG, {
                                logoColor: logoColor
                            }), node_node(Space, null)), node_node(CreditLogoInlineSVG, {
                                locale: locale,
                                logoColor: logoColor
                            }));
                        },
                        WalletLabel: template_WalletLabel,
                        colors: [ "darkblue", "black", "white" ],
                        secondaryColors: _extends({}, DEFAULT_FUNDING_CONFIG.secondaryColors, (_extends2 = {}, 
                        _extends2[DEFAULT] = "darkblue", _extends2)),
                        logoColors: (_logoColors = {}, _logoColors[DEFAULT] = "white", _logoColors.white = "blue", 
                        _logoColors),
                        labelText: "PayPal Credit"
                    });
                }(), _ref[FUNDING.PAYLATER] = function() {
                    var _secondaryColors, _logoColors;
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        layouts: [ BUTTON_LAYOUT.HORIZONTAL, BUTTON_LAYOUT.VERTICAL ],
                        eligible: function(_ref) {
                            var experiment = _ref.experiment;
                            return !(experiment && experiment.disablePaylater && !_ref.fundingSource);
                        },
                        Label: function(_ref2) {
                            return _ref2.logo;
                        },
                        Logo: function(_ref3) {
                            var fundingEligibility = _ref3.fundingEligibility;
                            return node_node(Style, {
                                css: paylater_style_scoped_default.a,
                                nonce: _ref3.nonce
                            }, node_node(PPLogoInlineSVG, {
                                logoColor: _ref3.logoColor
                            }), node_node(Space, null), node_node(Text, null, getLabelText(fundingEligibility) || "Pay Later"));
                        },
                        colors: [ "white", "black", "gold", "blue", "silver" ],
                        secondaryColors: (_secondaryColors = {}, _secondaryColors[DEFAULT] = "white", _secondaryColors.gold = "gold", 
                        _secondaryColors.blue = "blue", _secondaryColors.silver = "silver", _secondaryColors.black = "black", 
                        _secondaryColors.white = "white", _secondaryColors),
                        logoColors: (_logoColors = {}, _logoColors.gold = "blue", _logoColors.silver = "blue", 
                        _logoColors.blue = "white", _logoColors.black = "white", _logoColors.white = "blue", 
                        _logoColors),
                        labelText: function(_ref4) {
                            var fundingEligibility = _ref4.fundingEligibility;
                            return fundingEligibility && getLabelText(fundingEligibility) || FUNDING.PAYPAL + " " + FUNDING.PAYLATER;
                        }
                    });
                }(), _ref[FUNDING.CARD] = function() {
                    var _maxCardForCountry, _extends2, _logoColors;
                    var vendors = ((_ref = {}).visa = {
                        Label: VisaLogoInlineSVG
                    }, _ref.amex = {
                        Label: AmexLogoInlineSVG
                    }, _ref.mastercard = {
                        Label: MastercardLogoInlineSVG
                    }, _ref.discover = {
                        Label: DiscoverLogoInlineSVG
                    }, _ref.jcb = {
                        Label: JcbLogoInlineSVG
                    }, _ref.elo = {
                        Label: EloLogoInlineSVG
                    }, _ref.hiper = {
                        Label: HiperLogoInlineSVG
                    }, _ref);
                    var _ref;
                    var maxCardForCountry = ((_maxCardForCountry = {})[COUNTRY.BR] = 5, _maxCardForCountry);
                    return _extends({}, DEFAULT_FUNDING_CONFIG, {
                        eligible: function(_ref2) {
                            var components = _ref2.components, fundingSource = _ref2.fundingSource, wallet = _ref2.wallet;
                            var cardEligibility = _ref2.fundingEligibility.card;
                            var cardEligible = Boolean(cardEligibility && cardEligibility.eligible);
                            var cardBranded = Boolean(cardEligibility && cardEligibility.branded);
                            var cardVaulted = Boolean(wallet && wallet.card && wallet.card.instruments && wallet.card.instruments.length);
                            return !(!cardEligible || !cardBranded && fundingSource !== FUNDING.CARD && (components.includes("card-fields") || !cardVaulted && components.includes("hosted-fields")));
                        },
                        flows: [ "purchase", "billing_setup", "subscription_setup" ],
                        layouts: [ BUTTON_LAYOUT.VERTICAL ],
                        maxCards: maxCardForCountry,
                        vendors: vendors,
                        colors: [ "black", "white" ],
                        secondaryColors: _extends({}, DEFAULT_FUNDING_CONFIG.secondaryColors, (_extends2 = {}, 
                        _extends2[DEFAULT] = "black", _extends2)),
                        logoColors: (_logoColors = {}, _logoColors.white = "black", _logoColors[DEFAULT] = "white", 
                        _logoColors),
                        labelText: function(_ref3) {
                            var content = _ref3.content;
                            return content ? content.payWithDebitOrCreditCard : FUNDING.CARD;
                        },
                        Logo: function(_ref4) {
                            return node_node(GlyphCardInlineSVG, {
                                logoColor: _ref4.logoColor
                            });
                        },
                        Label: function(_ref5) {
                            var logo = _ref5.logo, content = _ref5.content;
                            var isRTL = "he" === (languageCode = _ref5.locale.lang) || "ar" === languageCode;
                            var languageCode;
                            return node_node(Fragment, null, isRTL && content ? node_node(Fragment, null, node_node(Text, {
                                animate: !0,
                                optional: !0
                            }, content.payWithDebitOrCreditCard), node_node(Space, null)) : null, logo, !isRTL && content ? node_node(Fragment, null, node_node(Space, null), node_node(Text, {
                                animate: !0,
                                optional: !0
                            }, content.payWithDebitOrCreditCard)) : null);
                        },
                        WalletLabel: template_WalletLabel,
                        showWalletMenu: function(_ref6) {
                            var instrument = _ref6.instrument, userIDToken = _ref6.userIDToken;
                            return !(instrument.branded || (null == (_instrument$tokenID = instrument.tokenID) || !_instrument$tokenID.match(/-/)) && userIDToken);
                            var _instrument$tokenID;
                        }
                    });
                }(), _ref[FUNDING.IDEAL] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, ideal_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("ideal", IDEAL_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 306.1 269.8",
                                style: "enable-background:new 0 0 306.1 269.8;"
                            }, node_node("g", null, node_node("g", null, node_node("path", {
                                d: "M0,20v229.8c0,11,9,20,20,20h137.3c103.8,0,148.8-58.1,148.8-135.2C306.1,57.9,261.1,0,157.3,0H20 C9,0,0,9,0,20z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                d: "M91.9,56.4v169.8h73.9c67.1,0,96.2-37.9,96.2-91.5c0-51.3-29.1-91.1-96.2-91.1h-61.1 C97.6,43.6,91.9,49.4,91.9,56.4z",
                                fill: secondary
                            }), node_node("g", null, node_node("g", null, node_node("path", {
                                d: "M157.3,251.5H37.9c-10.6,0-19.2-8.6-19.2-19.2V37.6c0-10.6,8.6-19.2,19.2-19.2h119.4c113.3,0,130.2,72.9,130.2,116.3 C287.5,210,241.2,251.5,157.3,251.5z M37.9,24.8c-7.1,0-12.8,5.7-12.8,12.8v194.7c0,7.1,5.7,12.8,12.8,12.8h119.4 c79.8,0,123.8-39.2,123.8-110.4c0-95.6-77.6-109.9-123.8-109.9H37.9z"
                            })))), node_node("g", null, node_node("path", {
                                d: "M117.9,111.8c2.6,0,5,0.4,7.3,1.2c2.3,0.8,4.2,2.1,5.9,3.7c1.6,1.7,2.9,3.8,3.9,6.2c0.9,2.5,1.4,5.4,1.4,8.8 c0,3-0.4,5.7-1.1,8.2c-0.8,2.5-1.9,4.7-3.4,6.5c-1.5,1.8-3.4,3.2-5.7,4.3c-2.3,1-5,1.6-8.1,1.6h-17.5v-40.6H117.9z M117.3,144.9 c1.3,0,2.5-0.2,3.8-0.6c1.2-0.4,2.3-1.1,3.2-2.1c0.9-1,1.7-2.2,2.3-3.8c0.6-1.6,0.9-3.4,0.9-5.7c0-2-0.2-3.9-0.6-5.5 c-0.4-1.6-1.1-3.1-2-4.2s-2.1-2.1-3.6-2.7c-1.5-0.6-3.3-0.9-5.5-0.9h-6.4v25.6H117.3z",
                                fill: primary
                            }), node_node("path", {
                                d: "M172.5,111.8v7.5h-21.4v8.7h19.7v6.9h-19.7v9.9H173v7.5h-30.8v-40.6H172.5z",
                                fill: primary
                            }), node_node("path", {
                                d: "M203.1,111.8l15.2,40.6H209l-3.1-9h-15.2l-3.2,9h-9l15.3-40.6H203.1z M203.6,136.7l-5.1-14.9h-0.1l-5.3,14.9 H203.6z",
                                fill: primary
                            }), node_node("path", {
                                d: "M232.8,111.8v33.1h19.8v7.5h-28.7v-40.6H232.8z",
                                fill: primary
                            })), node_node("g", null, node_node("circle", {
                                cx: "58.5",
                                cy: "132.1",
                                r: "18.7"
                            })), node_node("path", {
                                d: "M72.6,226.2L72.6,226.2c-15.7,0-28.3-12.7-28.3-28.3v-22.1c0-7.8,6.3-14.2,14.2-14.2h0c7.8,0,14.2,6.3,14.2,14.2V226.2z"
                            }))));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "ideal",
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "iDEAL"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.SEPA] = _extends({}, DEFAULT_FUNDING_CONFIG, {
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "default" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, sepa_logo_excluded2);
                            var svg = (card = (_ref = getLogoColors("sepa", SEPA_LOGO_COLORS, logoColor)).card, 
                            node_node("svg", {
                                width: "100",
                                height: "32",
                                viewBox: "0 0 100 32",
                                preserveAspectRatio: "xMinYMin meet",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                fill: main = _ref.main,
                                d: "M 39.871 18.772 C 37.78 18.772 35.843 18.278 34.272 17.425 L 34.81 13.935 C 36.409 14.769 38.051 15.263 39.826 15.263 C 41.809 15.263 42.661 14.544 42.661 13.284 C 42.661 10.45 34.34 11.641 34.34 5.59 C 34.34 2.53 36.319 0.055 40.885 0.055 C 42.639 0.055 44.549 0.416 45.946 0.999 L 45.474 4.395 C 43.989 3.926 42.481 3.633 41.108 3.633 C 38.86 3.633 38.275 4.395 38.275 5.364 C 38.275 8.175 46.598 6.895 46.598 13.013 C 46.576 16.569 44.101 18.772 39.871 18.772 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 62.233 14.881 L 62.233 18.413 L 49.951 18.413 L 49.951 0.345 L 62.233 0.345 L 62.233 3.946 L 54.022 3.946 L 54.022 7.549 L 60.705 7.549 L 60.705 10.787 L 54.022 10.787 L 54.022 14.905 L 62.233 14.905 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 72.313 12.565 L 69.905 12.565 L 69.905 18.437 L 65.834 18.437 L 65.834 0.345 L 72.313 0.345 C 77.328 0.345 79.376 2.328 79.376 6.534 C 79.376 10.361 77.355 12.565 72.313 12.565 Z M 72.313 3.766 L 69.905 3.766 L 69.905 9.302 L 72.313 9.302 C 74.314 9.302 75.194 8.808 75.194 6.534 C 75.194 4.352 74.428 3.766 72.313 3.766 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 91.797 14.924 L 85.246 14.924 L 84.234 18.437 L 79.939 18.437 L 86.193 0.345 L 91.031 0.345 L 97.352 18.437 L 92.808 18.437 L 91.797 14.924 Z M 88.04 5.318 L 86.238 11.506 L 90.85 11.506 L 89.118 5.318 L 88.645 3.408 L 88.578 3.408 L 88.04 5.318 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 39.736 30.157 L 39.692 31.867 L 34.382 31.867 L 34.382 23.475 L 36.299 23.475 L 36.299 30.157 L 39.736 30.157 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 44.798 31.215 L 44.778 31.215 C 44.371 31.71 43.722 31.977 42.931 31.977 C 41.648 31.977 40.818 31.257 40.818 29.727 C 40.818 28.468 41.695 27.613 43.222 27.613 C 43.722 27.613 44.168 27.68 44.527 27.796 L 44.527 27.411 C 44.527 26.736 44.168 26.421 43.244 26.421 C 42.505 26.421 42.007 26.534 41.382 26.782 L 41.245 25.387 C 41.919 25.095 42.707 24.936 43.563 24.936 C 45.563 24.936 46.263 25.792 46.263 27.658 L 46.263 31.867 L 44.933 31.867 L 44.798 31.215 Z M 44.549 28.966 C 44.393 28.896 44.056 28.828 43.583 28.828 C 42.819 28.828 42.46 29.12 42.46 29.727 C 42.46 30.38 42.842 30.63 43.427 30.63 C 44.012 30.63 44.549 30.271 44.549 29.842 L 44.549 28.966 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 50.02 32.002 C 49.21 32.002 48.466 31.842 47.883 31.529 L 48.062 30.088 C 48.625 30.405 49.41 30.561 49.996 30.561 C 50.693 30.561 50.986 30.29 50.986 29.887 C 50.986 28.807 47.84 29.436 47.84 27.051 C 47.84 25.838 48.667 24.959 50.403 24.959 C 51.075 24.959 51.752 25.095 52.336 25.32 L 52.201 26.736 C 51.64 26.512 50.897 26.396 50.381 26.396 C 49.816 26.396 49.503 26.625 49.503 26.961 C 49.503 27.995 52.603 27.366 52.603 29.707 C 52.603 31.101 51.862 32.002 50.02 32.002 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 56.026 26.375 L 56.026 29.842 C 56.026 30.36 56.295 30.582 56.836 30.582 C 57.014 30.582 57.239 30.561 57.374 30.514 L 57.464 31.776 C 57.239 31.888 56.789 31.956 56.295 31.956 C 54.946 31.956 54.27 31.169 54.27 29.887 L 54.27 26.352 L 53.506 26.352 L 53.506 25.095 L 54.337 25.095 L 54.631 23.562 L 56.002 23.451 L 56.002 25.116 L 57.51 25.116 L 57.51 26.421 L 56.026 26.421 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 60.885 32.002 C 60.073 32.002 59.331 31.842 58.748 31.529 L 58.929 30.088 C 59.49 30.405 60.275 30.561 60.862 30.561 C 61.561 30.561 61.851 30.29 61.851 29.887 C 61.851 28.807 58.702 29.436 58.702 27.051 C 58.702 25.838 59.534 24.959 61.269 24.959 C 61.943 24.959 62.615 25.095 63.203 25.32 L 63.069 26.736 C 62.505 26.512 61.764 26.396 61.246 26.396 C 60.681 26.396 60.367 26.625 60.367 26.961 C 60.367 27.995 63.47 27.366 63.47 29.707 C 63.47 31.101 62.729 32.002 60.885 32.002 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 69.365 26.736 C 69.028 26.625 68.603 26.534 68.22 26.534 C 66.958 26.534 66.53 27.051 66.53 28.49 C 66.53 29.954 67.116 30.514 68.174 30.514 C 68.623 30.514 69.05 30.425 69.41 30.271 L 69.525 31.616 C 69.119 31.867 68.511 32.002 67.792 32.002 C 65.787 32.002 64.732 30.854 64.732 28.49 C 64.732 26.242 65.653 24.981 67.835 24.981 C 68.397 24.981 69.05 25.095 69.479 25.276 L 69.365 26.736 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 75.078 31.867 L 75.078 27.546 C 75.078 26.849 74.743 26.491 74.001 26.491 C 73.508 26.491 73.055 26.714 72.855 27.008 L 72.855 31.867 L 71.122 31.867 L 71.122 23.16 L 72.855 23.069 L 72.855 24.622 L 72.83 25.52 L 72.855 25.545 C 73.348 25.116 73.979 24.959 74.541 24.959 C 75.98 24.959 76.812 25.926 76.812 27.546 L 76.812 31.867 L 75.078 31.867 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 78.658 31.867 L 78.658 25.139 L 80.052 25.072 L 80.21 26.199 L 80.231 26.199 C 80.66 25.387 81.313 24.981 82.098 24.981 C 82.39 24.981 82.663 25.028 82.84 25.072 L 82.731 26.782 C 82.528 26.714 82.257 26.667 81.985 26.667 C 81.088 26.667 80.413 27.321 80.413 28.468 L 80.413 31.867 L 78.658 31.867 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 85.382 24.35 C 84.708 24.35 84.395 24.172 84.395 23.609 C 84.395 23.136 84.708 22.867 85.382 22.867 C 86.058 22.867 86.375 23.113 86.375 23.609 C 86.354 24.105 86.058 24.35 85.382 24.35 Z M 84.484 31.867 L 84.484 25.139 L 86.259 25.072 L 86.259 31.888 L 84.484 31.888 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 88.757 31.867 L 88.757 26.375 L 87.902 26.375 L 87.902 25.095 L 88.757 25.095 L 88.757 24.798 C 88.757 23.79 89.454 22.935 91.076 22.935 C 91.459 22.935 91.885 22.979 92.178 23.069 L 92.063 24.195 C 91.863 24.147 91.636 24.126 91.411 24.126 C 90.738 24.126 90.466 24.399 90.466 24.825 L 90.466 25.072 L 91.907 25.072 L 91.907 26.352 L 90.466 26.352 L 90.466 31.842 L 88.757 31.842 Z"
                            }), node_node("path", {
                                fill: main,
                                d: "M 95.486 26.375 L 95.486 29.842 C 95.486 30.36 95.754 30.582 96.296 30.582 C 96.473 30.582 96.698 30.561 96.834 30.514 L 96.924 31.776 C 96.698 31.888 96.249 31.956 95.754 31.956 C 94.406 31.956 93.729 31.169 93.729 29.887 L 93.729 26.352 L 92.965 26.352 L 92.965 25.095 L 93.798 25.095 L 94.09 23.562 L 95.461 23.451 L 95.461 25.116 L 96.969 25.116 L 96.969 26.421 L 95.486 26.421 Z"
                            }), node_node("path", {
                                fill: card,
                                d: "M 20.357 8.826 L 15.368 5.081 L 10.379 1.334 C 10.033 1.074 9.54 1.146 9.281 1.493 L 4.883 7.322 C 4.811 7.409 4.768 7.51 4.754 7.624 C 4.68 7.93 4.782 8.248 5.043 8.45 L 8.022 10.677 L 12.042 13.698 L 15.021 15.926 C 15.281 16.13 15.629 16.13 15.888 15.97 C 15.991 15.912 16.062 15.854 16.136 15.752 L 20.531 9.91 C 20.763 9.578 20.706 9.087 20.357 8.826 Z M 10.047 1.769 L 13.012 3.995 L 13.012 3.995 L 15.021 5.5 L 17.046 7.017 L 17.046 7.017 L 20.025 9.245 C 20.142 9.332 20.156 9.491 20.082 9.607 L 19.374 10.591 L 16.005 8.058 L 12.36 5.326 L 8.976 2.809 L 9.684 1.826 C 9.772 1.709 9.931 1.682 10.047 1.769 Z M 15.673 15.463 C 15.629 15.507 15.585 15.536 15.528 15.55 C 15.469 15.564 15.398 15.55 15.339 15.507 L 12.345 13.265 L 8.34 10.257 L 5.361 8.001 C 5.302 7.958 5.275 7.9 5.259 7.842 C 5.259 7.785 5.259 7.726 5.302 7.669 L 6.113 6.585 C 6.113 6.585 7.009 5.427 7.791 4.386 L 11.16 6.917 L 14.804 9.65 L 18.173 12.181 C 17.393 13.222 16.496 14.379 16.496 14.379 L 15.673 15.463 Z"
                            }), node_node("g", {
                                transform: "matrix(0.144619, 0, 0, 0.144619, -7.250457, -3.988513)"
                            }, node_node("path", {
                                fill: main,
                                d: "M197.1,150.4l52-69.6l5.3-7c0,0,0.1-0.2,0.2-0.2c0.4-0.5,0.3-1.2-0.2-1.6l-14.7-10.7 c-0.5-0.4-1.2-0.2-1.6,0.3c-0.1,0.1-0.2,0.2-0.2,0.2l-2,2.5l-64.3,86l-70.8,0l-26.5,87.4h177.1l-25-87.4L197.1,150.4z M79.1,234.3 l24.2-80.5l65.7,0l-5.7,7.6l-8.1,11.3l-0.9,1.7l-0.9,1.9l-0.9,2.2l-0.9,2.3l-0.9,2.5l-0.9,2.5l-0.8,2.5l-0.8,2.4l-0.7,2.3 l-0.7,2.1l-0.6,1.9l-0.4,1.6l-0.3,1.2l-0.3,0.7c0,0-0.1,0.2-0.2,0.4c-0.2,0.2-1.2,1.1-2,0.5c-0.8-0.6-0.7-2.6-0.6-3.6 c0.2-3,0.5-6,0.7-8.9c0.1-1-1.2-1.6-2-1.2c-3.6,2.1-5.8,4.6-7.8,7.5c0.2-0.7,0.4-1.4,0.6-2c0.8-3.1,2-6.2,2.5-9.4 c0.3-1.8-0.2-3.9-2.3-4.3c-2.4-0.4-3.9,2.1-5.1,3.7c-3.5,5-5.6,11.2-9.9,15.5c-1.6,1.6-3.5,2.8-5.8,2.1c-2.7-0.8-3.8,2.4,1,2.9 c4.7,0.4,8.3-4.6,10.4-8.1c1.6-2.5,2.9-5.2,4.5-7.8c0.7-1.2,1.5-2.4,2.3-3.6c0.4-0.5,1-1.8,1.7-2c0.8-0.2,0.6,0.3,0.6,0.9 c-0.1,1.5-0.7,3-1.1,4.5c-0.4,1.6-0.9,3.2-1.3,4.7c-0.9,3.4-1.8,6.8-2.8,10.1c-0.4,1.5,1.6,2.2,2.5,1c3.4-4.8,5.1-8.9,9.2-12.1 c-0.1,1.1-0.2,2.1-0.3,3.2c-0.1,1.7-0.5,3.6-0.4,5.3c0.2,2.9,2.4,4.8,5.1,3.6c1.4-0.7,2.4-1.7,2.4-1.7l0.2-0.1l0.6-0.4l1-0.7 l1.4-1l1.6-1.2l1.7-1.2l2.1-1.4l2.1-1.5l2.1-1.5l2.1-1.5l2-1.5l1.9-1.4l1.8-1.4l1.5-1.2l1.2-1.1l1-0.9l0-0.1l0,0l6.5-7.6 l16.6-22.1l29.4,0l22.9,80.5H79.1z"
                            }), node_node("path", {
                                fill: main,
                                d: "M261.1,77.1l-1.9-1.5c-0.4-0.3-0.9-0.2-1.2,0.2l-24.7,32.9c-0.3,0.4-0.2,0.9,0.2,1.2l1.9,1.5 c0.4,0.3,0.9,0.2,1.2-0.2l24.7-32.9C261.5,77.9,261.5,77.4,261.1,77.1z"
                            }), node_node("polygon", {
                                fill: main,
                                points: "161.7,217.2 210.9,217.2 209.9,213.3 161.7,213.3 113.6,213.3 112.5,217.2 \t\t"
                            }))));
                            var _ref, main, card;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "sepa",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    }
                }), _ref[FUNDING.BANCONTACT] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, bancontact_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("bancontact", BANCONTACT_LOGO_COLORS, logoColor)).secondary, 
                            tertiary = _ref.tertiary, quaternary = _ref.quaternary, node_node("svg", {
                                width: "155",
                                height: "17",
                                viewBox: "0 0 155 17",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                d: "M49.3635 15.782V0.594238H54.0604C57.4744 0.594238 59.6706 1.87434 59.6706 4.52136C59.6706 6.01845 58.9748 7.0599 57.9962 7.66738C59.4096 8.31822 60.2359 9.57664 60.2359 11.2907C60.2359 14.35 57.9962 15.782 54.5171 15.782L49.3635 15.782ZM52.3861 6.90794H54.6258C55.9957 6.90794 56.5828 6.23532 56.5828 4.99868C56.5828 3.67511 55.5173 3.24126 54.0821 3.24126H52.3861V6.90794ZM52.3861 13.1349H54.2561C56.0827 13.1349 57.1482 12.6793 57.1482 11.2474C57.1482 9.83709 56.2349 9.25127 54.5171 9.25127H52.3861V13.1349ZM66.0974 16.0423C63.1183 16.0423 61.6179 14.5887 61.6179 12.6359C61.6179 10.4879 63.3793 9.22949 65.9887 9.20782C66.6371 9.21963 67.2838 9.27766 67.9239 9.38144V8.86067C67.9239 7.53721 67.1629 6.90794 65.706 6.90794C64.7245 6.89568 63.7499 7.0725 62.8356 7.42872L62.292 5.08549C63.227 4.69488 64.7274 4.43455 66.0539 4.43455C69.2504 4.43455 70.8377 6.12694 70.8377 9.05597V15.0877C69.9462 15.5433 68.2718 16.0423 66.0974 16.0423V16.0423ZM67.9239 13.5906V11.269C67.417 11.1566 66.8994 11.0983 66.3801 11.0954C65.3798 11.0954 64.597 11.486 64.597 12.5058C64.597 13.4171 65.2493 13.8944 66.4018 13.8944C66.9259 13.9114 67.4468 13.8075 67.9239 13.5906V13.5906ZM72.9504 15.782V5.38918C74.513 4.76291 76.1808 4.43894 77.8647 4.43455C81.0394 4.43455 82.866 5.99667 82.866 8.88235V15.782H79.8652V9.09933C79.8652 7.60224 79.1694 6.90794 77.843 6.90794C77.1843 6.89873 76.5315 7.03199 75.9294 7.29855V15.782H72.9504ZM93.3527 5.08551L92.7873 7.4504C92.0106 7.11456 91.1765 6.93042 90.3302 6.90794C88.5689 6.90794 87.6121 8.1447 87.6121 10.1842C87.6121 12.419 88.6123 13.5689 90.4824 13.5689C91.317 13.5461 92.1382 13.3542 92.8961 13.0048L93.3744 15.4131C92.3898 15.8503 91.3206 16.0652 90.2432 16.0423C86.6336 16.0423 84.5461 13.8076 84.5461 10.2709C84.5461 6.7561 86.6118 4.43455 90.0693 4.43455C91.1965 4.42902 92.3132 4.65042 93.3527 5.0855L93.3527 5.08551ZM99.8354 16.0423C96.4867 16.0423 94.3992 13.7208 94.3992 10.2276C94.3992 6.75611 96.4867 4.43456 99.8354 4.43456C103.206 4.43456 105.25 6.75611 105.25 10.2276C105.25 13.7207 103.206 16.0423 99.8354 16.0423L99.8354 16.0423ZM99.8354 13.5689C101.379 13.5689 102.184 12.2888 102.184 10.2276C102.184 8.18806 101.379 6.90795 99.8354 6.90795C98.3133 6.90795 97.4652 8.18806 97.4652 10.2276C97.4652 12.2888 98.3132 13.5689 99.8354 13.5689L99.8354 13.5689ZM106.986 15.782V5.38918C108.549 4.76291 110.217 4.43894 111.901 4.43455C115.075 4.43455 116.902 5.99667 116.902 8.88235V15.782H113.901V9.09933C113.901 7.60224 113.205 6.90794 111.879 6.90794C111.22 6.89873 110.567 7.03199 109.965 7.29855V15.782H106.986ZM123.669 16.0423C121.082 16.0423 119.755 14.632 119.755 11.768V7.08157H118.277V4.69489H119.755V2.28652L122.756 2.13468V4.69489H125.17V7.08157H122.756V11.7247C122.756 12.9831 123.278 13.5689 124.257 13.5689C124.644 13.5679 125.031 13.5243 125.409 13.4387L125.561 15.8471C124.94 15.9843 124.305 16.0498 123.669 16.0423V16.0423ZM131.244 16.0423C128.265 16.0423 126.764 14.5887 126.764 12.636C126.764 10.4879 128.526 9.2295 131.135 9.20783C131.783 9.21965 132.43 9.27767 133.07 9.38146V8.86068C133.07 7.53722 132.309 6.90795 130.852 6.90795C129.871 6.89569 128.896 7.07252 127.982 7.42873L127.438 5.08551C128.373 4.6949 129.874 4.43456 131.2 4.43456C134.397 4.43456 135.984 6.12695 135.984 9.05598V15.0877C135.092 15.5433 133.418 16.0423 131.244 16.0423V16.0423ZM133.07 13.5906V11.269C132.563 11.1565 132.046 11.0983 131.526 11.0954C130.526 11.0954 129.743 11.486 129.743 12.5058C129.743 13.4171 130.396 13.8944 131.548 13.8944C132.072 13.9114 132.593 13.8075 133.07 13.5906V13.5906ZM146.251 5.08551L145.685 7.45041C144.909 7.11458 144.074 6.93043 143.228 6.90795C141.467 6.90795 140.51 8.14471 140.51 10.1842C140.51 12.419 141.51 13.5689 143.38 13.5689C144.215 13.5461 145.036 13.3542 145.794 13.0048L146.272 15.4132C145.288 15.8503 144.219 16.0652 143.141 16.0423C139.532 16.0423 137.444 13.8076 137.444 10.271C137.444 6.75611 139.51 4.43456 142.967 4.43456C144.094 4.42902 145.211 4.65041 146.251 5.0855V5.08551ZM152.848 16.0423C150.261 16.0423 148.934 14.632 148.934 11.768V7.08157H147.456V4.69489H148.934V2.28652L151.935 2.13468V4.69489H154.349V7.08157H151.935V11.7247C151.935 12.9831 152.457 13.5689 153.435 13.5689C153.823 13.5679 154.21 13.5243 154.588 13.4387L154.74 15.8471C154.119 15.9843 153.484 16.0498 152.848 16.0423V16.0423Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                d: "M8.13508 15.7818C13.8431 15.7818 16.6971 11.9849 19.551 8.18799H0.61084V15.7818H8.13508Z",
                                fill: "url(#paint0_linear_25_23)"
                            }), node_node("path", {
                                d: "M30.9667 0.594238C25.2588 0.594238 22.4048 4.39117 19.5508 8.18809H38.491V0.594238H30.9667Z",
                                fill: "url(#paint1_linear_25_23)"
                            }), node_node("defs", null, node_node("linearGradient", {
                                id: "paint0_linear_25_23",
                                x1: "4.44184",
                                y1: "12.3355",
                                x2: "18.29",
                                y2: "7.18051",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                "stop-color": secondary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": primary
                            })), node_node("linearGradient", {
                                id: "paint1_linear_25_23",
                                x1: "20.6976",
                                y1: "8.84673",
                                x2: "35.4025",
                                y2: "3.81864",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                "stop-color": tertiary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": quaternary
                            })))));
                            var _ref, primary, secondary, tertiary, quaternary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "bancontact",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, bancontact_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Bancontact"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.GIROPAY] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, giropay_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("giropay", GIROPAY_LOGO_COLORS, logoColor)).primary, 
                            tertiary = _ref.tertiary, quaternary = _ref.quaternary, node_node("svg", {
                                width: "89",
                                height: "40",
                                viewBox: "0 0 89 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("g", {
                                id: "LOGO_GIROPAY_1"
                            }, node_node("path", {
                                id: "background_pill",
                                d: "M7.7451 0.5C3.7386 0.5 0.5 3.78098 0.5 7.81718V32.1828C0.5 36.219 3.73861 39.5 7.7451 39.5H81.2546C85.2611 39.5 88.5 36.219 88.5 32.1828V7.81718C88.5 3.78095 85.2611 0.5 81.2546 0.5H7.7451Z",
                                fill: _ref.secondary,
                                stroke: _ref.quinary
                            }), node_node("path", {
                                id: "background_giro",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M4 8.20515V31.7948C4 34.1173 5.89961 36 8.24276 36H47V4H8.24276C5.89961 4 4 5.88273 4 8.20515",
                                fill: primary
                            }), node_node("path", {
                                id: "pay_y",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M71.6843 28.7738C72.3682 28.9244 73.0521 29 73.7546 29C76.805 29 77.5261 26.607 78.469 24.1387L82 15H78.6724L76.6944 21.4064H76.6573L74.5866 15H71L74.9009 25.043C74.6605 25.9099 74.0322 26.3997 73.2187 26.3997C72.7564 26.3997 72.3497 26.343 71.9062 26.1924L71.6843 28.7738Z",
                                fill: quaternary
                            }), node_node("path", {
                                id: "pay_a",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M64.164 21.7522C64.164 20.8348 65.0678 20.486 66.2166 20.486C66.725 20.486 67.2149 20.5228 67.6478 20.5412C67.6478 21.6605 66.8381 22.7982 65.5574 22.7982C64.7665 22.7982 64.164 22.4127 64.164 21.7522ZM71 24.7798C70.8492 24.0273 70.8117 23.2752 70.8117 22.5228V18.9631C70.8117 16.0457 68.6461 15 66.1414 15C64.6913 15 63.4295 15.2018 62.2243 15.6788L62.2807 17.9174C63.2223 17.4036 64.3144 17.2018 65.4069 17.2018C66.6309 17.2018 67.6292 17.5502 67.6478 18.8529C67.2149 18.7796 66.612 18.7247 66.0658 18.7247C64.2581 18.7247 61 19.0732 61 21.9909C61 24.0641 62.7328 25 64.6724 25C66.0658 25 67.0074 24.4678 67.7797 23.2752H67.8175C67.8175 23.7706 67.8738 24.266 67.8927 24.7798H71Z",
                                fill: quaternary
                            }), node_node("path", {
                                id: "pay_p",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M56.5026 20.0311C56.5026 21.5951 55.7318 22.6692 54.453 22.6692C53.3248 22.6692 52.3846 21.5951 52.3846 20.1631C52.3846 18.6933 53.212 17.6003 54.453 17.6003C55.7692 17.6003 56.5026 18.7308 56.5026 20.0311ZM49 29H52.3846V23.6677H52.422C53.0614 24.8361 54.3402 25.2692 55.5246 25.2692C58.4393 25.2692 60 22.8576 60 19.9555C60 17.5817 58.5147 15 55.8069 15C54.265 15 52.8357 15.6218 52.1589 16.9974H52.1212V15.2262H49V29Z",
                                fill: quaternary
                            }), node_node("path", {
                                id: "giro_o",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M38.5 22.6881C36.9934 22.6881 36.3762 21.4222 36.3762 20.009C36.3762 18.5781 36.9934 17.3119 38.5 17.3119C40.0066 17.3119 40.6238 18.5781 40.6238 20.009C40.6238 21.4222 40.0066 22.6881 38.5 22.6881ZM38.5 25C41.6222 25 44 23.1651 44 20.009C44 16.8349 41.6222 15 38.5 15C35.3778 15 33 16.8349 33 20.009C33 23.1651 35.3778 25 38.5 25Z",
                                fill: tertiary
                            }), node_node("path", {
                                id: "giro_r",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M33 15.1126C32.6692 15.0565 32.265 15 31.8793 15C30.4461 15 29.6193 15.7882 29.0499 17.0265H29.0133V15.2252H26V25H29.3073V20.8724C29.3073 18.9589 30.1706 17.8144 31.714 17.8144C32.0998 17.8144 32.4671 17.8144 32.8348 17.927L33 15.1126Z",
                                fill: tertiary
                            }), node_node("path", {
                                id: "giro_i",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M21.0003 14.3252H24V12H21.0003V14.3252ZM21 25H23.9997V15.8226H21V25Z",
                                fill: tertiary
                            }), node_node("path", {
                                id: "giro_g",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.2235 19.9694C12.2235 18.6529 12.8302 17.559 13.9915 17.559C15.3952 17.559 15.9842 18.7642 15.9842 19.8395C15.9842 21.3231 15.1005 22.3244 13.9915 22.3244C13.0553 22.3244 12.2235 21.4713 12.2235 19.9694ZM19 15.2226H16.1748V16.9653H16.1404C15.4818 15.7787 14.4072 15 13.0727 15C10.265 15 9 17.151 9 20.0249C9 22.8808 10.5422 24.8834 13.0209 24.8834C14.2687 24.8834 15.3086 24.3641 16.0537 23.233H16.0882V23.7522C16.0882 25.6438 15.1179 26.5523 13.3155 26.5523C12.0155 26.5523 11.2182 26.2557 10.265 25.755L10.1091 28.3881C10.8369 28.6661 12.0677 29 13.558 29C17.1976 29 19 27.7204 19 23.7522V15.2226Z",
                                fill: tertiary
                            }))));
                            var _ref, primary, tertiary, quaternary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "giropay",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, giropay_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "giropay"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.SOFORT] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, sofort_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("sofort", SOFORT_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                width: "240",
                                height: "90",
                                viewBox: "0 0 240 90",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                d: "M225.023 90H0L14.9768 0H240L225.023 90Z",
                                fill: _ref.primary
                            }), node_node("path", {
                                d: "M74.0341 30C63.9253 30 56.2511 37.4603 56.2511 46.3492C56.2511 54.3915 62.5493 60 71.1232 60C81.232 60 88.8533 52.328 88.8533 43.4392C88.9062 35.3439 82.6081 30 74.0341 30ZM71.7583 52.4339C67.8948 52.4339 65.1956 49.8942 65.1956 45.9788C65.1956 41.6402 68.5299 37.5132 73.3461 37.5132C77.2097 37.5132 79.9089 40.1587 79.9089 44.0741C79.9618 48.4656 76.5746 52.4339 71.7583 52.4339Z",
                                fill: secondary
                            }), node_node("path", {
                                d: "M134.846 30C124.737 30 117.116 37.4603 117.116 46.3492C117.116 54.3915 123.414 60 131.988 60C142.096 60 149.718 52.328 149.718 43.4392C149.771 35.3439 143.473 30 134.846 30ZM132.623 52.4339C128.759 52.4339 126.06 49.8942 126.06 45.9788C126.06 41.6402 129.394 37.5132 134.211 37.5132C138.074 37.5132 140.773 40.1587 140.773 44.0741C140.773 48.4656 137.439 52.4339 132.623 52.4339Z",
                                fill: secondary
                            }), node_node("path", {
                                d: "M179.462 39.4709C179.462 34.0741 175.281 30.6349 167.66 30.6349H156.969L152.258 59.3651H161.256L162.737 50.3175H163.161L167.924 59.3651H178.245L171.629 49.3122C176.551 47.619 179.462 43.9683 179.462 39.4709ZM165.066 44.2328H163.743L164.749 38.2011H165.966C168.771 38.2011 170.253 39.0476 170.253 40.8995C170.253 43.0688 168.136 44.2328 165.066 44.2328Z",
                                fill: secondary
                            }), node_node("path", {
                                d: "M45.9306 42.1164C42.4904 40.3704 41.7495 39.9471 41.7495 38.9947C41.7495 37.8307 43.1256 37.2487 44.9779 37.2487C47.1479 37.2487 50.4293 37.5132 53.6577 40.582C54.4516 38.0952 55.7748 35.873 57.4684 33.9153C52.9168 31.3228 48.6827 30 44.8192 30C37.145 30 32.6992 34.127 32.6992 39.1005C32.6992 43.3862 35.9277 45.6085 39.7383 47.5661C43.1785 49.3122 44.0253 49.8942 44.0253 50.9524C44.0253 52.1164 42.5963 52.7513 40.691 52.7513C37.4096 52.7513 33.5989 50.6878 31.3231 48.5714L30 56.5608C32.3287 58.254 35.716 60 40.8498 60C48.7886 60 53.0756 55.9788 53.0756 50.8466C53.0756 46.6138 50.3234 44.3386 45.9306 42.1164Z",
                                fill: secondary
                            }), node_node("path", {
                                d: "M112.617 43.2275H102.032L102.879 38.2011H114.205C115.687 35.1852 117.962 32.5926 120.767 30.6349H102.243C98.1153 30.6349 94.6222 33.4392 94.04 37.2487L90.441 59.418H99.4384L100.92 50.3704H111.611L112.405 45.4497C112.458 44.6561 112.511 43.9683 112.617 43.2275Z",
                                fill: secondary
                            }), node_node("path", {
                                d: "M179.674 30.6349C182.108 32.4868 183.59 35.0794 183.908 38.2011H191.423L187.983 59.3651H196.98L200.42 38.2011H208.783L210 30.6349H179.674Z",
                                fill: secondary
                            })));
                            var _ref, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "sofort",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, sofort_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "SOFORT"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.EPS] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, eps_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("eps", EPS_LOGO_COLORS, logoColor)).primary, 
                            node_node("svg", {
                                width: "74",
                                height: "46",
                                viewBox: "0 0 74 46",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M70.8255 42.7702C70.8255 43.2475 71.1362 43.5376 71.5829 43.5376C72.786 43.5376 73.1082 41.6788 71.9046 41.6788C71.334 41.6788 70.8255 42.1049 70.8255 42.7702ZM70.6616 44.378C70.6221 44.7627 70.9158 44.9183 71.4076 44.9183C71.837 44.9183 72.3004 44.677 72.4077 44.0632L72.4924 43.5843C72.2382 43.9424 71.7748 44.0838 71.4303 44.0838C70.7182 44.0838 70.2211 43.6573 70.2211 42.884C70.2211 41.7814 71.0345 41.1445 71.9554 41.1445C72.3455 41.1445 72.6958 41.3308 72.8201 41.6492L72.9162 41.2047H73.4812L72.9951 44.0763C72.8145 45.1394 72.029 45.4693 71.3115 45.4693C70.4526 45.4693 69.9782 45.0511 70.0966 44.378H70.6616Z",
                                fill: secondary = _ref.secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M68.689 43.9934L68.9547 42.5008C69.0392 42.0175 68.8757 41.6974 68.3445 41.6974C67.8812 41.6974 67.4912 42.0723 67.4122 42.5328L67.158 43.9934H66.576L67.0676 41.2048H67.5986L67.5591 41.6123C67.8812 41.311 68.2144 41.1625 68.576 41.1625C69.254 41.1625 69.6949 41.637 69.5424 42.4955L69.2768 43.9934H68.689Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M64.0209 41.2047L63.7555 42.7064C63.6707 43.1841 63.8855 43.5141 64.3713 43.5141C64.829 43.5141 65.2188 43.1326 65.2978 42.6665L65.552 41.2047H66.134L65.6426 43.9934H65.1171L65.1566 43.5893C64.829 43.9019 64.5068 44.0493 64.1171 44.0493C63.4334 44.0493 63.0266 43.5562 63.1734 42.7095L63.439 41.2047H64.0209Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M62.184 41.8945C62.0032 41.6899 61.7716 41.6331 61.4948 41.6331C61.1104 41.6331 60.8393 41.7639 60.8393 42.0083C60.8393 42.2129 61.0595 42.2984 61.3874 42.3267C61.8959 42.3721 62.5456 42.5427 62.41 43.2646C62.314 43.7875 61.7942 44.0945 61.0709 44.0945C60.619 44.0945 60.1838 43.9922 59.8901 43.5772L60.2686 43.1623C60.4777 43.452 60.845 43.5716 61.1726 43.5772C61.4494 43.5772 61.7772 43.4749 61.8281 43.2135C61.8789 42.9633 61.6585 42.8668 61.2518 42.8268C60.7771 42.7813 60.2574 42.6053 60.2574 42.0766C60.2574 41.3773 61.0087 41.1329 61.5739 41.1329C62.0032 41.1329 62.3197 41.2295 62.5796 41.5082L62.184 41.8945Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M59.0873 40.4451C59.0873 40.644 59.2343 40.7467 59.3926 40.7467C59.6185 40.7467 59.8275 40.5986 59.8275 40.3203C59.8275 40.1325 59.6862 40.0244 59.5336 40.0244C59.3246 40.0244 59.0873 40.1611 59.0873 40.4451ZM59.6014 41.2048L59.11 43.9934H58.528L59.0195 41.2048H59.6014Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M57.5325 42.3586C57.5776 41.8778 57.2952 41.6822 56.8261 41.6822C56.4025 41.6822 56.0127 41.8778 55.843 42.3586H57.5325ZM55.7471 42.8395C55.7244 43.2241 56.0239 43.5382 56.5324 43.5382C56.815 43.5382 57.1877 43.427 57.3911 43.2338L57.7076 43.6017C57.363 43.9198 56.8544 44.0782 56.4251 44.0782C55.6228 44.0782 55.1538 43.5948 55.1538 42.8558C55.1538 41.8724 55.9222 41.1395 56.9053 41.1395C57.8037 41.1395 58.3122 41.6855 58.0071 42.8395H55.7471Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M52.994 41.2047L53.2877 43.4101L54.35 41.2047H54.9997L53.5421 43.9934H52.8584L52.5816 42.1537L52.1352 43.0676L51.6493 43.9934H50.9713L50.4797 41.2047H51.1352L51.4234 43.4101L52.4911 41.2047H52.994Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M48.6765 41.2048L48.6483 41.5755C48.9196 41.217 49.2472 41.1439 49.5466 41.1439C49.8179 41.1439 50.0607 41.2408 50.1907 41.3828L49.8405 41.8945C49.7162 41.7811 49.5919 41.7242 49.3771 41.7242C48.9759 41.7242 48.5806 41.9663 48.4901 42.4836L48.2247 43.9934H47.6426L48.1341 41.2048H48.6765Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M46.6473 42.3586C46.6925 41.8778 46.41 41.6822 45.941 41.6822C45.5174 41.6822 45.1275 41.8778 44.9578 42.3586H46.6473ZM44.8619 42.8395C44.8392 43.2241 45.1387 43.5382 45.6472 43.5382C45.9298 43.5382 46.3025 43.427 46.5059 43.2338L46.8224 43.6017C46.4778 43.9198 45.9692 44.0782 45.5399 44.0782C44.7376 44.0782 44.2686 43.5948 44.2686 42.8558C44.2686 41.8724 45.037 41.1395 46.0201 41.1395C46.9185 41.1395 47.427 41.6855 47.1219 42.8395H44.8619Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M41.3068 42.7531C41.2843 43.2192 41.5836 43.5204 42.0187 43.5204C42.5668 43.5204 43.0978 43.094 43.1317 42.4461C43.1544 41.9743 42.8493 41.6957 42.4254 41.6957C41.883 41.6957 41.3406 42.1335 41.3068 42.7531ZM41.7475 40.0508L41.465 41.652C41.7079 41.3225 42.1938 41.1482 42.5328 41.1482C43.2334 41.1482 43.7193 41.5613 43.7193 42.3285C43.7193 43.4143 42.9678 44.0672 42.0074 44.0672C41.6345 44.0672 41.318 43.9278 41.126 43.5754L41.0187 43.9934H40.4705L41.1655 40.0508H41.7475Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M39.1244 39.3196C39.1244 39.5185 39.2769 39.6094 39.4408 39.6094C39.6159 39.6094 39.8476 39.4673 39.8476 39.2059C39.8476 39.0185 39.7119 38.9161 39.5594 38.9161C39.356 38.9161 39.1244 39.0467 39.1244 39.3196ZM37.7683 39.3253C37.7683 39.5185 37.9153 39.6094 38.0735 39.6094C38.2712 39.6094 38.486 39.4673 38.486 39.2002C38.486 39.0127 38.3615 38.9161 38.1977 38.9161C37.9944 38.9161 37.7683 39.0467 37.7683 39.3253ZM40.2317 40.0508L39.8249 42.3681C39.6216 43.5393 38.8587 44.0757 37.8248 44.0757C36.9491 44.0757 36.271 43.5015 36.4689 42.37L36.8756 40.0508H37.5029L37.0959 42.3681C36.9716 43.0904 37.2937 43.5015 37.9039 43.5015C38.5311 43.5015 39.0679 43.1262 39.1978 42.37L39.6045 40.0508H40.2317Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M57.634 22.7419V22.7419H51.7796C51.1285 22.7419 50.5987 22.22 50.5987 21.5666C50.5987 20.9132 51.1285 20.3379 51.7796 20.3379H60.6925V15.9146H51.7796C48.6688 15.9146 46.1378 18.4661 46.1378 21.588C46.1378 24.71 48.6688 27.2615 51.7796 27.2615H57.5544C58.2056 27.2615 58.7354 27.7813 58.7354 28.4347C58.7354 29.0881 58.2056 29.5693 57.5544 29.5693H45.1711C44.1197 31.5887 43.0974 33.3196 41.0221 34.185H57.634C60.6925 34.1407 63.1943 31.5366 63.1943 28.4422C63.1943 25.3481 60.6925 22.7863 57.634 22.7419",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M35.1918 29.5693H30.6807V25.0146C30.6807 22.4694 32.6949 20.3987 35.1918 20.3987C37.6887 20.3987 39.72 22.4694 39.72 25.0146C39.72 27.5599 37.6887 29.5693 35.1918 29.5693ZM35.1918 15.9146C30.2299 15.9146 26.1885 20.0047 26.1885 25.0306V25.2229V43.9934H30.6807V34.185H35.1824C40.1444 34.185 44.1715 30.0404 44.1715 25.0146C44.1715 19.9888 40.1537 15.9146 35.1918 15.9146Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M3.18185 27.1618C4.14824 31.14 7.71916 34.1851 11.9667 34.1851H23.8417C23.5628 35.8198 22.1192 37.0699 20.3888 37.0699H3.50596C1.57766 37.0699 -6.10352e-05 35.4346 -6.10352e-05 33.4945V16.509C-6.10352e-05 14.5689 1.57766 13.0298 3.50596 13.0298H20.3888C22.3171 13.0298 23.8946 14.617 23.8946 16.557L23.8783 29.5694H11.9667C10.1418 29.5694 8.5592 28.7039 7.7767 27.1654H21.0272V24.9587C21.0272 19.941 16.9348 15.8621 11.9474 15.8621C7.70683 15.8621 4.14022 18.8171 3.16694 22.7854C3.16694 22.7854 2.90266 24.1143 2.90266 24.9804C2.90266 25.8465 3.18185 27.1618 3.18185 27.1618ZM7.76285 22.742C8.5485 21.2996 10.1295 20.1799 11.9474 20.1799C13.7656 20.1799 15.3464 21.2996 16.1321 22.742H7.76285Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M19.5936 7.50619C19.5936 3.36061 16.1692 0 11.9451 0C7.79097 0 4.41236 3.2507 4.3014 7.30127C4.29958 7.31838 4.30101 7.33502 4.30101 7.35262V9.60835C4.30101 9.87817 4.51941 10.1449 4.7943 10.1449H7.60823C7.88311 10.1449 8.12416 9.87817 8.12416 9.60835V7.50619C8.12416 5.43604 9.83789 3.75179 11.9473 3.75179C14.0567 3.75179 15.7705 5.43604 15.7705 7.50619V9.60835C15.7705 9.87817 15.9934 10.1449 16.2683 10.1449H19.0824C19.3572 10.1449 19.5936 9.87817 19.5936 9.60835V7.50619Z",
                                fill: primary
                            })));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "eps",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, eps_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "eps"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.MYBANK] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, mybank_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("mybank", MYBANK_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                width: "78",
                                height: "45",
                                viewBox: "0 0 78 45",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("g", {
                                id: "LOGO_MYBANK_1"
                            }, node_node("path", {
                                id: "logo_mark",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M77.9294 34.2781H53.9832L36.4006 34.2753L36.4127 34.2947C32.9375 38.3649 27.7757 40.9535 22.002 40.9535C11.534 40.9535 3.04804 32.4713 3.04804 22.0089C3.04804 11.5464 11.534 3.06497 22.002 3.06497C27.8005 3.06497 32.9869 5.66831 36.4629 9.76832H40.2687C36.3193 3.89172 29.6174 0.0175781 22.002 0.0175781C9.85098 0.0175781 6.10352e-05 9.86354 6.10352e-05 22.0089C6.10352e-05 34.1542 9.85098 44 22.002 44C28.3766 44 34.1051 41.2802 38.1211 36.9494L76.1258 36.9116L77.9294 34.2781Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                id: "bank_k",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M77.5656 27.341L74.547 22.7822L76.7655 20.6773C76.7655 20.6773 77.7895 19.7262 76.9488 18.7836C76.0171 17.7395 74.9066 18.7701 74.9066 18.7701L72.1188 21.3687V16.1528C72.1188 15.4054 71.5153 14.8 70.7707 14.8C70.0255 14.8 69.422 15.4054 69.422 16.1528V28.4261C69.422 29.1732 70.0255 29.7788 70.7707 29.7788C71.5153 29.7788 72.1188 29.1732 72.1188 28.4261V25.1585L72.6287 24.6474L75.3597 28.942C75.3597 28.942 76.2498 30.4331 77.5607 29.484C78.5463 28.7708 77.5656 27.341 77.5656 27.341",
                                fill: secondary
                            }), node_node("path", {
                                id: "bank_n",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M67.8222 22.1688C67.8222 17.7396 64.1785 17.1155 61.7006 18.5206C61.6987 18.5222 61.6965 18.527 61.6953 18.5284C61.5089 17.9897 61.0078 17.6001 60.4121 17.6001C59.6592 17.6001 59.0486 18.2192 59.0486 18.9827V28.2175C59.0486 28.9812 59.6592 29.6001 60.4121 29.6001C61.1655 29.6001 61.7764 28.9812 61.7764 28.2175L61.7575 21.9872C61.7575 21.9872 62.0883 21.588 62.6194 21.2062C63.8951 20.2899 65.1114 20.602 65.1114 22.1683L65.1427 28.24C65.1427 28.9917 65.7432 29.6001 66.4846 29.6001C67.2255 29.6001 67.8261 28.9917 67.8261 28.24L67.8222 22.1688Z",
                                fill: secondary
                            }), node_node("path", {
                                id: "bank_a",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M53.049 26.8045C53.049 26.8045 51.1059 27.2048 51.1263 25.8091C51.1469 24.4135 54.6659 24.4969 55.0265 24.61C55.0265 24.61 55.1372 26.1937 53.049 26.8045ZM53.6338 18.0003C50.6127 17.9722 49.2003 19.7155 49.2003 19.7155C48.283 20.6919 48.8712 22.014 49.7709 22.1095C51.0638 22.2467 51.0503 21.1592 53.0348 20.6772C54.7757 20.2543 54.8511 21.8727 54.8511 21.8727C47.4263 21.6874 47.7808 27.9399 50.3084 29.2678C52.7321 30.541 54.9976 28.9347 54.9976 28.9347C54.9976 28.9347 55.0828 29.8 56.2819 29.8C57.6542 29.8 57.6522 28.4257 57.6522 28.4257L57.6466 22.3399C57.5564 17.8873 53.6338 18.0003 53.6338 18.0003Z",
                                fill: secondary
                            }), node_node("path", {
                                id: "bank_b",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M43.0907 26.9395H39.2737V23.2893H43.0907C44.0139 23.337 44.9102 23.8083 44.9102 25.1146C44.9102 26.4562 44.0951 26.9395 43.0907 26.9395ZM39.2737 17.5738H42.8315C43.5441 17.5922 44.2922 17.9736 44.2922 19.0396C44.2922 20.1504 43.6381 20.5052 42.8315 20.5052H39.2737V17.5738ZM46.0977 21.6111C46.1704 21.511 47.0834 20.7688 47.0113 18.7956C46.8659 14.8004 43.4076 14.846 42.6421 14.8227C41.409 14.7855 40.6668 14.8004 38.4035 14.8227C36.4924 14.8417 36.5064 16.5843 36.5064 16.5843V29.6H42.9481C46.3954 29.6 47.6778 27.6961 47.6778 25.0341C47.6778 22.3558 46.0977 21.6111 46.0977 21.6111Z",
                                fill: secondary
                            }), node_node("path", {
                                id: "my_y",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.4561 29.8583C28.7702 29.3283 28.8249 28.955 28.8249 28.955L25.7282 20.7808C25.7282 20.7808 25.1663 19.199 26.4045 18.7306C27.7163 18.2337 28.1899 19.499 28.2884 19.7644C28.387 20.0297 30.2449 25.0259 30.2449 25.0259L32.0337 19.7759C32.0337 19.7759 32.5462 18.1435 33.979 18.7255C35.1631 19.207 34.5548 20.8081 34.5548 20.8081C34.5548 20.8081 32.7241 26.2783 31.1896 30.2471C30.273 32.6182 29.4902 32.8518 28.5957 33.0741C27.3987 33.3719 25.1356 33.2244 25.1356 31.7213C25.1356 30.5358 26.3375 30.4618 26.8797 30.4795C26.9087 30.48 28.0294 30.5781 28.4561 29.8583",
                                fill: primary
                            }), node_node("path", {
                                id: "my_m",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M21.1518 16.2381L18.3115 24.125L15.215 16.2861C15.215 16.2861 14.7562 14.8 13.4651 14.8C11.9692 14.8 12.0179 15.9925 11.9842 16.2861C11.9507 16.5798 11.9842 28.5441 11.9842 28.5441C11.9842 28.5441 11.9692 29.8 13.3416 29.8C14.744 29.8 14.6768 28.5328 14.6878 28.5328C14.699 28.5328 14.6878 22.2168 14.6878 22.2168L16.9653 28.5328C16.9653 28.5328 17.3017 29.7747 18.3563 29.7521C19.4108 29.7297 19.7137 28.5328 19.7137 28.5328L21.621 22.2282V28.5328C21.621 28.5328 21.621 29.8 23.0009 29.8C24.3358 29.8 24.3358 28.5328 24.3358 28.5328L24.3376 16.2974C24.3376 16.2974 24.3376 14.8 22.8885 14.8072C21.6869 14.8129 21.2304 15.9722 21.1518 16.2381C21.1427 16.2691 21.1386 16.2861 21.1386 16.2861",
                                fill: primary
                            }))));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "mybank",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, mybank_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "MyBank"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.P24] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    shippingChange: !1,
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, p24_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("p24", P24_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                width: "90",
                                height: "31",
                                viewBox: "0 0 90 31",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M86.0712 22.5234L81.7899 22.5168L87.0011 16.8521L86.0712 22.5234ZM88.0945 22.5218L89.4659 14.1299L87.0361 14.1284L79.4644 22.4259L79.1205 24.5271L85.7423 24.5264L85.2577 27.4748L87.2889 27.4775L87.7686 24.5266L89.6445 24.5306L89.9834 22.5192L88.0945 22.5218Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M69.6586 18.8087L71.7061 18.8116L71.828 18.001C71.828 18.001 72.047 16.5388 72.5347 16.2563C72.6909 16.1658 72.9415 16.0797 73.2313 16.0283C73.7662 15.9336 74.449 15.9226 75.0014 15.9429C75.8536 15.9743 76.1721 15.982 77.0384 16.0825C77.9049 16.1831 77.6839 17.0365 77.6839 17.0365L77.5144 18.3091C77.5144 18.3091 77.4404 18.8792 77.2405 19.2353C77.0637 19.5503 76.5814 19.7621 76.3022 19.8552C75.6278 20.0796 73.3199 20.6782 73.3199 20.6782L71.504 21.2125C71.504 21.2125 70.3895 21.5421 69.7636 22.2471C69.138 22.9523 68.8919 23.7541 68.8064 24.1729C68.7209 24.5913 68.2415 27.4738 68.2415 27.4738L78.0345 27.478L78.3609 25.4803L70.6153 25.4893L70.7548 24.6754C70.7548 24.6754 70.8447 23.8361 71.1776 23.5624C71.2826 23.4757 71.3351 23.361 71.9534 23.1361C72.3223 23.0018 73.5858 22.6583 73.5858 22.6583L76.5084 21.8449C76.5084 21.8449 78.1028 21.4259 78.7308 20.5385C79.3588 19.6514 79.6005 17.9505 79.6005 17.9505C79.6005 17.9505 79.7694 16.2994 79.6406 15.7817C79.5121 15.2641 79.0321 14.6424 78.45 14.3775C77.8677 14.1125 77.2574 13.9574 75.4938 13.982C73.7305 14.0069 72.8598 14.0909 71.9672 14.4259C71.0746 14.7605 70.559 15.3715 70.2305 16.2326C69.8682 17.0458 69.6586 18.8087 69.6586 18.8087",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M62.1771 17.8525L63.425 24.8872L66.956 17.8452L68.942 17.8625L63.8546 27.9207C63.8546 27.9207 62.9342 29.7408 62.363 30.2026C61.7921 30.6648 61.4432 30.8715 60.9761 30.9186C60.5092 30.966 60.3218 30.9992 59.8737 30.9186L59.4003 30.8338L59.6964 29.0378C59.6964 29.0378 60.4829 29.1888 60.9514 29.0002C61.4198 28.8112 61.7986 27.9971 61.7986 27.9971L62.0348 27.5898L60.1962 17.8498L62.1771 17.8525Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M46.7465 17.8512L48.6127 17.8496L49.2717 24.6213L52.1424 17.8374L54.4456 17.8438L55.1263 24.6492L57.9973 17.8501L59.9334 17.8483L55.8187 27.4703L53.5199 27.4705L52.8578 20.7329L49.9532 27.4706L47.6935 27.4771L46.7465 17.8512Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M44.2793 21.4381L39.9338 21.4336L40.1067 20.7294C40.1067 20.7294 40.2576 20.179 40.559 19.9442C40.8603 19.7093 41.2456 19.6691 41.6087 19.6332C41.9719 19.5976 42.9325 19.5281 43.7172 19.6934C43.9774 19.7477 44.2251 19.8971 44.2897 20.1187C44.4419 20.6411 44.2793 21.4381 44.2793 21.4381ZM44.719 17.9348C44.1734 17.7533 43.2264 17.7174 42.4271 17.7277C41.6523 17.7374 41.297 17.7744 41.0079 17.838C41.0079 17.838 39.6296 18.0399 38.8475 19.0284C38.0655 20.0174 37.8322 22.1808 37.8322 22.1808C37.8322 22.1808 37.3679 24.5721 37.5037 25.3688C37.6395 26.1655 37.8827 26.9035 38.7678 27.2506C39.6526 27.5972 40.4031 27.5817 40.4031 27.5817C40.4031 27.5817 41.9802 27.7078 43.1682 27.4213C44.3564 27.1348 44.9828 26.2812 44.9828 26.2812C44.9828 26.2812 45.2615 25.9141 45.4625 25.4757C45.6638 25.0374 45.7227 24.7328 45.7318 24.6953L45.8564 24.1787L43.8361 24.1814C43.8361 24.1814 43.7248 25.5419 42.6356 25.6671C41.5467 25.7926 40.9623 25.7455 40.7519 25.7375C40.5444 25.7296 39.3742 25.7786 39.4689 24.7833C39.4695 24.7698 39.4703 24.7502 39.4716 24.7221C39.5258 23.5868 39.6494 23.2926 39.6494 23.2926L45.9907 23.2745L46.2612 21.6765C46.5694 19.8583 46.3431 18.4755 44.719 17.9348Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M36.3523 14.1339L38.2978 14.1323L36.1179 27.4787L34.1674 27.4755L36.3523 14.1339Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M32.3343 21.4405L27.9886 21.4357L28.1615 20.7319C28.1615 20.7319 28.3124 20.1815 28.6138 19.9464C28.9154 19.7115 29.3007 19.6716 29.6636 19.6357C30.0267 19.5996 30.9876 19.5306 31.772 19.6955C32.0324 19.7501 32.2801 19.8995 32.3445 20.1209C32.4967 20.6433 32.3343 21.4405 32.3343 21.4405ZM32.7569 17.9324C32.2115 17.751 31.2644 17.7151 30.4652 17.7252C29.6904 17.735 29.3351 17.772 29.046 17.8356C29.046 17.8356 27.6677 18.0372 26.8857 19.026C26.1036 20.0147 25.8703 22.1784 25.8703 22.1784C25.8703 22.1784 25.406 24.5695 25.5418 25.3662C25.6773 26.1629 25.9208 26.9013 26.8056 27.2479C27.6906 27.5945 28.4412 27.5791 28.4412 27.5791C28.4412 27.5791 30.0181 27.7055 31.2063 27.4187C32.3945 27.1325 33.021 26.2788 33.021 26.2788C33.021 26.2788 33.2996 25.9118 33.5007 25.4732C33.7019 25.0347 33.7608 24.7304 33.7697 24.6929L33.8943 24.1763L31.8742 24.179C31.8742 24.179 31.7629 25.5393 30.6737 25.6649C29.5848 25.7902 29.0004 25.7428 28.7897 25.7347C28.5822 25.727 27.4122 25.7762 27.5071 24.7808C27.5076 24.7674 27.5084 24.7477 27.5097 24.7197C27.564 23.5844 27.6876 23.2902 27.6876 23.2902L34.0288 23.272L34.2993 21.6738C34.6072 19.8557 34.3812 18.4729 32.7569 17.9324Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M18.8507 17.8536L26.2816 17.8433L26.0099 19.5686L19.7965 25.6223L25.01 25.6117L24.7071 27.4751L17.0287 27.4764L17.3497 25.5548L23.3059 19.7343L18.5543 19.734L18.8507 17.8536Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M16.3713 17.8433C15.5875 17.8433 14.8471 18.1588 14.2145 18.5123L14.3254 17.8433H12.2483L10.585 27.4256H12.6637L13.5852 22.1169C13.7771 21.0396 14.5627 19.7099 16.1044 19.7099L17.179 19.7055L17.5022 17.8433H16.3713Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M9.16528 17.2576C9.16333 17.2797 8.98589 18.3527 8.7461 19.6219C8.6543 20.1076 8.29078 20.3683 7.87137 20.4587C7.17896 20.608 6.43379 20.5806 6.43379 20.5806L3.1556 20.572L3.87537 16.1389L6.84579 16.1473C6.84579 16.1473 7.04683 16.143 7.32752 16.1474C7.64653 16.1525 8.06851 16.1688 8.41526 16.2154C8.71224 16.2553 8.95412 16.3175 9.02892 16.4138C9.12757 16.5409 9.16832 16.7032 9.18204 16.8515C9.20151 17.0623 9.16632 17.2448 9.16528 17.2576ZM10.7272 14.9029C10.5643 14.7274 10.3346 14.5921 10.0749 14.4877C9.80568 14.3795 9.50433 14.3045 9.21215 14.2527C8.84 14.1866 8.48275 14.158 8.22586 14.1457C7.98953 14.1344 7.83812 14.1371 7.83812 14.1371L4.58981 14.1366L2.17259 14.1362L0 27.4759L2.02279 27.478L2.82234 22.5333L6.74425 22.5506C6.74425 22.5506 8.27126 22.6118 9.35544 22.0266C10.4395 21.4408 10.7265 20.1092 10.7265 20.1092C10.7265 20.1092 10.8458 19.6152 10.9431 19.0119C11.0501 18.3495 11.1597 17.5541 11.2166 17.1305C11.2416 16.9447 11.2564 16.8304 11.2564 16.8304C11.2564 16.8304 11.2827 16.693 11.2852 16.4801C11.2887 16.1822 11.2454 15.7363 11.0182 15.3115C10.943 15.1709 10.8477 15.0327 10.7272 14.9029Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M65.8755 10.0079L68.4177 11.9736H89.2996C89.2996 11.9736 89.2571 11.2837 88.7008 10.3066C88.3525 9.69422 87.7225 9.04705 87.0613 8.37429C86.8213 8.12984 85.8578 7.36398 85.1393 6.88851C83.2955 5.66924 82.266 5.19774 80.3541 4.30859L65.8755 10.0079Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M54.4667 4.95525L56.8817 0.00535438C56.8817 0.00535438 62.1685 -0.0994707 66.7269 0.618506C71.2856 1.33672 75.4553 2.44308 75.3645 2.4915L63.803 8.66159C63.803 8.66159 61.1028 6.91601 57.7478 5.84503C55.8478 5.27951 54.4667 4.95525 54.4667 4.95525",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M39.6881 5.51241L39.1865 2.62839C39.1865 2.62839 42.7564 1.65981 46.0275 1.03866C49.2983 0.417514 53.6372 0.124023 53.6372 0.124023L52.2016 4.57902C52.2016 4.57902 48.3857 4.04752 44.8056 4.54364C42.0144 4.88278 39.6881 5.51241 39.6881 5.51241",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.4229 10.2404L25.5308 8.25355C25.5308 8.25355 28.1484 6.73652 31.6273 5.32078C35.1062 3.90484 36.9615 3.31592 36.9615 3.31592L37.5488 6.13025C37.5488 6.13025 34.1995 7.27305 32.28 8.1985C30.2977 9.06119 28.4229 10.2404 28.4229 10.2404",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M15.0199 15.2297H21.2545C21.2545 15.2297 22.6531 14.0765 23.6442 13.337C24.6354 12.5974 26.4396 11.4295 26.4396 11.4295L22.918 9.74805C22.918 9.74805 19.942 11.6289 18.6784 12.5164C17.4498 13.3341 15.0199 15.2297 15.0199 15.2297",
                                fill: primary
                            })));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "p24",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, p24_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Przelewy24"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.PAYU] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    shippingChange: !1,
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, payu_logo_excluded2);
                            var svg = (_ref = getLogoColors("payu", PAYU_LOGO_COLORS, logoColor), node_node("svg", {
                                width: "45",
                                height: "22",
                                viewBox: "0 0 45 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("g", {
                                "clip-path": "url(#clip0_381_8857)"
                            }, node_node("path", {
                                d: "M41.1719 4.60855L38.525 4.60764C38.2363 4.60764 38.0023 4.83982 38.0021 5.12627L38.002 5.49261H38.1856C39.3807 5.49261 39.8252 5.6882 39.8252 6.76831V8.30378L41.1705 8.30424C41.4592 8.30439 41.6932 8.07236 41.6934 7.78591L41.6943 5.12734C41.6943 4.84089 41.4604 4.60871 41.1719 4.60855M26.7262 8.73613C26.604 8.58398 26.3731 8.56294 26.1415 8.56294H25.9679C25.3909 8.56294 25.1646 8.73948 25.0369 9.28876L23.4337 15.9005C23.2336 16.7131 22.9524 16.8615 22.4713 16.8615C21.8822 16.8615 21.6464 16.722 21.4116 15.8973L19.5957 9.28556C19.4454 8.73186 19.2237 8.56294 18.6466 8.56294H18.492C18.259 8.56294 18.027 8.58429 17.9079 8.73841C17.7887 8.89269 17.829 9.12304 17.8904 9.34943L19.7255 16.0185C20.0697 17.2948 20.4789 18.3513 22.0077 18.3513C22.2931 18.3513 22.5571 18.3119 22.7766 18.2385C22.3129 19.6854 21.8412 20.3235 20.4501 20.4653C20.1679 20.4886 19.9844 20.5287 19.8822 20.6647C19.7761 20.8057 19.8002 21.0077 19.8381 21.1881L19.8764 21.3591C19.9594 21.7546 20.1009 21.9997 20.5483 21.9997C20.5953 21.9997 20.6459 21.9973 20.7001 21.9927C22.7773 21.8578 23.8902 20.7482 24.5414 18.1631L26.7635 9.34471C26.8162 9.11847 26.848 8.88812 26.7262 8.73613M15.549 13.8159V15.1506C15.549 16.2386 15.1425 16.8686 13.0641 16.8686C11.6911 16.8686 11.0236 16.3755 11.0236 15.3614C11.0236 14.2493 11.6932 13.8159 13.4118 13.8159H15.549ZM13.0641 8.28228C11.9311 8.28228 11.221 8.4233 10.9517 8.47681C10.4749 8.57956 10.2754 8.70945 10.2754 9.24744V9.40081C10.2754 9.61164 10.3069 9.75769 10.3744 9.86044C10.4529 9.98012 10.5795 10.0408 10.7507 10.0408C10.8341 10.0408 10.9309 10.0269 11.0463 9.99826C11.3188 9.93072 12.1892 9.79108 13.1414 9.79108C14.8516 9.79108 15.549 10.2611 15.549 11.4131V12.4413H13.3925C10.6202 12.4413 9.32893 13.3691 9.32893 15.3614C9.32893 17.2939 10.6623 18.3581 13.0835 18.3581C15.9607 18.3581 17.2437 17.3867 17.2437 15.2081V11.4131C17.2437 9.30644 15.8766 8.28228 13.0641 8.28228M7.62936 9.56042C7.62936 11.147 7.2211 12.0068 5.06717 12.0068H1.75161V7.91214C1.75161 7.34442 1.96442 7.13327 2.53663 7.13327H5.06717C6.68991 7.13327 7.62936 7.53055 7.62936 9.56042V9.56042ZM5.06717 5.49032H2.20811C0.680326 5.49032 -0.000976562 6.16628 -0.000976562 7.68224V17.4184C-0.000976562 18.004 0.188477 18.192 0.778818 18.192H0.971965C1.56215 18.192 1.75161 18.004 1.75161 17.4184V13.6305H5.06717C8.01088 13.6305 9.38195 12.3371 9.38195 9.56042C9.38195 6.78355 8.01088 5.49032 5.06717 5.49032M41.4295 1.86477L40.0944 1.86431C39.9488 1.86415 39.8308 1.74708 39.8308 1.60255L39.8312 0.261455C39.8314 0.116933 39.9495 0 40.0951 0L41.4302 0.000460587C41.5758 0.000460587 41.6938 0.117695 41.6938 0.262065L41.6934 1.60316C41.6932 1.74769 41.5752 1.86477 41.4295 1.86477M44.049 4.61023L42.0832 4.60947C41.8688 4.60947 41.6951 4.4369 41.6952 4.22423L41.6958 2.2497C41.696 2.03688 41.8699 1.86446 42.0843 1.86446L44.05 1.86522C44.2645 1.86522 44.4383 2.0378 44.4383 2.25046L44.4375 4.22514C44.4375 4.43781 44.2635 4.61023 44.049 4.61023M38.5236 8.30347C38.2349 8.30347 38.001 8.07129 38.0012 7.78484L38.002 5.49261H37.8093C36.6142 5.49261 36.1696 5.68835 36.1696 6.76846V9.29592C36.1695 9.30126 36.1689 9.30659 36.1689 9.31193V9.86593C36.1686 9.88514 36.1673 9.90298 36.1673 9.92279V13.4543C36.1673 13.8856 36.0836 14.229 35.9107 14.4958C35.5848 14.994 34.9396 15.2204 33.9074 15.2218C32.8756 15.2204 32.2305 14.9942 31.9046 14.4964C31.7313 14.2295 31.6474 13.8859 31.6474 13.4543V9.92279C31.6474 9.90298 31.6464 9.88514 31.646 9.86593V9.31193C31.646 9.30659 31.6454 9.30126 31.6453 9.29592V6.76846C31.6453 5.68835 31.2007 5.49261 30.0056 5.49261H29.6293C28.434 5.49261 27.9897 5.68835 27.9897 6.76846V13.4543C27.9897 14.5298 28.2341 15.4404 28.7065 16.1744C29.6187 17.5968 31.3859 18.3543 33.8982 18.3543C33.9012 18.3543 33.9043 18.3542 33.9074 18.3542C33.9106 18.3542 33.9135 18.3543 33.9168 18.3543C36.429 18.3543 38.1962 17.5968 39.1084 16.1744C39.5808 15.4404 39.8252 14.5298 39.8252 13.4543V8.30393L38.5236 8.30347",
                                fill: _ref.primary
                            })), node_node("defs", null, node_node("clipPath", {
                                id: "clip0_381_8857"
                            }, node_node("rect", {
                                width: "44.44",
                                height: "22",
                                fill: "white"
                            })))));
                            var _ref;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "payu",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, payu_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "PayU"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.BLIK] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, blik_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("blik", BLIK_LOGO_COLORS, logoColor)).primary, 
                            secondary = _ref.secondary, tertiary = _ref.tertiary, quaternary = _ref.quaternary, 
                            senary = _ref.senary, node_node("svg", {
                                width: "80",
                                height: "41",
                                viewBox: "0 0 80 41",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M6.64497 0C2.97516 0 0 2.89801 0 6.47265V6.47265V34.5273C0 38.102 2.97516 41 6.64497 41V41H73.355C77.0248 41 80 38.102 80 34.5273V34.5273V6.47265C80 2.89801 77.0248 0 73.355 0V0H6.64497Z",
                                fill: "url(#paint0_linear_0_4598)"
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M32.9412 35.7368H38.366V6.13281H32.9412V35.7368Z",
                                fill: senary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M43.0065 35.7371H48.4314V16.1284H43.0065V35.7371Z",
                                fill: senary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M72.7451 35.7368L64.5932 25.3595L72.0915 16.1282H65.6863L58.4967 25.084V6.13281H53.0719V35.7368H58.4967V25.6694L65.6863 35.7368H72.7451Z",
                                fill: senary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M19.1177 30.6755C16.4285 30.6755 14.2484 28.5519 14.2484 25.9325C14.2484 23.3131 16.4285 21.1895 19.1177 21.1895C21.8068 21.1895 23.9869 23.3131 23.9869 25.9325C23.9869 28.5519 21.8068 30.6755 19.1177 30.6755M19.1177 15.9053C17.3561 15.9053 15.6983 16.3372 14.2484 17.0969V6.13281H8.82355V25.9325C8.82355 31.4703 13.4324 35.9597 19.1177 35.9597C24.8029 35.9597 29.4118 31.4703 29.4118 25.9325C29.4118 20.3947 24.8029 15.9053 19.1177 15.9053",
                                fill: senary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M24.4117 14.0911C27.0831 14.0911 29.2483 11.9817 29.2483 9.37964C29.2483 6.77779 27.0831 4.66846 24.4117 4.66846C21.7404 4.66846 19.5751 6.77779 19.5751 9.37964C19.5751 11.9817 21.7404 14.0911 24.4117 14.0911Z",
                                fill: "url(#paint1_radial_0_4598)"
                            }), node_node("defs", null, node_node("linearGradient", {
                                id: "paint0_linear_0_4598",
                                x1: "80",
                                y1: "41",
                                x2: "80",
                                y2: "0",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                "stop-color": quaternary
                            }), node_node("stop", {
                                offset: "1"
                            })), node_node("radialGradient", {
                                id: "paint1_radial_0_4598",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform: "translate(21.5456 6.37273) rotate(54.2299) scale(11.1194 11.2157)"
                            }, node_node("stop", {
                                "stop-color": primary
                            }), node_node("stop", {
                                offset: "0.559042",
                                "stop-color": secondary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": tertiary
                            })))));
                            var _ref, primary, secondary, tertiary, quaternary, senary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "blik",
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, blik_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "BLIK"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.TRUSTLY] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, trustly_logo_excluded2);
                            var svg = (_ref = getLogoColors("trustly", TRUSTLY_LOGO_COLORS, logoColor), node_node("svg", {
                                width: "95",
                                height: "20",
                                viewBox: "0 0 95 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M31.6556 15.8697V3.04368H27.0469V0.000183105H39.5686V3.04368H34.96V15.8697H31.6556Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M39.0437 15.8696V4.34796H42.0871V6.17398C42.8045 4.63059 43.7393 4.34796 44.7393 4.34796H45.9133V7.43485H44.9133C43.4786 7.43485 42.1959 8.26099 42.1959 10.7827V15.8696H39.0437Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M47.3506 11.6522V4.34796H50.5027V10.9349C50.5027 12.2827 51.1548 13.2827 52.5026 13.2827C53.807 13.2827 54.633 12.2827 54.633 10.9566V4.34796H57.7852V15.8696H54.7853V14.4131C54.0245 15.5653 52.894 16.1305 51.4591 16.1305C48.9374 16.1305 47.3506 14.3914 47.3506 11.6522Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M59.1326 12.6306L61.8716 12.0002C62.002 12.8915 62.7195 13.5654 64.0889 13.5654C65.1542 13.5654 65.7412 13.1306 65.7412 12.5871C65.7412 12.1524 65.5021 11.8263 64.415 11.5871L62.6107 11.1959C60.3065 10.6959 59.3282 9.63068 59.3282 7.69586C59.3282 5.71765 60.9587 4.13068 64.0237 4.13068C67.2846 4.13068 68.5891 6.08724 68.7195 7.36975L65.9586 7.97848C65.8281 7.30452 65.3281 6.56544 63.9585 6.56544C63.0891 6.56544 62.4369 6.95677 62.4369 7.52193C62.4369 8.00023 62.763 8.26111 63.3281 8.39156L65.9586 9.0002C67.9586 9.45666 68.8933 10.6524 68.8933 12.3481C68.8933 14.1741 67.4368 16.0872 64.1107 16.0872C60.4586 16.0872 59.263 13.8915 59.1326 12.6306Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M74.9588 15.8697C72.9153 15.8697 71.5458 14.7393 71.5458 12.5001V7.1089H69.6111V4.34803H71.5458V1.78282L74.6979 0.869812V4.34803H77.024V7.1089H74.6979V11.9349C74.6979 12.7828 75.1326 13.1088 75.9804 13.1088H77.1978V15.8697H74.9588Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M78.9148 15.8697H82.0669V0.000183105H78.9148V15.8697Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M91.5675 4.34796H94.9369L90.133 20H86.7628L88.089 15.8696H86.3498L83.176 4.34796H86.5453L88.915 13.261L91.5675 4.34796Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M0 6.94855H7.39894V1.0464L13.3011 6.94855L7.39894 12.8498V15.8698H14.5633V6.94855H21.1448V0H0V6.94855Z",
                                fill: primary
                            })));
                            var _ref, primary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "trustly",
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, trustly_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Trustly"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.WECHATPAY] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, wechatpay_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("wechatpay", WECHATPAY_LOGO_COLORS, logoColor)).primary, 
                            node_node("svg", {
                                width: "106",
                                height: "20",
                                viewBox: "0 0 106 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M104.669 7.03906L102.609 12.6109C102.419 13.1141 102.258 13.6046 102.115 14.0378C102.081 14.1417 102.048 14.242 102.016 14.3378C101.847 13.783 101.641 13.1689 101.451 12.663L99.2509 7.08464L99.2329 7.03906H98.1884L101.335 15.0446C101.418 15.2538 101.435 15.3482 101.435 15.3905C101.435 15.4686 101.4 15.5722 101.336 15.7355C100.91 16.7646 100.35 17.4597 99.9556 17.8607C99.4107 18.3951 98.8182 18.6702 98.5134 18.7866L98.4554 18.8086L98.9065 19.6037C99.1298 19.5174 99.6888 19.2679 100.314 18.7318C101.403 17.7646 102.1 16.2735 103.161 13.4991L105.715 7.03906H104.669Z",
                                fill: secondary = _ref.secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M96.353 12.9034C96.353 13.0306 96.3389 13.2185 96.2696 13.3952C96.0015 14.1959 95.2276 15.0513 93.8583 15.0513C93.1183 15.0513 92.2538 14.6051 92.2538 13.3474C92.2538 12.811 92.4285 12.3664 92.7726 12.026C93.3673 11.4378 94.4634 11.1405 96.0344 11.1405C96.1385 11.1405 96.2448 11.1418 96.353 11.1444V12.9034ZM97.4552 15.6277C97.3489 14.9582 97.3341 14.2641 97.3341 13.6139V10.2742C97.3341 8.02998 96.3073 6.84375 94.3645 6.84375C93.5297 6.84375 92.6427 7.09785 91.9626 7.52375L92.3608 8.22539C92.895 7.88703 93.5668 7.70014 94.2781 7.70014C94.2885 7.70014 94.2981 7.69982 94.3081 7.69982C94.9283 7.69982 95.4142 7.87293 95.7528 8.21424C96.1568 8.62178 96.353 9.24932 96.353 10.1323V10.2897C94.3068 10.2726 92.8412 10.7001 92.0038 11.5441C91.4954 12.0559 91.238 12.7103 91.238 13.4897C91.238 14.6542 92.0306 15.9077 93.771 15.9077C95.0379 15.9077 95.9616 15.2392 96.4384 14.5729L96.5518 15.7119H97.4688L97.4552 15.6277Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M90.1324 7.02325C90.1324 8.83997 88.9306 9.88161 86.8348 9.88161C86.3914 9.88161 85.8337 9.86325 85.4049 9.72423V4.4885C85.6092 4.44718 86.1398 4.3603 86.9917 4.3603C88.9876 4.3603 90.1324 5.33079 90.1324 7.02325ZM87.0268 3.50391C86.1807 3.50391 85.3247 3.58194 84.4828 3.73604L84.4238 3.74686V15.7121H85.4049V10.6183C85.7883 10.717 86.2146 10.7377 86.7648 10.7377C88.2737 10.7377 89.5205 10.2557 90.2741 9.38161C90.8389 8.75145 91.1131 7.95079 91.1131 6.9344C91.1131 5.94718 90.7916 5.118 90.1839 4.53735C89.5015 3.86128 88.4096 3.50391 87.0268 3.50391Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M79.9278 14.965C79.756 15.0021 79.516 15.0329 79.1867 15.0329C78.4016 15.0329 78.0362 14.4971 78.0362 13.347V7.87715H80.4278V7.03846H78.0362V5.12305H77.0548V7.03846H75.6411V7.87715H77.0548V13.1873C77.0548 14.1729 77.232 14.8568 77.5942 15.2752C77.9122 15.6886 78.4264 15.907 79.0817 15.907C79.5498 15.907 79.9529 15.8332 80.2802 15.6876L80.326 15.667L79.9278 14.965Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M73.8402 12.9034C73.8402 13.0306 73.8257 13.2188 73.7564 13.3952C73.4887 14.1959 72.7148 15.0513 71.3451 15.0513C70.6054 15.0513 69.741 14.6051 69.741 13.3474C69.741 12.811 69.9156 12.3664 70.2597 12.026C70.8544 11.4378 71.9505 11.1405 73.5215 11.1405C73.6256 11.1405 73.7319 11.1418 73.8402 11.1444V12.9034ZM74.9424 15.6277C74.8357 14.9585 74.8209 14.2644 74.8209 13.6139V10.2742C74.8209 8.02998 73.7941 6.84375 71.8516 6.84375C70.9769 6.84375 70.0419 7.12047 69.3511 7.58408L69.3472 7.5867L69.7471 8.29096C70.2964 7.91064 71.0088 7.70014 71.7649 7.70014C71.7749 7.70014 71.7849 7.69982 71.7949 7.69982C72.4154 7.69982 72.9013 7.87293 73.2399 8.21457C73.6436 8.62178 73.8402 9.24932 73.8402 10.1323V10.2897C71.7856 10.2726 70.3283 10.7001 69.4909 11.5441C68.9825 12.0559 68.7251 12.7103 68.7251 13.4897C68.7251 14.6542 69.5177 15.9077 71.2581 15.9077C72.525 15.9077 73.4487 15.2388 73.9255 14.5729L74.039 15.7119H74.9559L74.9424 15.6277Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M64.326 6.84402C63.7022 6.84402 63.1033 7.01976 62.5971 7.3509C62.1802 7.59353 61.8013 7.97844 61.5345 8.425V3.39746H60.5535V15.7122H61.5345V10.4342C61.5345 10.0889 61.5503 9.86566 61.6351 9.60599C62.0204 8.50467 63.0334 7.73582 64.0992 7.73582C66.0416 7.73582 66.3319 9.52664 66.3319 10.5942V15.7122H67.313V10.5053C67.313 7.02074 64.8247 6.84402 64.326 6.84402",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M56.0156 15.0158C52.9451 15.0158 51.1119 13.044 51.1119 9.7414C51.1119 6.31648 52.9973 4.27156 56.1554 4.27156C57.0314 4.27156 57.8543 4.43943 58.4884 4.74271L58.9327 3.95976L58.8956 3.9391C58.6685 3.81189 57.7976 3.39746 56.138 3.39746C52.524 3.39746 50.096 5.93976 50.096 9.72369C50.096 14.2748 53.1346 15.8899 55.7362 15.8899C57.2161 15.8899 58.3643 15.5739 58.9456 15.2781L58.9897 15.2555L58.5641 14.5053C57.8823 14.825 56.939 15.0158 56.0156 15.0158",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M45.3159 7.69982C46.0093 7.69982 46.5693 7.91523 46.9804 8.34014C47.6502 9.03162 47.7391 10.0598 47.7411 10.5385H42.587C42.7706 9.21031 43.5871 7.69982 45.3159 7.69982ZM47.8725 14.5831C47.385 14.8126 46.7668 15.0156 45.6652 15.0156C43.7008 15.0156 42.5657 13.6841 42.5425 11.3595H48.7079L48.7202 11.3024C48.7569 11.1346 48.7569 11.0057 48.7569 10.7713C48.7569 10.4493 48.7124 9.32309 48.1422 8.34703C47.5593 7.34932 46.6437 6.84375 45.4206 6.84375C43.1225 6.84375 41.5786 8.729 41.5786 11.5356C41.5786 14.1398 43.1785 15.8897 45.5602 15.8897C47.0777 15.8897 47.9334 15.4978 48.2311 15.3297L48.2804 15.3018L47.8725 14.5831Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M38.6457 10.3793C38.5651 10.6731 38.4859 10.9587 38.4085 11.237C38.107 12.3216 37.8431 13.2711 37.6379 14.2256C37.4365 13.0806 37.0908 11.7357 36.7238 10.3446L34.964 3.59277H34.0519L32.1172 10.3951C31.6748 11.8626 31.2891 13.1741 31.0823 14.2361C30.8861 13.3118 30.6067 12.1911 30.3126 11.0105L28.4355 3.59277H27.4316L30.5768 15.7121H31.4709L33.4936 8.76753C33.9765 7.14556 34.289 6.0272 34.4846 5.02523C34.6554 6.09835 34.9353 7.2331 35.3461 8.7649L37.123 15.7121H38.0348L41.604 3.59277H40.5988L38.6457 10.3793Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.04253 12.559C7.94265 12.6102 7.83021 12.64 7.71068 12.64C7.43456 12.64 7.19421 12.4849 7.06791 12.2561L7.01958 12.1485L5.00687 7.65377C4.98496 7.60459 4.97143 7.54951 4.97143 7.49574C4.97143 7.28852 5.13639 7.12066 5.34001 7.12066C5.42281 7.12066 5.49917 7.1482 5.56071 7.19508L7.93588 8.91607C8.10954 9.03148 8.31671 9.09934 8.53967 9.09934C8.67273 9.09934 8.79967 9.0741 8.91759 9.03016L20.0885 3.97082C18.0861 1.56918 14.7885 0 11.0566 0C4.95016 0 6.10352e-05 4.1977 6.10352e-05 9.37639C6.10352e-05 12.202 1.48954 14.7449 3.82025 16.4639C4.00744 16.5997 4.12987 16.823 4.12987 17.0748C4.12987 17.158 4.11247 17.2344 4.09089 17.3138C3.90498 18.0207 3.60664 19.1525 3.59278 19.2052C3.56959 19.2941 3.5335 19.3866 3.5335 19.4793C3.5335 19.6866 3.69846 19.8544 3.90209 19.8544C3.98199 19.8544 4.04739 19.8243 4.11505 19.7846L6.53565 18.3626C6.71769 18.2554 6.91036 18.1895 7.12268 18.1895C7.23577 18.1895 7.34467 18.2069 7.44777 18.239C8.57704 18.5695 9.79523 18.7534 11.0566 18.7534C17.163 18.7534 22.1135 14.5551 22.1135 9.37639C22.1135 7.80787 21.6569 6.33082 20.854 5.03148L8.1234 12.5115L8.04253 12.559Z",
                                fill: primary
                            })));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "wechatpay",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, wechatpay_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "WeChat Pay"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.OXXO] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, oxxo_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("oxxo", OXXO_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                width: "69",
                                height: "32",
                                viewBox: "0 0 69 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M0.200073 28.5063V29.4743C0.200073 30.6493 1.16007 31.6103 2.33607 31.6103H66.6491C67.8241 31.6103 68.7841 30.6493 68.7841 29.4743V28.5063H0.200073Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M68.7846 3.10351V2.13551C68.7846 0.960512 67.8236 -0.000488281 66.6486 -0.000488281H2.33562C1.16062 -0.000488281 0.200623 0.960512 0.200623 2.13551V3.10351H68.7846Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M58.3204 9.74854C55.1824 9.74854 52.6244 12.307 52.6244 15.4449C52.6244 18.5817 55.1824 21.1401 58.3204 21.1401C61.4576 21.1401 64.0156 18.5817 64.0156 15.4449C64.0156 12.307 61.4576 9.74854 58.3204 9.74854",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M11.3733 9.74854C8.23493 9.74854 5.67688 12.307 5.67688 15.4449C5.67688 18.5817 8.23493 21.1401 11.3733 21.1401C14.5101 21.1401 17.0685 18.5817 17.0685 15.4449C17.0685 12.307 14.5101 9.74854 11.3733 9.74854",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M57.8731 4.73559C52.6006 4.61422 50.1217 7.9953 46.5237 12.1654L43.1301 16.0987L48.5042 22.5323C49.7846 24.5092 47.3409 26.471 45.8248 24.6622L40.8562 18.7352L36.0144 24.3481C34.4726 26.1346 32.0566 24.1385 33.3643 22.1803L38.6205 16.0683L35.1769 11.9602L37.392 9.21676L40.894 13.4236L43.9129 9.91218C45.3939 8.19042 46.9046 5.90866 48.8624 4.73559H0.196655V26.9697H11.575C16.8484 26.9697 19.2421 23.8166 22.7422 19.5649L26.0452 15.5535L20.5229 9.24642C19.1984 7.29949 21.5957 5.28232 23.1531 7.05559L28.2568 12.8667L32.9693 7.1434C34.469 5.32096 36.9299 7.26164 35.6679 9.24954L30.5541 15.4821L34.0917 19.5094L31.8626 22.1491L28.3414 18.1775L25.4049 21.7569C23.9633 23.5126 22.5042 25.7514 20.5736 26.9697H68.7812V4.73559H57.8731ZM20.3711 15.4447C20.3711 20.4012 16.3297 24.4433 11.3732 24.4433C6.41558 24.4433 2.37383 20.4012 2.37383 15.4447C2.37383 10.487 6.41558 6.44564 11.3732 6.44564C16.3297 6.44564 20.3711 10.487 20.3711 15.4447ZM58.3204 24.4433C53.3635 24.4433 49.3209 20.4012 49.3209 15.4447C49.3209 10.487 53.3635 6.44564 58.3204 6.44564C63.2772 6.44564 67.3186 10.487 67.3186 15.4447C67.3186 20.4012 63.2772 24.4433 58.3204 24.4433V24.4433Z",
                                fill: secondary
                            })));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "oxxo",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, oxxo_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "OXXO"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.BOLETO] = getBoletoConfig(), _ref[FUNDING.BOLETOBANCARIO] = getBoletoConfig(), 
                _ref[FUNDING.MERCADOPAGO] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, mercadopago_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("mercadopago", MERCADOPAGO_LOGO_COLORS, logoColor)).primary, 
                            tertiary = _ref.tertiary, quaternary = _ref.quaternary, node_node("svg", {
                                width: "98",
                                height: "26",
                                viewBox: "0 0 98 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M35.6856 11.9268C35.6856 5.49758 27.6975 0.256836 17.8435 0.256836C7.98988 0.256836 0.0020562 5.49758 0.0020562 11.9268C0.0020562 12.0928 0 12.5519 0 12.61C0 19.4304 6.98183 24.9546 17.8411 24.9546C28.7678 24.9546 35.6856 19.4319 35.6856 12.6113V11.9268Z",
                                fill: secondary = _ref.secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M35.0024 11.9215C35.0024 17.9827 27.3217 22.8962 17.8467 22.8962C8.37202 22.8962 0.691589 17.9827 0.691589 11.9215C0.691589 5.85984 8.37202 0.946289 17.8467 0.946289C27.3217 0.946289 35.0024 5.85984 35.0024 11.9215",
                                fill: tertiary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M12.1505 8.45877C12.1415 8.47599 11.9703 8.65308 12.0811 8.79548C12.352 9.14117 13.1881 9.3396 14.0337 9.14991C14.5372 9.03682 15.1826 8.52354 15.8077 8.02748C16.4852 7.48927 17.1573 6.95029 17.833 6.73593C18.5486 6.50821 19.0069 6.60588 19.3096 6.69738C19.642 6.79659 20.0327 7.01532 20.6559 7.48285C21.8298 8.36547 26.5498 12.4853 27.3653 13.1978C28.0223 12.9009 30.9413 11.6443 34.9082 10.7699C34.5636 8.65514 33.2772 6.72025 31.3261 5.13595C28.607 6.27817 25.2839 6.87396 22.0344 5.28683C22.0179 5.28014 20.2591 4.44789 18.5244 4.48876C15.9462 4.54839 14.8292 5.66439 13.6471 6.84568L12.1505 8.45877Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M27.1737 13.6457C27.1184 13.5966 21.6237 8.78868 20.3787 7.85286C19.6585 7.31259 19.2578 7.17482 18.8371 7.12111C18.6181 7.09283 18.3156 7.13344 18.104 7.19153C17.5249 7.34909 16.768 7.85543 16.0954 8.38824C15.3993 8.94264 14.7432 9.46466 14.1345 9.60114C13.3562 9.7754 12.4063 9.56978 11.9727 9.27652C11.7971 9.15854 11.6735 9.02206 11.6141 8.88327C11.454 8.51187 11.7493 8.215 11.7979 8.1654L13.3141 6.52532C13.4904 6.34926 13.668 6.17345 13.8495 5.99996C13.3604 6.0637 12.908 6.18862 12.4677 6.31122C11.9182 6.46569 11.39 6.61271 10.8554 6.61245C10.6323 6.61245 9.43636 6.41634 9.2094 6.35466C7.8374 5.97914 6.63299 5.6134 4.83407 4.77344C2.6784 6.3783 1.237 8.38464 0.820618 10.5948C1.13033 10.6765 1.62922 10.8251 1.83895 10.8716C6.71703 11.9563 8.23631 13.0736 8.5121 13.3069C8.8105 12.9749 9.24076 12.7646 9.7214 12.7646C10.2612 12.7654 10.7474 13.0365 11.043 13.4557C11.3224 13.235 11.7077 13.0466 12.2058 13.0468C12.432 13.0468 12.6667 13.0887 12.9034 13.1692C13.4539 13.3581 13.7379 13.7246 13.8852 14.0562C14.07 13.9726 14.2967 13.9112 14.564 13.912C14.8267 13.912 15.0999 13.9721 15.3754 14.0909C16.2748 14.4769 16.4148 15.3603 16.3331 16.0265C16.3971 16.0188 16.4616 16.016 16.5272 16.016C17.5936 16.0167 18.461 16.8834 18.4605 17.9503C18.4605 18.2804 18.376 18.5909 18.2292 18.8636C18.5194 19.0268 19.2591 19.3956 19.9083 19.3134C20.4273 19.2481 20.6244 19.0705 20.6948 18.971C20.7429 18.9021 20.7943 18.8222 20.7468 18.7646L19.3704 17.2356C19.3704 17.2356 19.1437 17.0212 19.2185 16.9387C19.2964 16.8536 19.4362 16.9755 19.5351 17.0582C20.2358 17.6435 21.0912 18.5261 21.0912 18.5261C21.1056 18.5356 21.1621 18.6477 21.4785 18.7045C21.7507 18.753 22.2324 18.7248 22.5662 18.4505C22.6505 18.3814 22.7346 18.295 22.805 18.2058C22.7994 18.2102 22.795 18.2161 22.7896 18.2182C23.1415 17.7679 22.7508 17.3122 22.7508 17.3122L21.1439 15.5076C21.1439 15.5076 20.9141 15.2953 20.992 15.2097C21.0621 15.1357 21.2099 15.2475 21.3104 15.3313C21.8193 15.7566 22.5382 16.4781 23.2273 17.1531C23.3617 17.2512 23.9673 17.626 24.7692 17.0993C25.2555 16.7801 25.3534 16.3881 25.3395 16.0923C25.3056 15.7006 25.0003 15.4217 25.0003 15.4217L22.805 13.2149C22.805 13.2149 22.5734 13.017 22.6552 12.9168C22.7222 12.8325 22.8729 12.954 22.9713 13.0365C23.6709 13.6215 25.5637 15.357 25.5637 15.357C25.5906 15.376 26.2448 15.8417 27.0529 15.3271C27.3418 15.1423 27.5266 14.8637 27.5425 14.5404C27.57 13.9791 27.1737 13.6457 27.1737 13.6457",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M16.5269 16.4437C16.1866 16.4396 15.8145 16.6419 15.7656 16.6123C15.7389 16.5946 15.7864 16.4578 15.8183 16.3789C15.851 16.3005 16.2992 14.9519 15.2066 14.4836C14.3705 14.1243 13.8595 14.5286 13.6837 14.7111C13.6377 14.7586 13.6172 14.755 13.6118 14.6939C13.595 14.4512 13.4863 13.794 12.7646 13.574C11.7334 13.2581 11.0703 13.9781 10.9019 14.2379C10.8266 13.6501 10.3298 13.1936 9.72117 13.1934C9.05958 13.1926 8.52317 13.7285 8.5224 14.3896C8.52214 15.0506 9.0583 15.5868 9.71962 15.5868C10.0412 15.5875 10.3324 15.459 10.5472 15.2526C10.5542 15.2591 10.5568 15.2704 10.5534 15.293C10.503 15.5891 10.4102 16.665 11.537 17.103C11.9889 17.2785 12.3732 17.1479 12.6916 16.9246C12.7864 16.8575 12.8021 16.886 12.7885 16.975C12.7479 17.2518 12.7993 17.8442 13.63 18.1812C14.2618 18.438 14.636 18.175 14.8809 17.9486C14.9876 17.8514 15.0167 17.8671 15.0223 18.0175C15.0524 18.8181 15.7176 19.454 16.5251 19.4548C17.3574 19.4555 18.0318 18.7826 18.0321 17.9506C18.0328 17.1184 17.3589 16.4527 16.5269 16.4437",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M16.5269 19.3475C15.7725 19.3467 15.1595 18.7607 15.1318 18.0138C15.1297 17.9498 15.1233 17.7794 14.9794 17.7794C14.92 17.7794 14.8686 17.8151 14.8092 17.8686C14.6437 18.0223 14.4324 18.1785 14.1237 18.1785C13.9839 18.1785 13.8323 18.1459 13.6721 18.0804C12.8756 17.7578 12.8646 17.2108 12.8969 16.9908C12.9057 16.9322 12.9088 16.8711 12.8684 16.8238L12.8193 16.7798H12.7697C12.7294 16.7798 12.6875 16.7963 12.6312 16.8361C12.4006 16.9978 12.1798 17.0764 11.9552 17.0764C11.8313 17.0764 11.7046 17.0515 11.5776 17.0027C10.529 16.5945 10.6117 15.6047 10.6631 15.3068C10.6706 15.2467 10.6557 15.1996 10.6174 15.1685L10.5434 15.1076L10.474 15.1739C10.2694 15.3708 10.0023 15.4788 9.72114 15.4788C9.12073 15.478 8.63187 14.9902 8.63238 14.3895C8.6329 13.7886 9.12202 13.301 9.72269 13.3018C10.2655 13.3018 10.7277 13.7097 10.7968 14.252L10.8343 14.5445L10.995 14.297C11.013 14.2679 11.453 13.6025 12.2618 13.6032C12.4158 13.6032 12.5746 13.6282 12.7345 13.6775C13.3796 13.8744 13.4889 14.4591 13.5056 14.7028C13.5171 14.8447 13.6182 14.8516 13.6379 14.8516C13.6937 14.8516 13.7346 14.8161 13.7636 14.7858C13.8855 14.6588 14.1505 14.4476 14.5653 14.4476C14.755 14.4481 14.9573 14.4931 15.1657 14.5828C16.1905 15.0225 15.7258 16.3249 15.7201 16.3385C15.6322 16.5544 15.6286 16.6498 15.7114 16.7048L15.7517 16.724H15.7818C15.8278 16.724 15.8854 16.704 15.9802 16.6719C16.1198 16.6235 16.3303 16.5511 16.5272 16.5516H16.5277C17.2993 16.5598 17.9267 17.188 17.9264 17.9506C17.9256 18.7211 17.298 19.3475 16.5269 19.3475M27.3862 13.0704C25.6937 11.5933 21.7818 8.19261 20.7223 7.39737C20.1173 6.94192 19.7043 6.7016 19.3419 6.59365C19.1792 6.5443 18.9537 6.48853 18.6636 6.48827C18.3945 6.48827 18.105 6.53685 17.8028 6.63298C17.1181 6.84965 16.4359 7.39172 15.7761 7.91605L15.7422 7.94303C15.1277 8.43138 14.4926 8.93695 14.0119 9.04439C13.8019 9.09168 13.5863 9.11584 13.3712 9.11584C12.8327 9.11507 12.349 8.95983 12.1678 8.72876C12.138 8.69046 12.157 8.62852 12.2271 8.53933L12.2364 8.52751L13.7253 6.9229C14.8915 5.75678 15.9931 4.65568 18.5286 4.59734C18.5703 4.59605 18.6132 4.59528 18.6551 4.59528C20.2335 4.59631 21.8114 5.30287 21.9882 5.38486C23.4681 6.10659 24.9954 6.47336 26.5311 6.47465C28.1313 6.47516 29.7825 6.07909 31.5184 5.27974C31.3246 5.11653 31.1229 4.95794 30.9152 4.80219C29.3903 5.46326 27.9373 5.79739 26.5352 5.79687C25.1036 5.79559 23.673 5.45195 22.284 4.77417C22.2108 4.73922 20.4687 3.91776 18.6559 3.91699C18.6086 3.91699 18.5602 3.91776 18.5129 3.91853C16.383 3.9684 15.1832 4.72457 14.3766 5.38743C13.5919 5.40645 12.9149 5.59562 12.3127 5.76372C11.7753 5.91305 11.3111 6.04259 10.8582 6.04233C10.6719 6.04233 10.3362 6.02537 10.3061 6.02434C9.7854 6.00866 7.16272 5.36533 5.07644 4.57523C4.86337 4.72611 4.65852 4.88186 4.45907 5.04045C6.63838 5.93387 9.29088 6.62527 10.128 6.67924C10.3609 6.69441 10.6092 6.72088 10.8572 6.72139C11.4111 6.72139 11.9637 6.56589 12.4986 6.41631C12.8144 6.32763 13.163 6.23125 13.5297 6.16082C13.4318 6.25695 13.3341 6.35436 13.2362 6.45255L11.7234 8.08902C11.6044 8.20931 11.3458 8.53008 11.5162 8.92513C11.5841 9.08448 11.7216 9.2369 11.9141 9.3667C12.2744 9.60933 12.9201 9.77357 13.5197 9.77408C13.7469 9.77434 13.9621 9.75146 14.1602 9.707C14.7943 9.56461 15.4595 9.03488 16.1643 8.47456C16.7256 8.02862 17.5234 7.46214 18.1341 7.29559C18.3048 7.24932 18.5142 7.22028 18.6828 7.22028C18.7332 7.22079 18.7808 7.22234 18.8247 7.22876C19.2285 7.27991 19.6184 7.41716 20.3149 7.93995C21.5566 8.87269 27.0521 13.6801 27.1058 13.7276C27.1097 13.7305 27.46 14.0327 27.4356 14.5352C27.4227 14.8154 27.267 15.0644 26.9966 15.2369C26.7622 15.3857 26.5201 15.4615 26.2754 15.4615C25.9081 15.4608 25.6552 15.2888 25.6387 15.277C25.6184 15.2605 23.7357 13.5341 23.0433 12.9543C22.9328 12.863 22.8256 12.7805 22.7171 12.7805C22.659 12.78 22.6079 12.8049 22.5732 12.8484C22.4642 12.9825 22.5863 13.1686 22.7302 13.2912L24.9293 15.5016C24.9324 15.5039 25.2036 15.7581 25.2331 16.0972C25.2503 16.4637 25.0753 16.7703 24.7111 17.0088C24.4515 17.1797 24.1888 17.2666 23.9316 17.2666C23.5938 17.2666 23.3566 17.1129 23.3042 17.0764L22.9888 16.7654C22.412 16.1982 21.8167 15.6116 21.3811 15.2479C21.2749 15.1595 21.1611 15.0781 21.0531 15.0781C20.9997 15.0781 20.9516 15.0978 20.9146 15.1367C20.865 15.1919 20.8303 15.2914 20.9542 15.4559C21.0053 15.5237 21.0652 15.5798 21.0652 15.5798L22.6701 17.3823C22.6834 17.3985 23.0009 17.7758 22.7063 18.1516L22.6495 18.2235C22.6017 18.2765 22.5498 18.3251 22.5004 18.3675C22.2267 18.5921 21.861 18.616 21.716 18.616C21.6389 18.616 21.5641 18.6093 21.4993 18.5975C21.3407 18.5692 21.2343 18.525 21.1829 18.4641L21.1636 18.4438C21.0757 18.3533 20.2669 17.5275 19.5973 16.9687C19.5094 16.8947 19.3994 16.8017 19.2853 16.8017C19.2293 16.8017 19.1792 16.8238 19.1406 16.8664C19.008 17.0114 19.2069 17.2283 19.2912 17.3077L20.6601 18.8173C20.6586 18.8306 20.6414 18.8617 20.6082 18.9095C20.5591 18.9774 20.3931 19.1434 19.8965 19.2056C19.8371 19.2136 19.7757 19.2167 19.7148 19.2167C19.2028 19.2167 18.6566 18.9681 18.3752 18.8188C18.5032 18.5484 18.5697 18.2503 18.5697 17.9513C18.5703 16.8248 17.6555 15.9082 16.529 15.9075C16.5048 15.9075 16.4791 15.9082 16.4552 15.909C16.492 15.3947 16.4192 14.4206 15.4194 13.9919C15.1318 13.8675 14.8447 13.804 14.5658 13.804C14.3476 13.804 14.1376 13.8412 13.9402 13.9171C13.733 13.5146 13.3891 13.2213 12.9404 13.0684C12.6926 12.9825 12.4459 12.9391 12.2073 12.9391C11.7915 12.9391 11.4083 13.0617 11.0664 13.3048C10.7387 12.8975 10.2442 12.6564 9.72294 12.6564C9.26724 12.6564 8.82875 12.8388 8.50362 13.1606C8.07772 12.8353 6.38753 11.7614 1.86388 10.7343C1.6449 10.685 1.14216 10.5405 0.833984 10.4506C0.783093 10.6955 0.744025 10.943 0.718323 11.1926C0.718323 11.1926 1.55263 11.3926 1.71687 11.4293C6.33792 12.4559 7.86491 13.5231 8.12296 13.7248C8.03557 13.9345 7.99008 14.1612 7.98956 14.3895C7.98905 15.3441 8.76552 16.1216 9.72114 16.1223C9.82807 16.1223 9.93422 16.1131 10.0386 16.0938C10.1822 16.7963 10.6421 17.3288 11.3448 17.6023C11.5501 17.6812 11.7578 17.7218 11.9616 17.7218C12.0937 17.7221 12.2264 17.7054 12.3559 17.6722C12.4854 18.002 12.7777 18.4127 13.4303 18.6779C13.6593 18.77 13.888 18.818 14.1106 18.818C14.2923 18.818 14.4699 18.7862 14.6393 18.724C14.9521 19.4858 15.6967 19.9906 16.5264 19.9906C17.0764 19.9913 17.6044 19.7672 17.9894 19.3709C18.3194 19.5541 19.0152 19.8857 19.7181 19.8867C19.8094 19.8867 19.8947 19.8801 19.98 19.87C20.6781 19.7816 21.0033 19.5087 21.1526 19.2964C21.1796 19.2593 21.2037 19.22 21.2243 19.1791C21.3893 19.2264 21.5705 19.2653 21.7782 19.2658C22.1596 19.2658 22.5256 19.1357 22.8955 18.8661C23.2589 18.6039 23.5172 18.2279 23.5545 17.9074C23.5553 17.9033 23.556 17.8984 23.5566 17.8938C23.6789 17.919 23.8046 17.9321 23.9303 17.9321C24.3227 17.9321 24.7091 17.8097 25.0781 17.5679C25.7898 17.1011 25.9137 16.4917 25.9019 16.0925C26.0263 16.1185 26.1535 16.1319 26.28 16.1319C26.6488 16.1319 27.0105 16.0211 27.3556 15.8011C27.797 15.5191 28.0625 15.0873 28.1026 14.5848C28.1303 14.2432 28.0455 13.8986 27.8653 13.6022C29.0582 13.0884 31.7839 12.094 34.9939 11.3707C34.9744 11.1217 34.9387 10.8759 34.8942 10.6313C31.0103 11.4931 28.1121 12.7473 27.3862 13.0704",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M82.526 20.2675C82.2142 20.6826 81.7665 20.89 81.1831 20.89C80.5994 20.89 80.1496 20.6826 79.8357 20.2675C79.5196 19.8537 79.3628 19.2638 79.3628 18.4997C79.3628 17.7358 79.5196 17.1472 79.8357 16.7355C80.1496 16.3222 80.5994 16.1171 81.1831 16.1171C81.7665 16.1171 82.2142 16.3222 82.526 16.7355C82.8393 17.1472 82.9948 17.7358 82.9948 18.4997C82.9948 19.2638 82.8393 19.8537 82.526 20.2675M84.1229 15.64C83.4778 14.8324 82.4998 14.4297 81.1882 14.4297C79.8789 14.4297 78.9007 14.8324 78.2566 15.64C77.612 16.4463 77.2902 17.3991 77.2902 18.4997C77.2902 19.619 77.612 20.5752 78.2566 21.3717C78.9007 22.1649 79.8789 22.5632 81.1882 22.5632C82.4998 22.5632 83.4778 22.1649 84.1229 21.3717C84.7665 20.5752 85.0873 19.619 85.0873 18.4997C85.0873 17.3991 84.7665 16.4463 84.1229 15.64",
                                fill: quaternary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M71.2461 18.5584C71.2461 19.8972 71.6331 20.6393 72.4068 20.786C73.1789 20.9292 73.75 20.7498 74.1176 20.246C74.2918 20.034 74.4167 19.698 74.4941 19.2429C74.5709 18.7871 74.5769 18.3356 74.509 17.8894C74.4424 17.4419 74.2818 17.044 74.0302 16.6947C73.7796 16.3462 73.4118 16.1706 72.9283 16.1706C72.2706 16.1706 71.8269 16.4143 71.5943 16.8975C71.361 17.3838 71.2461 17.9367 71.2461 18.5584M74.5527 21.9054V21.4124C74.2049 21.9568 73.7351 22.294 73.1457 22.431C72.5554 22.5659 71.9709 22.5176 71.3921 22.2842C70.8114 22.0524 70.3128 21.6201 69.8967 20.9901C69.4821 20.3573 69.2742 19.5276 69.2742 18.499C69.2742 17.2972 69.5497 16.3207 70.1 15.5738C70.6516 14.8269 71.5368 14.4861 72.7545 14.4527C73.9549 14.4211 74.6527 14.6927 75.3359 15.2101C76.0828 15.7771 76.5246 16.6469 76.5246 18.0045V22.111C76.5277 23.4177 75.6165 25.8394 72.7545 25.634C70.9816 25.5055 69.9977 24.7781 69.4484 23.1301H71.5653C71.72 23.401 71.9565 23.6097 72.2773 23.7542C72.5944 23.9017 72.9152 23.9395 73.2321 23.8714C73.5508 23.8035 73.8415 23.6136 74.1039 23.3044C74.3635 22.9936 74.5131 22.5271 74.5527 21.9054",
                                fill: quaternary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M66.5408 19.3679C66.5282 20.0379 66.3359 20.498 65.9678 20.7514C65.6 21.0038 65.1973 21.1303 64.7606 21.1303C64.484 21.1303 64.2501 21.0539 64.0579 20.9023C63.8651 20.7504 63.7687 20.5026 63.7687 20.1608C63.7687 19.7778 63.9263 19.4943 64.2417 19.3113C64.4293 19.2041 64.7346 19.1121 65.1618 19.0391L65.6175 18.9543C65.8455 18.9111 66.0241 18.8656 66.1532 18.816C66.2858 18.768 66.4133 18.7042 66.5408 18.6235V19.3679ZM67.5563 15.0064C66.9026 14.6761 66.1552 14.5088 65.3147 14.5088C64.0206 14.5088 63.109 14.846 62.5774 15.5192C62.2441 15.9502 62.0559 16.5002 62.0127 17.17H63.9453C63.9926 16.8744 64.0869 16.6406 64.2301 16.4678C64.4293 16.2339 64.7683 16.1167 65.2461 16.1167C65.6754 16.1167 65.9982 16.1756 66.219 16.2959C66.439 16.4154 66.5497 16.6316 66.5497 16.9454C66.5497 17.2029 66.4063 17.3924 66.1179 17.5144C65.9578 17.5846 65.6918 17.643 65.3178 17.69L64.6331 17.7735C63.8556 17.872 63.2647 18.0367 62.8656 18.266C62.1333 18.6872 61.7683 19.3679 61.7683 20.3086C61.7683 21.0336 61.9942 21.595 62.4499 21.9903C62.9028 22.3856 63.4801 22.5524 64.1769 22.5845C68.5443 22.7796 68.4954 20.2821 68.5353 19.7629V16.8886C68.5353 15.9666 68.2094 15.3398 67.5563 15.0064V15.0064Z",
                                fill: quaternary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M59.2065 18.557C59.2065 17.7995 59.059 17.2174 58.7627 16.8087C58.4676 16.4023 58.0445 16.1965 57.4932 16.1965C56.9622 16.1965 56.5484 16.4023 56.2518 16.8087C55.9773 17.1783 55.84 17.7625 55.84 18.557C55.84 19.2975 55.9873 19.8485 56.2829 20.2181C56.5774 20.6268 57.0013 20.8304 57.5523 20.8304C58.0636 20.8304 58.4676 20.6268 58.7627 20.2181C59.059 19.8102 59.2065 19.2584 59.2065 18.557V18.557ZM55.84 23.992C55.84 24.264 55.7413 24.4974 55.5434 24.6912C55.3476 24.8857 55.1111 24.9829 54.8351 24.9829H53.8322V18.0028C53.8322 16.6455 54.2894 15.7953 55.0425 15.2208C55.5398 14.8409 56.2813 14.4785 57.6703 14.4785C58.6082 14.4785 59.7065 14.8425 60.2999 15.5657C60.9656 16.3792 61.2432 17.2857 61.2432 18.4696C61.2432 19.6943 60.9479 20.6823 60.3578 21.4418C59.7674 22.1808 59.0086 22.5486 58.0836 22.5486C57.5917 22.5486 57.1588 22.4609 56.7849 22.2875C56.3898 22.0926 56.0765 21.7919 55.84 21.3835V23.992Z",
                                fill: quaternary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M94.8863 9.12035C94.5735 9.53519 94.1268 9.74261 93.5424 9.74261C92.9592 9.74261 92.5099 9.53519 92.195 9.12035C91.8799 8.70602 91.7226 8.11589 91.7226 7.35124C91.7226 6.58762 91.8799 5.99903 92.195 5.58677C92.5099 5.17424 92.9592 4.96811 93.5424 4.96811C94.1268 4.96811 94.5735 5.17424 94.8863 5.58677C95.1986 5.99903 95.3552 6.58762 95.3552 7.35124C95.3552 8.11589 95.1986 8.70602 94.8863 9.12035M96.4822 4.49158C95.8381 3.68452 94.8606 3.28125 93.5485 3.28125C92.2382 3.28125 91.2605 3.68452 90.6169 4.49158C89.9723 5.29813 89.65 6.25143 89.65 7.35124C89.65 8.47085 89.9723 9.42749 90.6169 10.224C91.2605 11.0177 92.2382 11.4161 93.5485 11.4161C94.8606 11.4161 95.8381 11.0177 96.4822 10.224C97.1268 9.42749 97.4481 8.47085 97.4481 7.35124C97.4481 6.25143 97.1268 5.29813 96.4822 4.49158",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M86.643 9.13648C86.3497 9.55698 85.9192 9.76671 85.3553 9.76671C84.7895 9.76671 84.3688 9.55492 84.0917 9.13288C83.8147 8.71008 83.6761 8.0945 83.6761 7.39025C83.6761 6.73664 83.8116 6.18943 84.0848 5.74838C84.3572 5.30784 84.7849 5.08654 85.3689 5.08654C85.7519 5.08654 86.0873 5.20811 86.3775 5.45048C86.8488 5.85221 87.0843 6.5724 87.0843 7.50514C87.0843 8.17264 86.9373 8.71625 86.643 9.13648V9.13648ZM89.0526 0.930439C89.0526 0.930439 87.029 0.714281 87.029 2.33971L87.0275 4.49152C86.8036 4.13195 86.5124 3.85076 86.1531 3.64822C85.7945 3.44543 85.384 3.34313 84.9206 3.34313C83.9172 3.34313 83.1173 3.71711 82.5169 4.46325C81.9165 5.21068 81.6179 6.2871 81.6179 7.58893C81.6179 8.7183 81.9222 9.64462 82.5311 10.3656C83.14 11.0858 84.3344 11.4019 85.3951 11.4019C89.0937 11.4019 89.051 8.23021 89.051 8.23021L89.0526 0.930439Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M79.009 8.17819C78.9954 8.84748 78.8037 9.30859 78.4354 9.5615C78.0668 9.81441 77.6643 9.94113 77.2278 9.94113C76.9513 9.94113 76.7174 9.86453 76.5246 9.71263C76.3324 9.56047 76.2365 9.31321 76.2365 8.97137C76.2365 8.58789 76.3935 8.3049 76.7084 8.1219C76.896 8.01472 77.2019 7.92245 77.6291 7.8492L78.0853 7.76464C78.3122 7.72146 78.4909 7.67545 78.6214 7.6261C78.7535 7.57804 78.881 7.51455 79.009 7.43385V8.17819ZM80.0235 3.81673C79.3704 3.48543 78.623 3.31836 77.7817 3.31836C76.4889 3.31836 75.5765 3.65609 75.0452 4.32924C74.7108 4.76078 74.5237 5.31056 74.48 5.97986H76.4118C76.4593 5.68453 76.5542 5.45064 76.6968 5.27766C76.896 5.04377 77.2345 4.92682 77.7134 4.92682C78.1416 4.92682 78.4649 4.98542 78.6862 5.10623C78.9062 5.22523 79.017 5.4419 79.017 5.75496C79.017 6.01301 78.8741 6.20192 78.5855 6.32427C78.4248 6.39469 78.1585 6.45304 77.7851 6.49982L77.1004 6.58412C76.3223 6.68205 75.732 6.84654 75.3318 7.07632C74.6005 7.49785 74.235 8.17819 74.235 9.11942C74.235 9.84423 74.4615 10.4056 74.9167 10.8011C75.3701 11.1967 75.9473 11.3627 76.6441 11.3951C81.0125 11.5899 80.9635 9.09294 81.0035 8.5735V5.69893C81.0035 4.77749 80.6761 4.14932 80.0235 3.81673V3.81673Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M70.0624 5.03086C70.5618 5.03086 70.9283 5.18508 71.1653 5.49325C71.3279 5.72149 71.4292 5.97877 71.4691 6.26381H73.6234C73.5055 5.1766 73.1251 4.4176 72.483 3.9876C71.8384 3.55939 71.0131 3.34375 70.004 3.34375C68.8173 3.34375 67.8851 3.70847 67.2119 4.43611C66.5367 5.16477 66.1995 6.18285 66.1995 7.49188C66.1995 8.65106 66.5046 9.59589 67.115 10.324C67.726 11.0517 68.6788 11.4161 69.9729 11.4161C71.2691 11.4161 72.2476 10.9797 72.9066 10.1066C73.3204 9.56582 73.5522 8.99136 73.6011 8.38427H71.4534C71.4097 8.78549 71.2843 9.11294 71.0763 9.36482C70.8692 9.61594 70.5201 9.74265 70.0261 9.74265C69.3303 9.74265 68.8572 9.42574 68.6055 8.78986C68.468 8.45084 68.3981 8.00182 68.3981 7.44304C68.3981 6.85677 68.468 6.38693 68.6055 6.03198C68.8672 5.36525 69.353 5.03086 70.0624 5.03086",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M65.6216 3.34375C61.1954 3.34375 61.457 7.26313 61.457 7.26313V11.2442H63.4659V7.51013C63.4659 6.89841 63.5433 6.44527 63.6965 6.15072C63.972 5.6287 64.5102 5.36654 65.3139 5.36654C65.3741 5.36654 65.454 5.36988 65.552 5.37425C65.6496 5.37913 65.7607 5.38787 65.8887 5.40278V3.35891C65.7992 3.35275 65.7416 3.35018 65.7164 3.34786C65.691 3.34581 65.6591 3.34375 65.6216 3.34375",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M55.5429 5.42365C55.8257 5.13347 56.2223 4.98799 56.7342 4.98799C57.2051 4.98799 57.5991 5.12447 57.9178 5.39923C58.2353 5.67322 58.4129 6.07572 58.4486 6.60442H55.0119C55.0836 6.10759 55.2612 5.7146 55.5429 5.42365V5.42365ZM58.2432 9.16388C58.1589 9.28417 58.068 9.38723 57.9682 9.46743C57.6845 9.70132 57.2989 9.77226 56.845 9.77226C56.4158 9.77226 56.0801 9.70723 55.7758 9.51549C55.2749 9.20757 54.9926 8.68607 54.9626 7.92091H60.5207C60.5282 7.26215 60.5071 6.75761 60.4539 6.40651C60.3616 5.80893 60.1583 5.28203 59.8466 4.82889C59.4998 4.31484 59.059 3.93856 58.5273 3.69927C57.9957 3.46229 57.3979 3.34277 56.7342 3.34277C55.6146 3.34277 54.7061 3.69567 54.0054 4.40043C53.3045 5.10674 52.9526 6.11916 52.9526 7.44104C52.9526 8.85211 53.3413 9.87044 54.1182 10.496C54.8939 11.1219 55.791 11.4355 56.806 11.4355C58.0358 11.4355 58.9932 11.0643 59.6764 10.322C60.045 9.93136 60.2758 9.54479 60.3732 9.16388H58.2432Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M52.1464 11.2428H50.3115V6.62252C50.3115 6.20049 50.1719 5.19655 48.9616 5.19655C48.1551 5.19655 47.5711 5.77845 47.5711 6.62252V11.2428H45.7344V6.62252C45.7344 6.20049 45.609 5.19655 44.3994 5.19655C43.5785 5.19655 43.0079 5.77845 43.0079 6.62252V11.2428H41.1719V6.66647C41.1719 4.75883 42.4375 3.31641 44.3994 3.31641C45.3733 3.31641 46.1654 3.72559 46.6808 4.38075C47.2228 3.72559 48.0294 3.31641 48.9616 3.31641C50.9646 3.31641 52.1464 4.70049 52.1464 6.66647V11.2428Z",
                                fill: secondary
                            })));
                            var _ref, primary, secondary, tertiary, quaternary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "mercadopago",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, mercadopago_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Mercado Pago"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.MULTIBANCO] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, multibanco_logo_excluded2);
                            var svg = (secondary = (_ref = getLogoColors("multibanco", MULTIBANCO_LOGO_COLORS, logoColor)).secondary, 
                            node_node("svg", {
                                width: "31",
                                height: "36",
                                viewBox: "0 0 31 36",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M15.032 28.9122H27.4697C30.3098 28.9122 30.3381 25.8936 30.0489 24.4033C29.8908 23.4017 28.1887 23.4101 28.0013 24.4033V25.5662C28.0013 26.0973 27.5664 26.5323 27.035 26.5323H15.032H14.0721H3.18896C2.65759 26.5323 2.22288 26.0973 2.22288 25.5662V24.4033C2.03548 23.4101 0.33337 23.4017 0.175316 24.4033C-0.113671 25.8936 -0.0858076 28.9122 2.75449 28.9122H14.0721H15.032Z",
                                fill: primary = _ref.primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M6.23859 0H24.4543H25.4167C26.7643 0 27.8665 1.16655 27.8665 2.59249V3.83153C27.8665 5.58321 25.4934 5.57655 25.4934 3.84337V3.16652C25.4934 2.736 25.1413 2.38389 24.7105 2.38389H5.49319C5.06267 2.38389 4.71056 2.736 4.71056 3.16652V3.82956C4.71056 5.57162 2.44897 5.55929 2.44897 3.86729V2.59249C2.44897 1.16655 3.55141 0 4.8987 0H6.23859Z",
                                fill: primary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M27.3825 14.242C28.7108 14.8668 29.6278 16.1566 29.6278 17.6376C29.6278 19.7256 27.8049 21.4338 25.5764 21.4338H19.3309C18.7467 21.4338 18.2686 20.9861 18.2686 20.4387V8.55595C18.2686 7.9829 18.7381 7.51367 19.3121 7.51367H24.5141C26.704 7.51367 28.4956 9.30356 28.4956 11.4909C28.4956 12.5559 28.0707 13.5262 27.3825 14.242M22.721 13.2742H24.704V13.2522C25.6069 13.1136 26.3043 12.3285 26.3043 11.3884V11.3884C26.3043 10.3513 25.4555 9.50255 24.4185 9.50255H20.4242V19.3631H25.4893C26.5605 19.3631 27.4368 18.4868 27.4368 17.4156C27.4368 16.3445 26.5605 15.4682 25.4893 15.4682H24.704V15.4635H22.721C22.1189 15.4635 21.6262 14.9711 21.6262 14.369C21.6262 13.7668 22.1189 13.2742 22.721 13.2742",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M17.2763 20.2468C17.3495 20.935 16.8507 21.5524 16.1625 21.6254C15.4743 21.6986 14.8569 21.2 14.7839 20.5116L13.7569 11.0619L10.1194 20.3018L10.1157 20.3104L10.1155 20.3114V20.3116L10.1054 20.336L10.0972 20.3553L10.0953 20.36L10.0866 20.3792L10.0812 20.3908L10.0726 20.4088L10.0684 20.4172L10.0588 20.4362L10.0553 20.4428C9.98826 20.5693 9.90196 20.6805 9.80111 20.774L9.79741 20.7772L9.77867 20.7942C9.71308 20.8524 9.64059 20.9037 9.56193 20.9478L9.55651 20.9508L9.53283 20.9636L9.53185 20.9641L9.5099 20.9754L9.49979 20.9806L9.48574 20.9873L9.4707 20.9942L9.45763 21.0003L9.44209 21.007L9.42853 21.0127L9.41571 21.0181L9.40412 21.0225L9.39746 21.0252L9.38686 21.0292L9.37034 21.0353L9.36072 21.0385C9.23941 21.081 9.11588 21.1036 8.99333 21.1081L8.97853 21.1086L8.96078 21.1088H8.94796H8.93489L8.91763 21.1086L8.90185 21.1081C8.765 21.1031 8.62642 21.0753 8.49155 21.0225L8.47478 21.0159L8.47059 21.0139L8.45382 21.0072L8.43755 21.0001L8.42448 20.9939L8.41042 20.9875L8.39538 20.9804L8.38675 20.9759L8.36382 20.9643L8.3616 20.9628L8.34212 20.9522L8.33103 20.9463C8.26223 20.9076 8.19837 20.863 8.13944 20.8134L8.13475 20.8092C8.1207 20.7971 8.10689 20.7853 8.09333 20.7727L8.09259 20.7717C8.08198 20.7619 8.07138 20.7518 8.06127 20.7417C8.05116 20.7313 8.04081 20.721 8.03094 20.7104L8.0302 20.7094C8.01763 20.6958 8.00555 20.6822 7.99346 20.6679L7.98927 20.6633C7.93971 20.6043 7.89533 20.5405 7.85661 20.4717L7.85045 20.4608L7.8396 20.4411L7.83861 20.4386L7.82678 20.4162L7.82259 20.4073L7.81544 20.3925L7.80878 20.3782L7.80286 20.3651L7.79571 20.3489L7.78856 20.3323L7.78708 20.3282L7.78018 20.3114L4.13875 11.0619L3.11177 20.5116C3.03853 21.2 2.42135 21.6986 1.73316 21.6254C1.04472 21.5524 0.546149 20.935 0.619382 20.2468L1.83007 9.10577L1.83056 9.10282L1.83105 9.09813L1.83056 9.09788C1.84511 8.96819 1.87248 8.83898 1.91193 8.71224C1.95015 8.5892 2.00119 8.46788 2.06431 8.34953C2.37352 7.76884 2.94237 7.3615 3.62119 7.26756L3.62366 7.26706C3.64634 7.2641 3.66927 7.26164 3.69196 7.25967C3.79823 7.24857 3.90401 7.24536 4.00807 7.2503L4.013 7.25054V7.2503C4.14837 7.25671 4.27511 7.27372 4.39198 7.30084C5.03949 7.45199 5.5896 7.90249 5.84851 8.5601L8.94796 16.4325L12.0472 8.5601C12.3061 7.90249 12.8562 7.45199 13.5037 7.30084C13.6203 7.27372 13.7471 7.25671 13.8827 7.2503V7.25054L13.8876 7.2503C13.9919 7.24536 14.0979 7.24857 14.2045 7.25967C14.2269 7.26164 14.2493 7.2641 14.272 7.26706L14.2745 7.26756C14.9533 7.3615 15.5224 7.76884 15.8316 8.34953C15.8945 8.46788 15.9458 8.5892 15.9837 8.71224C16.0232 8.83898 16.0506 8.96794 16.0651 9.09788L16.0646 9.09813L16.0651 9.10282L16.0656 9.10577L17.2763 20.2468Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M28.8133 32.8943V32.8955H28.8128H28.8121V32.8943C28.5653 32.8943 28.3407 32.9914 28.1784 33.1473C28.0189 33.3004 27.92 33.51 27.9197 33.7388H27.9212V33.7393V34.3631V34.3639H27.9197C27.92 34.5925 28.0189 34.8016 28.1779 34.9547C28.3407 35.1108 28.5653 35.2082 28.8126 35.2082V35.2069H28.8128H28.8138V35.2082C29.0609 35.2082 29.2853 35.111 29.4478 34.9547C29.6071 34.8018 29.7062 34.5925 29.7062 34.3634H29.705V34.3631V33.7393V33.7386H29.7062C29.7059 33.5098 29.6071 33.3004 29.448 33.1475C29.2853 32.9914 29.0607 32.8943 28.8133 32.8943V32.8943ZM28.8128 32.2256H28.8133V32.2271C29.2404 32.2271 29.6293 32.3955 29.9111 32.666C30.1961 32.9402 30.3732 33.3196 30.3734 33.7386H30.3747V33.7393V34.3631V34.3634H30.3734C30.3732 34.7826 30.1961 35.1623 29.9108 35.4365C29.6293 35.707 29.2407 35.8751 28.8138 35.8754V35.8769H28.8128H28.8126V35.8754C28.3855 35.8754 27.9967 35.707 27.7148 35.4362C27.43 35.1623 27.2528 34.7828 27.2525 34.3639H27.2513V34.3631V33.7393V33.7388H27.2525C27.2528 33.3199 27.43 32.9399 27.7153 32.666C27.9969 32.3955 28.3855 32.2273 28.8121 32.2271V32.2256H28.8128Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M26.8754 35.2069C27.0603 35.2069 27.2102 35.3568 27.2102 35.5418C27.2102 35.7267 27.0603 35.8769 26.8754 35.8769H25.8886H25.8881V35.8754C25.5244 35.8754 25.194 35.7265 24.9548 35.4873C24.7166 35.2491 24.5687 34.9192 24.5682 34.5557H24.567V34.555V33.5475V33.547H24.5682C24.5684 33.1833 24.7169 32.8526 24.9563 32.6134C25.1947 32.3755 25.5244 32.2273 25.8876 32.2271V32.2256H25.8886H26.8754C27.0603 32.2256 27.2102 32.3758 27.2102 32.5607C27.2102 32.7456 27.0603 32.8955 26.8754 32.8955H25.8886H25.8876V32.8943C25.7093 32.8943 25.5461 32.9683 25.4273 33.0871C25.3089 33.2055 25.2357 33.3682 25.2357 33.547H25.2367V33.5475V34.555V34.5557H25.2357C25.2357 34.7342 25.3094 34.8975 25.4285 35.0163C25.5466 35.1344 25.7093 35.2082 25.8881 35.2082V35.2069H25.8886H26.8754Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M21.6444 35.5418C21.6444 35.7267 21.4945 35.8766 21.3095 35.8766C21.1246 35.8766 20.9744 35.7267 20.9744 35.5418V32.7725V32.7713C20.9744 32.752 20.9759 32.7328 20.9791 32.7145C20.9835 32.6768 20.9927 32.6406 21.0055 32.6061L21.006 32.6051L21.0055 32.6048C21.0124 32.5863 21.022 32.5664 21.0331 32.5449L21.0339 32.5439L21.0331 32.5437C21.0891 32.4421 21.1801 32.3632 21.2947 32.3237C21.31 32.3188 21.3253 32.3144 21.3408 32.3114C21.3527 32.3087 21.3645 32.3062 21.3763 32.3045L21.3791 32.304V32.303C21.4015 32.2998 21.4284 32.2983 21.4592 32.2991H21.4617H21.4676H21.4678C21.6052 32.3045 21.7334 32.3681 21.8219 32.4808L23.6044 34.754V32.5604C23.6044 32.3755 23.7546 32.2256 23.9395 32.2256C24.1244 32.2256 24.2743 32.3755 24.2743 32.5604V35.3176C24.2743 35.4634 24.2088 35.595 24.0995 35.6843C24.0788 35.7011 24.0559 35.7168 24.0312 35.7307C24.0179 35.7381 24.0039 35.7447 23.9895 35.7511L23.9859 35.7526L23.9851 35.7528C23.9762 35.757 23.9671 35.761 23.9575 35.7642L23.9565 35.7647V35.7642H23.9563L23.956 35.7639L23.9538 35.7647C23.8322 35.8066 23.7045 35.7977 23.5948 35.7445C23.5802 35.7383 23.5659 35.7309 23.5516 35.722C23.5289 35.7082 23.5065 35.6912 23.4853 35.6725C23.472 35.6606 23.4577 35.6458 23.4426 35.6278L23.4315 35.615L23.4308 35.6143L23.4311 35.614L23.4269 35.6088L21.6444 33.3362V35.5418Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M20.6191 35.5011C20.6415 35.6845 20.5108 35.8517 20.3271 35.8742C20.1437 35.8966 19.977 35.7657 19.9545 35.5822L19.8367 34.6364H18.676C18.4911 34.6364 18.3412 34.4864 18.3412 34.3015C18.3412 34.1166 18.4911 33.9664 18.676 33.9664H19.7533L19.7228 33.7208L19.7223 33.7181C19.7213 33.7102 19.7205 33.7023 19.7203 33.6947C19.7117 33.6385 19.6991 33.5813 19.6816 33.5236C19.6621 33.459 19.6389 33.3995 19.6128 33.347C19.4799 33.0814 19.2395 32.8955 18.9354 32.8955H18.9322V32.8943C18.8743 32.8943 18.8176 32.9014 18.7638 32.9145C18.7133 32.9266 18.6632 32.9456 18.6141 32.9705C18.3572 33.1014 18.1851 33.3874 18.1481 33.7169L17.9385 35.5783C17.9183 35.762 17.7529 35.8944 17.5694 35.8742C17.3862 35.8539 17.2538 35.6885 17.274 35.505L17.4834 33.6436C17.5452 33.094 17.8503 32.608 18.3109 32.3738C18.4014 32.3279 18.5002 32.2909 18.6068 32.2655C18.7098 32.2404 18.8186 32.2273 18.9322 32.2271V32.2256H18.9354C19.5161 32.2256 19.9671 32.5649 20.2092 33.0487C20.2558 33.1419 20.2941 33.2368 20.3227 33.3327C20.3483 33.4183 20.3678 33.5095 20.3814 33.6054C20.3838 33.6158 20.3858 33.6261 20.387 33.6367L20.3875 33.6394L20.6191 35.5011Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M14.6994 32.8955V34.0303V35.2069H15.9932H15.9939V35.2082C16.1088 35.2082 16.2141 35.1603 16.2913 35.0831C16.3678 35.007 16.4151 34.9017 16.4151 34.7865H16.4141V34.786V34.785H16.4151C16.4151 34.677 16.3727 34.5769 16.3031 34.5015L16.2903 34.4891C16.2131 34.4117 16.1079 34.3639 15.9937 34.3639V34.3651H15.9932H15.6709H15.6699H15.5476C15.363 34.3651 15.2128 34.2147 15.2128 34.0303C15.2128 33.8458 15.363 33.6952 15.5476 33.6952H15.6699H15.6709H15.7C15.7969 33.6878 15.8855 33.6441 15.9523 33.5778L15.9528 33.5783L15.9533 33.5778C16.0258 33.5051 16.0711 33.4052 16.0711 33.2957H16.0699V33.2955V33.2952V33.2945H16.0711C16.0711 33.1855 16.0255 33.0854 15.9523 33.0122C15.8798 32.9397 15.7797 32.8943 15.6704 32.8943V32.8955H15.6699H14.6994ZM14.0297 34.0303V32.5752V32.575C14.0297 32.5276 14.0396 32.4825 14.0571 32.4418C14.0751 32.3982 14.1017 32.359 14.1348 32.3267L14.139 32.323L14.1387 32.3227C14.1954 32.2685 14.2709 32.2322 14.3587 32.2271C14.3653 32.2266 14.372 32.2261 14.3784 32.2263V32.2256H14.3794H15.6699H15.6704V32.2271C15.9648 32.2271 16.2324 32.3474 16.4257 32.541C16.6185 32.7338 16.7381 33.0003 16.7384 33.2945H16.7398V33.2952V33.2955V33.2957H16.7384C16.7384 33.5043 16.6777 33.6991 16.5739 33.8638C16.6427 33.9075 16.7065 33.9583 16.764 34.0155C16.7711 34.0226 16.7778 34.0303 16.7845 34.0379C16.9687 34.2325 17.0823 34.4958 17.0826 34.785H17.0838V34.786V34.7865H17.0826C17.0826 35.0866 16.9598 35.3593 16.7623 35.5568C16.566 35.7531 16.294 35.8751 15.9939 35.8754V35.8769H15.9932H14.3646C14.1796 35.8769 14.0297 35.7267 14.0297 35.5418V34.0303Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M13.7486 35.5418C13.7486 35.7267 13.5986 35.8766 13.4137 35.8766C13.2288 35.8766 13.0789 35.7267 13.0789 35.5418V32.5604C13.0789 32.3755 13.2288 32.2256 13.4137 32.2256C13.5986 32.2256 13.7486 32.3755 13.7486 32.5604V35.5418Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M11.6595 35.5418C11.6595 35.7267 11.5095 35.8766 11.3246 35.8766C11.1397 35.8766 10.9898 35.7267 10.9898 35.5418V32.8955H10.0368C9.85182 32.8955 9.7019 32.7454 9.7019 32.5604C9.7019 32.3755 9.85182 32.2256 10.0368 32.2256H11.3246H12.6125C12.7974 32.2256 12.9473 32.3755 12.9473 32.5604C12.9473 32.7454 12.7974 32.8955 12.6125 32.8955H11.6595V35.5418Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M10.1963 35.2069C10.3812 35.2069 10.5312 35.3568 10.5312 35.5418C10.5312 35.7267 10.3812 35.8769 10.1963 35.8769H9.27165H9.2714V35.8754C8.92472 35.8754 8.60984 35.7336 8.38176 35.5058C8.15491 35.2784 8.01387 34.9645 8.01362 34.6181H8.01239V34.6171V32.5607C8.01239 32.3758 8.16231 32.2256 8.34724 32.2256C8.53217 32.2256 8.68209 32.3758 8.68209 32.5607V34.6171V34.6181H8.68086C8.68086 34.7794 8.74768 34.9268 8.85543 35.0346C8.96244 35.1413 9.10965 35.2082 9.2714 35.2082V35.2069H9.27165H10.1963Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M7.03116 32.5604C7.03116 32.3755 7.18108 32.2256 7.36601 32.2256C7.55094 32.2256 7.7011 32.3755 7.7011 32.5604V34.3718V34.3723H7.69963C7.69963 34.7863 7.53023 35.1625 7.25776 35.435C6.98628 35.7065 6.61075 35.8749 6.197 35.8751V35.8766H6.19626H6.19576V35.8751C5.78176 35.8751 5.40549 35.706 5.13302 35.4333C4.86154 35.1618 4.69313 34.7863 4.69289 34.3728H4.69141V34.3718V32.5604C4.69141 32.3755 4.84157 32.2256 5.0265 32.2256C5.21143 32.2256 5.36135 32.3755 5.36135 32.5604V34.3718V34.3728H5.36012C5.36012 34.6013 5.45456 34.8102 5.60669 34.9623C5.75809 35.1135 5.96669 35.2079 6.19576 35.2079V35.2067H6.19626H6.197V35.2079C6.42582 35.2079 6.63491 35.1135 6.7868 34.9613C6.9382 34.8099 7.03239 34.6013 7.03239 34.3723H7.03116V34.3718V32.5604Z",
                                fill: secondary
                            }), node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M4.5672 35.5028C4.58889 35.6862 4.45747 35.8527 4.27426 35.8744C4.09057 35.8958 3.92413 35.7649 3.90243 35.5812L3.61542 33.1694L2.59213 35.5422C2.51914 35.7121 2.32237 35.7905 2.15273 35.7175C2.07062 35.6825 2.00996 35.6182 1.97742 35.5422V35.5422L0.954128 33.1694L0.666868 35.5812C0.645169 35.7649 0.478731 35.8958 0.295279 35.8744C0.111827 35.8527 -0.0193515 35.6862 0.00234713 35.5028L0.33547 32.7024C0.357169 32.5195 0.468621 32.3693 0.628155 32.2869C0.649114 32.2758 0.671059 32.2662 0.693251 32.2578C0.701881 32.2544 0.710265 32.2514 0.719142 32.2487C0.747498 32.2398 0.780539 32.2324 0.817772 32.2275V32.2278L0.820484 32.2275L0.823443 32.227C0.998265 32.2048 1.17062 32.2613 1.2912 32.3747C1.31536 32.3976 1.33829 32.424 1.3595 32.4534C1.3738 32.4736 1.38711 32.4945 1.39846 32.5162C1.40561 32.5283 1.41177 32.5404 1.4172 32.5535L2.28465 34.5648L3.1521 32.5535C3.22385 32.3875 3.37131 32.2741 3.54391 32.2361C3.57695 32.229 3.60999 32.2241 3.64229 32.2226C3.6672 32.2213 3.69185 32.2213 3.71528 32.2228L3.7175 32.2231V32.2231C3.72563 32.2236 3.73377 32.2243 3.74216 32.2253L3.74487 32.2258L3.74462 32.2268L3.7461 32.227C3.92511 32.2497 4.0775 32.3503 4.16306 32.4945H4.16281C4.18081 32.5246 4.19536 32.5567 4.2072 32.59C4.21435 32.6109 4.22076 32.6326 4.22544 32.6556C4.22889 32.6699 4.23161 32.6844 4.23333 32.6995L4.23383 32.7024L4.5672 35.5028Z",
                                fill: secondary
                            })));
                            var _ref, primary, secondary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "multibanco",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, multibanco_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Multibanco"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.SATISPAY] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, satispay_logo_excluded2);
                            var svg = (_ref = getLogoColors("satispay", SATISPAY_LOGO_COLORS, logoColor), node_node("svg", {
                                width: "94",
                                height: "22",
                                viewBox: "0 0 94 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("g", {
                                "clip-path": "url(#clip0_412_10190)"
                            }, node_node("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M18.5709 7.3559L21.9942 10.763C22.1295 10.8977 22.1295 11.1154 21.9942 11.2495L18.5709 14.6571L14.7157 18.4935L11.2934 21.8996C11.2288 21.9639 11.1408 22.0004 11.0492 22.0004H11.0467H4.69082C4.38308 22.0004 4.22895 21.6298 4.44666 21.4131L7.38016 18.4935L11.0477 14.8429L14.6587 11.2495L14.9029 11.0065L14.6587 10.763L11.0477 7.16959L7.38016 3.51898L4.43445 0.587257C4.21674 0.370579 4.37087 0 4.67862 0H11.0365C11.0386 0 11.0405 0.000540354 11.0424 0.00106265C11.0442 0.00155118 11.0459 0.00202391 11.0477 0.00202391C11.1352 0.00506145 11.2191 0.0389804 11.2811 0.100744L14.7157 3.51898L18.5709 7.3559ZM17.6612 0.587306C17.8789 0.370629 17.7248 4.96218e-05 17.4165 4.96218e-05H12.2876L15.2699 2.96721L17.6612 0.587306ZM54.6292 2.74786L53.1963 3.05364V3.67734V4.77946L53.2024 4.78655H53.4074L54.8342 4.48229V3.9978V2.74786H54.6292ZM51.1905 15.7936C50.6172 15.9976 49.962 16.1601 49.1431 16.1601C48.1395 16.1601 46.5636 15.9359 46.5636 13.6334V7.76491H45.2935V6.33878H46.5636V4.05658L48.0169 3.75081H48.1807V6.33878H51.3344V7.76491H48.1807V13.5929C48.1807 14.6318 49.0612 14.7138 49.4701 14.7138C49.8801 14.7138 50.5348 14.571 51.047 14.408L51.1905 15.7936ZM27.708 14.347H27.8723C28.8342 14.5506 29.6944 14.6933 30.5337 14.6933C31.8033 14.6933 32.7245 14.3875 32.7245 13.3077C32.7245 12.4342 31.7722 12.0948 30.7009 11.7131C29.3235 11.2222 27.7492 10.6613 27.7492 8.80455C27.7492 7.0114 29.4278 6.05356 31.5368 6.05356C32.3766 6.05356 33.2159 6.17557 33.9936 6.42009V7.92772H33.8298C32.9493 7.6432 32.1919 7.52069 31.5164 7.52069C30.5133 7.52069 29.469 7.74496 29.469 8.80455C29.469 9.62839 30.4099 9.9514 31.4732 10.3165C32.8551 10.7909 34.4438 11.3363 34.4438 13.1442C34.4438 15.4679 32.5607 16.1605 30.4721 16.1605C29.4482 16.1605 28.4247 16.0177 27.708 15.8542V14.347ZM57.3513 14.347H57.1875V15.8542C57.9042 16.0177 58.9277 16.1605 59.9516 16.1605C62.0402 16.1605 63.9233 15.4679 63.9233 13.1442C63.9233 11.3363 62.3344 10.7909 60.9524 10.3165C59.8889 9.9514 58.948 9.62839 58.948 8.80455C58.948 7.74496 59.9928 7.52069 60.9959 7.52069C61.6709 7.52069 62.4288 7.6432 63.3093 7.92772H63.4731V6.42009C62.6954 6.17557 61.8556 6.05356 61.0163 6.05356C58.9073 6.05356 57.2287 7.0114 57.2287 8.80455C57.2287 10.6613 58.803 11.2222 60.1804 11.7131C61.2517 12.0948 62.204 12.4342 62.204 13.3077C62.204 14.3875 61.2828 14.6933 60.0132 14.6933C59.1739 14.6933 58.3137 14.5506 57.3513 14.347ZM67.7307 14.4894C68.366 14.5912 69.041 14.6934 69.9012 14.6934C71.9074 14.6934 73.177 13.4298 73.177 10.9639C73.177 8.68165 72.4191 7.52081 70.7817 7.52081C69.8188 7.52081 68.7541 7.92784 67.7307 8.82492V10.3868V14.4894ZM66.0928 10.3868V20.969H66.2978L67.7307 20.6632V15.9155C68.4062 16.0583 69.041 16.1601 69.8396 16.1601C73.2589 16.1601 74.8963 13.8374 74.8963 10.7198C74.8963 7.54106 73.2589 6.05317 71.15 6.05317C69.7374 6.05317 68.6931 6.58322 67.7307 7.29654V6.05317H67.5257L66.0928 6.35895V10.3868ZM85.168 6.33864L88.4692 15.7727L88.6122 16.16C87.9367 17.8104 87.4865 18.5237 85.7051 19.7868L86.6263 20.9689C88.3868 19.8688 89.452 18.6867 90.3121 16.2415L93.9232 6.33864H92.0599L89.513 13.7558H89.3701L87.0511 6.33864H85.168ZM82.102 11.4531L79.461 11.8404C78.7652 11.9422 77.9864 12.2277 77.9864 13.3273C77.9864 14.1226 78.5403 14.6729 79.3791 14.6729C80.28 14.6729 81.3039 14.1019 82.102 13.5318V11.4531ZM83.74 15.8545L82.4093 16.1198H82.1839V14.7747H82.1427C81.2831 15.4267 80.2388 16.0996 78.8262 16.0996C77.5774 16.0996 76.2671 15.2025 76.2671 13.4498C76.2671 11.0871 78.3964 10.7606 79.5429 10.5971L82.102 10.2508V9.59923C82.102 7.96858 81.3243 7.52054 79.9117 7.52054C79.3791 7.52054 78.0485 7.68356 76.9635 8.1726L76.7788 6.66497C77.6802 6.31818 79.0928 6.05341 80.2189 6.05341C82.245 6.05341 83.74 6.88873 83.74 9.59923V15.8545ZM39.0495 14.6729C39.9504 14.6729 40.9743 14.1018 41.7725 13.5318V11.4531L39.1314 11.8404C38.4356 11.9421 37.6568 12.2276 37.6568 13.3277C37.6568 14.1231 38.2102 14.6729 39.0495 14.6729ZM39.8888 6.05335C41.9154 6.05335 43.4104 6.88867 43.4104 9.59917V15.8545L42.0797 16.1197H41.8543V14.7746H41.8131C40.9535 15.4267 39.9092 16.0995 38.4966 16.0995C37.2478 16.0995 35.9375 15.2024 35.9375 13.4497C35.9375 11.0871 38.0668 10.7605 39.2133 10.5975L41.7725 10.2512V9.59917C41.7725 7.96902 40.9947 7.52048 39.5821 7.52048C39.0495 7.52048 37.7189 7.6835 36.6339 8.17254L36.4492 6.66491C37.3501 6.31863 38.7632 6.05335 39.8888 6.05335ZM53.1958 16.1196H53.2026L53.1958 16.1123V16.1196ZM53.1963 6.35903L54.6292 6.05325H54.8342V15.3309V15.8154L53.4074 16.1191H53.2024L53.1963 16.1126V15.0104V6.35903ZM6.82559 4.07028L10.4936 7.72089L7.43701 10.763L7.19234 11.0065L7.43701 11.2495L10.4936 14.2916L6.82559 17.9422L3.52483 14.6571L0.10148 11.2495C-0.0338265 11.1153 -0.0338265 10.8971 0.10148 10.763L3.52483 7.35588L6.82559 4.07028ZM15.2694 19.0448L12.2998 22.0004H17.4043C17.7121 22.0004 17.8667 21.6298 17.649 21.4131L15.2694 19.0448Z",
                                fill: _ref.primary
                            })), node_node("defs", null, node_node("clipPath", {
                                id: "clip0_412_10190"
                            }, node_node("rect", {
                                width: "93.9231",
                                height: "22",
                                fill: "white"
                            })))));
                            var _ref;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "satispay",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, satispay_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Satispay"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref[FUNDING.PAIDY] = _extends({}, DEFAULT_APM_FUNDING_CONFIG, {
                    automatic: !1,
                    shippingChange: !1,
                    layouts: [ BUTTON_LAYOUT.VERTICAL ],
                    Logo: function(_ref) {
                        return function(_ref3) {
                            var _ref3$logoColor = _ref3.logoColor, logoColor = void 0 === _ref3$logoColor ? "black" : _ref3$logoColor, props = _objectWithoutPropertiesLoose(_ref3, paidy_logo_excluded2);
                            var svg = (primary = (_ref = getLogoColors("paidy", PAIDY_LOGO_COLORS, logoColor)).primary, 
                            secondary = _ref.secondary, tertiary = _ref.tertiary, node_node("svg", {
                                width: "79",
                                height: "22",
                                viewBox: "0 0 79 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, node_node("path", {
                                d: "M9.8735 9.10432C9.78191 8.9761 8.7561 7.73047 8.7561 7.73047V15.6622C8.7561 16.3033 9.28733 16.8346 9.92846 16.8346C10.5696 16.8346 11.1008 16.3033 11.1008 15.6622L11.0825 10.4415C10.7345 10.0935 10.4047 9.72714 9.8735 9.10432Z",
                                fill: "url(#paint0_linear_553_11067)"
                            }), node_node("path", {
                                d: "M20.6261 13.7752C20.2231 13.7752 19.8385 13.6836 19.4904 13.5187C19.4721 13.7752 19.5637 14.5629 18.3181 15.4604C18.2265 15.5154 13.244 18.6844 12.1998 19.2157C10.8443 19.8934 9.34222 19.6919 8.46295 19.234C8.1149 19.0874 3.7552 16.4863 3.57202 16.358C3.2423 16.1199 2.71107 15.6803 2.54621 15.0941C2.39967 14.5995 2.39967 13.8118 2.39967 13.8118V7.21732C2.39967 6.19151 2.69276 4.3597 4.5612 3.5537C6.55787 2.82098 7.63863 3.97502 8.68276 5.23897C8.75604 5.33056 10.7893 8.02331 11.6869 8.81099C12.841 9.8368 14.0133 10.368 15.4055 10.368C19.179 10.368 20.6078 7.38218 20.6078 5.18401C20.6078 2.3264 18.2631 0 15.3872 0C13.6103 0 11.9617 0.897585 11.0092 2.38135C11.1923 2.58285 11.632 3.13239 11.7052 3.20566C11.7236 3.22398 12.4746 4.19484 12.5112 4.24979C12.6395 4.08493 13.7202 2.38135 15.3872 2.38135C17.0908 2.38135 18.1898 3.70025 18.1898 5.18401C18.1898 6.72273 16.9442 7.96836 15.4238 7.96836C14.5262 7.96836 13.9584 7.65695 13.244 7.01582C12.5296 6.37469 10.7527 4.02998 10.7527 4.02998C10.6062 3.82848 9.36053 2.34471 8.48127 1.75853C7.38218 1.02581 5.84346 0.567859 3.77352 1.26395C1.7219 1.96003 0 4.17652 0 7.23564L0.0183178 13.8301C0.0183178 14.0866 -2.83879e-07 14.9109 0.201498 15.6803C0.531224 16.9625 1.15404 17.6769 2.41798 18.4646C3.02248 18.8127 6.50291 20.8826 7.03414 21.1757C8.05995 21.7252 9.06744 22 10.423 22C11.4671 22 12.4929 21.7435 13.3539 21.3039C14.746 20.5895 19.2706 17.6953 19.5637 17.5121C20.8826 16.6145 21.9817 15.204 21.8535 13.4638C21.5054 13.6653 21.0841 13.7752 20.6261 13.7752Z",
                                fill: "url(#paint1_linear_553_11067)"
                            }), node_node("path", {
                                d: "M20.6261 12.4928C21.3954 12.4928 22.0182 11.87 22.0182 11.119C22.0182 10.3679 21.3954 9.74512 20.6261 9.74512C19.8567 9.74512 19.2339 10.3679 19.2339 11.119C19.2522 11.8883 19.8567 12.4928 20.6261 12.4928Z",
                                fill: "url(#paint2_linear_553_11067)"
                            }), node_node("path", {
                                d: "M30.0967 21.1573C29.364 21.1573 28.7961 20.5528 28.7961 19.8567V10.258C28.7961 8.44453 30.0601 5.58691 33.8153 5.58691C34.4564 5.58691 38.4864 5.58691 38.4864 10.8625C38.4864 15.9733 35.5372 16.2663 34.3282 16.2663C32.7345 16.2663 31.6904 15.2772 31.379 14.7093V19.8567C31.3973 20.5528 30.8294 21.1573 30.0967 21.1573ZM35.812 10.9541C35.812 9.96493 35.6471 9.17726 35.2441 8.6094C34.8594 8.04154 34.2916 7.78508 33.5955 7.78508C32.8994 7.78508 32.3315 8.04154 31.9469 8.6094C31.5988 9.08567 31.4339 9.87334 31.4339 10.9541C31.4339 11.9433 31.5988 12.676 32.0018 13.1523C32.3865 13.7201 32.9543 13.9766 33.6504 13.9766C34.2916 13.9766 34.8594 13.7201 35.2441 13.1523C35.6471 12.6394 35.812 11.8883 35.812 10.9541Z",
                                fill: tertiary
                            }), node_node("path", {
                                d: "M53.5619 16.1016C52.7742 16.1016 52.1331 15.4971 52.1331 14.7644V7.19904C52.1331 6.46631 52.7742 5.86182 53.5619 5.86182C54.3495 5.86182 54.9907 6.46631 54.9907 7.19904V14.7644C54.9907 15.4971 54.3312 16.1016 53.5619 16.1016Z",
                                fill: tertiary
                            }), node_node("path", {
                                d: "M53.5804 1.13574C52.7561 1.13574 52.0967 1.81351 52.0967 2.65614C52.0967 3.49877 52.7744 4.17654 53.5804 4.17654C54.3864 4.17654 55.0642 3.49877 55.0642 2.65614C55.0642 1.81351 54.4048 1.13574 53.5804 1.13574Z",
                                fill: tertiary
                            }), node_node("path", {
                                d: "M65.6702 0.824219C64.9375 0.824219 64.3696 1.42871 64.3696 2.1248V7.18059C64.0582 6.70432 63.6369 6.26468 63.1056 5.97159C62.6294 5.71514 62.0615 5.58692 61.4204 5.58692C60.2114 5.58692 59.2222 6.09982 58.4345 7.10732C57.7018 8.09649 57.3171 9.39707 57.3171 11.0091C57.3171 12.6577 57.7018 13.9583 58.4345 14.9108C58.8192 15.3871 59.3504 15.7718 59.9916 15.9916C60.6327 16.2114 61.2922 16.3396 61.9882 16.3396C63.2522 16.3396 64.3696 16.0282 65.4504 15.3871C66.4945 14.746 67.044 13.482 67.044 11.6685V2.14312C67.0257 1.37376 66.4212 0.824219 65.6702 0.824219ZM63.8567 13.2439C63.472 13.8117 62.9408 14.0682 62.2081 14.0682C61.4753 14.0682 60.9075 13.8117 60.5594 13.2439C60.1748 12.676 59.9916 11.9067 59.9916 10.8992C59.9916 9.98325 60.1564 9.25053 60.5594 8.73762C60.9441 8.16976 61.4753 7.91331 62.1531 7.91331C62.8492 7.91331 63.4171 8.16976 63.8017 8.70099C64.1864 9.26885 64.3696 10.0016 64.3696 10.8992C64.3879 11.8883 64.2047 12.7126 63.8567 13.2439Z",
                                fill: tertiary
                            }), node_node("path", {
                                d: "M48.4695 16.1384C49.2022 16.1384 49.7701 15.5339 49.7701 14.8378V10.1301C49.7701 8.3166 48.5061 5.45898 44.7509 5.45898C44.1098 5.45898 40.0798 5.45898 40.0798 10.7346C40.0798 15.8453 43.029 16.1384 44.238 16.1384C45.8317 16.1384 46.8758 15.1492 47.1872 14.5814V14.8378C47.1689 15.5156 47.7185 16.1384 48.4695 16.1384ZM42.7543 10.8079C42.7543 9.81868 42.9191 9.03101 43.3221 8.46315C43.7068 7.89529 44.2747 7.63883 44.9708 7.63883C45.6668 7.63883 46.2347 7.89529 46.6194 8.46315C46.9674 8.93942 47.1323 9.72709 47.1323 10.8079C47.1323 11.797 46.9674 12.5298 46.5644 13.006C46.1798 13.5739 45.6119 13.8303 44.9158 13.8303C44.2747 13.8303 43.7068 13.5739 43.3221 13.006C42.9191 12.4931 42.7543 11.7604 42.7543 10.8079Z",
                                fill: tertiary
                            }), node_node("path", {
                                d: "M70.2682 20.3878C70.2682 20.7725 70.5796 21.0839 70.9094 21.1205C71.697 21.2121 72.9427 21.2121 73.6387 20.6443C74.115 20.2596 74.4997 19.6917 74.8111 18.8308L78.1816 7.52854C78.493 6.66759 77.8336 5.80664 76.9177 5.80664C76.3132 5.80664 75.8003 6.19132 75.6537 6.75918L73.8402 13.0789L72.0268 6.79582C71.8619 6.19132 71.3307 5.80664 70.6895 5.80664C69.737 5.80664 69.0959 6.75918 69.389 7.62013L72.3382 17.3653C72.503 17.9332 72.4664 18.3179 72.1733 18.5377C71.8619 18.7942 71.4772 18.9224 70.9643 18.9224C70.5796 18.9224 70.2316 19.2704 70.2316 19.6551V20.3878H70.2682Z",
                                fill: tertiary
                            }), node_node("defs", null, node_node("linearGradient", {
                                id: "paint0_linear_553_11067",
                                x1: "1.8347",
                                y1: "19.3989",
                                x2: "20.4582",
                                y2: "2.27174",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                "stop-color": primary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": secondary
                            })), node_node("linearGradient", {
                                id: "paint1_linear_553_11067",
                                x1: "1.92847",
                                y1: "25.6451",
                                x2: "14.6235",
                                y2: "3.65436",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                offset: "0.00901231",
                                "stop-color": primary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": secondary
                            })), node_node("linearGradient", {
                                id: "paint2_linear_553_11067",
                                x1: "6.07116",
                                y1: "24.5072",
                                x2: "25.4062",
                                y2: "6.72557",
                                gradientUnits: "userSpaceOnUse"
                            }, node_node("stop", {
                                "stop-color": primary
                            }), node_node("stop", {
                                offset: "1",
                                "stop-color": secondary
                            })))));
                            var _ref, primary, secondary, tertiary;
                            return node_node(SVGLogo, _extends({}, props, {
                                name: "paidy",
                                logoColor: logoColor,
                                render: function() {
                                    return svg;
                                }
                            }));
                        }({
                            logoColor: _ref.logoColor,
                            optional: _ref.optional
                        });
                    },
                    Label: function(_ref2) {
                        var logo = _ref2.logo, opts = _objectWithoutPropertiesLoose(_ref2, paidy_config_excluded);
                        var apmLogo = node_node(Fragment, null, logo, node_node(Space, null), node_node(Text, {
                            animate: !0,
                            optional: !0
                        }, "Paidy"));
                        return node_node(BasicLabel, _extends({}, opts, {
                            logo: apmLogo
                        }));
                    }
                }), _ref;
                var _logoColors;
            }.apply(void 0, args);
        }(getFundingConfig);
    }
    function funding_isFundingEligible(source, _ref) {
        var layout = _ref.layout, platform = _ref.platform, fundingSource = _ref.fundingSource, fundingEligibility = _ref.fundingEligibility, components = _ref.components, onShippingChange = _ref.onShippingChange, onShippingAddressChange = _ref.onShippingAddressChange, onShippingOptionsChange = _ref.onShippingOptionsChange, flow = _ref.flow, wallet = _ref.wallet, applePaySupport = _ref.applePaySupport, supportsPopups = _ref.supportsPopups, supportedNativeBrowser = _ref.supportedNativeBrowser, experiment = _ref.experiment;
        if (!fundingEligibility[source] || !fundingEligibility[source].eligible) return !1;
        var fundingConfig = getFundingConfig()[source];
        if (!fundingConfig) return !1;
        if (!fundingConfig.enabled) return !1;
        if (!fundingConfig.automatic && source !== fundingSource) return !1;
        if (fundingConfig.eligible && !fundingConfig.eligible({
            components: components,
            experiment: experiment,
            fundingSource: fundingSource,
            fundingEligibility: fundingEligibility,
            layout: layout,
            wallet: wallet
        })) return !1;
        if (layout && fundingConfig.layouts && -1 === fundingConfig.layouts.indexOf(layout) && (!fundingSource || layout !== BUTTON_LAYOUT.HORIZONTAL)) return !1;
        if (fundingConfig.platforms && -1 === fundingConfig.platforms.indexOf(platform)) return !1;
        if (fundingConfig.requires) {
            var required = fundingConfig.requires({
                platform: platform
            });
            if (!0 === required.popup && !1 === supportsPopups) return !1;
            if (!0 === required.applepay && !1 === applePaySupport) return !1;
            if (!0 === required.native && !1 === supportedNativeBrowser) return !1;
        }
        return !(!1 === fundingConfig.shippingChange && (onShippingChange || onShippingAddressChange || onShippingOptionsChange) || fundingConfig.flows && flow && -1 === fundingConfig.flows.indexOf(flow));
    }
    function getComponentScript() {
        return function() {
            var SELECTOR_OPTIONAL = "[optional]";
            function toArray(item) {
                return [].slice.call(item);
            }
            function elementArray(elements) {
                return toArray(elements).filter((function(el) {
                    return "style" !== el.tagName.toLowerCase();
                }));
            }
            function getElements(selector, parent) {
                return elementArray((parent = parent || document).querySelectorAll(selector));
            }
            function showElement(el) {
                el.classList.remove("hidden");
            }
            function getOptionalIndex(element) {
                return parseInt(element.getAttribute("optional") || 0, 10);
            }
            function getElementsTotalWidth(elements) {
                return function(arr) {
                    var result = 0;
                    for (var _i2 = 0; _i2 < arr.length; _i2++) result += arr[_i2];
                    return result;
                }(elements.map((function(child) {
                    return child.offsetWidth;
                })));
            }
            var children = function(arr) {
                var result = [];
                for (var _i4 = 0; _i4 < arr.length; _i4++) {
                    var el = arr[_i4];
                    -1 === result.indexOf(el) && result.push(el);
                }
                return result;
            }(getElements(SELECTOR_OPTIONAL).map((function(element) {
                return element.parentElement;
            })).filter(Boolean)).map((function(optionalParent) {
                return {
                    optionalParent: optionalParent,
                    allChildren: elementArray(optionalParent.children),
                    optionalChildren: toArray(getElements(SELECTOR_OPTIONAL, optionalParent)).sort((function(first, second) {
                        return getOptionalIndex(first) - getOptionalIndex(second);
                    }))
                };
            }));
            function toggleOptionals() {
                for (var _i6 = 0; _i6 < children.length; _i6++) {
                    var _children$_i = children[_i6], optionalChildren = _children$_i.optionalChildren;
                    var parentWidth = _children$_i.optionalParent.offsetWidth;
                    var usedWidth = getElementsTotalWidth(_children$_i.allChildren) - getElementsTotalWidth(optionalChildren);
                    for (var _i8 = 0; _i8 < optionalChildren.length; _i8++) {
                        var optionalChild = optionalChildren[_i8];
                        (usedWidth += optionalChild.offsetWidth) > parentWidth ? optionalChild.classList.add("hidden") : showElement(optionalChild);
                    }
                }
            }
            var setDomReady = function(handler) {
                var called = !1;
                return function() {
                    if (!called) {
                        called = !0;
                        handler.apply(void 0, arguments);
                    }
                };
            }(function(handler, time) {
                void 0 === time && (time = 50);
                var timeout;
                return function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    clearTimeout(timeout);
                    timeout = setTimeout((function() {
                        handler.apply(void 0, args);
                    }), time);
                };
            }((function() {
                window.addEventListener("resize", toggleOptionals);
                setTimeout(toggleOptionals);
                document.body && document.body.classList.add("dom-ready");
            })));
            var load = function() {
                toggleOptionals();
                setDomReady();
            };
            toggleOptionals();
            document.addEventListener("DOMContentLoaded", load);
            window.addEventListener("load", load);
            window.addEventListener("resize", load);
        };
    }
    function Script(_ref) {
        return node_node("script", {
            nonce: _ref.nonce,
            innerHTML: "(" + getComponentScript().toString() + ")()"
        });
    }
    function ButtonDesignExperimentScriptWrapper(_ref) {
        var nonce = _ref.nonce, buttonDesignScript = _ref.buttonDesignScript;
        var scripts = "\n        const scriptFns = " + getComponentScript().toString() + ";\n        scriptFns();\n        function onDomLoad(){ " + buttonDesignScript + " };\n        document.addEventListener('DOMContentLoaded', onDomLoad);\n    ";
        return node_node("script", {
            nonce: nonce,
            innerHTML: "(function(){ " + scripts + "})()"
        });
    }
    var _MINIMUM_SIZE, _MAXIMUM_SIZE, _BUTTON_SIZE_STYLE;
    (_MINIMUM_SIZE = {})[BUTTON_LAYOUT.HORIZONTAL] = "small", _MINIMUM_SIZE[BUTTON_LAYOUT.VERTICAL] = "medium";
    (_MAXIMUM_SIZE = {})[BUTTON_LAYOUT.HORIZONTAL] = "huge", _MAXIMUM_SIZE[BUTTON_LAYOUT.VERTICAL] = "huge";
    var BUTTON_SIZE_STYLE = ((_BUTTON_SIZE_STYLE = {}).tiny = {
        defaultWidth: 75,
        defaultHeight: 25,
        minWidth: 75,
        maxWidth: 150,
        minHeight: 25,
        maxHeight: 30
    }, _BUTTON_SIZE_STYLE.small = {
        defaultWidth: 150,
        defaultHeight: 25,
        minWidth: 150,
        maxWidth: 200,
        minHeight: 25,
        maxHeight: 55
    }, _BUTTON_SIZE_STYLE.medium = {
        defaultWidth: 250,
        defaultHeight: 35,
        minWidth: 200,
        maxWidth: 300,
        minHeight: 35,
        maxHeight: 55
    }, _BUTTON_SIZE_STYLE.large = {
        defaultWidth: 350,
        defaultHeight: 45,
        minWidth: 300,
        maxWidth: 500,
        minHeight: 30,
        maxHeight: 55
    }, _BUTTON_SIZE_STYLE.huge = {
        defaultWidth: 500,
        defaultHeight: 55,
        minWidth: 500,
        maxWidth: 750,
        minHeight: 40,
        maxHeight: 55
    }, _BUTTON_SIZE_STYLE);
    var DESIGN_MAP = {
        "run-divide-logo-animation": {
            designFn: function(designProps, configuration) {
                var min = configuration.min, max = configuration.max, _configuration$cssUti2 = configuration.cssUtilClasses;
                var paypalLabelContainerElement = designProps.paypalLabelContainerElement, paypalLogoStartingLeftPosition = designProps.paypalLogoStartingLeftPosition, designContainer = designProps.designContainer;
                var designCss = "\n        ." + _configuration$cssUti2.DOM_READY + " .personalized-design-container img." + _configuration$cssUti2.PAYPAL_LOGO + "." + _configuration$cssUti2.PAYPAL_LOGO_PP + "{\n            animation: 3s divide-logo-animation-left-side 2s infinite alternate;\n        }\n        \n        .personalized-design-container .personalized-label-container {\n            animation: 3s divide-logo-animation-right-side 2s infinite alternate;\n        }\n\n        @keyframes divide-logo-animation-left-side {\n            0% {\n                position: fixed;\n                left: " + paypalLogoStartingLeftPosition + ";\n            }\n            33% {\n                position: fixed;\n                left: " + paypalLogoStartingLeftPosition + ";\n            }\n            66% {\n                position: fixed;\n                left: 0%;\n            }\n            100% {\n                position: fixed;\n                left: 0%;\n            }\n        }\n        \n        @keyframes divide-logo-animation-right-side {\n            0%{\n                opacity: 0;\n                position: fixed;\n                right: 45%;\n            }\n            33%{\n                opacity: 0;\n                position: fixed;\n                right: 45%;\n            }\n            66% {\n                opacity: 1;\n                position: fixed;\n                right: 0%;\n            }\n            100% {\n                opacity: 1;\n                position: fixed;\n                right: 0%;\n            }\n        }\n    ";
                if (paypalLabelContainerElement) {
                    var style = document.createElement("style");
                    paypalLabelContainerElement.appendChild(style);
                    style.appendChild(document.createTextNode(designCss));
                    window.addEventListener("resize", (function() {
                        (designContainer.offsetWidth > max || designContainer.offsetWidth < min) && paypalLabelContainerElement.contains(style) ? paypalLabelContainerElement.removeChild(style) : (designContainer.offsetWidth <= max || designContainer.offsetWidth >= min) && !paypalLabelContainerElement.contains(style) && paypalLabelContainerElement.appendChild(style);
                    }));
                }
            },
            getValidDesignProps: function(document, configuration) {
                var _configuration$cssUti = configuration.cssUtilClasses, PAYPAL_BUTTON_LABEL = _configuration$cssUti.PAYPAL_BUTTON_LABEL, PAYPAL_LOGO = _configuration$cssUti.PAYPAL_LOGO, PAYPAL_LOGO_PP = _configuration$cssUti.PAYPAL_LOGO_PP;
                var designContainer = document && document.querySelector(".personalized-design-container") || null;
                if (!designContainer) return null;
                var designContainerWidth = designContainer.offsetWidth;
                if (designContainerWidth < configuration.min || designContainerWidth > configuration.max) return null;
                var paypalLabelContainerElement = designContainer.querySelector("." + PAYPAL_BUTTON_LABEL) || null;
                if (!paypalLabelContainerElement) return null;
                var paypalLogoElement = paypalLabelContainerElement && paypalLabelContainerElement.querySelector("." + PAYPAL_LOGO + "." + PAYPAL_LOGO_PP) || null;
                return paypalLogoElement ? {
                    paypalLabelContainerElement: paypalLabelContainerElement,
                    paypalLogoStartingLeftPosition: paypalLogoElement.offsetLeft / paypalLabelContainerElement.offsetWidth * 100 + "%",
                    designContainer: designContainer
                } : null;
            },
            designConfig: {
                min: BUTTON_SIZE_STYLE.large.minWidth,
                max: BUTTON_SIZE_STYLE.huge.maxWidth,
                cssUtilClasses: {
                    DOM_READY: CLASS.DOM_READY,
                    PAYPAL_LOGO: "paypal-logo",
                    PAYPAL_BUTTON_LABEL: CLASS.BUTTON_LABEL,
                    PAYPAL_LOGO_PP: CLASS.LOGO_PP
                }
            },
            ButtonDesignComponent: function(_ref) {
                return node_node(Fragment, null, node_node("div", {
                    class: "personalized-label-container",
                    "data-design-experiment": "104519"
                }, " ", node_node("span", null, _ref.designLabelText)), node_node("style", {
                    innerHTML: "\n              ." + CLASS.DOM_READY + ' .personalized-design-container img.paypal-logo{\n                  position: relative;\n              }\n              \n              .personalized-design-container .personalized-label-container {\n                  position: absolute;\n                  opacity: 0; \n                  color: #142C8E;\n                  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                  font-size: 14px;\n              }\n\n              .personalized-design-container .personalized-label-container span {\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: space-around;\n              }\n          '
                }), ";");
            }
        },
        "run-add-label-text-next-to-logo-design": {
            designFn: function(designProps, configuration) {
                var min = configuration.min, max = configuration.max, _configuration$cssUti = configuration.cssUtilClasses;
                var paypalLabelContainerElement = designProps.paypalLabelContainerElement, designContainer = designProps.designContainer;
                var designCss = "\n        ." + _configuration$cssUti.DOM_READY + " .personalized-design-container img." + _configuration$cssUti.PAYPAL_LOGO + "{\n            position: fixed;\n            left: 0%;\n        }\n\n        .personalized-design-container .personalized-label-container {\n            position: fixed;\n            opacity: 1;\n            right:0%;\n        }\n    ";
                if (paypalLabelContainerElement) {
                    var style = document.createElement("style");
                    paypalLabelContainerElement.appendChild(style);
                    style.appendChild(document.createTextNode(designCss));
                    window.addEventListener("resize", (function() {
                        (designContainer.offsetWidth > max || designContainer.offsetWidth < min) && paypalLabelContainerElement.contains(style) ? paypalLabelContainerElement.removeChild(style) : (designContainer.offsetWidth <= max || designContainer.offsetWidth >= min) && !paypalLabelContainerElement.contains(style) && paypalLabelContainerElement.appendChild(style);
                    }));
                }
            },
            getValidDesignProps: function(document, configuration) {
                var PAYPAL_LABEL_CONTAINER = configuration.cssUtilClasses.PAYPAL_LABEL_CONTAINER;
                var designContainer = document && document.querySelector(".personalized-design-container") || null;
                if (!designContainer) return null;
                var designContainerWidth = designContainer.offsetWidth;
                if (designContainerWidth < configuration.min || designContainerWidth > configuration.max) return null;
                var paypalLabelContainerElement = designContainer && designContainer.querySelector("." + PAYPAL_LABEL_CONTAINER) || null;
                return paypalLabelContainerElement ? {
                    paypalLabelContainerElement: paypalLabelContainerElement,
                    designContainer: designContainer
                } : null;
            },
            designConfig: {
                cssUtilClasses: {
                    PAYPAL_LABEL_CONTAINER: CLASS.BUTTON_LABEL,
                    PAYPAL_LOGO: "paypal-logo",
                    DOM_READY: CLASS.DOM_READY
                },
                min: BUTTON_SIZE_STYLE.large.minWidth,
                max: BUTTON_SIZE_STYLE.huge.maxWidth
            },
            ButtonDesignComponent: function(_ref) {
                return node_node(Fragment, null, node_node("div", {
                    class: "personalized-label-container",
                    "data-design-experiment": "104519"
                }, " ", node_node("span", null, _ref.designLabelText)), node_node("style", {
                    innerHTML: "\n              ." + CLASS.DOM_READY + ' .personalized-design-container img.paypal-logo{\n                  position: relative;\n              }\n              \n              .personalized-design-container .personalized-label-container {\n                  position: absolute;\n                  opacity: 0; \n                  color: #142C8E;\n                  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n                  font-size: 14px;\n              }\n\n              .personalized-design-container .personalized-label-container span {\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: space-around;\n              }\n          '
                }), ";");
            }
        }
    };
    var CONTROL_MAP = {
        "large-button-design-control": "104519",
        "small-button-design-control": "104530"
    };
    function getButtonDesign(personalization) {
        if (!personalization || "object" != typeof personalization || !personalization.buttonDesign) return {};
        var _personalization$butt = personalization.buttonDesign, _personalization$butt2 = void 0 === _personalization$butt ? {} : _personalization$butt, _personalization$butt3 = _personalization$butt2.id, designId = void 0 === _personalization$butt3 ? "" : _personalization$butt3, _personalization$butt4 = _personalization$butt2.text, designLabelText = void 0 === _personalization$butt4 ? "Safe and easy way to pay" : _personalization$butt4;
        if (CONTROL_MAP[designId]) return {
            buttonDesignContainerClass: "",
            buttonDesignScript: "",
            buttonDesignComponent: node_node("div", {
                "data-design-experiment": CONTROL_MAP[designId]
            })
        };
        if (!DESIGN_MAP[designId]) return {};
        var _DESIGN_MAP$designId = DESIGN_MAP[designId], ButtonDesignComponent = _DESIGN_MAP$designId.ButtonDesignComponent;
        var designContent = {
            designLabelText: designLabelText
        };
        return {
            buttonDesignContainerClass: "personalized-design-container",
            buttonDesignScript: (designFn = _DESIGN_MAP$designId.designFn, getValidDesignProps = _DESIGN_MAP$designId.getValidDesignProps, 
            designConfig = _DESIGN_MAP$designId.designConfig, "\n        const designProps = " + getValidDesignProps.toString() + "( document, " + JSON.stringify(designConfig) + ")\n        if (designProps) {\n            const applyDesign = " + designFn.toString() + "\n            applyDesign(designProps, " + JSON.stringify(designConfig) + ")\n        }\n    "),
            buttonDesignComponent: ButtonDesignComponent(designContent)
        };
        var designFn, getValidDesignProps, designConfig;
    }
    var DEFAULT_PROPS = {
        LOCALE: {
            country: COUNTRY.US,
            lang: "en"
        },
        COMMIT: !0,
        VAULT: !1,
        INTENT: "capture",
        ENV: ENV.PRODUCTION,
        PLATFORM: PLATFORM.DESKTOP
    };
    var COUNTRIES = util_values(COUNTRY);
    var FUNDING_SOURCES = util_values(FUNDING);
    var ENVS = util_values(ENV);
    var PLATFORMS = util_values(PLATFORM);
    function normalizeButtonProps(props) {
        if (!props) throw new Error("Expected props");
        var clientID = props.clientID, fundingSource = props.fundingSource, _props$style = props.style, style = void 0 === _props$style ? {} : _props$style, _props$remembered = props.remembered, remembered = void 0 === _props$remembered ? [] : _props$remembered, _props$locale = props.locale, locale = void 0 === _props$locale ? DEFAULT_PROPS.LOCALE : _props$locale, _props$env = props.env, env = void 0 === _props$env ? DEFAULT_PROPS.ENV : _props$env, _props$platform = props.platform, platform = void 0 === _props$platform ? DEFAULT_PROPS.PLATFORM : _props$platform, _props$commit = props.commit, commit = void 0 === _props$commit ? DEFAULT_PROPS.COMMIT : _props$commit, fundingEligibility = props.fundingEligibility, _props$sessionID = props.sessionID, sessionID = void 0 === _props$sessionID ? util_uniqueID() : _props$sessionID, _props$buttonSessionI = props.buttonSessionID, buttonSessionID = void 0 === _props$buttonSessionI ? util_uniqueID() : _props$buttonSessionI, _props$components = props.components, components = void 0 === _props$components ? [ "buttons" ] : _props$components, nonce = props.nonce, onShippingChange = props.onShippingChange, onShippingAddressChange = props.onShippingAddressChange, onShippingOptionsChange = props.onShippingOptionsChange, personalization = props.personalization, clientAccessToken = props.clientAccessToken, content = props.content, wallet = props.wallet, _props$flow = props.flow, flow = void 0 === _props$flow ? "purchase" : _props$flow, _props$experiment = props.experiment, experiment = void 0 === _props$experiment ? {} : _props$experiment, vault = props.vault, userIDToken = props.userIDToken, applePay = props.applePay, _props$applePaySuppor = props.applePaySupport, applePaySupport = void 0 !== _props$applePaySuppor && _props$applePaySuppor, _props$supportsPopups = props.supportsPopups, supportsPopups = void 0 !== _props$supportsPopups && _props$supportsPopups, _props$supportedNativ = props.supportedNativeBrowser, supportedNativeBrowser = void 0 !== _props$supportedNativ && _props$supportedNativ, _props$showPayLabel = props.showPayLabel, showPayLabel = void 0 === _props$showPayLabel || _props$showPayLabel;
        var country = locale.country, lang = locale.lang;
        if (!country || -1 === COUNTRIES.indexOf(country)) throw new Error("Expected valid country, got " + (country || "undefined"));
        if (!lang || -1 === COUNTRY_LANGS[country].indexOf(lang)) throw new Error("Expected valid lang, got " + (lang || "undefined"));
        if (remembered.some((function(source) {
            return -1 === FUNDING_SOURCES.indexOf(source);
        }))) throw new Error("Expected valid funding sources, got " + JSON.stringify(remembered));
        if (-1 === ENVS.indexOf(env)) throw new Error("Expected valid env, got " + (env || "undefined"));
        if (!fundingEligibility) throw new Error("Expected fundingEligibility");
        if (-1 === PLATFORMS.indexOf(platform)) throw new Error("Expected valid platform, got " + (platform || "undefined"));
        if (fundingSource) {
            if (-1 === SUPPORTED_FUNDING_SOURCES.indexOf(fundingSource)) throw new Error("Invalid funding source: " + fundingSource);
            if (!funding_isFundingEligible(fundingSource, {
                platform: platform,
                fundingSource: fundingSource,
                fundingEligibility: fundingEligibility,
                components: components,
                onShippingChange: onShippingChange,
                onShippingAddressChange: onShippingAddressChange,
                onShippingOptionsChange: onShippingOptionsChange,
                wallet: wallet,
                flow: flow,
                applePaySupport: applePaySupport,
                supportsPopups: supportsPopups,
                supportedNativeBrowser: supportedNativeBrowser
            })) throw new Error("Funding Source not eligible: " + fundingSource);
        }
        return {
            clientID: clientID,
            fundingSource: fundingSource,
            style: style = function(props, style) {
                if (!style) throw new Error("Expected props.style to be set");
                var fundingSource = (props = props || {}).fundingSource;
                var FUNDING_CONFIG = getFundingConfig();
                var fundingConfig = FUNDING_CONFIG[fundingSource || FUNDING.PAYPAL] || FUNDING_CONFIG[FUNDING.PAYPAL];
                if (!fundingConfig) throw new Error("Expected " + (fundingSource || FUNDING.PAYPAL) + " to be eligible");
                var label = style.label, _style$layout = style.layout, layout = void 0 === _style$layout ? fundingSource ? BUTTON_LAYOUT.HORIZONTAL : fundingConfig.layouts[0] : _style$layout, _style$shape = style.shape, shape = void 0 === _style$shape ? fundingConfig.shapes[0] : _style$shape, _style$tagline = style.tagline, tagline = void 0 === _style$tagline ? layout === BUTTON_LAYOUT.HORIZONTAL && !fundingSource : _style$tagline, height = style.height, period = style.period, _style$menuPlacement = style.menuPlacement, menuPlacement = void 0 === _style$menuPlacement ? "below" : _style$menuPlacement;
                "false" === tagline && (tagline = !1);
                var color = style.color ? style.color : fundingConfig.colors[0];
                if (-1 === util_values(BUTTON_LAYOUT).indexOf(layout)) throw new Error("Invalid layout: " + layout);
                if (label && -1 === util_values(BUTTON_LABEL).indexOf(label)) throw new Error("Invalid label: " + label);
                if (color && -1 === fundingConfig.colors.indexOf(color)) throw new Error("Unexpected style.color for " + (fundingSource || FUNDING.PAYPAL) + " button: " + color + ", expected " + fundingConfig.colors.join(", "));
                if (shape && -1 === fundingConfig.shapes.indexOf(shape)) throw new Error("Unexpected style.shape for " + (fundingSource || FUNDING.PAYPAL) + " button: " + shape + ", expected " + fundingConfig.shapes.join(", "));
                if (void 0 !== height) {
                    if ("number" != typeof height) throw new TypeError("Expected style.height to be a number, got: " + height);
                    var _ref = [ BUTTON_SIZE_STYLE.small.minHeight, BUTTON_SIZE_STYLE.huge.maxHeight ], minHeight = _ref[0], maxHeight = _ref[1];
                    if (height < minHeight || height > maxHeight) throw new Error("Expected style.height to be between " + minHeight + "px and " + maxHeight + "px - got " + height + "px");
                }
                if (layout === BUTTON_LAYOUT.VERTICAL && tagline) throw new Error("style.tagline is not allowed for " + BUTTON_LAYOUT.VERTICAL + " layout");
                return {
                    label: label,
                    layout: layout,
                    color: color,
                    shape: shape,
                    tagline: tagline,
                    height: height,
                    period: period,
                    menuPlacement: menuPlacement
                };
            }(props, style),
            locale: locale,
            remembered: remembered,
            env: env,
            fundingEligibility: fundingEligibility,
            platform: platform,
            clientAccessToken: clientAccessToken,
            buttonSessionID: buttonSessionID,
            commit: commit,
            sessionID: sessionID,
            nonce: nonce,
            components: components,
            onShippingChange: onShippingChange,
            onShippingAddressChange: onShippingAddressChange,
            onShippingOptionsChange: onShippingOptionsChange,
            personalization: personalization,
            content: content,
            wallet: wallet,
            flow: flow,
            experiment: experiment,
            vault: vault,
            userIDToken: userIDToken,
            applePay: applePay,
            applePaySupport: applePaySupport,
            supportsPopups: supportsPopups,
            supportedNativeBrowser: supportedNativeBrowser,
            showPayLabel: showPayLabel
        };
    }
    var pageStyle = "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: left;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    span {\n        display: inline-block;\n    }\n\n    ." + CLASS.HIDDEN + " {\n        position: absolute !important;\n        visibility: hidden !important;\n    }\n\n    ." + CLASS.HIDDEN + " * {\n        visibility: hidden !important;\n    }\n";
    var buttonStyle = "\n\n    ." + CLASS.CONTAINER + ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' + CLASS.BUTTON + " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." + CLASS.BUTTON + " * {\n        cursor: pointer;\n    }\n\n    ." + CLASS.CONTAINER + "." + CLASS.ENV + "-" + ENV.TEST + " ." + CLASS.TEXT + " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." + CLASS.CARD + " {\n        cursor: pointer;\n    }\n\n    .paypal-logo {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." + CLASS.TEXT + ", ." + CLASS.SPACE + " {\n        display: inline-block;\n        white-space: pre;\n        vertical-align: top;\n    }\n\n    ." + CLASS.BUTTON + " > ." + CLASS.BUTTON_LABEL + " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." + CLASS.BUTTON + " > ." + CLASS.BUTTON_LABEL + " * {\n        vertical-align: middle;\n        height: 100%;\n        text-align: left;\n    }\n\n    ." + CLASS.TAGLINE + " {\n        max-width: 100%;\n        font-size: initial;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.SPINNER + " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " + CLASS.SPINNER + "-rotation .7s infinite linear;\n    }\n\n    @keyframes " + CLASS.SPINNER + "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.SPINNER + " {\n        display: none !important;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.LOADING + " * {\n        display: none !important;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.LOADING + " ." + CLASS.SPINNER + " {\n        display: block !important;\n    }\n\n    ." + CLASS.CONTAINER + " ." + CLASS.VAULT_HEADER + " {\n        margin-top: 10px;\n    }\n\n    @media only screen and (max-width: 249px) {\n        ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + "." + CLASS.WALLET + "." + CLASS.WALLET_MENU + " ." + CLASS.BUTTON + "  {\n            border-top-right-radius: 4px;\n            border-bottom-right-radius: 4px;\n            width: 100%;\n        }\n    }\n";
    var buttonColorStyle = "\n\n\n    ." + CLASS.BUTTON + "." + CLASS.TEXT_COLOR + "-black {\n        color: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.TEXT_COLOR + "-white {\n        color: #fff;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.TEXT_COLOR + "-black ." + CLASS.SPINNER + " {\n        border: 3px solid rgba(100, 100, 100, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.TEXT_COLOR + "-white ." + CLASS.SPINNER + " {\n        border: 3px solid rgba(200, 200, 200, 0.2);\n        border-top-color: rgba(255, 255, 255, .85);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-gold,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-gold .menu-button {\n        background: #ffc439;\n    }\n\n    @media (hover:hover) {\n        ." + CLASS.BUTTON + "." + CLASS.COLOR + "-gold:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-gold:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-gold:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-blue,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-blue .menu-button {\n        background: #0070ba;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.VENMO + "]." + CLASS.COLOR + "-blue {\n        background: #008CFF;\n    }\n\n    /* For APM funding sources, default button color to be defined by payment scheme branding guidelines */\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BLIK + "]." + CLASS.COLOR + "-default {\n        background: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BANCONTACT + "]." + CLASS.COLOR + "-default {\n        background: linear-gradient(to right, #1E3764, #005AB9);\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAIDY + "]." + CLASS.COLOR + "-default {\n        background: linear-gradient(to right, #FF009C, #A6009C);\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETO + "]." + CLASS.COLOR + "-default {\n        background: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETOBANCARIO + "]." + CLASS.COLOR + "-default {\n        background: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "]." + CLASS.COLOR + "-default {\n        background: #C8036F;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.GIROPAY + "]." + CLASS.COLOR + "-default {\n        background: #003A7D;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.IDEAL + "]." + CLASS.COLOR + "-default {\n        background: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MERCADOPAGO + "]." + CLASS.COLOR + "-default {\n        background: #1D2647;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MULTIBANCO + "]." + CLASS.COLOR + "-default {\n        background: #1866AB;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "]." + CLASS.COLOR + "-default {\n        background: #1A4B67;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.OXXO + "]." + CLASS.COLOR + "-default {\n        background: #D8232A;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.P24 + "]." + CLASS.COLOR + "-default {\n        background: #D03238;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SOFORT + "]." + CLASS.COLOR + "-default {\n        background: #393A41;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.TRUSTLY + "]." + CLASS.COLOR + "-default {\n        background: #003140;\n    }\n\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.WECHATPAY + "]." + CLASS.COLOR + "-default {\n        background: #4D4D4D;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAYU + "]." + CLASS.COLOR + "-default {\n        background: #002124;\n    }\n\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SATISPAY + "]." + CLASS.COLOR + "-default {\n        background: #E62601;\n    }\n\n    /* APM button hover actions */\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BANCONTACT + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BLIK + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETO + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETOBANCARIO + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.GIROPAY + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.IDEAL + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MERCADOPAGO + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MULTIBANCO + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.OXXO + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.P24 + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SOFORT + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.TRUSTLY + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAYU + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SATISPAY + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAIDY + "]." + CLASS.COLOR + "-default:hover,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.WECHATPAY + "]." + CLASS.COLOR + "-default:hover {\n        filter: brightness(1.2);\n    }\n\n    /* APM button on focus actions */\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BLIK + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BANCONTACT + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETO + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETOBANCARIO + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.GIROPAY + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.IDEAL + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MERCADOPAGO + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MULTIBANCO + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.OXXO + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.P24 + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SOFORT + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.TRUSTLY + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAYU + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SATISPAY + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAIDY + "]." + CLASS.COLOR + "-default:focus,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.WECHATPAY + "]." + CLASS.COLOR + "-default:focus {\n        outline: none;\n    }\n\n    /* APM button after focus actions */\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BLIK + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BANCONTACT + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETO + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.BOLETOBANCARIO + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.GIROPAY + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.IDEAL + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MERCADOPAGO + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MULTIBANCO + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.OXXO + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.P24 + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SOFORT + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.TRUSTLY + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAYU + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.SATISPAY + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.PAIDY + "]." + CLASS.COLOR + "-default:focus::after,\n    ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.WECHATPAY + "]." + CLASS.COLOR + "-default:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    @media (hover:hover) {\n        ." + CLASS.BUTTON + "." + CLASS.COLOR + "-blue:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-blue:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-blue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #0000a6;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #009cde;\n        pointer-events: none;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-silver,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-silver .menu-button {\n        background: #eee;\n    }\n\n    @media (hover:hover) {\n        ." + CLASS.BUTTON + "." + CLASS.COLOR + "-silver:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-silver:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-silver:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-darkblue,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-darkblue .menu-button {\n        background: #003087;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-darkblue:hover {\n        filter: brightness(1.2);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-darkblue:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-darkblue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-black,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-black .menu-button {\n        background: #2C2E2F;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-black:hover {\n        filter: brightness(1.2);\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-black:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-black:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-white,\n    ." + CLASS.BUTTON_ROW + "." + CLASS.COLOR + "-white .menu-button {\n        background: #fff;\n        border: 1px solid #555;\n    }\n\n    @media (hover:hover) {\n        ." + CLASS.BUTTON + "." + CLASS.COLOR + "-white:hover {\n            filter: brightness(0.95);\n        }\n    }\n    \n\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-white:focus {\n        outline: none;\n    }\n    ." + CLASS.BUTTON + "." + CLASS.COLOR + "-white:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + " {\n        position: relative;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + ":focus {\n        outline: none;\n    }\n\n    ." + CLASS.BUTTON + " ." + CLASS.CARD + ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
    function style_Style(_ref) {
        var nonce = _ref.nonce;
        var css = function(_ref) {
            return "\n        " + pageStyle + "\n        " + buttonStyle + "\n        " + buttonColorStyle + "\n        " + labelStyle + "\n        " + function(_ref) {
                var height = _ref.height, fundingEligibility = _ref.fundingEligibility;
                return Object.keys(BUTTON_SIZE_STYLE).map((function(size) {
                    var _paylater$products, _paylater$products$pa, _paylater$products2, _paylater$products2$p, _paylater$products3, _paylater$products3$p;
                    var style = BUTTON_SIZE_STYLE[size];
                    var buttonHeight = height || style.defaultHeight;
                    var minDualWidth = Math.max(Math.round(2.2 * buttonHeight * (100 / 60)), 300);
                    var paylater = fundingEligibility.paylater;
                    var shouldResizeLabel = "DE" === (null == paylater || null == (_paylater$products = paylater.products) || null == (_paylater$products$pa = _paylater$products.paylater) ? void 0 : _paylater$products$pa.variant) || "IT" === (null == paylater || null == (_paylater$products2 = paylater.products) || null == (_paylater$products2$p = _paylater$products2.payIn3) ? void 0 : _paylater$products2$p.variant) || "ES" === (null == paylater || null == (_paylater$products3 = paylater.products) || null == (_paylater$products3$p = _paylater$products3.payIn3) ? void 0 : _paylater$products3$p.variant);
                    var textPercPercentage = shouldResizeLabel ? 32 : 36;
                    var smallerLabelHeight = max(roundUp(perc(buttonHeight, shouldResizeLabel ? 32 : 35) + 5, 2), 12);
                    var labelHeight = max(roundUp(perc(buttonHeight, 35) + 5, 2), 12);
                    return "\n            @media only screen and (min-width: " + style.minWidth + "px) {\n\n                ." + CLASS.CONTAINER + " {\n                    min-width: " + style.minWidth + "px;\n                    max-width: " + style.maxWidth + "px;\n                }\n\n                ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.TEXT + ", ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.SPACE + " {\n                    font-size: " + max(perc(buttonHeight, 36), 10) + "px;\n                    margin-top: -" + perc(max(perc(buttonHeight, 36), 10), 10) + "px;\n                    line-height: " + labelHeight + "px;\n                }\n\n                ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.TEXT + " * {\n                    margin-top: " + perc(max(perc(buttonHeight, 36), 10), 10) + "px;\n                }\n\n                ." + CLASS.BUTTON_ROW + " {\n                    height: " + buttonHeight + "px;\n                    vertical-align: top;\n                    min-height: " + (height || style.minHeight) + "px;\n                    max-height: " + (height || style.maxHeight) + "px;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.VERTICAL + " {\n                    margin-bottom: " + perc(buttonHeight, 30) + "px;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.VERTICAL + ":last-of-type {\n                    margin-bottom: 0;\n                }\n\n                ." + CLASS.BUTTON + " {\n                    display: inline-block;\n                    text-align: center;\n                    height: 100%;\n                }\n                \n                ." + CLASS.BUTTON + " ." + CLASS.SPINNER + " {\n                    height: " + perc(buttonHeight, 50) + "px;\n                    width: " + perc(buttonHeight, 50) + "px;\n                }\n\n                ." + CLASS.BUTTON + " > ." + CLASS.BUTTON_LABEL + " {\n                    margin: 0px 4vw;\n                    height: " + labelHeight + "px;\n                }\n\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.APPLEPAY + "] ." + CLASS.BUTTON_LABEL + " {\n                    height: " + (perc(buttonHeight, 80) + 5) + "px;\n                }\n\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.APPLEPAY + "] ." + CLASS.BUTTON_LABEL + " ." + CLASS.TEXT + " {\n                    line-height: " + (perc(buttonHeight, 80) + 5) + "px;\n                }\n\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "] ." + CLASS.BUTTON_LABEL + ",\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "] ." + CLASS.BUTTON_LABEL + " {\n                    height: " + (perc(buttonHeight, 50) + 5) + "px;\n                }\n\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "] ." + CLASS.BUTTON_LABEL + " ." + CLASS.TEXT + ",\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.EPS + "] ." + CLASS.BUTTON_LABEL + " ." + CLASS.SPACE + ",\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "] ." + CLASS.BUTTON_LABEL + " ." + CLASS.TEXT + ",\n                ." + CLASS.BUTTON + "[data-funding-source=" + FUNDING.MYBANK + "] ." + CLASS.BUTTON_LABEL + " ." + CLASS.SPACE + " {\n                    line-height: " + (perc(buttonHeight, 50) + 5) + "px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.SHAPE + "-rect {\n                    border-radius: 4px;\n                }\n\n                ." + CLASS.BUTTON + "." + CLASS.SHAPE + "-pill {\n                    border-radius: " + Math.ceil(buttonHeight / 2) + "px;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.SHAPE + "-rect .menu-button {\n                    border-top-right-radius: 4px;\n                    border-bottom-right-radius: 4px;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.SHAPE + "-pill .menu-button {\n                    border-top-right-radius: " + Math.ceil(buttonHeight / 2) + "px;\n                    border-bottom-right-radius: " + Math.ceil(buttonHeight / 2) + "px;\n                }\n                \n                ." + CLASS.TAGLINE + " ." + CLASS.TEXT + " {\n                    height: " + perc(buttonHeight, 50) + "px;\n                    line-height: " + perc(buttonHeight, 50) + "px;\n                }\n\n                ." + CLASS.CARD + " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.WALLET + "." + CLASS.WALLET_MENU + " ." + CLASS.BUTTON + " {\n                    width: calc(100% - " + (buttonHeight + 2) + "px);\n                    border-top-right-radius: 0px;\n                    border-bottom-right-radius: 0px;\n                }\n\n                .menu-button {\n                    height: " + buttonHeight + "px;\n                    width: " + buttonHeight + "px;\n                }\n            }\n\n            @media only screen and (min-width: " + style.minWidth + "px) and (max-width: 320px) {\n\n                ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.TEXT + ", ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.SPACE + " {\n                    font-size: " + max(perc(buttonHeight, textPercPercentage), 10) + "px;\n                    margin-top: -" + perc(max(perc(buttonHeight, textPercPercentage), 10), 10) + "px;\n                    line-height: " + smallerLabelHeight + "px;\n                }\n\n\n                ." + CLASS.CONTAINER + " ." + CLASS.BUTTON_ROW + " ." + CLASS.TEXT + " * {\n                    margin-top: " + perc(max(perc(buttonHeight, textPercPercentage), 10), 10) + "px;\n                }\n\n                ." + CLASS.BUTTON + " > ." + CLASS.BUTTON_LABEL + " {\n                    margin: 0px 4vw;\n                    height: " + smallerLabelHeight + "px;\n                }\n            }\n\n            @media only screen and (min-width: " + style.minWidth + "px) and (max-width: " + minDualWidth + "px) {\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple." + CLASS.NUMBER + "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple." + CLASS.NUMBER + "-1 {\n                    display: none;\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple ." + CLASS.TAGLINE + " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " + max(style.minWidth, minDualWidth) + "px) {\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple." + CLASS.NUMBER + "-0 {\n                    display: inline-block;\n                    width: calc(50% - " + perc(buttonHeight, 7) + "px);\n                    margin-right: " + 2 * perc(buttonHeight, 7) + "px;\n                }\n\n                ." + CLASS.BUTTON_ROW + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple." + CLASS.NUMBER + "-1 {\n                    display: inline-block;\n                    width: calc(50% - " + perc(buttonHeight, 7) + "px);\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.WALLET + " ." + CLASS.BUTTON_ROW + "." + CLASS.WALLET + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple {\n                    width: calc(60% - " + perc(buttonHeight, 7) + "px);\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.WALLET + " ." + CLASS.BUTTON_ROW + ":not(." + CLASS.WALLET + ")." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple {\n                    width: calc(40% - " + perc(buttonHeight, 7) + "px);\n                }\n\n                ." + CLASS.CONTAINER + "." + CLASS.LAYOUT + "-" + BUTTON_LAYOUT.HORIZONTAL + "." + CLASS.NUMBER + "-multiple ." + CLASS.TAGLINE + " {\n                    display: block;\n                }\n            }\n\n        ";
                })).join("\n");
            }({
                height: _ref.height,
                fundingEligibility: _ref.fundingEligibility
            }) + "\n    ";
        }({
            height: _ref.style.height,
            fundingEligibility: _ref.fundingEligibility
        });
        return node_node("style", {
            nonce: nonce,
            innerHTML: css
        });
    }
    function Spinner() {
        return node_node("div", {
            class: CLASS.SPINNER
        });
    }
    var chevron_excluded = [ "color" ];
    function Chevron(_temp) {
        var _ref = void 0 === _temp ? {} : _temp, _ref$color = _ref.color, color = void 0 === _ref$color ? "#848484" : _ref$color, props = _objectWithoutPropertiesLoose(_ref, chevron_excluded);
        return node_node(SVGLogo, _extends({}, props, {
            name: "chevron",
            render: function() {
                return node_node("svg", {
                    width: "256",
                    height: "158.18601989746094",
                    viewBox: "-1.935 0.221 256 158.186",
                    xmlns: "http://www.w3.org/2000/svg"
                }, node_node("polygon", {
                    points: "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                    fill: color
                }));
            }
        }));
    }
    var menu_button_scoped = __webpack_require__(7);
    var menu_button_scoped_default = __webpack_require__.n(menu_button_scoped);
    function MenuButton(_temp) {
        var _ref2;
        var _ref = void 0 === _temp ? {} : _temp, _ref$textColor = _ref.textColor, textColor = void 0 === _ref$textColor ? "black" : _ref$textColor, content = _ref.content;
        var labelText = null == content ? void 0 : content.moreOptions;
        return node_node(Style, {
            css: menu_button_scoped_default.a
        }, node_node("div", _extends({}, ((_ref2 = {})["data-menu"] = !0, _ref2), {
            tabindex: "0",
            class: "menu-button",
            role: "button",
            "aria-label": labelText,
            "aria-haspopup": "menu"
        }), node_node(Chevron, {
            color: textColor
        })));
    }
    function Button(_ref) {
        var _ref2;
        var fundingSource = _ref.fundingSource, style = _ref.style, multiple = _ref.multiple, locale = _ref.locale, env = _ref.env, fundingEligibility = _ref.fundingEligibility, i = _ref.i, nonce = _ref.nonce, flow = _ref.flow, vault = _ref.vault, userIDToken = _ref.userIDToken, personalization = _ref.personalization, _ref$onClick = _ref.onClick, onClick = void 0 === _ref$onClick ? src_util_noop : _ref$onClick, content = _ref.content, tagline = _ref.tagline, commit = _ref.commit, experiment = _ref.experiment, instrument = _ref.instrument, showPayLabel = _ref.showPayLabel;
        var layout = style.layout, shape = style.shape;
        var fundingConfig = getFundingConfig()[fundingSource];
        if (!fundingConfig) throw new Error("Can not find funding config for " + fundingSource);
        var colors = fundingConfig.colors;
        var secondaryColors = fundingConfig.secondaryColors || {};
        var _style$color = style.color, color = void 0 === _style$color ? colors[0] : _style$color, period = style.period, label = style.label;
        multiple && i > 0 && (color = secondaryColors[color] && colors.indexOf(-1 !== secondaryColors[color]) ? secondaryColors[color] : -1 !== colors.indexOf(secondaryColors.default) ? secondaryColors.default : colors[0]);
        var logoColors = fundingConfig.logoColors, textColors = fundingConfig.textColors;
        var logoColor = logoColors[color] || logoColors.default || "default";
        var textColor = textColors[color] || textColors.default || "default";
        var Label = fundingConfig.Label, WalletLabel = fundingConfig.WalletLabel, Logo = fundingConfig.Logo, showWalletMenu = fundingConfig.showWalletMenu;
        var clickHandler = function(event, opts) {
            event.preventDefault();
            event.stopPropagation();
            onClick(event, _extends({
                fundingSource: fundingSource
            }, opts));
        };
        var keypressHandler = function(event, opts) {
            13 !== event.keyCode && 32 !== event.keyCode || clickHandler(event, opts);
        };
        var labelText = function() {
            var labelText = "function" == typeof fundingConfig.labelText ? fundingConfig.labelText({
                content: content,
                fundingEligibility: fundingEligibility
            }) : fundingConfig.labelText || fundingSource;
            !showPayLabel && null != instrument && instrument.vendor && instrument.label && (labelText = instrument.secondaryInstruments ? instrument.secondaryInstruments[0].type + " & " + instrument.vendor + " " + instrument.label : instrument.vendor + " " + instrument.label);
            return labelText;
        }();
        var logoNode = node_node(Logo, {
            label: label,
            locale: locale,
            logoColor: logoColor,
            fundingEligibility: fundingEligibility,
            onClick: clickHandler,
            onKeyPress: keypressHandler,
            nonce: nonce,
            experiment: experiment,
            env: env
        });
        var labelNode = node_node(Label, {
            i: i,
            logo: logoNode,
            label: label,
            nonce: nonce,
            locale: locale,
            logoColor: logoColor,
            period: period,
            layout: layout,
            multiple: multiple,
            fundingEligibility: fundingEligibility,
            onClick: clickHandler,
            onKeyPress: keypressHandler,
            personalization: personalization,
            tagline: tagline,
            content: content,
            experiment: experiment
        });
        var buttonDesign = fundingSource === FUNDING.PAYPAL ? getButtonDesign(personalization) : {};
        var _buttonDesign$buttonD = buttonDesign.buttonDesignContainerClass, buttonDesignContainerClass = void 0 === _buttonDesign$buttonD ? "" : _buttonDesign$buttonD, _buttonDesign$buttonD2 = buttonDesign.buttonDesignComponent, buttonDesignComponent = void 0 === _buttonDesign$buttonD2 ? null : _buttonDesign$buttonD2;
        buttonDesignComponent && (labelNode = node_node(DesignExperimentLabel, {
            i: i,
            logo: logoNode,
            label: label,
            nonce: nonce,
            locale: locale,
            logoColor: logoColor,
            period: period,
            layout: layout,
            multiple: multiple,
            fundingEligibility: fundingEligibility,
            onClick: clickHandler,
            onKeyPress: keypressHandler,
            personalization: personalization,
            tagline: tagline,
            content: content,
            buttonDesignComponent: buttonDesignComponent
        }));
        var isWallet = !1;
        if (WalletLabel && (!showPayLabel || "purchase" === flow || "vault_without_purchase" === flow) && instrument) {
            labelNode = node_node(WalletLabel, {
                nonce: nonce,
                logoColor: logoColor,
                instrument: instrument,
                locale: locale,
                content: content,
                commit: commit,
                experiment: experiment,
                vault: vault,
                textColor: textColor,
                fundingSource: fundingSource,
                showPayLabel: showPayLabel
            });
            isWallet = !0;
        }
        var shouldShowWalletMenu = isWallet && instrument && showWalletMenu({
            instrument: instrument,
            userIDToken: userIDToken
        });
        return node_node("div", {
            class: [ CLASS.BUTTON_ROW, CLASS.NUMBER + "-" + i, CLASS.LAYOUT + "-" + layout, CLASS.SHAPE + "-" + shape, CLASS.NUMBER + "-" + (multiple ? "multiple" : "single"), CLASS.ENV + "-" + env, CLASS.COLOR + "-" + color, CLASS.TEXT_COLOR + "-" + textColor, "paypal-logo-color-" + logoColor, "" + (isWallet ? CLASS.WALLET : ""), "" + (shouldShowWalletMenu ? CLASS.WALLET_MENU : ""), "" + buttonDesignContainerClass ].join(" ")
        }, node_node("div", _extends({
            role: "link"
        }, ((_ref2 = {})["data-button"] = !0, _ref2["data-funding-source"] = fundingSource, 
        _ref2["data-payment-method-id"] = instrument ? instrument.tokenID : null, _ref2["data-instrument-id"] = instrument ? instrument.instrumentID : null, 
        _ref2["data-instrument-type"] = instrument ? instrument.type : null, _ref2["data-secondary-instrument-type"] = null != instrument && instrument.secondaryInstruments ? instrument.secondaryInstruments[0].type : null, 
        _ref2), {
            class: [ CLASS.BUTTON, CLASS.NUMBER + "-" + i, CLASS.LAYOUT + "-" + layout, CLASS.SHAPE + "-" + shape, CLASS.NUMBER + "-" + (multiple ? "multiple" : "single"), CLASS.ENV + "-" + env, CLASS.COLOR + "-" + color, CLASS.TEXT_COLOR + "-" + textColor, "paypal-logo-color-" + logoColor, "" + (isWallet ? CLASS.WALLET : "") ].join(" "),
            onClick: clickHandler,
            onRender: function(el) {
                dom_isBrowser() && isElement(el) && function(el) {
                    var onFocus = function onFocus(event) {
                        el.removeEventListener("focus", onFocus);
                        event.preventDefault();
                        el.blur();
                        return !1;
                    };
                    el.addEventListener("mousedown", (function() {
                        el.addEventListener("focus", onFocus);
                        setTimeout((function() {
                            el.removeEventListener("focus", onFocus);
                        }), 1);
                    }));
                }(el);
            },
            onKeyPress: keypressHandler,
            tabindex: "0",
            "aria-label": labelText
        }), node_node("div", {
            class: CLASS.BUTTON_LABEL
        }, labelNode), node_node(Spinner, null)), shouldShowWalletMenu ? node_node(MenuButton, {
            textColor: textColor,
            content: content
        }) : null);
    }
    function TagLine(_ref) {
        var fundingSource = _ref.fundingSource, locale = _ref.locale, multiple = _ref.multiple, nonce = _ref.nonce, personalization = _ref.personalization;
        var fundingConfig = getFundingConfig()[fundingSource];
        if (!fundingConfig) throw new Error("Can not get config for " + fundingSource);
        var Tag = fundingConfig.Tag;
        if (Tag) {
            var tagline = personalization && personalization.tagline;
            return node_node("div", {
                class: CLASS.TAGLINE
            }, tagline ? node_node(Fragment, null, node_node("span", null, tagline.Component ? node_node(tagline.Component, null) : tagline.text), tagline.tracking && tagline.tracking.impression && node_node(TrackingBeacon, {
                url: tagline.tracking.impression,
                nonce: nonce
            })) : node_node(Tag, {
                locale: locale,
                multiple: multiple
            }));
        }
    }
    var buttonContent = {
        ar: {
            PoweredBy: function(_ref) {
                var logoColor = _ref.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "مدعوم من "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        bg: {
            PoweredBy: function(_ref2) {
                var logoColor = _ref2.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "С подкрепата на "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        cs: {
            PoweredBy: function(_ref3) {
                var logoColor = _ref3.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Využívá službu "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        da: {
            PoweredBy: function(_ref4) {
                var logoColor = _ref4.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Leveret af "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        de: {
            PoweredBy: function(_ref5) {
                var logoColor = _ref5.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Abgewickelt durch "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        el: {
            PoweredBy: function(_ref6) {
                var logoColor = _ref6.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Με την υποστήριξη του "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        en: {
            PoweredBy: function(_ref7) {
                var logoColor = _ref7.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        es: {
            PoweredBy: function(_ref8) {
                var logoColor = _ref8.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Desarrollado por "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        et: {
            PoweredBy: function(_ref9) {
                var logoColor = _ref9.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        fi: {
            PoweredBy: function(_ref10) {
                var logoColor = _ref10.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Palvelun tarjoaa "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        fr: {
            PoweredBy: function(_ref11) {
                var logoColor = _ref11.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Optimisé par "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        he: {
            PoweredBy: function(_ref12) {
                return node_node(Fragment, null, node_node(PayPalLogo, {
                    logoColor: _ref12.logoColor
                }), " מופעל על-ידי");
            }
        },
        hu: {
            PoweredBy: function(_ref13) {
                var logoColor = _ref13.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Üzemeltető: "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        id: {
            PoweredBy: function(_ref14) {
                var logoColor = _ref14.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Ditunjang teknologi "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        it: {
            PoweredBy: function(_ref15) {
                var logoColor = _ref15.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Con tecnologia "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        ja: {
            PoweredBy: function(_ref16) {
                var logoColor = _ref16.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        ko: {
            PoweredBy: function(_ref17) {
                var logoColor = _ref17.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "제공: "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        lt: {
            PoweredBy: function(_ref18) {
                var logoColor = _ref18.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Sukurta "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        lv: {
            PoweredBy: function(_ref19) {
                var logoColor = _ref19.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Darbojas ar "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        ms: {
            PoweredBy: function(_ref20) {
                var logoColor = _ref20.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Dikuasakan oleh "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        nl: {
            PoweredBy: function(_ref21) {
                var logoColor = _ref21.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Mogelijk gemaakt door "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        no: {
            PoweredBy: function(_ref22) {
                var logoColor = _ref22.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Leveres av "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        pl: {
            PoweredBy: function(_ref23) {
                var logoColor = _ref23.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        pt: {
            PoweredBy: function(_ref24) {
                var logoColor = _ref24.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        ro: {
            PoweredBy: function(_ref25) {
                var logoColor = _ref25.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Cu tehnologia "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        ru: {
            PoweredBy: function(_ref26) {
                var logoColor = _ref26.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Обработано "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        si: {
            PoweredBy: function(_ref27) {
                var logoColor = _ref27.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "බලගන්වන්නේ "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }), node_node(Text, null, " විසිනි"));
            }
        },
        sk: {
            PoweredBy: function(_ref28) {
                var logoColor = _ref28.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Používa technológiu "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        sl: {
            PoweredBy: function(_ref29) {
                var logoColor = _ref29.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Powered by "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        sq: {
            PoweredBy: function(_ref30) {
                var logoColor = _ref30.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Mundësuar nga "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        sv: {
            PoweredBy: function(_ref31) {
                var logoColor = _ref31.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Tillhandahålls av "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        th: {
            PoweredBy: function(_ref32) {
                var logoColor = _ref32.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "ให้บริการโดย "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        tl: {
            PoweredBy: function(_ref33) {
                var logoColor = _ref33.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Pinapagana ng "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        tr: {
            PoweredBy: function(_ref34) {
                var logoColor = _ref34.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Çalıştıran "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        vi: {
            PoweredBy: function(_ref35) {
                var logoColor = _ref35.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "Được hỗ trợ bởi "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        zh: {
            PoweredBy: function(_ref36) {
                var logoColor = _ref36.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "技术支持提供方： "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        },
        zh_Hant: {
            PoweredBy: function(_ref37) {
                var logoColor = _ref37.logoColor;
                return node_node(Fragment, null, node_node(Text, null, "技術支持： "), node_node(PayPalLogo, {
                    logoColor: logoColor
                }));
            }
        }
    };
    var POWERED_BY_PAYPAL_STYLE = "\n    ." + CLASS.POWERED_BY + ' {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n\n    .' + CLASS.POWERED_BY + " > ." + CLASS.TEXT + ",\n    ." + CLASS.POWERED_BY + " > .paypal-logo {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n        font-size: 11px;\n    }\n";
    function PoweredByPayPal(_ref) {
        var PoweredBy = buttonContent[_ref.locale.lang].PoweredBy;
        return node_node("div", {
            class: CLASS.POWERED_BY
        }, node_node("style", {
            nonce: _ref.nonce,
            innerHTML: POWERED_BY_PAYPAL_STYLE
        }), node_node(PoweredBy, {
            logoColor: "blue"
        }));
    }
    var _FUNDING_TO_INSTRUMEN;
    function getWalletInstrument(_ref) {
        var wallet = _ref.wallet;
        if ((_ref3 = {
            wallet: wallet,
            onShippingChange: _ref.onShippingChange,
            onShippingAddressChange: _ref.onShippingAddressChange,
            onShippingOptionsChange: _ref.onShippingOptionsChange
        }).wallet && !(_ref3.onShippingChange || _ref3.onShippingAddressChange || _ref3.onShippingOptionsChange)) {
            var _ref3;
            var walletFunding = wallet && wallet[_ref.fundingSource.toString()];
            var instruments = walletFunding && walletFunding.instruments;
            if (instruments && instruments.length) return instruments[0];
        }
    }
    var FUNDING_TO_INSTRUMENT = ((_FUNDING_TO_INSTRUMEN = {})[FUNDING.CREDIT] = "credit", 
    _FUNDING_TO_INSTRUMEN);
    function validateButtonProps(props) {
        normalizeButtonProps(props);
    }
    function Buttons(props) {
        var _props$onClick = props.onClick, onClick = void 0 === _props$onClick ? src_util_noop : _props$onClick;
        var _normalizeButtonProps = normalizeButtonProps(props), wallet = _normalizeButtonProps.wallet, fundingSource = _normalizeButtonProps.fundingSource, style = _normalizeButtonProps.style, locale = _normalizeButtonProps.locale, env = _normalizeButtonProps.env, fundingEligibility = _normalizeButtonProps.fundingEligibility, commit = _normalizeButtonProps.commit, vault = _normalizeButtonProps.vault, nonce = _normalizeButtonProps.nonce, onShippingChange = _normalizeButtonProps.onShippingChange, onShippingAddressChange = _normalizeButtonProps.onShippingAddressChange, onShippingOptionsChange = _normalizeButtonProps.onShippingOptionsChange, personalization = _normalizeButtonProps.personalization, userIDToken = _normalizeButtonProps.userIDToken, content = _normalizeButtonProps.content, flow = _normalizeButtonProps.flow, experiment = _normalizeButtonProps.experiment, showPayLabel = _normalizeButtonProps.showPayLabel;
        var layout = style.layout, shape = style.shape, tagline = style.tagline;
        var fundingSources = function(_ref2) {
            var fundingSource = _ref2.fundingSource, layout = _ref2.layout, platform = _ref2.platform, fundingEligibility = _ref2.fundingEligibility, components = _ref2.components, onShippingChange = _ref2.onShippingChange, onShippingAddressChange = _ref2.onShippingAddressChange, onShippingOptionsChange = _ref2.onShippingOptionsChange, flow = _ref2.flow, wallet = _ref2.wallet, applePaySupport = _ref2.applePaySupport, supportsPopups = _ref2.supportsPopups, supportedNativeBrowser = _ref2.supportedNativeBrowser, experiment = _ref2.experiment;
            if (fundingSource) return [ fundingSource ];
            var eligibleFunding = SUPPORTED_FUNDING_SOURCES.filter((function(source) {
                return funding_isFundingEligible(source, {
                    layout: layout,
                    platform: platform,
                    fundingSource: fundingSource,
                    fundingEligibility: fundingEligibility,
                    components: components,
                    onShippingChange: onShippingChange,
                    onShippingAddressChange: onShippingAddressChange,
                    onShippingOptionsChange: onShippingOptionsChange,
                    flow: flow,
                    wallet: wallet,
                    applePaySupport: applePaySupport,
                    supportsPopups: supportsPopups,
                    supportedNativeBrowser: supportedNativeBrowser,
                    experiment: experiment
                });
            }));
            layout === BUTTON_LAYOUT.HORIZONTAL ? eligibleFunding = eligibleFunding.slice(0, 2) : layout === BUTTON_LAYOUT.VERTICAL && (eligibleFunding = eligibleFunding.slice(0, 6));
            return eligibleFunding;
        }({
            fundingSource: fundingSource,
            layout: layout,
            remembered: _normalizeButtonProps.remembered,
            platform: _normalizeButtonProps.platform,
            fundingEligibility: fundingEligibility,
            components: _normalizeButtonProps.components,
            onShippingChange: onShippingChange,
            flow: flow,
            wallet: wallet,
            applePaySupport: _normalizeButtonProps.applePaySupport,
            supportsPopups: _normalizeButtonProps.supportsPopups,
            supportedNativeBrowser: _normalizeButtonProps.supportedNativeBrowser,
            experiment: experiment
        });
        var multiple = fundingSources.length > 1;
        if (!fundingSources.length) throw new errors_ValidationError("No eligible funding fundingSources found to render buttons:\n\n" + JSON.stringify(fundingEligibility, null, 4));
        -1 !== fundingSources.indexOf(FUNDING.CARD) && (fundingSources = [].concat(fundingSources.filter((function(src) {
            return src !== FUNDING.CARD;
        })), [ FUNDING.CARD ]));
        var isAPM = fundingSources.some((function(src) {
            return APM_LIST.includes(src);
        }));
        var instruments = function(_ref2) {
            var wallet = _ref2.wallet, layout = _ref2.layout, fundingSources = _ref2.fundingSources, onShippingChange = _ref2.onShippingChange, onShippingAddressChange = _ref2.onShippingAddressChange, onShippingOptionsChange = _ref2.onShippingOptionsChange;
            var instruments = {};
            for (var _i2 = 0; _i2 < fundingSources.length; _i2++) {
                var source = fundingSources[_i2];
                var instrument = getWalletInstrument({
                    wallet: wallet,
                    fundingSource: source,
                    onShippingChange: onShippingChange,
                    onShippingAddressChange: onShippingAddressChange,
                    onShippingOptionsChange: onShippingOptionsChange
                });
                instrument && (instruments[source] = instrument);
            }
            for (var _i4 = 0, _Object$keys2 = Object.keys(instruments); _i4 < _Object$keys2.length; _i4++) {
                var _source = _Object$keys2[_i4];
                for (var _i6 = 0, _Object$keys4 = Object.keys(FUNDING_TO_INSTRUMENT); _i6 < _Object$keys4.length; _i6++) {
                    var mapSource = _Object$keys4[_i6];
                    _source !== mapSource && -1 !== fundingSources.indexOf(mapSource) && instruments[_source] && instruments[_source].type === FUNDING_TO_INSTRUMENT[mapSource] && delete instruments[_source];
                }
            }
            if (layout === BUTTON_LAYOUT.HORIZONTAL) {
                var found = !1;
                for (var _i8 = 0; _i8 < fundingSources.length; _i8++) {
                    var _source2 = fundingSources[_i8];
                    instruments[_source2] && (found ? delete instruments[_source2] : found = !0);
                }
            }
            return instruments;
        }({
            wallet: wallet,
            fundingSources: fundingSources,
            layout: layout,
            onShippingChange: onShippingChange,
            onShippingAddressChange: onShippingAddressChange,
            onShippingOptionsChange: onShippingOptionsChange
        });
        var isWallet = "purchase" === flow && Object.keys(instruments).length;
        var _getButtonDesign$butt = getButtonDesign(personalization).buttonDesignScript, buttonDesignScript = void 0 === _getButtonDesign$butt ? "" : _getButtonDesign$butt;
        return node_node("div", {
            class: [ CLASS.CONTAINER, CLASS.LAYOUT + "-" + layout, CLASS.SHAPE + "-" + shape, CLASS.NUMBER + "-" + (multiple ? "multiple" : "single"), CLASS.ENV + "-" + env, "" + (isWallet ? CLASS.WALLET : "") ].join(" ")
        }, node_node(style_Style, {
            nonce: nonce,
            style: style,
            fundingEligibility: fundingEligibility
        }), fundingSources.map((function(source, i) {
            return node_node(Button, {
                content: content,
                i: i,
                style: style,
                merchantFundingSource: fundingSource,
                fundingSource: source,
                multiple: multiple,
                env: env,
                locale: locale,
                nonce: nonce,
                fundingEligibility: fundingEligibility,
                wallet: wallet,
                onShippingChange: onShippingChange,
                onShippingAddressChange: onShippingAddressChange,
                onShippingOptionsChange: onShippingOptionsChange,
                onClick: onClick,
                userIDToken: userIDToken,
                personalization: personalization,
                tagline: tagline,
                commit: commit,
                experiment: experiment,
                flow: flow,
                vault: vault,
                instrument: instruments[source],
                showPayLabel: showPayLabel
            });
        })), tagline && layout === BUTTON_LAYOUT.HORIZONTAL && !fundingSource ? node_node(TagLine, {
            fundingSource: fundingSources[0],
            style: style,
            locale: locale,
            multiple: multiple,
            nonce: nonce,
            personalization: personalization
        }) : null, -1 !== fundingSources.indexOf(FUNDING.CARD) ? node_node("div", {
            id: "card-fields-container",
            class: "card-fields-container"
        }) : null, isAPM ? node_node("div", {
            id: "payment-fields-container",
            className: "payment-fields-container"
        }) : null, layout === BUTTON_LAYOUT.VERTICAL && -1 !== fundingSources.indexOf(FUNDING.CARD) ? node_node(PoweredByPayPal, {
            locale: locale,
            nonce: nonce
        }) : null, buttonDesignScript ? node_node(ButtonDesignExperimentScriptWrapper, {
            nonce: nonce,
            buttonDesignScript: buttonDesignScript
        }) : node_node(Script, {
            nonce: nonce
        }));
    }
} ]);