"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@microsoft.azure/polyfill");
class UnsupportedPlatformException extends polyfill_1.Exception {
    constructor(platform, exitCode = 1) {
        super(`Unsupported Platform: ${platform}`, exitCode);
        this.exitCode = exitCode;
        Object.setPrototypeOf(this, UnsupportedPlatformException.prototype);
    }
}
exports.UnsupportedPlatformException = UnsupportedPlatformException;
class UnknownFramework extends polyfill_1.Exception {
    constructor(framework, exitCode = 1) {
        super(`Unknown Framework Version: ${framework}`, exitCode);
        this.exitCode = exitCode;
        Object.setPrototypeOf(this, UnknownFramework.prototype);
    }
}
exports.UnknownFramework = UnknownFramework;
class FrameworkNotInstalledException extends polyfill_1.Exception {
    constructor(rootFolder, release, exitCode = 1) {
        super(`Framework '${release}' not installed in ${rootFolder}`, exitCode);
        this.exitCode = exitCode;
        Object.setPrototypeOf(this, UnknownFramework.prototype);
    }
}
exports.FrameworkNotInstalledException = FrameworkNotInstalledException;
//# sourceMappingURL=exception.js.map