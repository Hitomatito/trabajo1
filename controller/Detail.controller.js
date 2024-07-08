sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
	"sap/m/MessageBox",
	'sap/m/Token',
],
function (Controller,Fragment,JSONModel,Filter,FilterOperator,FilterType,MessageBox,Token) {
    "use strict";

    const initialViewProperties = {
		busy: false,
		showExpandButton: true,
		showCollapseButton: false,
		mFilteredFunctLocations: {},
		pendingSyncRequests: false,
		enableButtonCreateFunctionalLocation: false,
		treeTableSet: false
	};

    return Controller.extend("masterdetail2.controller.Detail", {
        onInit: function () {

            this.getView().setModel(new JSONModel(jQuery.extend({}, initialViewProperties)), "view");

        }
    });
});