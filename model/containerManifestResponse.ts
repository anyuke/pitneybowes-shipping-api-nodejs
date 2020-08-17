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
import { ContainerManifestResponseData } from './containerManifestResponseData';

export class ContainerManifestResponse {
    'data'?: ContainerManifestResponseData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ContainerManifestResponseData"
        }    ];

    static getAttributeTypeMap() {
        return ContainerManifestResponse.attributeTypeMap;
    }
}
