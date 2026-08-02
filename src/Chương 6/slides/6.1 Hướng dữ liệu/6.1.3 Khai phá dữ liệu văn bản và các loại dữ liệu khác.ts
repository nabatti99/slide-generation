import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 32: SECTION
// ----------------------------------------------------
const slide32Section = pptx.addSlide({ masterName: "SECTION" });
slide32Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide32Section, "title", "6.1.3. KHAI PHÁ VĂN BẢN & CÁC LOẠI DỮ LIỆU KHÁC");
addSectionText(slide32Section, "content", "Giải quyết Nguồn 3 của tình huống mở đầu: đo tâm lý thị trường từ bình luận");
addSectionText(slide32Section, "subContent", "\"Khoảng 80% dữ liệu của doanh nghiệp là phi cấu trúc — và phần lớn chưa từng được khai thác.\"\n\n" +
  "Tiền xử lý Tiếng Việt  |  TF-IDF & Sentiment Analysis  |  Dữ liệu Đa phương tiện & Không gian");

// ----------------------------------------------------
// Slide 33: CONTENT (KHAI PHÁ VĂN BẢN & BÀI TOÁN CHÍNH)
// ----------------------------------------------------
const slide33Content = pptx.addSlide({ masterName: "CONTENT" });
slide33Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide33Content.addText("KHAI PHÁ VĂN BẢN & BÀI TOÁN CHÍNH", { placeholder: "title" });

