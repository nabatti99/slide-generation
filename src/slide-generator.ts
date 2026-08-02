import PptxGenJS from "pptxgenjs";
import { flushLayout, registerDueTemplates } from "./template/due-template.ts";

export class SlideGenerator {
    static pptx = new (PptxGenJS as any)() as PptxGenJS.default;

    private constructor() { }

    static create() {
        SlideGenerator.pptx.layout = "LAYOUT_16x9";
        registerDueTemplates(SlideGenerator.pptx);
    }

    static save(fileName: string) {
        // Resolve the deferred layout first — box heights are only final once
        // every box on a slide has been declared. No-op on repeat calls.
        flushLayout();

        // Save/Export the presentation
        SlideGenerator.pptx
            .writeFile({ fileName: `output/${fileName}` })
            .then((fileName: string) => {
                console.log(
                    `DUE Presentation successfully created: ${fileName}`,
                );
            })
            .catch((err: any) => {
                console.error("Failed to generate PPTX:", err);
            });
    }
}

// Automatically initialize the generator and register the layouts
SlideGenerator.create();
