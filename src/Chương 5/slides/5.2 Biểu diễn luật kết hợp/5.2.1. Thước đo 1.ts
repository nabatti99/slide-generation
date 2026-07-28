import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 23 — CONTENT (Thước đo 1 — Support / Độ hỗ trợ)
// ----------------------------------------------------
const slide23Content = pptx.addSlide({ masterName: "CONTENT" });
slide23Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide23Content.addText("THƯỚC ĐO 1 — SUPPORT (ĐỘ HỖ TRỢ)", { placeholder: "title" });

addText(
  slide23Content,
  [
    { text: "📏 Định nghĩa Support:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Support đo tỷ lệ giao dịch chứa đồng thời cả vế trái (X) và vế phải (Y).\n\n" },
    { text: "• Công thức:\n", options: { bold: true } },
    { text: "  support(X → Y) = support(X ∪ Y) = count(X ∪ Y) / N\n\n" },
    { text: "• Ký hiệu:\n", options: { bold: true } },
    { text: "  - count(X ∪ Y): Số giao dịch chứa cả X và Y.\n" },
    { text: "  - N: Tổng số giao dịch trong CSDL." }
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
  slide23Content,
  [
    { text: "💡 Tính chất quan trọng của Support:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Support KHÔNG phụ thuộc vào hướng luật:\n", options: { bold: true } },
    { text: "  support(X → Y) = support(Y → X)\n\n" },
    { text: "• Nguyên nhân: Cả hai hướng đều cùng xét tập mục đầy đủ X ∪ Y.\n\n" },
    { text: "• Support phản ánh mức độ phổ biến của toàn bộ tập mục trong cơ sở dữ liệu." }
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
  slide23Content,
  "💡 Ý nghĩa: Support = (Số giao dịch chứa cả X và Y) / (Tổng số giao dịch N).",
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
// Slide 24 — CONTENT (Tính Support — Ví dụ Bánh mì, Sữa và Trứng)
// ----------------------------------------------------
const slide24Content = pptx.addSlide({ masterName: "CONTENT" });
slide24Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide24Content.addText("TÍNH SUPPORT — VÍ DỤ BÁNH MÌ, SỮA VÀ TRỨNG", { placeholder: "title" });

slide24Content.addTable(
  [
    [
      { text: "Mã giao dịch", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Các mục trong giao dịch", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Chứa {Bánh mì, Sữa, Trứng}?", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "T1", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }, { text: "Có" }],
    [{ text: "T2", options: { bold: true } }, { text: "Bánh mì, Sữa" }, { text: "Không" }],
    [{ text: "T3", options: { bold: true } }, { text: "Sữa, Cà phê" }, { text: "Không" }],
    [{ text: "T4", options: { bold: true } }, { text: "Bánh mì, Trứng" }, { text: "Không" }],
    [{ text: "T5", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }, { text: "Có" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(2.5), cmToInch(5.2), cmToInch(3.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide24Content,
  [
    { text: "🧮 Các bước tính Support:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật cần đánh giá: {Bánh mì, Sữa} → {Trứng}\n\n" },
    { text: "• B1: Tập mục đầy đủ X ∪ Y = {Bánh mì, Sữa, Trứng}.\n\n" },
    { text: "• B2: Đếm số đơn chứa tập mục ➔ count(X ∪ Y) = 2 (T1, T5).\n\n" },
    { text: "• B3: Tổng số giao dịch N = 5.\n\n" },
    { text: "• B4: support = 2 / 5 = 0.40 (40%)." }
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
  slide24Content,
  "💡 Diễn giải: 40% hóa đơn trong mẫu nghiên cứu đồng thời chứa cả 3 sản phẩm: bánh mì, sữa và trứng.",
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
// Slide 25 — CONTENT (Support cho biết điều gì?)
// ----------------------------------------------------
const slide25Content = pptx.addSlide({ masterName: "CONTENT" });
slide25Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide25Content.addText("SUPPORT CHO BIẾT ĐIỀU GÌ?", { placeholder: "title" });

addText(
  slide25Content,
  [
    { text: "⭐ Vai trò của Support & minsup:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Trả lời: ", options: { bold: true } },
    { text: "“Luật này bao phủ bao nhiêu % toàn bộ CSDL?”\n\n" },
    { text: "• Ngưỡng hỗ trợ tối thiểu (minsup): ", options: { bold: true } },
    { text: "Dùng để loại bỏ các tổ hợp quá hiếm, rác hoặc nhiễu.\n\n" },
    { text: "• Frequent Itemset: ", options: { bold: true } },
    { text: "Tập mục có support ≥ minsup." }
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

slide25Content.addTable(
  [
    [
      { text: "Quy mô cơ sở dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "minsup minh họa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Số đơn tối thiểu cần có", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "5 hóa đơn mẫu", options: { bold: true } }, { text: "40%" }, { text: "2 hóa đơn" }],
    [{ text: "1.000 hóa đơn", options: { bold: true } }, { text: "5%" }, { text: "50 hóa đơn" }],
    [{ text: "100.000 hóa đơn", options: { bold: true } }, { text: "1%" }, { text: "1.000 hóa đơn" }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(3.2), cmToInch(3.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide25Content,
  "💡 Quyết định quản trị: Không có ngưỡng minsup cố định cho mọi bài toán. Combo đại trà cần support cao, rủi ro gian lận cần support thấp.",
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
// Slide 26 — CONTENT (Hạn chế của Support khi đứng một mình)
// ----------------------------------------------------
const slide26Content = pptx.addSlide({ masterName: "CONTENT" });
slide26Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide26Content.addText("HẠN CHẾ CỦA SUPPORT KHI ĐỨNG MỘT MÌNH", { placeholder: "title" });

addText(
  slide26Content,
  [
    { text: "❓ Vì sao Support chưa đủ?\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Support CHƯA trả lời:\n" },
    { text: "  - Trong các đơn đã có X, tỷ lệ có thêm Y là bao nhiêu?\n" },
    { text: "  - Y thực sự liên quan đến X, hay vốn đã quá phổ biến?\n" },
    { text: "  - Luật có đủ mạnh để triển khai ưu đãi hay không?\n\n" },
    { text: "• Hai luật cùng support (ví dụ 40%) có thể mang giá trị thực tiễn rất khác nhau!" }
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
  slide26Content,
  [
    { text: "📊 So sánh 2 Luật cùng Support = 40%:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật A: ", options: { bold: true } },
    { text: "Nếu 41% đơn có X ➔ Hầu như hễ có X là có Y (Confidence rất cao!).\n\n" },
    { text: "• Luật B: ", options: { bold: true } },
    { text: "Nếu 90% đơn có X ➔ Chỉ một phần nhỏ đơn có X chứa Y (Confidence thấp!)." }
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
  slide26Content,
  "💡 Thông điệp chuyển tiếp: Support đo độ phổ biến trên toàn bộ CSDL. Để biết 'khi X xuất hiện thì Y xuất hiện thường xuyên thế nào', ta cần CONFIDENCE.",
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
