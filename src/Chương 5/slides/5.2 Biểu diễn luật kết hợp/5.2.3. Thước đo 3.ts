import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 31 — CONTENT (Thước đo 3 — Lift / Độ nâng)
// ----------------------------------------------------
const slide31Content = pptx.addSlide({ masterName: "CONTENT" });
slide31Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide31Content.addText("THƯỚC ĐO 3 — LIFT (ĐỘ NÂNG)", { placeholder: "title" });

addText(
  slide31Content,
  [
    { text: "🚀 Khái niệm & Vấn đề giải quyết:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Vấn đề: ", options: { bold: true } },
    { text: "Confidence cao có thể chỉ vì vế phải Y vốn đã xuất hiện rất phổ biến (Support nền cao).\n\n" },
    { text: "• Giải pháp: ", options: { bold: true } },
    { text: "Lift đo mức độ X làm tăng/giảm khả năng xuất hiện Y so với mức nền.\n\n" },
    { text: "• Công thức:\n", options: { bold: true } },
    { text: "  lift(X → Y) = confidence(X → Y) / support(Y)\n" },
    { text: "  lift(X → Y) = support(X ∪ Y) / [support(X) × support(Y)]" }
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
  slide31Content,
  [
    { text: "💡 Trực giác công thức Lift:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "       Xác suất xuất hiện Y khi ĐÃ CÓ X\n" },
    { text: "Lift = ────────────────────────────────────\n" },
    { text: "       Xác suất xuất hiện Y trong TOÀN BỘ CSDL\n\n" },
    { text: "• Trả lời câu hỏi: Khi biết X xuất hiện, khả năng mua Y cao hơn, bằng hay thấp hơn mức thông thường?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide31Content,
  "💡 Ý nghĩa: Lift so sánh tỷ lệ thực tế P(Y|X) với xác suất kỳ vọng P(Y) nếu X và Y hoàn toàn độc lập.",
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
// Slide 32 — CONTENT (Tính Lift — Ví dụ Bánh mì, Sữa và Trứng)
// ----------------------------------------------------
const slide32Content = pptx.addSlide({ masterName: "CONTENT" });
slide32Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide32Content.addText("TÍNH LIFT — VÍ DỤ BÁNH MÌ, SỮA VÀ TRỨNG", { placeholder: "title" });

slide32Content.addTable(
  [
    [
      { text: "Đại lượng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cách tính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giá trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support của Trứng (Y)", options: { bold: true } }, { text: "count(Trứng) / N = 3 / 5" }, { text: "60.0%" }],
    [{ text: "Confidence của luật", options: { bold: true } }, { text: "count(X ∪ Y) / count(X) = 2 / 3" }, { text: "66.7%" }],
    [{ text: "Lift của luật", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Confidence / support(Y) = 66.7% / 60%" }, { text: "1.11" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(4.5), cmToInch(2.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide32Content,
  [
    { text: "🧮 Diễn giải chi tiết kết quả:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Xác suất xuất hiện trứng nền trên toàn CSDL: 60%.\n\n" },
    { text: "• Khi hóa đơn đã có {Bánh mì, Sữa}, xác suất xuất hiện trứng tăng lên: 66,7%.\n\n" },
    { text: "• Lift = 66,7% / 60% = 1.11 ➔ Khả năng mua trứng tăng nhẹ khoảng 11%.\n\n" },
    { text: "• Kết luận: Có liên kết dương nhẹ giữa {Bánh mì, Sữa} và {Trứng}." }
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
  slide32Content,
  "💡 Công thức rút gọn: Lift = support(X ∪ Y) / [support(X) × support(Y)] = 0.4 / (0.6 × 0.6) = 1.11.",
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
// Slide 33 — CONTENT (Cách đọc giá trị Lift)
// ----------------------------------------------------
const slide33Content = pptx.addSlide({ masterName: "CONTENT" });
slide33Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide33Content.addText("CÁCH ĐỌC GIÁ TRỊ LIFT", { placeholder: "title" });

slide33Content.addTable(
  [
    [
      { text: "Giá trị Lift", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa thống kê", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Diễn giải nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Lift > 1", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Liên kết dương" }, { text: "X và Y đồng xuất hiện nhiều hơn kỳ vọng ngẫu nhiên." }],
    [{ text: "Lift = 1", options: { bold: true } }, { text: "Gần như độc lập" }, { text: "Có X không làm thay đổi xác suất mua Y." }],
    [{ text: "Lift < 1", options: { bold: true } }, { text: "Liên kết âm" }, { text: "X và Y đồng xuất hiện ít hơn kỳ vọng ngẫu nhiên (triệt tiêu nhau)." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(5.5), cmToInch(13.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide33Content,
  "💡 Nhấn mạnh: Lift giúp phát hiện các liên kết thực sự có giá trị mà Confidence có thể gây hiểu nhầm khi Y rất phổ biến.",
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
// Slide 34 — CONTENT (Vì sao Confidence cao có thể gây hiểu nhầm?)
// ----------------------------------------------------
const slide34Content = pptx.addSlide({ masterName: "CONTENT" });
slide34Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide34Content.addText("VÌ SAO CONFIDENCE CAO CÓ THỂ GÂY HIỂU NHẦM?", { placeholder: "title" });

addText(
  slide34Content,
  [
    { text: "🎮 Ví dụ điển hình (10.000 hóa đơn):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• 6.000 hóa đơn có Trò chơi điện tử (X).\n\n" },
    { text: "• 7.500 hóa đơn có Video (Y) ➔ support(Y) = 75%.\n\n" },
    { text: "• 4.000 hóa đơn có cả hai (X ∪ Y).\n\n" },
    { text: "• Căn cứ luật: {Trò chơi} → {Video}\n" },
    { text: "  - Support = 4.000 / 10.000 = 40%\n" },
    { text: "  - Confidence = 4.000 / 6.000 = 66.7%" }
  ],
  {
    x: cmToInch(0.8),
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
  slide34Content,
  [
    { text: "⚠️ Phân tích sự thật bằng Lift:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Lift = 66,7% / 75% = 0,89 (< 1)!\n\n" },
    { text: "• Diễn giải: Mặc dù Confidence đạt 66,7%, nhưng khách mua game thực ra mua video ÍT HƠN mức trung bình toàn bộ khách hàng (75%)!\n\n" },
    { text: "• Bài học: Nếu chỉ nhìn Confidence 66,7% sẽ đưa ra quyết định gợi ý mua kèm sai lầm nghiêm trọng!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide34Content,
  "💡 Chốt: Confidence đo khả năng Y khi có X. Lift đo xem khả năng đó có cao hơn mức nền thông thường của Y hay không.",
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
// Slide 35 — CONTENT (Đánh giá luật: Support, Confidence và Lift)
// ----------------------------------------------------
const slide35Content = pptx.addSlide({ masterName: "CONTENT" });
slide35Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide35Content.addText("ĐÁNH GIÁ LUẬT: SUPPORT, CONFIDENCE VÀ LIFT", { placeholder: "title" });

slide35Content.addTable(
  [
    [
      { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Câu hỏi chính", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Mẫu số", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa bản chất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true } }, { text: "Luật bao phủ bao nhiêu CSDL?" }, { text: "Tổng số giao dịch N" }, { text: "Mức phổ biến của X ∪ Y" }],
    [{ text: "Confidence", options: { bold: true } }, { text: "Khi có X, khả năng có Y là bao nhiêu?" }, { text: "Số giao dịch có X" }, { text: "Độ tin cậy có điều kiện P(Y|X)" }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Khả năng có Y cao hơn mức nền bao nhiêu?" }, { text: "Support của Y" }, { text: "Mức liên kết so với độc lập" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(7.5), cmToInch(5.5), cmToInch(6.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide35Content,
  "💡 Nguyên tắc thực hành: Một luật hữu ích cần đồng thời có Support đủ lớn, Confidence đáp ứng minconf và Lift > 1.",
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
