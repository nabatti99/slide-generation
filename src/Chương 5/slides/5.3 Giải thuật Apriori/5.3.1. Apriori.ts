import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 58 — SECTION (5.3.1. GIẢI THUẬT APRIORI)
// ----------------------------------------------------
const slide58Section = pptx.addSlide({ masterName: "SECTION" });
slide58Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide58Section.addText("5.3.1. GIẢI THUẬT APRIORI", { placeholder: "title" });
slide58Section.addText(
  "Giải thuật nền tảng khai phá tập mục thường xuyên dựa trên tính chất tiên phong (Apriori Property)",
  { placeholder: "content" }
);
slide58Section.addText(
  "Tư tưởng cốt lõi: 'Mọi tập con của một tập mục thường xuyên đều phải là tập mục thường xuyên.' Giúp tỉa không gian tìm kiếm hiệu quả.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 59 — CONTENT (Bài toán minh họa từng bước)
// ----------------------------------------------------
const slide59Content = pptx.addSlide({ masterName: "CONTENT" });
slide59Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide59Content.addText("BÀI TOÁN MINH HỌA TỪNG BƯỚC", { placeholder: "title" });

slide59Content.addTable(
  [
    [
      { text: "Mã giao dịch (TID)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Danh sách sản phẩm trong giỏ hàng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "T100", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "I₁, I₂, I₅", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "T200", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "I₂, I₄", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "T300", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "I₂, I₃", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "T400", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "I₁, I₂, I₄", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "T500", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "I₁, I₃", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "T600", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "I₂, I₃", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "T700", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "I₁, I₃", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "T800", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "I₁, I₂, I₃, I₅", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "T900", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "I₁, I₂, I₃", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(7.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide59Content,
  [
    { text: "📊 Giả thiết Bài toán:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Tổng số giao dịch: ", options: { bold: true } },
    { text: "N = 9 giao dịch.\n\n" },
    { text: "• Tập sản phẩm: ", options: { bold: true } },
    { text: "I = {I₁, I₂, I₃, I₄, I₅}.\n\n" },
    { text: "• Ngưỡng support tối thiểu: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "minsup = 2/9 (tương đương min_support_count = 2).\n\n" },
    { text: "🎯 Mục tiêu: Trích xuất toàn bộ Frequent Itemsets L và sinh Luật mạnh." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide59Content,
  "💡 Quy ước: Mọi tập mục có Support Count < 2 sẽ bị loại ngay ở bước Prune của từng lần lặp.",
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
// Slide 60 — CONTENT (Lần lặp 1: Sinh C₁, tìm L₁)
// ----------------------------------------------------
const slide60Content = pptx.addSlide({ masterName: "CONTENT" });
slide60Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide60Content.addText("LẦN LẶP 1: SINH C₁, TÌM L₁", { placeholder: "title" });

slide60Content.addTable(
  [
    [
      { text: "Ứng viên C₁", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Các giao dịch chứa tập mục", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Support count", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết luận (minsup=2)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{I₁}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "T100, T400, T500, T700, T800, T900", options: { fill: { color: "FFFFFF" } } }, { text: "6", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ Thuộc L₁", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₂}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "T100, T200, T300, T400, T600, T800, T900", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "7", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ Thuộc L₁", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₃}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "T300, T500, T600, T700, T800, T900", options: { fill: { color: "FFFFFF" } } }, { text: "6", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ Thuộc L₁", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₄}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "T200, T400", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "2", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ Thuộc L₁", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₅}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "T100, T800", options: { fill: { color: "FFFFFF" } } }, { text: "2", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ Thuộc L₁", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(11.5), cmToInch(3.8), cmToInch(5.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide60Content,
  "💡 Kết quả Lần 1: Tất cả 5 mục đơn đều có support count ≥ 2. Do đó L₁ = {{I₁}, {I₂}, {I₃}, {I₄}, {I₅}}.",
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
// Slide 61 — CONTENT (Lần lặp 2: Sinh C₂, tìm L₂)
// ----------------------------------------------------
const slide61Content = pptx.addSlide({ masterName: "CONTENT" });
slide61Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide61Content.addText("LẦN LẶP 2: SINH C₂, TÌM L₂", { placeholder: "title" });

slide61Content.addTable(
  [
    [
      { text: "Ứng viên C₂", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Count", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Kết quả", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ứng viên C₂", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Count", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Kết quả", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "{I₁, I₂}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "4", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ L₂", options: { fill: { color: "FFFFFF" } } }, { text: "{I₂, I₄}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "2", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ L₂", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₁, I₃}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "4", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ L₂", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₂, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "2", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ L₂", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₁, I₄}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "1", options: { fill: { color: "FFFFFF" } } }, { text: "❌ Loại", options: { fill: { color: "FFFFFF" } } }, { text: "{I₃, I₄}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "0", options: { fill: { color: "FFFFFF" } } }, { text: "❌ Loại", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₁, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "2", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ L₂", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₃, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "1", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "❌ Loại", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₂, I₃}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "4", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ L₂", options: { fill: { color: "FFFFFF" } } }, { text: "{I₄, I₅}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "0", options: { fill: { color: "FFFFFF" } } }, { text: "❌ Loại", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(3.8), cmToInch(2.0), cmToInch(6.1), cmToInch(3.8), cmToInch(2.0), cmToInch(6.1)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide61Content,
  "💡 Kết quả L₂: Gồm 6 cặp thường xuyên {{I₁,I₂}, {I₁,I₃}, {I₁,I₅}, {I₂,I₃}, {I₂,I₄}, {I₂,I₅}}. Các cặp bị loại dùng để tỉa C₃!",
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
// Slide 62 — CONTENT (Lần lặp 3: Join để sinh C₃)
// ----------------------------------------------------
const slide62Content = pptx.addSlide({ masterName: "CONTENT" });
slide62Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide62Content.addText("LẦN LẶP 3: JOIN ĐỂ SINH C₃", { placeholder: "title" });

addText(
  slide62Content,
  [
    { text: "🔗 Phép ghép Join (Lₖ₋₁ ⋈ Lₖ₋₁):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Ghép 2 tập trong L₂ có chung phần tử đầu tiên:\n\n" },
    { text: "  - {I₁, I₂} + {I₁, I₃}  ➔  {I₁, I₂, I₃}\n" },
    { text: "  - {I₁, I₂} + {I₁, I₅}  ➔  {I₁, I₂, I₅}\n" },
    { text: "  - {I₁, I₃} + {I₁, I₅}  ➔  {I₁, I₃, I₅}\n" },
    { text: "  - {I₂, I₃} + {I₂, I₄}  ➔  {I₂, I₃, I₄}\n" },
    { text: "  - {I₂, I₃} + {I₂, I₅}  ➔  {I₂, I₃, I₅}\n" },
    { text: "  - {I₂, I₄} + {I₂, I₅}  ➔  {I₂, I₄, I₅}" }
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
  slide62Content,
  [
    { text: "📋 Kết quả 6 Ứng viên C₃⁽ʲᵒⁱⁿ⁾:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "  1. {I₁, I₂, I₃}\n" },
    { text: "  2. {I₁, I₂, I₅}\n" },
    { text: "  3. {I₁, I₃, I₅}\n" },
    { text: "  4. {I₂, I₃, I₄}\n" },
    { text: "  5. {I₂, I₃, I₅}\n" },
    { text: "  6. {I₂, I₄, I₅}\n\n" },
    { text: "• Lưu ý: Đây mới chỉ là tập ứng viên sau Join, chưa quét CSDL để đếm support ngay!" }
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
  slide62Content,
  "💡 Bước tiếp theo: Thực hiện phép tỉa (Prune) để loại bớt ứng viên bất khả thi trước khi đếm support tốn kém.",
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
// Slide 63 — CONTENT (Lần lặp 3: Prune để loại ứng viên)
// ----------------------------------------------------
const slide63Content = pptx.addSlide({ masterName: "CONTENT" });
slide63Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide63Content.addText("LẦN LẶP 3: PRUNE ĐỂ LOẠI ỨNG VIÊN", { placeholder: "title" });

slide63Content.addTable(
  [
    [
      { text: "Ứng viên 3-itemset", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Các tập con 2-itemset", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Tập con không thuộc L₂", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết quả Prune", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{I₁, I₂, I₃}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "{I₁,I₂}, {I₁,I₃}, {I₂,I₃}", options: { fill: { color: "FFFFFF" } } }, { text: "Không có", options: { fill: { color: "FFFFFF" } } }, { text: "✅ GIỮ", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₁, I₂, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₁,I₂}, {I₁,I₅}, {I₂,I₅}", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Không có", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "✅ GIỮ", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₁, I₃, I₅}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "{I₁,I₃}, {I₁,I₅}, {I₃,I₅}", options: { fill: { color: "FFFFFF" } } }, { text: "{I₃, I₅} ∉ L₂", options: { fill: { color: "FFFFFF" } } }, { text: "❌ LOẠI", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₂, I₃, I₄}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₂,I₃}, {I₂,I₄}, {I₃,I₄}", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₃, I₄} ∉ L₂", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "❌ LOẠI", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{I₂, I₃, I₅}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "{I₂,I₃}, {I₂,I₅}, {I₃,I₅}", options: { fill: { color: "FFFFFF" } } }, { text: "{I₃, I₅} ∉ L₂", options: { fill: { color: "FFFFFF" } } }, { text: "❌ LOẠI", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₂, I₄, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₂,I₄}, {I₂,I₅}, {I₄,I₅}", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "{I₄, I₅} ∉ L₂", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "❌ LOẠI", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(7.5), cmToInch(5.5), cmToInch(6.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide63Content,
  "💡 Sức mạnh Prune: Giảm ngay số ứng viên cần đếm support từ 6 xuống còn duy nhất 2 ứng viên: C₃ = {{I₁,I₂,I₃}, {I₁,I₂,I₅}}!",
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
// Slide 64 — CONTENT (Lần lặp 3: Tìm L₃ và dừng)
// ----------------------------------------------------
const slide64Content = pptx.addSlide({ masterName: "CONTENT" });
slide64Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide64Content.addText("LẦN LẶP 3: TÌM L₃ VÀ DỪNG", { placeholder: "title" });

slide64Content.addTable(
  [
    [
      { text: "Ứng viên 3-itemset trong C₃", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giao dịch chứa tập mục", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Support count", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết luận (minsup=2)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{I₁, I₂, I₃}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "T800, T900", options: { fill: { color: "FFFFFF" } } }, { text: "2", options: { fill: { color: "FFFFFF" } } }, { text: "Giữ ➔ Thuộc L₃", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{I₁, I₂, I₅}", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "T100, T800", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "2", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giữ ➔ Thuộc L₃", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(3.0),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(8.5), cmToInch(3.8), cmToInch(6.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide64Content,
  [
    { text: "🛑 Thử sinh C₄ và Đòn Dừng:\n", options: { bold: true, fontSize: 12 } },
    { text: "• Join L₃ ghép {I₁, I₂, I₃} + {I₁, I₂, I₅}  ➔  Tạo ứng viên {I₁, I₂, I₃, I₅}.\n" },
    { text: "• Prune kiểm tra tập con: {I₂, I₃, I₅} ∉ L₃  ➔  ❌ LOẠI {I₁, I₂, I₃, I₅}!\n" },
    { text: "• Kết quả: C₄ = ∅  ➔  Thuật toán DỪNG LẠI HOÀN TOÀN!" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(5.3),
    w: cmToInch(23.8),
    h: cmToInch(4.0),
    fontSize: 10.5,
    lineSpacing: 13,
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
  slide64Content,
  "💡 Điều kiện dừng: Thuật toán Apriori kết thúc khi không thể sinh thêm candidate itemset nào ở bước tiếp theo.",
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
// Slide 65 — CONTENT (Kết quả Apriori trên dữ liệu minh họa)
// ----------------------------------------------------
const slide65Content = pptx.addSlide({ masterName: "CONTENT" });
slide65Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide65Content.addText("KẾT QUẢ APRIORI TRÊN DỮ LIỆU MINH HỌA", { placeholder: "title" });

slide65Content.addTable(
  [
    [
      { text: "Mức k", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tập ứng viên Cₖ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tập frequent itemsets Lₖ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Mức 1", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "5 ứng viên", options: { fill: { color: "FFFFFF" } } }, { text: "L₁ = {{I₁}, {I₂}, {I₃}, {I₄}, {I₅}}", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Mức 2", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "10 ứng viên", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "L₂ = {{I₁,I₂}, {I₁,I₃}, {I₁,I₅}, {I₂,I₃}, {I₂,I₄}, {I₂,I₅}}", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Mức 3", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "6 sau Join ➔ 2 sau Prune", options: { fill: { color: "FFFFFF" } } }, { text: "L₃ = {{I₁,I₂,I₃}, {I₁,I₂,I₅}}", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Mức 4", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "1 sau Join ➔ 0 sau Prune", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "L₄ = ∅ (Dừng)", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(8.5), cmToInch(11.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide65Content,
  "💡 Thử thách kiểm tra: Nếu tăng minsup count từ 2 lên 3, support count({I₁,I₂,I₃})=2 < 3 ➔ L₃ = ∅ ngay từ đầu!",
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
// Slide 66 — CONTENT (Từ frequent itemset đến luật kết hợp)
// ----------------------------------------------------
const slide66Content = pptx.addSlide({ masterName: "CONTENT" });
slide66Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide66Content.addText("TỪ FREQUENT ITEMSET ĐẾN LUẬT KẾT HỢP", { placeholder: "title" });

addText(
  slide66Content,
  [
    { text: "⚙️ Sinh luật từ L₃ = {I₁, I₂, I₅}:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật 1: {I₁, I₂} → {I₅}\n" },
    { text: "  - Conf = count(I₁,I₂,I₅) / count(I₁,I₂) = 2 / 4 = 50%\n\n" },
    { text: "• Luật 2: {I₁, I₅} → {I₂}\n" },
    { text: "  - Conf = count(I₁,I₂,I₅) / count(I₁,I₅) = 2 / 2 = 100%!\n\n" },
    { text: "• Luật 3: {I₂, I₅} → {I₁}\n" },
    { text: "  - Conf = count(I₁,I₂,I₅) / count(I₂,I₅) = 2 / 2 = 100%!" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide66Content.addTable(
  [
    [
      { text: "Ngưỡng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Vai trò trong thuật toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "minsup", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Dùng để lọc các Frequent Itemsets (Bước Apriori)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "minconf", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Dùng để lọc các Luật kết hợp sinh ra từ Frequent Itemsets (Ví dụ minconf=70% ➔ Giữ Luật 2 & 3)", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(8.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide66Content,
  "💡 Nguyên lý cốt lõi: Support dùng để lọc tập mục (Itemsets); Confidence dùng để lọc luật kết hợp!",
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
