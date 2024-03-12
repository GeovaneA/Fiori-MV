sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        sPath: "",

        onEdit: function(oEvent) {
            //MessageToast.show("Botão editar");
            this._getSelectedRow();

            if(this._getModel("movelView").getProperty("/Userid") != undefined )
            
            else 
              alert("Nenhum item selecionado");

        },

        _getModel: function(sModel){
            return this.getView()._getModel(sModel);
        },
        _getSelectedRow: function(){
            this.sPath = this.getView().byId("listReport").getTable()._getSelectedContextPaths()[0];
            var sEmail = this._getModel().getProperty(this.sPath + "/Email");

            this._getModel("modelView").setProperty("/Userid", this._getModel("modelView").getProperty(this.sPath + "/Userid"));

            this._getModel("modelView").setProperty("/Email", sEmail);

            this._getModel("modelView").setProperty("/Fullname", this._getModel("modelView").getProperty(this.sPath + "/Fullname"));
        }
    };
});