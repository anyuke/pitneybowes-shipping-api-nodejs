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
import Errors from '../model/Errors';
import Manifest from '../model/Manifest';

/**
* Manifests service.
* @module PB.ShippingAPI/api/ManifestsApi
* @version 1.0.0
*/
export default class ManifestsApi {

    /**
    * Constructs a new ManifestsApi. 
    * @alias module:PB.ShippingAPI/api/ManifestsApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createManifest operation.
     * @callback module:PB.ShippingAPI/api/ManifestsApi~createManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/Manifest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This operation creates an end-of-day manifest
     * This operation creates an end-of-day manifest that either combines all parcels into a single form or electronically closes the day, depending on the carrier. Use the instructions appropriate to the carrier. * Create a [USPS SCAN Form](https://shipping.pitneybowes.com/api/post-manifests-scan.html)  * Create a [Newgistics Closeout](https://shipping.pitneybowes.com/api/post-manifests-newgistics.html) * Create a [PB Presort Pickup Slip](https://shipping.pitneybowes.com/api/post-manifests-presort.html) * Create a [Manifest for PMOD Shipments](https://shipping.pitneybowes.com/api/post-manifests-pmod.html)
     * @param {String} xPBTransactionId Required. A unique identifier for the transaction, up to 25 characters.
     * @param {module:PB.ShippingAPI/model/Manifest} manifest manifest
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ManifestsApi~createManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/Manifest}
     */
    createManifest(xPBTransactionId, manifest, opts, callback) {
      opts = opts || {};
      let postBody = manifest;
      // verify the required parameter 'xPBTransactionId' is set
      if (xPBTransactionId === undefined || xPBTransactionId === null) {
        throw new Error("Missing the required parameter 'xPBTransactionId' when calling createManifest");
      }
      // verify the required parameter 'manifest' is set
      if (manifest === undefined || manifest === null) {
        throw new Error("Missing the required parameter 'manifest' when calling createManifest");
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
      let accepts = ['application/json'];
      let returnType = Manifest;
      return this.apiClient.callApi(
        '/v1/manifests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reprintManifest operation.
     * @callback module:PB.ShippingAPI/api/ManifestsApi~reprintManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/Manifest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reprintManifest
     * @param {String} manifestId manifestId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ManifestsApi~reprintManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/Manifest}
     */
    reprintManifest(manifestId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'manifestId' is set
      if (manifestId === undefined || manifestId === null) {
        throw new Error("Missing the required parameter 'manifestId' when calling reprintManifest");
      }

      let pathParams = {
        'manifestId': manifestId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Manifest;
      return this.apiClient.callApi(
        '/v1/manifests/{manifestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retryManifest operation.
     * @callback module:PB.ShippingAPI/api/ManifestsApi~retryManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/Manifest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retryManifest
     * @param {String} originalTransactionId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/ManifestsApi~retryManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/Manifest}
     */
    retryManifest(originalTransactionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'originalTransactionId' is set
      if (originalTransactionId === undefined || originalTransactionId === null) {
        throw new Error("Missing the required parameter 'originalTransactionId' when calling retryManifest");
      }

      let pathParams = {
      };
      let queryParams = {
        'originalTransactionId': originalTransactionId
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Manifest;
      return this.apiClient.callApi(
        '/v1/manifests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}