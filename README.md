# Cypress custom command

Cypress get element by data-set-id custom command.

# Install and use

```npm i -D cypress-get-by-data-set-id```

In the spec file, I will use the name of the package.

```
import {registerCommand} from "cypress-get-by-data-set-id";
registerCommand();
...

Example:

cy.getByDataSetId('first-name')
                .should("be.visible")
                .click();

```



## Contact
[beemi.raja@gmail.com](beemi.raja@gmail.com)