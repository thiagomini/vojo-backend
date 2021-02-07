import {ValidationError} from "@nestjs/common";
import {ValidationException} from "@/shared/exceptions/validation.exception";

/**
 * @description Cria a mensagem de erro para uma propriedade que falhou na validação.
 * Leva em conta se a propriedade possui validações "filhas", ou seja, se é um objeto.
 * @example
 *     const error = {
 *         target: location,
 *         property: 'location',
 *         value: { city: 'Alegre', state: 'ES' },
 *         children: [
 *             {
 *                 target: { city: 'Alegre', state: 'ES' },
 *                 property: 'country',
 *                 value: undefined,
 *                 constraints: {
 *                     isNotEmpty: 'country should not be empty',
 *                     isString: 'country must be a string'
 *                 }
 *             }
 *         ]
 *
 *     }
 *     _getPropertyErrorMessage(error)
 *      =>
 *      {
 *          location: {
 *              country: [
 *                  'country must be a string',
 *                  'country should not be empty'
 *              ]
 *          }
 *     }
 *
 * @param {ValidationError} error
 */
function _getPropertyErrorMessage(error: ValidationError): object {
    return  {
        [error.property]: error.children.length
            ? error.children.map(child => {
                const propertyErrors = {}
                propertyErrors[`${child.property}`] = Object.values(child.constraints)
                return propertyErrors
            })
            : Object.values(error.constraints)
    }
}

/**
 * @description Fábrica para criação de objeto de erro de acordo com as validações que falharam.
 * @param {ValidationError[]} errors - Erros de validação
 */
export const exceptionFactory = (errors: ValidationError[]): ValidationException => {
    let fields = {}

    errors.forEach(err => {
        const propertyErrorMessages = _getPropertyErrorMessage(err);
        fields = {
            ...fields,
            ...propertyErrorMessages
        }
    })

    return new ValidationException(fields)
}
