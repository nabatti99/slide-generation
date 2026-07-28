import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 129 — SECTION (5.5.5. DEMO ĐÁNH GIÁ LUẬT NGOÀI MẪU)
// ----------------------------------------------------
const slide129Section = pptx.addSlide({ masterName: "SECTION" });
slide129Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide129Section.addText("5.5.5. DEMO ĐÁNH GIÁ LUẬT NGOÀI MẪU", { placeholder: "title" });
slide129Section.addText(
  "Đánh giá tính ổn định và giá trị triển khai thực tế của các luật kết hợp trên dữ liệu kiểm tra độc lập (Out-of-sample)",
  { placeholder: "content" }
);
slide129Section.addText(
  "Notebook thực hành: demo_5_5_evaluate_rules.ipynb. Mục tiêu: Bảng so sánh Train vs Test, Phân loại tính ổn định, Đề xuất hành động kinh doanh.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 130 — CONTENT (Quy trình thực hành code Python)
// ----------------------------------------------------
const slide130Content = pptx.addSlide({ masterName: "CONTENT" });
slide130Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide130Content.addText("QUY TRÌNH THỰC HÀNH CODE PYTHON", { placeholder: "title" });

slide130Content.addTable(
  [
    [
      { text: "Bước quy trình", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Thao tác cốt lõi trong Notebook Python", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Chuyển đổi dữ liệu", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Chuyển dữ liệu dòng sang ma trận One-hot 0/1 bằng TransactionEncoder.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Chia Train / Test", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Tách dữ liệu theo mốc thời gian (ví dụ: Th.1-10 làm Train, Th.11-12 làm Test).", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Khai phá trên Train", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Chạy fpgrowth() hoặc apriori() trên Train với minsup=0.03.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Lọc sơ bộ trên Train", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Lọc rules theo minconf >= 0.50 và lift > 1 trên tập Train.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "5. Đánh giá lại trên Test", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Tính lại Support, Confidence, Lift của chính các luật Train đó trên tập Test.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "6. Lập bảng & Phân loại", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Đối chiếu chỉ số Train vs Test, phân loại Ổn định / Suy giảm / Không xuất hiện.", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(18.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide130Content,
  "💡 Tư tưởng cốt lõi: Tách hoàn toàn dữ liệu phát hiện luật (Train) khỏi dữ liệu kiểm tra luật (Test). Không điều chỉnh lại luật theo kết quả Test!",
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
// Slide 131 — CONTENT (Chuẩn bị dữ liệu & Chia Train/Test)
// ----------------------------------------------------
const slide131Content = pptx.addSlide({ masterName: "CONTENT" });
slide131Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide131Content.addText("CHUẨN BỊ DỮ LIỆU & CHIA TRAIN/TEST", { placeholder: "title" });

slide131Content.addTable(
  [
    [
      { text: "transaction_id", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "transaction_date", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "product", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "T001", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "2025-01-03", options: { fill: { color: "FFFFFF" } } }, { text: "Sữa, Bánh mì", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "T002", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "2025-01-03", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Cà phê, Sữa", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(3.5), cmToInch(4.0), cmToInch(4.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide131Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_5_evaluate_rules.ipynb\n\n", options: { bold: true, color: "FFD700" } },
    { text: "⚙️ Phân chia theo Mốc Thời gian:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tập Train: `transaction_date <= '2025-10-31'` (T1-T10)\n\n" },
    { text: "• Tập Test: `transaction_date > '2025-10-31'` (T11-T12)\n\n" },
    { text: "• Mã hóa One-hot độc lập:\n" },
    { text: "  - `train_basket = create_onehot(train_df)`\n" },
    { text: "  - `test_basket  = create_onehot(test_df)`\n\n" },
    { text: "🎯 Tập Test hoàn toàn độc lập với phát hiện luật!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 13,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide131Content,
  "💡 Bản chất: Chia theo thời gian phản ánh đúng bối cảnh thực tế: dùng dữ liệu quá khứ để ra quyết định tương lai.",
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
// Slide 132 — CONTENT (Khai phá và đánh giá lại trên Test)
// ----------------------------------------------------
const slide132Content = pptx.addSlide({ masterName: "CONTENT" });
slide132Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide132Content.addText("KHAI PHÁ VÀ ĐÁNH GIÁ LẠI TRÊN TEST", { placeholder: "title" });

addText(
  slide132Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_5_evaluate_rules.ipynb\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Quy trình Đánh giá Ngoài mẫu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Khai phá & lọc luật trên Train:\n" },
    { text: "   `fpgrowth()` + `association_rules(min_threshold=0.50)`\n\n" },
    { text: "2. Tính lại các chỉ số trên Test:\n" },
    { text: "   • `calc_support(test_basket, antecedent, consequent)`\n" },
    { text: "   • `calc_confidence(test_basket, antecedent, consequent)`\n" },
    { text: "   • `calc_lift(test_basket, antecedent, consequent)`" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 13,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide132Content,
  [
    { text: "📌 Nguyên tắc Tính toán Cần nhớ:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• KHÔNG chạy fpgrowth() mới trên Test! ", options: { bold: true } },
    { text: "Chỉ đếm lại chỉ số của đúng các luật được chọn từ Train.\n\n" },
    { text: "• Xử lý ngoại lệ: ", options: { bold: true } },
    { text: "Nếu vế trái X không xuất hiện trên Test ➔ Đánh nhãn 'Không xuất hiện ngoài mẫu'.\n\n" },
    { text: "• Lưu số đơn tuyệt đối: ", options: { bold: true } },
    { text: "Lưu count tuyệt đối song song với tỷ lệ %." }
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
  slide132Content,
  "💡 Bản chất: Mục tiêu là kiểm chứng xem quy luật quá khứ có tiếp tục đúng trong dữ liệu mới hay không.",
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
// Slide 133 — CONTENT (Bảng kết quả cần lập)
// ----------------------------------------------------
const slide133Content = pptx.addSlide({ masterName: "CONTENT" });
slide133Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide133Content.addText("BẢNG KẾT QUẢ CẦN LẬP", { placeholder: "title" });

slide133Content.addTable(
  [
    [
      { text: "Luật kết hợp", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Sup train", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Conf train", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift train", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Sup test", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Conf test", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift test", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Hành động đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "{Sữa} → {Bánh mì}", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "5.2%", options: { fill: { color: "FFFFFF" } } }, { text: "68%", options: { fill: { color: "FFFFFF" } } }, { text: "1.45", options: { fill: { color: "FFFFFF" } } }, { text: "4.8%", options: { fill: { color: "FFFFFF" } } }, { text: "65%", options: { fill: { color: "FFFFFF" } } }, { text: "1.39", options: { fill: { color: "FFFFFF" } } }, { text: "Gợi ý bánh mì khi mua sữa", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "{Laptop} → {Chuột}", options: { bold: true, color: DUE_COLORS.green, fill: { color: DUE_COLORS.lightBg } } }, { text: "3.5%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "72%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "2.10", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "3.1%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "69%", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "1.98", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "✅ ƯU TIÊN THỬ NGHIỆM COMBO", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "{Laptop, Máy in} → {Mực in}", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "3.0%", options: { fill: { color: "FFFFFF" } } }, { text: "100%", options: { fill: { color: "FFFFFF" } } }, { text: "2.50", options: { fill: { color: "FFFFFF" } } }, { text: "1.2%", options: { fill: { color: "FFFFFF" } } }, { text: "60%", options: { fill: { color: "FFFFFF" } } }, { text: "1.30", options: { fill: { color: "FFFFFF" } } }, { text: "❌ HẠ ƯU TIÊN (Giảm mạnh!)", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.2), cmToInch(2.0), cmToInch(2.2), cmToInch(2.0), cmToInch(2.0), cmToInch(2.2), cmToInch(2.0), cmToInch(6.2)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide133Content,
  "💡 Mục đích: Bảng đối chiếu giúp phát hiện ngay các luật suy giảm hoặc biến mất ngoài mẫu để quyết định lọc chính xác.",
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
// Slide 134 — CONTENT (Phân loại luật sau đánh giá)
// ----------------------------------------------------
const slide134Content = pptx.addSlide({ masterName: "CONTENT" });
slide134Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide134Content.addText("PHÂN LOẠI LUẬT SAU ĐÁNH GIÁ", { placeholder: "title" });

slide134Content.addTable(
  [
    [
      { text: "Nhóm phân loại", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dấu hiệu nhận biết đặc trưng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Hướng xử lý quản trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Ổn định (Stable)", options: { bold: true, color: DUE_COLORS.green, fill: { color: "FFFFFF" } } }, { text: "Chỉ số trên Test chỉ giảm nhẹ; Lift test vẫn > 1 rõ rệt.", options: { fill: { color: "FFFFFF" } } }, { text: "🌟 Ưu tiên đưa vào danh sách Thử nghiệm A/B.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Suy giảm (Degraded)", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Chỉ số Test sụt giảm đáng kể so với Train.", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Hạ ưu tiên, tìm hiểu nguyên nhân nhiễu/mùa vụ.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Không xuất hiện", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Vế trái X không xuất hiện trong tập Test.", options: { fill: { color: "FFFFFF" } } }, { text: "Không dùng để triển khai đại trà.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Thiếu hành động", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Chỉ số ổn định nhưng không dẫn đến can thiệp cụ thể.", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Lưu tham khảo, không phân bổ nguồn lực.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "5. Đáng hành động", options: { bold: true, color: DUE_COLORS.green, fill: { color: "FFFFFF" } } }, { text: "Ổn định + Dễ diễn giải + Có hành động sinh lợi ròng.", options: { fill: { color: "FFFFFF" } } }, { text: "🚀 Chuyển sang thiết kế chương trình khuyến mãi.", options: { fill: { color: "FFFFFF" } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(9.5), cmToInch(8.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide134Content,
  "💡 Thông điệp: Một luật có chỉ số thống kê tốt nhưng thiếu hành động cụ thể thì vẫn KHÔNG có giá trị ứng dụng.",
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
// Slide 135 — CONTENT (Bài tập đề xuất hành động)
// ----------------------------------------------------
const slide135Content = pptx.addSlide({ masterName: "CONTENT" });
slide135Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide135Content.addText("BÀI TẬP ĐỀ XUẤT HÀNH ĐỘNG", { placeholder: "title" });

addText(
  slide135Content,
  [
    { text: "✅ Luật Chọn Triển khai Thí điểm:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "  {Laptop} → {Chuột}\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "• Lý do: ", options: { bold: true } },
    { text: "Confidence duy trì ổn định (72% ➔ 69%), Lift cao (2.10 ➔ 1.98).\n\n" },
    { text: "• Hành động đề xuất: ", options: { bold: true } },
    { text: "Gợi ý chuột tương thích tại trang thanh toán laptop hoặc tạo combo Laptop + Chuột giá tốt.\n\n" },
    { text: "• KPI theo dõi: ", options: { bold: true } },
    { text: "Tỷ lệ mua kèm chuột, Doanh thu tăng thêm và Lợi nhuận ròng." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide135Content,
  [
    { text: "❌ Luật Cần Hạ Ưu tiên / Loại bỏ:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "  {Laptop, Máy in} → {Mực in}\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Lý do: ", options: { bold: true } },
    { text: "Confidence suy giảm mạnh từ 100% (Train) xuống còn 60% (Test); Support giảm từ 3% xuống 1,2%.\n\n" },
    { text: "• Hành động: ", options: { bold: true } },
    { text: "Không triển khai đại trà; kiểm tra ảnh hưởng tồn kho, giá bán hoặc cỡ mẫu nhỏ." }
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
    line: { color: DUE_COLORS.orange, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide135Content,
  "💡 Nguyên tắc cốt lõi: Phân biệt rõ luật bền vững và luật ngẫu nhiên trước khi chi tiền cho các chiến dịch marketing!",
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
// Slide 136 — CONTENT (Câu hỏi thảo luận & Gợi ý trả lời)
// ----------------------------------------------------
const slide136Content = pptx.addSlide({ masterName: "CONTENT" });
slide136Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide136Content.addText("CÂU HỎI THẢO LUẬN & GỢI Ý TRẢ LỜI", { placeholder: "title" });

slide136Content.addTable(
  [
    [
      { text: "Câu hỏi thảo luận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Gợi ý trả lời & Định hướng nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Conf 90% nhưng Lift 0.95 có dùng bán chéo?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "❌ KHÔNG! Lift < 1 chứng tỏ X làm giảm khả năng mua Y so với nền. Conf 90% chỉ do Y vốn quá phổ biến.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "2. Lift 2.50 nhưng Support 0.2% hữu ích khi nào?", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "💎 Hữu ích khi Y có biên lợi nhuận cực cao hoặc nhắm phân khúc khách VIP ngách. Cần kiểm tra đơn tuyệt đối.", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "3. Vì sao Conf cao ở Quý I lại giảm ở Quý II?", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "📅 Do yếu tố mùa vụ, chiến dịch marketing thay đổi, đối thủ cạnh tranh hoặc thay đổi giá/tồn kho.", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "4. Vì sao cần A/B Test trước khi nhân rộng?", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "🧪 Để tách bạch phần tăng trưởng do khuyến mãi với biến động tự nhiên; đo chính xác Lợi nhuận ròng.", options: { fill: { color: DUE_COLORS.lightBg } } }],
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
  slide136Content,
  "💡 Thông điệp kết thúc Chương 5: Khai phá dữ liệu phát hiện mẫu; Đánh giá ngoài mẫu kiểm định tính bền vững; A/B testing xác nhận giá trị kinh tế ròng!",
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
