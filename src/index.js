import {getByDataSetId} from './get-by'

export const registerCommand = (name = 'getByDataSetId') => {
    const getByCommand = getByDataSetId(name)
    Cypress.Commands.add(name, getByCommand)
}