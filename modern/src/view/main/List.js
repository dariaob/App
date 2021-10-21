/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        'App.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        itemdblclick: 'onItemSelected'
    }
});
