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
import BatteryDetails from './BatteryDetails';
import ContainerDetails from './ContainerDetails';
import Signatory from './Signatory';

/**
 * The HazmatDetails model module.
 * @module PB.ShippingAPI/model/HazmatDetails
 * @version 1.0.0
 */
class HazmatDetails {
    /**
     * Constructs a new <code>HazmatDetails</code>.
     * @alias module:PB.ShippingAPI/model/HazmatDetails
     */
    constructor() { 
        
        HazmatDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HazmatDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/HazmatDetails} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/HazmatDetails} The populated <code>HazmatDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HazmatDetails();

            if (data.hasOwnProperty('batteryDetails')) {
                obj['batteryDetails'] = BatteryDetails.constructFromObject(data['batteryDetails']);
            }
            if (data.hasOwnProperty('commodityType')) {
                obj['commodityType'] = ApiClient.convertToType(data['commodityType'], 'String');
            }
            if (data.hasOwnProperty('containerCount')) {
                obj['containerCount'] = ApiClient.convertToType(data['containerCount'], 'Number');
            }
            if (data.hasOwnProperty('containerDetails')) {
                obj['containerDetails'] = ApiClient.convertToType(data['containerDetails'], [ContainerDetails]);
            }
            if (data.hasOwnProperty('emergencyContactNumber')) {
                obj['emergencyContactNumber'] = ApiClient.convertToType(data['emergencyContactNumber'], 'String');
            }
            if (data.hasOwnProperty('hazmatDocumentType')) {
                obj['hazmatDocumentType'] = ApiClient.convertToType(data['hazmatDocumentType'], 'String');
            }
            if (data.hasOwnProperty('identicalContainers')) {
                obj['identicalContainers'] = ApiClient.convertToType(data['identicalContainers'], 'Boolean');
            }
            if (data.hasOwnProperty('offeror')) {
                obj['offeror'] = ApiClient.convertToType(data['offeror'], 'String');
            }
            if (data.hasOwnProperty('packagingOption')) {
                obj['packagingOption'] = ApiClient.convertToType(data['packagingOption'], 'String');
            }
            if (data.hasOwnProperty('signatory')) {
                obj['signatory'] = Signatory.constructFromObject(data['signatory']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:PB.ShippingAPI/model/BatteryDetails} batteryDetails
 */
HazmatDetails.prototype['batteryDetails'] = undefined;

/**
 * @member {String} commodityType
 */
HazmatDetails.prototype['commodityType'] = undefined;

/**
 * @member {Number} containerCount
 */
HazmatDetails.prototype['containerCount'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/ContainerDetails>} containerDetails
 */
HazmatDetails.prototype['containerDetails'] = undefined;

/**
 * @member {String} emergencyContactNumber
 */
HazmatDetails.prototype['emergencyContactNumber'] = undefined;

/**
 * @member {String} hazmatDocumentType
 */
HazmatDetails.prototype['hazmatDocumentType'] = undefined;

/**
 * @member {Boolean} identicalContainers
 */
HazmatDetails.prototype['identicalContainers'] = undefined;

/**
 * @member {String} offeror
 */
HazmatDetails.prototype['offeror'] = undefined;

/**
 * @member {String} packagingOption
 */
HazmatDetails.prototype['packagingOption'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/Signatory} signatory
 */
HazmatDetails.prototype['signatory'] = undefined;






export default HazmatDetails;
