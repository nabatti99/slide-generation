import path from "path";
import { fileURLToPath } from "url";

export const PRESENTATION_WIDTH = 10; // in inches
export const PRESENTATION_HEIGHT = 5.625; // in inches

const PT_TO_INCH = 0.0138889; // 1 pt = 0.0138889 inch
const INCH_TO_PT = 72; // 1 inch = 72 pt
const CM_TO_INCH = 0.393701; // 1 cm = 0.393701 inch
const INCH_TO_CM = 2.54; // 1 inch = 2.54 cm

export function ptToInch(pt: number): number {
    return pt * PT_TO_INCH;
}

export function inchToPt(inch: number): number {
    return inch * INCH_TO_PT;
}

export function cmToInch(cm: number): number {
    return cm * CM_TO_INCH;
}

export function inchToCm(inch: number): number {
    return inch * INCH_TO_CM;
}

/**
 * Get the absolute path to an asset file based on the provided asset path and asset directory.
 * @param assetPath The relative path to the asset file (e.g., "images/logo.png").
 * @param assetDir The directory where assets are stored (default is "assets").
 * @returns The absolute path to the asset file.
 * 
 * Example usage:
 * 
 * 1. If you have an asset file located at "assets/images/logo.png" and you want to get its absolute path:
 *    const logoPath = getAssetPath("images/logo.png");
 *    console.log(logoPath); // Outputs the absolute path to "assets/images/logo.png"
 * 
 * 2. If you have an asset file located in a different directory, you can specify the assetDir parameter:
 *    const customAssetPath = getAssetPath("custom/logo.png", "src/slides/assets");
 *    console.log(customAssetPath); // Outputs the absolute path to "src/slides/assets/custom/logo.png"
 */
export function getAssetPath(assetPath: string, assetDir: string = "assets"): string {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const rootDir = path.resolve(dirName, "../");
    return path.resolve(rootDir, assetDir, assetPath);
}