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

/**
 * The CrossBorderQuotesRequestRates model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesRequestRates
 * @version 1.0.0
 */
class CrossBorderQuotesRequestRates {
    /**
     * Constructs a new <code>CrossBorderQuotesRequestRates</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates
     */
    constructor() { 
        
        CrossBorderQuotesRequestRates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CrossBorderQuotesRequestRates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesRequestRates} The populated <code>CrossBorderQuotesRequestRates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesRequestRates();

            if (data.hasOwnProperty('carrier')) {
                obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} carrier
 */
CrossBorderQuotesRequestRates.prototype['carrier'] = undefined;

/**
 * @member {String} serviceId
 */
CrossBorderQuotesRequestRates.prototype['serviceId'] = undefined;






export default CrossBorderQuotesRequestRates;

