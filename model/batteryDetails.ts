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

export class BatteryDetails {
    'batteryMaterial'?: string;
    'batteryPackaging'?: string;
    'regulatory'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "batteryMaterial",
            "baseName": "batteryMaterial",
            "type": "string"
        },
        {
            "name": "batteryPackaging",
            "baseName": "batteryPackaging",
            "type": "string"
        },
        {
            "name": "regulatory",
            "baseName": "regulatory",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BatteryDetails.attributeTypeMap;
    }
}
