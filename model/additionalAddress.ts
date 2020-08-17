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
import { Address } from './address';

export class AdditionalAddress {
    'address': Address;
    'addressType': AdditionalAddress.AddressTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "addressType",
            "baseName": "addressType",
            "type": "AdditionalAddress.AddressTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalAddress.attributeTypeMap;
    }
}

export namespace AdditionalAddress {
    export enum AddressTypeEnum {
        HOLD = <any> 'HOLD',
        BROKER = <any> 'BROKER',
        THIRDPARTY = <any> 'THIRD_PARTY',
        PICKUP = <any> 'PICKUP',
        EXPORTER = <any> 'EXPORTER'
    }
}