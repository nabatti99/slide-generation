import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 110: SECTION
// ----------------------------------------------------
const slide110Section = pptx.addSlide({ masterName: "SECTION" });
slide110Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide110Section, "title", "6.3.5. KHAI PHÁ DỮ LIỆU VÀ HỆ THỐNG GỢI Ý");
addSectionText(slide110Section, "content", "Recommender Systems — Động cơ tăng trưởng doanh thu trong nền kinh tế số");
addSectionText(slide110Section, "subContent", "\"Từ phòng thủ (an ninh mạng 6.3.4) sang tấn công doanh thu — Khai phá dữ liệu để cá nhân hóa trải nghiệm khách hàng.\"\n\n" +
  "Content-based Filtering  |  Collaborative Filtering  |  Matrix Factorization (SVD)");

// ----------------------------------------------------
// Slide 111: CONTENT (HỆ GỢI Ý & HAI CÁCH TIẾP CẬN)
// ----------------------------------------------------
const slide111Content = pptx.addSlide({ masterName: "CONTENT" });
slide111Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide111Content.addText("HỆ GỢI Ý & HAI CÁCH TIẾP CẬN", { placeholder: "title" });

addText(
  slide111Content,
  [
    { text: "🤖 Bản chất & 2 Cách tiếp cận Cơ bản:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định nghĩa: ", options: { bold: true } },
    { text: "Đưa ra đề xuất sản phẩm/nội dung cá nhân hóa cho từng khách hàng (Shopee, Netflix, TikTok).\n\n" },
    { text: "• 1. Content-based Filtering: ", options: { bold: true } },
    { text: "Gợi ý sản phẩm GIỐNG thứ khách từng thích dựa trên thuộc tính mô tả.\n\n" },
    { text: "• 2. Collaborative Filtering: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Gợi ý dựa trên SỰ TƯƠNG ĐỒNG hành vi giữa các khách hàng ('người giống bạn cũng mua...')." }
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
  slide111Content,
  [
    { text: "📊 Ma trận Tiện ích (Utility Matrix):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Cấu trúc ma trận: ", options: { bold: true } },
    { text: "Hàng (Người dùng) × Cột (Sản phẩm).\n\n" },
    { text: "• Đặc điểm cực thưa (Sparsity): ", options: { bold: true } },
    { text: "Mỗi khách chỉ tương tác với 0.01% sản phẩm ➔ Gợi ý chính là bài toán 'ĐIỀN VÀO Ô TRỐNG' ma trận.\n\n" },
    { text: "• Mô hình Lai (Hybrid): ", options: { bold: true } },
    { text: "Kết hợp cả 2 cách tiếp cận để bù trừ nhược điểm cho nhau." }
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
  slide111Content,
  "💡 Hình ảnh neo tư duy: Hệ thống gợi ý đóng vai trò như một 'nhân viên bán hàng xuất sắc nhất' thấu hiểu tâm lý khách.",
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

slide111Content.addNotes(
  "Giảng viên kích hoạt trải nghiệm sử dụng Shopee/TikTok của học viên trước khi vào khái niệm Ma trận Utility."
);

// ----------------------------------------------------
// Slide 112: CONTENT (LỌC CỘNG TÁC & PHÂN RÃ MA TRẬN)
// ----------------------------------------------------
const slide112Content = pptx.addSlide({ masterName: "CONTENT" });
slide112Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide112Content.addText("LỌC CỘNG TÁC & PHÂN RÃ MA TRẬN", { placeholder: "title" });

addText(
  slide112Content,
  [
    { text: "👥 User-based vs Item-based Collaborative Filtering:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• User-based CF: ", options: { bold: true } },
    { text: "Tìm nhóm người dùng tương tự (Đo bằng Cosine similarity / Pearson correlation) ➔ Tính trung bình có trọng số dự đoán điểm.\n\n" },
    { text: "• Item-based CF: ", options: { bold: true } },
    { text: "So sánh độ tương tự giữa các SẢN PHẨM dựa trên mẫu đánh giá chung ➔ Ổn định hơn vì sản phẩm ít biến động hơn người dùng ('Khách mua A cũng mua B')." }
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
  slide112Content,
  [
    { text: "🔮 Matrix Factorization & SVD hiện đại:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nguyên lý Phân rã Ma trận: ", options: { bold: true } },
    { text: "Phân rã ma trận Utility thưa thành tích của 2 ma trận Nhân tố ẩn (Latent factors) đại diện cho 'khẩu vị khách' & 'đặc điểm ẩn sản phẩm'.\n\n" },
    { text: "• Thuật toán SVD: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Kỹ thuật đỉnh cao từng quán quân cuộc thi Netflix Prize — Chính xác nhất dù khó giải thích." }
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
  slide112Content,
  "💡 So sánh kỹ thuật: User-based dễ hiểu; Item-based ổn định; Matrix Factorization (SVD) chính xác nhất.",
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

slide112Content.addNotes(
  "Giảng viên minh họa ví dụ số nhỏ (3 khách × 3 phim) tính độ tương tự Cosine trực tiếp trên bảng."
);

// ----------------------------------------------------
// Slide 113: CONTENT (THÁCH THỨC CỦA HỆ GỢI Ý — VÀ VÌ SAO ĐÂY LÀ BÀI TOÁN KINH TẾ)
// ----------------------------------------------------
const slide113Content = pptx.addSlide({ masterName: "CONTENT" });
slide113Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide113Content.addText("THÁCH THỨC HỆ GỢI Ý & BÀI TOÁN ROI", { placeholder: "title" });

addText(
  slide113Content,
  [
    { text: "⚠️ 4 Thách thức Kỹ thuật Khó khăn:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "1. Khởi động lạnh (Cold Start): ", options: { bold: true } },
    { text: "Khách mới / Sản phẩm mới chưa có lịch sử tương tác.\n\n" },
    { text: "2. Độ thưa (Sparsity): ", options: { bold: true } },
    { text: "Hàng triệu sản phẩm nhưng mỗi khách chỉ chạm vài chục.\n\n" },
    { text: "3. Khả năng mở rộng (Scalability): ", options: { bold: true } },
    { text: "Tính gợi ý thời gian thực cho hàng triệu người.\n\n" },
    { text: "4. Tấn công thao túng (Shilling attack): ", options: { bold: true } },
    { text: "Tài khoản ảo đánh giá giả đẩy/dìm hàng." }
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
  slide113Content,
  [
    { text: "💰 Góc nhìn Kinh tế & Xã hội:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Động cơ Doanh thu Trực tiếp: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Amazon công bố ~35% doanh số đến từ Gợi ý ➔ Tăng CLV, giảm chi phí tìm kiếm của khách.\n\n" },
    { text: "• Hệ lụy Xã hội: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Tạo ra Bong bóng Lọc (Filter Bubble) và nguy cơ thao túng hành vi tiêu dùng (gieo mầm 6.3.6)." }
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
  slide113Content,
  "💡 Ý nghĩa quản trị: Hệ gợi ý không chỉ là thuật toán kỹ thuật mà là công cụ tác động trực tiếp lên P&L doanh nghiệp.",
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

slide113Content.addNotes(
  "Nâng tầm bài học từ Kỹ thuật lên Kinh tế học của Hệ gợi ý — số liệu doanh thu và khái niệm Filter bubble."
);

// ----------------------------------------------------
// Slide 114: CONTENT (ỨNG DỤNG HỆ GỢI Ý TẠI VIỆT NAM)
// ----------------------------------------------------
const slide114Content = pptx.addSlide({ masterName: "CONTENT" });
slide114Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide114Content.addText("ỨNG DỤNG HỆ GỢI Ý TẠI VIỆT NAM", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide114Content,
  [
    { text: "🛍️ TMĐT (Shopee / Tiki / Lazada):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Tính năng 'Thường được mua cùng', 'Gợi ý hôm nay' kết hợp Luật kết hợp (Ch.5), Collaborative filtering & Deep learning." }
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
  slide114Content,
  [
    { text: "📱 Nội dung Số (TikTok / YouTube):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Gợi ý video dựa trên chuỗi hành vi xem (Chuỗi 6.1.1) ➔ Hiện tượng 'lướt mãi không dừng' & tranh luận nghiện nội dung." }
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
  slide114Content,
  [
    { text: "💳 Ngân hàng Số & Bán chéo:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "App ngân hàng gợi ý mở thêm thẻ tín dụng, mua bảo hiểm, quỹ đầu tư theo phân khúc RFM & chi tiêu (6.3.1)." }
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
  slide114Content,
  [
    { text: "📚 Edtech & Báo chí Điện tử:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Gợi ý khóa học tiếp theo hoặc bài viết liên quan dựa trên lịch sử tương tác ➔ Tăng time-on-site & doanh thu quảng cáo." }
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
  slide114Content,
  "💡 Hiện diện khắp nơi: Hệ gợi ý đang là 'trái tim' tăng trưởng của các nền tảng kinh tế số tại Việt Nam.",
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

slide114Content.addNotes(
  "Phủ đủ 4 ngành: TMĐT, Nội dung số, Ngân hàng, Báo chí/Giáo dục để học viên thấy tính phổ quát của Hệ gợi ý."
);

// ----------------------------------------------------
// Slide 115: CONTENT (DEMO 6.3.5: HỆ GỢI Ý PHIM (MOVIELENS))
// ----------------------------------------------------
const slide115Content = pptx.addSlide({ masterName: "CONTENT" });
slide115Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide115Content.addText("DEMO 6.3.5: HỆ GỢI Ý PHIM (MOVIELENS)", { placeholder: "title" });

addText(
  slide115Content,
  [
    { text: "💻 Quy trình Thực hành Python (MovieLens 100K):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Nạp bộ MovieLens 100K ➔ Dựng Ma trận Utility `pivot_table`, xem độ thưa.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Tính độ tương tự Cosine giữa người dùng (User-based CF).\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Gợi ý Top-5 phim chưa xem cho khách hàng ➔ Đánh giá RMSE.\n\n" },
    { text: "• Mở rộng: ", options: { bold: true } },
    { text: "Thử nghiệm thư viện `surprise` với thuật toán SVD (Matrix Factorization)." }
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
  slide115Content,
  [
    { text: "❓ Thảo luận Chiến lược Onboarding:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Một khách hàng HOÀN TOÀN MỚI vừa đăng ký hôm nay ➔ Hệ thống nên gợi ý gì để giải quyết Cold Start?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Chiến lược thực tế:\n", options: { bold: true } },
    { text: "  Gợi ý Top sản phẩm bán chạy nhất (Popularity-based) hoặc khảo sát chọn chủ đề yêu thích ngay khi mở app." }
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
  slide115Content,
  "💡 Kết nối kỹ thuật & sản phẩm: Bài tập nối liền thuật toán lọc cộng tác với chiến lược thiết kế trải nghiệm người dùng.",
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

slide115Content.addNotes(
  "Giảng viên chiếu file demo_6_3_5_recommender.py và thảo luận cách xử lý bài toán Cold Start."
);
