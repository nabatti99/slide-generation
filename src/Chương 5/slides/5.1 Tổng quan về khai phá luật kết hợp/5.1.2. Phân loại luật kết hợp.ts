import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 10 — SECTION
// ----------------------------------------------------
const slide10Section = pptx.addSlide({ masterName: "SECTION" });
slide10Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide10Section.addText("5.1.2. PHÂN LOẠI LUẬT KẾT HỢP", { placeholder: "title" });
slide10Section.addText(
  "Luật kết hợp có thể được phân loại theo loại giá trị mà luật xử lý, mức khái quát của khái niệm và số chiều/thuộc tính xuất hiện trong luật.",
  { placeholder: "content" }
);
slide10Section.addText(
  "Câu hỏi dẫn nhập: Luật {Bánh mì} → {Sữa} có phải là loại luật duy nhất doanh nghiệp cần khai thác?",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 11 — CONTENT (Bản đồ phân loại luật kết hợp)
// ----------------------------------------------------
const slide11Content = pptx.addSlide({ masterName: "CONTENT" });
slide11Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide11Content.addText("BẢN ĐỒ PHÂN LOẠI LUẬT KẾT HỢP", { placeholder: "title" });

slide11Content.addTable(
  [
    [
      { text: "Tiêu chí phân loại", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Loại luật", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ví dụ minh họa ngắn", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Kiểu dữ liệu", options: { bold: true } }, { text: "Luật nhị phân" }, { text: "{Bánh mì} → {Sữa}" }],
    [{ text: "Kiểu dữ liệu", options: { bold: true } }, { text: "Luật định lượng" }, { text: "{Giá trị hóa đơn ≥ 500k} → {Mua quà}" }],
    [{ text: "Kiểu dữ liệu", options: { bold: true } }, { text: "Luật mờ" }, { text: "{Thu nhập cao} → {Chi tiêu cao}" }],
    [{ text: "Cấp khái niệm", options: { bold: true } }, { text: "Luật đơn mức / đa mức" }, { text: "{Đồ uống} → {Bánh kẹo}  vs  {Cà phê} → {Bánh quy}" }],
    [{ text: "Số chiều", options: { bold: true } }, { text: "Luật một chiều / đa chiều" }, { text: "{Cuối tuần, Thẻ vàng} → {Thực phẩm chế biến}" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.0), cmToInch(6.0), cmToInch(12.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide11Content,
  "💡 Định hướng: Loại luật cần khai thác phụ thuộc vào câu hỏi nghiệp vụ, cấu trúc dữ liệu và mức độ chi tiết cần cho quyết định.",
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
// Slide 12 — CONTENT (1. Luật nhị phân — Có hoặc không có)
// ----------------------------------------------------
const slide12Content = pptx.addSlide({ masterName: "CONTENT" });
slide12Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide12Content.addText("1. LUẬT NHỊ PHÂN — CÓ HOẶC KHÔNG CÓ", { placeholder: "title" });

addText(
  slide12Content,
  [
    { text: "📦 Đặc điểm Luật Nhị phân:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Mỗi sản phẩm/sự kiện chỉ có 2 trạng thái:\n  - 1: Có xuất hiện trong giao dịch.\n  - 0: Không xuất hiện.\n\n" },
    { text: "• Dạng luật cơ bản nhất trong phân tích giỏ hàng.\n\n" },
    { text: "• Ví dụ: {Bánh mì} → {Sữa}." }
  ],
  {
    x: cmToInch(0.8),
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

slide12Content.addTable(
  [
    [
      { text: "Mã giao dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bánh mì", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Sữa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Trứng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cà phê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "T1", options: { bold: true } }, { text: "1" }, { text: "1" }, { text: "1" }, { text: "0" }],
    [{ text: "T2", options: { bold: true } }, { text: "1" }, { text: "1" }, { text: "0" }, { text: "0" }],
    [{ text: "T3", options: { bold: true } }, { text: "0" }, { text: "1" }, { text: "0" }, { text: "1" }],
    [{ text: "T4", options: { bold: true } }, { text: "1" }, { text: "0" }, { text: "1" }, { text: "0" }],
    [{ text: "T5", options: { bold: true } }, { text: "1" }, { text: "1" }, { text: "1" }, { text: "0" }],
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
  slide12Content,
  "💡 Ứng dụng: Gợi ý mua kèm trên website/app, thiết kế combo bữa sáng, bố trí kệ siêu thị và khuyến mãi chéo.",
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
// Slide 13 — CONTENT (2. Luật định lượng — Có điều kiện số)
// ----------------------------------------------------
const slide13Content = pptx.addSlide({ masterName: "CONTENT" });
slide13Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide13Content.addText("2. LUẬT ĐỊNH LƯỢNG — CÓ ĐIỀU KIỆN SỐ", { placeholder: "title" });

addText(
  slide13Content,
  [
    { text: "📊 Luật Định lượng (Quantitative Rules):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Sử dụng các thuộc tính số: Tuổi, Thu nhập, Giá trị hóa đơn, Số lượng mua.\n\n" },
    { text: "• VD Bán lẻ: {Hóa đơn ≥ 500k} → {Mua quà tặng}\n\n" },
    { text: "• VD Ngân hàng: {Thu nhập ≥ 25tr/tháng} → {Thẻ tín dụng cao cấp}\n\n" },
    { text: "• VD Gian lận: {Giá trị rất cao, Giao dịch rạng sáng} → {FRAUD_1}" }
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

slide13Content.addTable(
  [
    [
      { text: "Thuộc tính số gốc", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
      { text: "Dạng rời rạc hóa minh họa", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    ],
    [{ text: "Giá trị hóa đơn", options: { bold: true } }, { text: "Thấp / Trung bình / Cao" }],
    [{ text: "Thu nhập", options: { bold: true } }, { text: "Dưới 10tr / 10–25tr / Trên 25tr" }],
    [{ text: "Tần suất mua", options: { bold: true } }, { text: "Ít / Trung bình / Nhiều" }],
    [{ text: "Giá trị giao dịch thẻ", options: { bold: true } }, { text: "Thấp / Cao / Rất cao" }],
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
  slide13Content,
  "💡 Tiền xử lý: Các biến số liên tục bắt buộc phải rời rạc hóa (discretization) thành khoảng có ý nghĩa trước khi khai phá.",
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
// Slide 14 — CONTENT (Bài tập xen kẽ — Chọn khoảng giá trị)
// ----------------------------------------------------
const slide14Content = pptx.addSlide({ masterName: "CONTENT" });
slide14Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide14Content.addText("BÀI TẬP XEN KẼ — CHỌN KHOẢNG GIÁ TRỊ", { placeholder: "title" });

addText(
  slide14Content,
  [
    { text: "🎯 Tình huống thảo luận nhóm:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "Một chuỗi cửa hàng có hóa đơn từ 20.000đ đến 3.000.000đ.\n\n" },
    { text: "Yêu cầu: ", options: { bold: true } },
    { text: "Đề xuất cách chia biến “Giá trị hóa đơn” thành 3 nhóm: Thấp – Trung bình – Cao.\n\n" },
    { text: "• Cách 1 (Ngưỡng nghiệp vụ): ", options: { bold: true } },
    { text: "<200k, 200k–500k, ≥500k.\n\n" },
    { text: "• Cách 2 (Phân vị dữ liệu): ", options: { bold: true } },
    { text: "25% thấp nhất, 50% giữa, 25% cao nhất." }
  ],
  {
    x: cmToInch(0.8),
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
  slide14Content,
  [
    { text: "🔍 Câu hỏi phản biện & Thảo luận:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "“Nếu chỉ dùng ngưỡng 500.000đ cho mọi loại cửa hàng, kết quả có hợp lý không?”\n\n" },
    { text: "• 500k tại Cửa hàng tiện lợi là “Rất cao”, nhưng tại Siêu thị lớn chỉ là “Trung bình”.\n\n" },
    { text: "• Cần linh hoạt xây dựng ngưỡng theo quy mô, vị trí và loại hình cửa hàng.\n\n" },
    { text: "• Kết hợp phân bố dữ liệu thực tế với am hiểu nghiệp vụ." }
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
  slide14Content,
  "💡 Chốt: Rời rạc hóa không hoàn toàn khách quan; ngưỡng tốt phải vừa phản ánh dữ liệu vừa có ý nghĩa quản trị.",
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
// Slide 15 — CONTENT (3. Luật đa mức — Từ tổng quát đến chi tiết)
// ----------------------------------------------------
const slide15Content = pptx.addSlide({ masterName: "CONTENT" });
slide15Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide15Content.addText("3. LUẬT ĐA MỨC — TỪ TỔNG QUÁT ĐẾN CHI TIẾT", { placeholder: "title" });

addText(
  slide15Content,
  [
    { text: "🌲 Luật Đa mức (Multilevel Rules):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Khai phá dựa trên cấu trúc phân cấp danh mục:\n  Hàng tiêu dùng ➔ Đồ uống ➔ Cà phê ➔ Cà phê hòa tan.\n\n" },
    { text: "• Mức khái quát (Mức cao):\n", options: { bold: true } },
    { text: "  {Đồ uống} → {Bánh kẹo}\n\n" },
    { text: "• Mức chi tiết (Mức thấp):\n", options: { bold: true } },
    { text: "  {Cà phê hòa tan} → {Bánh quy}" }
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

slide15Content.addTable(
  [
    [
      { text: "Mức luật", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Đặc điểm", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ứng dụng quản trị phù hợp", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Mức cao", options: { bold: true } }, { text: "Phổ quát, support lớn" }, { text: "Quy hoạch ngành hàng, bố trí khu vực" }],
    [{ text: "Mức chi tiết", options: { bold: true } }, { text: "Cụ thể, support thấp hơn" }, { text: "Thiết kế combo, gợi ý cá nhân hóa" }],
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
  slide15Content,
  "💡 Lưu ý: Cần điều chỉnh giảm ngưỡng minsup phù hợp khi đào sâu xuống các mức phân cấp chi tiết.",
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
// Slide 16 — CONTENT (4. Luật đa chiều — Sản phẩm gắn với bối cảnh)
// ----------------------------------------------------
const slide16Content = pptx.addSlide({ masterName: "CONTENT" });
slide16Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide16Content.addText("4. LUẬT ĐA CHIỀU — SẢN PHẨM GẮN VỚI BẤI CẢNH", { placeholder: "title" });

addText(
  slide16Content,
  [
    { text: "🌐 Phân biệt Chiều thông tin:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Luật 1 chiều (Single-dimensional):\n", options: { bold: true } },
    { text: "  {Bánh mì} → {Sữa} (Chỉ xét mua sản phẩm nào).\n\n" },
    { text: "• Luật đa chiều (Multidimensional):\n", options: { bold: true } },
    { text: "  Kết hợp Khách hàng, Thời gian, Kênh bán, Địa điểm.\n" },
    { text: "  VD: {Thẻ vàng, Cuối tuần} → {Thực phẩm chế biến}\n" },
    { text: "  VD Thẻ: {TIME_Dawn, AMT_VeryHigh} → {FRAUD_1}" }
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
  slide16Content,
  [
    { text: "🚀 Giá trị Quản trị của Luật Đa chiều:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Cá nhân hóa ưu đãi theo phân khúc khách hàng.\n\n" },
    { text: "• Gửi gợi ý đúng thời điểm (Right time, Right offer).\n\n" },
    { text: "• Điều chỉnh tồn kho theo chi nhánh/khu vực.\n\n" },
    { text: "• Tăng cường rà soát rủi ro cho các tổ hợp bất thường." }
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
  slide16Content,
  "💡 Thông điệp: Luật đa chiều giúp doanh nghiệp chuyển từ khuyến mãi đại trà sang Marketing chính xác từng bối cảnh.",
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
// Slide 17 — CONTENT (5. Luật mờ — Khái niệm không ranh giới cứng)
// ----------------------------------------------------
const slide17Content = pptx.addSlide({ masterName: "CONTENT" });
slide17Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide17Content.addText("5. LUẬT MỜ — KHÁI NIỆM KHÔNG RANH GIỚI CỨNG", { placeholder: "title" });

addText(
  slide17Content,
  [
    { text: "🌫️ Luật Mờ (Fuzzy Rules):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Áp dụng cho các khái niệm ngôn ngữ không ranh giới cứng:\n  “Thu nhập cao”, “Mức chi tiêu lớn”, “Khách trung thành”.\n\n" },
    { text: "• VD: {Thu nhập cao} → {Chi tiêu cao đồ hữu cơ}.\n\n" },
    { text: "• Mức độ thuộc (Membership grade):\n", options: { bold: true } },
    { text: "  Thu nhập 30tr: thuộc “Thu nhập trung bình” 0.4 & “Thu nhập cao” 0.6." }
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

slide17Content.addTable(
  [
    [
      { text: "Tiêu chí so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Phân nhóm cứng (Crisp)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Phân nhóm mờ (Fuzzy)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Số nhóm thuộc", options: { bold: true } }, { text: "Chỉ thuộc 1 nhóm duy nhất" }, { text: "Thuộc nhiều nhóm với mức độ" }],
    [{ text: "Ranh giới", options: { bold: true } }, { text: "Ngưỡng cắt cứng (Ví dụ 25tr)" }, { text: "Chuyển tiếp mềm mại" }],
    [{ text: "Ưu/Nhược điểm", options: { bold: true } }, { text: "Dễ triển khai" }, { text: "Linh hoạt, phản ánh đúng thực tế" }],
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
  slide17Content,
  "💡 Lưu ý: Luật mờ phản ánh tự nhiên cách tư duy quản trị nhưng cần chuyên gia thiết lập hàm thuộc (membership function) nhất quán.",
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
// Slide 18 — CONTENT (Tổng hợp nhanh — Chọn loại luật nào?)
// ----------------------------------------------------
const slide18Content = pptx.addSlide({ masterName: "CONTENT" });
slide18Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide18Content.addText("TỔNG HỢP NHANH — CHỌN LOẠI LUẬT NÀO?", { placeholder: "title" });

slide18Content.addTable(
  [
    [
      { text: "Câu hỏi nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Dữ liệu cần dùng", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Loại luật ưu tiên", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ví dụ minh họa", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Sản phẩm nào mua cùng nhau?", options: { bold: true } }, { text: "Có/không có trong đơn" }, { text: "Luật nhị phân" }, { text: "{Bánh mì} → {Sữa}" }],
    [{ text: "Hóa đơn lớn đi kèm hành vi gì?", options: { bold: true } }, { text: "Giá trị đơn, số lượng" }, { text: "Luật định lượng" }, { text: "{Hóa đơn cao} → {Tặng quà}" }],
    [{ text: "Quan hệ từ tổng quát đến chi tiết?", options: { bold: true } }, { text: "Cây phân cấp danh mục" }, { text: "Luật đa mức" }, { text: "{Cà phê} → {Bánh quy}" }],
    [{ text: "Ai, lúc nào, ở đâu mua gì?", options: { bold: true } }, { text: "Khách, Thời gian, Kênh" }, { text: "Luật đa chiều" }, { text: "{Cuối tuần} → {Chế biến}" }],
    [{ text: "Tổ hợp nào rủi ro gian lận?", options: { bold: true } }, { text: "Giờ, số tiền, nhãn gian lận" }, { text: "Luật đa chiều + Định lượng" }, { text: "{TIME_Dawn} → {FRAUD_1}" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.5), cmToInch(5.0), cmToInch(4.8), cmToInch(8.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide18Content,
  "💡 Thông điệp chuyển tiếp: Sau khi chọn loại luật phù hợp, bước tiếp theo là biểu diễn toán học và đánh giá bằng Support, Confidence, Lift.",
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
