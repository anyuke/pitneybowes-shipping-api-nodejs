# ShippingAPI

ShippingApi - JavaScript client for ShippingAPI
Shipping API Sample.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm



##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your ShippingAPI from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ShippingApi = require('ShippingAPI');

var defaultClient = ShippingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
var oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = "YOUR ACCESS TOKEN"

var api = new ShippingApi.AddressValidationApi()
var address = new ShippingApi.Address(); // {Address} Address object that needs to be validated.
var opts = {
  'xPBUnifiedErrorStructure': true, // {Boolean} Set this to true to use the standard [error object](https://shipping.pitneybowes.com/reference/error-object.html#standard-error-object) if an error occurs.
  'minimalAddressValidation': true // {Boolean} When set to true, the complete address (delivery line and last line) is validated but only the last line (city, state, and postal code) would be changed by the validation check.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.verifyAddress(address, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.pitneybowes.com/shippingservices*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ShippingApi.AddressValidationApi* | [**verifyAddress**](docs/AddressValidationApi.md#verifyAddress) | **POST** /v1/addresses/verify | Address validation
*ShippingApi.AddressValidationApi* | [**verifyAndSuggestAddress**](docs/AddressValidationApi.md#verifyAndSuggestAddress) | **POST** /v1/addresses/verify-suggest | Address Suggestion
*ShippingApi.CarrierInfoApi* | [**getCarrierFacilities**](docs/CarrierInfoApi.md#getCarrierFacilities) | **POST** /v1/carrier-facility | Find Carrier Facilities
*ShippingApi.CarrierInfoApi* | [**getCarrierLicenseAgreement**](docs/CarrierInfoApi.md#getCarrierLicenseAgreement) | **GET** /v1/carrier/license-agreements | This operation retrieves a carrier&#39;s license agreement.
*ShippingApi.CarrierInfoApi* | [**getCarrierServiceRules**](docs/CarrierInfoApi.md#getCarrierServiceRules) | **GET** /v1/information/rules/rating-services | Retrieves the rules governing the carrier&#39;s services.
*ShippingApi.CarrierInfoApi* | [**getCarrierSupportedDestination**](docs/CarrierInfoApi.md#getCarrierSupportedDestination) | **GET** /v1/countries | This operation returns a list of supported destination countries to which the carrier offers international shipping services.
*ShippingApi.ContainerApi* | [**getContainerizedParcelsLabels**](docs/ContainerApi.md#getContainerizedParcelsLabels) | **POST** /v1/container-manifest | Create Container Manifest Label
*ShippingApi.CrossBorderQuotesApi* | [**getCrossBorderQuotes**](docs/CrossBorderQuotesApi.md#getCrossBorderQuotes) | **POST** /v1/crossborder/checkout/quotes | Cross-Border Quotes
*ShippingApi.CrossBorderQuotesApi* | [**predictedHSCode**](docs/CrossBorderQuotesApi.md#predictedHSCode) | **POST** /v1/crossborder/hs-classification/items | Predicts the HS Code for a parcel
*ShippingApi.ManifestsApi* | [**createManifest**](docs/ManifestsApi.md#createManifest) | **POST** /v1/manifests | This operation creates an end-of-day manifest
*ShippingApi.ManifestsApi* | [**reprintManifest**](docs/ManifestsApi.md#reprintManifest) | **GET** /v1/manifests/{manifestId} | reprintManifest
*ShippingApi.ManifestsApi* | [**retryManifest**](docs/ManifestsApi.md#retryManifest) | **GET** /v1/manifests | retryManifest
*ShippingApi.ParcelProtectionApi* | [**cancelParcelProtection**](docs/ParcelProtectionApi.md#cancelParcelProtection) | **POST** /v1/parcel-protection/void | Parcel Protection Coverage
*ShippingApi.ParcelProtectionApi* | [**getParcelProtectionCoverage**](docs/ParcelProtectionApi.md#getParcelProtectionCoverage) | **POST** /v1/parcel-protection/create | Parcel Protection Coverage
*ShippingApi.ParcelProtectionApi* | [**getParcelProtectionQuote**](docs/ParcelProtectionApi.md#getParcelProtectionQuote) | **POST** /v1/parcel-protection/quote | Parcel Protection Quote
*ShippingApi.ParcelProtectionApi* | [**getParcelProtectionReports**](docs/ParcelProtectionApi.md#getParcelProtectionReports) | **GET** /v1/parcel-protection/{developerId}/policies | Parcel Protection Reports
*ShippingApi.PickupApi* | [**cancelPickup**](docs/PickupApi.md#cancelPickup) | **POST** /v1/pickups/{pickupId}/cancel | Cancel Pickup
*ShippingApi.PickupApi* | [**getPickupschedule**](docs/PickupApi.md#getPickupschedule) | **POST** /v1/pickups/schedule | Address validation
*ShippingApi.RateParcelsApi* | [**rateParcel**](docs/RateParcelsApi.md#rateParcel) | **POST** /v1/rates | Use this operation to rate a parcel before you print and purchase a shipment label. You can rate a parcel for multiple services and multiple parcel types with a single API request.
*ShippingApi.ShipmentApi* | [**cancelShipment**](docs/ShipmentApi.md#cancelShipment) | **DELETE** /v1/shipments/{shipmentId} | cancelShipment
*ShippingApi.ShipmentApi* | [**createShipmentLabel**](docs/ShipmentApi.md#createShipmentLabel) | **POST** /v1/shipments | This operation creates a shipment and purchases a shipment label.
*ShippingApi.ShipmentApi* | [**reprintShipment**](docs/ShipmentApi.md#reprintShipment) | **GET** /v1/shipments/{shipmentId} | reprintShipment
*ShippingApi.ShipmentApi* | [**retryShipment**](docs/ShipmentApi.md#retryShipment) | **GET** /v1/shipments | retryShipment
*ShippingApi.TrackingApi* | [**addTrackingEvents**](docs/TrackingApi.md#addTrackingEvents) | **POST** /v2/track/events | getTrackingDetails
*ShippingApi.TrackingApi* | [**getTrackingDetails**](docs/TrackingApi.md#getTrackingDetails) | **GET** /v1/tracking/{trackingNumber} | getTrackingDetails
*ShippingApi.TransactionReportsApi* | [**getTransactionReport**](docs/TransactionReportsApi.md#getTransactionReport) | **GET** /v4/ledger/developers/{developerId}/transactions/reports | This operation retrieves all transactions for a specified period of time.


## Documentation for Models

 - [ShippingApi.AddTrackingEvents](docs/AddTrackingEvents.md)
 - [ShippingApi.AddTrackingEventsEvents](docs/AddTrackingEventsEvents.md)
 - [ShippingApi.AddTrackingEventsReferences](docs/AddTrackingEventsReferences.md)
 - [ShippingApi.AdditionalAddress](docs/AdditionalAddress.md)
 - [ShippingApi.Address](docs/Address.md)
 - [ShippingApi.AddressSuggestionResponse](docs/AddressSuggestionResponse.md)
 - [ShippingApi.AddressSuggestionResponseSuggestions](docs/AddressSuggestionResponseSuggestions.md)
 - [ShippingApi.AddressVerifySuggest](docs/AddressVerifySuggest.md)
 - [ShippingApi.BatteryDetails](docs/BatteryDetails.md)
 - [ShippingApi.CancelShipment](docs/CancelShipment.md)
 - [ShippingApi.Carrier](docs/Carrier.md)
 - [ShippingApi.CarrierFacilityRequest](docs/CarrierFacilityRequest.md)
 - [ShippingApi.CarrierFacilityRequestAddress](docs/CarrierFacilityRequestAddress.md)
 - [ShippingApi.CarrierFacilityResponse](docs/CarrierFacilityResponse.md)
 - [ShippingApi.CarrierFacilityResponseCarrierFacilityOptions](docs/CarrierFacilityResponseCarrierFacilityOptions.md)
 - [ShippingApi.CarrierFacilityResponseCarrierFacilitySuggestions](docs/CarrierFacilityResponseCarrierFacilitySuggestions.md)
 - [ShippingApi.CarrierFacilityResponseFacilityHours](docs/CarrierFacilityResponseFacilityHours.md)
 - [ShippingApi.CarrierFacilityResponseFacilityTimings](docs/CarrierFacilityResponseFacilityTimings.md)
 - [ShippingApi.CarrierPayment](docs/CarrierPayment.md)
 - [ShippingApi.CarrierRule](docs/CarrierRule.md)
 - [ShippingApi.CommodityInfo](docs/CommodityInfo.md)
 - [ShippingApi.ContainerDetails](docs/ContainerDetails.md)
 - [ShippingApi.ContainerManifestResponse](docs/ContainerManifestResponse.md)
 - [ShippingApi.ContainerManifestResponseData](docs/ContainerManifestResponseData.md)
 - [ShippingApi.CrossBorderQuotesErrors](docs/CrossBorderQuotesErrors.md)
 - [ShippingApi.CrossBorderQuotesErrorsErrors](docs/CrossBorderQuotesErrorsErrors.md)
 - [ShippingApi.CrossBorderQuotesErrorsErrorsErrors](docs/CrossBorderQuotesErrorsErrorsErrors.md)
 - [ShippingApi.CrossBorderQuotesErrorsQuote](docs/CrossBorderQuotesErrorsQuote.md)
 - [ShippingApi.CrossBorderQuotesErrorsQuoteLines](docs/CrossBorderQuotesErrorsQuoteLines.md)
 - [ShippingApi.CrossBorderQuotesErrorsUnitErrors](docs/CrossBorderQuotesErrorsUnitErrors.md)
 - [ShippingApi.CrossBorderQuotesRequest](docs/CrossBorderQuotesRequest.md)
 - [ShippingApi.CrossBorderQuotesRequestAttributes](docs/CrossBorderQuotesRequestAttributes.md)
 - [ShippingApi.CrossBorderQuotesRequestBasketItems](docs/CrossBorderQuotesRequestBasketItems.md)
 - [ShippingApi.CrossBorderQuotesRequestCategories](docs/CrossBorderQuotesRequestCategories.md)
 - [ShippingApi.CrossBorderQuotesRequestDescriptions](docs/CrossBorderQuotesRequestDescriptions.md)
 - [ShippingApi.CrossBorderQuotesRequestIdentifiers](docs/CrossBorderQuotesRequestIdentifiers.md)
 - [ShippingApi.CrossBorderQuotesRequestItemDimension](docs/CrossBorderQuotesRequestItemDimension.md)
 - [ShippingApi.CrossBorderQuotesRequestPricing](docs/CrossBorderQuotesRequestPricing.md)
 - [ShippingApi.CrossBorderQuotesRequestPricingCodPrice](docs/CrossBorderQuotesRequestPricingCodPrice.md)
 - [ShippingApi.CrossBorderQuotesRequestRates](docs/CrossBorderQuotesRequestRates.md)
 - [ShippingApi.CrossBorderQuotesRequestUnitWeight](docs/CrossBorderQuotesRequestUnitWeight.md)
 - [ShippingApi.CrossBorderQuotesResponse](docs/CrossBorderQuotesResponse.md)
 - [ShippingApi.CrossBorderQuotesResponseLineRates](docs/CrossBorderQuotesResponseLineRates.md)
 - [ShippingApi.CrossBorderQuotesResponseQuote](docs/CrossBorderQuotesResponseQuote.md)
 - [ShippingApi.CrossBorderQuotesResponseQuoteLines](docs/CrossBorderQuotesResponseQuoteLines.md)
 - [ShippingApi.CrossBorderQuotesResponseTotalRates](docs/CrossBorderQuotesResponseTotalRates.md)
 - [ShippingApi.CrossBorderQuotesResponseUnitRates](docs/CrossBorderQuotesResponseUnitRates.md)
 - [ShippingApi.CrossBorderQuotesResponseUnitRatesDeliveryCommitment](docs/CrossBorderQuotesResponseUnitRatesDeliveryCommitment.md)
 - [ShippingApi.Customs](docs/Customs.md)
 - [ShippingApi.CustomsInfo](docs/CustomsInfo.md)
 - [ShippingApi.CustomsItem](docs/CustomsItem.md)
 - [ShippingApi.DeliveryCommitment](docs/DeliveryCommitment.md)
 - [ShippingApi.DimensionRules](docs/DimensionRules.md)
 - [ShippingApi.DimensionRulesMaxParcelDimensions](docs/DimensionRulesMaxParcelDimensions.md)
 - [ShippingApi.DimensionRulesMinParcelDimensions](docs/DimensionRulesMinParcelDimensions.md)
 - [ShippingApi.Discount](docs/Discount.md)
 - [ShippingApi.DocTabItem](docs/DocTabItem.md)
 - [ShippingApi.Document](docs/Document.md)
 - [ShippingApi.DocumentPage](docs/DocumentPage.md)
 - [ShippingApi.Errors](docs/Errors.md)
 - [ShippingApi.HazmatDetails](docs/HazmatDetails.md)
 - [ShippingApi.ISOCountryCode](docs/ISOCountryCode.md)
 - [ShippingApi.InfectiousSubstanceContact](docs/InfectiousSubstanceContact.md)
 - [ShippingApi.InlineResponse200](docs/InlineResponse200.md)
 - [ShippingApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [ShippingApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [ShippingApi.Manifest](docs/Manifest.md)
 - [ShippingApi.PageRealTransactionDetailReport](docs/PageRealTransactionDetailReport.md)
 - [ShippingApi.Parameter](docs/Parameter.md)
 - [ShippingApi.Parcel](docs/Parcel.md)
 - [ShippingApi.ParcelDimension](docs/ParcelDimension.md)
 - [ShippingApi.ParcelProtectionCreateRequest](docs/ParcelProtectionCreateRequest.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfo](docs/ParcelProtectionCreateRequestShipmentInfo.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfoConsigneeInfo](docs/ParcelProtectionCreateRequestShipmentInfoConsigneeInfo.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfo](docs/ParcelProtectionCreateRequestShipmentInfoParcelInfo.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList](docs/ParcelProtectionCreateRequestShipmentInfoParcelInfoCommodityList.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfoShipperInfo](docs/ParcelProtectionCreateRequestShipmentInfoShipperInfo.md)
 - [ShippingApi.ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress](docs/ParcelProtectionCreateRequestShipmentInfoShipperInfoAddress.md)
 - [ShippingApi.ParcelProtectionCreateResponse](docs/ParcelProtectionCreateResponse.md)
 - [ShippingApi.ParcelProtectionCreateResponseParcelProtectionFeesBreakup](docs/ParcelProtectionCreateResponseParcelProtectionFeesBreakup.md)
 - [ShippingApi.ParcelProtectionPolicyResponse](docs/ParcelProtectionPolicyResponse.md)
 - [ShippingApi.ParcelProtectionPolicyResponseContent](docs/ParcelProtectionPolicyResponseContent.md)
 - [ShippingApi.ParcelProtectionPolicyResponsePolicyDetails](docs/ParcelProtectionPolicyResponsePolicyDetails.md)
 - [ShippingApi.ParcelProtectionPolicyResponseShipmentDetails](docs/ParcelProtectionPolicyResponseShipmentDetails.md)
 - [ShippingApi.ParcelProtectionPolicyResponseShipperInfo](docs/ParcelProtectionPolicyResponseShipperInfo.md)
 - [ShippingApi.ParcelProtectionPolicyResponseShipperInfoAddress](docs/ParcelProtectionPolicyResponseShipperInfoAddress.md)
 - [ShippingApi.ParcelProtectionPolicyResponseSort](docs/ParcelProtectionPolicyResponseSort.md)
 - [ShippingApi.ParcelProtectionQuoteRequest](docs/ParcelProtectionQuoteRequest.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfo](docs/ParcelProtectionQuoteRequestShipmentInfo.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo](docs/ParcelProtectionQuoteRequestShipmentInfoConsigneeInfo.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfoParcelInfo](docs/ParcelProtectionQuoteRequestShipmentInfoParcelInfo.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList](docs/ParcelProtectionQuoteRequestShipmentInfoParcelInfoCommodityList.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfoShipperInfo](docs/ParcelProtectionQuoteRequestShipmentInfoShipperInfo.md)
 - [ShippingApi.ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress](docs/ParcelProtectionQuoteRequestShipmentInfoShipperInfoAddress.md)
 - [ShippingApi.ParcelProtectionQuoteResponse](docs/ParcelProtectionQuoteResponse.md)
 - [ShippingApi.ParcelProtectionQuoteResponseParcelProtectionFeesBreakup](docs/ParcelProtectionQuoteResponseParcelProtectionFeesBreakup.md)
 - [ShippingApi.ParcelType](docs/ParcelType.md)
 - [ShippingApi.ParcelTypeRules](docs/ParcelTypeRules.md)
 - [ShippingApi.ParcelWeight](docs/ParcelWeight.md)
 - [ShippingApi.PrerequisiteRules](docs/PrerequisiteRules.md)
 - [ShippingApi.RadioActiveParcelDimension](docs/RadioActiveParcelDimension.md)
 - [ShippingApi.RadioActivityDetail](docs/RadioActivityDetail.md)
 - [ShippingApi.RadioNuclideDetail](docs/RadioNuclideDetail.md)
 - [ShippingApi.Rate](docs/Rate.md)
 - [ShippingApi.RealTransactionDetailReport](docs/RealTransactionDetailReport.md)
 - [ShippingApi.SchedulePickup](docs/SchedulePickup.md)
 - [ShippingApi.SchedulePickupPickupSummary](docs/SchedulePickupPickupSummary.md)
 - [ShippingApi.SchedulePickupResponse](docs/SchedulePickupResponse.md)
 - [ShippingApi.SchedulePickupTotalWeight](docs/SchedulePickupTotalWeight.md)
 - [ShippingApi.SearchCriteria](docs/SearchCriteria.md)
 - [ShippingApi.Services](docs/Services.md)
 - [ShippingApi.ServicesParameterRule](docs/ServicesParameterRule.md)
 - [ShippingApi.Shipment](docs/Shipment.md)
 - [ShippingApi.Signatory](docs/Signatory.md)
 - [ShippingApi.SpecialService](docs/SpecialService.md)
 - [ShippingApi.SpecialServiceCodes](docs/SpecialServiceCodes.md)
 - [ShippingApi.SpecialServicesRule](docs/SpecialServicesRule.md)
 - [ShippingApi.Surcharge](docs/Surcharge.md)
 - [ShippingApi.Tax](docs/Tax.md)
 - [ShippingApi.Trackable](docs/Trackable.md)
 - [ShippingApi.TrackingAddress](docs/TrackingAddress.md)
 - [ShippingApi.TrackingResponse](docs/TrackingResponse.md)
 - [ShippingApi.TrackingResponseScanDetailsList](docs/TrackingResponseScanDetailsList.md)
 - [ShippingApi.UnitOfDimension](docs/UnitOfDimension.md)
 - [ShippingApi.UnitOfWeight](docs/UnitOfWeight.md)
 - [ShippingApi.VoidParcelProtectionRequest](docs/VoidParcelProtectionRequest.md)
 - [ShippingApi.VoidParcelProtectionResponse](docs/VoidParcelProtectionResponse.md)
 - [ShippingApi.WeightRules](docs/WeightRules.md)


## Documentation for Authorization



### oAuth2ClientCredentials


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A

