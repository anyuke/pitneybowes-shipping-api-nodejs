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
 * The CrossBorderQuotesRequestUnitWeight model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesRequestUnitWeight
 * @version 1.0.0
 */
class CrossBorderQuotesRequestUnitWeight {
    /**
     * Constructs a new <code>CrossBorderQuotesRequestUnitWeight</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesRequestUnitWeight
     * @param weight {Number} 
     * @param unitOfMeasurement {String} 
     */
    constructor(weight, unitOfMeasurement) { 
        
        CrossBorderQuotesRequestUnitWeight.initialize(this, weight, unitOfMeasurement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, weight, unitOfMeasurement) { 
        obj['weight'] = weight;
        obj['unitOfMeasurement'] = unitOfMeasurement;
    }

    /**
     * Constructs a <code>CrossBorderQuotesRequestUnitWeight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesRequestUnitWeight} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesRequestUnitWeight} The populated <code>CrossBorderQuotesRequestUnitWeight</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesRequestUnitWeight();

            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('unitOfMeasurement')) {
                obj['unitOfMeasurement'] = ApiClient.convertToType(data['unitOfMeasurement'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} weight
 */
CrossBorderQuotesRequestUnitWeight.prototype['weight'] = undefined;

/**
 * @member {String} unitOfMeasurement
 */
CrossBorderQuotesRequestUnitWeight.prototype['unitOfMeasurement'] = undefined;






export default CrossBorderQuotesRequestUnitWeight;
