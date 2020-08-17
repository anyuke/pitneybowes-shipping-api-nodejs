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
import { CrossBorderQuotesResponseLineRates } from './crossBorderQuotesResponseLineRates';
import { CrossBorderQuotesResponseUnitRates } from './crossBorderQuotesResponseUnitRates';

export class CrossBorderQuotesResponseQuoteLines {
    'lineId'?: string;
    'itemId'?: string;
    'quoteLineId'?: string;
    'quantity'?: number;
    'unitRates'?: CrossBorderQuotesResponseUnitRates;
    'lineRates'?: CrossBorderQuotesResponseLineRates;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lineId",
            "baseName": "lineId",
            "type": "string"
        },
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string"
        },
        {
            "name": "quoteLineId",
            "baseName": "quoteLineId",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "unitRates",
            "baseName": "unitRates",
            "type": "CrossBorderQuotesResponseUnitRates"
        },
        {
            "name": "lineRates",
            "baseName": "lineRates",
            "type": "CrossBorderQuotesResponseLineRates"
        }    ];

    static getAttributeTypeMap() {
        return CrossBorderQuotesResponseQuoteLines.attributeTypeMap;
    }
}
