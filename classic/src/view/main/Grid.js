/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    StoreId: 'usrList',
    frame: true,
    requires: [
        'App.store.Personnel', 'Ext.grid.column.Action'
    ],

    title: 'User info',

    store: {
        type: 'LizaPersonnel'
    },

    columns: [
        {text: 'id', dataIndex: 'id'},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        {
            text: 'Phone', dataIndex: 'phone', flex: 1
        },
        {
            text: 'Country', dataIndex: 'country', flex: 1
        },
        {
            text: 'Company', dataIndex: 'company', flex: 1
        }
    ],


});
