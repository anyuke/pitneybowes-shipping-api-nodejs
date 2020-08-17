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

export class Address {
    'addressLines'?: Array<string>;
    'carrierRoute'?: string;
    'cityTown'?: string;
    'company'?: string;
    /**
    * 2-character country code (ISO-3166-1 alpha-2)
    */
    'countryCode': string;
    'deliveryPoint'?: string;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'postalCode'?: string;
    'residential'?: boolean;
    'stateProvince'?: string;
    'status'?: Address.StatusEnum;
    'taxId'?: string;
    'taxIdType'?: Address.TaxIdTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLines",
            "baseName": "addressLines",
            "type": "Array<string>"
        },
        {
            "name": "carrierRoute",
            "baseName": "carrierRoute",
            "type": "string"
        },
        {
            "name": "cityTown",
            "baseName": "cityTown",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "deliveryPoint",
            "baseName": "deliveryPoint",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "residential",
            "baseName": "residential",
            "type": "boolean"
        },
        {
            "name": "stateProvince",
            "baseName": "stateProvince",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Address.StatusEnum"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        },
        {
            "name": "taxIdType",
            "baseName": "taxIdType",
            "type": "Address.TaxIdTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}

export namespace Address {
    export enum StatusEnum {
        PARSED = <any> 'PARSED',
        VALIDATEDCHANGED = <any> 'VALIDATED_CHANGED',
        VALIDATEDANDNOTCHANGED = <any> 'VALIDATED_AND_NOT_CHANGED',
        NOTCHANGED = <any> 'NOT_CHANGED'
    }
    export enum TaxIdTypeEnum {
        EIN = <any> 'EIN',
        GST = <any> 'GST',
        VAT = <any> 'VAT',
        RFC = <any> 'RFC',
        EORI = <any> 'EORI'
    }
}