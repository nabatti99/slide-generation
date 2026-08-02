import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 10: SECTION
// ----------------------------------------------------
const slide10Section = pptx.addSlide({ masterName: "SECTION" });
slide10Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide10Section, "title", "6.1.1. KHAI PHÁ DỮ LIỆU CHUỖI");
addSectionText(slide10Section, "content", "Giải quyết Nguồn 1 của tình huống mở đầu: dự báo VN-Index");
addSectionText(slide10Section, "subContent", "\"Trong dữ liệu chuỗi, thông tin nằm ở GIÁ TRỊ và THỨ TỰ xuất hiện.\"\n\n" +
  "Chuỗi thời gian  |  Tìm tương tự & Motif  |  Mẫu tuần tự  |  Phân loại chuỗi");

// ----------------------------------------------------
// Slide 11: CONTENT (DỮ LIỆU CHUỖI & BA LOẠI CHUỖI)
// ----------------------------------------------------
const slide11Content = pptx.addSlide({ masterName: "CONTENT" });
slide11Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide11Content.addText("DỮ LIỆU CHUỖI & BA LOẠI CHUỖI", { placeholder: "title" });

addText(
  slide11Content,
  [
    { text: "📊 1. Chuỗi thời gian (Time-series data):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khái niệm: ", options: { bold: true } },
    { text: "Giá trị số ghi nhận tại các mốc thời gian cách đều nhau.\n\n" },
    { text: "• Ví dụ kinh tế: ", options: { bold: true } },
    { text: "Giá đóng cửa VN-Index theo ngày, doanh số theo tháng, GDP theo quý, tỷ giá USD/VND.\n\n" },
    { text: "• Đặc điểm: ", options: { bold: true } },
    { text: "Thứ tự thời gian bắt buộc & có tính phụ thuộc nối tiếp." }
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
  slide11Content,
  [
    { text: "🔣 2. Chuỗi ký hiệu & 🧬 3. Chuỗi sinh học:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Chuỗi ký hiệu (Symbolic sequence):\n", options: { bold: true } },
    { text: "  - Dãy sự kiện định danh, mốc thời gian không nhất thiết cách đều.\n  - Ví dụ: Chuỗi mua sắm {Laptop ➔ Chuột ➔ Balo}, luồng clickstream web.\n\n" },
    { text: "• Chuỗi sinh học (Biological sequence):\n", options: { bold: true } },
    { text: "  - Dãy ADN, protein rất dài, khoảng trống (gap) mang ý nghĩa sinh học." }
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
  slide11Content,
  "💡 Khái niệm then chốt: Phân biệt dựa trên dạng giá trị (số vs ký hiệu), tính cách đều và ý nghĩa của khoảng trống (gap).",
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

slide11Content.addNotes(
  "Ghi chú giảng dạy: Tiêu chí phân biệt để hỏi lớp: (1) giá trị là số hay ký hiệu? (2) các mốc có cách đều không? (3) gap có mang thông tin không?"
);

// ----------------------------------------------------
// Slide 12: CONTENT (BỐN THÀNH PHẦN CHUỖI THỜI GIAN)
// ----------------------------------------------------
const slide12Content = pptx.addSlide({ masterName: "CONTENT" });
slide12Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide12Content.addText("BỐN THÀNH PHẦN CHUỖI THỜI GIAN", { placeholder: "title" });

addText(
  slide12Content,
  [
    { text: "🧩 4 Thành phần rã chuỗi thời gian:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Trend (T): ", options: { bold: true } },
    { text: "Xu hướng dài hạn — VN-Index tăng trưởng theo chu kỳ 10 năm.\n\n" },
    { text: "• Cyclic (C): ", options: { bold: true } },
    { text: "Dao động chu kỳ nhiều năm — Chu kỳ kinh tế, bất động sản.\n\n" },
    { text: "• Seasonal (S): ", options: { bold: true } },
    { text: "Biến động thời vụ lặp lại trong năm — Bán lẻ tăng vọt trước Tết.\n\n" },
    { text: "• Irregular/Random (R): ", options: { bold: true } },
    { text: "Nhiễu ngẫu nhiên không dự báo được." }
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
  slide12Content,
  [
    { text: "📐 Mô hình kết hợp & Thảo luận:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Mô hình phân rã:\n", options: { bold: true } },
    { text: "  - Dạng cộng: Y_t = T_t + C_t + S_t + R_t\n  - Dạng nhân: Y_t = T_t × C_t × S_t × R_t\n\n" },
    { text: "❓ Câu hỏi thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "“Doanh số chuỗi siêu thị tăng 30% vào tháng 1: Đó là Trend, Seasonal hay Random? Cần nhìn thêm dữ liệu gì để kết luận?”" }
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
  slide12Content,
  "💡 Ứng dụng nghiệp vụ: Tách được thành phần thời vụ (Seasonal) là điều kiện để so sánh 'like-for-like' trong phân tích kinh doanh.",
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

slide12Content.addNotes(
  "Gợi ý giảng viên: Cần so sánh cùng kỳ nhiều năm: nếu tháng 1 (gần Tết) năm nào cũng tăng ~30% -> Seasonal; nếu mức nền mỗi năm dịch lên -> có Trend."
);

// ----------------------------------------------------
// Slide 13: CONTENT (BÀI TOÁN 1: DỰ BÁO CHUỖI VỚI ARIMA)
// ----------------------------------------------------
const slide13Content = pptx.addSlide({ masterName: "CONTENT" });
slide13Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide13Content.addText("BÀI TOÁN 1: DỰ BÁO CHUỖI VỚI ARIMA", { placeholder: "title" });

addText(
  slide13Content,
  [
    { text: "⚙️ Cấu trúc Mô hình ARIMA(p, d, q):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• AR(p) - AutoRegressive: ", options: { bold: true } },
    { text: "Giá trị hiện tại phụ thuộc p giá trị quá khứ.\n\n" },
    { text: "• I(d) - Integrated: ", options: { bold: true } },
    { text: "Lấy sai phân d lần để chuỗi trở nên dừng (stationary).\n\n" },
    { text: "• MA(q) - Moving Average: ", options: { bold: true } },
    { text: "Giá trị hiện tại phụ thuộc q sai số quá khứ." }
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
  slide13Content,
  [
    { text: "🔄 Quy trình Box-Jenkins 4 bước & KPDL:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "1. Nhận dạng: ", options: { bold: true } },
    { text: "Kiểm định tính dừng (ADF test); xem ACF/PACF để chọn p, q.\n\n" },
    { text: "2. Ước lượng: ", options: { bold: true } },
    { text: "Ước lượng tham số mô hình trên dữ liệu train.\n\n" },
    { text: "3. Kiểm định: ", options: { bold: true } },
    { text: "Phần dư là nhiễu trắng (Ljung-Box); so sánh AIC/BIC.\n\n" },
    { text: "4. Dự báo: ", options: { bold: true } },
    { text: "Kèm khoảng tin cậy; tính RMSE, MAPE." }
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
  slide13Content,
  "💡 Khác biệt với Thống kê truyền thống: Khai phá dữ liệu tự động hóa chọn mô hình cho hàng nghìn mã hàng/cổ phiếu cùng lúc.",
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

slide13Content.addNotes(
  "Ghi chú giảng dạy: Tập trung vào quy mô tự động hóa (auto-ARIMA / pmdarima) trong pipeline khai phá dữ liệu thực tế."
);

// ----------------------------------------------------
// Slide 14: CONTENT (DEMO 1 — DỰ BÁO VN-INDEX BẰNG ARIMA)
// ----------------------------------------------------
const slide14Content = pptx.addSlide({ masterName: "CONTENT" });
slide14Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide14Content.addText("DEMO 1: DỰ BÁO VN-INDEX (ARIMA)", { placeholder: "title" });

addText(
  slide14Content,
  [
    { text: "💻 Các bước thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Tải giá đóng cửa VN-Index bằng library `vnstock`; vẽ đường trung bình động 10 ngày.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Kiểm định tính dừng bằng ADF test; lấy sai phân đến khi chuỗi dừng.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Vẽ ACF/PACF chọn p, q; ước lượng bằng `statsmodels` hoặc `pmdarima.auto_arima`.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Dự báo 10 phiên tiếp theo kèm khoảng tin cậy 95%; tính RMSE, MAPE." }
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
  slide14Content,
  [
    { text: "❓ Thảo luận giới hạn & Gợi ý mở rộng:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Sai số dự báo lớn nhất rơi vào giai đoạn nào? Điều đó nói gì về giới hạn của ARIMA với chứng khoán?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Nhận xét: ", options: { bold: true } },
    { text: "Sai số bùng nổ ở giai đoạn biến động mạnh/sốc tin tức.\n\n" },
    { text: "• Giới hạn: ", options: { bold: true } },
    { text: "ARIMA tuyến tính bỏ lỡ mối quan hệ phi tuyến phức tạp ➔ Cầu dẫn sang mô hình LSTM/Học sâu ở 6.2.4." }
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
  slide14Content,
  "💡 Bài học quản trị rủi ro: Không bao giờ sử dụng dự báo điểm đơn lẻ, luôn đi kèm khoảng tin cậy 95%.",
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

slide14Content.addNotes(
  "Giảng viên chiếu file demo_6_1_1_arima_vnindex.py và giải thích trực tiếp kết quả chạy mô hình."
);

// ----------------------------------------------------
// Slide 15: CONTENT (BÀI TOÁN 2 — TÌM KIẾM TƯƠNG TỰ & MOTIF)
// ----------------------------------------------------
const slide15Content = pptx.addSlide({ masterName: "CONTENT" });
slide15Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide15Content.addText("BÀI TOÁN 2: TƯƠNG TỰ & MOTIF CHUỖI", { placeholder: "title" });

addText(
  slide15Content,
  [
    { text: "🔍 Tìm kiếm tương tự (Similarity Search):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Mục tiêu: ", options: { bold: true } },
    { text: "Tìm các chuỗi (con) 'gần giống' chuỗi truy vấn (khác CSDL vốn đòi hỏi khớp chính xác).\n\n" },
    { text: "• Phân loại:\n", options: { bold: true } },
    { text: "  - Whole sequence matching: So toàn bộ chuỗi.\n  - Subsequence matching: Tìm đoạn con khớp mẫu trong chuỗi dài.\n\n" },
    { text: "• Giảm chiều dữ liệu:\n", options: { bold: true } },
    { text: "  DFT (Fourier), DWT (Wavelet), SVD/PCA để nén và tạo chỉ mục tìm kiếm nhanh." }
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
  slide15Content,
  [
    { text: "🧩 Phát hiện Motif & Ứng dụng Kinh tế:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Motif: ", options: { bold: true } },
    { text: "Mẫu hình lặp lại thường xuyên trong một chuỗi — đóng vai trò 'từ vựng' đặc trưng.\n\n" },
    { text: "• Ứng dụng thực tế:\n", options: { bold: true } },
    { text: "  - Khớp mẫu kỹ thuật: Tìm các giai đoạn VN-Index có hình dạng dao động giống quá khứ ➔ Tham chiếu kịch bản đầu tư.\n  - Phát hiện mẫu tiêu thụ điện / lưu lượng giao dịch lặp lại để lập kế hoạch công suất." }
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
  slide15Content,
  "💡 Nén chuỗi dài thành ít con số đại diện rồi so sánh để tìm motif.",
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

slide15Content.addNotes(
  "Giảng viên giải thích ý tưởng Matrix Profile (thư viện stumpy trong Python) dùng tìm kiếm motif hiệu quả."
);

// ----------------------------------------------------
// Slide 16: CONTENT (BÀI TOÁN 3 — KHAI PHÁ MẪU TUẦN TỰ)
// ----------------------------------------------------
const slide16Content = pptx.addSlide({ masterName: "CONTENT" });
slide16Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide16Content.addText("BÀI TOÁN 3: KHAI PHÁ MẪU TUẦN TỰ", { placeholder: "title" });

addText(
  slide16Content,
  [
    { text: "🔗 Mẫu tuần tự vs Luật kết hợp Ch.5:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định nghĩa: ", options: { bold: true } },
    { text: "Mẫu tuần tự = Luật kết hợp + Yếu tố THỨ TỰ thời gian.\n\n" },
    { text: "• So sánh ví dụ:\n", options: { bold: true } },
    { text: "  - Luật kết hợp Ch.5: {bia, tã} ➔ {sữa} (mua CÙNG NHAU trong 1 hóa đơn).\n  - Mẫu tuần tự: ⟨{laptop} ➔ {chuột, balo} ➔ {RAM}⟩ (mua THEO THỨ TỰ thời gian)." }
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
  slide16Content,
  [
    { text: "🛠️ Thuật toán, Biến thể & Thảo luận:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Giải thuật tiêu biểu: ", options: { bold: true } },
    { text: "GSP, PrefixSpan (dựa trên minsup).\n\n" },
    { text: "• Ràng buộc thực tế: ", options: { bold: true } },
    { text: "Gap constraint (mua RAM trong 3 tháng sau khi mua Laptop); Periodic patterns.\n\n" },
    { text: "❓ Câu hỏi thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "“Với bài toán gợi ý sản phẩm tiếp theo (Next-Best-Offer), vì sao Mẫu tuần tự hữu ích hơn Luật kết hợp?”" }
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
  slide16Content,
  "💡 Giá trị nghiệp vụ: Mẫu tuần tự nắm bắt quan hệ TRƯỚC - SAU, tối ưu hóa gợi ý hành vi tiếp theo (Next-Best-Offer).",
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

slide16Content.addNotes(
  "Gợi ý trả lời: Mẫu tuần tự nắm được chiều thời gian (mua Laptop xong mới mua RAM), còn Luật kết hợp chỉ quan tâm mua cùng nhau."
);

// ----------------------------------------------------
// Slide 17: CONTENT (BÀI TOÁN 4 — PHÂN LOẠI CHUỖI)
// ----------------------------------------------------
const slide17Content = pptx.addSlide({ masterName: "CONTENT" });
slide17Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide17Content.addText("BÀI TOÁN 4: PHÂN LOẠI CHUỖI (DTW)", { placeholder: "title" });

addText(
  slide17Content,
  [
    { text: "🎯 3 Hướng tiếp cận Phân loại Chuỗi:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Hướng 1 — Feature-based: ", options: { bold: true } },
    { text: "Trích xuất đặc trưng số (trung bình, độ lệch chuẩn, xu hướng, k-grams) ➔ Dùng lại bộ phân lớp Ch.4.\n\n" },
    { text: "• Hướng 2 — Distance-based: ", options: { bold: true } },
    { text: "Định nghĩa độ đo khoảng cách (DTW — Dynamic Time Warping cho chuỗi lệch pha) ➔ Dùng k-NN.\n\n" },
    { text: "• Hướng 3 — Model-based: ", options: { bold: true } },
    { text: "Mô hình thống kê sinh chuỗi như HMM (Hidden Markov Model)." }
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
  slide17Content,
  [
    { text: "💡 Ví dụ Ứng dụng Nghiệp vụ:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phân loại khách hàng: ", options: { bold: true } },
    { text: "Dự đoán nhãn 'Rời bỏ (Churn)' vs 'Trung thành' dựa trên chuỗi giao dịch.\n\n" },
    { text: "• Điểm khác biệt lớn: ", options: { bold: true } },
    { text: "Hai khách hàng có cùng tổng chi tiêu nhưng chuỗi thời gian khác nhau (chi đều vs chi dồn rồi im bặt) ➔ Phân loại chuỗi mới phát hiện được!" }
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
  slide17Content,
  "💡 Nguyên tắc vàng: Cả 3 hướng đều quy về việc đưa chuỗi về dạng tính toán/so sánh được rồi tái sử dụng công cụ đã học.",
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

slide17Content.addNotes(
  "Giảng viên giải thích hình ảnh DTW kéo giãn thời gian để so sánh 2 chuỗi có hình dạng tương tự nhưng lệch pha."
);

// ----------------------------------------------------
// Slide 18: CONTENT (VÍ DỤ ỨNG DỤNG THỰC TẾ TẠI VIỆT NAM)
// ----------------------------------------------------
const slide18Content = pptx.addSlide({ masterName: "CONTENT" });
slide18Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide18Content.addText("ỨNG DỤNG THỰC TẾ DỮ LIỆU CHUỖI", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide18Content,
  [
    { text: "📈 Dự báo VN-Index bằng ARIMA:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Áp dụng quy trình Box-Jenkins dự báo xu hướng ngắn hạn cho VN-Index và HNX-Index." }
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
  slide18Content,
  [
    { text: "🤖 ARIMA vs AI (LSTM / ANN):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Nghiên cứu 2015–2025 tại VN chứng minh AI/LSTM vượt trội ARIMA khi thị trường sốc." }
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
  slide18Content,
  [
    { text: "🛒 Thương mại điện tử (Shopee/Tiki):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Khai phá chuỗi clickstream (Xem ➔ Thêm giỏ ➔ Mua) để tối ưu gợi ý trang chủ." }
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
  slide18Content,
  [
    { text: "✈️ Bán lẻ & Hàng không (WinMart/VNA):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Phân rã thành phần thời vụ Tết/hè để lập kế hoạch tồn kho, giá vé & nhân sự." }
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
  slide18Content,
  "💡 Thực tiễn Việt Nam: Dữ liệu chuỗi đang được ứng dụng rộng rãi từ tài chính đến e-commerce.",
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

slide18Content.addNotes(
  "Gợi ý thảo luận: Hỏi lớp học viên xem doanh nghiệp của họ đang sở hữu loại dữ liệu chuỗi nào có thể khai phá."
);

// ----------------------------------------------------
// Slide 19: CONTENT (BÀI TẬP 6.1.1: CHUỖI GIAO DỊCH THẺ)
// ----------------------------------------------------
const slide19Content = pptx.addSlide({ masterName: "CONTENT" });
slide19Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide19Content.addText("BÀI TẬP 6.1.1: CHUỖI GIAO DỊCH THẺ", { placeholder: "title" });

addText(
  slide19Content,
  [
    { text: "📝 Đề bài thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Câu 1: ", options: { bold: true } },
    { text: "Resample `amt` theo ngày; vẽ chuỗi 2019–2020.\n\n" },
    { text: "• Câu 2: ", options: { bold: true } },
    { text: "Phân rã Trend/Seasonal/Random.\n\n" },
    { text: "• Câu 3: ", options: { bold: true } },
    { text: "ADF, sai phân, ARIMA; so RMSE với dự báo naive.\n\n" },
    { text: "• Câu 4: ", options: { bold: true } },
    { text: "Theo `cc_num`: `amt_z_card`, `days_since_prev_txn` ➔ `features_seq.csv`.\n\n" },
    { text: "• Câu 5: ", options: { bold: true } },
    { text: "Vì sao chuỗi một chủ thẻ nhiễu hơn toàn hệ thống?" }
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
  slide19Content,
  [
    { text: "🎯 Gợi ý Giảng viên & Điểm chốt:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bài học từ Câu 3:\n", options: { bold: true } },
    { text: "  - Mô hình phức tạp phải vượt benchmark naive mới có giá trị.\n\n" },
    { text: "• Bài học từ Câu 4–5:\n", options: { bold: true } },
    { text: "  - Mắt xích đầu của chuỗi bài tập: mỗi bài của 6.1 tạo một nhóm đặc trưng, đến 6.4.3 chỉ cần ghép lại.\n  - Nhắc lớp lưu file để khỏi làm lại." }
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
  slide19Content,
  "💡 Luyện tập: phân rã chuỗi và ARIMA trên dữ liệu thẻ tín dụng.",
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

slide19Content.addNotes(
  "Giảng viên hướng dẫn học viên thực hành mã nguồn trong file bt6_1_timeseries.py."
);

// ----------------------------------------------------
// Slide 20: CONTENT (TÓM TẮT 6.1.1 — DỮ LIỆU CHUỖI)
// ----------------------------------------------------
const slide20Content = pptx.addSlide({ masterName: "CONTENT" });
slide20Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide20Content.addText("TÓM TẮT 6.1.1: KHAI PHÁ CHUỖI", { placeholder: "title" });

addText(
  slide20Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.1.1:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 3 Loại chuỗi: ", options: { bold: true } },
    { text: "Thời gian (số, cách đều), Ký hiệu (sự kiện), Sinh học.\n\n" },
    { text: "• 4 Bài toán cốt lõi:\n", options: { bold: true } },
    { text: "  1. Dự báo chuỗi thời gian (ARIMA / Box-Jenkins)\n  2. Tìm tương tự & Motif (Fourier/Wavelet, Matrix Profile)\n  3. Mẫu tuần tự (PrefixSpan, GSP)\n  4. Phân loại chuỗi (Feature, DTW, HMM)\n\n" },
    { text: "• Bộ công cụ Python: ", options: { bold: true } },
    { text: "`statsmodels`, `pmdarima`, `stumpy`, `vnstock`." }
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
  slide20Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.1.2:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nguyên tắc vàng lặp lại: ", options: { bold: true } },
    { text: "Biến chuỗi ➔ Đặc trưng số ➔ Tái dùng kỹ thuật Ch.3–5.\n\n" },
    { text: "• Bài học tiếp theo (6.1.2):\n", options: { bold: true } },
    { text: "  - Khi thông tin KHÔNG nằm trong từng đối tượng mà nằm ở QUAN HỆ & LIÊN KẾT giữa chúng.\n  - Khai phá Đồ thị & Mạng xã hội (Graph & Network Mining)." }
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
  slide20Content,
  "💡 Tiếp theo: từ dữ liệu chuỗi (thứ tự) sang đồ thị & mạng (quan hệ).",
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

slide20Content.addNotes(
  "Tóm tắt 6.1.1 và chuẩn bị dẫn dắt học viên chuyển sang mục 6.1.2 Khai phá đồ thị và mạng."
);
