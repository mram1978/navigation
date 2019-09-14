sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S1", {

		onInit: function () {

		},

		onItemPress: function (oEvent) {

			var oParameters = oEvent.getParameters();
			var oListItem = oParameters.listItem; // NAO EH FUNCAO
			var oContext = oListItem.getBindingContext();
			var sId = oContext.getProperty("Team_Identifier");

			this.getOwnerComponent().getRouter().navTo("equipe", {
				idEquipe: sId
			});
		}

	});

});