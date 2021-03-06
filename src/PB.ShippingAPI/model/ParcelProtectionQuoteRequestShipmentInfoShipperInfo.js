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
import ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress from './ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress';

/**
 * The ParcelProtectionQuoteRequestShipmentInfoShipperInfo model module.
 * @module PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo
 * @version 1.0.0
 */
class ParcelProtectionQuoteRequestShipmentInfoShipperInfo {
    /**
     * Constructs a new <code>ParcelProtectionQuoteRequestShipmentInfoShipperInfo</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo
     * @param shipperID {String} 
     * @param address {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress} 
     */
    constructor(shipperID, address) { 
        
        ParcelProtectionQuoteRequestShipmentInfoShipperInfo.initialize(this, shipperID, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, shipperID, address) { 
        obj['shipperID'] = shipperID;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>ParcelProtectionQuoteRequestShipmentInfoShipperInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo} The populated <code>ParcelProtectionQuoteRequestShipmentInfoShipperInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionQuoteRequestShipmentInfoShipperInfo();

            if (data.hasOwnProperty('shipperID')) {
                obj['shipperID'] = ApiClient.convertToType(data['shipperID'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress.constructFromObject(data['address']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} shipperID
 */
ParcelProtectionQuoteRequestShipmentInfoShipperInfo.prototype['shipperID'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress} address
 */
ParcelProtectionQuoteRequestShipmentInfoShipperInfo.prototype['address'] = undefined;






export default ParcelProtectionQuoteRequestShipmentInfoShipperInfo;

