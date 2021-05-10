define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Widget"], function (require, exports, tslib_1, decorators_1, widget_1, Widget) {
    "use strict";
    //
    var CustomWidget = /** @class */ (function (_super) {
        tslib_1.__extends(CustomWidget, _super);
        //
        function CustomWidget(params) {
            var _this = _super.call(this, params) || this;
            //  [Properties]
            _this.sampleProperty = "sample property (unused)";
            //  [Messages]
            //
            _this.messages = null;
            return _this;
        }
        //  [Events]
        //  @remarks:   this event is called after the widget/node has been added to the DOM
        //              event handlers can be attached to the element at this point
        //  @reference: https://maquettejs.org/typedoc/interfaces/vnodeproperties.html#aftercreate
        //
        CustomWidget.prototype.onAfterCreate = function (element) {
            this._eventListener = this._onClickEvent.bind(this);
            element.addEventListener('click', this._eventListener);
        };
        //  @remarks:   this event is called after the widget/node has been removed from the DOM
        //
        CustomWidget.prototype.onAfterRemoved = function (element) {
            if (this._eventListener) {
                element.removeEventListener('click', this._eventListener);
                this._eventListener = null;
            }
        };
        //  [Public]
        //  @remarks:       required method
        //  @reference:     https://community.esri.com/t5/arcgis-api-for-javascript/can-someone-confirm-that-aftercreate-acts-different-in-4-16/m-p/25908
        //
        CustomWidget.prototype.render = function () {
            return (widget_1.tsx("div", null,
                widget_1.tsx("button", { afterCreate: this.onAfterCreate, afterRemoved: this.onAfterRemoved, bind: this }, this.messages.widgetText)));
        };
        //  [Private]
        //
        CustomWidget.prototype._onClickEvent = function (event) {
            console.log("CLICK!");
        };
        tslib_1.__decorate([
            decorators_1.property()
        ], CustomWidget.prototype, "sampleProperty", void 0);
        tslib_1.__decorate([
            decorators_1.property(),
            widget_1.messageBundle("custom-widget/assets/translations/custom-widget")
        ], CustomWidget.prototype, "messages", void 0);
        CustomWidget = tslib_1.__decorate([
            decorators_1.subclass("esri.widgets.CustomWidget")
        ], CustomWidget);
        return CustomWidget;
    }(Widget));
    return CustomWidget;
});
//# sourceMappingURL=widget.js.map