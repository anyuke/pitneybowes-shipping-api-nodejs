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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/PB.ShippingAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/PB.ShippingAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShippingApi);
  }
}(this, function(expect, ShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShippingApi.CrossBorderQuotesResponseUnitRates();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CrossBorderQuotesResponseUnitRates', function() {
    it('should create an instance of CrossBorderQuotesResponseUnitRates', function() {
      // uncomment below and update the code to test CrossBorderQuotesResponseUnitRates
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be.a(ShippingApi.CrossBorderQuotesResponseUnitRates);
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property totalTaxAmount (base name: "totalTaxAmount")', function() {
      // uncomment below and update the code to test the property totalTaxAmount
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property totalDutyAmount (base name: "totalDutyAmount")', function() {
      // uncomment below and update the code to test the property totalDutyAmount
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "serviceId")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property baseCharge (base name: "baseCharge")', function() {
      // uncomment below and update the code to test the property baseCharge
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property deliveryCommitment (base name: "deliveryCommitment")', function() {
      // uncomment below and update the code to test the property deliveryCommitment
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

    it('should have the property totalCarrierCharge (base name: "totalCarrierCharge")', function() {
      // uncomment below and update the code to test the property totalCarrierCharge
      //var instane = new ShippingApi.CrossBorderQuotesResponseUnitRates();
      //expect(instance).to.be();
    });

  });

}));
