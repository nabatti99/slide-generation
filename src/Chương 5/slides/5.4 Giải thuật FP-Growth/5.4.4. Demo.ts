import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 90 — CONTENT (Demo Python: FP-Growth)
// ----------------------------------------------------
const slide90Content = pptx.addSlide({ masterName: "CONTENT" });
slide90Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide90Content.addText("DEMO PYTHON: FP-GROWTH", { placeholder: "title" });

addText(
  slide90Content,
  [
    { text: "💻 Tệp thực hành Demo:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• File Python: ", options: { bold: true } },
    { text: "demo_5_4_fpgrowth.py / .ipynb\n\n" },
    { text: "• Thư viện: ", options: { bold: true } },
    { text: "pandas, mlxtend.frequent_patterns (fpgrowth, apriori, association_rules)\n\n" },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "So sánh trực tiếp kết quả & hiệu năng giữa fpgrowth() và apriori() trên cùng một tập dữ liệu." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide90Content,
  [
    { text: "🔄 4 Mục tiêu Thử nghiệm:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "1. Tìm frequent itemset bằng fpgrowth().\n\n" },
    { text: "2. Kiểm tra tính đồng nhất của kết quả giữa Apriori & FP-Growth.\n\n" },
    { text: "3. Đo thời gian thực thi (perf_counter) của hai thuật toán.\n\n" },
    { text: "4. Sinh luật kết hợp và lọc theo minconf & lift > 1." }
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
  slide90Content,
  "💡 Trọng tâm: FP-Growth và Apriori bắt buộc trả về cùng tập Frequent Itemset hoàn chỉnh khi đặt cùng ngưỡng support!",
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
// Slide 91 — CONTENT (Chuẩn bị dữ liệu và khai phá)
// ----------------------------------------------------
const slide91Content = pptx.addSlide({ masterName: "CONTENT" });
slide91Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide91Content.addText("CHUẨN BỊ DỮ LIỆU VÀ KHAI PHÁ", { placeholder: "title" });

addText(
  slide91Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_4_fpgrowth.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Thao tác Khai phá chính:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Hàm khai phá: `mlxtend.frequent_patterns.fpgrowth()`\n\n" },
    { text: "• Đo thời gian thực thi: `time.perf_counter()`\n\n" },
    { text: "• So sánh trực tiếp với `apriori()` trên cùng ma trận giỏ hàng One-hot 0/1.\n\n" },
    { text: "🎯 Mục tiêu: ", options: { bold: true } },
    { text: "Đánh giá tốc độ duyệt cây FP-tree so với quét Candidate." }
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
    line: { color: DUE_COLORS.green, width: 2 },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide91Content,
  [
    { text: "📋 Cấu trúc cú pháp fpgrowth():\n\n", options: { bold: true, fontSize: 13 } },
    { text: "• `fpgrowth(df, min_support, use_colnames=True)`\n\n" },
    { text: "• Nhận đầu vào là Ma trận Boolean/One-hot tương tự như Apriori.\n\n" },
    { text: "• Trả về DataFrame gồm 2 cột: `support` và `itemsets` (kiểu frozenset).\n\n" },
    { text: "• Hoàn toàn tương thích với hàm `association_rules()` ở bước tiếp theo!" }
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
  slide91Content,
  "💡 Tính nhất quán: Nhờ cùng cấu trúc đầu ra, lập trình viên có thể thay thế apriori() bằng fpgrowth() chỉ trong 1 dòng code!",
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
// Slide 92 — CONTENT (Kiểm tra kết quả và thời gian)
// ----------------------------------------------------
const slide92Content = pptx.addSlide({ masterName: "CONTENT" });
slide92Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide92Content.addText("KIỂM TRA KẾT QUẢ VÀ THỜI GIAN", { placeholder: "title" });

slide92Content.addTable(
  [
    [
      { text: "Tiêu chí kiểm tra", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết quả Apriori", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Kết quả FP-Growth", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Đánh giá sự đồng nhất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Số Frequent Itemsets", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "13 itemsets", options: { fill: { color: "FFFFFF" } } }, { text: "13 itemsets", options: { fill: { color: "FFFFFF" } } }, { text: "✅ ĐỒNG NHẤT 100%", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Danh sách Itemsets", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Giống nhau", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Giống nhau", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "✅ GIỐNG NHAU HOÀN TOÀN", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "Giá trị Support tương ứng", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Chính xác", options: { fill: { color: "FFFFFF" } } }, { text: "Chính xác", options: { fill: { color: "FFFFFF" } } }, { text: "✅ KHÔNG SAI LỆCH", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "Thời gian thực thi (CSDL lớn)", options: { bold: true, color: DUE_COLORS.orange, fill: { color: DUE_COLORS.lightBg } } }, { text: "Chậm hơn (Chờ đếm Cₖ)", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "Vượt trội (Duyệt cây)", options: { fill: { color: DUE_COLORS.lightBg } } }, { text: "⚡ FP-Growth nhanh hơn nhiều", options: { fill: { color: DUE_COLORS.lightBg } } }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(5.5), cmToInch(5.5), cmToInch(5.5), cmToInch(7.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide92Content,
  "💡 Cảnh báo sư phạm: Với CSDL mẫu 9 hóa đơn quá nhỏ, thời gian chạy có thể chênh lệch không đáng kể. Lợi thế FP-Growth chỉ bùng nổ khi CSDL lớn!",
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
// Slide 93 — CONTENT (Sinh và lọc luật kết hợp)
// ----------------------------------------------------
const slide93Content = pptx.addSlide({ masterName: "CONTENT" });
slide93Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide93Content.addText("SINH VÀ LỌC LUẬT KẾT HỢP", { placeholder: "title" });

addText(
  slide93Content,
  [
    { text: "📁 File thực thi: ", options: { bold: true, fontSize: 13 } },
    { text: "demo_5_4_fpgrowth.py\n\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "⚙️ Sinh Luật từ Kết quả FP-Growth:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Hàm: `association_rules(freq_fpgrowth, metric='confidence', min_threshold=0.70)`\n\n" },
    { text: "• Lọc nâng cao:\n" },
    { text: "  `rules[(rules['confidence'] >= 0.70) & (rules['lift'] > 1)]`\n\n" },
    { text: "• Sắp xếp theo thứ tự ưu tiên:\n" },
    { text: "  `sort_values(by=['lift', 'confidence'], ascending=False)`" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

slide93Content.addTable(
  [
    [
      { text: "Chỉ số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa bản chất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "support", options: { bold: true, fill: { color: "FFFFFF" } } }, { text: "Tỷ lệ giao dịch chứa đồng thời vế trái và vế phải", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "confidence", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Xác suất xuất hiện vế phải khi đã có vế trái P(Y|X)", options: { fill: { color: DUE_COLORS.lightBg } } }],
    [{ text: "lift > 1", options: { bold: true, color: DUE_COLORS.orange, fill: { color: "FFFFFF" } } }, { text: "Liên kết dương thực sự (vượt mức xuất hiện nền)", options: { fill: { color: "FFFFFF" } } }],
    [{ text: "lift = 1", options: { bold: true, fill: { color: DUE_COLORS.lightBg } } }, { text: "Độc lập ngẫu nhiên (Không có giá trị bán kèm)", options: { fill: { color: DUE_COLORS.lightBg } } }],
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
  slide93Content,
  "💡 Nhắc lại: Một luật có confidence 100% vẫn có thể vô ích nếu vế phải Y vốn đã xuất hiện nền ở 100% giao dịch. Phải xem Lift!",
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
// Slide 94 — CONTENT (Bài tập ứng dụng)
// ----------------------------------------------------
const slide94Content = pptx.addSlide({ masterName: "CONTENT" });
slide94Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide94Content.addText("BÀI TẬP ỨNG DỤNG", { placeholder: "title" });

addText(
  slide94Content,
  [
    { text: "📝 Nhiệm vụ Thực hành Sinh viên:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "1. Chạy apriori() và fpgrowth() trên cùng tập dữ liệu.\n\n" },
    { text: "2. So sánh số lượng và kiểm tra tính đồng nhất của Frequent Itemsets.\n\n" },
    { text: "3. Đo thời gian thực thi của từng thuật toán.\n\n" },
    { text: "4. Sinh luật và lọc theo confidence ≥ 70% và lift > 1." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide94Content,
  [
    { text: "❓ Câu hỏi Phân tích Trả lời:\n\n", options: { bold: true, fontSize: 13 } },
    { text: "“Vì sao Apriori và FP-Growth phải trả về CÙNG tập Frequent Itemsets, nhưng thời gian chạy lại KHÁC NHAU?”\n\n" },
    { text: "• Trả lời: ", options: { bold: true } },
    { text: "Cùng định nghĩa ngưỡng minsup ➔ Kết quả toán học phải giống hệt nhau.\n" },
    { text: "Thời gian khác nhau vì Apriori phải sinh-đếm ứng viên Cₖ từng mức, còn FP-Growth nén cây FP-tree và khai phá đệ quy." }
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
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide94Content,
  "💡 Thông điệp kết thúc phần 5.4: FP-Growth thay thế chiến lược 'Generate-and-Test' bằng 'Compress-and-Grow', giải quyết triệt để điểm nghẽn hiệu năng của Apriori!",
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
