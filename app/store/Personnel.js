/*
* Все данные с пользователями
* */
Ext.define('App.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'personnel',
    alias: 'store.personnel',
    model: 'App.model.Personnel',

    data: { items: [
        {id: 1, name: 'Женя Лук', email: "jeanluc.picard@enterprise.com"},
        {id: 2, name: 'Диана Ворф',     email: "worf.moghsson@enterprise.com" },
        {id: 3, name: 'Дин Трой',   email: "deanna.troi@enterprise.com" },
        {id: 4, name: 'Лиза Симпсон',     email: "mr.data@enterprise.com" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
