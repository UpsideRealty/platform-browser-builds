/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var core_1 = require('@angular/core');
var browser_1 = require('../src/browser');
var browser_adapter_1 = require('../src/browser/browser_adapter');
var animation_driver_1 = require('../src/dom/animation_driver');
var ng_probe_1 = require('../src/dom/debug/ng_probe');
var browser_util_1 = require('./browser_util');
var BROWSER_TEST_PLATFORM_MARKER = new core_1.OpaqueToken('BrowserTestPlatformMarker');
function initBrowserTests() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    browser_util_1.BrowserDetection.setup();
}
function createNgZone() {
    return new core_1.NgZone({ enableLongStackTrace: true });
}
var TEST_BROWSER_PLATFORM_PROVIDERS = [
    core_1.PLATFORM_COMMON_PROVIDERS, { provide: BROWSER_TEST_PLATFORM_MARKER, useValue: true },
    { provide: core_1.PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }
];
/**
 * Platform for testing
 *
 * @experimental API related to bootstrapping are still under review.
 */
function browserTestPlatform() {
    if (!core_1.getPlatform()) {
        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(TEST_BROWSER_PLATFORM_PROVIDERS));
    }
    return core_1.assertPlatform(BROWSER_TEST_PLATFORM_MARKER);
}
exports.browserTestPlatform = browserTestPlatform;
var BrowserTestModule = (function () {
    function BrowserTestModule() {
    }
    /** @nocollapse */
    BrowserTestModule.decorators = [
        { type: core_1.AppModule, args: [{
                    modules: [browser_1.BrowserModule],
                    providers: [
                        { provide: core_1.APP_ID, useValue: 'a' }, ng_probe_1.ELEMENT_PROBE_PROVIDERS,
                        { provide: core_1.NgZone, useFactory: createNgZone },
                        { provide: animation_driver_1.AnimationDriver, useValue: animation_driver_1.AnimationDriver.NOOP }
                    ]
                },] },
    ];
    return BrowserTestModule;
}());
exports.BrowserTestModule = BrowserTestModule;
//# sourceMappingURL=browser.js.map