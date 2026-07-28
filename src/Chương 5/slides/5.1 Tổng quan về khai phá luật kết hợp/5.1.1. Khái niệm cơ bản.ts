import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 6 — SECTION
// ----------------------------------------------------
const slide6Section = pptx.addSlide({ masterName: "SECTION" });
slide6Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide6Section.addText("5.1.1. CÁC KHÁI NIỆM CƠ BẢN", { placeholder: "title" });
slide6Section.addText(
  "Xây dựng ngôn ngữ chung để mô tả dữ liệu giao dịch, tập mục và luật kết hợp trước khi học các thước đo support, confidence, lift và các thuật toán khai phá.",
  { placeholder: "content" }
);
slide6Section.addText(
  "Câu hỏi dẫn nhập: Khi nói “bánh mì thường đi cùng sữa”, đâu là một mục, một giao dịch, một tập mục và một luật?",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 7a — CONTENT (Khái niệm: Dữ liệu & Tập mục)
// ----------------------------------------------------
const slide7aContent = pptx.addSlide({ masterName: "CONTENT" });
slide7aContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide7aContent.addText("KHÁI NIỆM: DỮ LIỆU & TẬP MỤC", { placeholder: "title" });

const cardW7a = cmToInch(7.4);
const startX7a = cmToInch(0.8);
const gapX7a = cmToInch(0.8);
const cardY7a = cmToInch(2.0);

// Card 1: Item
addText(
  slide7aContent,
  [
    { text: "📦 Item (Mục)\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Sản phẩm, sự kiện hoặc thuộc tính cần phân tích.\n\n" },
    { text: "• VD siêu thị: Sữa, Bánh mì.\n\n" },
    { text: "• VD ngân hàng: TIME_Dawn." },
  ],
  {
    x: startX7a,
    y: cardY7a,
    w: cardW7a,
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 2: Transaction
addText(
  slide7aContent,
  [
    { text: "🛒 Transaction (Giao dịch)\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Hóa đơn mua hàng hoặc sự kiện ghi nhận CSDL.\n\n" },
    { text: "• Chứa một tập các mục.\n\n" },
    { text: "• VD: T₅ = {Bánh mì, Sữa, Trứng}." },
  ],
  {
    x: startX7a + cardW7a + gapX7a,
    y: cardY7a,
    w: cardW7a,
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 3: Itemset & k-itemset
addText(
  slide7aContent,
  [
    { text: "🧺 Itemset & k-itemset\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Itemset: Tập hợp gồm một hoặc nhiều mục.\n\n" },
    { text: "• k-itemset: Tập mục chứa k mục.\n\n" },
    { text: "• VD: {Bánh mì, Sữa, Trứng} là 3-itemset." },
  ],
  {
    x: startX7a + (cardW7a + gapX7a) * 2,
    y: cardY7a,
    w: cardW7a,
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
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
  slide7aContent,
  "💡 Ý nghĩa: Định nghĩa rõ Item và Transaction giúp chuyển đổi dữ liệu phi cấu trúc thành dạng tập hợp toán học để tính toán.",
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

slide7aContent.addNotes("Giảng viên minh họa các thành phần trong 1 hóa đơn siêu thị thực tế.");

// ----------------------------------------------------
// Slide 7b — CONTENT (Khái niệm: Mẫu thường xuyên & Luật)
// ----------------------------------------------------
const slide7bContent = pptx.addSlide({ masterName: "CONTENT" });
slide7bContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide7bContent.addText("KHÁI NIỆM: MẪU THƯỜNG XUYÊN & LUẬT", { placeholder: "title" });

addText(
  slide7bContent,
  [
    { text: "⭐ Frequent Itemset (Tập mục thường xuyên):\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Tập mục xuất hiện phổ biến trong CSDL giao dịch.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Tiêu chuẩn: ", options: { bold: true } },
    { text: "Tần suất xuất hiện ≥ ngưỡng Support tối thiểu (minsup).\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Vai trò: ", options: { bold: true } },
    { text: "Bước nền tảng để sinh các luật kết hợp." },
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.green, width: 2 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide7bContent,
  [
    { text: "🔗 Association Rule (Luật kết hợp):\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Biểu diễn mối quan hệ giữa 2 tập mục không giao nhau:\n" },
    { text: "       X  →  Y   (với  X ∩ Y = ∅)\n\n", options: { bold: true } },
    { text: "• X: Vế trái (Antecedent / Điều kiện).\n\n", options: { bold: true } },
    { text: "• Y: Vế phải (Consequent / Mục đi kèm).\n\n", options: { bold: true } },
    { text: "• Diễn giải: Khách mua X thì thường mua Y.", options: { bold: true } },
  ],
  {
    x: cmToInch(13.1),
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
  slide7bContent,
  "💡 Quy trình 2 bước chuẩn: (1) Tìm Frequent Itemsets thỏa minsup  ➔  (2) Sinh Association Rules thỏa minconf.",
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

slide7bContent.addNotes("Giảng viên nhấn mạnh nguyên lý 2 bước của thuật toán khai phá luật kết hợp.");

// ----------------------------------------------------
// Slide 8 — CONTENT (Minh họa cấu trúc luật kết hợp)
// ----------------------------------------------------
const slide8Content = pptx.addSlide({ masterName: "CONTENT" });
slide8Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide8Content.addText("MINH HỌA CẤU TRÚC LUẬT KẾT HỢP", { placeholder: "title" });

// Top Formula Box: Height = 1.3 cm (Y = 2.0 to 3.3 cm)
addText(
  slide8Content,
  "📌 Biểu diễn luật:   { Bánh mì, Sữa }   →   { Trứng }\nCách đọc: “Trong các hóa đơn có bánh mì và sữa, khách hàng thường đồng thời mua trứng.”",
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(1.3),
    fontSize: 11.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    bold: true,
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "middle",
  }
);

// Middle Table and Right Card start at Y = 3.5 cm, height = 5.9 cm (ends at 9.4 cm)
slide8Content.addTable(
  [
    [
      { text: "Thành phần", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ký hiệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ minh họa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Vế trái, điều kiện", options: { bold: true } }, { text: "X" }, { text: "{Bánh mì, Sữa}" }],
    [{ text: "Vế phải, mục đi kèm", options: { bold: true } }, { text: "Y" }, { text: "{Trứng}" }],
    [{ text: "Tập mục đầy đủ", options: { bold: true } }, { text: "X ∪ Y" }, { text: "{Bánh mì, Sữa, Trứng}" }],
    [{ text: "Điều kiện cấu trúc", options: { bold: true, color: DUE_COLORS.orange } }, { text: "X ∩ Y = ∅" }, { text: "Hai vế không chứa mục chung" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(3.5),
    w: cmToInch(11.5),
    h: cmToInch(5.9),
    fontSize: 11,
    colW: [cmToInch(3.8), cmToInch(2.5), cmToInch(5.2)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

// Slide 8 Right Card: Height = 5.9 cm, top-aligned with margin: 8
addText(
  slide8Content,
  [
    { text: "💳 Ví dụ dữ liệu thẻ ngân hàng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "  { TIME_Dawn, AMT_VeryHigh }  →  { FRAUD_1 }\n\n", options: { bold: true } },
    { text: "• Vế trái (X): ", options: { bold: true } },
    { text: "Giao dịch rạng sáng & giá trị rất cao.\n\n" },
    { text: "• Vế phải (Y): ", options: { bold: true } },
    { text: "Giao dịch gian lận (FRAUD_1).\n\n" },
    { text: "• Ý nghĩa: ", options: { bold: true } },
    { text: "Mô tả sự đồng xuất hiện trong CSDL." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(3.5),
    w: cmToInch(11.5),
    h: cmToInch(5.9),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Bottom Warning Banner: Placed strictly at Y = 9.8 cm with height = 1.9 cm (ends at 11.7 cm)
addText(
  slide8Content,
  "⚠️ Lưu ý giảng viên cần nhấn mạnh: “Khách mua bánh mì và sữa thường mua trứng” KHÔNG đồng nghĩa “bánh mì và sữa GÂY RA việc mua trứng” (Đồng xuất hiện ≠ Nhân quả).",
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

slide8Content.addNotes(
  "Giảng viên giải thích rõ sự khác biệt giữa quan hệ đồng xuất hiện mang tính mô tả và mối quan hệ nhân quả thực sự."
);

// ----------------------------------------------------
// Slide 9a — CONTENT (Ví dụ thực hành: Quan sát giao dịch)
// ----------------------------------------------------
const slide9aContent = pptx.addSlide({ masterName: "CONTENT" });
slide9aContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide9aContent.addText("VÍ DỤ THỰC HÀNH: QUAN SÁT GIAO DỊCH", { placeholder: "title" });

slide9aContent.addTable(
  [
    [
      { text: "Mã giao dịch", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Các mục trong giao dịch", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "T1", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }],
    [{ text: "T2", options: { bold: true } }, { text: "Bánh mì, Sữa" }],
    [{ text: "T3", options: { bold: true } }, { text: "Sữa, Cà phê" }],
    [{ text: "T4", options: { bold: true } }, { text: "Bánh mì, Trứng" }],
    [{ text: "T5", options: { bold: true } }, { text: "Bánh mì, Sữa, Trứng" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide9aContent,
  [
    { text: "📊 Quan sát ban đầu từ 5 giao dịch:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Tập mục {Bánh mì, Sữa} ", options: { bold: true } },
    { text: "xuất hiện tại T1, T2, T5:\n  -> Tần suất = 3/5 giao dịch (60%)\n\n" },
    { text: "• Tập mục {Bánh mì, Sữa, Trứng} ", options: { bold: true } },
    { text: "xuất hiện tại T1, T5:\n  -> Tần suất = 2/5 giao dịch (40%)\n\n" },
    { text: "• Quy tắc tiềm năng: ", options: { bold: true } },
    { text: "{ Bánh mì, Sữa } → { Trứng }" },
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide9aContent,
  "💡 Nhận xét: Tần suất xuất hiện thực tế trong cơ sở dữ liệu giao dịch là cơ sở để tính toán Support và Confidence ở các mục sau.",
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

slide9aContent.addNotes("Giảng viên yêu cầu sinh viên nhìn vào bảng giao dịch T1-T5 để đếm số lần xuất hiện của các tập mục.");

// ----------------------------------------------------
// Slide 9b — CONTENT (Ví dụ thực hành: Thảo luận & Hành động)
// ----------------------------------------------------
const slide9bContent = pptx.addSlide({ masterName: "CONTENT" });
slide9bContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide9bContent.addText("VÍ DỤ THỰC HÀNH: THẢO LUẬN & HÀNH ĐỘNG", { placeholder: "title" });

addText(
  slide9bContent,
  [
    { text: "🎯 Hoạt động 3 phút — Think–Pair–Share:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "1. Mỗi nhóm đề xuất một luật kết hợp khác từ 5 giao dịch vừa quan sát.\n\n" },
    { text: "2. Xác định rõ Vế trái (X) và Vế phải (Y) của luật.\n\n" },
    { text: "3. Nêu một hành động kinh doanh có thể thử nghiệm." },
  ],
  {
    x: cmToInch(0.8),
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

// Right Card Slide 9b: lineSpacing: 17pt so 3 sub-actions space out comfortably!
addText(
  slide9bContent,
  [
    { text: "💡 Đáp án gợi ý & Hàm ý quản trị:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Luật đề xuất: ", options: { bold: true } },
    { text: "{ Bánh mì, Trứng } → { Sữa }\n\n" },
    { text: "• Vế trái (X): ", options: { bold: true } },
    { text: "{Bánh mì, Trứng}  |  " },
    { text: "• Vế phải (Y): ", options: { bold: true } },
    { text: "{Sữa}\n\n" },
    { text: "• Hành động kinh doanh:\n", options: { bold: true } },
    { text: "  - Trưng bày 3 mặt hàng gần nhau trên kệ.\n" },
    { text: "  - Thiết kế combo Bánh mì + Trứng + Sữa.\n" },
    { text: "  - Đánh giá ROI: So sánh doanh thu trước & sau." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 17,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Bottom Banner: Placed strictly at Y = 9.8 cm with height = 1.9 cm (ends at 11.7 cm)
addText(
  slide9bContent,
  "💡 Thông điệp: Khai phá luật kết hợp hoàn tất khi tri thức tìm được chuyển thành hành động thử nghiệm tạo ra giá trị kinh tế thực tế.",
  {
    x: cmToInch(0.8),
    y: cmToInch(9.8),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide9bContent.addNotes(
  "Gợi ý cho giảng viên:\n" +
  "Chưa yêu cầu sinh viên tính đầy đủ các chỉ số ở slide này. Mục tiêu là giúp học viên thực hành chuỗi chuyển đổi: Bảng CSDL ➔ Itemset ➔ Luật kết hợp ➔ Hành động kinh doanh."
);
