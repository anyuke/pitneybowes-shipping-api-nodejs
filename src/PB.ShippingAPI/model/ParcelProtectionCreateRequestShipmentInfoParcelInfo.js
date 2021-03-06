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
import ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList from './ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList';

/**
 * The ParcelProtectionCreateRequestShipmentInfoParcelInfo model module.
 * @module PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfo
 * @version 1.0.0
 */
class ParcelProtectionCreateRequestShipmentInfoParcelInfo {
    /**
     * Constructs a new <code>ParcelProtectionCreateRequestShipmentInfoParcelInfo</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfo
     */
    constructor() { 
        
        ParcelProtectionCreateRequestShipmentInfoParcelInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParcelProtectionCreateRequestShipmentInfoParcelInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfo} The populated <code>ParcelProtectionCreateRequestShipmentInfoParcelInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionCreateRequestShipmentInfoParcelInfo();

            if (data.hasOwnProperty('commodityList')) {
                obj['commodityList'] = ApiClient.convertToType(data['commodityList'], [ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList>} commodityList
 */
ParcelProtectionCreateRequestShipmentInfoParcelInfo.prototype['commodityList'] = undefined;






export default ParcelProtectionCreateRequestShipmentInfoParcelInfo;

