import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1: TITLE
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "TITLE" });
slide1.addText("CHƯƠNG 2", {
  placeholder: "title",
});
slide1.addText("DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "subtitle",
});
slide1.addText("DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "subject",
});
slide1.addText("Khoa Thống kê-Tin học", {
  placeholder: "faculty",
});

// ----------------------------------------------------
// Slide 2: OBJECTIVE
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});

const objectivesText = 
  "Sau khi hoàn thành chương này, học viên có thể:\n\n" +
  "• Nhận biết các dạng dữ liệu thường gặp trong bài toán kinh tế, tài chính và kinh doanh.\n" +
  "• Mô tả cấu trúc của tập dữ liệu: đối tượng, thuộc tính, kiểu dữ liệu và mức đo lường.\n" +
  "• Phân biệt các vấn đề chất lượng dữ liệu: thiếu dữ liệu, nhiễu, không nhất quán, trùng lặp và ngoại lệ.\n" +
  "• Giải thích vai trò của tiền xử lý đối với độ tin cậy và hiệu quả của mô hình khai phá dữ liệu.\n" +
  "• Lựa chọn định hướng xử lý phù hợp cho dữ liệu thiếu, dữ liệu nhiễu, dữ liệu phân tán và dữ liệu có nhiều thuộc tính.\n" +
  "• Nhận diện và đánh giá dữ liệu bất thường trong bối cảnh nghiệp vụ.\n" +
  "• Mô tả vai trò của kho dữ liệu, mô hình đa chiều và OLAP trong hỗ trợ phân tích, ra quyết định và khai phá dữ liệu.\n" +
  "• Liên hệ một bài toán kinh tế–kinh doanh với chuỗi công việc chuẩn bị dữ liệu phù hợp.";

addText(slide2, objectivesText, {
  placeholder: "content",
  x: cmToInch(8.5),
  y: cmToInch(3.2),
  w: cmToInch(15.0),
  h: cmToInch(8.0),
  fontSize: 12,
  bold: true,
  color: DUE_COLORS.white,
});

// ----------------------------------------------------
// Slide 3: CONTENT (TÌNH HUỐNG THỰC TẾ)
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("TÌNH HUỐNG THỰC TẾ: MÔ HÌNH TỐT NHƯNG DỰ BÁO SAI", {
  placeholder: "title",
});

// Left Column: Business context
const contextText = 
  "🏦 Bối cảnh & Dữ liệu thu thập:\n\n" +
  "Một ngân hàng dự báo khách hàng rời bỏ (customer churn) để giữ chân kịp thời. Dữ liệu trích xuất đa nguồn gồm:\n" +
  "• Lịch sử giao dịch & số dư tài khoản\n" +
  "• Thu nhập, nghề nghiệp & nhân khẩu học\n" +
  "• Loại thẻ & lịch sử dùng sản phẩm tín dụng\n" +
  "• Tần suất/thời lượng sử dụng app ngân hàng số\n" +
  "• Phản hồi các chương trình chăm sóc khách hàng";

addText(slide3, contextText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.0),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Issues found
const issuesText = 
  "⚠️ Các vấn đề phát hiện trong dữ liệu thô:\n\n" +
  "• Thiếu thông tin: Thu nhập bị trống ở nhiều hồ sơ khách hàng.\n" +
  "• Không nhất quán định dạng: Ngày giao dịch tồn tại nhiều định dạng khác nhau (01/07/2026, 2026-07-01, July 1, 2026...).\n" +
  "• Trùng lặp bản ghi: Một khách hàng có nhiều hồ sơ do sai khác mã định danh giữa các hệ thống giao dịch và CRM.\n" +
  "• Trị dị biệt/Ngoại lệ: Một số giao dịch có giá trị cực lớn hoặc tần suất bất thường.\n" +
  "• Sai lệch mã hóa: Trường phân loại không đồng bộ (VIP, Vip, vip, để trống).";

addText(slide3, issuesText, {
  x: cmToInch(12.3),
  y: cmToInch(2.2),
  w: cmToInch(12.3),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightBg },
  line: { color: DUE_COLORS.orange, width: 1 },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Discussion Question
const discussText = "❓ Thảo luận: Có thể đưa trực tiếp dữ liệu này vào mô hình dự báo rời bỏ không? Vì sao?";
addText(slide3, discussText, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Speaker Notes
slide3.addNotes(
  "Gợi ý cho giảng viên:\n" +
  "Không nên đưa trực tiếp dữ liệu thô vào mô hình. Dữ liệu thiếu có thể làm giảm số quan sát khả dụng hoặc gây sai lệch nếu bị loại bỏ tùy tiện; dữ liệu sai định dạng và trùng lặp làm sai đặc trưng đầu vào; còn giao dịch bất thường có thể là lỗi dữ liệu, hành vi gian lận hoặc một tín hiệu kinh doanh cần được giữ lại và phân tích trong đúng ngữ cảnh."
);
