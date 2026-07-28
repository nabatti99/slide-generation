import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 104 — SECTION (5.5.1. TỪ LUẬT MẠNH ĐẾN LUẬT CÓ GIÁ TRỊ HÀNH ĐỘNG)
// ----------------------------------------------------
const slide104Section = pptx.addSlide({ masterName: "SECTION" });
slide104Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide104Section.addText("5.5.1. TỪ LUẬT MẠNH ĐẾN LUẬT CÓ GIÁ TRỊ HÀNH ĐỘNG", { placeholder: "title" });
slide104Section.addText(
  "Không chỉ tìm luật đúng trong dữ liệu, mà còn tìm luật giúp doanh nghiệp ra quyết định tốt hơn",
  { placeholder: "content" }
);
slide104Section.addText(
  "Chuỗi chuyển đổi: Luật kết hợp mạnh ➔ Diễn giải kinh doanh ➔ Can thiệp cụ thể ➔ Đo lường hiệu quả ➔ Quyết định triển khai.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 105 — CONTENT (Một luật mạnh có phải là một luật nên triển khai?)
// ----------------------------------------------------
const slide105Content = pptx.addSlide({ masterName: "CONTENT" });
slide105Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide105Content.addText("MỘT LUẬT MẠNH CÓ PHẢI LÀ MỘT LUẬT NÊN TRIỂN KHAI?", { placeholder: "title" });

slide105Content.addTable(
  [
    [
      { text: "Góc nhìn Kỹ thuật Thuần túy", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Góc nhìn Quản trị Kinh doanh Thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Luật có vượt minsup không?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Luật tác động đến nhóm khách hàng nào và ở quy mô nào?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Luật có vượt minconf không?", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Có hành động kinh doanh nào phù hợp để tận dụng luật không?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Lift có lớn hơn 1 không?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Liên kết có tạo cơ hội bán thêm thực sự không?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Thuật toán xuất ra bao nhiêu luật?", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Luật nào nên được ưu tiên thử nghiệm trước?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Luật có chính xác trên dữ liệu cũ không?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Lợi ích ròng (Net benefit) sau triển khai có dương không?", options: { fill: { color: "FFFFFF" } } }],
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
  slide105Content,
  "💡 Lời giảng: Xem support, confidence và lift là tiêu chí 'đủ điều kiện vào vòng trong', chứ chưa phải 'quyết định trúng tuyển'.",
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
// Slide 106 — CONTENT (Thế nào là luật có giá trị hành động?)
// ----------------------------------------------------
const slide106Content = pptx.addSlide({ masterName: "CONTENT" });
slide106Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide106Content.addText("THẾ NÀO LÀ LUẬT CÓ GIÁ TRỊ HÀNH ĐỘNG?", { placeholder: "title" });

slide106Content.addTable(
  [
    [
      { text: "4 Điều kiện Luật có Giá trị Hành động", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Câu hỏi cần trả lời", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Hành động rõ ràng", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Từ luật này, doanh nghiệp sẽ làm gì cụ thể?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Đối tượng xác định", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Triển khai cho ai, tại thời điểm nào và qua kênh nào?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Hiệu quả kinh tế", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Lợi nhuận tăng thêm có lớn hơn tổng chi phí không?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Tính mới & Phù hợp", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Luật có cung cấp hiểu biết mới, thay vì chỉ xác nhận điều hiển nhiên?", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.0), cmToInch(6.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide106Content,
  [
    { text: "🛒 Các Hành động Kinh doanh Thường gặp:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Thiết kế combo hoặc gói sản phẩm bán kèm.\n\n" },
    { text: "• Hiển thị gợi ý mua kèm trên website / ứng dụng.\n\n" },
    { text: "• Gửi ưu đãi cá nhân hóa sau khi khách mua vế trái.\n\n" },
    { text: "• Điều chỉnh vị trí trưng bày trên kệ hàng siêu thị.\n\n" },
    { text: "• Đưa sản phẩm liên quan vào email tiếp thị." }
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
  slide106Content,
  "💡 Quy tắc: Yêu cầu hoàn thành câu: 'Nếu luật này đúng, doanh nghiệp sẽ...'. Nếu không trả lời được, luật chưa thể triển khai!",
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
// Slide 107 — CONTENT (Chuỗi chuyển đổi từ luật sang hành động)
// ----------------------------------------------------
const slide107Content = pptx.addSlide({ masterName: "CONTENT" });
slide107Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide107Content.addText("CHUỖI CHUYỂN ĐỔI TỪ LUẬT SANG HÀNH ĐỘNG", { placeholder: "title" });

slide107Content.addTable(
  [
    [
      { text: "Bước trong Chuỗi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi kiểm tra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ minh họa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Phát hiện luật", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Khách thường mua những gì cùng nhau?", options: { fill: { color: "FFFFFF" } } }, { text: "{Máy ảnh} → {Thẻ nhớ}", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Diễn giải", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Quan hệ này có hợp lý không?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Máy ảnh bắt buộc cần thẻ nhớ để lưu ảnh", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Can thiệp", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Có thể tác động như thế nào?", options: { fill: { color: "FFFFFF" } } }, { text: "Gợi ý thẻ nhớ tương thích tại bước thanh toán", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Đối tượng", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Nhắm tới ai, lúc nào và ở đâu?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Khách vừa thêm máy ảnh vào giỏ hàng", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "5. Đo kết quả", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Can thiệp có làm tăng lợi nhuận không?", options: { fill: { color: "FFFFFF" } } }, { text: "Tỷ lệ mua kèm, lợi nhuận gộp, chi phí ưu đãi", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.0), cmToInch(9.0), cmToInch(9.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide107Content,
  "💡 Lưu ý quan trọng: 'Mua cùng nhau' KHÔNG đồng nghĩa với 'giảm giá sẽ làm khách mua thêm'. Phải thử nghiệm A/B kiểm chứng!",
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
// Slide 108 — CONTENT (Ví dụ: Luật Máy ảnh -> Thẻ nhớ)
// ----------------------------------------------------
const slide108Content = pptx.addSlide({ masterName: "CONTENT" });
slide108Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide108Content.addText("VÍ DỤ: LUẬT MÁY ẢNH → THẺ NHỚ", { placeholder: "title" });

slide108Content.addTable(
  [
    [
      { text: "Khía cạnh", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Câu hỏi quản trị cần trả lời trước khi triển khai", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Cơ hội bán thêm", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Khách đã mua hoặc đang có thẻ nhớ phù hợp trong giỏ hàng chưa?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Tồn kho & Cung ứng", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Thẻ nhớ phù hợp có sẵn tại cửa hàng hoặc kho gần nhất không?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Tính tương thích", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Dung lượng, chuẩn thẻ và tốc độ ghi có tương thích chuẩn máy ảnh?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Biên lợi nhuận", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Thẻ nhớ có biên lợi nhuận đủ để chi trả cho chi phí khuyến mãi không?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Rủi ro thay thế", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Ưu đãi có chỉ giảm giá cho khách vốn đã định mua thẻ nhớ không?", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(6.0), cmToInch(17.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide108Content,
  "💡 Thông điệp: Lift 2,10 là tín hiệu tốt nhưng không phải mệnh lệnh giảm giá. Có thể gợi ý thẻ nhớ tương thích mà không cần giảm giá!",
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
// Slide 109 — CONTENT (Từ luật đến giả thuyết kinh doanh)
// ----------------------------------------------------
const slide109Content = pptx.addSlide({ masterName: "CONTENT" });
slide109Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide109Content.addText("TỪ LUẬT ĐẾN GIẢ THUYẾT KINH DOANH", { placeholder: "title" });

slide109Content.addTable(
  [
    [
      { text: "Thành phần thiết kế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nội dung minh họa thử nghiệm A/B", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Luật phát hiện", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "{Máy ảnh} → {Thẻ nhớ} (Support=8%, Conf=65%, Lift=2.10)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Giả thuyết kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Gợi ý thẻ nhớ tương thích khi khách chọn máy ảnh sẽ tăng tỷ lệ mua kèm.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Can thiệp nhóm A", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Hiển thị 3 thẻ nhớ phù hợp kèm ưu đãi giảm 5%.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Nhóm đối chứng B", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Khách tương tự chỉ xem gợi ý thông thường, không nhận ưu đãi.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "KPI đo lường", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Lợi nhuận gộp tăng thêm trên mỗi khách tiếp cận (Net Profit).", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(6.5), cmToInch(17.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide109Content,
  "💡 Công thức Lợi ích Ròng: Net Benefit = Lợi nhuận tăng thêm - Chi phí ưu đãi - Chi phí vận hành - Tổn thất thay thế.",
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
// Slide 110 — CONTENT (Bảng kiểm trước khi triển khai luật)
// ----------------------------------------------------
const slide110Content = pptx.addSlide({ masterName: "CONTENT" });
slide110Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide110Content.addText("BẢNG KIỂM TRƯỚC KHI TRIỂN KHAI LUẬT", { placeholder: "title" });

slide110Content.addTable(
  [
    [
      { text: "Câu hỏi đánh giá kiểm định", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Có", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Chưa rõ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Không", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Luật có support đủ lớn hoặc nhắm phân khúc ngách giá trị cao?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "✓", options: { fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Luật có lift > 1 trên dữ liệu liên quan?", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "✓", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Có thể xác định đối tượng khách hàng để tiếp cận?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "✓", options: { fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Có hành động kinh doanh cụ thể gắn liền với luật?", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "✓", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "5. Sản phẩm vế phải còn tồn kho và có thể cung ứng?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }, { text: "?", options: { fill: { color: "FFFFFF" } } }, { text: "", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "6. Lợi ích kỳ vọng lớn hơn chi phí ưu đãi & vận hành?", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "?", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(16.3), cmToInch(2.5), cmToInch(2.5), cmToInch(2.5)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide110Content,
  "💡 Quy tắc quyết định: Nhiều ô 'Có' ➔ Triển khai thử nghiệm; Có ô 'Không' tại Lift hoặc Hành động ➔ Loại bỏ ngay lập tức!",
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
