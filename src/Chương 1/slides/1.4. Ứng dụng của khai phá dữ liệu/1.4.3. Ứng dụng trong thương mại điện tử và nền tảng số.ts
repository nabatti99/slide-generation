import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 19 — SECTION
// ----------------------------------------------------
const slide19 = pptx.addSlide({ masterName: "SECTION" });
slide19.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide19.addText("1.4.3. THƯƠNG MẠI ĐIỆN TỬ VÀ NỀN TẢNG SỐ", {
  placeholder: "title",
});
slide19.addText("Mỗi lần tìm kiếm, nhấp chuột hay đánh giá đều có thể trở thành dữ liệu. Khai phá dữ liệu biến các dấu vết số này thành gợi ý cá nhân hóa và xếp hạng tìm kiếm phù hợp.", {
  placeholder: "content",
});
slide19.addText("Các ứng dụng chính:\nHệ gợi ý cá nhân hóa ➔ Xếp hạng tìm kiếm nội dung ➔ Phân tích cảm xúc văn bản", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 20 — CONTENT: Hệ gợi ý
// ----------------------------------------------------
const slide20 = pptx.addSlide({ masterName: "CONTENT" });
slide20.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide20.addText("HỆ GỢI Ý CÁ NHÂN HÓA (RECOMMENDER SYSTEMS)", {
  placeholder: "title",
});

const optIntro20 = addText(slide20, "Hệ gợi ý đề xuất sách, phim, khóa học hoặc sản phẩm phù hợp nhất dựa trên hành vi quá khứ và sự tương đồng của người dùng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW20 = cmToInch(11.5);
const colH20 = cmToInch(3.2);
const colY20 = (optIntro20.y as number) + (optIntro20.h as number) + cmToInch(0.2);

// Left table: 3 approaches
slide20.addTable([
  [
    { text: "Phương pháp gợi ý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đặc điểm triển khai", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Luật kết hợp" }, { text: "Mục nào thường đi cùng nhau?" }, { text: "Gợi ý chung cấp giỏ hàng cho toàn bộ khách hàng." }],
  [{ text: "Lọc cộng tác dựa trên người dùng" }, { text: "Những người giống bạn thích gì?" }, { text: "Cá nhân hóa theo sở thích của nhóm tương đồng." }],
  [{ text: "Lọc cộng tác dựa trên sản phẩm", options: { bold: true, color: DUE_COLORS.green } }, { text: "Mục nào giống mục bạn từng xem/mua?" }, { text: "Gợi ý khóa học/sản phẩm có đặc trưng tương đồng khóa cũ." }]
], {
  x: cmToInch(0.8),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Implementation notes
addText(slide20, "⚙️ THÁCH THỨC VẬN HÀNH THỰC TẾ\n\n• Vấn đề khởi đầu lạnh (Cold Start):\n  ↳ Người dùng mới hoặc sản phẩm mới chưa có lịch sử tương tác ➔ Khó gợi ý bằng lọc cộng tác; cần dựa trên đặc trưng nội dung.\n• Tính đa dạng và bất ngờ (Serendipity):\n  ↳ Tránh gợi ý lặp lại quá mức các mục người dùng đã biết.\n• Phản hồi vòng lặp (Feedback loop):\n  ↳ Cần theo dõi hành vi mua thực tế sau gợi ý để tránh hiện tượng chỉ kích thích lượt nhấp click ảo mà không tạo ra chuyển đổi thực.", {
  x: cmToInch(13.1),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide20, "💡 Hệ gợi ý tốt không chỉ trả lời “mục nào phổ biến”, mà trả lời “mục nào có ích và phù hợp nhất với người dùng này, trong thời điểm này”.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide20.addNotes("Nội dung bổ sung:\nCollaborative filtering dùng lịch sử mua, đánh giá hoặc hành vi của người dùng cùng với hành vi của những người có sở thích tương tự để tạo gợi ý ở cấp cá nhân.");

// ----------------------------------------------------
// Slide 21 — CONTENT: Đề xuất khóa học
// ----------------------------------------------------
const slide21 = pptx.addSlide({ masterName: "CONTENT" });
slide21.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide21.addText("TÌNH HUỐNG: ĐỀ XUẤT KHÓA HỌC CHO HỌC VIÊN", {
  placeholder: "title",
});

const optIntro21 = addText(slide21, "Tình huống: Học viên đã hoàn thành hai học phần Thống kê ứng dụng và Phân tích dữ liệu bằng R. Cần gợi ý khóa học tiếp theo.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const colY21 = (optIntro21.y as number) + (optIntro21.h as number) + cmToInch(0.2);

// Left table: Observations
slide21.addTable([
  [
    { text: "Dữ liệu quan sát hành vi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa / Diễn giải nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Đã học Thống kê ứng dụng" }, { text: "Có nền tảng vững vàng về tư duy dữ liệu thống kê." }],
  [{ text: "Đã học Phân tích dữ liệu bằng R" }, { text: "Đã có công cụ lập trình xử lý dữ liệu cơ bản." }],
  [{ text: "Thường click xem nội dung mô hình dự báo" }, { text: "Có xu hướng quan tâm mạnh đến ứng dụng dự đoán." }],
  [{ text: "Học viên tương tự học tiếp Khai phá dữ liệu" }, { text: "Tín hiệu lọc cộng tác từ hành vi nhóm tương đồng." }]
], {
  x: cmToInch(0.8),
  y: colY21,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Explainable recommendations
slide21.addTable([
  [
    { text: "Gợi ý khóa học đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lý do giải thích lộ trình học tập", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Khai phá dữ liệu", options: { bold: true } }, { text: "Phù hợp chuỗi kiến thức logic: Thống kê ➔ R ➔ Khai phá dữ liệu." }],
  [{ text: "2. Dự báo kinh doanh", options: { bold: true } }, { text: "Phù hợp nền tảng phân tích R và sự quan tâm tới mô hình dự báo." }]
], {
  x: cmToInch(13.1),
  y: colY21,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide21, "💡 Cá nhân hóa trong giáo dục không nên chỉ tối đa hóa lượt đăng ký ngắn hạn; nó cần hỗ trợ một lộ trình học phù hợp với năng lực nền tảng của từng học viên.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide21.addNotes("Nội dung bổ sung:\nNếu học viên mới chưa có lịch sử đánh giá (cold start), cần kết hợp thông tin về nội dung khóa học, điều kiện tiên quyết và mục tiêu học tập thay vì chỉ dựa vào hành vi của người dùng tương tự.");

// ----------------------------------------------------
// Slide 22 — CONTENT: Tìm kiếm và xếp hạng
// ----------------------------------------------------
const slide22 = pptx.addSlide({ masterName: "CONTENT" });
slide22.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide22.addText("TÌM KIẾM VÀ XẾP HẠNG NỘI DUNG", {
  placeholder: "title",
});

const optIntro22 = addText(slide22, "Hệ thống tìm kiếm cần ước lượng và xếp hạng xem tài liệu nào phù hợp nhất để đưa lên vị trí đầu tiên của trang kết quả.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY22 = (optIntro22.y as number) + (optIntro22.h as number) + cmToInch(0.2);

// Left table: signals
slide22.addTable([
  [
    { text: "Nhóm tín hiệu xếp hạng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Truy vấn (Query)" }, { text: "Từ khóa nhập, ngôn ngữ, ý định tìm kiếm." }],
  [{ text: "Nội dung tài liệu" }, { text: "Tiêu đề, mô tả, từ khóa thẻ tag, độ tươi mới." }],
  [{ text: "Hành vi người dùng", options: { bold: true, color: DUE_COLORS.green } }, { text: "Lịch sử nhấp chuột (CTR), thời gian đọc trang (dwell time)." }],
  [{ text: "Ngữ cảnh (Context)" }, { text: "Thời điểm tìm kiếm, loại thiết bị dùng, vị trí địa lý." }]
], {
  x: cmToInch(0.8),
  y: colY22,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: features
addText(slide22, "⚡ ĐẶC ĐIỂM CỦA BÀI TOÁN XẾP HẠNG\n\n• Xử lý dữ liệu văn bản lớn: Đòi hỏi khả năng biểu diễn ngữ nghĩa và tìm kiếm nhanh chóng từ hàng tỷ tài liệu.\n• Tín hiệu tương tác liên tục: Lượt nhấp chuột và thời gian xem của người dùng liên tục cập nhật và hiệu chỉnh mô hình xếp hạng.\n• Phản hồi cực nhanh: Yêu cầu kết quả xếp hạng tối ưu xuất hiện dưới giây.\n• Cá nhân hóa xếp hạng: Cùng một từ khóa tìm kiếm nhưng hai người dùng có thể nhận thứ tự kết quả khác nhau.", {
  x: cmToInch(13.1),
  y: colY22,
  w: colW20,
  h: colH20,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide22, "💡 Trong môi trường số, “tìm được nội dung” là chưa đủ; giá trị thực sự nằm ở việc đưa đúng nội dung lên đầu danh sách kết quả, ngay khi người dùng cần.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide22.addNotes("Nội dung bổ sung:\nHệ gợi ý và hệ tìm kiếm đều khai thác hành vi như xem, mua, đánh giá hoặc nhấp chuột để xác định mức độ quan tâm; điểm khác biệt là tìm kiếm bắt đầu từ một truy vấn rõ ràng, rồi xếp hạng các tài liệu phù hợp với truy vấn đó.");

// ----------------------------------------------------
// Slide 23 — CONTENT: Phân tích cảm xúc
// ----------------------------------------------------
const slide23 = pptx.addSlide({ masterName: "CONTENT" });
slide23.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide23.addText("PHÂN TÍCH CẢM XÚC KHÁCH HÀNG (SENTIMENT ANALYSIS)", {
  placeholder: "title",
});

const optIntro23 = addText(slide23, "Khai phá văn bản phản hồi phi cấu trúc giúp doanh nghiệp hiểu sâu sắc lý do đằng sau mức độ hài lòng của khách hàng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY23 = (optIntro23.y as number) + (optIntro23.h as number) + cmToInch(0.2);

// Left table: Combined sources
slide23.addTable([
  [
    { text: "Nguồn dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ thông tin thu nhận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Điểm đánh giá sao" }, { text: "Mức hài lòng tổng quan (từ 1 sao đến 5 sao)." }],
  [{ text: "Bình luận văn bản phi cấu trúc", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Trích xuất các cụm: 'giao chậm', 'đóng gói tệ', 'hàng lỗi'." }],
  [{ text: "Hồ sơ khiếu nại" }, { text: "Nội dung phàn nàn gửi tới tổng đài CSKH." }],
  [{ text: "Lịch sử mua hàng" }, { text: "Giá trị đơn, loại sản phẩm, thâm niên khách." }]
], {
  x: cmToInch(0.8),
  y: colY23,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Actionable decisions
slide23.addTable([
  [
    { text: "Phát hiện từ khai phá văn bản", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Hành động nghiệp vụ tương ứng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Bình luận chê 'giao hàng chậm'" }, { text: "Rà soát lại đối tác vận chuyển ở khu vực đó." }],
  [{ text: "Review tiêu cực tăng mạnh ở sản phẩm X" }, { text: "Yêu cầu nhà cung cấp kiểm tra chất lượng lô hàng." }],
  [{ text: "Khách VIP có khiếu nại lặp lại" }, { text: "Ưu tiên xử lý nhanh và CSKH chủ động gọi điện." }]
], {
  x: cmToInch(13.1),
  y: colY23,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide23, "💡 Lưu ý: Cảm xúc tích cực hay tiêu cực đơn thuần chưa đủ; doanh nghiệp bắt buộc phải phân tích theo chủ đề (topics) và dòng sản phẩm trước khi đưa ra quyết định cải tổ.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide23.addNotes("Nội dung bổ sung:\nKhai phá văn bản (text mining) giúp chuyển những phản hồi phi cấu trúc thành tín hiệu có thể tổng hợp và hành động. Kết hợp bình luận với dữ liệu giao dịch để hiểu sâu sắc nguyên nhân của trải nghiệm không hài lòng.");
