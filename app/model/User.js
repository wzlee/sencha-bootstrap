Ext.define('myApp.model.User', {
    extend: 'Ext.data.Model',
	requires: [
		'Ext.data.identifier.Uuid'
	],
    config: {
        fields: [
            {name: 'email',  type: 'string'},
            {name: 'loginKey', type: 'string'},
        ],
		validations: [
            {type: 'presence',  field: 'email'},
			{type: 'presence',  field: 'loginKey'},
        ],
		proxy: {
            type: 'localstorage',
            id  : 'userStorage'
        },
		identifier: 'uuid'
    },

});