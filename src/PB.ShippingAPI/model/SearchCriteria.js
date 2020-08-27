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
 * The SearchCriteria model module.
 * @module PB.ShippingAPI/model/SearchCriteria
 * @version 1.0.0
 */
class SearchCriteria {
    /**
     * Constructs a new <code>SearchCriteria</code>.
     * @alias module:PB.ShippingAPI/model/SearchCriteria
     */
    constructor() { 
        
        SearchCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/SearchCriteria} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/SearchCriteria} The populated <code>SearchCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchCriteria();

            if (data.hasOwnProperty('developerId')) {
                obj['developerId'] = ApiClient.convertToType(data['developerId'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} developerId
 */
SearchCriteria.prototype['developerId'] = undefined;

/**
 * @member {String} fromDate
 */
SearchCriteria.prototype['fromDate'] = undefined;

/**
 * @member {String} toDate
 */
SearchCriteria.prototype['toDate'] = undefined;






export default SearchCriteria;
