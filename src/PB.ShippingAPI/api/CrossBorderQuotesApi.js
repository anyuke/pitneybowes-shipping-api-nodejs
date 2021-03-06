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


import ApiClient from "../ApiClient";
import CrossBorderQuotesErrors from '../model/CrossBorderQuotesErrors';
import CrossBorderQuotesRequest from '../model/CrossBorderQuotesRequest';
import CrossBorderQuotesResponse from '../model/CrossBorderQuotesResponse';
import Manifest from '../model/Manifest';
import ParcelProtectionPolicyResponse from '../model/ParcelProtectionPolicyResponse';

/**
* CrossBorderQuotes service.
* @module PB.ShippingAPI/api/CrossBorderQuotesApi
* @version 1.0.0
*/
export default class CrossBorderQuotesApi {

    /**
    * Constructs a new CrossBorderQuotesApi. 
    * @alias module:PB.ShippingAPI/api/CrossBorderQuotesApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCrossBorderQuotes operation.
     * @callback module:PB.ShippingAPI/api/CrossBorderQuotesApi~getCrossBorderQuotesCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cross-Border Quotes
     * This operation provides an estimate of the duties, taxes, and transportation costs for the items in a buyer's online shopping basket. The API calculates how many separate parcels are required to ship the items and estimates costs. The API checks each item's eligibility to clear customs and returns the quote for eligible items. To look for futher info please look into [Cross-Border Quotes](https://shipping.pitneybowes.com/api/post-quotes.html#)
     * @param {module:PB.ShippingAPI/model/CrossBorderQuotesRequest} crossBorderQuotesRequest 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/CrossBorderQuotesApi~getCrossBorderQuotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/CrossBorderQuotesResponse}
     */
    getCrossBorderQuotes(crossBorderQuotesRequest, opts, callback) {
      opts = opts || {};
      let postBody = crossBorderQuotesRequest;
      // verify the required parameter 'crossBorderQuotesRequest' is set
      if (crossBorderQuotesRequest === undefined || crossBorderQuotesRequest === null) {
        throw new Error("Missing the required parameter 'crossBorderQuotesRequest' when calling getCrossBorderQuotes");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CrossBorderQuotesResponse;
      return this.apiClient.callApi(
        '/v1/crossborder/checkout/quotes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the predictedHSCode operation.
     * @callback module:PB.ShippingAPI/api/CrossBorderQuotesApi~predictedHSCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Predicts the HS Code for a parcel
     * This operation predicts the HS Code for a parcel being shipped internationally and gives the level of confidence in the prediction.
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {module:PB.ShippingAPI/model/Manifest} manifest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/CrossBorderQuotesApi~predictedHSCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/ParcelProtectionPolicyResponse}
     */
    predictedHSCode(xPBTransactionId, manifest, opts, callback) {
      opts = opts || {};
      let postBody = manifest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling predictedHSCode");
      }
      // verify the required parameter 'manifest' is set
      if (manifest === undefined || manifest === null) {
        throw new Error("Missing the required parameter 'manifest' when calling predictedHSCode");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure'],
        'X-PB-TransactionId': xPBTransactionId
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = ParcelProtectionPolicyResponse;
      return this.apiClient.callApi(
        '/v1/crossborder/hs-classification/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
