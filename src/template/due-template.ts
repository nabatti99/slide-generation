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
    const currentW = inchToCm(options.w! as number);
    const currentH = inchToCm(options.h! as number);
    const currentMargin = (options.margin || 0) as number;

    // `y: 0` means "flow below whatever sits above me" — resolved in the layout
    // pass, once every box on the slide has been measured.
    const flowBelow = options.y === 0;
    const declaredY = flowBelow ? null : inchToCm(options.y! as number);

    const oneLineHeight = currentFontSize * 0.048;

    // Flatten rich-text runs into plain text before measuring. Calling
    // toString() on a TextProps[] yields "[object Object],..." — that measures
    // every rich-text box as a single line.
    const plainText =
        typeof text === "string"
            ? text
            : text.map((run) => (typeof run.text === "string" ? run.text : "")).join("");

    const countLines = (source: string, charWidthFactor: number, floorBlankLines: boolean) => {
        const lines = source.split("\n");
        let total = lines.length;
        for (const line of lines) {
            const lineWidth = line.length * currentFontSize * charWidthFactor;
            const wrapped = Math.ceil(lineWidth / currentW);
            total += (floorBlankLines ? Math.max(1, wrapped) : wrapped) - 1;
        }
        return total;
    };

    // Two sizing modes.
    //  - h > 0  : legacy behaviour, kept byte-for-byte for Ch.1 and Ch.2 — `h`
    //             is a reserved size and the measurement uses the original
    //             (imprecise) heuristic.
    //  - h === 0: the box hugs its content. Only Ch.6 opts in. Here the
    //             measurement is corrected: rich-text runs are flattened, a
    //             blank line counts as one line instead of MINUS one, and the
    //             character width matches what Arial actually renders.
    // Opt in with a literal `h: 0`; anything else (including a missing h) keeps
    // the original code path untouched.
    const hugContent = options.h === 0;

    let numberOfLines: number;
    let textHeight: number;

    if (!hugContent) {
        numberOfLines = countLines(text.toString(), 0.025, false);
        textHeight = Math.max(numberOfLines * oneLineHeight, currentH);
    } else {
        // Measure each run at ITS OWN font size. A heading run set to 13.5pt
        // inside an 11.5pt box is ~17% wider per character, so measuring it at
        // the box size under-counted its wrapped lines and clipped the box.
        numberOfLines = countWrappedLines(text, currentFontSize, currentW);
        // PowerPoint advances exactly `lineSpacing` points per line when it is
        // set, so use it instead of deriving the line height from the font size.
        const lineSpacingPt = (options.lineSpacing as number) || currentFontSize * 1.2;
        const hugLineHeight = Math.max(lineSpacingPt * 0.03528, oneLineHeight * 0.9);
        // Half a line of slack for rounding inside the wrap estimate.
        textHeight = (numberOfLines + 0.5) * hugLineHeight;
    }

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

    if (!hugContent) {
        // Legacy boxes keep drawing straight away at their declared position.
        slide.addText(text, finalOptions);
        return finalOptions;
    }

    // Content-hugging boxes are queued instead: their final height depends on
    // the other boxes in the same row, which may not exist yet.
    queueBox(slide, {
        kind: "text",
        x: currentX,
        w: currentW,
        h: inchToCm(height),
        declaredY,
        lines: numberOfLines,
        label: plainText.slice(0, 90).replace(/\n+/g, " / "),
        text,
        options: finalOptions,
    });

    return finalOptions;
}

export const CONTENT_TOP_CM = 2.0;
const FLOW_GAP_CM = 0.35;
const MAX_GAP_CM = 1.6;

/**
 * Lowest edge content may reach. The footer bar starts 1cm above the bottom of
 * the slide; leave a further 0.5cm so a box never sits flush against it.
 */
const CONTENT_BOTTOM_CM = inchToCm(PRESENTATION_HEIGHT) - 1.5;

/** cm of horizontal space one character takes, per point of font size. */
const CHAR_WIDTH_CM_PER_PT = 0.021;

/** Same measure without the safety headroom — what Arial actually renders. */
const CHAR_WIDTH_CM_PER_PT_EXACT = 0.0182;

/**
 * Splits a line in two at the word boundary nearest its middle, so a wrapped
 * heading reads as two balanced lines instead of a long line plus an orphan
 * word ("…VÀ VIỄN / THÔNG").
 */
function balanceLine(line: string) {
    const words = line.split(" ");
    if (words.length < 2) return line;

    let best = { index: 1, diff: Number.POSITIVE_INFINITY };
    for (let index = 1; index < words.length; index++) {
        const left = words.slice(0, index).join(" ").length;
        const right = words.slice(index).join(" ").length;
        const diff = Math.abs(left - right);
        if (diff < best.diff) best = { index, diff };
    }
    return `${words.slice(0, best.index).join(" ")}\n${words.slice(best.index).join(" ")}`;
}

