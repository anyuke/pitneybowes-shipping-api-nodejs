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

export class ParcelProtectionPolicyResponseShipperInfoAddress {
    'street1'?: string;
    'street2'?: string;
    'street3'?: string;
    'city'?: string;
    'region'?: string;
    'country'?: string;
    'postalCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "street1",
            "baseName": "street1",
            "type": "string"
        },
        {
            "name": "street2",
            "baseName": "street2",
            "type": "string"
        },
        {
            "name": "street3",
            "baseName": "street3",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ParcelProtectionPolicyResponseShipperInfoAddress.attributeTypeMap;
    }
}
