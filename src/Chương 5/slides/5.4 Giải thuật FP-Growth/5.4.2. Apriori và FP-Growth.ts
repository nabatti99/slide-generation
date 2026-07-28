import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 86 — CONTENT (Apriori và FP-Growth)
// ----------------------------------------------------
const slide86Content = pptx.addSlide({ masterName: "CONTENT" });
slide86Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide86Content.addText("APRIORI VÀ FP-GROWTH", { placeholder: "title" });

slide86Content.addTable(
  [
    [
      { text: "Tiêu chí so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giải thuật Apriori", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Giải thuật FP-Growth", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "Ý tưởng chính", options: { bold: true } }, { text: "Sinh ứng viên Cₖ rồi quét đếm Support" }, { text: "Nén CSDL vào FP-Tree rồi tăng trưởng mẫu" }],
    [{ text: "Chiến lược cốt lõi", options: { bold: true } }, { text: "Generate-and-Test (Chiều rộng)" }, { text: "Compress-and-Grow (Chiều sâu)" }],
    [{ text: "Candidate Itemsets", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Sinh hàng loạt C₁, C₂, ..., Cₖ" }, { text: "❌ KHÔNG sinh Candidate Itemset" }],
    [{ text: "Quét CSDL gốc", options: { bold: true } }, { text: "Nhiều lượt quét (1 lượt cho mỗi mức k)" }, { text: "Chỉ đúng 2 lượt quét chính để xây cây" }],
    [{ text: "Điểm nghẽn kỹ thuật", options: { bold: true } }, { text: "Bùng nổ tổ hợp ứng viên & Chi phí I/O" }, { text: "FP-Tree phình to khi tiền tố kém nén" }],
    [{ text: "Môi trường phù hợp", options: { bold: true } }, { text: "Dữ liệu nhỏ/vừa, minh họa giảng dạy" }, { text: "Dữ liệu lớn, minsup thấp, mẫu dài" }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10,
    colW: [cmToInch(5.0), cmToInch(9.4), cmToInch(9.4)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide86Content,
  "💡 Thông điệp: Apriori mở rộng không gian rồi mới cắt tỉa; FP-Growth nén dữ liệu trước rồi chỉ khai phá các nhánh liên quan.",
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
// Slide 87 — CONTENT (Khi nào chọn thuật toán nào?)
// ----------------------------------------------------
const slide87Content = pptx.addSlide({ masterName: "CONTENT" });
slide87Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide87Content.addText("KHI NÀO CHỌN THUẬT TOÁN NÀO?", { placeholder: "title" });

slide87Content.addTable(
  [
    [
      { text: "Bối cảnh phân tích thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lựa chọn ưu tiên", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
      { text: "Lý do kỹ thuật & Quản trị", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    ],
    [{ text: "Giảng dạy, minh họa nguyên lý luật kết hợp", options: { bold: true } }, { text: "Apriori" }, { text: "Quy trình sinh - tỉa - đếm trực quan, dễ hiểu từng bước." }],
    [{ text: "CSDL giao dịch nhỏ hoặc trung bình", options: { bold: true } }, { text: "Apriori" }, { text: "Đơn giản để cài đặt, kiểm thử và giải thích." }],
    [{ text: "CSDL lớn có nhiều frequent 1-itemset", options: { bold: true } }, { text: "FP-Growth" }, { text: "Tránh sinh hàng chục triệu candidate 2-itemsets." }],
    [{ text: "Đặt ngưỡng minsup thấp (khám phá mẫu hiếm)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "FP-Growth" }, { text: "Tránh bùng nổ tổ hợp ứng viên bị nén trong RAM." }],
    [{ text: "CSDL có nhiều giỏ hàng chứa sản phẩm tương tự", options: { bold: true } }, { text: "FP-Growth" }, { text: "FP-Tree nén cực tốt các tiền tố chung." }],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.2),
    fontSize: 10.5,
    colW: [cmToInch(8.5), cmToInch(3.5), cmToInch(11.8)],
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide87Content,
  "💡 Quy tắc vàng: Apriori phù hợp để hiểu nguyên lý bài toán; FP-Growth vượt trội khi dữ liệu lớn và minsup hạ thấp.",
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
// Slide 88 — CONTENT (Bài học rút ra)
// ----------------------------------------------------
const slide88Content = pptx.addSlide({ masterName: "CONTENT" });
slide88Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide88Content.addText("BÀI HỌC RÚT RA", { placeholder: "title" });

const cardW88 = cmToInch(7.5);
const startX88 = cmToInch(0.8);
const gapX88 = cmToInch(0.65);
const cardY88 = cmToInch(2.0);

// Ý 1
addText(
  slide88Content,
  [
    { text: "1. Bản chất Apriori\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Sử dụng tính chất tập con để cắt tỉa.\n\n" },
    { text: "• Vẫn phải sinh và đếm Candidate Itemsets từng mức." }
  ],
  {
    x: startX88,
    y: cardY88,
    w: cardW88,
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

// Ý 2
addText(
  slide88Content,
  [
    { text: "2. Đột phá FP-Growth\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thay thế hoàn toàn bước sinh Candidate.\n\n" },
    { text: "• Nén CSDL vào FP-Tree và khai phá đệ quy." }
  ],
  {
    x: startX88 + cardW88 + gapX88,
    y: cardY88,
    w: cardW88,
    h: cmToInch(7.2),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Ý 3
addText(
  slide88Content,
  [
    { text: "3. Giá trị QTKD\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Kết quả Frequent Itemsets chỉ là bước đầu.\n\n" },
    { text: "• Bắt buộc đánh giá luật bằng Support, Conf, Lift & Bài toán kinh doanh." }
  ],
  {
    x: startX88 + (cardW88 + gapX88) * 2,
    y: cardY88,
    w: cardW88,
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
  slide88Content,
  "💡 Thông điệp cốt lõi: Thuật toán hiệu quả giúp tìm mẫu nhanh hơn; Giá trị kinh doanh chỉ xuất hiện khi diễn giải đúng bối cảnh!",
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
