"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBotton = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'Components/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "Example",
    size: 'h1',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true,
    color: 'secondary'
};
//export const Tertiary = Template.bind({});
exports.CustomBotton = Template.bind({});
exports.CustomBotton.args = {
    size: 'h1',
    allCaps: true,
    color: 'primary',
    fontColor: '#141',
    backgroundColor: 'red'
};
