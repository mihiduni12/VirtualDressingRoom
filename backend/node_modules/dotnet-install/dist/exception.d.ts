import { Exception } from "@microsoft.azure/polyfill";
export declare class UnsupportedPlatformException extends Exception {
    exitCode: number;
    constructor(platform: string, exitCode?: number);
}
export declare class UnknownFramework extends Exception {
    exitCode: number;
    constructor(framework: string, exitCode?: number);
}
export declare class FrameworkNotInstalledException extends Exception {
    exitCode: number;
    constructor(rootFolder: string, release: string, exitCode?: number);
}
