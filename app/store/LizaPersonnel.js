Ext.define('App.store.LizaPersonnel', {
    extend: 'Ext.data.Store',
    alias: 'store.LizaPersonnel',
    model: 'App.model.UserPersonnel',
    storeId: 'LizaPersonnel',
    data: { items: [
            {id: 4, name: 'Лиза Симпсон',     email: "mr.data@enterprise.com", phone: '+79994458592', country:'Russia', company: 'School' }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
