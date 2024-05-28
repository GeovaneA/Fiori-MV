sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        sPath: "",

        onEdit: function(oEvent) {
            //MessageToast.show("Botão editar");
                     // alert("teste")
            this._getSelectedRow();

            if(this._getModel("modelView").getProperty("/Userid") != undefined )
                this._onOpenDialog()
            else 
                alert("Nenhum item selecionado")
        },

        _getModel: function(sModel){
            return this.getView().getModel(sModel);
        },
        _getSelectedRow: function(){
            this.sPath = this.getView().byId("listReport").getTable().getSelectedContextPaths()[0];
            var sEmail = this._getModel().getProperty(this.sPath + "/Email");
            var sUserid = this._getModel().getProperty(this.sPath + "/Userid");

        //    this._getModel("modelView").setProperty("/Userid", this._getModel("modelView").getProperty(this.sPath + "/Userid"));

           this._getModel("modelView").setProperty("/Userid", sUserid);
            this._getModel("modelView").setProperty("/Email", sEmail);

            this._getModel("modelView").setProperty("/Fullname", this._getModel().getProperty(this.sPath + "/Fullname"));
        },

        _onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "com.moovi.zui5.relatorio.base.conhecimento.fragment.DialogEdit"
            });
        
            this.pDialogEdit.then((oDialog) => oDialog.open());
        }
    };
});