addText(
  slide33Content,
  [
    { text: "📄 Bản chất Dữ liệu Văn bản:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phi cấu trúc: ", options: { bold: true } },
    { text: "Không có dòng - cột có sẵn; máy tính không 'đọc hiểu' trực tiếp được.\n\n" },
    { text: "• Nguyên tắc vàng lần thứ ba: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phải BIẾN VĂN BẢN THÀNH SỐ (ma trận/vector) trước khi áp dụng thuật toán.\n\n" },
    { text: "• Quy trình chuẩn: ", options: { bold: true } },
    { text: "Thu thập ➔ Tiền xử lý ➔ Biểu diễn số ➔ Mô hình Ch.3–5 ➔ Diễn giải." }
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
  slide33Content,
  [
    { text: "🎯 4 Bài toán Khai phá Văn bản trong Kinh doanh:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phân loại văn bản: ", options: { bold: true } },
    { text: "Gán nhãn tự động (spam/ham, phân loại khiếu nại).\n\n" },
    { text: "• Phân tích cảm xúc (Sentiment): ", options: { bold: true } },
    { text: "Tích cực / Tiêu cực / Trung tính — đo tâm lý thị trường.\n\n" },
    { text: "• Phân cụm & Chủ đề (Topic Modeling): ", options: { bold: true } },
    { text: "Nhóm review theo phàn nàn GIAO HÀNG hay CHẤT LƯỢNG.\n\n" },
    { text: "• Trích xuất thông tin: ", options: { bold: true } },
    { text: "Rút tên công ty, số tiền, ngày tháng từ hợp đồng." }
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
  slide33Content,
  "💡 Text mining: biến kho tài liệu phi cấu trúc thành tri thức định lượng.",
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

slide33Content.addNotes(
  "Giảng viên hỏi lớp: Đơn vị anh/chị có kho văn bản nào chưa khai thác (biên bản, khiếu nại, khảo sát mở)?"
);

// ----------------------------------------------------
// Slide 34: CONTENT (TIỀN XỬ LÝ VĂN BẢN TIẾNG VIỆT)
// ----------------------------------------------------
const slide34Content = pptx.addSlide({ masterName: "CONTENT" });
slide34Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide34Content.addText("TIỀN XỬ LÝ VĂN BẢN TIẾNG VIỆT", { placeholder: "title" });

addText(
  slide34Content,
  [
    { text: "🛠️ Quy trình Tiền xử lý Văn bản:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Tách từ (Tokenization): ", options: { bold: true } },
    { text: "Cắt văn bản thành các đơn vị từ.\n\n" },
    { text: "• Chuẩn hóa: ", options: { bold: true } },
    { text: "Về chữ thường, bỏ dấu câu, sửa lỗi chính tả.\n\n" },
    { text: "• Loại từ dừng (Stopwords): ", options: { bold: true } },
    { text: "Bỏ các từ quá phổ biến ('là', 'và', 'the') không giúp phân biệt.\n\n" },
    { text: "• Stemming / Lemmatization: ", options: { bold: true } },
    { text: "Đưa từ về dạng gốc (chủ yếu trong tiếng Anh)." }
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
  slide34Content,
  [
    { text: "🇻🇳 Thách thức riêng của Tiếng Việt:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Tách từ phức tạp: ", options: { bold: true } },
    { text: "Tiếng Việt từ ghép không có dấu phân cách ('học sinh' ≠ 'học' + 'sinh'). Cần thư viện `underthesea`, `VnCoreNLP`.\n\n" },
    { text: "• Ngôn ngữ Mạng xã hội: ", options: { bold: true } },
    { text: "Viết tắt (ko, đc, sp), teencode, sai dấu.\n\n" },
    { text: "❓ Câu hỏi thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "“Câu review 'sản phẩm không tốt' nếu bỏ từ dừng 'không' thì điều gì xảy ra với phân tích cảm xúc?”" }
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
  slide34Content,
  "💡 Lưu ý quan trọng: Với bài toán Sentiment Analysis, các từ phủ định ('không', 'chưa', 'chẳng') BẮT BUỘC phải giữ lại!",
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

slide34Content.addNotes(
  "Chốt ý: Bỏ từ 'không' làm đảo ngược hoàn toàn cảm xúc ('không tốt' -> 'tốt'). Danh sách stopwords phải được tùy chỉnh theo bài toán."
);

// ----------------------------------------------------
// Slide 35: CONTENT (BIỂU DIỄN VĂN BẢN (BoW & TF-IDF))
// ----------------------------------------------------
const slide35Content = pptx.addSlide({ masterName: "CONTENT" });
slide35Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide35Content.addText("BIỂU DIỄN VĂN BẢN (BoW & TF-IDF)", { placeholder: "title" });

addText(
  slide35Content,
  [
    { text: "📊 Bag-of-Words vs Trọng số TF-IDF:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bag-of-Words (BoW): ", options: { bold: true } },
    { text: "Đếm tần suất xuất hiện của từ. Hạn chế: từ xuất hiện nhiều chưa chắc quan trọng ('sản phẩm' có trong mọi review).\n\n" },
    { text: "• TF-IDF (Term Frequency - Inverse Document Frequency):\n", options: { bold: true } },
    { text: "  - TF: Từ xuất hiện nhiều trong 1 bài ➔ Quan trọng với bài đó.\n  - IDF: Từ xuất hiện trong ÍT bài của cả kho ➔ Có sức phân biệt cao.\n  - Công thức: TF-IDF = TF × log(N / DF)." }
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
  slide35Content,
  [
    { text: "⚡ Tái sử dụng Kỹ thuật Ch.3–5 & Giới hạn:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Sau khi có Ma trận TF-IDF:\n", options: { bold: true } },
    { text: "  Mọi kỹ thuật Ch.3–5 (Phân lớp, Phân cụm) dùng được ngay mà không cần chỉnh sửa!\n\n" },
    { text: "• Hạn chế của TF-IDF:\n", options: { bold: true } },
    { text: "  Không hiểu ngữ nghĩa ('tốt' và 'ổn' bị xem là 2 chiều độc lập).\n\n" },
    { text: "• Hướng hiện đại: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Word Embedding & PhoBERT (Học ngữ cảnh)." }
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
  slide35Content,
  "💡 Trực giác TF-IDF: Từ xuất hiện nhiều trong 1 bài nhưng hiếm trong toàn bộ kho tài liệu sẽ có trọng số cao nhất.",
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

slide35Content.addNotes(
  "Giảng viên tính tay 1 ô TF-IDF đơn giản trên bảng để học viên hình dung con số xuất phát từ đâu."
);

// ----------------------------------------------------
// Slide 36: CONTENT (PHÂN TÍCH CẢM XÚC — BÀI TOÁN CHỦ LỰC TRONG KINH DOANH)
// ----------------------------------------------------
const slide36Content = pptx.addSlide({ masterName: "CONTENT" });
slide36Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide36Content.addText("PHÂN TÍCH CẢM XÚC (SENTIMENT ANALYSIS)", { placeholder: "title" });

addText(
  slide36Content,
  [
    { text: "📈 3 Cấp độ Tiếp cận Sentiment Analysis:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• 1. Lexicon-based: ", options: { bold: true } },
    { text: "Đếm từ theo từ điển cảm xúc — Nhanh, không cần nhãn nhưng kém với mỉa mai.\n\n" },
    { text: "• 2. Học máy cổ điển: ", options: { bold: true } },
    { text: "TF-IDF + Naive Bayes / Logistic / SVM (Tái dùng Ch.4) — Chính xác hơn.\n\n" },
    { text: "• 3. Học sâu (PhoBERT): ", options: { bold: true } },
    { text: "Hiểu ngữ cảnh tiếng Việt tốt nhất — đắt về dữ liệu và tính toán (dẫn chứng ở slide ví dụ VN)." }
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
  slide36Content,
  [
    { text: "🎯 Ứng dụng Nguồn 3 & Thảo luận Nghiên cứu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Đo Chỉ số Tâm lý Thị trường: ", options: { bold: true } },
    { text: "Biến tâm lý nhà đầu tư từ diễn đàn/tin tức thành biến số dự báo VN-Index (Nối với 6.1.1).\n\n" },
    { text: "❓ Câu hỏi thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "“Sentiment trên diễn đàn chứng khoán ĐI TRƯỚC hay CHẠY THEO biến động giá? Thiết kế kiểm chứng ra sao?”" }
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
  slide36Content,
  "💡 Ý tưởng thiết kế: Xây chuỗi chỉ số sentiment theo ngày và kiểm định nhân quả Granger với chuỗi lợi suất VN-Index.",
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

slide36Content.addNotes(
  "Gợi ý giảng viên: Kết nối đẹp giữa 6.1.3 (Sentiment) và 6.1.1 (Chuỗi thời gian) qua kiểm định nhân quả Granger."
);

// ----------------------------------------------------
// Slide 37: CONTENT (DEMO 3 — PHÂN TÍCH CẢM XÚC REVIEW SHOPEE TIẾNG VIỆT)
// ----------------------------------------------------
const slide37Content = pptx.addSlide({ masterName: "CONTENT" });
slide37Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide37Content.addText("DEMO 3: PHÂN TÍCH CẢM XÚC SHOPEE", { placeholder: "title" });

addText(
  slide37Content,
  [
    { text: "💻 Quy trình Thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Nạp tập review Shopee tiếng Việt có nhãn; xem phân bố nhãn.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Tiền xử lý: Tách từ bằng `underthesea`, chuẩn hóa teencode, GIỮ từ phủ định.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Tạo TF-IDF (`TfidfVectorizer`), huấn luyện `LogisticRegression`, đánh giá Accuracy/Confusion Matrix.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "In top từ khóa đặc trưng mỗi lớp & thử dự đoán câu review mới." }
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
  slide37Content,
  [
    { text: "❓ Thảo luận Lỗi Mô hình & Đánh giá:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Mô hình đoán sai những câu nào trong các câu lớp tự đặt? Câu sai có đặc điểm gì chung?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Nhận xét lỗi:\n", options: { bold: true } },
    { text: "  - Thường rơi vào câu chứa mỉa mai, phủ định kép hoặc từ chưa từng xuất hiện.\n  - Minh họa lý do cần PhoBERT/Học sâu ở 6.2.4." }
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
  slide37Content,
  "💡 Với bài toán thông thường, TF-IDF + Logistic đã đủ dùng và dễ giải thích.",
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

slide37Content.addNotes(
  "Giảng viên chiếu file demo_6_1_3_sentiment_shopee.py và giải thích trực tiếp kết quả chạy mô hình."
);

// ----------------------------------------------------
// Slide 38: CONTENT (DỮ LIỆU ĐA PHƯƠNG TIỆN & KHÔNG GIAN)
// ----------------------------------------------------
const slide38Content = pptx.addSlide({ masterName: "CONTENT" });
slide38Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide38Content.addText("DỮ LIỆU ĐA PHƯƠNG TIỆN & KHÔNG GIAN", { placeholder: "title" });

addText(
  slide38Content,
  [
    { text: "📸 Dữ liệu Đa phương tiện (Multimedia):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định dạng: ", options: { bold: true } },
    { text: "Hình ảnh, âm thanh, video.\n\n" },
    { text: "• Nguyên tắc: ", options: { bold: true } },
    { text: "Ảnh ➔ Vector đặc trưng (do CNN tự học) ➔ Phân lớp / Phân cụm.\n\n" },
    { text: "• Ứng dụng kinh tế: ", options: { bold: true } },
    { text: "e-KYC ngân hàng (xác thực khuôn mặt), kiểm đếm kệ hàng bán lẻ bằng ảnh, phân loại nông sản." }
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
  slide38Content,
  [
    { text: "🗺️ Dữ liệu Không gian (Spatial Data):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định dạng: ", options: { bold: true } },
    { text: "Mọi bản ghi có tọa độ (lat, long) vị trí.\n\n" },
    { text: "• Bài toán: ", options: { bold: true } },
    { text: "Chọn vị trí mở cửa hàng, phân cụm tuyến giao hàng, phát hiện bất thường vị trí.\n\n" },
    { text: "• Khoảng cách Haversine: ", options: { bold: true } },
    { text: "Tính khoảng cách địa lý giữa 2 tọa độ trên mặt cầu Trái Đất." }
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
  slide38Content,
  "💡 Nhất quán nguyên tắc vàng: Dữ liệu ảnh hay tọa độ đều được quy về vector số để tái dùng mô hình Ch.3–5.",
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

slide38Content.addNotes(
  "Mục này mở rộng tầm nhìn, nhấn mạnh tính nhất quán của quy trình khai phá dữ liệu phức tạp."
);

// ----------------------------------------------------
// Slide 39: CONTENT (ỨNG DỤNG VĂN BẢN & KHÔNG GIAN)
// ----------------------------------------------------
const slide39Content = pptx.addSlide({ masterName: "CONTENT" });
slide39Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide39Content.addText("ỨNG DỤNG VĂN BẢN & KHÔNG GIAN", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide39Content,
  [
    { text: "📊 Social Listening (YouNet Media):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Theo dõi thương hiệu trên Facebook/TikTok, đo sentiment & phát hiện khủng hoảng truyền thông sớm." }
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
  slide39Content,
  [
    { text: "🛒 Sentiment E-commerce:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Nghiên cứu ứng dụng PhoBERT phân tích ~935.000 review Shopee/Tiki tiếng Việt đạt ~91% độ chính xác." }
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
  slide39Content,
  [
    { text: "📰 Tin tức & Giao dịch Chứng khoán:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Công ty chứng khoán dùng NLP đọc báo cáo phân tích tự động tạo tín hiệu giao dịch & cảnh báo rủi ro." }
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
  slide39Content,
  [
    { text: "☕ Không gian Bán lẻ (Highlands/Circle K):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Phân tích mật độ dân cư & tọa độ không gian để chọn vị trí tối ưu khi mở điểm bán mới." }
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
  slide39Content,
  "💡 Thực tiễn Việt Nam: Dữ liệu văn bản và không gian đóng vai trò chiến lược trong các quyết định e-commerce và bán lẻ.",
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

slide39Content.addNotes(
  "Giảng viên hỏi nhanh lớp: Kỹ thuật nào của bài hôm nay đứng sau các ứng dụng thực tế này?"
);

// ----------------------------------------------------
// Slide 40: CONTENT (BÀI TẬP 6.1.3: KHÔNG GIAN & VĂN BẢN TÍN DỤNG)
// ----------------------------------------------------
const slide40Content = pptx.addSlide({ masterName: "CONTENT" });
slide40Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide40Content.addText("BÀI TẬP 6.1.3: KHÔNG GIAN & VĂN BẢN", { placeholder: "title" });

addText(
  slide40Content,
  [
    { text: "📝 Đề bài thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Câu 1 (Không gian): ", options: { bold: true } },
    { text: "Tính `dist_km` (Haversine) từ nhà chủ thẻ đến cửa hàng ➔ `features_spatial.csv`.\n\n" },
    { text: "• Câu 2: ", options: { bold: true } },
    { text: "Boxplot khoảng cách `is_fraud = 0` vs `= 1`: gian lận có xa nhà hơn?\n\n" },
    { text: "• Câu 3 (Văn bản): ", options: { bold: true } },
    { text: "Tạo TF-IDF cột `job` (chức danh); phân cụm K-means 3 nhóm nghề chính.\n\n" },
    { text: "• Câu 4: ", options: { bold: true } },
    { text: "Khoảng cách xa nhà có nên đưa vào mô hình Fraud 6.4.3?" }
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
  slide40Content,
  [
    { text: "🎯 Gợi ý Giảng viên & Đạo đức KPDL:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Kết quả Câu 2:\n", options: { bold: true } },
    { text: "  Giao dịch gian lận có khoảng cách xa nhà lớn hơn rõ rệt ➔ Đặc trưng mạnh cho mô hình Fraud.\n\n" },
    { text: "• Thảo luận Đạo đức KPDL (Câu 4):\n", options: { bold: true } },
    { text: "  Dùng nghề nghiệp có thể tạo thiên lệch hệ thống ➔ Gieo mầm cho 6.3.6 (Đạo đức & Nghị định 13/2023)." }
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
  slide40Content,
  "💡 Luyện tập: khoảng cách Haversine và TF-IDF nghề nghiệp làm biến dự báo.",
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

slide40Content.addNotes(
  "Giảng viên hướng dẫn học viên chạy file bt6_3_spatial_text.py và thảo luận khía cạnh đạo đức dữ liệu cá nhân."
);

// ----------------------------------------------------
// Slide 41: CONTENT (TÓM TẮT 6.1.3: KHAI PHÁ VĂN BẢN)
// ----------------------------------------------------
const slide41Content = pptx.addSlide({ masterName: "CONTENT" });
slide41Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide41Content.addText("TÓM TẮT 6.1.3: KHAI PHÁ VĂN BẢN", { placeholder: "title" });

addText(
  slide41Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.1.3:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Quy trình chuẩn: ", options: { bold: true } },
    { text: "Văn bản thô ➔ Tiền xử lý (tách từ `underthesea`) ➔ TF-IDF ➔ Mô hình Ch.3–5.\n\n" },
    { text: "• Bài toán chủ lực: ", options: { bold: true } },
    { text: "Phân loại văn bản & Phân tích cảm xúc (Lexicon ➔ Logistic ➔ PhoBERT).\n\n" },
    { text: "• Dữ liệu Không gian: ", options: { bold: true } },
    { text: "Tọa độ ➔ Khoảng cách Haversine ➔ Phân cụm & Phát hiện bất thường." }
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
  slide41Content,
  [
    { text: "🚀 Điểm mấu chốt Thực hành:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Tiền xử lý quyết định thành bại:\n", options: { bold: true } },
    { text: "  Giữ từ phủ định, chuẩn hóa teencode tiếng Việt.\n\n" },
    { text: "• Bộ công cụ Python:\n", options: { bold: true } },
    { text: "  `underthesea`, `scikit-learn`, `geopandas`, `folium`." }
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
  slide41Content,
  "💡 Nhất quán toàn mục 6.1: Biến biến dữ liệu phức tạp thành biểu diễn số rồi tái sử dụng kỹ thuật đã học ở Ch.3–5.",
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

slide41Content.addNotes(
  "Giảng viên tổng kết ngắn gọn quy trình xử lý văn bản và không gian."
);

// ----------------------------------------------------
// Slide 42: CONTENT (KHÉP LẠI 6.1: LỜI GIẢI 3 NGUỒN DỮ LIỆU)
// ----------------------------------------------------
const slide42Content = pptx.addSlide({ masterName: "CONTENT" });
slide42Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide42Content.addText("KHÉP LẠI 6.1: LỜI GIẢI 3 NGUỒN DỮ LIỆU", { placeholder: "title" });

addText(
  slide42Content,
  [
    { text: "✅ Tổng kết Lời giải 3 Nguồn dữ liệu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nguồn 1 (Chuỗi giá VN-Index) ➔ 6.1.1:\n", options: { bold: true } },
    { text: "  ARIMA/Box-Jenkins, motif ➔ Dự báo xu hướng ngắn hạn kèm khoảng tin cậy.\n\n" },
    { text: "• Nguồn 2 (Mạng sở hữu chéo) ➔ 6.1.2:\n", options: { bold: true } },
    { text: "  Centrality, Louvain ➔ Chỉ ra công ty 'trung tâm rủi ro' & nhóm lợi ích.\n\n" },
    { text: "• Nguồn 3 (Bình luận review) ➔ 6.1.3:\n", options: { bold: true } },
    { text: "  TF-IDF, Sentiment ➔ Đo chỉ số tâm lý thị trường." }
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
  slide42Content,
  [
    { text: "🌟 Bức tranh Lớn & Cầu nối 6.2:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nguyên tắc vàng xuyên suốt:\n", options: { bold: true } },
    { text: "  Biến dữ liệu phức tạp về dạng số ➔ Tái sử dụng kỹ thuật đã học.\n\n" },
    { text: "• Bước sang Mục 6.2 — Hướng kỹ thuật:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Cùng một dữ liệu, có những trường phái kỹ thuật nào để khai phá? (Thống kê, Lý thuyết, Trực quan, Học máy / Học sâu)." }
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
  slide42Content,
  "💡 Khép lại 6.1: Đã giải quyết trọn vẹn câu hỏi 'Khai phá CÁI GÌ?' đối với các loại dữ liệu phức tạp.",
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

slide42Content.addNotes(
  "Giảng viên chốt lại mục 6.1 và chuyển tiếp sang mục 6.2 Hướng kỹ thuật."
);
