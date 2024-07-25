# Hardhat Test Snippets



| Syntax      | Description |
| ----------- | ----------- |
|`ts-describe-load`| New Describe with loadFixture | 
|`ts-describe`| New Describe | 
|`ts-it`| New It | 
|`ts-loadFixture`| LoadFixture  `const { SomeObj } = await loadFixture(initFixture)`"| 


## Pre Requisites 
Install the following extension in case if you already not.  
[Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter)

### In VS Code settings file add the following:-
```javascript
"mochaExplorer.files": "test/**/*.{js,ts}",
"mochaExplorer.require": "hardhat/register",
```
To Enable Test explorer   
`Cmd+Shift+P -> Moch Test Explorer: Enable for a workspace folder`