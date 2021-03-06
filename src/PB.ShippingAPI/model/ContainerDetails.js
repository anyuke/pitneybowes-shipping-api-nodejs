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
import CommodityInfo from './CommodityInfo';

/**
 * The ContainerDetails model module.
 * @module PB.ShippingAPI/model/ContainerDetails
 * @version 1.0.0
 */
class ContainerDetails {
    /**
     * Constructs a new <code>ContainerDetails</code>.
     * @alias module:PB.ShippingAPI/model/ContainerDetails
     */
    constructor() { 
        
        ContainerDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ContainerDetails} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ContainerDetails} The populated <code>ContainerDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerDetails();

            if (data.hasOwnProperty('commodityInfo')) {
                obj['commodityInfo'] = ApiClient.convertToType(data['commodityInfo'], [CommodityInfo]);
            }
            if (data.hasOwnProperty('containerType')) {
                obj['containerType'] = ApiClient.convertToType(data['containerType'], 'String');
            }
            if (data.hasOwnProperty('packagingType')) {
                obj['packagingType'] = ApiClient.convertToType(data['packagingType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/CommodityInfo>} commodityInfo
 */
ContainerDetails.prototype['commodityInfo'] = undefined;

/**
 * @member {String} containerType
 */
ContainerDetails.prototype['containerType'] = undefined;

/**
 * @member {String} packagingType
 */
ContainerDetails.prototype['packagingType'] = undefined;






export default ContainerDetails;

