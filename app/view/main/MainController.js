/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: ['App.view.main.Edit', 'App.model.Personnel', 'App.store.Personnel'],

    alias: 'controller.main',

    //Создаем форму если тыкнуть на строку в гриде
    onItemSelected: function (sender, record) {
        var form = Ext.create('App.view.main.Edit');

        Ext.getCmp('upd_id').setValue(record.data.id)
        Ext.getCmp('upd_name').setValue(record.data.name)
        Ext.getCmp('upd_email').setValue(record.data.email)

        form.show()
    },

    onCancel: function () {
        this.getView().destroy();
    },


    onDelete: function () {
        //Получаем данные из стор
        var store = Ext.getStore('personnel')
        //находим выделенную запись по id
        var id = Ext.getCmp('upd_id').getValue();
        var record = store.getAt(parseInt(id));

        Ext.MessageBox.confirm('Confirm','Are you sure?',function(btn){
            if (btn === 'yes'){
                //при подтверждении удаляем
                record.erase({
                    success: function() {
                        store.remove(record);
                        store.sync();
                    }
                });
            }})
        this.getView().destroy();
    },


    onUpdate: function () {
        //Получаем данные из строки
        var user_id = Ext.getCmp('upd_id').getValue();
        var name_id = Ext.getCmp('upd_name').getValue();
        var email_id = Ext.getCmp('upd_email').getValue();

        //Получаем данные из store
        var store = Ext.getStore('personnel');
        var record = store.getAt(user_id);

        //синхронизируем данные
        record.data.name = name_id;
        record.data.email = email_id;
        store.sync();

        //обновляем данные таблицы
        Ext.getCmp('dataList').getView().refresh();

        this.getView().destroy();
    },



    //функция добавления в грид
    onAdd: function () {
        var user_id = Ext.getCmp('id').getValue();
        var name_id = Ext.getCmp('name').getValue();
        var email_id = Ext.getCmp('id').getValue();

        var store = Ext.getStore('personnel');
        store.insert(0, [{id: user_id, name: name_id, email: email_id}]);
        store.sync();

        Ext.Msg.alert('Success', 'New user has been added.', Ext.emptyFn);

        console.log('store: ', store);
    }

});
