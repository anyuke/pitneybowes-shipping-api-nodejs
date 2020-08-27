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
import AddTrackingEvents from '../model/AddTrackingEvents';
import Errors from '../model/Errors';
import InlineResponse2002 from '../model/InlineResponse2002';
import TrackingResponse from '../model/TrackingResponse';

/**
* Tracking service.
* @module PB.ShippingAPI/api/TrackingApi
* @version 1.0.0
*/
export default class TrackingApi {

    /**
    * Constructs a new TrackingApi. 
    * @alias module:PB.ShippingAPI/api/TrackingApi
    * @class
    * @param {module:PB.ShippingAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:PB.ShippingAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTrackingEvents operation.
     * @callback module:PB.ShippingAPI/api/TrackingApi~addTrackingEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTrackingDetails
     * @param {module:PB.ShippingAPI/model/AddTrackingEvents} addTrackingEvents add track event
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/TrackingApi~addTrackingEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/InlineResponse2002}
     */
    addTrackingEvents(addTrackingEvents, opts, callback) {
      opts = opts || {};
      let postBody = addTrackingEvents;
      // verify the required parameter 'addTrackingEvents' is set
      if (addTrackingEvents === undefined || addTrackingEvents === null) {
        throw new Error("Missing the required parameter 'addTrackingEvents' when calling addTrackingEvents");
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
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/v2/track/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrackingDetails operation.
     * @callback module:PB.ShippingAPI/api/TrackingApi~getTrackingDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:PB.ShippingAPI/model/TrackingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getTrackingDetails
     * @param {String} trackingNumber The tracking number for the shipment.
     * @param {String} packageIdentifierType packageIdentifierType
     * @param {module:PB.ShippingAPI/model/String} carrier carrier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xPBUnifiedErrorStructure Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs. (default to true)
     * @param {module:PB.ShippingAPI/api/TrackingApi~getTrackingDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:PB.ShippingAPI/model/TrackingResponse}
     */
    getTrackingDetails(trackingNumber, packageIdentifierType, carrier, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'trackingNumber' is set
      if (trackingNumber === undefined || trackingNumber === null) {
        throw new Error("Missing the required parameter 'trackingNumber' when calling getTrackingDetails");
      }
      // verify the required parameter 'packageIdentifierType' is set
      if (packageIdentifierType === undefined || packageIdentifierType === null) {
        throw new Error("Missing the required parameter 'packageIdentifierType' when calling getTrackingDetails");
      }
      // verify the required parameter 'carrier' is set
      if (carrier === undefined || carrier === null) {
        throw new Error("Missing the required parameter 'carrier' when calling getTrackingDetails");
      }

      let pathParams = {
        'trackingNumber': trackingNumber
      };
      let queryParams = {
        'packageIdentifierType': packageIdentifierType,
        'carrier': carrier
      };
      let headerParams = {
        'X-PB-UnifiedErrorStructure': opts['xPBUnifiedErrorStructure']
      };
      let formParams = {
      };

      let authNames = ['oAuth2ClientCredentials'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TrackingResponse;
      return this.apiClient.callApi(
        '/v1/tracking/{trackingNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}