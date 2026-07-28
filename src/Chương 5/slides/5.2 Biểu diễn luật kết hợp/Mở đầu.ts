import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 19 — SECTION
// ----------------------------------------------------
const slide19Section = pptx.addSlide({ masterName: "SECTION" });
slide19Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide19Section.addText("5.2. BIỂU DIỄN LUẬT KẾT HỢP", { placeholder: "title" });
slide19Section.addText(
  "Một phát hiện trực giác chỉ trở thành kết quả khai phá dữ liệu khi được biểu diễn bằng dữ liệu, công thức và các chỉ số đánh giá rõ ràng.",
  { placeholder: "content" }
);
slide19Section.addText(
  "Câu hỏi dẫn nhập: Làm thế nào để chuyển phát hiện “bánh mì thường đi cùng sữa” thành một luật có thể tính toán, so sánh và ra quyết định?",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 20 — CONTENT (Cơ sở dữ liệu giao dịch)
// ----------------------------------------------------
const slide20Content = pptx.addSlide({ masterName: "CONTENT" });
slide20Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide20Content.addText("CƠ SỞ DỮ LIỆU GIAO DỊCH", { placeholder: "title" });

addText(
  slide20Content,
  [
    { text: "📐 Ký hiệu & Biểu diễn hình thức:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Tập tất cả các mục (Items): ", options: { bold: true } },
    { text: "I = {i₁, i₂, ..., iₘ}\n\n" },
    { text: "• Cơ sở dữ liệu giao dịch: ", options: { bold: true } },
    { text: "D = {T₁, T₂, ..., Tₙ}\n\n" },
    { text: "• Mỗi giao dịch Tⱼ là một tập con: ", options: { bold: true } },
    { text: "Tⱼ ⊆ I\n\n" },
    { text: "• Điều kiện chứa: ", options: { bold: true } },
    { text: "T chứa tập mục A nếu A ⊆ T." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide20Content.addTable(
  [
    [
      { text: "Mã giao dịch (TID)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Các mục xuất hiện trong giao dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "T1", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }],
    [{ text: "T2", options: { bold: true } }, { text: "Bánh mì, Sữa" }],
    [{ text: "T3", options: { bold: true } }, { text: "Sữa, Cà phê" }],
    [{ text: "T4", options: { bold: true } }, { text: "Bánh mì, Trứng" }],
    [{ text: "T5", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide20Content,
  "💡 Nhấn mạnh: “Giao dịch” không nhất thiết là hóa đơn; đơn vị transaction được xác định dựa trên câu hỏi nghiệp vụ thực tế.",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

// ----------------------------------------------------
// Slide 21 — CONTENT (Từ bảng giao dịch đến Itemset)
// ----------------------------------------------------
const slide21Content = pptx.addSlide({ masterName: "CONTENT" });
slide21Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide21Content.addText("TỪ BẢNG GIAO DỊCH ĐẾN ITEMSET", { placeholder: "title" });

slide21Content.addTable(
  [
    [
      { text: "Tập mục (Itemset)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kích thước", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giao dịch chứa Itemset", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{Bánh mì}", options: { bold: true } }, { text: "1-itemset" }, { text: "T1, T2, T4, T5" }],
    [{ text: "{Sữa}", options: { bold: true } }, { text: "1-itemset" }, { text: "T1, T2, T3, T5" }],
    [{ text: "{Trứng}", options: { bold: true } }, { text: "1-itemset" }, { text: "T1, T4, T5" }],
    [{ text: "{Bánh mì, Sữa}", options: { bold: true } }, { text: "2-itemset" }, { text: "T1, T2, T5" }],
    [{ text: "{Bánh mì, Trứng}", options: { bold: true } }, { text: "2-itemset" }, { text: "T1, T4, T5" }],
    [{ text: "{Sữa, Trứng}", options: { bold: true } }, { text: "2-itemset" }, { text: "T1, T5" }],
    [{ text: "{Bánh mì, Sữa, Trứng}", options: { bold: true } }, { text: "3-itemset" }, { text: "T1, T5" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(2.8), cmToInch(4.2)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide21Content,
  [
    { text: "🧺 Phân biệt Itemset & Luật:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Itemset chưa phải là luật! Itemset là nguyên liệu để tạo luật.\n\n" },
    { text: "• Từ itemset {Bánh mì, Sữa, Trứng} có thể sinh các luật hướng khác nhau:\n" },
    { text: "  - {Bánh mì, Sữa} → {Trứng}\n" },
    { text: "  - {Bánh mì, Trứng} → {Sữa}\n" },
    { text: "  - {Sữa, Trứng} → {Bánh mì}" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide21Content,
  "💡 Thông điệp: Luật xuất hiện khi ta phân chia một frequent itemset thành vế trái (Antecedent) và vế phải (Consequent).",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

// ----------------------------------------------------
// Slide 22 — CONTENT (Cấu trúc một luật kết hợp)
// ----------------------------------------------------
const slide22Content = pptx.addSlide({ masterName: "CONTENT" });
slide22Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide22Content.addText("CẤU TRÚC MỘT LUẬT KẾT HỢP", { placeholder: "title" });

addText(
  slide22Content,
  [
    { text: "🔗 Cấu trúc luật:  X  →  Y\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Vế trái (X - Antecedent): ", options: { bold: true } },
    { text: "Điều kiện đã quan sát {Bánh mì, Sữa}.\n\n" },
    { text: "• Vế phải (Y - Consequent): ", options: { bold: true } },
    { text: "Mục đi kèm {Trứng}.\n\n" },
    { text: "• Điều kiện cấu trúc: ", options: { bold: true } },
    { text: "X ∩ Y = ∅ (2 vế không chứa mục chung).\n\n" },
    { text: "• Tập mục đầy đủ: ", options: { bold: true } },
    { text: "X ∪ Y = {Bánh mì, Sữa, Trứng}." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.orange },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide22Content,
  [
    { text: "🧭 Ý nghĩa Hướng của Luật:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật {Bánh mì, Sữa} → {Trứng}:\n  “Khi khách mua bánh mì + sữa, có nên gợi ý thêm trứng?”\n\n" },
    { text: "• Luật {Trứng} → {Bánh mì, Sữa}:\n  “Khi khách mua trứng, có nên giới thiệu combo bánh mì + sữa?”\n\n" },
    { text: "• Hai luật có hướng khác nhau sẽ có Confidence khác nhau và gợi ý hành động khác nhau!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide22Content,
  "💡 Nhấn mạnh: Luật kết hợp mô tả mối đồng xuất hiện có hướng để phục vụ dự đoán/gợi ý. Nó KHÔNG xác lập quan hệ nhân quả.",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);
