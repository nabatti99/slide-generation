import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 80: SECTION
// ----------------------------------------------------
const slide80Section = pptx.addSlide({ masterName: "SECTION" });
slide80Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide80Section.addText("6.3.1. KHAI PHÁ DỮ LIỆU TRONG PHÂN TÍCH TÀI CHÍNH", { placeholder: "title" });
slide80Section.addText("Data Mining for Financial Data Analysis — Lĩnh vực ứng dụng chuẩn mực và giàu có nhất", { placeholder: "content" });
slide80Section.addText(
  "\"Ngân hàng là 'phòng thí nghiệm' lý tưởng: dữ liệu đầy đủ, đáng tin cậy — và mỗi quyết định đều quy được ra tiền.\"\n\n" +
  "Kho dữ liệu đa chiều  |  Chấm điểm tín dụng (Credit Scoring)  |  Phân khúc RFM  |  Chống rửa tiền (AML)",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 81: CONTENT (DỮ LIỆU TÀI CHÍNH & 4 NHÓM ỨNG DỤNG)
// ----------------------------------------------------
const slide81Content = pptx.addSlide({ masterName: "CONTENT" });
slide81Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide81Content.addText("DỮ LIỆU TÀI CHÍNH & 4 NHÓM ỨNG DỤNG", { placeholder: "title" });

addText(
  slide81Content,
  [
    { text: "🏦 Đặc điểm Dữ liệu Tài chính:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Đa dạng dịch vụ: ", options: { bold: true } },
    { text: "Tiền gửi, tín dụng vay kinh doanh / mua nhà / thẻ, bảo hiểm, chứng khoán.\n\n" },
    { text: "• Lợi thế vượt trội: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Dữ liệu tương đối ĐẦY ĐỦ, ĐÁNG TIN CỦA và CHẤT LƯỢNG CAO hơn nhiều so với MXH/Khảo sát ➔ Mảnh đất vàng cho KPDL hệ thống." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide81Content,
  [
    { text: "📋 4 Nhóm Ứng dụng Kinh điển (Han & Kamber):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Kho dữ liệu đa chiều (Data Warehouse & OLAP) phục vụ báo cáo.\n" },
    { text: "2. Dự đoán trả nợ & Chính sách tín dụng (Credit Scoring).\n" },
    { text: "3. Phân lớp & Phân cụm khách hàng cho Marketing mục tiêu.\n" },
    { text: "4. Phát hiện rửa tiền (AML) & Tội phạm tài chính." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide81Content,
  "💡 Nối tình huống mở đầu: Công ty chứng khoán của chúng ta chính là khách hàng trực tiếp của mục ứng dụng tài chính này.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide81Content.addNotes(
  "Giảng viên giới thiệu 4 nhóm ứng dụng tài chính kinh điển theo Han & Kamber."
);

// ----------------------------------------------------
// Slide 82: CONTENT (ỨNG DỤNG 1 & 2 — KHO DỮ LIỆU ĐA CHIỀU VÀ DỰ ĐOÁN KHẢ NĂNG TRẢ NỢ)
// ----------------------------------------------------
const slide82Content = pptx.addSlide({ masterName: "CONTENT" });
slide82Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide82Content.addText("KHO DỮ LIỆU & DỰ ĐOÁN TRẢ NỢ", { placeholder: "title" });

addText(
  slide82Content,
  [
    { text: "📊 Ứng dụng 1: Kho Dữ liệu Đa chiều:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tích hợp dữ liệu: ", options: { bold: true } },
    { text: "Gom Core Banking, Thẻ, CRM về 1 khung nhìn thống nhất.\n\n" },
    { text: "• Khối dữ liệu OLAP: ", options: { bold: true } },
    { text: "So sánh Dư nợ theo (Vùng × Kỳ hạn × Phân khúc khách × Thời gian); phát hiện xu hướng bằng OLAP trước khi khai phá sâu." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide82Content,
  [
    { text: "💳 Ứng dụng 2: Dự đoán Trả nợ & Tín dụng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Yếu tố then chốt: ", options: { bold: true } },
    { text: "Tỷ lệ nợ/thu nhập, lịch sử tín dụng, thâm niên quan hệ, thu nhập, nghề nghiệp.\n\n" },
    { text: "• Attribute Ranking: ", options: { bold: true } },
    { text: "Xếp hạng thuộc tính loại bỏ yếu tố nhiễu ➔ Định giá lãi suất theo rủi ro (Risk-based pricing).\n\n" },
    { text: "❓ Thảo luận: Nếu 'Thời gian quan hệ với ngân hàng' quan trọng hơn 'Thu nhập', chính sách nào nên thay đổi?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide82Content,
  "💡 Gợi ý trả lời: Ưu tiên giữ chân & bán chéo cho khách hàng hiện hữu thay vì chỉ săn khách mới thu nhập cao nhưng thiếu gắn kết.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide82Content.addNotes(
  "Minh họa giá trị của Attribute Ranking: Giúp xoay chuyển chiến lược tín dụng thay vì chỉ dự báo thuần túy."
);

// ----------------------------------------------------
// Slide 83: CONTENT (TRỌNG TÂM — CHẤM ĐIỂM TÍN DỤNG CREDIT SCORING)
// ----------------------------------------------------
const slide83Content = pptx.addSlide({ masterName: "CONTENT" });
slide83Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide83Content.addText("CHẤM ĐIỂM TÍN DỤNG (CREDIT SCORING)", { placeholder: "title" });

addText(
  slide83Content,
  [
    { text: "🎯 Bài toán & Quy trình Xây dựng Scorecard:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bài toán: ", options: { bold: true } },
    { text: "Ước lượng Xác suất vỡ nợ (PD) ➔ Quy về điểm số (Scorecard) duyệt vay, hạn mức, lãi suất.\n\n" },
    { text: "• 5 Bước chuẩn ngành:\n", options: { bold: true } },
    { text: "  1. Xác định biến mục tiêu (quá hạn > 90 ngày).\n  2. Tạo đặc trưng 5C truyền thống (Character, Capacity, Capital, Collateral, Conditions).\n  3. Chia bin & tính WoE/IV để chọn biến.\n  4. Ước lượng Logistic Regression quy ra điểm.\n  5. Kiểm định Out-of-time & theo dõi Model Drift." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide83Content,
  [
    { text: "⚖️ Giải trình Pháp lý & Đánh giá Mô hình:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Vì sao Logistic vẫn là chuẩn? (6.2.1):\n", options: { bold: true } },
    { text: "  Giải trình được từng điểm cộng/trừ với Ngân hàng Nhà nước & khách hàng. XGBoost chạy song song làm tham chiếu.\n\n" },
    { text: "• Chỉ số đánh giá riêng ngành:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Gini / AUC, Chỉ số KS (Kolmogorov-Smirnov) đo khả năng tách biệt hồ sơ Tốt vs Xấu." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide83Content,
  "💡 Thực tiễn Việt Nam: CIC chấm điểm tín dụng quốc gia; Fintech và Ngân hàng dùng dữ liệu thay thế (viễn thông, app) xây Scorecard.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide83Content.addNotes(
  "Nhấn mạnh ranh giới pháp lý của việc sử dụng dữ liệu thay thế — gieo mầm cho bài 6.3.6 Xã hội và Đạo đức."
);

// ----------------------------------------------------
// Slide 84: CONTENT (ỨNG DỤNG 3 — PHÂN LỚP & PHÂN CỤM KHÁCH HÀNG CHO MARKETING MỤC TIÊU)
// ----------------------------------------------------
const slide84Content = pptx.addSlide({ masterName: "CONTENT" });
slide84Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide84Content.addText("PHÂN KHÚC KHÁCH HÀNG & CROSS-SELL", { placeholder: "title" });

addText(
  slide84Content,
  [
    { text: "🎯 Phân khúc Khách hàng Ngân hàng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Phương pháp: ", options: { bold: true } },
    { text: "Phân cụm K-means kết hợp Phân tích RFM (Recency - Frequency - Monetary) trên giao dịch.\n\n" },
    { text: "• 3 Phân khúc điển hình:\n", options: { bold: true } },
    { text: "  - Trẻ — Số hóa — Dư nợ thẻ cao ➔ Trả góp 0%, App-first.\n  - Trung niên — Tiền gửi lớn ➔ Tư vấn đầu tư, bảo hiểm.\n  - Doanh nghiệp nhỏ ➔ Hạn mức thấu chi mùa vụ." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide84Content,
  [
    { text: "🛒 Bán chéo (Cross-sell) & Thảo luận:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Luật kết hợp Ch.5 trên Giỏ sản phẩm:\n", options: { bold: true } },
    { text: "  Khách có Tài khoản lương + Thẻ tín dụng thường mua kèm loại Bảo hiểm nào?\n\n" },
    { text: "❓ Thảo luận: RFM chia theo GIÁ TRỊ, K-means chia theo HÀNH VI, Đồ thị Mạng chia theo QUAN HỆ ➔ Ngân hàng chọn cách nào cho chiến dịch Giới thiệu khách (Referral)?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide84Content,
  "💡 Gợi ý trả lời: Referral lan qua QUAN HỆ ➔ Phân khúc Mạng (6.1.2) phù hợp nhất để chọn hạt giống mở rộng tệp khách.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide84Content.addNotes(
  "Đáp án đẹp là kết hợp: Phân khúc mạng chọn hạt giống giới thiệu, RFM lọc khách giá trị cao, K-means cá nhân hóa thông điệp."
);

// ----------------------------------------------------
// Slide 85: CONTENT (PHÁT HIỆN RỬA TIỀN & PHÒNG GIAN LẬN)
// ----------------------------------------------------
const slide85Content = pptx.addSlide({ masterName: "CONTENT" });
slide85Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide85Content.addText("PHÁT HIỆN RỬA TIỀN & PHÒNG GIAN LẬN", { placeholder: "title" });

addText(
  slide85Content,
  [
    { text: "🛡️ Bộ Công cụ Đa Kỹ thuật (AML):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Phân tích Mạng (6.1.2): ", options: { bold: true } },
    { text: "Lần dòng tiền A ➔ B ➔ C ➔ A; phát hiện giao dịch vòng tròn.\n\n" },
    { text: "• Phát hiện Ngoại lai: ", options: { bold: true } },
    { text: "Giao dịch lệch xa hành vi nền của chính tài khoản.\n\n" },
    { text: "• Phân loại & Luật: ", options: { bold: true } },
    { text: "Phát hiện hành vi xé nhỏ lệnh giao dịch (Structuring/Smurfing) dưới ngưỡng báo cáo." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide85Content,
  [
    { text: "⚠️ Thách thức Quản trị & Thực tiễn VN:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thách thức Quản trị:\n", options: { bold: true } },
    { text: "  Tỷ lệ cảnh báo giả (false alarm) cao ➔ Chi phí điều tra lớn. Kẻ gian liên tục biến hóa mô hình.\n\n" },
    { text: "• Thực tiễn Việt Nam:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Luật Phòng chống rửa tiền 2022 bắt buộc ngân hàng vận hành hệ thống AML tự động báo cáo giao dịch đáng ngờ." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide85Content,
  "💡 Bản chất AML: Kết hợp đồng thời Phân tích mạng + Phát hiện ngoại lai + Chuỗi thời gian + Trực quan hóa điều tra.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide85Content.addNotes(
  "Liên hệ Luật Phòng chống rửa tiền 2022 tại Việt Nam và quy trình sàng lọc tự động của ngân hàng thương mại."
);

// ----------------------------------------------------
// Slide 86: CONTENT (DEMO 5 — CHẤM ĐIỂM TÍN DỤNG VỚI GERMAN CREDIT DATA)
// ----------------------------------------------------
const slide86Content = pptx.addSlide({ masterName: "CONTENT" });
slide86Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide86Content.addText("DEMO 5: CHẤM ĐIỂM TÍN DỤNG (GERMAN)", { placeholder: "title" });

addText(
  slide86Content,
  [
    { text: "💻 Quy trình Thực hành Python:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Nạp bộ German Credit (1.000 hồ sơ vay Tốt/Xấu); xem phân bố các biến.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Mã hóa biến phân loại, chia Train/Test phân tầng.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Huấn luyện Logistic Regression ➔ Đọc Odds Ratio; so sánh AUC với Random Forest/XGBoost.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Vẽ đường ROC, thử nghiệm Ma trận Chi phí bất đối xứng." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide86Content,
  [
    { text: "❓ Thảo luận Ma trận Chi phí:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "“Với ma trận chi phí (Mất gốc >> Mất lãi), ngưỡng cắt tối ưu KHÔNG phải 0,5 — vì sao? Ai nên quyết định ngưỡng này: Đội mô hình hay Đội kinh doanh?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Gợi ý trả lời:\n", options: { bold: true } },
    { text: "  Ngưỡng cắt là quyết định KINH DOANH dựa trên khẩu vị rủi ro — Đội mô hình cung cấp đường đánh đổi, Lãnh đạo quyết định chọn điểm cắt." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide86Content,
  "💡 Bài học quản trị: Ngưỡng ra quyết định duyệt vay được xác định dựa trên Chi phí kinh doanh, không phụ thuộc vào độ chính xác thuần túy.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide86Content.addNotes(
  "Giảng viên chiếu demo_6_3_1_credit_scoring.py và thảo luận quyết định điểm cắt rủi ro kinh doanh."
);

// ----------------------------------------------------
// Slide 87: CONTENT (ỨNG DỤNG TÀI CHÍNH TẠI VIỆT NAM)
// ----------------------------------------------------
const slide87Content = pptx.addSlide({ masterName: "CONTENT" });
slide87Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide87Content.addText("ỨNG DỤNG TÀI CHÍNH TẠI VIỆT NAM", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide87Content,
  [
    { text: "💳 CIC & Scorecard Ngân hàng:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "CIC chấm điểm quốc gia + Scorecard riêng ngân hàng; Fintech vay tiêu dùng bổ sung dữ liệu viễn thông & app làm dữ liệu thay thế." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
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
  slide87Content,
  [
    { text: "⚡ Real-time Fraud (MoMo/ZaloPay):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Ngân hàng & Ví điện tử chấm điểm rủi ro giao dịch thời gian thực: khung giờ, vị trí, thiết bị lạ ➔ Chặn gian lận tức thì." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
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
  slide87Content,
  [
    { text: "🛡️ Hệ thống AML 2022:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Triển khai phòng chống rửa tiền theo Luật 2022: sàng lọc danh sách đen, phát hiện giao dịch cấu trúc xé nhỏ và báo cáo Ngân hàng Nhà nước." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(5.8),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
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
  slide87Content,
  [
    { text: "📈 Công ty Chứng khoán VN:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Dùng Chuỗi ARIMA (6.1.1) + Sentiment tin tức (6.1.3) tạo khuyến nghị tự động ➔ Đóng trọn vẹn lời giải cho tình huống mở đầu chương!" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(5.8),
    w: cmToInch(11.5),
    h: cmToInch(3.5),
    fontSize: 10.5,
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
  slide87Content,
  "💡 Đóng vòng tình huống mở đầu: Công ty chứng khoán ứng dụng trọn vẹn Chuỗi (6.1.1) + Mạng (6.1.2) + Sentiment (6.1.3)!",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide87Content.addNotes(
  "Khoảnh khắc đóng vòng tình huống công ty chứng khoán mở đầu chương — minh chứng cho tính kết nối của giáo trình."
);

// ----------------------------------------------------
// Slide 88: CONTENT (TÓM TẮT 6.3.1: KHAI PHÁ TÀI CHÍNH)
// ----------------------------------------------------
const slide88Content = pptx.addSlide({ masterName: "CONTENT" });
slide88Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide88Content.addText("TÓM TẮT 6.3.1: KHAI PHÁ TÀI CHÍNH", { placeholder: "title" });

addText(
  slide88Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.3.1:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 4 Nhóm ứng dụng: ", options: { bold: true } },
    { text: "Kho đa chiều · Credit Scoring · Phân khúc Marketing RFM · Chống rửa tiền AML.\n\n" },
    { text: "• Credit Scoring: ", options: { bold: true } },
    { text: "Logistic Regression + Scorecard vì tính giải trình; chọn điểm cắt dựa vào Chi phí kỳ vọng.\n\n" },
    { text: "• Anti-Money Laundering: ", options: { bold: true } },
    { text: "Đa kỹ thuật (Mạng + Ngoại lai + Chuỗi + Trực quan)." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide88Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.3.2:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nhất quán tư duy: ", options: { bold: true } },
    { text: "Mô hình tài chính luôn gắn với rủi ro và giá trị kinh tế.\n\n" },
    { text: "• Tiếp theo (Mục 6.3.2):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Rời ngân hàng sang siêu thị & nhà mạng: Khai phá dữ liệu Bán lẻ & Viễn thông (Giỏ hàng, Khuyến mãi, Churn)." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
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
  slide88Content,
  "💡 Bước tiếp theo: Chuyển sang 6.3.2 — Khám phá ứng dụng Khai phá dữ liệu trong Bán lẻ và Viễn thông.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
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

slide88Content.addNotes(
  "Tóm tắt 6.3.1 và dẫn dắt học viên chuyển sang mục 6.3.2 Bán lẻ và Viễn thông."
);
