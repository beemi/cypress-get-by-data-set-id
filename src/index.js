import {getByDataSetId} from './get-by'

export const registerCommand = (name = 'getByDataSetId') => {
    const getByDataSetId = getByDataSetId(name)
    Cypress.Commands.add(name, getByDataSetId)
}