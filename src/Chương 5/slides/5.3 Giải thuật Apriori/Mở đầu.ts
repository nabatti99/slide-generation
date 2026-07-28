import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 52 — SECTION
// ----------------------------------------------------
const slide52Section = pptx.addSlide({ masterName: "SECTION" });
slide52Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide52Section.addText("5.3. GIẢI THUẬT APRIORI", { placeholder: "title" });
slide52Section.addText(
  "Tìm tập mục thường xuyên hiệu quả bằng cách loại bỏ sớm các tổ hợp không có triển vọng",
  { placeholder: "content" }
);
slide52Section.addText(
  "Câu hỏi dẫn nhập: Nếu siêu thị có 10.000 sản phẩm, có nên thử tất cả các tổ hợp sản phẩm để tìm những nhóm hàng thường được mua cùng nhau?",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 53 — CONTENT (Bài toán bùng nổ tổ hợp)
// ----------------------------------------------------
const slide53Content = pptx.addSlide({ masterName: "CONTENT" });
slide53Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide53Content.addText("BÀI TOÁN BÙNG NỔ TỔ HỢP", { placeholder: "title" });

addText(
  slide53Content,
  [
    { text: "💥 Công thức Tính số Tổ hợp:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Giả sử danh mục có m sản phẩm.\n\n" },
    { text: "• Với mỗi sản phẩm: có 2 khả năng (Chọn / Không chọn).\n\n" },
    { text: "• Tổng số tập con có thể tạo ra: ", options: { bold: true } },
    { text: "2ᵐ tập.\n\n" },
    { text: "• Loại bỏ tập rỗng: ", options: { bold: true } },
    { text: "Số tập mục khác rỗng cần xem xét là 2ᵐ - 1." }
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
  slide53Content,
  [
    { text: "🍞 Ví dụ với m = 3 sản phẩm {Bánh mì, Sữa, Trứng}:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Tập 1 mục (3 tập): {Bánh mì}, {Sữa}, {Trứng}\n\n" },
    { text: "• Tập 2 mục (3 tập): {Bánh mì, Sữa}, {Bánh mì, Trứng}, {Sữa, Trứng}\n\n" },
    { text: "• Tập 3 mục (1 tập): {Bánh mì, Sữa, Trứng}\n\n" },
    { text: "➔ Tổng số tập mục: 2³ - 1 = 7 tập mục." }
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
  slide53Content,
  "💡 Quy luật bùng nổ: Mỗi khi thêm 1 sản phẩm vào danh mục, số tập mục cần xem xét tăng gấp đôi!",
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
// Slide 54 — CONTENT (Số tổ hợp tăng nhanh như thế nào?)
// ----------------------------------------------------
const slide54Content = pptx.addSlide({ masterName: "CONTENT" });
slide54Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide54Content.addText("SỐ TỔ HỢP TĂNG NHANH NHƯ THẾ NÀO?", { placeholder: "title" });

slide54Content.addTable(
  [
    [
      { text: "Số sản phẩm (m)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Số tập mục khác rỗng (2ᵐ - 1)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa thực tế trong tính toán", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "3", options: { bold: true } }, { text: "7" }, { text: "Có thể liệt kê thủ công bằng tay" }],
    [{ text: "5", options: { bold: true } }, { text: "31" }, { text: "Phù hợp làm ví dụ minh họa trên lớp" }],
    [{ text: "10", options: { bold: true } }, { text: "1.023" }, { text: "Bắt đầu khó kiểm tra thủ công" }],
    [{ text: "20", options: { bold: true } }, { text: "1.048.575" }, { text: "Hơn 1 triệu tập mục ứng viên" }],
    [{ text: "30", options: { bold: true, color: DUE_COLORS.orange } }, { text: "1.073.741.823" }, { text: "Hơn 1 tỷ tập mục ứng viên" }],
    [{ text: "10.000", options: { bold: true } }, { text: "2¹⁰⁰⁰⁰ - 1" }, { text: "Không gian tìm kiếm cực lớn, bùng nổ tính toán" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(6.5), cmToInch(12.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide54Content,
  "💡 Nhấn mạnh: Thêm chỉ 10 sản phẩm (từ 20 ➔ 30) làm số tập mục bùng nổ từ 1 triệu lên hơn 1 TỶ! Không thể duyệt toàn bộ.",
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
// Slide 55 — CONTENT (Vì sao không thể thử tất cả tổ hợp?)
// ----------------------------------------------------
const slide55Content = pptx.addSlide({ masterName: "CONTENT" });
slide55Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide55Content.addText("VÌ SAO KHÔNG THỂ THỬ TẤT CẢ TỔ HỢP?", { placeholder: "title" });

slide55Content.addTable(
  [
    [
      { text: "Hoạt động tính toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nghẽn nghiêm trọng khi dữ liệu lớn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Sinh tập mục", options: { bold: true } }, { text: "Số tổ hợp tăng theo cấp số nhân (2ᵐ)." }],
    [{ text: "2. Lưu trữ ứng viên", options: { bold: true } }, { text: "Tràn bộ nhớ RAM máy tính khi lưu hàng tỷ tập mục." }],
    [{ text: "3. Đếm Support", options: { bold: true } }, { text: "Phải so sánh hàng triệu tập mục với hàng triệu hóa đơn ➔ Chi phí cực lớn." }],
    [{ text: "4. Quét CSDL", options: { bold: true } }, { text: "Đọc/ghi đĩa cứng CSDL lặp đi lặp lại nhiều lần." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(7.0), cmToInch(16.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide55Content,
  "💡 Trực giác cắt tỉa: Nếu {Sữa, Trứng} chỉ xuất hiện trong 100 đơn (minsup=500), thì các tập lớn hơn chứa nó KHÔNG THỂ vượt quá 100 đơn. Bỏ qua luôn!",
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

// ----------------------------------------------------
// Slide 56 — CONTENT (Mục tiêu của Apriori)
// ----------------------------------------------------
const slide56Content = pptx.addSlide({ masterName: "CONTENT" });
slide56Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide56Content.addText("MỤC TIÊU CỦA APRIORI", { placeholder: "title" });

addText(
  slide56Content,
  [
    { text: "🎯 Mục tiêu Giải thuật Apriori:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Trả lời câu hỏi: Làm thế nào tìm tập mục thường xuyên mà KHÔNG phải đếm support cho mọi tổ hợp?\n\n" },
    { text: "• Nguyên tắc cốt lõi: ", options: { bold: true } },
    { text: "Chỉ mở rộng các tập mục đã cho thấy khả năng xuất hiện thường xuyên.\n\n" },
    { text: "• Nếu một tập không thường xuyên ➔ Bỏ qua toàn bộ các tập lớn hơn chứa nó!" }
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

slide56Content.addTable(
  [
    [
      { text: "Cách tiếp cận", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Cách tìm kiếm", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Hệ quả tính toán", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Duyệt toàn bộ (Ngây thơ)", options: { bold: true } }, { text: "Sinh tất cả 2ᵐ tổ hợp rồi mới đếm" }, { text: "Bùng nổ tổ hợp, quá tải máy tính" }],
    [{ text: "Giải thuật Apriori", options: { bold: true, color: DUE_COLORS.green } }, { text: "Kiểm tra theo từng mức (Level-wise) & loại sớm" }, { text: "Cắt tỉa mạnh mẽ, tối ưu tính toán" }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(4.2), cmToInch(3.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide56Content,
  "💡 Câu hỏi chuyển tiếp: Vì sao việc 1 tập con không thường xuyên lại cho phép loại bỏ mọi tập lớn hơn chứa nó? ➔ TÍNH CHẤT APRIORI.",
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