const SECTION_TEXT_SIZES = {
    title: { base: 27, min: 19 },
    content: { base: 16, min: 12 },
    // Câu đề từ dài: thà cắt thành hai dòng cân nhau còn hơn thu chữ quá nhỏ.
    subContent: { base: 14, min: 13 },
} as const;

/**
 * Writes text into a SECTION placeholder at the largest size that still keeps
 * every paragraph on one line. Only if even the smallest size cannot do that
 * does it break the paragraph into two balanced halves.
 */
export function addSectionText(
    slide: PptxGenJS.default.Slide,
    placeholder: keyof typeof SECTION_TEXT_SIZES,
    text: string,
) {
    const widthCm = inchToCm(PRESENTATION_WIDTH) - 2; // placeholder inset: 1cm mỗi bên
    const { base, min } = SECTION_TEXT_SIZES[placeholder];
    const paragraphs = text.split("\n");
    const longest = Math.max(...paragraphs.map((paragraph) => paragraph.length));

    let fontSize = base;
    while (fontSize > min && longest * fontSize * CHAR_WIDTH_CM_PER_PT_EXACT > widthCm) {
        fontSize -= 0.5;
    }

    const maxChars = Math.floor(widthCm / (fontSize * CHAR_WIDTH_CM_PER_PT_EXACT));
    const fitted = paragraphs
        .map((paragraph) => (paragraph.length > maxChars ? balanceLine(paragraph) : paragraph))
        .join("\n");

    slide.addText(fitted, { placeholder, ...(fontSize === base ? {} : { fontSize }) });
}

/**
 * Number of rendered lines a rich-text value needs at a given box width.
 *
 * Walks the runs so each one is measured at its own font size — a bold heading
 * is usually a step larger than the body runs and wraps sooner.
 */
function countWrappedLines(
    text: string | PptxGenJS.default.TextProps[],
    baseFontSize: number,
    widthCm: number,
) {
    const runs =
        typeof text === "string"
            ? [{ text, options: undefined as PptxGenJS.default.TextPropsOptions | undefined }]
            : text;

    let lines = 0;
    let widthSoFar = 0;

    const endLine = () => {
        lines += Math.max(1, Math.ceil(widthSoFar / widthCm));
        widthSoFar = 0;
    };

    for (const run of runs) {
        const runText = typeof run.text === "string" ? run.text : "";
        const fontSize = (run.options?.fontSize as number) || baseFontSize;
        const segments = runText.split("\n");
        segments.forEach((segment, index) => {
            if (index > 0) endLine();
            widthSoFar += segment.length * fontSize * CHAR_WIDTH_CM_PER_PT;
        });
    }
    endLine();

    return lines;
}

/**
 * Draws a table and records its footprint, so a banner placed with `y: 0`
 * flows below it instead of landing on top of it.
 */
export function addTable(
    slide: PptxGenJS.default.Slide,
    rows: PptxGenJS.default.TableRow[],
    options: PptxGenJS.default.TableProps,
) {
    const x = inchToCm(options.x! as number);
    const w = inchToCm(options.w! as number);
    const fontSize = (options.fontSize as number) || 11;
    const columns = rows[0]?.length || 1;

    const columnWidths: number[] = Array.isArray(options.colW)
        ? (options.colW as number[]).map(inchToCm)
        : Array<number>(columns).fill(w / columns);

    // A row is as tall as its tallest cell.
    let totalLines = 0;
    for (const row of rows) {
        let rowLines = 1;
        row.forEach((cell, index) => {
            const cellText = typeof cell === "string" ? cell : String((cell as any)?.text ?? "");
            const columnWidth = columnWidths[index] ?? w / columns;
            const lines = Math.max(
                1,
                Math.ceil((cellText.length * fontSize * 0.021) / columnWidth),
            );
            rowLines = Math.max(rowLines, lines);
        });
        totalLines += rowLines;
    }

    // 1.55x the font size per line plus PowerPoint's per-cell vertical padding.
    // Deliberately generous: a small gap under a table reads fine, a banner
    // landing on top of one does not.
    const height = totalLines * fontSize * 1.55 * 0.03528 + rows.length * 0.24;

    // The table itself is drawn immediately, but it is also queued as an
    // occupied band so a banner flowing below it knows where it ends.
    queueBox(slide, {
        kind: "table",
        x,
        w,
        h: height,
        declaredY: options.y === 0 ? null : inchToCm(options.y! as number),
        lines: totalLines,
        label: "«bảng»",
    });

    slide.addTable(rows, options);
}

