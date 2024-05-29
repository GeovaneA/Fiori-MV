sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/ui/core/mvc/Controller"
], function(Fragment) {
    'use strict';

    return {

        sPath: "",
        onEdit: function(oEvent) {
            this._getSelectedRow();
            if(this._getModel("modelView").getProperty("/Idperson") != undefined)
                this._getValueHelpRequest();
            
            //else


        },

        _getModel: function(sModel){
            return this.getView().getModel(sModel);
        },

        _getSelectedRow: function(){

            this.sPath = this.getView().byId("listReport").getTable().getSelectedContextPaths()[0];
            var sName = this._getModel().getProperty(this.sPath + "/Fullname");
            this._getModel("modelView").setProperty("/Idperson", this._getModel().getProperty(this.sPath + "/Idperson"))

            this._getModel("modelView").setProperty("/Fullname", sName);
        },

        _getValueHelpRequest: function(){
            var oView = this.getView();

            if (!this._pValueHelpDialog){
                this._pValueHelpDialog = Fragment.load({
                    id: oView.getId(),
                    name: "com.moovi.zui5.relatorio.base.pessoa.fragment.DialogEdit",
                    controller: this
                }).then(function (oValueHelpDialog){
                    oView.addDependent(oValueHelpDialog);
                    return oValueHelpDialog;
                });
            }

            this._pValueHelpDialog.then(function(oValueHelpDialog){
                oValueHelpDialog.open();
            }.bind(this));
            
        },

        onSave: function(){
            this._getModel().setProperty(this.sPath + "/Fullname", this._getModel("modelView").getProperty("/Fullname"));

            this._getModel().submitChanges();
            this._getModel().refresh();

            this.onClose();
        },

        onClose: function(){
            this.oDialog = this.getView().byId("ListDialog");
            this.oDialog.close();
        }
    };
});