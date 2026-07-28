import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 121 — SECTION (5.5.4. XÁC NHẬN LUẬT TRÊN DỮ LIỆU NGOÀI MẪU)
// ----------------------------------------------------
const slide121Section = pptx.addSlide({ masterName: "SECTION" });
slide121Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide121Section.addText("5.5.4. XÁC NHẬN LUẬT TRÊN DỮ LIỆU NGOÀI MẪU", { placeholder: "title" });
slide121Section.addText(
  "Không nên kết luận luật tốt chỉ vì luật đạt chỉ số cao trên chính dữ liệu dùng để khai phá (Train data)",
  { placeholder: "content" }
);
slide121Section.addText(
  "Quy trình 6 bước: Chia mốc thời gian Train/Test ➔ Khai phá trên Train ➔ Đánh giá lại trên Test ➔ So sánh mức suy giảm ➔ Giữ luật ổn định ➔ Thử nghiệm thí điểm.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 122 — CONTENT (Tiêu chí xác nhận ngoài mẫu)
// ----------------------------------------------------
const slide122Content = pptx.addSlide({ masterName: "CONTENT" });
slide122Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide122Content.addText("TIÊU CHÍ XÁC NHẬN NGOÀI MẪU", { placeholder: "title" });

slide122Content.addTable(
  [
    [
      { text: "Tiêu chí kiểm định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cách kiểm tra trên Tập Test", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Hàm ý đánh giá chất lượng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support test", options: { bold: true } }, { text: "Tính lại tỷ lệ giao dịch chứa đồng thời X và Y" }, { text: "Cần đủ lớn để luật không dựa trên ít giao dịch." }],
    [{ text: "Confidence test", options: { bold: true } }, { text: "Tính lại xác suất có điều kiện P(Y|X)" }, { text: "Cần duy trì ở mức ngưỡng chấp nhận được." }],
    [{ text: "Lift test", options: { bold: true, color: DUE_COLORS.orange } }, { text: "So sánh Conf test với xác suất nền P(Y) test" }, { text: "Bắt buộc Lift test > 1 để đảm bảo liên kết dương." }],
    [{ text: "Độ suy giảm (Degradation)", options: { bold: true } }, { text: "So sánh chỉ số Train vs Test" }, { text: "Suy giảm nhỏ chứng tỏ luật ổn định." }],
    [{ text: "Tính nhất quán", options: { bold: true } }, { text: "Kiểm tra luật qua nhiều tháng/khu vực" }, { text: "Luật không được chỉ xuất hiện ở 1 giai đoạn dị biệt." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.5), cmToInch(8.5), cmToInch(9.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide122Content,
  "💡 Nhận thức: Đánh giá luật trên tập kiểm tra độc lập giúp hạn chế hoàn toàn sự đánh giá lạc quan quá mức (Overfitting).",
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
// Slide 123 — CONTENT (Đo mức suy giảm của luật)
// ----------------------------------------------------
const slide123Content = pptx.addSlide({ masterName: "CONTENT" });
slide123Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide123Content.addText("ĐO MỨC SUY GIẢM CỦA LUẬT", { placeholder: "title" });

addText(
  slide123Content,
  [
    { text: "📐 Công thức Đo suy giảm Confidence:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Mức suy giảm tuyệt đối:\n" },
    { text: "  Δconf = conf_train - conf_test\n\n" },
    { text: "• Tỷ lệ duy trì Confidence (Retention Rate):\n" },
    { text: "  Retention_conf = conf_test / conf_train" }
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

slide123Content.addTable(
  [
    [
      { text: "Giá trị Retention_conf", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Đánh giá mức độ ổn định", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Gần 1.0 (ví dụ ≥ 90%)", options: { bold: true, color: DUE_COLORS.green } }, { text: "Luật rất ổn định ➔ Ưu tiên triển khai." }],
    [{ text: "Giảm vừa phải (70% - 89%)", options: { bold: true } }, { text: "Cần theo dõi và kiểm tra nguyên nhân suy giảm." }],
    [{ text: "Giảm mạnh (< 70%)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Luật bị nhiễu/mùa vụ ➔ Hạ ưu tiên hoặc loại bỏ." }],
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(7.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide123Content,
  "💡 Nhắc nhở: Không chỉ nhìn Confidence, luôn đánh giá đồng thời tỷ lệ duy trì của Lift (Retention_lift = lift_test / lift_train).",
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
// Slide 124 — CONTENT (Ví dụ: Luật hoàn hảo trong mẫu)
// ----------------------------------------------------
const slide124Content = pptx.addSlide({ masterName: "CONTENT" });
slide124Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide124Content.addText("VÍ DỤ: LUẬT HOÀN HẢO TRONG MẪU", { placeholder: "title" });

slide124Content.addTable(
  [
    [
      { text: "Chỉ số đánh giá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tập Khai phá (Train: Th.1-10)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tập Kiểm tra (Test: Th.11-12)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Đánh giá suy giảm ngoài mẫu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true } }, { text: "3.0%" }, { text: "1.2%" }, { text: "Sụt giảm hơn 50%" }],
    [{ text: "Confidence", options: { bold: true } }, { text: "100.0% (Hoàn hảo!)" }, { text: "60.0%" }, { text: "Giảm mạnh từ 100% ➔ 60%" }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange } }, { text: "2.50" }, { text: "1.30" }, { text: "Vẫn > 1 nhưng giảm sâu" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(6.0), cmToInch(6.0), cmToInch(7.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide124Content,
  "💡 Nhận xét: Luật {Máy in, Laptop} → {Mực in} đạt Conf 100% trên Train nhưng sụt xuống 60% trên Test. Bắt buộc HẠ ƯU TIÊN triển khai!",
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
// Slide 125 — CONTENT (Nguyên nhân luật suy giảm ngoài mẫu)
// ----------------------------------------------------
const slide125Content = pptx.addSlide({ masterName: "CONTENT" });
slide125Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide125Content.addText("NGUYÊN NHÂN LUẬT SUY GIẢM NGOÀI MẪU", { placeholder: "title" });

slide125Content.addTable(
  [
    [
      { text: "Nguyên nhân khiến luật suy giảm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bản chất kỹ thuật & Nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Nhiễu ngẫu nhiên (Noise)", options: { bold: true } }, { text: "Luật được chọn từ hàng ngàn tổ hợp chỉ vô tình đạt chỉ số cao trên tập cũ." }],
    [{ text: "2. Cỡ mẫu nhỏ (Small sample)", options: { bold: true } }, { text: "Luật dựa trên quá ít giao dịch ➔ Thiếu độ ổn định thống kê." }],
    [{ text: "3. Tính mùa vụ (Seasonality)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Hành vi mua sắm thay đổi theo tháng, dịp lễ, chiến dịch marketing." }],
    [{ text: "4. Thay đổi danh mục sản phẩm", options: { bold: true } }, { text: "Sản phẩm hết hàng, đổi giá, dừng bán hoặc xuất hiện sản phẩm thay thế." }],
    [{ text: "5. Thay đổi tệp khách hàng", options: { bold: true } }, { text: "Cơ cấu khách hàng, kênh bán (Online/Offline) thay đổi theo thời gian." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(7.5), cmToInch(16.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide125Content,
  "💡 Trực giác: Khai phá trên không gian tổ hợp cực lớn dễ bắt được nhiễu. Kiểm định ngoài mẫu là bước lọc bảo vệ doanh nghiệp.",
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
// Slide 126 — CONTENT (Chia dữ liệu theo thời gian)
// ----------------------------------------------------
const slide126Content = pptx.addSlide({ masterName: "CONTENT" });
slide126Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide126Content.addText("CHIA DỮ LIỆU THEO THỜI GIAN", { placeholder: "title" });

addText(
  slide126Content,
  [
    { text: "📅 Ưu tiên Chia theo Thời gian (Time-based Split):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "  Tháng 1 ───────── Tháng 10 | Tháng 11 ─── Tháng 12\n" },
    { text: "       Tập Khai phá (Train)   |    Tập Kiểm tra (Test)\n\n" },
    { text: "• Lý do bắt buộc:\n", options: { bold: true } },
    { text: "  - Mô phỏng thực tế: Dùng dữ liệu quá khứ để ra quyết định tương lai.\n" },
    { text: "  - Tránh rò rỉ dữ liệu tương lai (Data leakage).\n" },
    { text: "  - Kiểm tra xem luật có chịu được sự thay đổi thời gian không." }
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
  slide126Content,
  [
    { text: "🚫 Cảnh báo Lỗi Sai Phổ biến:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "1. Chia ngẫu nhiên (Random holdout): ", options: { bold: true } },
    { text: "Không phản ánh được yếu tố thời gian và sự thay đổi xu hướng mua sắm.\n\n" },
    { text: "2. Điều chỉnh luật theo Test: ", options: { bold: true } },
    { text: "Xem kết quả Test rồi sửa lại minsup/minconf trên Train ➔ Vi phạm nguyên tắc ngoài mẫu độc lập!" }
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
  slide126Content,
  "💡 Quy tắc vàng: Với dữ liệu chuỗi thời gian kinh doanh, tập Kiểm tra (Test) BẮT BUỘC nằm sau tập Khai phá (Train) về mặt thời gian.",
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
// Slide 127 — CONTENT (Từ xác nhận đến thí điểm)
// ----------------------------------------------------
const slide127Content = pptx.addSlide({ masterName: "CONTENT" });
slide127Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide127Content.addText("TỪ XÁC NHẬN ĐẾN THÍ ĐIỂM", { placeholder: "title" });

slide127Content.addTable(
  [
    [
      { text: "Bước quy trình triển khai", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thao tác cốt lõi trong thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Chọn luật ổn định ngoài mẫu", options: { bold: true } }, { text: "Chỉ giữ lại các luật có Support, Conf, Lift duy trì tốt ở tập Test." }],
    [{ text: "2. Chuyển luật thành hành động", options: { bold: true } }, { text: "Thiết kế gợi ý bán kèm, combo giá tốt hoặc trưng bày kệ hàng." }],
    [{ text: "3. Thiết kế nhóm đối chứng", options: { bold: true } }, { text: "Chia nhóm khách hàng thử nghiệm (A) và nhóm đối chứng (B)." }],
    [{ text: "4. Áp dụng chính sách thí điểm", options: { bold: true } }, { text: "Triển khai chính sách trong một khoảng thời gian/chi nhánh giới hạn." }],
    [{ text: "5. Đo lường KPI ròng", options: { bold: true, color: DUE_COLORS.orange } }, { text: "So sánh doanh thu tăng thêm, lợi nhuận gộp ròng và chi phí ưu đãi." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(7.5), cmToInch(16.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide127Content,
  "💡 Nhắc nhở: Một luật ổn định trên dữ liệu quá khứ mới chỉ chứng minh tính bền vững mẫu; Thử nghiệm thí điểm A/B mới chứng minh giá trị kinh tế!",
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
// Slide 128 — CONTENT (Checklist đánh giá luật)
// ----------------------------------------------------
const slide128Content = pptx.addSlide({ masterName: "CONTENT" });
slide128Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide128Content.addText("CHECKLIST ĐÁNH GIÁ LUẬT", { placeholder: "title" });

slide128Content.addTable(
  [
    [
      { text: "8 Tiêu chí Bảng kiểm Đánh giá Luật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Trạng thái", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Luật có support tuyệt đối đủ lớn hay chỉ dựa trên vài đơn?", options: { bold: true } }, { text: "✓ Đạt" }],
    [{ text: "2. Confidence trên tập Test có còn đạt ngưỡng yêu cầu?", options: { bold: true } }, { text: "✓ Đạt" }],
    [{ text: "3. Lift ngoài mẫu Test có còn > 1 đáng kể không?", options: { bold: true, color: DUE_COLORS.orange } }, { text: "✓ Đạt" }],
    [{ text: "4. Các chỉ số có bị suy giảm quá mạnh so với tập Train không?", options: { bold: true } }, { text: "✓ Ổn định" }],
    [{ text: "5. Luật có ổn định qua các tháng, chi nhánh hoặc phân khúc khách hàng?", options: { bold: true } }, { text: "✓ Đồng nhất" }],
    [{ text: "6. Luật có mới, dễ hiểu và hỗ trợ một hành động cụ thể không?", options: { bold: true } }, { text: "✓ Khả thi" }],
    [{ text: "7. Hành động có khả năng tạo ra lợi ích ròng lớn hơn chi phí?", options: { bold: true } }, { text: "✓ Dương" }],
    [{ text: "8. Đã thiết kế phương án thử nghiệm A/B có đối chứng chưa?", options: { bold: true } }, { text: "✓ Sẵn sàng" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10,
    colW: [cmToInch(19.8), cmToInch(4.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide128Content,
  "💡 Thông điệp kết thúc: Một luật được coi là 'thú vị' khi nó vừa hiểu được, vừa hợp lệ trên dữ liệu mới, vừa hữu ích và có tính mới!",
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
