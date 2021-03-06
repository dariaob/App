/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
        title: 'Home',
        iconCls: 'fa-home',
        // первая страница с гридом
        items: [{
            xtype: 'tabpanel',
            layout: 'fit',
            items: [{
                xtype: 'mainlist'
            }]
        }]
    },
        {
        //вторая страница с формой
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'form',
            title: 'Add new user',
            id: 'usersForm',
            width: 400,
            layout: 'form',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Id',
                name: 'id',
                id: 'id',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
            },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    name: 'name',
                    id: 'name',
                    labelAlign: 'top',
                    cls: 'field-margin',
                    flex: 1
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    name: 'email',
                    id: 'email',
                    labelAlign: 'top',
                    cls: 'field-margin',
                    flex: 1
                }
            ],
            buttons: [{
                text: 'Save',
                handler: 'onAdd'
            }],
        }]
        // }, {
        // title: 'Groups',
        // iconCls: 'fa-users',
        // items: [{
        //     xtype: 'infolist'
        // }],
    },
     {
    //     title: 'Settings',
    //     iconCls: 'fa-cog',
    //     bind: {
    //         html: '{loremIpsum}'
    //     }
    }]
});
