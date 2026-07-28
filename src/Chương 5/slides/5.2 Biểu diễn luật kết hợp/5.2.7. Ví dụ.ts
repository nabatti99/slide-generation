import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 48 — CONTENT (Demo Python: Quy trình phân tích luật)
// ----------------------------------------------------
const slide48Content = pptx.addSlide({ masterName: "CONTENT" });
slide48Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide48Content.addText("DEMO PYTHON: QUY TRÌNH PHÂN TÍCH LUẬT", { placeholder: "title" });

addText(
  slide48Content,
  [
    { text: "💻 Tệp thực hành Demo:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Notebook: ", options: { bold: true } },
    { text: "demo_5_2_rule_metrics.ipynb\n\n" },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Hiểu quy trình xử lý dữ liệu và cách đọc đầu ra bảng luật trong Python.\n\n" },
    { text: "• Thư viện sử dụng: ", options: { bold: true } },
    { text: "pandas, mlxtend (apriori, association_rules)." }
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
  slide48Content,
  [
    { text: "🔄 6 Bước Quy trình Phân tích Python:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. Đọc dữ liệu hóa đơn giao dịch.\n\n" },
    { text: "2. Gom sản phẩm theo transaction_id.\n\n" },
    { text: "3. Mã hóa dữ liệu thành Ma trận 0/1.\n\n" },
    { text: "4. Sinh frequent itemsets & tính Support, Conf, Lift.\n\n" },
    { text: "5. Lọc luật theo ngưỡng minsup, minconf, lift > 1.\n\n" },
    { text: "6. Diễn giải kết quả và đề xuất hành động." }
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
  slide48Content,
  "💡 Định hướng: Sinh viên tập trung vào logic phân tích và cách đọc kết quả kinh doanh; nguyên lý Apriori/FP-Growth sẽ học ở phần 5.3 & 5.4.",
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
// Slide 49 — CONTENT (Từ hóa đơn đến bảng luật)
// ----------------------------------------------------
const slide49Content = pptx.addSlide({ masterName: "CONTENT" });
slide49Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide49Content.addText("TỪ HÓA ĐƠN ĐẾN BẢNG LUẬT", { placeholder: "title" });

slide49Content.addTable(
  [
    [
      { text: "B1: Dữ liệu thô", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "B2: Gom giỏ hàng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "B3: Ma trận 0/1", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "HD001 - Bánh mì\nHD001 - Sữa\nHD001 - Trứng\nHD002 - Cà phê\nHD002 - Bánh quy" },
      { text: "HD001: Bánh mì, Sữa, Trứng\n\nHD002: Cà phê, Bánh quy" },
      { text: "HD001: [1, 1, 1, 0, 0]\n\nHD002: [0, 0, 0, 1, 1]" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(8.0), cmToInch(7.8), cmToInch(8.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide49Content,
  "💡 Lời giảng: Ma trận 0/1 là cách chuyển đổi giỏ hàng thành dạng dữ liệu chuẩn để các thuật toán khai phá luật kết hợp tính toán.",
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
// Slide 50 — CONTENT (Tạo và lọc bảng luật)
// ----------------------------------------------------
const slide50Content = pptx.addSlide({ masterName: "CONTENT" });
slide50Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide50Content.addText("TẠO VÀ LỌC BẢNG LUẬT", { placeholder: "title" });

slide50Content.addTable(
  [
    [
      { text: "Luật xuất ra", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Support", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Confidence", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Trạng thái lọc", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Cà phê → Bánh quy", options: { bold: true } }, { text: "18%" }, { text: "75.0%" }, { text: "2.50" }, { text: "✅ Giữ lại (Đạt minsup=5%, minconf=60%, lift>1)" }],
    [{ text: "Bánh mì, Sữa → Trứng", options: { bold: true } }, { text: "40%" }, { text: "66.7%" }, { text: "1.11" }, { text: "✅ Giữ lại (Đạt tiêu chí)" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(2.5), cmToInch(2.8), cmToInch(2.2), cmToInch(10.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide50Content,
  "💡 Lời giảng: Ngưỡng lọc không cố định cho mọi doanh nghiệp. CSDL lớn có thể hạ minsup để tìm cơ hội bán kèm phân khúc ngách.",
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
// Slide 51 — CONTENT (Bài tập ứng dụng: Đề xuất hành động)
// ----------------------------------------------------
const slide51Content = pptx.addSlide({ masterName: "CONTENT" });
slide51Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide51Content.addText("BÀI TẬP ỨNG DỤNG: ĐỀ XUẤT HÀNH ĐỘNG", { placeholder: "title" });

slide51Content.addTable(
  [
    [
      { text: "Luật khảo sát", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Chỉ số đánh giá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Hành động kinh doanh đề xuất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "KPI kiểm chứng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Cà phê → Bánh quy", options: { bold: true } },
      { text: "Support = 18%\nConf = 75%\nLift = 2.50" },
      { text: "Gợi ý mua bánh quy hoặc ưu đãi mua kèm khi khách chọn cà phê" },
      { text: "Tỷ lệ mua kèm bánh quy; Doanh thu tăng thêm; Biên lợi nhuận" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.0), cmToInch(4.5), cmToInch(8.0), cmToInch(6.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide51Content,
  "💡 Thông điệp kết thúc: Thư viện code giúp tạo ra bảng luật; người phân tích tạo ra giá trị bằng cách chọn luật đúng, diễn giải chuẩn và thiết kế hành động kinh doanh.",
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
