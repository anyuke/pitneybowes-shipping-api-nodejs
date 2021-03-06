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
import Address from './Address';
import SchedulePickupPickupSummary from './SchedulePickupPickupSummary';

/**
 * The SchedulePickupResponse model module.
 * @module PB.ShippingAPI/model/SchedulePickupResponse
 * @version 1.0.0
 */
class SchedulePickupResponse {
    /**
     * Constructs a new <code>SchedulePickupResponse</code>.
     * @alias module:PB.ShippingAPI/model/SchedulePickupResponse
     */
    constructor() { 
        
        SchedulePickupResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchedulePickupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/SchedulePickupResponse} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/SchedulePickupResponse} The populated <code>SchedulePickupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchedulePickupResponse();

            if (data.hasOwnProperty('pickupAddress')) {
                obj['pickupAddress'] = Address.constructFromObject(data['pickupAddress']);
            }
            if (data.hasOwnProperty('carrier')) {
                obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
            }
            if (data.hasOwnProperty('pickupSummary')) {
                obj['pickupSummary'] = ApiClient.convertToType(data['pickupSummary'], [SchedulePickupPickupSummary]);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('packageLocation')) {
                obj['packageLocation'] = ApiClient.convertToType(data['packageLocation'], 'String');
            }
            if (data.hasOwnProperty('specialInstructions')) {
                obj['specialInstructions'] = ApiClient.convertToType(data['specialInstructions'], 'String');
            }
            if (data.hasOwnProperty('pickupDateTime')) {
                obj['pickupDateTime'] = ApiClient.convertToType(data['pickupDateTime'], 'String');
            }
            if (data.hasOwnProperty('pickupConfirmationNumber')) {
                obj['pickupConfirmationNumber'] = ApiClient.convertToType(data['pickupConfirmationNumber'], 'String');
            }
            if (data.hasOwnProperty('pickupId')) {
                obj['pickupId'] = ApiClient.convertToType(data['pickupId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:PB.ShippingAPI/model/Address} pickupAddress
 */
SchedulePickupResponse.prototype['pickupAddress'] = undefined;

/**
 * @member {String} carrier
 */
SchedulePickupResponse.prototype['carrier'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/SchedulePickupPickupSummary>} pickupSummary
 */
SchedulePickupResponse.prototype['pickupSummary'] = undefined;

/**
 * @member {String} reference
 */
SchedulePickupResponse.prototype['reference'] = undefined;

/**
 * @member {String} packageLocation
 */
SchedulePickupResponse.prototype['packageLocation'] = undefined;

/**
 * @member {String} specialInstructions
 */
SchedulePickupResponse.prototype['specialInstructions'] = undefined;

/**
 * @member {String} pickupDateTime
 */
SchedulePickupResponse.prototype['pickupDateTime'] = undefined;

/**
 * @member {String} pickupConfirmationNumber
 */
SchedulePickupResponse.prototype['pickupConfirmationNumber'] = undefined;

/**
 * @member {String} pickupId
 */
SchedulePickupResponse.prototype['pickupId'] = undefined;






export default SchedulePickupResponse;

