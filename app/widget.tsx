import { subclass, property } from "esri/core/accessorSupport/decorators";
import { tsx, messageBundle } from "esri/widgets/support/widget";
import Widget = require("esri/widgets/Widget");




//
@subclass("esri.widgets.CustomWidget")
class CustomWidget extends Widget {
    private _eventListener:         any;




    //
    constructor(params?: any) {
        super(params);
    }




    //  [Properties]
    @property()
    sampleProperty: string = "sample property (unused)";


    //  [Messages]
    //
    @property()
    @messageBundle("custom-widget/assets/translations/custom-widget")
    messages: { widgetText: any; } = null;


    //  [Events]

    //  @remarks:   this event is called after the widget/node has been added to the DOM
    //              event handlers can be attached to the element at this point
    //  @reference: https://maquettejs.org/typedoc/interfaces/vnodeproperties.html#aftercreate
    //
    public onAfterCreate(element: any): void {

        this._eventListener = this._onClickEvent.bind(this);
        element.addEventListener('click', this._eventListener);
    }


    //  @remarks:   this event is called after the widget/node has been removed from the DOM
    //
    public onAfterRemoved(element: any): void {

        if (this._eventListener) {

            element.removeEventListener('click', this._eventListener);
            this._eventListener = null;
        }
    }




    //  [Public]

    //  @remarks:       required method
    //  @reference:     https://community.esri.com/t5/arcgis-api-for-javascript/can-someone-confirm-that-aftercreate-acts-different-in-4-16/m-p/25908
    //
    render() {

        return (
            <div>
                <button afterCreate={ this.onAfterCreate } afterRemoved={ this.onAfterRemoved } bind={ this }>
                    { this.messages.widgetText }
                </button>
            </div>
        );
    }




    //  [Private]

    //
    private _onClickEvent(event: any): any {

        console.log("CLICK!")
    }




}


export = CustomWidget;