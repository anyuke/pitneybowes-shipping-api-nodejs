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
 *
 */

import ApiClient from '../ApiClient';
import Address from './Address';

/**
 * The CustomsInfo model module.
 * @module PB.ShippingAPI/model/CustomsInfo
 * @version 1.0.0
 */
class CustomsInfo {
    /**
     * Constructs a new <code>CustomsInfo</code>.
     * @alias module:PB.ShippingAPI/model/CustomsInfo
     * @param currencyCode {String} ISO-4217
     */
    constructor(currencyCode) { 
        
        CustomsInfo.initialize(this, currencyCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currencyCode) { 
        obj['currencyCode'] = currencyCode;
    }

    /**
     * Constructs a <code>CustomsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CustomsInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CustomsInfo} The populated <code>CustomsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomsInfo();

            if (data.hasOwnProperty('EELPFC')) {
                obj['EELPFC'] = ApiClient.convertToType(data['EELPFC'], 'String');
            }
            if (data.hasOwnProperty('blanketEndDate')) {
                obj['blanketEndDate'] = ApiClient.convertToType(data['blanketEndDate'], 'String');
            }
            if (data.hasOwnProperty('blanketStartDate')) {
                obj['blanketStartDate'] = ApiClient.convertToType(data['blanketStartDate'], 'String');
            }
            if (data.hasOwnProperty('certificateNumber')) {
                obj['certificateNumber'] = ApiClient.convertToType(data['certificateNumber'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('customsDeclaredValue')) {
                obj['customsDeclaredValue'] = ApiClient.convertToType(data['customsDeclaredValue'], 'Number');
            }
            if (data.hasOwnProperty('declarationStatement')) {
                obj['declarationStatement'] = ApiClient.convertToType(data['declarationStatement'], 'String');
            }
            if (data.hasOwnProperty('freightCharge')) {
                obj['freightCharge'] = ApiClient.convertToType(data['freightCharge'], 'Number');
            }
            if (data.hasOwnProperty('fromCustomsReference')) {
                obj['fromCustomsReference'] = ApiClient.convertToType(data['fromCustomsReference'], 'String');
            }
            if (data.hasOwnProperty('handlingCosts')) {
                obj['handlingCosts'] = ApiClient.convertToType(data['handlingCosts'], 'Number');
            }
            if (data.hasOwnProperty('importerCustomsReference')) {
                obj['importerCustomsReference'] = ApiClient.convertToType(data['importerCustomsReference'], 'String');
            }
            if (data.hasOwnProperty('insuredAmount')) {
                obj['insuredAmount'] = ApiClient.convertToType(data['insuredAmount'], 'Number');
            }
            if (data.hasOwnProperty('insuredNumber')) {
                obj['insuredNumber'] = ApiClient.convertToType(data['insuredNumber'], 'String');
            }
            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('licenseNumber')) {
                obj['licenseNumber'] = ApiClient.convertToType(data['licenseNumber'], 'String');
            }
            if (data.hasOwnProperty('otherCharge')) {
                obj['otherCharge'] = ApiClient.convertToType(data['otherCharge'], 'Number');
            }
            if (data.hasOwnProperty('otherDescription')) {
                obj['otherDescription'] = ApiClient.convertToType(data['otherDescription'], 'String');
            }
            if (data.hasOwnProperty('otherType')) {
                obj['otherType'] = ApiClient.convertToType(data['otherType'], 'String');
            }
            if (data.hasOwnProperty('packingCosts')) {
                obj['packingCosts'] = ApiClient.convertToType(data['packingCosts'], 'Number');
            }
            if (data.hasOwnProperty('producerSpecification')) {
                obj['producerSpecification'] = ApiClient.convertToType(data['producerSpecification'], 'String');
            }
            if (data.hasOwnProperty('reasonForExport')) {
                obj['reasonForExport'] = ApiClient.convertToType(data['reasonForExport'], 'String');
            }
            if (data.hasOwnProperty('reasonForExportExplanation')) {
                obj['reasonForExportExplanation'] = ApiClient.convertToType(data['reasonForExportExplanation'], 'String');
            }
            if (data.hasOwnProperty('sdrValue')) {
                obj['sdrValue'] = ApiClient.convertToType(data['sdrValue'], 'Number');
            }
            if (data.hasOwnProperty('shippingDocumentType')) {
                obj['shippingDocumentType'] = ApiClient.convertToType(data['shippingDocumentType'], 'String');
            }
            if (data.hasOwnProperty('signatureContact')) {
                obj['signatureContact'] = Address.constructFromObject(data['signatureContact']);
            }
            if (data.hasOwnProperty('termsOfSale')) {
                obj['termsOfSale'] = ApiClient.convertToType(data['termsOfSale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} EELPFC
 */
CustomsInfo.prototype['EELPFC'] = undefined;

/**
 * format: YYYY-MM-DD
 * @member {String} blanketEndDate
 */
CustomsInfo.prototype['blanketEndDate'] = undefined;

/**
 * format: YYYY-MM-DD
 * @member {String} blanketStartDate
 */
CustomsInfo.prototype['blanketStartDate'] = undefined;

/**
 * @member {String} certificateNumber
 */
CustomsInfo.prototype['certificateNumber'] = undefined;

/**
 * @member {String} comments
 */
CustomsInfo.prototype['comments'] = undefined;

/**
 * ISO-4217
 * @member {String} currencyCode
 */
CustomsInfo.prototype['currencyCode'] = undefined;

/**
 * @member {Number} customsDeclaredValue
 */
CustomsInfo.prototype['customsDeclaredValue'] = undefined;

/**
 * @member {String} declarationStatement
 */
CustomsInfo.prototype['declarationStatement'] = undefined;

/**
 * @member {Number} freightCharge
 */
CustomsInfo.prototype['freightCharge'] = undefined;

/**
 * @member {String} fromCustomsReference
 */
CustomsInfo.prototype['fromCustomsReference'] = undefined;

/**
 * @member {Number} handlingCosts
 */
CustomsInfo.prototype['handlingCosts'] = undefined;

/**
 * @member {String} importerCustomsReference
 */
CustomsInfo.prototype['importerCustomsReference'] = undefined;

/**
 * @member {Number} insuredAmount
 */
CustomsInfo.prototype['insuredAmount'] = undefined;

/**
 * @member {String} insuredNumber
 */
CustomsInfo.prototype['insuredNumber'] = undefined;

/**
 * @member {String} invoiceNumber
 */
CustomsInfo.prototype['invoiceNumber'] = undefined;

/**
 * @member {String} licenseNumber
 */
CustomsInfo.prototype['licenseNumber'] = undefined;

/**
 * @member {Number} otherCharge
 */
CustomsInfo.prototype['otherCharge'] = undefined;

/**
 * @member {String} otherDescription
 */
CustomsInfo.prototype['otherDescription'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CustomsInfo.OtherTypeEnum} otherType
 */
CustomsInfo.prototype['otherType'] = undefined;

/**
 * @member {Number} packingCosts
 */
CustomsInfo.prototype['packingCosts'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CustomsInfo.ProducerSpecificationEnum} producerSpecification
 */
CustomsInfo.prototype['producerSpecification'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CustomsInfo.ReasonForExportEnum} reasonForExport
 */
CustomsInfo.prototype['reasonForExport'] = undefined;

/**
 * @member {String} reasonForExportExplanation
 */
CustomsInfo.prototype['reasonForExportExplanation'] = undefined;

/**
 * @member {Number} sdrValue
 */
CustomsInfo.prototype['sdrValue'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CustomsInfo.ShippingDocumentTypeEnum} shippingDocumentType
 */
CustomsInfo.prototype['shippingDocumentType'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} signatureContact
 */
CustomsInfo.prototype['signatureContact'] = undefined;

/**
 * @member {String} termsOfSale
 */
CustomsInfo.prototype['termsOfSale'] = undefined;





/**
 * Allowed values for the <code>otherType</code> property.
 * @enum {String}
 * @readonly
 */
CustomsInfo['OtherTypeEnum'] = {

    /**
     * value: "COMMISSIONS"
     * @const
     */
    "COMMISSIONS": "COMMISSIONS",

    /**
     * value: "DISCOUNTS"
     * @const
     */
    "DISCOUNTS": "DISCOUNTS",

    /**
     * value: "HANDLING_FEES"
     * @const
     */
    "HANDLING_FEES": "HANDLING_FEES",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "ROYALTIES_AND_LICENSE_FEES"
     * @const
     */
    "ROYALTIES_AND_LICENSE_FEES": "ROYALTIES_AND_LICENSE_FEES",

    /**
     * value: "TAXES"
     * @const
     */
    "TAXES": "TAXES"
};


/**
 * Allowed values for the <code>producerSpecification</code> property.
 * @enum {String}
 * @readonly
 */
CustomsInfo['ProducerSpecificationEnum'] = {

    /**
     * value: "MULTIPLE_SPECIFIED"
     * @const
     */
    "MULTIPLE_SPECIFIED": "MULTIPLE_SPECIFIED",

    /**
     * value: "SAME"
     * @const
     */
    "SAME": "SAME",

    /**
     * value: "SINGLE_SPECIFIED"
     * @const
     */
    "SINGLE_SPECIFIED": "SINGLE_SPECIFIED",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "AVAILABLE_UPON_REQUEST"
     * @const
     */
    "AVAILABLE_UPON_REQUEST": "AVAILABLE_UPON_REQUEST"
};


/**
 * Allowed values for the <code>reasonForExport</code> property.
 * @enum {String}
 * @readonly
 */
CustomsInfo['ReasonForExportEnum'] = {

    /**
     * value: "GIFT"
     * @const
     */
    "GIFT": "GIFT",

    /**
     * value: "COMMERCIAL_SAMPLE"
     * @const
     */
    "COMMERCIAL_SAMPLE": "COMMERCIAL_SAMPLE",

    /**
     * value: "MERCHANDISE"
     * @const
     */
    "MERCHANDISE": "MERCHANDISE",

    /**
     * value: "DOCUMENTS"
     * @const
     */
    "DOCUMENTS": "DOCUMENTS",

    /**
     * value: "RETURNED_GOODS"
     * @const
     */
    "RETURNED_GOODS": "RETURNED_GOODS",

    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",

    /**
     * value: "NOT_SOLD"
     * @const
     */
    "NOT_SOLD": "NOT_SOLD",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "DANGEROUS_GOOD"
     * @const
     */
    "DANGEROUS_GOOD": "DANGEROUS_GOOD",

    /**
     * value: "HUMANITARIAN_GOODS"
     * @const
     */
    "HUMANITARIAN_GOODS": "HUMANITARIAN_GOODS"
};


/**
 * Allowed values for the <code>shippingDocumentType</code> property.
 * @enum {String}
 * @readonly
 */
CustomsInfo['ShippingDocumentTypeEnum'] = {

    /**
     * value: "NAFTA"
     * @const
     */
    "NAFTA": "NAFTA",

    /**
     * value: "COO"
     * @const
     */
    "COO": "COO"
};



export default CustomsInfo;

