import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 67 — CONTENT (Ưu điểm và hạn chế của Apriori)
// ----------------------------------------------------
const slide67Content = pptx.addSlide({ masterName: "CONTENT" });
slide67Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide67Content.addText("ƯU ĐIỂM VÀ HẠN CHẾ CỦA APRIORI", { placeholder: "title" });

addText(
  slide67Content,
  [
    { text: "🌟 Apriori — Thuật toán Nền tảng:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Khai phá tập mục thường xuyên và luật kết hợp kinh điển.\n\n" },
    { text: "• Logic cực kỳ đơn giản, minh bạch và dễ giải thích cho nhà quản trị.\n\n" },
    { text: "• Sử dụng tính chất Apriori để cắt tỉa không gian tìm kiếm hiệu quả." }
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
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide67Content,
  [
    { text: "⚠️ Thách thức Hiệu năng Thực tế:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• Phải sinh số lượng ứng viên (Candidates) cực lớn khi minsup thấp.\n\n" },
    { text: "• Đỏi hỏi quét lại toàn bộ CSDL nhiều lần theo số mức k.\n\n" },
    { text: "• Chi phí tính toán bùng nổ trên CSDL quy mô lớn hoặc dữ liệu dày." }
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
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide67Content,
  "💡 Đặt vấn đề: Khi nào nên sử dụng Apriori và khi nào cần chuyển sang các thuật toán cải tiến như FP-Growth?",
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
// Slide 68 — CONTENT (Ưu điểm của Apriori)
// ----------------------------------------------------
const slide68Content = pptx.addSlide({ masterName: "CONTENT" });
slide68Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide68Content.addText("ƯU ĐIỂM CỦA APRIORI", { placeholder: "title" });

const cardW68 = cmToInch(5.4);
const startX68 = cmToInch(0.8);
const gapX68 = cmToInch(0.7);
const cardY68 = cmToInch(2.0);

// Ưu điểm 1
addText(
  slide68Content,
  [
    { text: "📖 1. Đơn giản & Dễ triển khai\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Logic minh bạch:\n  Sinh ➔ Tỉa ➔ Đếm.\n\n" },
    { text: "• Phù hợp giảng dạy & thử nghiệm dữ liệu vừa." }
  ],
  {
    x: startX68,
    y: cardY68,
    w: cardW68,
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

// Ưu điểm 2
addText(
  slide68Content,
  [
    { text: "✂️ 2. Cắt tỉa Tìm kiếm\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Loại bỏ sớm ứng viên không khả thi.\n\n" },
    { text: "• Tập con không thường xuyên ➔ Tỉa sạch tập cha!" }
  ],
  {
    x: startX68 + cardW68 + gapX68,
    y: cardY68,
    w: cardW68,
    h: cmToInch(7.2),
    fontSize: 10.5,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Ưu điểm 3
addText(
  slide68Content,
  [
    { text: "🔍 3. Dễ diễn giải QTKD\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Mỗi luật đi kèm Support, Conf rõ ràng.\n\n" },
    { text: "• Trực tiếp giải thích cho nhà quản trị." }
  ],
  {
    x: startX68 + (cardW68 + gapX68) * 2,
    y: cardY68,
    w: cardW68,
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

// Ưu điểm 4
addText(
  slide68Content,
  [
    { text: "🚀 4. Nền tảng Cải tiến\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Cơ sở cho Hashing, Partitioning, Sampling.\n\n" },
    { text: "• Bước đệm học FP-Growth & ECLAT." }
  ],
  {
    x: startX68 + (cardW68 + gapX68) * 3,
    y: cardY68,
    w: cardW68,
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
  slide68Content,
  "💡 Điểm mạnh cốt lõi: Đơn giản, minh bạch và có cơ chế cắt tỉa dựa trên toán học vững chắc.",
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
// Slide 69 — CONTENT (Hạn chế của Apriori)
// ----------------------------------------------------
const slide69Content = pptx.addSlide({ masterName: "CONTENT" });
slide69Content.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide69Content.addText("HẠN CHẾ CỦA APRIORI", { placeholder: "title" });

slide69Content.addTable(
  [
    [
      { text: "Hạn chế kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nguyên nhân & Hệ quả tính toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [{ text: "1. Bùng nổ số ứng viên Cₖ", options: { bold: true } }, { text: "Nếu có 10.000 frequent 1-itemsets ➔ C₂ có tới 49.995.000 ứng viên cặp! Tốn RAM khủng khiếp." }],
    [{ text: "2. Quét CSDL nhiều lần", options: { bold: true } }, { text: "Mỗi mức k đòi hỏi quét lại toàn bộ đĩa cứng CSDL để đếm support count ➔ Chi phí I/O cực cao." }],
    [{ text: "3. Kém hiệu quả khi minsup thấp", options: { bold: true } }, { text: "minsup hạ thấp làm số lượng frequent itemset tăng vọt ➔ Candidate generation bị quá tải." }],
    [{ text: "4. Nhạy cảm với Dữ liệu dày (Dense)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Giao dịch chứa nhiều mục dài làm số tập mục con bùng nổ theo cấp số nhân." }],
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
  slide69Content,
  "💡 Nhược điểm cốt lõi: Chiến lược “Generate-and-Test” bắt buộc sinh và đếm hàng triệu ứng viên ➔ Động lực ra đời của FP-Growth!",
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
