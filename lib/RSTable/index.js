"use strict";

var _interopRequireDefault = require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/createClass.js"));
var _assertThisInitialized2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"));
var _inherits2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/inherits.js"));
var _createSuper2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/createSuper.js"));
var _defineProperty2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js"));
var _initializerWarningHelper2 = _interopRequireDefault(require("D:/work/\u897F\u6E56\u667A\u6167\u4EBA\u4E8B/\u4E3B\u9898\u5305/ox-theme-element/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js"));
var _vuePropertyDecorator = require("vue-property-decorator");
require("../styles/table.less");
var _dec, _class, _class2, _descriptor;
var RSTable = (_dec = (0, _vuePropertyDecorator.Prop)({}), (0, _vuePropertyDecorator.Component)(_class = (_class2 = /*#__PURE__*/function (_Vue) {
  (0, _inherits2.default)(RSTable, _Vue);
  var _super = (0, _createSuper2.default)(RSTable);
  function RSTable() {
    var _this;
    (0, _classCallCheck2.default)(this, RSTable);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2.default)((0, _assertThisInitialized2.default)(_this), "data", _descriptor, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(RSTable, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("el-table");
    }
  }]);
  return RSTable;
}(_vuePropertyDecorator.Vue), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "data", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = RSTable;