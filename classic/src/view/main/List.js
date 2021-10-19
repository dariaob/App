/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: 'dataList',
    requires: [
        'App.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'id', dataIndex: 'id'},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
