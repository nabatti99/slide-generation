import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1 — SECTION
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "SECTION" });
slide1.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide1.addText("1.3. QUÁ TRÌNH KHÁM PHÁ TRI THỨC (KDD)", {
  placeholder: "title",
});
slide1.addText("Dữ liệu nhiều, đa dạng chưa bảo đảm tạo ra quyết định tốt. Để tạo ra tri thức có giá trị, dữ liệu cần đi qua một quy trình có hệ thống: chuẩn bị đúng, khai phá phù hợp, đánh giá chặt chẽ và hành động.", {
  placeholder: "content",
});
slide1.addText("Câu hỏi dẫn nhập:\n“Một mô hình tốt có thể được xây dựng trực tiếp từ dữ liệu thô không?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT: KDD là gì?
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("KDD LÀ GÌ? KHÔNG CHỈ LÀ CHẠY THUẬT TOÁN", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "KDD (Knowledge Discovery in Databases) là quy trình phát hiện mẫu từ dữ liệu, sau đó kiểm tra, diễn giải để hỗ trợ quyết định. Khai phá dữ liệu là một bước trung tâm.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW2 = cmToInch(11.5);
const colH2 = cmToInch(3.2);
const colY2 = (optIntro2.y as number) + (optIntro2.h as number) + cmToInch(0.2);

// Left table: Components
slide2.addTable([
  [
    { text: "Thành phần KDD", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa trong KDD", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ trong Bán lẻ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dữ liệu" }, { text: "Các giao dịch, thông tin thô ban đầu" }, { text: "Hóa đơn mua hàng, click ứng dụng." }],
  [{ text: "Mẫu (Pattern)" }, { text: "Quan hệ, xu hướng tìm thấy từ dữ liệu" }, { text: "Khách giảm mua liên tục có nguy cơ rời bỏ cao." }],
  [{ text: "Tri thức (Knowledge)", options: { bold: true, color: DUE_COLORS.green } }, { text: "Mẫu đã được đánh giá, có ích" }, { text: "Xác định ưu tiên tặng quà giữ chân nhóm giảm mua." }],
  [{ text: "Hành động", options: { bold: true } }, { text: "Quyết định can thiệp thực tế" }, { text: "Gửi voucher cá nhân hóa tự động." }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Example
addText(slide2, "✍️ PHÂN BIỆT MẪU VÀ TRI THỨC THỰC TẾ\n\n• Mẫu dữ liệu thô:\n  ↳ “Khách hàng có thu nhập cao thường mua sản phẩm A.” (Chưa rõ có ổn định không, có thể hành động gì từ nó không).\n• Tri thức thực tế có thể dùng:\n  ↳ “Khách thu nhập cao mua sản phẩm A trong 3 tháng qua và phản hồi tốt với ưu đãi online có 80% xác suất mua gói nâng cấp B; nên chạy chiến dịch tiếp thị gói B cho nhóm này.”\n\n👉 Ý nghĩa: Chỉ số kỹ thuật giúp tìm ra mẫu; bối cảnh nghiệp vụ và mục tiêu thực tế biến mẫu đó thành tri thức hành động.", {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide2, "💡 Thuật toán giúp chúng ta tìm ra mẫu dữ liệu; nhưng chính con người, các tiêu chí đánh giá và bối cảnh nghiệp vụ mới biến mẫu thành tri thức thực tế.", {
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

slide2.addNotes("Nội dung bổ sung:\nKhám phá tri thức trong cơ sở dữ liệu (Knowledge Discovery in Databases – KDD) là quá trình phát hiện các mẫu từ dữ liệu, sau đó kiểm tra, diễn giải và sử dụng các mẫu đó để hỗ trợ quyết định. Khai phá dữ liệu (data mining) là bước trung tâm của KDD, nhưng không phải toàn bộ quy trình.");

// ----------------------------------------------------
// Slide 3 — CONTENT: Bản đồ quy trình KDD
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("BẢN ĐỒ QUY TRÌNH KDD TOÀN DIỆN", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "KDD là một chuỗi liên kết: Làm sạch ➔ Tích hợp ➔ Lựa chọn ➔ Biến đổi ➔ Khai phá ➔ Đánh giá ➔ Trình bày tri thức.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: Process steps
slide3.addTable([
  [
    { text: "Các bước", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hoạt động chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đầu ra thu được", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Tiền xử lý (Làm sạch & Tích hợp)" }, { text: "Xử lý dữ liệu thiếu, nhiễu; liên kết các nguồn" }, { text: "Bộ dữ liệu thống nhất, chất lượng tốt" }],
  [{ text: "2. Chọn lọc & Biến đổi" }, { text: "Chọn biến liên quan; chuẩn hóa, gộp giao dịch" }, { text: "Dữ liệu phù hợp thuật toán" }],
  [{ text: "3. Khai phá dữ liệu (Data Mining)", options: { bold: true, color: DUE_COLORS.green } }, { text: "Áp dụng mô hình (phân lớp, phân cụm...)" }, { text: "Các mẫu/mô hình tiềm năng" }],
  [{ text: "4. Hậu xử lý (Đánh giá & Trình bày)" }, { text: "Kiểm tra tính mới, giá trị thực tiễn; trực quan hóa" }, { text: "Tri thức hỗ trợ ra quyết định" }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Link to section 1.2
addText(slide3, "🔗 MỐI LIÊN HỆ VỚI CÁC THÁCH THỨC Ở MỤC 1.2\n\n• Dữ liệu thiếu, nhiễu, sai định dạng ➔ Bước Làm sạch dữ liệu.\n• Nhiều nguồn thông tin rời rạc ➔ Bước Tích hợp dữ liệu.\n• Quá nhiều biến hoặc rò rỉ dữ liệu ➔ Bước Lựa chọn & Biến đổi.\n• Mô hình chính xác nhưng không sinh lời ➔ Bước Đánh giá mẫu.\n• Rủi ro quyền riêng tư, bảo mật, thiên lệch ➔ Xuyên suốt toàn bộ quy trình KDD từ khâu thu thập đến triển khai.", {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide3, "💡 Quy trình KDD không bắt đầu từ việc lựa chọn thuật toán hay xây dựng mô hình; nó luôn bắt đầu từ việc xác định câu hỏi nghiệp vụ và tìm kiếm dữ liệu phù hợp.", {
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

slide3.addNotes("Nội dung bổ sung:\nCác bước làm sạch, tích hợp, lựa chọn và biến đổi thường được xem là tiền xử lý dữ liệu. Đây không phải công việc phụ, vì chất lượng dữ liệu đầu vào quyết định trực tiếp mức độ tin cậy của mô hình và mẫu khai phá.");

// ----------------------------------------------------
// Slide 4 — CONTENT: Tình huống xuyên suốt
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("TÌNH HUỐNG THỰC TẾ: GIẢM RỜI BỎ KHÁCH HÀNG SIÊU THỊ", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Bối cảnh: Chuỗi siêu thị muốn nhận diện những khách hàng có nguy cơ ngừng mua trong 30 ngày tới để chủ động giữ chân.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: Classification vs Clustering
slide4.addTable([
  [
    { text: "Cách tiếp cận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nguyên lý áp dụng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tác vụ cho siêu thị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Phân lớp (Classification)", options: { bold: true, color: DUE_COLORS.green } }, { text: "Dự báo biến mục tiêu có nhãn trước" }, { text: "Dự báo xác suất khách hàng rời bỏ (Có/Không) trong 30 ngày tới." }],
  [{ text: "Phân cụm (Clustering)" }, { text: "Khám phá nhóm khách có hành vi giống nhau" }, { text: "Phân cụm khách trung thành, khách săn sale, khách ít hoạt động." }],
  [{ text: "Kết hợp" }, { text: "Tận dụng cả hai mô hình" }, { text: "Phân cụm để hiểu đặc tính, sau đó phân lớp dự báo rủi ro rời bỏ cụ thể." }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: cmToInch(12.5),
  h: cmToInch(3.2),
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Classroom activity questions
addText(slide4, "👥 HOẠT ĐỘNG LỚP HỌC (3 phút)\n\nMỗi nhóm trả lời nhanh 3 câu hỏi sau:\n1. Định nghĩa rời bỏ: Khách không mua hàng trong bao lâu thì coi là rời bỏ (30 ngày, 60 ngày hay 90 ngày)? Vì sao?\n2. Chọn 3 biến đầu vào: Theo bạn, 3 đặc trưng nào quan trọng nhất phản ánh nguy cơ khách rời bỏ siêu thị?\n3. Đề xuất hành động giữ chân: Đối với nhóm rủi ro cao, siêu thị nên gửi voucher giảm giá, gọi điện chăm sóc hay gợi ý sản phẩm phù hợp?", {
  x: cmToInch(14.0),
  y: colY4,
  w: cmToInch(10.6),
  h: cmToInch(3.2),
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide4, "💡 Bài toán khai phá tốt phải làm rõ: Đối tượng cần dự báo; Kết quả đầu ra; Dữ liệu đầu vào sẵn có; và Hành động thực tế sẽ được kích hoạt từ kết quả dự báo.", {
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

slide4.addNotes(`Ghi chú giảng viên:
- Đây trước hết là bài toán Phân lớp, vì doanh nghiệp có nhãn dự báo rõ ràng (rời bỏ hay không).
- Phân cụm có thể dùng bổ sung để phân tách chân dung khách hàng nhằm đưa ra các chương trình khuyến mãi khác nhau.
- Cho học viên hoạt động thảo luận nhanh trong 3 phút để hình dung rõ việc áp dụng KDD vào thực tế.`);
