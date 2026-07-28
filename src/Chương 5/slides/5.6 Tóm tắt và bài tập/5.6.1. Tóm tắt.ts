import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 137 — SECTION (5.6. TÓM TẮT VÀ BÀI TẬP)
// ----------------------------------------------------
const slide137Section = pptx.addSlide({ masterName: "SECTION" });
slide137Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide137Section.addText("5.6. TÓM TẮT VÀ BÀI TẬP", { placeholder: "title" });
slide137Section.addText(
  "Tổng kết toàn bộ kiến thức chương Khai phá luật kết hợp và hướng dẫn bài tập lớn thực hành cuối chương",
  { placeholder: "content" }
);
slide137Section.addText(
  "Trọng tâm: Chuẩn bị dữ liệu giao dịch ➔ Tìm Frequent Itemsets ➔ Sinh luật kết hợp ➔ Đánh giá tính ổn định ngoài mẫu ➔ Diễn giải giá trị nghiệp vụ.",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 138 — CONTENT (Mục tiêu cốt lõi)
// ----------------------------------------------------
const slide138Content = pptx.addSlide({ masterName: "CONTENT" });
slide138Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide138Content.addText("MỤC TIÊU CỐT LÕI", { placeholder: "title" });

slide138Content.addTable(
  [
    [
      { text: "Mục tiêu bài học đã đạt được", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa và Ứng dụng Quản trị", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Hệ thống hóa quy trình", options: { bold: true } }, { text: "Chuyển dữ liệu giao dịch thô sang luật có khả năng diễn giải hành động." }],
    [{ text: "2. Định dạng dữ liệu giỏ hàng", options: { bold: true } }, { text: "Biến đổi thành ma trận 0/1 One-hot hoặc danh sách giỏ hàng chuẩn." }],
    [{ text: "3. Áp dụng Thuật toán", options: { bold: true } }, { text: "Thành thạo Apriori (Generate-and-Test) và FP-Growth (Compress-and-Grow)." }],
    [{ text: "4. Đánh giá đa chiều", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Đánh giá bằng Support, Confidence, Lift; tuyệt đối không chỉ xem Confidence." }],
    [{ text: "5. Kiểm định ngoài mẫu", options: { bold: true } }, { text: "Chia mốc thời gian Train/Test để loại bỏ luật rác và thử nghiệm A/B Testing." }],
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
  slide138Content,
  "💡 Ý nghĩa: Kiến thức và dữ liệu chuẩn bị trong Chương 5 là nền tảng cốt lõi cho các mô hình phân tích nâng cao tiếp theo.",
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
// Slide 139 — CONTENT (Tóm tắt chương)
// ----------------------------------------------------
const slide139Content = pptx.addSlide({ masterName: "CONTENT" });
slide139Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide139Content.addText("TÓM TẮT CHƯƠNG", { placeholder: "title" });

slide139Content.addTable(
  [
    [
      { text: "Bước quy trình", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nội dung thực hiện cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Định nghĩa Transaction & Item", options: { bold: true } }, { text: "Xác định rõ đơn vị giao dịch và các mục theo đúng câu hỏi nghiệp vụ." }],
    [{ text: "2. Chuẩn bị Dữ liệu", options: { bold: true } }, { text: "Biến đổi dữ liệu sang định dạng danh sách giỏ hàng hoặc ma trận One-hot 0/1." }],
    [{ text: "3. Tìm Frequent Itemsets", options: { bold: true } }, { text: "Khai phá các tập phổ biến đạt ngưỡng minimum support (minsup)." }],
    [{ text: "4. Sinh Luật Kết hợp", options: { bold: true } }, { text: "Sinh các luật X → Y thỏa mãn ngưỡng minimum confidence (minconf)." }],
    [{ text: "5. Đánh giá & Kiểm định", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Lọc luật bằng Lift > 1, loại luật rác và kiểm định độ ổn định ngoài mẫu Test." }],
    [{ text: "6. Triển khai Quản trị", options: { bold: true } }, { text: "Chuyển luật thành hành động combo, gợi ý mua kèm và thử nghiệm A/B Testing." }],
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
  slide139Content,
  "💡 Công thức chung: Luật kết hợp biểu diễn dạng X → Y (vế trái X kéo theo vế phải Y) với bản chất xác suất có điều kiện P(Y|X).",
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
// Slide 140 — CONTENT (Điểm cần nhớ: Apriori vs FP-Growth)
// ----------------------------------------------------
const slide140Content = pptx.addSlide({ masterName: "CONTENT" });
slide140Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide140Content.addText("ĐIỂM CẦN NHỚ: APRIORI VS FP-GROWTH", { placeholder: "title" });

slide140Content.addTable(
  [
    [
      { text: "Tiêu chí", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giải thuật Apriori", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giải thuật FP-Growth", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Cách tiếp cận", options: { bold: true } }, { text: "Sinh candidate itemsets Cₖ từng mức k" }, { text: "Phát triển pattern trên cấu trúc cây FP-tree" }],
    [{ text: "Cơ chế chính", options: { bold: true } }, { text: "Join Lₖ₋₁ và Prune ứng viên" }, { text: "Nén giao dịch vào FP-tree và khai phá đệ quy" }],
    [{ text: "Cắt tỉa", options: { bold: true } }, { text: "Tính chất Apriori (Tập con không phổ biến)" }, { text: "Conditional pattern base & Conditional FP-tree" }],
    [{ text: "Đánh giá hiệu năng", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Dễ hiểu, nhưng bùng nổ candidate trên dữ liệu lớn" }, { text: "Không sinh candidate, quét CSDL gốc đúng 2 lần" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(4.5), cmToInch(9.65), cmToInch(9.65)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide140Content,
  "💡 Tính chất Apriori cốt lõi: Mọi tập con không rỗng của một Frequent Itemset BẮT BUỘC phải là Frequent Itemset!",
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
// Slide 141 — CONTENT (Đánh giá luật: Support, Confidence, Lift)
// ----------------------------------------------------
const slide141Content = pptx.addSlide({ masterName: "CONTENT" });
slide141Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide141Content.addText("ĐÁNH GIÁ LUẬT: SUPPORT, CONFIDENCE, LIFT", { placeholder: "title" });

slide141Content.addTable(
  [
    [
      { text: "Chỉ số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ý nghĩa bản chất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi diễn giải nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true } }, { text: "Tỷ lệ giao dịch chứa đồng thời X và Y: P(X ∩ Y)" }, { text: "Luật xuất hiện nhiều và phổ biến đến đâu?" }],
    [{ text: "Confidence", options: { bold: true } }, { text: "Xác suất xuất hiện Y khi đã có X: P(Y|X)" }, { text: "Khi có X, khả năng mua thêm Y là bao nhiêu?" }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange } }, { text: "So sánh Confidence với xác suất nền P(Y): Conf/P(Y)" }, { text: "X có thực sự làm Y xuất hiện nhiều hơn mức thông thường?" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(3.5), cmToInch(10.0), cmToInch(10.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide141Content,
  "💡 Diễn giải Lift: Lift > 1 (Liên kết dương thực sự); Lift = 1 (Độc lập ngẫu nhiên); Lift < 1 (Liên kết âm - Không khuyến mãi!).",
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
