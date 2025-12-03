What is NPM? Why do we use it? Step-by-step set-up guide! - Keywords - NPM, .gitignore, Package.json, Packages, Node modules, Node, Scripts - NPM is a package manager, Package --> an External programme we can install in our application (code) - NPM is going to keep track of our installed packages. - NPM - (is the app store/programmes) - Check if a package is reliable

===========================================================================================================================================

NPM Set-up -
STEP 1 - Initialise NPM in our app. (In terminal - npm init -y) - bash is a type of terminal - (add "type": "module" to your package.json) -

STEP 2 - Install packages - Check docs to know exactly how to install a package - (bash - npm i packageName) - (npm uninstall -g cowsay) - (-g means globally) -

STEP 3 - Add .gitignore file - This file will contain the names of those files or folders you do not want to push to github - (never push the nodes to git hub) - We will always add `node modules` to the .gitignore - Other files added include files with secret information (Passwords, Tokens, Keys etc).

common.js is a dialect of javascript - When we declare a variable we use `let` <-- es6 and `const`<-- es6, `var` --> is commonjs - commonjs and ES6 --> JS dialects (syntactic versions of JS) - (async and await is also ES6) - (.then is commonjs) -

EXTRA STEP - Add new scripts to your package.json - add a package to your .json.
