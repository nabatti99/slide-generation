import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 77 — SECTION (5.4. GIẢI THUẬT FP-GROWTH)
// ----------------------------------------------------
const slide77Section = pptx.addSlide({ masterName: "SECTION" });
slide77Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide77Section.addText("5.4. GIẢI THUẬT FP-GROWTH", { placeholder: "title" });
slide77Section.addText(
  "Khai phá tập mục thường xuyên hiệu quả bằng cấu trúc cây nén FP-Tree và chiến lược Tăng trưởng mẫu",
  { placeholder: "content" }
);
slide77Section.addText(
  "Câu hỏi dẫn nhập: Có thể tìm tập mục thường xuyên mà KHÔNG cần tạo và kiểm tra một danh sách dài các ứng viên (Candidate generation) như Apriori không?",
  { placeholder: "subContent" }
);
