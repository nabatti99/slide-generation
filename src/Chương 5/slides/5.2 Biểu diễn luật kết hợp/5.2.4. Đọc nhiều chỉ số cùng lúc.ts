import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 36 — CONTENT (Đọc nhiều chỉ số cùng lúc)
// ----------------------------------------------------
const slide36Content = pptx.addSlide({ masterName: "CONTENT" });
slide36Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide36Content.addText("ĐỌC NHIỀU CHỈ SỐ CÙNG LÚC", { placeholder: "title" });

slide36Content.addTable(
  [
    [
      { text: "Chỉ số", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Giá trị ví dụ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Cách đọc chuẩn xác", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Support", options: { bold: true } }, { text: "40.0%" }, { text: "40% tổng số hóa đơn chứa đồng thời Bánh mì, Sữa và Trứng." }],
    [{ text: "Confidence", options: { bold: true } }, { text: "66.7%" }, { text: "Trong các hóa đơn đã có Bánh mì và Sữa, 66.7% có thêm Trứng." }],
    [{ text: "Lift", options: { bold: true, color: DUE_COLORS.orange } }, { text: "1.11" }, { text: "Khả năng mua Trứng khi đã có Bánh mì và Sữa cao hơn mức nền 11%." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 11,
    colW: [cmToInch(4.5), cmToInch(4.0), cmToInch(15.3)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide36Content,
  "💡 Kết luận tổng hợp: Luật có độ bao phủ tương đối, confidence khá cao và liên kết dương; tuy nhiên lift = 1.11 cho thấy sức mạnh liên kết còn hạn chế.",
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
// Slide 37 — CONTENT (Bốn tình huống cần phân biệt)
// ----------------------------------------------------
const slide37Content = pptx.addSlide({ masterName: "CONTENT" });
slide37Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide37Content.addText("BỐN TÌNH HUỐNG CẦN PHÂN BIỆT", { placeholder: "title" });

slide37Content.addTable(
  [
    [
      { text: "Tình huống", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Support", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Confidence", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Lift", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Cách diễn giải & Hành động", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Phổ biến & Có liên kết", options: { bold: true, color: DUE_COLORS.green } }, { text: "Cao" }, { text: "Cao" }, { text: "> 1" }, { text: "Luật xuất sắc, phạm vi áp dụng rộng và liên kết dương; ưu tiên triển khai." }],
    [{ text: "Tin cậy nhưng không đặc biệt", options: { bold: true } }, { text: "Cao/TB" }, { text: "Cao" }, { text: "≈ 1" }, { text: "Y vốn quá phổ biến; vế trái X không thực sự thúc đẩy vế phải Y." }],
    [{ text: "Liên kết mạnh nhưng hiếm", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Thấp" }, { text: "Cao" }, { text: ">> 1" }, { text: "Phù hợp phân khúc ngách/rủi ro hiếm; cần xem thêm số đơn tuyệt đối." }],
    [{ text: "Hiểu nhầm (Liên kết âm)", options: { bold: true } }, { text: "Có thể cao" }, { text: "Có thể cao" }, { text: "< 1" }, { text: "Gây hiểu nhầm vì Y quá phổ biến nền; thực tế hai mục triệt tiêu nhau." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(5.5), cmToInch(2.8), cmToInch(3.0), cmToInch(2.5), cmToInch(10.0)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide37Content,
  "💡 Nhấn mạnh: Các luật vượt minsup và minconf vẫn có thể vô ích hoặc gây hiểu nhầm; Bổ sung Lift giúp loại bỏ hoàn toàn các lỗi tư duy này.",
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
// Slide 38 — CONTENT (Minh họa: Confidence cao, Lift thấp)
// ----------------------------------------------------
const slide38Content = pptx.addSlide({ masterName: "CONTENT" });
slide38Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide38Content.addText("MINH HỌA: CONFIDENCE CAO, LIFT THẤP", { placeholder: "title" });

slide38Content.addTable(
  [
    [
      { text: "Chỉ số / Đại lượng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giá trị thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nhận xét & Ý nghĩa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Tổng số hóa đơn N", options: { bold: true } }, { text: "10.000" }, { text: "Mẫu nghiên cứu quy mô vừa" }],
    [{ text: "Mua Trò chơi (X)", options: { bold: true } }, { text: "6.000" }, { text: "Support(X) = 60%" }],
    [{ text: "Mua Video (Y)", options: { bold: true } }, { text: "7.500" }, { text: "Support(Y) = 75% (Rất phổ biến nền!)" }],
    [{ text: "Mua cả Trò chơi & Video", options: { bold: true } }, { text: "4.000" }, { text: "Support(X ∪ Y) = 40%" }],
    [{ text: "Confidence (X → Y)", options: { bold: true } }, { text: "66.7%" }, { text: "4.000 / 6.000 (Có vẻ cao!)" }],
    [{ text: "Lift (X → Y)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "0.89" }, { text: "66.7% / 75% < 1 (Liên kết âm!)" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(7.0), cmToInch(4.0), cmToInch(12.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide38Content,
  "💡 Bài học kinh điển: Mặc dù Confidence đạt 66,7%, người mua Game thực ra lại mua Video ÍT HƠN mức nền của toàn bộ khách hàng (75%)! Không triển khai ưu đãi chéo này.",
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
// Slide 39 — CONTENT (Quy trình đánh giá một luật)
// ----------------------------------------------------
const slide39Content = pptx.addSlide({ masterName: "CONTENT" });
slide39Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide39Content.addText("QUY TRÌNH ĐÁNH GIÁ MỘT LUẬT", { placeholder: "title" });

const cardW39 = cmToInch(5.4);
const startX39 = cmToInch(0.8);
const gapX39 = cmToInch(0.7);
const cardY39 = cmToInch(2.0);

// B1: Support
addText(
  slide39Content,
  [
    { text: "B1: Support\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• So sánh với minsup.\n\n" },
    { text: "• Kiểm tra độ bao phủ & số đơn tuyệt đối.\n\n" },
    { text: "• Loại bỏ luật quá hiếm/nhiễu." }
  ],
  {
    x: startX39,
    y: cardY39,
    w: cardW39,
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// B2: Confidence
addText(
  slide39Content,
  [
    { text: "B2: Confidence\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• So sánh với minconf.\n\n" },
    { text: "• Đọc đúng P(Y|X) theo đúng hướng luật.\n\n" },
    { text: "• Đảm bảo độ tin cậy có điều kiện." }
  ],
  {
    x: startX39 + cardW39 + gapX39,
    y: cardY39,
    w: cardW39,
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// B3: Lift
addText(
  slide39Content,
  [
    { text: "B3: Lift\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bắt buộc Lift > 1.\n\n" },
    { text: "• Loại bỏ luật có Lift ≈ 1 (độc lập).\n\n" },
    { text: "• Cảnh giác với Lift < 1." }
  ],
  {
    x: startX39 + (cardW39 + gapX39) * 2,
    y: cardY39,
    w: cardW39,
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// B4: Quản trị
addText(
  slide39Content,
  [
    { text: "B4: Quản trị\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tính khả thi triển khai.\n\n" },
    { text: "• Lợi nhuận sau chi phí ưu đãi/vận hành.\n\n" },
    { text: "• Độ ổn định thực tế." }
  ],
  {
    x: startX39 + (cardW39 + gapX39) * 3,
    y: cardY39,
    w: cardW39,
    h: cmToInch(7.2),
    fontSize: 10.5,
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
  slide39Content,
  "💡 Thông điệp: Quy trình 4 bước giúp lọc bỏ hoàn toàn luật rác và chọn ra tri thức có thể hành động tạo lợi nhuận.",
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
// Slide 40 — CONTENT (Bài tập nhanh: Chọn luật đáng ưu tiên)
// ----------------------------------------------------
const slide40Content = pptx.addSlide({ masterName: "CONTENT" });
slide40Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide40Content.addText("BÀI TẬP NHANH: CHỌN LUẬT ĐÁNG ƯU TIÊN", { placeholder: "title" });

slide40Content.addTable(
  [
    [
      { text: "Luật ứng viên", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Support", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Conf", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lift", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Đánh giá ban đầu & Khuyến nghị", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "A: {Cà phê} → {Bánh ngọt}", options: { bold: true, color: DUE_COLORS.green } }, { text: "18%" }, { text: "72%" }, { text: "1.80" }, { text: "✅ Đạt cả 3 tiêu chí (minsup≥5%, minconf≥60%, lift>1). ƯU TIÊN TRIỂN KHAI BÁN KÈM!" }],
    [{ text: "B: {Bánh mì} → {Sữa}", options: { bold: true } }, { text: "35%" }, { text: "85%" }, { text: "1.02" }, { text: "Phổ biến nhưng Lift ≈ 1 (Liên kết dương rất yếu)." }],
    [{ text: "C: {Hữu cơ} → {Rượu vang}", options: { bold: true } }, { text: "2%" }, { text: "70%" }, { text: "2.50" }, { text: "Lift mạnh nhưng Support < 5%. Dành riêng phân khúc ngách." }],
    [{ text: "D: {Trò chơi} → {Video}", options: { bold: true } }, { text: "40%" }, { text: "66.7%" }, { text: "0.89" }, { text: "❌ Loại bỏ do Lift < 1 (Liên kết âm)." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(6.0), cmToInch(2.2), cmToInch(2.2), cmToInch(2.2), cmToInch(11.2)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide40Content,
  "💡 Đáp án: Luật A {Cà phê} → {Bánh ngọt} là lựa chọn tối ưu nhất để thử nghiệm bán kèm đại trà trên toàn hệ thống.",
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
