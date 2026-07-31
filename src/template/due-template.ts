import PptxGenJS from "pptxgenjs";
import {
    cmToInch,
    getAssetPath,
    inchToCm,
    PRESENTATION_HEIGHT,
    PRESENTATION_WIDTH,
    ptToInch,
} from "../utils.ts";

const bgSvg = getAssetPath("bg.svg");
const logoSvg = getAssetPath("logo.svg");
const logoFullSvg = getAssetPath("logo-full.svg");
const campus1Png = getAssetPath("campus1.png");
const campus2Png = getAssetPath("campus2.png");

// Due Color Palette Constants
export const DUE_COLORS = {
    green: "0F8A50", // Primary DUE Green
    orange: "E55B13", // Accent DUE Orange
    blue: "0F5B9C", // Subtext DUE Blue
    lightGreen: "D8F3DC", // Light Green background
    lightBg: "F7FAF8", // Background tint
    white: "FFFFFF", // White background / text
    darkText: "333333", // Main body text color
    grayText: "666666", // Secondary/Footer text color
    blueGradientStart: "0E5998",
    greenGradientEnd: "0F8A50",
};

export const DUE_FONTS = {
    titleFont: "Arial",
    bodyFont: "Arial",
};

/**
 * Registers all the DUE Master Slide Templates into the presentation instance.
 * Layouts are designed based on Widescreen (13.33 x 7.5 inches) template size.
 */
