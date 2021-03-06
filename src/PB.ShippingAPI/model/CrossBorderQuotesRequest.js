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
import CarrierFacilityResponseCarrierFacilityOptions from './CarrierFacilityResponseCarrierFacilityOptions';
import CrossBorderQuotesRequestBasketItems from './CrossBorderQuotesRequestBasketItems';
import CrossBorderQuotesRequestRates from './CrossBorderQuotesRequestRates';

/**
 * The CrossBorderQuotesRequest model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesRequest
 * @version 1.0.0
 */
class CrossBorderQuotesRequest {
    /**
     * Constructs a new <code>CrossBorderQuotesRequest</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesRequest
     * @param quoteCurrency {String} The currency to return the quote in. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR
     * @param basketCurrency {String} The default currency of the basket. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR
     * @param toAddress {module:PB.ShippingAPI/model/Address} 
     * @param basketItems {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesRequestBasketItems>} The items in the buyer's shopping basket.
     * @param rates {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates>} Specifies the carrier, service, parcel, and other information. In a response, this field also contains the service charges. Importatn- In a request, the rates array can contain only one rates object.
     */
    constructor(quoteCurrency, basketCurrency, toAddress, basketItems, rates) { 
        
        CrossBorderQuotesRequest.initialize(this, quoteCurrency, basketCurrency, toAddress, basketItems, rates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, quoteCurrency, basketCurrency, toAddress, basketItems, rates) { 
        obj['quoteCurrency'] = quoteCurrency;
        obj['basketCurrency'] = basketCurrency;
        obj['toAddress'] = toAddress;
        obj['basketItems'] = basketItems;
        obj['rates'] = rates;
    }

    /**
     * Constructs a <code>CrossBorderQuotesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesRequest} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesRequest} The populated <code>CrossBorderQuotesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesRequest();

            if (data.hasOwnProperty('quoteCurrency')) {
                obj['quoteCurrency'] = ApiClient.convertToType(data['quoteCurrency'], 'String');
            }
            if (data.hasOwnProperty('basketCurrency')) {
                obj['basketCurrency'] = ApiClient.convertToType(data['basketCurrency'], 'String');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = Address.constructFromObject(data['fromAddress']);
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = Address.constructFromObject(data['toAddress']);
            }
            if (data.hasOwnProperty('basketItems')) {
                obj['basketItems'] = ApiClient.convertToType(data['basketItems'], [CrossBorderQuotesRequestBasketItems]);
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], [CrossBorderQuotesRequestRates]);
            }
            if (data.hasOwnProperty('shipmentOptions')) {
                obj['shipmentOptions'] = ApiClient.convertToType(data['shipmentOptions'], [CarrierFacilityResponseCarrierFacilityOptions]);
            }
        }
        return obj;
    }


}

/**
 * The currency to return the quote in. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR
 * @member {String} quoteCurrency
 */
CrossBorderQuotesRequest.prototype['quoteCurrency'] = undefined;

/**
 * The default currency of the basket. Use three uppercase letters, per the ISO currency code (ISO 4217). For example- USD, CAD, or EUR
 * @member {String} basketCurrency
 */
CrossBorderQuotesRequest.prototype['basketCurrency'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} fromAddress
 */
CrossBorderQuotesRequest.prototype['fromAddress'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} toAddress
 */
CrossBorderQuotesRequest.prototype['toAddress'] = undefined;

/**
 * The items in the buyer's shopping basket.
 * @member {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesRequestBasketItems>} basketItems
 */
CrossBorderQuotesRequest.prototype['basketItems'] = undefined;

/**
 * Specifies the carrier, service, parcel, and other information. In a response, this field also contains the service charges. Importatn- In a request, the rates array can contain only one rates object.
 * @member {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates>} rates
 */
CrossBorderQuotesRequest.prototype['rates'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CarrierFacilityResponseCarrierFacilityOptions>} shipmentOptions
 */
CrossBorderQuotesRequest.prototype['shipmentOptions'] = undefined;






export default CrossBorderQuotesRequest;

