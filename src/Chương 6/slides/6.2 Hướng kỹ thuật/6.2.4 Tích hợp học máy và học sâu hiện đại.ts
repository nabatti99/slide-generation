import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 68: SECTION
// ----------------------------------------------------
const slide68Section = pptx.addSlide({ masterName: "SECTION" });
slide68Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide68Section, "title", "6.2.4. TÍCH HỢP HỌC MÁY VÀ HỌC SÂU HIỆN ĐẠI");
addSectionText(slide68Section, "content", "Nội dung cập nhật ngoài giáo trình — Bản đồ thuật ngữ AI cho nhà quản lý");
addSectionText(slide68Section, "subContent", "\"Giáo trình dừng ở 2011–2018; thực tiễn đã đi xa — Nhà quản lý cần bản đồ mới để không lạc đường giữa các thuật ngữ AI.\"\n\n" +
  "Ensemble Models  |  Deep Learning (CNN/LSTM/GNN/Transformer)  |  Embedding");

// ----------------------------------------------------
// Slide 69: CONTENT (KHAI PHÁ DỮ LIỆU VÀ HỌC MÁY)
// ----------------------------------------------------
const slide69Content = pptx.addSlide({ masterName: "CONTENT" });
slide69Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide69Content.addText("KHAI PHÁ DỮ LIỆU VÀ HỌC MÁY", { placeholder: "title" });

