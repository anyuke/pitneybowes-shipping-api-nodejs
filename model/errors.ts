/**
 * Shipping API
 * Shipping API Sample.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@pb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Error messages sent back to the caller
*/
export class Errors {
    /**
    * additionalInfo
    */
    'additionalInfo'?: string;
    /**
    * errorCode
    */
    'errorCode'?: string;
    /**
    * message
    */
    'message'?: string;
    /**
    * moreInfo
    */
    'moreInfo'?: string;
    /**
    * parameters
    */
    'parameters'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "moreInfo",
            "baseName": "moreInfo",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Errors.attributeTypeMap;
    }
}
