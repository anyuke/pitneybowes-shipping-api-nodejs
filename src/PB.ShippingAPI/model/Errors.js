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
 * The Errors model module.
 * @module PB.ShippingAPI/model/Errors
 * @version 1.0.0
 */
class Errors {
    /**
     * Constructs a new <code>Errors</code>.
     * Error messages sent back to the caller
     * @alias module:PB.ShippingAPI/model/Errors
     */
    constructor() { 
        
        Errors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/Errors} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/Errors} The populated <code>Errors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Errors();

            if (data.hasOwnProperty('additionalInfo')) {
                obj['additionalInfo'] = ApiClient.convertToType(data['additionalInfo'], 'String');
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('moreInfo')) {
                obj['moreInfo'] = ApiClient.convertToType(data['moreInfo'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * additionalInfo
 * @member {String} additionalInfo
 */
Errors.prototype['additionalInfo'] = undefined;

/**
 * errorCode
 * @member {String} errorCode
 */
Errors.prototype['errorCode'] = undefined;

/**
 * message
 * @member {String} message
 */
Errors.prototype['message'] = undefined;

/**
 * moreInfo
 * @member {String} moreInfo
 */
Errors.prototype['moreInfo'] = undefined;

/**
 * parameters
 * @member {Array.<String>} parameters
 */
Errors.prototype['parameters'] = undefined;






export default Errors;

