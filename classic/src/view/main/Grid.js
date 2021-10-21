/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    id: 'usrList',
    frame: true,
    actions: {
        seeMore: {
            iconCls: 'button'
        }
    },
    requires: [
        'App.store.LizaPersonnel', 'Ext.grid.column.Action',  'Ext.button.Button'
    ],

    title: 'User info',

    store: {
        type: 'LizaPersonnel'
    },

    columns: [
        {text: 'id', dataIndex: 'id'},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: "phone", flex: 1 },
        { text: 'Country', dataIndex: 'country', flex: 1 },
        { text: 'Company', dataIndex: 'company', flex: 1 }
],


    listeners: {
        select: 'onItemSelected'
    }
});
