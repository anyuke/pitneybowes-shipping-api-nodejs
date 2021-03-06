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
import ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo from './ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo';
import ParcelProtectionQuoteRequestShipmentInfoParcelInfo from './ParcelProtectionQuoteRequestShipmentInfoParcelInfo';
import ParcelProtectionQuoteRequestShipmentInfoShipperInfo from './ParcelProtectionQuoteRequestShipmentInfoShipperInfo';

/**
 * The ParcelProtectionQuoteRequestShipmentInfo model module.
 * @module PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfo
 * @version 1.0.0
 */
class ParcelProtectionQuoteRequestShipmentInfo {
    /**
     * Constructs a new <code>ParcelProtectionQuoteRequestShipmentInfo</code>.
     * @alias module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfo
     * @param carrier {String} 
     * @param serviceId {String} 
     * @param insuranceCoverageValue {Number} 
     * @param insuranceCoverageValueCurrency {String} 
     * @param parcelInfo {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo} 
     * @param shipperInfo {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo} 
     * @param consigneeInfo {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo} 
     */
    constructor(carrier, serviceId, insuranceCoverageValue, insuranceCoverageValueCurrency, parcelInfo, shipperInfo, consigneeInfo) { 
        
        ParcelProtectionQuoteRequestShipmentInfo.initialize(this, carrier, serviceId, insuranceCoverageValue, insuranceCoverageValueCurrency, parcelInfo, shipperInfo, consigneeInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, carrier, serviceId, insuranceCoverageValue, insuranceCoverageValueCurrency, parcelInfo, shipperInfo, consigneeInfo) { 
        obj['carrier'] = carrier;
        obj['serviceId'] = serviceId;
        obj['insuranceCoverageValue'] = insuranceCoverageValue;
        obj['insuranceCoverageValueCurrency'] = insuranceCoverageValueCurrency;
        obj['parcelInfo'] = parcelInfo;
        obj['shipperInfo'] = shipperInfo;
        obj['consigneeInfo'] = consigneeInfo;
    }

    /**
     * Constructs a <code>ParcelProtectionQuoteRequestShipmentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfo} The populated <code>ParcelProtectionQuoteRequestShipmentInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParcelProtectionQuoteRequestShipmentInfo();

            if (data.hasOwnProperty('carrier')) {
                obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('insuranceCoverageValue')) {
                obj['insuranceCoverageValue'] = ApiClient.convertToType(data['insuranceCoverageValue'], 'Number');
            }
            if (data.hasOwnProperty('insuranceCoverageValueCurrency')) {
                obj['insuranceCoverageValueCurrency'] = ApiClient.convertToType(data['insuranceCoverageValueCurrency'], 'String');
            }
            if (data.hasOwnProperty('parcelInfo')) {
                obj['parcelInfo'] = ParcelProtectionQuoteRequestShipmentInfoParcelInfo.constructFromObject(data['parcelInfo']);
            }
            if (data.hasOwnProperty('shipperInfo')) {
                obj['shipperInfo'] = ParcelProtectionQuoteRequestShipmentInfoShipperInfo.constructFromObject(data['shipperInfo']);
            }
            if (data.hasOwnProperty('consigneeInfo')) {
                obj['consigneeInfo'] = ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo.constructFromObject(data['consigneeInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} carrier
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['carrier'] = undefined;

/**
 * @member {String} serviceId
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['serviceId'] = undefined;

/**
 * @member {Number} insuranceCoverageValue
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['insuranceCoverageValue'] = undefined;

/**
 * @member {String} insuranceCoverageValueCurrency
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['insuranceCoverageValueCurrency'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoParcelInfo} parcelInfo
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['parcelInfo'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoShipperInfo} shipperInfo
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['shipperInfo'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo} consigneeInfo
 */
ParcelProtectionQuoteRequestShipmentInfo.prototype['consigneeInfo'] = undefined;






export default ParcelProtectionQuoteRequestShipmentInfo;

