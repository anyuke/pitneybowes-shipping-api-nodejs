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
import AdditionalAddress from './AdditionalAddress';
import Address from './Address';
import CarrierPayment from './CarrierPayment';
import Customs from './Customs';
import Document from './Document';
import HazmatDetails from './HazmatDetails';
import Parameter from './Parameter';
import Parcel from './Parcel';
import Rate from './Rate';

/**
 * The Shipment model module.
 * @module PB.ShippingAPI/model/Shipment
 * @version 1.0.0
 */
class Shipment {
    /**
     * Constructs a new <code>Shipment</code>.
     * @alias module:PB.ShippingAPI/model/Shipment
     * @param fromAddress {module:PB.ShippingAPI/model/Address} 
     * @param parcel {module:PB.ShippingAPI/model/Parcel} 
     * @param rates {Array.<module:PB.ShippingAPI/model/Rate>} 
     * @param toAddress {module:PB.ShippingAPI/model/Address} 
     */
    constructor(fromAddress, parcel, rates, toAddress) { 
        
        Shipment.initialize(this, fromAddress, parcel, rates, toAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromAddress, parcel, rates, toAddress) { 
        obj['fromAddress'] = fromAddress;
        obj['parcel'] = parcel;
        obj['rates'] = rates;
        obj['toAddress'] = toAddress;
    }

    /**
     * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/Shipment} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/Shipment} The populated <code>Shipment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Shipment();

            if (data.hasOwnProperty('additionalAddresses')) {
                obj['additionalAddresses'] = ApiClient.convertToType(data['additionalAddresses'], [AdditionalAddress]);
            }
            if (data.hasOwnProperty('altReturnAddress')) {
                obj['altReturnAddress'] = Address.constructFromObject(data['altReturnAddress']);
            }
            if (data.hasOwnProperty('carrierPayments')) {
                obj['carrierPayments'] = ApiClient.convertToType(data['carrierPayments'], [CarrierPayment]);
            }
            if (data.hasOwnProperty('customs')) {
                obj['customs'] = Customs.constructFromObject(data['customs']);
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = Address.constructFromObject(data['fromAddress']);
            }
            if (data.hasOwnProperty('hazmatDetails')) {
                obj['hazmatDetails'] = HazmatDetails.constructFromObject(data['hazmatDetails']);
            }
            if (data.hasOwnProperty('parcel')) {
                obj['parcel'] = Parcel.constructFromObject(data['parcel']);
            }
            if (data.hasOwnProperty('parcelTrackingNumber')) {
                obj['parcelTrackingNumber'] = ApiClient.convertToType(data['parcelTrackingNumber'], 'String');
            }
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = ApiClient.convertToType(data['rates'], [Rate]);
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], [Parameter]);
            }
            if (data.hasOwnProperty('shipmentId')) {
                obj['shipmentId'] = ApiClient.convertToType(data['shipmentId'], 'String');
            }
            if (data.hasOwnProperty('shipmentOptions')) {
                obj['shipmentOptions'] = ApiClient.convertToType(data['shipmentOptions'], [Parameter]);
            }
            if (data.hasOwnProperty('shipmentType')) {
                obj['shipmentType'] = ApiClient.convertToType(data['shipmentType'], 'String');
            }
            if (data.hasOwnProperty('soldToAddress')) {
                obj['soldToAddress'] = Address.constructFromObject(data['soldToAddress']);
            }
            if (data.hasOwnProperty('toAddress')) {
                obj['toAddress'] = Address.constructFromObject(data['toAddress']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:PB.ShippingAPI/model/AdditionalAddress>} additionalAddresses
 */
Shipment.prototype['additionalAddresses'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} altReturnAddress
 */
Shipment.prototype['altReturnAddress'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CarrierPayment>} carrierPayments
 */
Shipment.prototype['carrierPayments'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Customs} customs
 */
Shipment.prototype['customs'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/Document>} documents
 */
Shipment.prototype['documents'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} fromAddress
 */
Shipment.prototype['fromAddress'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/HazmatDetails} hazmatDetails
 */
Shipment.prototype['hazmatDetails'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Parcel} parcel
 */
Shipment.prototype['parcel'] = undefined;

/**
 * @member {String} parcelTrackingNumber
 */
Shipment.prototype['parcelTrackingNumber'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/Rate>} rates
 */
Shipment.prototype['rates'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/Parameter>} references
 */
Shipment.prototype['references'] = undefined;

/**
 * @member {String} shipmentId
 */
Shipment.prototype['shipmentId'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/Parameter>} shipmentOptions
 */
Shipment.prototype['shipmentOptions'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Shipment.ShipmentTypeEnum} shipmentType
 */
Shipment.prototype['shipmentType'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} soldToAddress
 */
Shipment.prototype['soldToAddress'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Address} toAddress
 */
Shipment.prototype['toAddress'] = undefined;





/**
 * Allowed values for the <code>shipmentType</code> property.
 * @enum {String}
 * @readonly
 */
Shipment['ShipmentTypeEnum'] = {

    /**
     * value: "OUTBOUND"
     * @const
     */
    "OUTBOUND": "OUTBOUND",

    /**
     * value: "RETURN"
     * @const
     */
    "RETURN": "RETURN"
};



export default Shipment;
