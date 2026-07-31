import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 89: SECTION
// ----------------------------------------------------
const slide89Section = pptx.addSlide({ masterName: "SECTION" });
slide89Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide89Section.addText("6.3.2. KHAI PHÁ DỮ LIỆU TRONG BÁN LẺ VÀ VIỄN THÔNG", { placeholder: "title" });
slide89Section.addText("Retail & Telecommunication Data Mining — Cái nôi khai sinh và nơi bùng nổ của Data Mining", { placeholder: "content" });
slide89Section.addText(
  "\"Khai phá dữ liệu lớn lên từ những giỏ hàng siêu thị — và trưởng thành trong cuộc chiến giữ chân thuê bao di động.\"\n\n" +
  "Phân tích Giỏ hàng  |  Đo hiệu quả Khuyến mãi (A/B testing)  |  Dự đoán Churn  |  Uplift Modeling",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 90: CONTENT (NGÀNH BÁN LẺ — MỎ DỮ LIỆU KHỔNG LỒ VÀ NĂM NHÓM ỨNG DỤNG)
// ----------------------------------------------------
const slide90Content = pptx.addSlide({ masterName: "CONTENT" });
slide90Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide90Content.addText("NGÀNH BÁN LẺ & 5 NHÓM ỨNG DỤNG", { placeholder: "title" });

addText(
  slide90Content,
  [
    { text: "🛒 Vì sao Bán lẻ là 'Cái nôi' của KPDL?:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khối lượng khổng lồ: ", options: { bold: true } },
    { text: "Dữ liệu POS, giao dịch mua sắm, tồn kho, vận chuyển, dịch vụ.\n\n" },
    { text: "• Bùng nổ Thương mại Điện tử: ", options: { bold: true } },
    { text: "Ghi lại từng cú click chuột, lượt xem sản phẩm, giỏ hàng bỏ dở." }
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
  slide90Content,
  [
    { text: "📋 5 Nhóm Ứng dụng Bán lẻ (Han & Kamber):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Kho dữ liệu bán lẻ: Tích hợp POS, tồn kho, thẻ thành viên.\n" },
    { text: "2. Phân tích đa chiều: Doanh số (Sản phẩm × Giờ × Vùng × Khách).\n" },
    { text: "3. Phân tích hiệu quả chiến dịch bán hàng & Khuyến mãi.\n" },
    { text: "4. Giữ chân khách hàng & Quản lý lòng trung thành (Loyalty).\n" },
    { text: "5. Gợi ý sản phẩm & Mua kèm (nối 6.3.5)." }
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
  slide90Content,
  "💡 Trao đổi bản chất: Thẻ thành viên siêu thị cho khách hàng giảm giá nhỏ để đổi lấy dữ liệu hành vi định danh giá trị.",
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

slide90Content.addNotes(
  "Hỏi học viên: Thẻ thành viên siêu thị cho doanh nghiệp cái gì — và cho khách cái gì?"
);

// ----------------------------------------------------
// Slide 91: CONTENT (PHÂN TÍCH GIỎ HÀNG & KHUYẾN MÃI)
// ----------------------------------------------------
const slide91Content = pptx.addSlide({ masterName: "CONTENT" });
slide91Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide91Content.addText("PHÂN TÍCH GIỎ HÀNG & KHUYẾN MÃI", { placeholder: "title" });

addText(
  slide91Content,
  [
    { text: "🛍️ Phân tích Giỏ hàng & Khuyến mãi:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Phân tích Giỏ hàng (Market Basket): ", options: { bold: true } },
    { text: "Luật kết hợp Ch.5 tìm các sản phẩm đồng xuất hiện ➔ Xếp kệ, bán combo, khuyến mãi chéo.\n\n" },
    { text: "• Đo hiệu quả Khuyến mãi:\n", options: { bold: true } },
    { text: "  So sánh doanh số Trước - Trong - Sau: Tách hiệu ứng KÉO DOANH SỐ THẬT khỏi hiệu ứng DỒN MUA SỚM và ĂN THỊT SẢN PHẨM KHÁC (Cannibalization)." }
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
  slide91Content,
  [
    { text: "🎯 Thí nghiệm Đối chứng & Thảo luận:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thiết kế A/B Testing: ", options: { bold: true } },
    { text: "Nhóm thử nghiệm (xem KM) vs Nhóm đối chứng (không xem) ➔ Thống kê 6.2.1.\n\n" },
    { text: "❓ Thảo luận: 'Giảm 30% sữa' làm doanh số sữa tăng 80% trong tuần KM ➔ Nhà quản lý có nên vui mừng ngay? Cần kiểm tra thêm những số nào?" }
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
  slide91Content,
  "💡 Bài học quản trị: Khai phá dữ liệu khuyến mãi = Đo GIÁ TRỊ TĂNG THÊM (Incremental Value), không đo doanh số thô!",
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

slide91Content.addNotes(
  "Giảng viên kể câu chuyện Target (Mỹ) dự đoán khách hàng mang thai từ giỏ hàng và gửi coupon đồ sơ sinh."
);

// ----------------------------------------------------
// Slide 92: CONTENT (GIỮ CHÂN KHÁCH HÀNG — LÒNG TRUNG THÀNH VÀ GIÁ TRỊ VÒNG ĐỜI)
// ----------------------------------------------------
const slide92Content = pptx.addSlide({ masterName: "CONTENT" });
slide92Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide92Content.addText("GIỮ CHÂN KHÁCH HÀNG & GIÁ TRỊ CLV", { placeholder: "title" });

addText(
  slide92Content,
  [
    { text: "🤝 Nguyên lý Giữ chân Khách hàng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tối ưu chi phí: ", options: { bold: true } },
    { text: "Giữ 1 khách hàng cũ RẺ HƠN NHIỀU LẦN chi phí kiếm 1 khách hàng mới.\n\n" },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Phát hiện sớm dấu hiệu 'nguội lạnh' của khách hàng để can thiệp đúng lúc." }
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
  slide92Content,
  [
    { text: "🛠️ Chuỗi Kỹ thuật Tích hợp (RFM + CLV):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• RFM + K-means (Ch.4): ", options: { bold: true } },
    { text: "Khoanh nhóm khách giá trị cao đang suy giảm tần suất.\n\n" },
    { text: "• Survival Analysis (6.2.1): ", options: { bold: true } },
    { text: "Ước lượng CÒN BAO LÂU nữa khách rời đi.\n\n" },
    { text: "• CLV (Customer Lifetime Value): ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Chi phí ưu đãi giữ chân ≤ CLV kỳ vọng × Xác suất giữ được." }
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
  slide92Content,
  "💡 Tinh thần Kinh tế vi mô (6.2.2): Không giữ chân khách bằng mọi giá — chỉ chi ngân sách khi ROI kỳ vọng dương!",
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

slide92Content.addNotes(
  "Hỏi học viên: Ưu đãi nào của các chương trình thành viên (siêu thị, hàng không) từng khiến anh/chị ở lại thực sự?"
);

// ----------------------------------------------------
// Slide 93: CONTENT (VIỄN THÔNG — BÀI TOÁN CHURN: "PHÒNG BỆNH HƠN CHỮA BỆNH")
// ----------------------------------------------------
const slide93Content = pptx.addSlide({ masterName: "CONTENT" });
slide93Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide93Content.addText("VIỄN THÔNG & BÀI TOÁN CHURN", { placeholder: "title" });

addText(
  slide93Content,
  [
    { text: "📞 Đặc thù Viễn thông & Quy trình Churn:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bối cảnh: ", options: { bold: true } },
    { text: "Thị trường bão hòa ➔ Cạnh tranh giữ thuê bao. Dữ liệu CDR, cước, nạp tiền cực giàu.\n\n" },
    { text: "• 4 Bước quy trình Churn:\n", options: { bold: true } },
    { text: "  1. Định nghĩa Churn (không phát sinh cước 60-90 ngày).\n  2. Tạo đặc trưng cảnh báo (cước sụt, khiếu nại).\n  3. Chấm điểm rủi ro hằng tháng (Logistic / XGBoost).\n  4. Gửi ưu đãi NHẮM ĐÍCH nhóm Rủi ro cao × Cước cao." }
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
  slide93Content,
  [
    { text: "🎯 Uplift Modeling & Thảo luận:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thước đo Uplift: ", options: { bold: true } },
    { text: "Đo chênh lệch tỷ lệ ở lại giữa nhóm được ưu đãi vs nhóm đối chứng ➔ Quy ra tiền.\n\n" },
    { text: "• Uplift Modeling: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Chỉ ưu đãi nhóm 'thuyết phục được' (Persuadables); tránh lãng phí ngân sách trên nhóm 'kiểu gì cũng ở lại'." }
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
  slide93Content,
  "💡 Điểm chạm hiện đại: Uplift Modeling chính là giao điểm giữa Khai phá dữ liệu và Kinh tế học nhân quả.",
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

slide93Content.addNotes(
  "Giảng viên giải thích sự khác biệt giữa Churn Model (dự đoán ai sẽ đi) và Uplift Model (dự đoán ai bị tác động bởi ưu đãi)."
);

// ----------------------------------------------------
// Slide 94: CONTENT (PHÁT HIỆN GIAN LẬN VIỄN THÔNG)
// ----------------------------------------------------
const slide94Content = pptx.addSlide({ masterName: "CONTENT" });
slide94Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide94Content.addText("PHÁT HIỆN GIAN LẬN VIỄN THÔNG", { placeholder: "title" });

addText(
  slide94Content,
  [
    { text: "🚨 Phát hiện Gian lận Viễn thông:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Các dạng gian lận: ", options: { bold: true } },
    { text: "Gian lận cước quốc tế, SIM rác, cuộc gọi lừa đảo, trạm BTS giả.\n\n" },
    { text: "• Kỹ thuật kết hợp: ", options: { bold: true } },
    { text: "Hồ sơ hành vi nền + Phát hiện ngoại lai (lệch cước lúc 3h sáng) + Phân tích Đồ thị Mạng cuộc gọi (6.1.2) tìm cụm số lừa đảo." }
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
  slide94Content,
  [
    { text: "📊 Phân tích Đa chiều & Thực tiễn VN:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khối dữ liệu Data Cube: ", options: { bold: true } },
    { text: "Phân tích theo (Loại cuộc gọi × Giờ × Vùng × Gói cước) để quy hoạch hạ tầng.\n\n" },
    { text: "• Thực tiễn Việt Nam: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Chuẩn hóa thông tin thuê bao với CSDL quốc gia về dân cư chính là bước Làm sạch dữ liệu (Ch.2) ở quy mô quốc gia." }
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
  slide94Content,
  "💡 Thống nhất khung kiến trúc: Chống gian lận Viễn thông và Ngân hàng dùng chung khung 'Hồ sơ nền + Ngoại lai + Mạng'.",
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

slide94Content.addNotes(
  "Liên hệ thực tế làn sóng cuộc gọi rác/lừa đảo tại Việt Nam và chiến dịch chuẩn hóa SIM chính chủ."
);

// ----------------------------------------------------
// Slide 95: CONTENT (DEMO 6 — DỰ ĐOÁN CHURN VỚI TELCO CUSTOMER CHURN)
// ----------------------------------------------------
const slide95Content = pptx.addSlide({ masterName: "CONTENT" });
slide95Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide95Content.addText("DEMO 6: DỰ ĐOÁN TELCO CHURN", { placeholder: "title" });

addText(
  slide95Content,
  [
    { text: "💻 Quy trình Thực hành Python:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Nạp bộ Telco Customer Churn (~7.000 dòng Kaggle).\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Khám phá Trực quan (6.2.3): Tỷ lệ churn theo Loại hợp đồng & Thâm niên (Tenure).\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Huấn luyện Logistic & Random Forest ➔ Đọc biến quan trọng nhất (`Contract_Month-to-month`).\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Giả lập chiến dịch ưu đãi nhắm đích theo rủi ro." }
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
  slide95Content,
  [
    { text: "❓ Thảo luận Tương quan vs Nhân quả:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "“Biến 'Loại hợp đồng' quan trọng nhất ➔ Hành động là ép khách ký dài hạn hay tìm hiểu nguyên nhân?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Bài học 6.2.1:\n", options: { bold: true } },
    { text: "  Hợp đồng từng tháng chỉ là DẤU HIỆU nhóm khách chưa cam kết, không phải NGUYÊN NHÂN churn ➔ Ép ký dài hạn gây phản tác dụng." }
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
  slide95Content,
  "💡 Hành động đúng: Thí nghiệm A/B Testing ưu đãi chuyển đổi tự nguyện và đo lường tỷ lệ Uplift thực tế.",
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

slide95Content.addNotes(
  "Giảng viên chiếu file demo_6_3_2_churn_telco.py và hướng dẫn học viên thực hành dự báo Churn."
);

// ----------------------------------------------------
// Slide 96: CONTENT (ỨNG DỤNG BÁN LẺ & VIỄN THÔNG)
// ----------------------------------------------------
const slide96Content = pptx.addSlide({ masterName: "CONTENT" });
slide96Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide96Content.addText("ỨNG DỤNG BÁN LẺ & VIỄN THÔNG", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide96Content,
  [
    { text: "🛒 Siêu thị & Chuỗi Bán lẻ (WinMart/Co.op):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Phân tích giỏ hàng và thẻ thành viên: sắp xếp kệ hàng, gợi ý combo Tết, cá nhân hóa voucher qua Zalo/App." }
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
  slide96Content,
  [
    { text: "⚡ TMĐT (Shopee / Tiki / Lazada):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Đo hiệu quả Flash Sale theo A/B Testing; tự động gửi thông báo nhắc đơn hàng bị bỏ dở trong giỏ." }
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
  slide96Content,
  [
    { text: "📞 Nhà mạng (Viettel / Vina / Mobi):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Chấm điểm rủi ro rời mạng thuê bao trả trước, thiết kế gói cước cá nhân hóa từ lịch sử cước & vị trí." }
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
  slide96Content,
  [
    { text: "🛡️ Chống Lừa đảo & SIM Rác:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Chuẩn hóa thông tin thuê bao theo CSDL Dân cư, phát hiện cụm số lừa đảo qua Phân tích Mạng cuộc gọi." }
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
  slide96Content,
  "💡 Thực tiễn Việt Nam: Thí nghiệm đối chứng (A/B testing) là thước đo cuối cùng đánh giá thành bại của mọi chiến dịch dữ liệu.",
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

slide96Content.addNotes(
  "Hỏi học viên: Anh/chị từng nhận ưu đãi nào đúng lúc đến đáng sợ? Đoán xem mô hình phía sau dùng dữ liệu gì?"
);

// ----------------------------------------------------
// Slide 97: CONTENT (TÓM TẮT 6.3.2 — BÁN LẺ & VIỄN THÔNG)
// ----------------------------------------------------
const slide97Content = pptx.addSlide({ masterName: "CONTENT" });
slide97Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide97Content.addText("TÓM TẮT 6.3.2 — BÁN LẺ & VIỄN THÔNG", { placeholder: "title" });

addText(
  slide97Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.3.2:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Ngành Bán lẻ: ", options: { bold: true } },
    { text: "Phân tích giỏ hàng · Đo hiệu quả khuyến mãi A/B testing · Giữ chân khách (RFM, CLV, Survival).\n\n" },
    { text: "• Ngành Viễn thông: ", options: { bold: true } },
    { text: "Bài toán Churn là trung tâm — đo bằng chỉ số Uplift quy ra tiền; Chống gian lận dùng khung 'Hồ sơ nền + Ngoại lai + Mạng'." }
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
  slide97Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.3.3:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thước đo cuối cùng: ", options: { bold: true } },
    { text: "Thí nghiệm đối chứng A/B Testing.\n\n" },
    { text: "• Tiếp theo (Mục 6.3.3 & 6.3.4):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Rời thương trường sang phòng thí nghiệm: Khai phá dữ liệu Khoa học, Kỹ thuật và An ninh mạng." }
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
  slide97Content,
  "💡 Bước tiếp theo: Chuyển sang 6.3.3 và 6.3.4 — Mở rộng tầm nhìn sang Khoa học kỹ thuật và An ninh mạng.",
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

slide97Content.addNotes(
  "Tóm tắt 6.3.2 và dẫn dắt học viên sang các mục tiếp theo của 6.3 Hướng ứng dụng."
);
