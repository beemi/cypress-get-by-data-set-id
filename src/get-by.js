export const getByDataSetId = (name) => (value) => {
    cy.log(`**${name}**`);
    cy.get(`[data-test-id=${value}]`)
}