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
import InfectiousSubstanceContact from './InfectiousSubstanceContact';
import RadioActivityDetail from './RadioActivityDetail';
import RadioNuclideDetail from './RadioNuclideDetail';

/**
 * The CommodityInfo model module.
 * @module PB.ShippingAPI/model/CommodityInfo
 * @version 1.0.0
 */
class CommodityInfo {
    /**
     * Constructs a new <code>CommodityInfo</code>.
     * @alias module:PB.ShippingAPI/model/CommodityInfo
     */
    constructor() { 
        
        CommodityInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommodityInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CommodityInfo} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CommodityInfo} The populated <code>CommodityInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommodityInfo();

            if (data.hasOwnProperty('cargoAirCraft')) {
                obj['cargoAirCraft'] = ApiClient.convertToType(data['cargoAirCraft'], 'Boolean');
            }
            if (data.hasOwnProperty('hazardClass')) {
                obj['hazardClass'] = ApiClient.convertToType(data['hazardClass'], 'String');
            }
            if (data.hasOwnProperty('infectiousSubstanceContact')) {
                obj['infectiousSubstanceContact'] = InfectiousSubstanceContact.constructFromObject(data['infectiousSubstanceContact']);
            }
            if (data.hasOwnProperty('innerReceptaclesQuantity')) {
                obj['innerReceptaclesQuantity'] = ApiClient.convertToType(data['innerReceptaclesQuantity'], 'Number');
            }
            if (data.hasOwnProperty('innerReceptaclesQuantityUOM')) {
                obj['innerReceptaclesQuantityUOM'] = ApiClient.convertToType(data['innerReceptaclesQuantityUOM'], 'String');
            }
            if (data.hasOwnProperty('packagingGroup')) {
                obj['packagingGroup'] = ApiClient.convertToType(data['packagingGroup'], 'String');
            }
            if (data.hasOwnProperty('packagingInstructions')) {
                obj['packagingInstructions'] = ApiClient.convertToType(data['packagingInstructions'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('properShippingName')) {
                obj['properShippingName'] = ApiClient.convertToType(data['properShippingName'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('quantityUOM')) {
                obj['quantityUOM'] = ApiClient.convertToType(data['quantityUOM'], 'String');
            }
            if (data.hasOwnProperty('radioActivityDetail')) {
                obj['radioActivityDetail'] = RadioActivityDetail.constructFromObject(data['radioActivityDetail']);
            }
            if (data.hasOwnProperty('radioNuclideDetail')) {
                obj['radioNuclideDetail'] = RadioNuclideDetail.constructFromObject(data['radioNuclideDetail']);
            }
            if (data.hasOwnProperty('reportableQuantity')) {
                obj['reportableQuantity'] = ApiClient.convertToType(data['reportableQuantity'], 'Boolean');
            }
            if (data.hasOwnProperty('technicalName')) {
                obj['technicalName'] = ApiClient.convertToType(data['technicalName'], 'String');
            }
            if (data.hasOwnProperty('unId')) {
                obj['unId'] = ApiClient.convertToType(data['unId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} cargoAirCraft
 */
CommodityInfo.prototype['cargoAirCraft'] = undefined;

/**
 * @member {String} hazardClass
 */
CommodityInfo.prototype['hazardClass'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/InfectiousSubstanceContact} infectiousSubstanceContact
 */
CommodityInfo.prototype['infectiousSubstanceContact'] = undefined;

/**
 * @member {Number} innerReceptaclesQuantity
 */
CommodityInfo.prototype['innerReceptaclesQuantity'] = undefined;

/**
 * @member {String} innerReceptaclesQuantityUOM
 */
CommodityInfo.prototype['innerReceptaclesQuantityUOM'] = undefined;

/**
 * @member {String} packagingGroup
 */
CommodityInfo.prototype['packagingGroup'] = undefined;

/**
 * @member {String} packagingInstructions
 */
CommodityInfo.prototype['packagingInstructions'] = undefined;

/**
 * @member {Number} percentage
 */
CommodityInfo.prototype['percentage'] = undefined;

/**
 * @member {String} properShippingName
 */
CommodityInfo.prototype['properShippingName'] = undefined;

/**
 * @member {Number} quantity
 */
CommodityInfo.prototype['quantity'] = undefined;

/**
 * @member {String} quantityUOM
 */
CommodityInfo.prototype['quantityUOM'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/RadioActivityDetail} radioActivityDetail
 */
CommodityInfo.prototype['radioActivityDetail'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/RadioNuclideDetail} radioNuclideDetail
 */
CommodityInfo.prototype['radioNuclideDetail'] = undefined;

/**
 * @member {Boolean} reportableQuantity
 */
CommodityInfo.prototype['reportableQuantity'] = undefined;

/**
 * @member {String} technicalName
 */
CommodityInfo.prototype['technicalName'] = undefined;

/**
 * @member {String} unId
 */
CommodityInfo.prototype['unId'] = undefined;






export default CommodityInfo;
