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
import CrossBorderQuotesErrorsErrors from './CrossBorderQuotesErrorsErrors';
import CrossBorderQuotesErrorsQuoteLines from './CrossBorderQuotesErrorsQuoteLines';

/**
 * The CrossBorderQuotesErrorsQuote model module.
 * @module PB.ShippingAPI/model/CrossBorderQuotesErrorsQuote
 * @version 1.0.0
 */
class CrossBorderQuotesErrorsQuote {
    /**
     * Constructs a new <code>CrossBorderQuotesErrorsQuote</code>.
     * @alias module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuote
     */
    constructor() { 
        
        CrossBorderQuotesErrorsQuote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CrossBorderQuotesErrorsQuote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuote} obj Optional instance to populate.
     * @return {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuote} The populated <code>CrossBorderQuotesErrorsQuote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrossBorderQuotesErrorsQuote();

            if (data.hasOwnProperty('quoteCurrency')) {
                obj['quoteCurrency'] = ApiClient.convertToType(data['quoteCurrency'], 'String');
            }
            if (data.hasOwnProperty('quoteLines')) {
                obj['quoteLines'] = ApiClient.convertToType(data['quoteLines'], [CrossBorderQuotesErrorsQuoteLines]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = CrossBorderQuotesErrorsErrors.constructFromObject(data['errors']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} quoteCurrency
 */
CrossBorderQuotesErrorsQuote.prototype['quoteCurrency'] = undefined;

/**
 * @member {Array.<module:PB.ShippingAPI/model/CrossBorderQuotesErrorsQuoteLines>} quoteLines
 */
CrossBorderQuotesErrorsQuote.prototype['quoteLines'] = undefined;

/**
 * @member {module:PB.ShippingAPI/model/CrossBorderQuotesErrorsErrors} errors
 */
CrossBorderQuotesErrorsQuote.prototype['errors'] = undefined;






export default CrossBorderQuotesErrorsQuote;
