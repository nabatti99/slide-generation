import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 95 — SECTION (5.5. ĐÁNH GIÁ VÀ XÁC NHẬN LUẬT KẾT HỢP)
// ----------------------------------------------------
const slide95Section = pptx.addSlide({ masterName: "SECTION" });
slide95Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide95Section.addText("5.5. ĐÁNH GIÁ VÀ XÁC NHẬN LUẬT KẾT HỢP", { placeholder: "title" });
slide95Section.addText(
  "Không chỉ tìm luật mạnh về mặt kỹ thuật — cần chọn lọc các luật thực sự có giá trị hành động quản trị",
  { placeholder: "content" }
);
slide95Section.addText(
  "Mục tiêu: Đánh giá luật bằng Support, Confidence, Lift; nhận diện luật gây hiểu nhầm; phân biệt ý nghĩa thống kê vs giá trị kinh doanh; xác nhận độ ổn định trên dữ liệu mới.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 96 — CONTENT (Câu hỏi dẫn nhập)
// ----------------------------------------------------
const slide96Content = pptx.addSlide({ masterName: "CONTENT" });
slide96Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide96Content.addText("CONFIDENCE 90% CÓ PHẢI LÀ LUẬT TỐT?", { placeholder: "title" });

addText(
  slide96Content,
  [
    { text: "❓ Tình huống tranh luận:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "Doanh nghiệp phát hiện luật: {Mua A} → {Mua B} với Confidence = 90%.\n\n" },
    { text: "• Có nên lập tức khuyến mãi B cho khách mua A không?\n\n" },
    { text: "• Nếu 95% toàn bộ khách hàng vốn đã mua B thì con số 90% này thể hiện điều gì?" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide96Content,
  [
    { text: "❌ Đáp án: KHÔNG THỂ KHUYẾN MÃI NGAY!\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Confidence 90% chỉ đo: ", options: { bold: true } },
    { text: "B thường xuất hiện khi có A.\n\n" },
    { text: "• Chưa chứng minh: ", options: { bold: true } },
    { text: "A làm tăng khả năng mua B so với mức nền!\n\n" },
    { text: "➔ Nếu mức mua B nền là 95%, nhóm mua A thực ra lại mua B ÍT HƠN mức trung bình (Lift < 1)!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide96Content,
  "💡 Thông điệp: Một luật có confidence cao vẫn có thể kém giá trị nếu sản phẩm ở vế phải vốn đã quá phổ biến nền.",
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
// Slide 97 — CONTENT (Luật mạnh chưa chắc hữu ích)
// ----------------------------------------------------
const slide97Content = pptx.addSlide({ masterName: "CONTENT" });
slide97Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide97Content.addText("LUẬT MẠNH CHƯA CHẮC HỮU ÍCH", { placeholder: "title" });

slide97Content.addTable(
  [
    [
      { text: "Chỉ nhìn Kết quả Thuật toán (Kỹ thuật)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Đánh giá Phục vụ Quản trị Kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Luật có đạt minsup tối thiểu không?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Luật tác động đến bao nhiêu khách hàng và ở quy mô doanh thu nào?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Luật có đạt minconf tối thiểu không?", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Mức liên kết có thực sự tốt hơn mức xuất hiện nền của vế phải không?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Lift có lớn hơn 1 không?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Có thể triển khai hành động bán chéo hay combo cụ thể nào?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Thuật toán xuất ra bao nhiêu luật?", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Luật nào tạo ra lợi ích ròng (Net Profit) cao nhất sau chi phí?", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(10.5), cmToInch(13.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide97Content,
  "💡 Nhận thức: Ngưỡng Support và Confidence chỉ là tiêu chí 'vòng gửi xe', không phải bằng chứng cho một quyết định kinh doanh thành công.",
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
// Slide 98 — CONTENT (Khung đánh giá bốn lớp)
// ----------------------------------------------------
const slide98Content = pptx.addSlide({ masterName: "CONTENT" });
slide98Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide98Content.addText("KHUNG ĐÁNH GIÁ BỐN LỚP", { placeholder: "title" });

slide98Content.addTable(
  [
    [
      { text: "Lớp đánh giá", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Câu hỏi chiến lược cần trả lời", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thước đo / Căn cứ đánh giá", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Độ phổ biến", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Luật có xuất hiện ở quy mô đủ lớn để tác động kinh doanh?", options: { fill: { color: "FFFFFF" } } }, { text: "Support", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Độ tin cậy", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Khi mua X, khách hàng có thường mua Y không?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Confidence", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Mức liên kết thực", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Sự có mặt của X có làm khả năng mua Y tăng hơn mức nền?", options: { fill: { color: "FFFFFF" } } }, { text: "Lift (> 1)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Giá trị hành động", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Có hành động khả thi nào tạo ra lợi nhuận ròng sau chi phí không?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Lợi nhuận ròng, Chi phí, Khả năng triển khai", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.0), cmToInch(12.0), cmToInch(6.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide98Content,
  "💡 Thông điệp chốt: Một luật tốt không chỉ 'đúng trong dữ liệu', mà bắt buộc phải 'có giá trị thực tiễn trong quản trị'.",
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
// Slide 99 — CONTENT (Ba thước đo cốt lõi)
// ----------------------------------------------------
const slide99Content = pptx.addSlide({ masterName: "CONTENT" });
slide99Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide99Content.addText("BA THƯỚC ĐO CỐT LÕI", { placeholder: "title" });

slide99Content.addTable(
  [
    [
      { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Công thức toán học", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi trả lời bản chất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Hạn chế nếu chỉ nhìn đơn lẻ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "P(X ∩ Y)", options: { bold: true, color: DUE_COLORS.blue, fill: { color: "FFFFFF" } } }, { text: "Luật phổ biến đến đâu trong toàn CSDL?", options: { fill: { color: "FFFFFF" } } }, { text: "Dễ bỏ qua luật ngách có lợi nhuận rất cao.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Confidence", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "P(Y|X) = P(X ∩ Y) / P(X)", options: { bold: true, color: DUE_COLORS.blue, fill: { color: DUE_COLORS.lightBg } } }, { text: "Khi có X, xác suất mua Y là bao nhiêu?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Dễ bị đánh lừa khi Y vốn quá phổ biến nền.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "P(Y|X) / P(Y)", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Có X làm tăng khả năng mua Y bao nhiêu lần?", options: { fill: { color: "FFFFFF" } } }, { text: "Không đo trực tiếp chi phí hay lợi nhuận.", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(5.8), cmToInch(7.2), cmToInch(7.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide99Content,
  "💡 Ghi nhớ: Support trả lời về QUY MÔ; Confidence trả lời về XÁC SUẤT CÓ ĐIỀU KIỆN; Lift trả lời về MỨC TĂNG SO VỚI NỀN.",
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
// Slide 100 — CONTENT (Ví dụ: Dữ liệu giao dịch Trò chơi & Video)
// ----------------------------------------------------
const slide100Content = pptx.addSlide({ masterName: "CONTENT" });
slide100Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide100Content.addText("VÍ DỤ: DỮ LIỆU GIAO DỊCH TRÒ CHƠI & VIDEO", { placeholder: "title" });

slide100Content.addTable(
  [
    [
      { text: "Thông tin giao dịch (N = 10.000 hóa đơn)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Số lượng hóa đơn", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Tỷ lệ nền", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Có Trò chơi điện tử (X)", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "6.000", options: { fill: { color: "FFFFFF" } } }, { text: "60.0%", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Có Video (Y)", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "7.500", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "75.0% (Mức nền rất cao!)", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Có cả Trò chơi điện tử và Video (X ∩ Y)", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "4.000", options: { fill: { color: "FFFFFF" } } }, { text: "40.0%", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(6.5), cmToInch(2.5), cmToInch(2.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide100Content,
  [
    { text: "🎯 Luật khảo sát:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "  {Trò chơi điện tử} → {Video}\n\n", options: { bold: true, color: DUE_COLORS.green, fontSize: 12 } },
    { text: "• Câu hỏi quản trị đặt ra:\n", options: { bold: true } },
    { text: "  Liệu siêu thị có nên chạy chương trình khuyến mãi chéo Video cho khách hàng mua Trò chơi điện tử không?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide100Content,
  "💡 Đặt vấn đề: Hãy tính toán chính xác Support, Confidence và Lift trước khi đưa ra quyết định khuyến mãi.",
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
// Slide 101 — CONTENT (Tính các chỉ số)
// ----------------------------------------------------
const slide101Content = pptx.addSlide({ masterName: "CONTENT" });
slide101Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide101Content.addText("TÍNH CÁC CHỈ SỐ: SUPPORT, CONFIDENCE, LIFT", { placeholder: "title" });

addText(
  slide101Content,
  [
    { text: "🧮 Các bước tính toán toán học:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "1. Support = 4.000 / 10.000 = 40.0%\n\n", options: { bold: true } },
    { text: "2. Confidence = 4.000 / 6.000 = 66.7%\n\n", options: { bold: true } },
    { text: "3. Lift = 66.7% / 75.0% = 0.89 (< 1)!\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "   (Công thức: Lift = P(Y|X) / P(Y))" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    lineSpacing: 16,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide101Content,
  [
    { text: "📊 So sánh tỷ lệ xuất hiện:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Tỷ lệ mua Video nền toàn bộ khách: 75.0%\n\n" },
    { text: "• Tỷ lệ mua Video trong nhóm mua Trò chơi: 66.7%\n\n" },
    { text: "➔ Mua Trò chơi làm giảm tỷ lệ mua Video từ 75% xuống 66,7%! Đây là LIÊN KẾT ÂM." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide101Content,
  "💡 Sự thật: Mặc dù Confidence đạt 66,7%, khách mua Trò chơi điện tử thực ra lại mua Video ÍT HƠN khách hàng bình thường!",
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
// Slide 102 — CONTENT (Kết luận từ ví dụ)
// ----------------------------------------------------
const slide102Content = pptx.addSlide({ masterName: "CONTENT" });
slide102Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide102Content.addText("KẾT LUẬN TỪ VÍ DỤ", { placeholder: "title" });

slide102Content.addTable(
  [
    [
      { text: "Chỉ số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giá trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Đánh giá & Nhận định quản trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "40.0%", options: { fill: { color: "FFFFFF" } } }, { text: "Cao (Độ bao phủ lớn trên toàn mẫu)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Confidence", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "66.7%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Có vẻ tốt nếu xem riêng lẻ một mình", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "0.89", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "❌ Nhỏ hơn 1 (Tương quan/Liên kết âm)", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(3.5), cmToInch(15.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide102Content,
  "💡 Khuyên dùng QTKD: KHÔNG chạy khuyến mãi chéo này! Luôn so sánh Confidence với tỷ lệ nền P(Y) của vế phải.",
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
// Slide 103 — CONTENT (Ma trận theo Support và Lift)
// ----------------------------------------------------
const slide103Content = pptx.addSlide({ masterName: "CONTENT" });
slide103Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide103Content.addText("MA TRẬN THEO SUPPORT VÀ LIFT", { placeholder: "title" });

slide103Content.addTable(
  [
    [
      { text: "Khái niệm", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift > 1 (Liên kết dương)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift ≤ 1 (Độc lập / Liên kết âm)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support cao", options: { bold: true, color: DUE_COLORS.green, fill: { color: "FFFFFF" } } }, { text: "🌟 ƯU TIÊN THỬ NGHIỆM ĐẠI TRÀ!\nPhủ rộng, liên kết mạnh; dùng làm combo, gợi ý mua kèm.", options: { fill: { color: "FFFFFF" } } }, { text: "❌ KHÔNG DÙNG BÁN CHÉO!\nPhổ biến do sản phẩm nền vốn phổ biến, không hỗ trợ nhau.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Support thấp", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "💎 ĐÁNH GIÁ THEO GIÁ TRỊ RÒNG!\nPhù hợp sản phẩm biên lợi nhuận cao hoặc phân khúc ngách.", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "🚫 LOẠI BỎ HOÀN TOÀN!\nVừa hiếm vừa không có liên kết tích cực.", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(9.65), cmToInch(9.65)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide103Content,
  "💡 Quy tắc ưu tiên: Support cao + Lift cao = Thử nghiệm đại trà; Support thấp + Lift cao = Xem xét biên lợi nhuận ròng.",
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
