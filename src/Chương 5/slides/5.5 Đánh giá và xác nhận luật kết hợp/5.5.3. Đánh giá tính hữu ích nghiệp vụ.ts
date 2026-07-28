import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 117 — CONTENT (5.5.3. Đánh giá giá trị hữu ích nghiệp vụ)
// ----------------------------------------------------
const slide117Content = pptx.addSlide({ masterName: "CONTENT" });
slide117Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide117Content.addText("5.5.3. ĐÁNH GIÁ GIÁ TRỊ HỮU ÍCH NGHIỆP VỤ", { placeholder: "title" });

slide117Content.addTable(
  [
    [
      { text: "Tiêu chí nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi quản trị cần trả lời", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Khả năng hành động", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Có thể thiết kế combo, gợi ý mua kèm, thay đổi kệ hàng hoặc gửi coupon?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Giá trị kinh tế", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Lợi nhuận gộp tăng thêm có lớn hơn chi phí khuyến mãi, vận hành và chi phí cơ hội?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Tính mới", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Luật tạo ra tri thức hành vi mới hay chỉ xác nhận điều hiển nhiên?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Tính ổn định", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Luật có lặp lại theo thời gian, khu vực, phân khúc và tập kiểm tra ngoài mẫu?", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "5. Rủi ro thay thế", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Khuyến mãi Y có làm cannibalize (ăn bớt) doanh thu/lợi nhuận của sản phẩm khác?", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "6. Tính tuân thủ", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Hành động có phù hợp chính sách giá, tồn kho, bảo vệ quyền riêng tư & pháp luật?", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(6.5), cmToInch(17.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide117Content,
  "💡 Thông điệp: Luật có Support, Confidence, Lift cao chưa chắc là luật đáng triển khai nếu thiếu tính hữu ích nghiệp vụ!",
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
// Slide 118 — CONTENT (Luật kết hợp và quan hệ nhân quả)
// ----------------------------------------------------
const slide118Content = pptx.addSlide({ masterName: "CONTENT" });
slide118Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide118Content.addText("LUẬT KẾT HỢP VÀ QUAN HỆ NHÂN QUẢ", { placeholder: "title" });

addText(
  slide118Content,
  [
    { text: "⚠️ Phân biệt Đồng xuất hiện vs Nhân quả:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• Luật X → Y chỉ mô tả sự ĐỒNG XUẤT HIỆN xác suất trong dữ liệu lịch sử.\n\n" },
    { text: "• Luật KHÔNG khẳng định mua X là nguyên nhân trực tiếp gây ra mua Y!\n\n" },
    { text: "• Ví dụ: {Bia} → {Snack} chỉ thể hiện bối cảnh mua chung, giảm giá bia chưa chắc làm tăng doanh số snack." }
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
    line: { color: DUE_COLORS.orange, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide118Content,
  [
    { text: "🔄 Quy trình Quyết định Nghiệp vụ Chuẩn:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "  Luật Khai phá (Data Mining)\n" },
    { text: "        ↓\n" },
    { text: "  Sàng lọc Nghiệp vụ (Business Filter)\n" },
    { text: "        ↓\n" },
    { text: "  Ước tính Lợi ích Ròng (Net Benefit)\n" },
    { text: "        ↓\n" },
    { text: "  Thử nghiệm Thí điểm (A/B Testing)\n" },
    { text: "        ↓\n" },
    { text: "  Mở rộng Triển khai (Scale up)" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide118Content,
  "💡 Nhận thức: Quyết định triển khai bắt buộc phải kết hợp giữa chỉ số khai phá + kiến thức nghiệp vụ + thử nghiệm thực tế.",
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
// Slide 119 — CONTENT (Khi luật 'đẹp' chỉ là ngẫu nhiên)
// ----------------------------------------------------
const slide119Content = pptx.addSlide({ masterName: "CONTENT" });
slide119Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide119Content.addText("KHI LUẬT 'ĐẸP' CHỈ LÀ NGẪU NHIÊN", { placeholder: "title" });

slide119Content.addTable(
  [
    [
      { text: "Dấu hiệu Cảnh báo Luật Giả ngẫu nhiên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Rủi ro & Bản chất kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Luật dựa trên rất ít giao dịch", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Cỡ mẫu quá nhỏ ➔ Dễ biến động ngẫu nhiên.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Support thấp nhưng Conf/Lift cực cao", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Hiện tượng quá khớp (Overfitting) trên nhiễu dữ liệu.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Chỉ số sụt giảm mạnh ngoài mẫu", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Không có tính tổng quát hóa trên dữ liệu mới.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Không có diễn giải nghiệp vụ hợp lý", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Hai sản phẩm không hề có mối liên hệ mua sắm thực tế.", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(8.5), cmToInch(15.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide119Content,
  "💡 Minh họa thực tế: Trong CSDL 50 đơn ngẫu nhiên hoàn toàn, vẫn xuất hiện luật Conf 100% và Lift 5.0! Chỉ số cao không tự động có ý nghĩa.",
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
// Slide 120 — CONTENT (Giảm rủi ro luật giả và triển khai sai)
// ----------------------------------------------------
const slide120Content = pptx.addSlide({ masterName: "CONTENT" });
slide120Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide120Content.addText("GIẢM RỦI RO LUẬT GIẢ VÀ TRIỂN KHAI SAI", { placeholder: "title" });

const cardW120 = cmToInch(11.5);
const startX120 = cmToInch(0.8);
const gapX120 = cmToInch(0.8);
const cardY120 = cmToInch(2.0);

// Khung trái: Thực hành tốt
addText(
  slide120Content,
  [
    { text: "🛡️ 7 Thực hành Tốt trước Triển khai:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Không coi mọi luật sinh ra là phát hiện có ý nghĩa.\n" },
    { text: "2. Ưu tiên tập luật nhỏ có khả năng hành động.\n" },
    { text: "3. Kiểm tra Support Count tuyệt đối đủ lớn.\n" },
    { text: "4. Xác nhận luật trên tập dữ liệu ngoài mẫu.\n" },
    { text: "5. So sánh theo thời gian, khu vực, phân khúc.\n" },
    { text: "6. Thử nghiệm A/B thí điểm có đối chứng.\n" },
    { text: "7. Đo lường lợi nhuận gộp ròng thực tế." }
  ],
  {
    x: startX120,
    y: cardY120,
    w: cardW120,
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Khung phải: Nguyên lý cốt lõi
addText(
  slide120Content,
  [
    { text: "🎯 Nguyên lý Quản trị Cốt lõi:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khai phá luật (Data Mining): ", options: { bold: true } },
    { text: "Tạo ra các GIẢ THUYẾT kinh doanh.\n\n" },
    { text: "• Thử nghiệm A/B (Pilot Test): ", options: { bold: true } },
    { text: "Kiểm tra giá trị NHÂN QUẢ và GIÁ TRỊ KINH TẾ thực sự.\n\n" },
    { text: "➔ Chỉ mở rộng đại trà khi lợi ích tăng thêm vượt chi phí!" }
  ],
  {
    x: startX120 + cardW120 + gapX120,
    y: cardY120,
    w: cardW120,
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
  slide120Content,
  "💡 Thông điệp: Khai phá luật tạo ra giả thuyết; thí điểm có đối chứng giúp xác nhận giá trị kinh tế ròng!",
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