export function registerDueTemplates(pptx: PptxGenJS.default) {
    // ----------------------------------------------------
    // 1. TITLE SLIDE MASTER (TITLE)
    // ----------------------------------------------------
    pptx.defineSlideMaster({
        title: "TITLE",
        background: { path: bgSvg },
        objects: [
            // Top Left: Logo / University Name
            {
                image: {
                    x: cmToInch(2),
                    y: cmToInch(0.5),
                    w: cmToInch(7),
                    h: cmToInch(1.24),
                    path: logoFullSvg,
                },
            },

            // Bottom Left Accent (Green Bar)
            {
                rect: {
                    x: cmToInch(2),
                    y: PRESENTATION_HEIGHT - cmToInch(1.6),
                    w: cmToInch(1),
                    h: cmToInch(1.2),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Subject Placeholder (Bottom Left)
            {
                placeholder: {
                    options: {
                        name: "subject",
                        type: "body",
                        x: cmToInch(3.2),
                        y: PRESENTATION_HEIGHT - cmToInch(1.6),
                        w: cmToInch(14),
                        h: cmToInch(0.5),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        align: "left",
                        valign: "top",
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },

            // Faculty Placeholder (Bottom Left)
            {
                placeholder: {
                    options: {
                        name: "faculty",
                        type: "body",
                        x: cmToInch(3.2),
                        y: PRESENTATION_HEIGHT - cmToInch(0.9),
                        w: cmToInch(14),
                        h: cmToInch(0.4),
                        margin: 0,
                        align: "left",
                        valign: "top",
                        fontSize: 12,
                        color: DUE_COLORS.blue,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },

            // Far Right Gradient Decoration
            {
                rect: {
                    x: PRESENTATION_WIDTH - cmToInch(1.5),
                    y: cmToInch(1.5),
                    w: cmToInch(1.5),
                    h: PRESENTATION_HEIGHT - cmToInch(3),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Right Image
            {
                image: {
                    x: PRESENTATION_WIDTH - cmToInch(9.5),
                    y: cmToInch(1.5),
                    w: cmToInch(7.5),
                    h: PRESENTATION_HEIGHT - cmToInch(3),
                    path: campus1Png,
                },
            },

            // Title Placeholder (Middle Left)
            {
                placeholder: {
                    options: {
                        name: "title",
                        type: "title",
                        x: cmToInch(2),
                        y: cmToInch(4),
                        w: cmToInch(14),
                        h: cmToInch(1.5),
                        margin: 0,
                        fontSize: 32,
                        bold: true,
                        valign: "top",
                        align: "left",
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.titleFont,
                    },
                },
            },

            // Subtitle Placeholder (Middle Left)
            {
                placeholder: {
                    options: {
                        name: "subtitle",
                        type: "title",
                        x: cmToInch(2),
                        y: cmToInch(5.6),
                        w: cmToInch(14),
                        h: cmToInch(4),
                        margin: 0,
                        fontSize: 32,
                        bold: true,
                        valign: "top",
                        align: "left",
                        color: DUE_COLORS.orange,
                        fontFace: DUE_FONTS.titleFont,
                    },
                },
            },
        ],
    });

    // ----------------------------------------------------
    // 2. OBJECTIVE SLIDE MASTER (OBJECTIVE)
    // ----------------------------------------------------
    pptx.defineSlideMaster({
        title: "OBJECTIVE",
        background: { path: bgSvg },
        objects: [
            // Top Right: Logo
            {
                image: {
                    x: PRESENTATION_WIDTH - cmToInch(1.8),
                    y: cmToInch(0.4),
                    w: cmToInch(1),
                    h: cmToInch(1.5),
                    path: logoSvg,
                },
            },

            // Main Center-Right Large Green Container
            {
                rect: {
                    x: 0,
                    y: cmToInch(2.8),
                    w: PRESENTATION_WIDTH,
                    h: cmToInch(9),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Main Image (Center-Left)
            {
                image: {
                    x: cmToInch(1.5),
                    y: cmToInch(0.6),
                    w: cmToInch(6.2),
                    h: cmToInch(12),
                    path: campus2Png,
                },
            },

            // Bottom Progress/Footer
            {
                rect: {
                    x: 0,
                    y: PRESENTATION_HEIGHT - cmToInch(1),
                    w: cmToInch(1.4),
                    h: cmToInch(0.4),
                    fill: { color: DUE_COLORS.green },
                },
            },
            {
                placeholder: {
                    options: {
                        name: "footer",
                        type: "body",
                        x: cmToInch(1.5),
                        y: PRESENTATION_HEIGHT - cmToInch(1.06),
                        w: cmToInch(14),
                        h: cmToInch(0.8),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.bodyFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },

            // Page Title (Center-Top)
            {
                text: {
                    text: "MỤC TIÊU CHƯƠNG",
                    options: {
                        x: cmToInch(8.5),
                        y: cmToInch(1.5),
                        w: cmToInch(10),
                        h: cmToInch(1),
                        margin: 0,
                        fontSize: 24,
                        bold: true,
                        color: DUE_COLORS.orange,
                        fontFace: DUE_FONTS.titleFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },

            // Content Placeholder (Center-Middle)
            {
                placeholder: {
                    options: {
                        name: "content",
                        type: "body",
                        x: cmToInch(8.5),
                        y: cmToInch(3.2),
                        w: cmToInch(15),
                        h: cmToInch(8),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        color: DUE_COLORS.white,
                        fontFace: DUE_FONTS.bodyFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },
        ],
    });

    // ----------------------------------------------------
    // 3. SECTION SLIDE MASTER (SECTION)
    // ----------------------------------------------------
    pptx.defineSlideMaster({
        title: "SECTION",
        background: { path: bgSvg },
        objects: [
            // Top Right: Logo
            {
                image: {
                    x: PRESENTATION_WIDTH - cmToInch(1.8),
                    y: cmToInch(0.4),
                    w: cmToInch(1),
                    h: cmToInch(1.5),
                    path: logoSvg,
                },
            },

            // Main Center-Right Large Green Container
            {
                rect: {
                    x: 0,
                    y: cmToInch(2.0),
                    w: PRESENTATION_WIDTH,
                    h: cmToInch(9.5),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Title Placeholder (Center-Middle)
            {
                placeholder: {
                    options: {
                        name: "title",
                        type: "body",
                        x: cmToInch(1),
                        y: cmToInch(2.6),
                        w: PRESENTATION_WIDTH - cmToInch(2),
                        h: cmToInch(2.2),
                        margin: 0,
                        fontSize: 27,
                        bold: true,
                        color: DUE_COLORS.white,
                        fontFace: DUE_FONTS.bodyFont,
                        align: "center",
                    },
                },
            },

            // Content Placeholder (Center-Middle)
            {
                placeholder: {
                    options: {
                        name: "content",
                        type: "body",
                        x: cmToInch(1),
                        y: cmToInch(4.8),
                        w: PRESENTATION_WIDTH - cmToInch(2),
                        h: cmToInch(2.0),
                        margin: 0,
                        fontSize: 16,
                        bold: true,
                        color: DUE_COLORS.white,
                        fontFace: DUE_FONTS.bodyFont,
                        align: "center",
                    },
                },
            },

            {
                placeholder: {
                    options: {
                        name: "subContent",
                        type: "body",
                        x: cmToInch(1),
                        y: cmToInch(7.0),
                        w: PRESENTATION_WIDTH - cmToInch(2),
                        h: cmToInch(3.5),
                        margin: 0,
                        fontSize: 14,
                        italic: true,
                        color: DUE_COLORS.white,
                        fontFace: DUE_FONTS.bodyFont,
                        align: "center",
                    },
                },
            },

            // Bottom Progress/Footer
            {
                rect: {
                    x: 0,
                    y: PRESENTATION_HEIGHT - cmToInch(1),
                    w: cmToInch(1.4),
                    h: cmToInch(0.4),
                    fill: { color: DUE_COLORS.green },
                },
            },
            {
                placeholder: {
                    options: {
                        name: "footer",
                        type: "body",
                        x: cmToInch(1.5),
                        y: PRESENTATION_HEIGHT - cmToInch(1.06),
                        w: cmToInch(14),
                        h: cmToInch(0.4),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.bodyFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },
        ],
    });

    // ----------------------------------------------------
    // 3. CONTENT SLIDE MASTER (CONTENT)
    // ----------------------------------------------------
    pptx.defineSlideMaster({
        title: "CONTENT",
        background: { path: bgSvg },
        objects: [
            // Top Right: Logo
            {
                image: {
                    x: PRESENTATION_WIDTH - cmToInch(1.8),
                    y: cmToInch(0.4),
                    w: cmToInch(1),
                    h: cmToInch(1.5),
                    path: logoSvg,
                },
            },

            // Decorative Green Bar (Top Left)
            {
                rect: {
                    x: 0,
                    y: cmToInch(0.6),
                    w: cmToInch(0.2),
                    h: cmToInch(2),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Title Placeholder (Center-Middle)
            {
                placeholder: {
                    options: {
                        name: "title",
                        type: "body",
                        x: cmToInch(0.8),
                        y: cmToInch(0.5),
                        w: PRESENTATION_WIDTH - cmToInch(3.5),
                        h: cmToInch(1.2),
                        margin: 0,
                        fontSize: 18,
                        bold: true,
                        color: DUE_COLORS.orange,
                        fontFace: DUE_FONTS.bodyFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },

            // Bottom Progress/Footer
            {
                rect: {
                    x: 0,
                    y: PRESENTATION_HEIGHT - cmToInch(1),
                    w: cmToInch(1.4),
                    h: cmToInch(0.4),
                    fill: { color: DUE_COLORS.green },
                },
            },
            {
                placeholder: {
                    options: {
                        name: "footer",
                        type: "body",
                        x: cmToInch(1.5),
                        y: PRESENTATION_HEIGHT - cmToInch(1.06),
                        w: cmToInch(14),
                        h: cmToInch(0.4),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.bodyFont,
                        valign: "top",
                        align: "left",
                    },
                },
            },
        ],
    });

    // ----------------------------------------------------
    // 4. END SLIDE MASTER (END)
    // ----------------------------------------------------
    pptx.defineSlideMaster({
        title: "END",
        background: { path: bgSvg },
        objects: [
            // Top Left: Logo / University Name
            {
                image: {
                    x: cmToInch(2),
                    y: cmToInch(0.5),
                    w: cmToInch(7),
                    h: cmToInch(1.24),
                    path: logoFullSvg,
                },
            },

            // Bottom Left Accent (Green Bar)
            {
                rect: {
                    x: cmToInch(2),
                    y: PRESENTATION_HEIGHT - cmToInch(1.6),
                    w: cmToInch(1),
                    h: cmToInch(1.2),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Subject Placeholder (Bottom Left)
            {
                placeholder: {
                    options: {
                        name: "subject",
                        type: "body",
                        x: cmToInch(3.2),
                        y: PRESENTATION_HEIGHT - cmToInch(1.6),
                        w: cmToInch(14),
                        h: cmToInch(0.5),
                        margin: 0,
                        fontSize: 12,
                        bold: true,
                        align: "left",
                        valign: "top",
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },

            // Faculty Placeholder (Bottom Left)
            {
                placeholder: {
                    options: {
                        name: "faculty",
                        type: "body",
                        x: cmToInch(3.2),
                        y: PRESENTATION_HEIGHT - cmToInch(0.9),
                        w: cmToInch(14),
                        h: cmToInch(0.4),
                        margin: 0,
                        align: "left",
                        valign: "top",
                        fontSize: 12,
                        color: DUE_COLORS.blue,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },

            // Far Right Gradient Decoration
            {
                rect: {
                    x: PRESENTATION_WIDTH - cmToInch(1.5),
                    y: cmToInch(1.5),
                    w: cmToInch(1.5),
                    h: PRESENTATION_HEIGHT - cmToInch(3),
                    fill: { color: DUE_COLORS.green },
                },
            },

            // Right Image
            {
                image: {
                    x: PRESENTATION_WIDTH - cmToInch(9.5),
                    y: cmToInch(1.5),
                    w: cmToInch(7.5),
                    h: PRESENTATION_HEIGHT - cmToInch(3),
                    path: campus1Png,
                },
            },

            // Thank you (Middle Left)
            {
                text: {
                    text: "CẢM ƠN!",
                    options: {
                        x: cmToInch(2),
                        y: cmToInch(4),
                        w: cmToInch(14),
                        h: cmToInch(1),
                        margin: 0,
                        fontSize: 32,
                        bold: true,
                        valign: "top",
                        align: "left",
                        color: DUE_COLORS.orange,
                        fontFace: DUE_FONTS.titleFont,
                    }
                }
            },
            {
                text: {
                    text: "Hẹn gặp lại trong các chương tiếp theo!",
                    options: {
                        x: cmToInch(2),
                        y: cmToInch(5.6),
                        w: cmToInch(14),
                        h: cmToInch(4),
                        margin: 0,
                        fontSize: 16,
                        italic: true,
                        valign: "top",
                        align: "left",
                        color: DUE_COLORS.green,
                        fontFace: DUE_FONTS.titleFont,
                    }
                }
            },

            // Contact Decoration (Bottom Left)
            {
                rect: {
                    x: cmToInch(2),
                    y: PRESENTATION_HEIGHT - cmToInch(5.95),
                    w: cmToInch(0.05),
                    h: cmToInch(1.4),
                    fill: { color: DUE_COLORS.blue },
                },
            },

            // Contact Info (Bottom Left)
            {
                placeholder: {
                    options: {
                        name: "email",
                        type: "body",
                        x: cmToInch(2.2),
                        y: PRESENTATION_HEIGHT - cmToInch(6),
                        w: cmToInch(14),
                        h: cmToInch(0.5),
                        margin: 0,
                        fontSize: 16,
                        bold: true,
                        align: "left",
                        valign: "top",
                        color: DUE_COLORS.blue,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },
            {
                placeholder: {
                    options: {
                        name: "phone",
                        type: "body",
                        x: cmToInch(2.2),
                        y: PRESENTATION_HEIGHT - cmToInch(5.2),
                        w: cmToInch(14),
                        h: cmToInch(0.5),
                        margin: 0,
                        fontSize: 16,
                        bold: true,
                        align: "left",
                        valign: "top",
                        color: DUE_COLORS.blue,
                        fontFace: DUE_FONTS.bodyFont,
                    },
                },
            },
        ],
    });
}

//=================HELPER FUNCTIONS=================//
export function addText(
    slide: PptxGenJS.default.Slide,
    text: string | PptxGenJS.default.TextProps[],
    options: PptxGenJS.default.TextPropsOptions,
) {
    // 1pt x = 0.025 cm
    // 1pt y = 0.048 cm
    const currentFontSize = options.fontSize! as number;
    const currentX = inchToCm(options.x! as number);
    const currentY = inchToCm(options.y! as number);
    const currentW = inchToCm(options.w! as number);
    const currentH = inchToCm(options.h! as number);
    const currentMargin = (options.margin || 0) as number;

    const oneLineHeight = currentFontSize * 0.048;

    const lines = text.toString().split("\n");
    let numberOfLines = lines.length;
    for (const line of lines) {
        const lineWidth = line.length * currentFontSize * 0.025;
        const numberOfLinesForThisLine = Math.ceil(lineWidth / currentW);
        numberOfLines += numberOfLinesForThisLine - 1;
    }

    const minHeight = numberOfLines * oneLineHeight;
    const textHeight = Math.max(minHeight, currentH);

    const height = cmToInch(textHeight) + ptToInch(currentMargin * 2); // Convert margin from cm to pt to inch

    const baseOptions: PptxGenJS.default.TextPropsOptions = {
        fontFace: DUE_FONTS.bodyFont,
        fontSize: 16,
        margin: currentMargin,
        color: DUE_COLORS.darkText,
        align: "left",
        valign: "top",
    };

    const finalOptions = { ...baseOptions, ...options, h: height };
    slide.addText(text, finalOptions);

    return finalOptions;
}
