/**
 * This view is an example list of people.
 */
Ext.define('App.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: 'dataList',
    frame: true,
    actions: {
        seeMore: {
            iconCls: 'button'
        }
    },
    requires: [
        'App.store.Personnel', 'Ext.grid.column.Action', 'Ext.button.Button'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'id', dataIndex: 'id'},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { xtype: 'actioncolumn',
            text: 'Info',
            width: 50,
            menuDisabled: true,
            sortable: false,
            items: [{
                iconCls: 'x-fa fa-check green icon-margin',
                xtype: 'button',
                text: 'Info',
                scale: 'medium',
                handler: 'onApprove'}]
        }],


    listeners: {
        select: 'onItemSelected'
    }
});
