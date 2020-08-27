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
    instance = new ShippingApi.CustomsItem();
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

  describe('CustomsItem', function() {
    it('should create an instance of CustomsItem', function() {
      // uncomment below and update the code to test CustomsItem
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be.a(ShippingApi.CustomsItem);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property hSTariffCode (base name: "hSTariffCode")', function() {
      // uncomment below and update the code to test the property hSTariffCode
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property netCostMethod (base name: "netCostMethod")', function() {
      // uncomment below and update the code to test the property netCostMethod
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property originCountryCode (base name: "originCountryCode")', function() {
      // uncomment below and update the code to test the property originCountryCode
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property originStateProvince (base name: "originStateProvince")', function() {
      // uncomment below and update the code to test the property originStateProvince
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property preferenceCriterion (base name: "preferenceCriterion")', function() {
      // uncomment below and update the code to test the property preferenceCriterion
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property producerAddress (base name: "producerAddress")', function() {
      // uncomment below and update the code to test the property producerAddress
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property producerDetermination (base name: "producerDetermination")', function() {
      // uncomment below and update the code to test the property producerDetermination
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property producerId (base name: "producerId")', function() {
      // uncomment below and update the code to test the property producerId
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property quantityUOM (base name: "quantityUOM")', function() {
      // uncomment below and update the code to test the property quantityUOM
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

    it('should have the property unitWeight (base name: "unitWeight")', function() {
      // uncomment below and update the code to test the property unitWeight
      //var instane = new ShippingApi.CustomsItem();
      //expect(instance).to.be();
    });

  });

}));