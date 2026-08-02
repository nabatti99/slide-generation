import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 43: SECTION
// ----------------------------------------------------
const slide43Section = pptx.addSlide({ masterName: "SECTION" });
slide43Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide43Section, "title", "6.2. HƯỚNG KỸ THUẬT");
addSectionText(slide43Section, "content", "Các phương pháp luận khai phá dữ liệu (Other Methodologies of Data Mining)");
addSectionText(slide43Section, "subContent", "\"Mục 6.1 trả lời khai phá CÁI GÌ? — Mục 6.2 trả lời khai phá BẰNG GÌ?\"\n\n" +
  "Thống kê cổ điển  |  Nền tảng lý thuyết  |  Trực quan hóa  |  Học máy & Học sâu");

// ----------------------------------------------------
// Slide 44: CONTENT (HƯỚNG KỸ THUẬT VÀ MỤC TIÊU HỌC TẬP)
// ----------------------------------------------------
const slide44Content = pptx.addSlide({ masterName: "CONTENT" });
slide44Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide44Content.addText("HƯỚNG KỸ THUẬT VÀ MỤC TIÊU HỌC TẬP", { placeholder: "title" });

addText(
  slide44Content,
  [
    { text: "🤝 Lĩnh vực Giao thoa Đa ngành:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Giao thoa 4 cộng đồng: ", options: { bold: true } },
    { text: "Thống kê ∩ Học máy ∩ Cơ sở dữ liệu ∩ Trực quan hóa.\n\n" },
    { text: "• Mỗi cộng đồng mang góc nhìn riêng: ", options: { bold: true } },
    { text: "Định nghĩa 'thế nào là khai phá tốt' khác nhau giữa suy diễn toán học và hiệu năng tính toán." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide44Content,
  [
    { text: "💡 Hệ quả Thực tế & Lợi ích Kinh tế:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Hệ quả trong doanh nghiệp:\n", options: { bold: true } },
    { text: "  Cùng 1 bài toán, Nhà thống kê, Kỹ sư ML và Chuyên viên BI sẽ đề xuất 3 lời giải khác nhau.\n\n" },
    { text: "• Lợi ích với Nhà quản lý:\n", options: { bold: true } },
    { text: "  - Chọn đúng công cụ cho từng bối cảnh nghiệp vụ.\n  - Đối thoại hiệu quả với từng đội ngũ kỹ thuật chuyên biệt." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide44Content,
  "💡 Mục tiêu: Giúp nhà quản lý chọn đúng trường phái kỹ thuật và đối thoại hiệu quả với từng đội ngũ chuyên gia.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide44Content.addNotes(
  "Giảng viên vẽ sơ đồ Venn 4 đường tròn giao nhau đại diện cho Data Mining."
);

// ----------------------------------------------------
// Slide 45: CONTENT (CÂU HỎI: 3 CHUYÊN GIA, 1 BÀI TOÁN)
// ----------------------------------------------------
const slide45Content = pptx.addSlide({ masterName: "CONTENT" });
slide45Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide45Content.addText("CÂU HỎI: 3 CHUYÊN GIA, 1 BÀI TOÁN", { placeholder: "title" });

addText(
  slide45Content,
  [
    { text: "🔍 Bài toán Dự đoán Khách hàng Rời bỏ (Churn):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nhà Thống kê: ", options: { bold: true } },
    { text: "Hồi quy Logistic, đọc Odds Ratio ➔ Ưu tiên suy diễn & giải thích.\n\n" },
    { text: "• Kỹ sư Học máy: ", options: { bold: true } },
    { text: "Random Forest, XGBoost, Cross-validation ➔ Ưu tiên độ chính xác dự báo.\n\n" },
    { text: "• Chuyên gia Trực quan: ", options: { bold: true } },
    { text: "Vẽ Dashboard phân bố ➔ Ưu tiên phát hiện mẫu bằng mắt." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide45Content,
  [
    { text: "❓ Thảo luận Nghiệp vụ Ngân hàng:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Ngân hàng cần mô hình Chấm điểm tín dụng phải GIẢI TRÌNH ĐƯỢC với cơ quan giám sát — anh/chị chọn trường phái nào? Vì sao?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Gợi ý trả lời:\n", options: { bold: true } },
    { text: "  Ưu tiên mô hình Thống kê (GLM Logistic) dù có thể kém vài điểm accuracy so với ML hộp đen, vì đáp ứng nghĩa vụ pháp lý." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide45Content,
  "💡 Bài học nghiệp vụ: Tiêu chí chọn kỹ thuật = Độ chính xác + Khả năng giải trình + Chi phí + Quy định pháp lý.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide45Content.addNotes(
  "Gợi ý giảng viên: Không trường phái nào đúng nhất tuyệt đối; dự án thực tế cần cả 3 theo từng giai đoạn."
);

// ----------------------------------------------------
// Slide 46: CONTENT (LỘ TRÌNH MỤC 6.2 — HƯỚNG KỸ THUẬT)
// ----------------------------------------------------
const slide46Content = pptx.addSlide({ masterName: "CONTENT" });
slide46Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide46Content.addText("LỘ TRÌNH MỤC 6.2 — HƯỚNG KỸ THUẬT", { placeholder: "title" });

addText(
  slide46Content,
  [
    { text: "📚 6.2.1 Thống kê & 6.2.2 Nền tảng Lý thuyết:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 6.2.1 Khai phá dữ liệu Thống kê: ", options: { bold: true } },
    { text: "Kho vũ khí thống kê cổ điển (Hồi quy, GLM, ANOVA, Factor Analysis, Survival Analysis).\n\n" },
    { text: "• 6.2.2 Nền tảng Lý thuyết: ", options: { bold: true } },
    { text: "5 quan điểm bản chất — nhấn mạnh góc nhìn Kinh tế Vi mô (Mẫu phải sinh lợi)." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide46Content,
  [
    { text: "👁️ 6.2.3 Trực quan & 6.2.4 Học máy / Học sâu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 6.2.3 Trực quan & Âm thanh: ", options: { bold: true } },
    { text: "Dùng thị giác con người như một 'thuật toán' khám phá (Visual Data Mining).\n\n" },
    { text: "• 6.2.4 Học máy & Học sâu hiện đại: ", options: { bold: true } },
    { text: "Tích hợp Deep Learning & AI hiện đại vào tài chính, marketing." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide46Content,
  "💡 Định hướng: Khám phá 4 trường phái kỹ thuật để làm chủ kho công cụ khai phá dữ liệu hiện đại.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide46Content.addNotes(
  "Giảng viên giới thiệu 4 trạm dừng của mục 6.2 Hướng kỹ thuật."
);
