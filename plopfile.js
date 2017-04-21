const ROOT = 'app';

module.exports = function(plop) {

  // create util function
  plop.setGenerator('util', {
    description : 'Create Utility function',
    prompts : [
      {
        type : 'input',
        name : 'name',
        message : 'name: ',
        validate : function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
      }
    ],
    actions : [
      {
        type: 'add',
        path : ROOT + '/utils/{{ dashCase name }}.js',
        templateFile : './plop-templates/util.txt'
      }
    ]
  });

	// create component
	plop.setGenerator('component', {
		description : 'Create Component',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/components/{{ properCase name }}/index.js',
				templateFile : './plop-templates/component.txt'
			}
		]
	});
	// -- end component

		// create screen
	plop.setGenerator('screen', {
		description : 'Create Screen',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/screens/{{ properCase name }}/index.js',
				templateFile : './plop-templates/screen.txt'
			}
		]
	});
	// -- end screen

		// create store
	plop.setGenerator('store', {
		description : 'Create Store',
		prompts : [
			{
				type : 'input',
				name : 'name',
				message : 'name: ',
				validate : function (value) {
						if ((/.+/).test(value)) { return true; }
						return 'name is required';
				}
			}
		],
		actions : [
			{
				type: 'add',
				path : ROOT + '/stores/{{ properCase name }}.js',
				templateFile : './plop-templates/store.txt'
			}
		]
	});
	// -- end store

}
