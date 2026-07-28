import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 27 — CONTENT (Thước đo 2 — Confidence / Độ tin cậy)
// ----------------------------------------------------
const slide27Content = pptx.addSlide({ masterName: "CONTENT" });
slide27Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide27Content.addText("THƯỚC ĐO 2 — CONFIDENCE (ĐỘ TIN CẬY)", { placeholder: "title" });

addText(
  slide27Content,
  [
    { text: "📐 Định nghĩa Confidence:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Confidence đo tỷ lệ giao dịch chứa X cũng đồng thời chứa Y.\n\n" },
    { text: "• Công thức:\n", options: { bold: true } },
    { text: "  confidence(X → Y) = support(X ∪ Y) / support(X) = count(X ∪ Y) / count(X)\n\n" },
    { text: "• Ý nghĩa xác suất có điều kiện:\n", options: { bold: true } },
    { text: "  confidence(X → Y) = P(Y | X)" }
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

addText(
  slide27Content,
  [
    { text: "🔄 Khác biệt cốt lõi với Support:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Support: ", options: { bold: true } },
    { text: "Mẫu số N là toàn bộ CSDL ➔ Trả lời: “Luật phổ biến đến đâu?”\n\n" },
    { text: "• Confidence: ", options: { bold: true } },
    { text: "Mẫu số count(X) là số giao dịch có X ➔ Trả lời: “Khi có X, Y có xuất hiện thường xuyên không?”" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide27Content,
  "💡 Công thức ghi nhớ: Confidence(X → Y) = (Số giao dịch có cả X và Y) / (Số giao dịch có X).",
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
// Slide 28 — CONTENT (Tính Confidence — Ví dụ Bánh mì, Sữa và Trứng)
// ----------------------------------------------------
const slide28Content = pptx.addSlide({ masterName: "CONTENT" });
slide28Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide28Content.addText("TÍNH CONFIDENCE — VÍ DỤ BÁNH MÌ, SỮA VÀ TRỨNG", { placeholder: "title" });

slide28Content.addTable(
  [
    [
      { text: "Mã giao dịch", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Có {Bánh mì, Sữa} (X)?", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Có cả {Bánh mì, Sữa, Trứng} (X ∪ Y)?", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "T1", options: { bold: true } }, { text: "Có" }, { text: "Có" }],
    [{ text: "T2", options: { bold: true } }, { text: "Có" }, { text: "Không" }],
    [{ text: "T3", options: { bold: true } }, { text: "Không" }, { text: "Không" }],
    [{ text: "T4", options: { bold: true } }, { text: "Không" }, { text: "Không" }],
    [{ text: "T5", options: { bold: true } }, { text: "Có" }, { text: "Có" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(2.5), cmToInch(4.5), cmToInch(4.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide28Content,
  [
    { text: "🧮 Các bước tính Confidence:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật: {Bánh mì, Sữa} → {Trứng}\n\n" },
    { text: "• B1: Đếm số đơn chứa X = {Bánh mì, Sữa} ➔ count(X) = 3 (T1, T2, T5).\n\n" },
    { text: "• B2: Đếm số đơn chứa X ∪ Y = {Bánh mì, Sữa, Trứng} ➔ count(X ∪ Y) = 2 (T1, T5).\n\n" },
    { text: "• B3: confidence = 2 / 3 = 66,7%." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide28Content,
  "💡 Diễn giải: Trong các hóa đơn đã mua bánh mì và sữa, có 66,7% (gần 2/3) hóa đơn mua thêm trứng.",
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
// Slide 29 — CONTENT (Confidence phụ thuộc vào hướng luật)
// ----------------------------------------------------
const slide29Content = pptx.addSlide({ masterName: "CONTENT" });
slide29Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide29Content.addText("CONFIDENCE PHỤ THUỘC VÀO HƯỚNG LUẬT", { placeholder: "title" });

slide29Content.addTable(
  [
    [
      { text: "Luật kết hợp", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Tử số count(X ∪ Y)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Mẫu số count(X)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Confidence (%)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{Bánh mì, Sữa} → {Trứng}", options: { bold: true } }, { text: "2" }, { text: "3" }, { text: "66,7%" }],
    [{ text: "{Trứng} → {Bánh mì, Sữa}", options: { bold: true } }, { text: "2" }, { text: "3" }, { text: "66,7%" }],
    [{ text: "{Sữa, Trứng} → {Bánh mì}", options: { bold: true, color: DUE_COLORS.orange } }, { text: "2" }, { text: "2" }, { text: "100,0%" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(8.0), cmToInch(5.0), cmToInch(5.0), cmToInch(5.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide29Content,
  "⚠️ Nhấn mạnh: Tử số luôn là count(X ∪ Y), nhưng mẫu số thay đổi theo vế trái X. Đổi chiều luật làm thay đổi Confidence!",
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
// Slide 30 — CONTENT (Đọc Confidence đúng cách)
// ----------------------------------------------------
const slide30Content = pptx.addSlide({ masterName: "CONTENT" });
slide30Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide30Content.addText("ĐỌC CONFIDENCE ĐÚNG CÁCH", { placeholder: "title" });

slide30Content.addTable(
  [
    [
      { text: "Diễn giải sai phổ biến", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Lý do sai & Bản chất chuẩn xác", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "“66,7% tất cả hóa đơn có trứng”", options: { bold: true } }, { text: "Sai! Tỷ lệ trên toàn CSDL là Support (40%). Confidence chỉ tính trên nhóm đã có vế trái." }],
    [{ text: "“Mua bánh mì làm khách mua trứng”", options: { bold: true } }, { text: "Sai! Confidence chỉ đo độ đồng xuất hiện, không chứng minh quan hệ nhân quả." }],
    [{ text: "“Chắc chắn 100% khách sẽ mua kèm”", options: { bold: true } }, { text: "Sai! Vẫn còn 33,3% giao dịch có X nhưng không mua Y." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(8.0), cmToInch(15.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide30Content,
  "💡 Cảnh báo phản biện: Nếu Y vốn xuất hiện trong 95% toàn bộ hóa đơn, luật có Confidence 90% vẫn chưa chắc đã có giá trị đặc biệt!",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);
