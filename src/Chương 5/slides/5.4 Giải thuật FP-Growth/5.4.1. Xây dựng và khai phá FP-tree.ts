import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 78 — CONTENT (Ý tưởng cốt lõi của FP-Growth)
// ----------------------------------------------------
const slide78Content = pptx.addSlide({ masterName: "CONTENT" });
slide78Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide78Content.addText("Ý TƯỞNG CỐT LÕI CỦA FP-GROWTH", { placeholder: "title" });

addText(
  slide78Content,
  [
    { text: "💡 2 Trụ cột của FP-Growth:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. Nén CSDL Giao dịch thành cấu trúc cây FP-tree gọn nhẹ.\n\n" },
    { text: "2. Khai phá Tăng trưởng Mẫu (Pattern Growth) đệ quy từ các cây điều kiện.\n\n" },
    { text: "➔ KHÔNG sinh tập ứng viên Cₖ như Apriori!" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide78Content.addTable(
  [
    [
      { text: "Tiêu chí so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Apriori (Generate-and-Test)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "FP-Growth (Compress-and-Grow)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Chiến lược", options: { bold: true } }, { text: "Sinh hàng triệu tổ hợp Cₖ rồi kiểm tra" }, { text: "Nén các giao dịch có tiền tố chung" }],
    [{ text: "Đếm Support", options: { bold: true } }, { text: "Quét CSDL nhiều lần để đếm từng Cₖ" }, { text: "Khai phá trực tiếp trên cấu trúc cây" }],
    [{ text: "Cắt tỉa", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Loại dần ứng viên không đạt" }, { text: "Chỉ xét các nhánh dữ liệu liên quan" }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(3.2), cmToInch(4.1), cmToInch(4.2)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide78Content,
  "💡 Thông điệp: FP-Growth không cố gắng liệt kê mọi tổ hợp sản phẩm; thuật toán nén dữ liệu rồi mở rộng đệ quy mẫu thường xuyên.",
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
// Slide 79 — CONTENT (Bước 1: Tạo Header table)
// ----------------------------------------------------
const slide79Content = pptx.addSlide({ masterName: "CONTENT" });
slide79Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide79Content.addText("BƯỚC 1: TẠO HEADER TABLE", { placeholder: "title" });

slide79Content.addTable(
  [
    [
      { text: "Item", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Support count (Mẫu N=9)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thứ tự chèn vào cây (Ưu tiên)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Con trỏ Node-link", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "I₂ (Sữa)", options: { bold: true } }, { text: "7" }, { text: "Hạng 1 (Cao nhất)" }, { text: "➔ Nút I₂ đầu tiên" }],
    [{ text: "I₁ (Bánh mì)", options: { bold: true } }, { text: "6" }, { text: "Hạng 2" }, { text: "➔ Nút I₁ đầu tiên" }],
    [{ text: "I₃ (Trứng)", options: { bold: true } }, { text: "6" }, { text: "Hạng 3" }, { text: "➔ Nút I₃ đầu tiên" }],
    [{ text: "I₄ (Cà phê)", options: { bold: true } }, { text: "2" }, { text: "Hạng 4" }, { text: "➔ Nút I₄ đầu tiên" }],
    [{ text: "I₅ (Bánh quy)", options: { bold: true } }, { text: "2" }, { text: "Hạng 5 (Thấp nhất)" }, { text: "➔ Nút I₅ đầu tiên" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(2.8), cmToInch(2.8), cmToInch(3.2), cmToInch(2.7)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide79Content,
  [
    { text: "📌 Vai trò cốt lõi của Header Table:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. Đếm Support lượt 1: ", options: { bold: true } },
    { text: "Loại bỏ ngay các mục có count < minsup (minsup=2).\n\n" },
    { text: "2. Quy định thứ tự chèn: ", options: { bold: true } },
    { text: "Sắp xếp giảm dần theo Support count (I₂ ≻ I₁ ≻ I₃ ≻ I₄ ≻ I₅).\n\n" },
    { text: "3. Liên kết Node-link: ", options: { bold: true } },
    { text: "Kết nối tất cả các nút cùng tên trong cây để phục vụ truy vết." }
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
  slide79Content,
  "💡 Nhận xét: Header table là 'bảng chỉ mục' của FP-tree, vừa lưu support tổng vừa dẫn tới mọi nhánh xuất hiện của từng mục.",
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
// Slide 80 — CONTENT (Bước 2: Chuẩn hóa giao dịch)
// ----------------------------------------------------
const slide80Content = pptx.addSlide({ masterName: "CONTENT" });
slide80Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide80Content.addText("BƯỚC 2: CHUẨN HÓA GIAO DỊCH", { placeholder: "title" });

slide80Content.addTable(
  [
    [
      { text: "TID", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giao dịch gốc", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Sau khi Lọc & Sắp xếp theo Header Table", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "T100", options: { bold: true } }, { text: "{I₁, I₂, I₅}" }, { text: "{I₂, I₁, I₅}" }],
    [{ text: "T200", options: { bold: true } }, { text: "{I₂, I₄}" }, { text: "{I₂, I₄}" }],
    [{ text: "T300", options: { bold: true } }, { text: "{I₂, I₃}" }, { text: "{I₂, I₃}" }],
    [{ text: "T400", options: { bold: true } }, { text: "{I₁, I₂, I₄}" }, { text: "{I₂, I₁, I₄}" }],
    [{ text: "T500", options: { bold: true } }, { text: "{I₁, I₃}" }, { text: "{I₁, I₃}" }],
    [{ text: "T800", options: { bold: true } }, { text: "{I₁, I₂, I₃, I₅}" }, { text: "{I₂, I₁, I₃, I₅}" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(2.0), cmToInch(4.5), cmToInch(5.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide80Content,
  [
    { text: "🎯 Mục đích của việc Sắp xếp thống nhất:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Không sắp xếp: ", options: { bold: true } },
    { text: "T100 (I₁→I₂→I₅) và T400 (I₂→I₁→I₄) không thể chung tiền tố.\n\n" },
    { text: "• Khi sắp xếp giảm dần theo Support count:\n" },
    { text: "  - T100: I₂ → I₁ → I₅\n" },
    { text: "  - T400: I₂ → I₁ → I₄\n\n" },
    { text: "➔ Dùng chung tiền tố gốc I₂ → I₁! Tạo ra khả năng nén cực cao cho FP-tree." }
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
  slide80Content,
  "💡 Quy tắc vàng: Sắp xếp các mục theo cùng một thứ tự tần suất giảm dần giúp các giỏ hàng tương tự đi chung một nhánh nén.",
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
// Slide 81 — CONTENT (Bước 3: Xây dựng FP-tree)
// ----------------------------------------------------
const slide81Content = pptx.addSlide({ masterName: "CONTENT" });
slide81Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide81Content.addText("BƯỚC 3: XÂY DỰNG FP-TREE", { placeholder: "title" });

const cardW81 = cmToInch(7.5);
const startX81 = cmToInch(0.8);
const gapX81 = cmToInch(0.65);
const cardY81 = cmToInch(2.0);

// Đơn 1
addText(
  slide81Content,
  [
    { text: "1. Chèn T100: {I₂, I₁, I₅}\n\n", options: { bold: true, fontSize: 11.5 } },
    { text: "null\n └── I₂:1\n      └── I₁:1\n           └── I₅:1" }
  ],
  {
    x: startX81,
    y: cardY81,
    w: cardW81,
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

// Đơn 2
addText(
  slide81Content,
  [
    { text: "2. Chèn T200: {I₂, I₄}\n\n", options: { bold: true, fontSize: 11.5 } },
    { text: "null\n └── I₂:2 (Tăng count!)\n      ├── I₁:1\n      │    └── I₅:1\n      └── I₄:1 (Nhánh mới)" }
  ],
  {
    x: startX81 + cardW81 + gapX81,
    y: cardY81,
    w: cardW81,
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Đơn 3
addText(
  slide81Content,
  [
    { text: "3. Chèn T300: {I₂, I₃}\n\n", options: { bold: true, fontSize: 11.5 } },
    { text: "null\n └── I₂:3 (Tăng count!)\n      ├── I₁:1 ➔ I₅:1\n      ├── I₄:1\n      └── I₃:1 (Nhánh mới)" }
  ],
  {
    x: startX81 + (cardW81 + gapX81) * 2,
    y: cardY81,
    w: cardW81,
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
  slide81Content,
  "💡 Nguyên lý nén: Nếu tiền tố đã tồn tại, tăng bộ đếm count lên 1; nếu tiền tố chưa có, tách nhánh mới từ nút đó.",
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
// Slide 82 — CONTENT (FP-tree hoàn chỉnh)
// ----------------------------------------------------
const slide82Content = pptx.addSlide({ masterName: "CONTENT" });
slide82Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide82Content.addText("FP-TREE HOÀN CHỈNH", { placeholder: "title" });

addText(
  slide82Content,
  [
    { text: "🌲 Cấu trúc FP-Tree sau 9 Giao dịch:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "null\n" },
    { text: "├── I₂:7\n" },
    { text: "│   ├── I₁:4\n" },
    { text: "│   │   ├── I₅:1\n" },
    { text: "│   │   ├── I₄:1\n" },
    { text: "│   │   └── I₃:2\n" },
    { text: "│   │       └── I₅:1\n" },
    { text: "│   ├── I₄:1\n" },
    { text: "│   └── I₃:2\n" },
    { text: "└── I₁:2\n" },
    { text: "    └── I₃:2" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide82Content,
  [
    { text: "📖 Cách đọc hiểu Cây nén FP-Tree:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Nút I₂:7 ➔ Mục I₂ xuất hiện trong 7 giao dịch.\n\n" },
    { text: "• Nhánh I₂ → I₁:4 ➔ Có 4 giao dịch chứa đồng thời I₂ và I₁.\n\n" },
    { text: "• Mục I₅ xuất hiện tại 2 vị trí khác nhau vì nó đi cùng 2 đường tiền tố khác nhau (I₂→I₁→I₅ và I₂→I₁→I₃→I₅).\n\n" },
    { text: "• Nhánh I₁:2 → I₃:2 ➔ Ghi nhận 2 đơn có I₁ và I₃ nhưng không có I₂." }
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
  slide82Content,
  "💡 Tổng kết nén: Cây nén trọn vẹn 9 giao dịch phức tạp thành một cấu trúc cây duy nhất, sẵn sàng cho khai phá đệ quy.",
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
// Slide 83 — CONTENT (Khai phá FP-tree: Conditional pattern base)
// ----------------------------------------------------
const slide83Content = pptx.addSlide({ masterName: "CONTENT" });
slide83Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide83Content.addText("KHAI PHÁ FP-TREE: CONDITIONAL PATTERN BASE", { placeholder: "title" });

addText(
  slide83Content,
  [
    { text: "🔍 Truy vết từ Hậu tố I₅ (Cuối Header Table):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "Trong FP-tree, mục I₅ xuất hiện ở 2 vị trí lá:\n\n" },
    { text: "1. Đường đi 1: null → I₂ → I₁ → I₅ (Count = 1)\n" },
    { text: "   ➔ Tiền tố giữ lại: {I₂, I₁} : 1\n\n" },
    { text: "2. Đường đi 2: null → I₂ → I₁ → I₃ → I₅ (Count = 1)\n" },
    { text: "   ➔ Tiền tố giữ lại: {I₂, I₁, I₃} : 1" }
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

slide83Content.addTable(
  [
    [
      { text: "Hậu tố (Suffix)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Conditional Pattern Base của I₅", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "I₅", options: { bold: true, color: DUE_COLORS.orange } }, { text: "1. {I₂, I₁} : 1\n2. {I₂, I₁, I₃} : 1" }],
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
  slide83Content,
  "💡 Ý nghĩa: Thay vì kiểm tra mọi tổ hợp có thể chứa I₅, FP-Growth chỉ phân tích các item thực sự đi cùng I₅ trong cây!",
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
// Slide 84 — CONTENT (Conditional FP-tree và tăng trưởng mẫu)
// ----------------------------------------------------
const slide84Content = pptx.addSlide({ masterName: "CONTENT" });
slide84Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide84Content.addText("CONDITIONAL FP-TREE VÀ TĂNG TRƯỞNG MẪU", { placeholder: "title" });

slide84Content.addTable(
  [
    [
      { text: "Mục trong tiền tố của I₅", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tổng Support count", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Đạt minsup=2?", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "I₂", options: { bold: true } }, { text: "1 + 1 = 2" }, { text: "✅ Giữ" }],
    [{ text: "I₁", options: { bold: true } }, { text: "1 + 1 = 2" }, { text: "✅ Giữ" }],
    [{ text: "I₃", options: { bold: true } }, { text: "1" }, { text: "❌ Loại (1 < 2)" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(3.5), cmToInch(3.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide84Content,
  [
    { text: "🌱 Frequent Pattern Sinh ra từ I₅:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Conditional FP-tree của I₅: null → I₂:2 → I₁:2\n\n" },
    { text: "• Các tập mục thường xuyên ghép với Hậu tố I₅:\n" },
    { text: "  1. {I₂, I₅} : 2\n" },
    { text: "  2. {I₁, I₅} : 2\n" },
    { text: "  3. {I₂, I₁, I₅} : 2\n\n" },
    { text: "➔ Hoàn thành khai phá cho hậu tố I₅!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide84Content,
  "💡 Tăng trưởng mẫu (Pattern Growth): Lấy các frequent pattern trong cây điều kiện nối với hậu tố đang xét để tạo tập phổ biến hoàn chỉnh.",
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
// Slide 85 — CONTENT (Quy trình FP-Growth tổng quát)
// ----------------------------------------------------
const slide85Content = pptx.addSlide({ masterName: "CONTENT" });
slide85Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide85Content.addText("QUY TRÌNH FP-GROWTH TỔNG QUÁT", { placeholder: "title" });

slide85Content.addTable(
  [
    [
      { text: "Bước quy trình", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thao tác cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Đầu ra thu được", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Quét CSDL Lần 1", options: { bold: true } }, { text: "Đếm support, loại mục < minsup, xếp hạng giảm dần" }, { text: "Header Table" }],
    [{ text: "2. Quét CSDL Lần 2", options: { bold: true } }, { text: "Sắp xếp từng giỏ hàng và chèn vào cây" }, { text: "Cấu trúc FP-Tree" }],
    [{ text: "3. Tách điều kiện", options: { bold: true } }, { text: "Duyệt item từ cuối Header Table làm hậu tố" }, { text: "Conditional Pattern Base" }],
    [{ text: "4. Khai phá đệ quy", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Tạo Conditional FP-tree & ghép mẫu" }, { text: "Tất cả Frequent Itemsets" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(11.5), cmToInch(6.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide85Content,
  "💡 Công thức ghi nhớ 4 chữ: ĐẾM (Lần 1) ➔ NÉN (Lần 2) ➔ TÁCH ĐIỀU KIỆN ➔ MỞ RỘNG MẪU ĐỆ QUY. Chỉ quét CSDL gốc đúng 2 lần!",
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