addText(
  slide69Content,
  [
    { text: "🤖 Phân biệt KPDL vs Học máy (Machine Learning):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khai phá dữ liệu (KPDL): ", options: { bold: true } },
    { text: "Toàn bộ QUY TRÌNH tìm tri thức từ dữ liệu lớn (Làm sạch ➔ Khai phá ➔ Diễn giải ➔ Ra quyết định) — Góc nhìn Quản trị.\n\n" },
    { text: "• Học máy (ML): ", options: { bold: true } },
    { text: "Tập trung vào THUẬT TOÁN tự học từ dữ liệu & độ chính xác dự báo — Góc nhìn Kỹ thuật." }
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
  slide69Content,
  [
    { text: "⏳ Dòng thời gian Phát triển Kỹ thuật:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 1990s–2000s: ", options: { bold: true } },
    { text: "Thống kê + Cây quyết định + Luật kết hợp.\n\n" },
    { text: "• 2001–2015: ", options: { bold: true } },
    { text: "Phương pháp Tổ hợp (Ensemble) lên ngôi — Random Forest, XGBoost.\n\n" },
    { text: "• 2012–nay: ", options: { bold: true } },
    { text: "Học sâu (Deep Learning) bùng nổ nhờ GPU + Dữ liệu lớn.\n\n" },
    { text: "• 2017–nay: ", options: { bold: true } },
    { text: "Kính trúc Transformer ➔ Mô hình ngôn ngữ lớn (PhoBERT, GPT)." }
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
  slide69Content,
  "💡 Thông điệp phát triển: Mới không thay thế cũ, mà xếp thêm tầng lựa chọn — thuật toán cổ điển vẫn hoạt động hiệu quả.",
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

slide69Content.addNotes(
  "Giảng viên vẽ sơ đồ tiến trình 4 giai đoạn từ Cổ điển -> Ensemble -> Deep Learning -> Transformer."
);

// ----------------------------------------------------
// Slide 70: CONTENT (VỚI DỮ LIỆU BẢNG, "NHÀ VÔ ĐỊCH" THƯỜNG LÀ TỔ HỢP CÂY)
// ----------------------------------------------------
const slide70Content = pptx.addSlide({ masterName: "CONTENT" });
slide70Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide70Content.addText("HỌC MÁY TẬP THỂ (ENSEMBLE LEARNING)", { placeholder: "title" });

addText(
  slide70Content,
  [
    { text: "🌲 Ý tưởng Ensemble: Trí tuệ Đám đông Thuật toán:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bagging — Random Forest: ", options: { bold: true } },
    { text: "Trồng hàng trăm cây quyết định trên mẫu ngẫu nhiên, lấy phiếu bầu ➔ Giảm overfit, cực kỳ ổn định.\n\n" },
    { text: "• Boosting — Gradient Boosting (XGBoost, LightGBM): ", options: { bold: true } },
    { text: "Cây sau liên tục sửa lỗi cho các cây trước ➔ Độ chính xác hàng đầu trên dữ liệu bảng." }
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
  slide70Content,
  [
    { text: "💼 Vì sao Quan trọng với Học viên Kinh tế?:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Dữ liệu doanh nghiệp: ", options: { bold: true } },
    { text: "Dữ liệu giao dịch, CRM, tài chính chủ yếu là DỮ LIỆU BẢNG ➔ XGBoost thường thắng cả Học sâu với chi phí rẻ hơn nhiều.\n\n" },
    { text: "• Giải diễn giải gián tiếp: ", options: { bold: true } },
    { text: "Dùng ", },
    { text: "SHAP values", options: { bold: true } },
    { text: " để giải thích đóng góp của từng biến vào kết quả dự báo." }
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
  slide70Content,
  "💡 Chiến lược hai lớp: Nhiều ngân hàng dùng Scorecard (Logistic) cho duyệt vay chính thức và chạy XGBoost làm mô hình tham chiếu.",
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

slide70Content.addNotes(
  "Thảo luận: Ngân hàng nên dùng 1 cây đơn (dễ đọc) hay XGBoost + SHAP (chính xác hơn) cho mô hình duyệt vay?"
);

// ----------------------------------------------------
// Slide 71: CONTENT (HỌC SÂU & CÁC KIẾN TRÚC CHÍNH)
// ----------------------------------------------------
const slide71Content = pptx.addSlide({ masterName: "CONTENT" });
slide71Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide71Content.addText("HỌC SÂU & CÁC KIẾN TRÚC CHÍNH", { placeholder: "title" });

addTable(slide71Content, 
  [
    [
      { text: "Kiến trúc Học sâu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Sở trường xử lý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ánh xạ về Mục 6.1 Hướng dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "CNN (Convolutional Neural Net)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Ảnh, tín hiệu có cấu trúc không gian" },
      { text: "6.1.3 — Đa phương tiện (e-KYC, kiểm kệ hàng bán lẻ)" },
    ],
    [
      { text: "RNN / LSTM", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Chuỗi, phụ thuộc dài hạn theo thời gian" },
      { text: "6.1.1 — Dự báo giá chứng khoán, doanh số (đối thủ ARIMA)" },
    ],
    [
      { text: "Transformer (BERT / PhoBERT)", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Ngôn ngữ tự nhiên, xử lý song song" },
      { text: "6.1.3 — PhoBERT cho phân tích cảm xúc tiếng Việt" },
    ],
    [
      { text: "GNN (Graph Neural Net)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dữ liệu đồ thị và mạng quan hệ" },
      { text: "6.1.2 — Phát hiện gian lận thanh toán, gợi ý sản phẩm" },
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
  slide71Content,
  "💡 Điều kiện phát huy Học sâu: Dữ liệu cực lớn + Tính toán mạnh (GPU) + Bài toán phi cấu trúc (ảnh, văn bản, âm thanh).",
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

slide71Content.addNotes(
  "Giảng viên giúp học viên gọi đúng tên kiến trúc Deep Learning cho từng loại dữ liệu khi giao việc cho đội kỹ thuật."
);

// ----------------------------------------------------
// Slide 72: CONTENT (EMBEDDING — "NGUYÊN TẮC VÀNG" PHIÊN BẢN HIỆN ĐẠI)
// ----------------------------------------------------
const slide72Content = pptx.addSlide({ masterName: "CONTENT" });
slide72Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide72Content.addText("EMBEDDING: BIẾN ĐỔI SỐ HIỆN ĐẠI", { placeholder: "title" });

addText(
  slide72Content,
  [
    { text: "🔮 Bản chất của Embedding:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định nghĩa: ", options: { bold: true } },
    { text: "Mô hình TỰ HỌC cách 'dịch' đối tượng thành vector sao cho đối tượng giống nhau nằm gần nhau trong không gian số.\n\n" },
    { text: "• Phiên bản tự động hóa: ", options: { bold: true } },
    { text: "Hiện thực hóa nguyên tắc vàng của 6.1 (Biến dữ liệu phức tạp ➔ Vector số)." }
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
  slide72Content,
  [
    { text: "📦 Các loại Embedding Phổ biến:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Word embedding (word2vec, PhoBERT):\n", options: { bold: true } },
    { text: "  Từ/câu ➔ Vector ('tốt' và 'ổn' nằm gần nhau).\n\n" },
    { text: "• Node embedding (node2vec):\n", options: { bold: true } },
    { text: "  Đỉnh của mạng ➔ Vector (6.1.2).\n\n" },
    { text: "• Item / User embedding:\n", options: { bold: true } },
    { text: "  Khách hàng & sản phẩm ➔ Vector (Trái tim của Hệ gợi ý 6.3.5)." }
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
  slide72Content,
  "💡 Phép toán trực giác: vector('vua') − vector('đàn ông') + vector('phụ nữ') ≈ vector('nữ hoàng').",
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

slide72Content.addNotes(
  "Giảng viên minh họa hình ảnh các từ tiếng Việt được chiếu xuống không gian 2D, các từ khen/chê tách biệt nhau."
);

// ----------------------------------------------------
// Slide 73: CONTENT (SO SÁNH MÔ HÌNH CỔ ĐIỂN & HỌC SÂU)
// ----------------------------------------------------
const slide73Content = pptx.addSlide({ masterName: "CONTENT" });
slide73Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide73Content.addText("SO SÁNH MÔ HÌNH CỔ ĐIỂN & HỌC SÂU", { placeholder: "title" });

addTable(slide73Content, 
  [
    [
      { text: "Tiêu chí ra quyết định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nghiêng về CỔ ĐIỂN (Hồi quy, Cây, XGBoost)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nghiêng về HỌC SÂU (Deep Learning)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Loại dữ liệu", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dữ liệu bảng (giao dịch, tài chính, CRM)" },
      { text: "Dữ liệu phi cấu trúc (ảnh, văn bản, âm thanh)" },
    ],
    [
      { text: "Cỡ dữ liệu", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Nghìn — trăm nghìn mẫu" },
      { text: "Hàng triệu mẫu trở lên" },
    ],
    [
      { text: "Yêu cầu diễn giải", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Cao (tín dụng, bảo hiểm, y tế, pháp lý)" },
      { text: "Thấp (gợi ý sản phẩm, xếp hạng nội dung)" },
    ],
    [
      { text: "Hạ tầng & Chi phí", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Hạn chế — CPU / Laptop chạy được" },
      { text: "Dồi dào — GPU, MLOps, Chuyên gia AI" },
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
  slide73Content,
  "💡 Quy tắc quản trị: Luôn dựng Baseline mô hình cổ điển trước; chỉ đầu tư Học sâu khi giá trị tăng thêm bù được chi phí.",
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

slide73Content.addNotes(
  "Thảo luận: Startup TMĐT 50 nhân sự muốn dùng AI dự báo tồn kho — tư vấn lộ trình kỹ thuật nào? (Ưu tiên XGBoost trước, chưa vội LSTM)."
);

// ----------------------------------------------------
// Slide 74: CONTENT (ỨNG DỤNG HỌC MÁY & HỌC SÂU)
// ----------------------------------------------------
const slide74Content = pptx.addSlide({ masterName: "CONTENT" });
slide74Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide74Content.addText("ỨNG DỤNG HỌC MÁY & HỌC SÂU", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide74Content,
  [
    { text: "📈 Chứng khoán — cái giá của độ chính xác:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Khép lại so sánh ARIMA vs LSTM ở 6.1.1: phần chính xác tăng thêm đổi bằng hạ tầng GPU, dữ liệu dài hơn và một mô hình không giải trình được." }
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
  slide74Content,
  [
    { text: "💳 Ngân hàng số & eKYC (CNN):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Mở tài khoản trực tuyến qua nhận diện khuôn mặt CNN + Liveness detection chống giả mạo hình ảnh." }
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
  slide74Content,
  [
    { text: "🇻🇳 Xử lý Tiếng Việt (PhoBERT):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "PhoBERT (VinAI) là mô hình mở — doanh nghiệp VN không phải huấn luyện lại từ đầu; nền cho trợ lý ảo ngân hàng/viễn thông." }
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
  slide74Content,
  [
    { text: "🤖 AutoML & LLMs (GPT/Gemini):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "AutoML hạ rào cản kỹ thuật cho SMEs; LLMs mở hướng truy vấn dữ liệu bằng ngôn ngữ tự nhiên." }
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
  slide74Content,
  "💡 Thực tiễn Việt Nam: Học máy & Học sâu đang thâm nhập mạnh mẽ từ chấm điểm tín dụng đến eKYC và trợ lý ảo.",
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

slide74Content.addNotes(
  "Hỏi học viên: Với từng ứng dụng thực tế trên, kiến trúc AI nào đứng đằng sau? (LSTM / CNN / PhoBERT / Transformer)."
);

// ----------------------------------------------------
// Slide 75: CONTENT (TÓM TẮT 6.2.4 — VÀ KHÉP LẠI MỤC 6.2)
// ----------------------------------------------------
const slide75Content = pptx.addSlide({ masterName: "CONTENT" });
slide75Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide75Content.addText("TÓM TẮT 6.2.4 & KHÉP LẠI MỤC 6.2", { placeholder: "title" });

addText(
  slide75Content,
  [
    { text: "📌 Tổng kết 4 Trường phái Kỹ thuật (Mục 6.2):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 6.2.1 Thống kê: ", options: { bold: true } },
    { text: "Suy diễn, kiểm định, giải trình pháp lý.\n\n" },
    { text: "• 6.2.2 Lý thuyết: ", options: { bold: true } },
    { text: "Quan điểm Kinh tế vi mô — Mẫu phải HÀNH ĐỘNG ĐƯỢC.\n\n" },
    { text: "• 6.2.3 Trực quan: ", options: { bold: true } },
    { text: "Luôn VẼ trước khi MÔ HÌNH; giao tiếp kết quả bằng hình ảnh.\n\n" },
    { text: "• 6.2.4 Học máy & Học sâu: ", options: { bold: true } },
    { text: "Ensemble cho dữ liệu bảng; Deep Learning cho phi cấu trúc." }
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
  slide75Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.3:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khép lại 6.2: ", options: { bold: true } },
    { text: "Đã giải quyết trọn vẹn câu hỏi 'Khai phá BẰNG GÌ?'.\n\n" },
    { text: "• Sang Mục 6.3 — Hướng ứng dụng:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Khai phá CHO AI? ➔ Đưa tri thức vào từng ngành: Tài chính, Bán lẻ, Viễn thông, Hệ gợi ý và Đạo đức xã hội." }
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
  slide75Content,
  "💡 Khép lại 6.2: Đã làm chủ kho phương pháp luận khai phá dữ liệu từ Thống kê cổ điển đến AI/Deep Learning hiện đại.",
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

slide75Content.addNotes(
  "Giảng viên chốt toàn bộ Mục 6.2 Hướng kỹ thuật và chuyển giao sang Mục 6.3 Hướng ứng dụng."
);
