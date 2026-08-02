import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 47: SECTION
// ----------------------------------------------------
const slide47Section = pptx.addSlide({ masterName: "SECTION" });
slide47Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide47Section, "title", "6.2.1. KHAI PHÁ DỮ LIỆU THỐNG KÊ");
addSectionText(slide47Section, "content", "Statistical Data Mining — Trường phái kỹ thuật lâu đời và minh bạch nhất");
addSectionText(slide47Section, "subContent", "\"Thống kê là 'tổ tiên' lâu đời nhất — và là bộ công cụ đáng tin cậy nhất khi cần giải thích và kiểm định.\"\n\n" +
  "Kho kỹ thuật Thống kê  |  Mô hình GLM & Survival  |  Cảnh giác với Dữ liệu lớn");

// ----------------------------------------------------
// Slide 48: CONTENT (KHAI PHÁ DỮ LIỆU VÀ THỐNG KÊ)
// ----------------------------------------------------
const slide48Content = pptx.addSlide({ masterName: "CONTENT" });
slide48Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide48Content.addText("KHAI PHÁ DỮ LIỆU VÀ THỐNG KÊ", { placeholder: "title" });

addText(
  slide48Content,
  [
    { text: "📊 Thống kê cổ điển vs Khai phá Dữ liệu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Thống kê cổ điển (Confirmatory):\n", options: { bold: true } },
    { text: "  Bắt đầu từ GIẢ THUYẾT ➔ Thu thập mẫu nhỏ thiết kế cẩn thận ➔ Kiểm định p-value.\n\n" },
    { text: "• Khai phá dữ liệu (Exploratory):\n", options: { bold: true } },
    { text: "  Bắt đầu từ DỮ LIỆU LỚN có sẵn ➔ Tìm mẫu chưa biết trước ➔ Kiểm chứng trên dữ liệu mới (Out-of-sample)." }
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
  slide48Content,
  [
    { text: "⚠️ 2 Cảnh giác Thống kê với Dữ liệu lớn:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "1. Tương quan giả (Spurious correlation):\n", options: { bold: true } },
    { text: "   Dữ liệu lớn dễ cho kết quả 'có ý nghĩa thống kê' nhưng VÔ NGHĨA thực tiễn.\n\n" },
    { text: "2. Data dredging (Bới dữ liệu):\n", options: { bold: true } },
    { text: "   Thử hàng nghìn biến = Kiểm định bội ➔ Dễ vơ phải nhiễu ngẫu nhiên." }
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
  slide48Content,
  "💡 Quan điểm Han & Kamber: Hai lĩnh vực bổ trợ nhau — Thống kê mạnh về mô hình chặt chẽ; KPDL mạnh về quy mô và tự động hóa.",
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

slide48Content.addNotes(
  "Gợi ý giảng viên: Nhắc lại ví dụ tương quan giả gây cười (tiêu thụ phô mai tương quan với số tiến sĩ ngành xây dựng)."
);

// ----------------------------------------------------
// Slide 49: CONTENT (KHO KỸ THUẬT THỐNG KÊ TRONG KHAI PHÁ 1/2)
// ----------------------------------------------------
const slide49Content = pptx.addSlide({ masterName: "CONTENT" });
slide49Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide49Content.addText("KHO KỸ THUẬT THỐNG KÊ (PHẦN 1)", { placeholder: "title" });

addTable(slide49Content, 
  [
    [
      { text: "Kỹ thuật Thống kê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nội dung phương pháp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ ứng dụng kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Hồi quy (Regression)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dự báo biến liên tục từ các biến giải thích; nền tảng của dự báo" },
      { text: "Dự báo doanh số theo chi phí quảng cáo, giá bán, mùa vụ" },
    ],
    [
      { text: "Mô hình GLM (Logistic, Poisson)", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Mở rộng hồi quy cho biến phụ thuộc nhị phân hoặc biến đếm" },
      { text: "Dự đoán xác suất vỡ nợ (logistic); số lần khiếu nại (Poisson)" },
    ],
    [
      { text: "Phân tích phương sai (ANOVA)", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "So sánh giá trị trung bình giữa nhiều nhóm; tách nguồn biến thiên" },
      { text: "Doanh số trung bình có khác biệt giữa 3 miền Bắc - Trung - Nam?" },
    ],
    [
      { text: "Mixed-effects Models", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dữ liệu phân cấp / lặp lại theo nhóm (khách hàng trong chi nhánh)" },
      { text: "Đánh giá hiệu quả chương trình khuyến mãi theo từng chi nhánh" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: 0, // hug content
    fontSize: 11.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide49Content,
  "💡 Định vị lại kiến thức: GLM Logistic chính là mô hình phân lớp nhị phân quen thuộc đã học ở Chương 4.",
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

slide49Content.addNotes(
  "Giảng viên ôn và định vị lại các công cụ hồi quy / ANOVA mà học viên đã học trong môn Kinh tế lượng."
);

// ----------------------------------------------------
// Slide 50: CONTENT (KHO KỸ THUẬT THỐNG KÊ TRONG KHAI PHÁ 2/2)
// ----------------------------------------------------
const slide50Content = pptx.addSlide({ masterName: "CONTENT" });
slide50Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide50Content.addText("KHO KỸ THUẬT THỐNG KÊ (PHẦN 2)", { placeholder: "title" });

addTable(slide50Content, 
  [
    [
      { text: "Kỹ thuật Thống kê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nội dung phương pháp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ ứng dụng kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Phân tích nhân tố (EFA)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Rút gọn nhiều biến quan sát về ít 'nhân tố ẩn' không quan sát được" },
      { text: "20 câu khảo sát Likert ➔ Rút về 3 nhân tố: Giá - Chất lượng - Dịch vụ" },
    ],
    [
      { text: "Discriminant Analysis", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Tìm tổ hợp biến tách biệt các nhóm — 'họ hàng thống kê' của Ch.4" },
      { text: "Phân loại doanh nghiệp khỏe vs nguy cơ phá sản (Z-score Altman)" },
    ],
    [
      { text: "Survival Analysis", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Mô hình hóa THỜI GIAN đến khi sự kiện xảy ra; xử lý dữ liệu censored" },
      { text: "Bao lâu nữa khách hàng rời mạng? Bao lâu khoản vay bị vỡ nợ?" },
    ],
    [
      { text: "Biểu đồ Kiểm soát (SPC)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Phát hiện quá trình vượt ngưỡng biến thiên ngẫu nhiên tự nhiên" },
      { text: "Giám sát tỷ lệ giao dịch lỗi / thất bại theo thời gian thực" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: 0, // hug content
    fontSize: 11.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide50Content,
  "💡 Giá trị của Survival Analysis: Giúp trả lời 'BAO LÂU NỮA sự kiện xảy ra?' thay vì chỉ 'CÓ xảy ra hay không?'.",
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

slide50Content.addNotes(
  "Gợi ý thảo luận: Bài toán Churn hỏi 'Có rời bỏ không?' vs 'Bao lâu nữa rời bỏ?' — câu nào đáng tiền hơn cho nhà quản lý?"
);

// ----------------------------------------------------
// Slide 51: CONTENT (ỨNG DỤNG THỰC TẾ THỐNG KÊ KPDL)
// ----------------------------------------------------
const slide51Content = pptx.addSlide({ masterName: "CONTENT" });
slide51Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide51Content.addText("ỨNG DỤNG THỰC TẾ THỐNG KÊ KPDL", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide51Content,
  [
    { text: "💳 Chấm điểm Tín dụng (Credit Scorecard):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Logistic Regression (GLM) là xương sống của mọi scorecard vì giải trình được từng hệ số — quy trình đầy đủ ở 6.3.1." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 2: Top-Right (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide51Content,
  [
    { text: "📉 Cảnh báo Phá sản (Z-score Altman):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phân tích phân biệt (Discriminant Analysis) trên các chỉ số tài chính sàng lọc rủi ro công ty niêm yết trên HOSE/HNX." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 3: Bottom-Left (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide51Content,
  [
    { text: "📊 Nghiên cứu Thị trường (EFA):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Các công ty market research dùng Phân tích nhân tố khám phá (EFA) rút gọn khảo sát Likert — tự động hóa bằng Python." }
  ],
  {
    x: cmToInch(0.8),
    y: 0, // trôi dưới thẻ cùng cột
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 4: Bottom-Right (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide51Content,
  [
    { text: "📞 Viễn thông & CLV (Survival Analysis):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Nhà mạng ước lượng thời gian sống của thuê bao trả sau để tính Giá trị Vòng đời (CLV) & gửi ưu đãi giữ chân." }
  ],
  {
    x: cmToInch(13.1),
    y: 0, // trôi dưới thẻ cùng cột
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Bottom Banner (Y = 10.0 cm, H = 1.9 cm)
addText(
  slide51Content,
  "💡 Thực tiễn Việt Nam: Thống kê vẫn là trường phái kỹ thuật thống trị trong tài chính, tín dụng và nghiên cứu thị trường.",
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

slide51Content.addNotes(
  "Hỏi học viên ai đã từng chạy EFA/Hồi quy trên SPSS trong luận văn, rồi nối sang khả năng tự động hóa của Python."
);

// ----------------------------------------------------
// Slide 52: CONTENT (BÀI TẬP 6.2.1: MÔ HÌNH GLM THẺ TÍN DỤNG)
// ----------------------------------------------------
const slide52Content = pptx.addSlide({ masterName: "CONTENT" });
slide52Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide52Content.addText("BÀI TẬP 6.2.1: MÔ HÌNH GLM THẺ TÍN DỤNG", { placeholder: "title" });

addText(
  slide52Content,
  [
    { text: "📝 Đề bài thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Câu 1: ", options: { bold: true } },
    { text: "Logistic `is_fraud ~ amt + category + giờ`; diễn giải Odds Ratio của `amt`.\n\n" },
    { text: "• Câu 2: ", options: { bold: true } },
    { text: "ANOVA: `amt` trung bình khác nhau giữa các `category` không?\n\n" },
    { text: "• Câu 3 (thảo luận): ", options: { bold: true } },
    { text: "Fraud chỉ ~0,5%, đoán 'tất cả bình thường' vẫn đạt 99,5% ➔ Accuracy còn ý nghĩa?\n\n" },
    { text: "• Câu 4 (thảo luận): ", options: { bold: true } },
    { text: "p < 0,05 trên 1,3 triệu dòng có nghĩa là biến đó quan trọng thực tiễn?" }
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
  slide52Content,
  [
    { text: "🎯 Gợi ý Giảng viên & Điểm chốt:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bài học từ Câu 3:\n", options: { bold: true } },
    { text: "  Với dữ liệu mất cân bằng nghiêm trọng, Accuracy vô nghĩa ➔ Phải nhìn Precision/Recall/F1.\n\n" },
    { text: "• Bài học từ Câu 4 (Điểm nhấn 6.2.1):\n", options: { bold: true } },
    { text: "  Khi n cực lớn, p-value gần như LUÔN nhỏ ➔ Phải đánh giá KÍCH THƯỚC HIỆU ỨNG (effect size) và giá trị kinh doanh.\n  Ý nghĩa Thống kê ≠ Ý nghĩa Thực tiễn!" }
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
  slide52Content,
  "💡 Điểm nhấn: ý nghĩa thống kê không đồng nghĩa ý nghĩa thực tiễn.",
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

slide52Content.addNotes(
  "Giảng viên giải thích bài học sâu sắc: Với n lớn, p-value luôn tiệm cận 0, phải nhìn vào Odds Ratio và Effect Size."
);

// ----------------------------------------------------
// Slide 53: CONTENT (TÓM TẮT 6.2.1: KPDL THỐNG KÊ)
// ----------------------------------------------------
const slide53Content = pptx.addSlide({ masterName: "CONTENT" });
slide53Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide53Content.addText("TÓM TẮT 6.2.1: KPDL THỐNG KÊ", { placeholder: "title" });

addText(
  slide53Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.2.1:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Quan hệ Thống kê & KPDL: ", options: { bold: true } },
    { text: "Bổ trợ lẫn nhau (Confirmatory vs Exploratory).\n\n" },
    { text: "• Kho vũ khí Thống kê: ", options: { bold: true } },
    { text: "Hồi quy, GLM (Logistic/Poisson), ANOVA, Phân tích nhân tố, Phân tích phân biệt, Survival Analysis.\n\n" },
    { text: "• 3 Cảnh giác Thống kê:\n", options: { bold: true } },
    { text: "  Tương quan giả · Data dredging · p-value trong dữ liệu lớn." }
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
  slide53Content,
  [
    { text: "🚀 Tiêu chí Lựa chọn & Chuyển giao 6.2.2:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Chọn Thống kê khi: ", options: { bold: true } },
    { text: "Cần giải trình pháp lý, suy diễn mô hình chặt chẽ, dữ liệu vừa phải.\n\n" },
    { text: "• Tiếp theo — Mục 6.2.2:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Lùi một bước triết học: Về bản chất, Khai phá dữ liệu LÀ gì? ➔ 5 quan điểm lý thuyết (Đặc biệt quan điểm Kinh tế vi mô)." }
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
  slide53Content,
  "💡 Bước tiếp theo: Chuyển sang 6.2.2 — Khám phá 5 quan điểm lý thuyết nền tảng của Khai phá dữ liệu.",
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

slide53Content.addNotes(
  "Tóm tắt 6.2.1 và dẫn dắt học viên chuyển sang mục 6.2.2 Nền tảng lý thuyết."
);
