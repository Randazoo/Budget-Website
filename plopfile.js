module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{properCase name}}/{{properCase name}}.jsx',
      templateFile: 'plop-templates/Component.jsx.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: 'src/components/{{properCase name}}/{{properCase name}}.module.css',
      templateFile: 'plop-templates/Component.module.css.hbs',
      abortOnFail: true
    }]
  });

  // api route generator
  plop.setGenerator('api-route', {
    description: 'Create an API route',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of the API route?'
    }],
    actions: [{
      type: 'add',
      path: 'pages/api/{{kebabCase name}}.js',
      templateFile: 'plop-templates/ApiRoute.js.hbs',
      abortOnFail: true
    }]
  });
};