type QueuedBox = {
    kind: "text" | "table";
    x: number;
    w: number;
    h: number;
    /** cm, or null when the box asked to flow below whatever precedes it. */
    declaredY: number | null;
    lines: number;
    label: string;
    text?: string | PptxGenJS.default.TextProps[];
    options?: PptxGenJS.default.TextPropsOptions;
    /** Filled in by the layout pass. */
    y?: number;
};

const pendingBoxes = new Map<PptxGenJS.default.Slide, QueuedBox[]>();

function queueBox(slide: PptxGenJS.default.Slide, box: QueuedBox) {
    const queue = pendingBoxes.get(slide) ?? [];
    queue.push(box);
    pendingBoxes.set(slide, queue);
}

/**
 * Boxes that sit side by side form a row. A box joins the row being built when
 * it was declared at the same y, or when both are flowing and their horizontal
 * bands do not overlap (the two cards of a card row).
 */
function groupIntoRows(queue: QueuedBox[]) {
    const rows: QueuedBox[][] = [];

    for (const box of queue) {
        const row = rows[rows.length - 1];
        const peer = row?.[0];

        const sameDeclaredRow =
            peer && box.declaredY !== null && peer.declaredY === box.declaredY;
        const sideBySideFlow =
            row &&
            box.declaredY === null &&
            row.every(
                (other) =>
                    other.declaredY === null &&
                    !(box.x < other.x + other.w - 0.05 && other.x < box.x + box.w - 0.05),
            );

        if (sameDeclaredRow || sideBySideFlow) row.push(box);
        else rows.push([box]);
    }

    return rows;
}

/**
 * Resolves every queued box and draws it.
 *
 * Runs once, just before the deck is written, because a box's final height
 * depends on the tallest box in its row — which may not have been added yet
 * when the box itself was declared. Boxes in a row come out the same height so
 * the cards line up, and each following row starts below the previous one.
 */
export function flushLayout() {
    const debug = process.env.LAYOUT_DEBUG === "1";
    let slideIndex = 0;

    for (const [slide, queue] of pendingBoxes) {
        let cursor: number | null = null;
        slideIndex++;

        const rows = groupIntoRows(queue);
        const rowHeights = rows.map((row) => Math.max(...row.map((box) => box.h)));
        const gap = spreadGap(rows, rowHeights);

        for (const [index, row] of rows.entries()) {
            const rowHeight = rowHeights[index];
            const declaredY = row[0].declaredY;
            const flowY: number = cursor === null ? CONTENT_TOP_CM : cursor + gap;
            const y: number = declaredY !== null ? declaredY : flowY;

            for (const box of row) {
                box.y = y;
                box.h = rowHeight;
                if (box.kind === "text") {
                    slide.addText(box.text!, {
                        ...box.options,
                        y: cmToInch(y),
                        h: cmToInch(rowHeight),
                    });
                }
            }
            if (debug) {
                const cells = row
                    .map((box) => `${box.h.toFixed(2)}cm "${box.label.slice(0, 22)}"`)
                    .join("  ·  ");
                console.log(
                    `#${slideIndex} y=${y.toFixed(2)} cao=${rowHeight.toFixed(2)} [${row.length}] ${cells}`,
                );
            }
            reportOverflow(row, y, rowHeight);
            cursor = y + rowHeight;
        }
    }
    pendingBoxes.clear();
}

/**
 * Vertical gap to put between rows.
 *
 * Spare room left over after every row is measured gets shared out evenly
 * between the rows, so a slide with little content breathes instead of packing
 * everything against the title and leaving a blank band at the bottom.
 */
function spreadGap(rows: QueuedBox[][], rowHeights: number[]) {
    const gaps = rows.filter((row) => row[0].declaredY === null).length;
    if (gaps === 0) return FLOW_GAP_CM;

    const firstY = rows[0][0].declaredY ?? CONTENT_TOP_CM;
    const available = CONTENT_BOTTOM_CM - firstY;
    const leftover = available - rowHeights.reduce((sum, height) => sum + height, 0);

    return Math.min(MAX_GAP_CM, Math.max(FLOW_GAP_CM, leftover / gaps));
}

/** Warns when a finished row crosses the footer bar. */
function reportOverflow(row: QueuedBox[], y: number, height: number) {
    const bottom = y + height;
    // 1mm of tolerance: the layout pass parks a full slide exactly on the limit,
    // and rounding there is noise rather than a collision with the footer.
    if (bottom <= CONTENT_BOTTOM_CM + 0.1) return;

    const tallest = row.reduce((a, b) => (a.lines >= b.lines ? a : b));
    console.warn(
        `[layout] Tràn đáy: y=${y.toFixed(1)} cao=${height.toFixed(1)} -> ${bottom.toFixed(1)}cm ` +
        `> ${CONTENT_BOTTOM_CM.toFixed(1)}cm (${tallest.lines} dòng) | "${tallest.label}"`,
    );
}
