import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 7 — CONTENT
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("KHÁI NIỆM TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "title",
});

// Left Column: Definition & Goals
const defText = 
  "⚙️ Định nghĩa & Vai trò:\n\n" +
  "Tiền xử lý dữ liệu (data preprocessing) là quá trình kiểm tra, làm sạch, tích hợp, lựa chọn, giảm và biến đổi dữ liệu thô nhằm:\n" +
  "• Cải thiện chất lượng dữ liệu đầu vào.\n" +
  "• Loại bỏ hoặc giảm thiểu các lỗi, thiếu sót và mâu thuẫn.\n" +
  "• Chuyển đổi dữ liệu về dạng phù hợp với mục tiêu phân tích và yêu cầu của thuật toán.";

addText(slide7, defText, {
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

// Right Column: Garbage In, Garbage Out & Example
const gigoText = 
  "🗑️ Garbage In, Garbage Out (GIGO):\n\n" +
  "Dữ liệu đầu vào kém chất lượng thường dẫn đến kết quả phân tích, dự báo hoặc ra quyết định kém chất lượng.\n\n" +
  "💼 Minh họa ngắn: Nếu mô hình dự báo khách hàng rời bỏ được huấn luyện trên dữ liệu thiếu thu nhập, ngày giao dịch sai hoặc mã khu vực không thống nhất, mô hình có thể nhận diện sai nhóm khách hàng có nguy cơ rời đi. Một thuật toán tốt không thay thế được việc hiểu và chuẩn bị dữ liệu tốt.";

addText(slide7, gigoText, {
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

// Bottom Banner Note
const summaryNote7 = 
  "💡 Dữ liệu thực tế thường thiếu, nhiễu và không nhất quán; làm sạch, tích hợp, giảm và biến đổi dữ liệu trước khi khai phá giúp nâng cao chất lượng mẫu phát hiện được cũng như hiệu quả của quá trình phân tích.";

addText(slide7, summaryNote7, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});


// ----------------------------------------------------
// Slide 8 — CONTENT
// ----------------------------------------------------
const slide8 = pptx.addSlide({ masterName: "CONTENT" });
slide8.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide8.addText("BỐN KHÍA CẠNH CỐT LÕI CỦA CHẤT LƯỢNG DỮ LIỆU", {
  placeholder: "title",
});

// Introductory text
const introText8 = 
  "Chất lượng dữ liệu được đánh giá theo mục đích sử dụng: cùng một bộ dữ liệu có thể đủ tốt cho báo cáo tổng hợp nhưng chưa đủ tốt cho quyết định tín dụng ở cấp khách hàng.";
addText(slide8, introText8, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Table of Quality Aspects
slide8.addTable([
  [
    { text: "Khía cạnh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi kiểm tra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Chính xác\n(accuracy)", options: { bold: true } },
    { text: "Giá trị có phản ánh đúng thực tế không?" },
    { text: "Dữ liệu không sai lệch hoặc ngoài phạm vi hợp lệ" },
    { text: "Doanh thu đơn hàng là 2,5 triệu đồng, không phải 25 triệu" }
  ],
  [
    { text: "Kịp thời\n(timeliness)", options: { bold: true } },
    { text: "Dữ liệu có còn đủ mới khi sử dụng không?" },
    { text: "Được cập nhật đúng lúc để hỗ trợ quyết định" },
    { text: "Điểm tín dụng cần phản ánh tình trạng trả nợ gần đây" }
  ],
  [
    { text: "Đầy đủ\n(completeness)", options: { bold: true } },
    { text: "Các trường cần thiết có bị thiếu không?" },
    { text: "Đủ thuộc tính, bản ghi và lịch sử cho bài toán" },
    { text: "Hồ sơ vay có đầy đủ thông tin thu nhập và lịch sử trả nợ" }
  ],
  [
    { text: "Nhất quán\n(consistency)", options: { bold: true } },
    { text: "Cùng một khái niệm có thống nhất không?" },
    { text: "Không mâu thuẫn về tên gọi, mã hóa, đơn vị, định dạng" },
    { text: "“TP.HCM” và “Ho Chi Minh” được chuẩn hóa về một mã địa phương" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.8),
  w: cmToInch(23.8),
  h: cmToInch(3.5),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Bottom Banner Note
const summaryNote8 = 
  "💡 Ngoài bốn khía cạnh trên, tài liệu còn xem xét khả năng tin cậy và khả năng diễn giải; tuy nhiên, đây là khung tối thiểu để kiểm tra nhanh trước khi khai phá.";

addText(slide8, summaryNote8, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});


// ----------------------------------------------------
// Slide 9 — CONTENT
// ----------------------------------------------------
const slide9 = pptx.addSlide({ masterName: "CONTENT" });
slide9.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide9.addText("NHẬN BIẾT LỖI DỮ LIỆU: HỒ SƠ KHÁCH HÀNG", {
  placeholder: "title",
});

// Left Column: Table of Issues in Customer Profile
slide9.addTable([
  [
    { text: "Trường dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị quan sát", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Vấn đề phát hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tiêu chí bị ảnh hưởng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Ngày sinh", options: { bold: true } },
    { text: "31/02/1995" },
    { text: "Ngày không tồn tại (lỗi tính hợp lệ)" },
    { text: "Chính xác", options: { bold: true, color: DUE_COLORS.orange } }
  ],
  [
    { text: "Thu nhập tháng", options: { bold: true } },
    { text: "Trống" },
    { text: "Thiếu thông tin đánh giá khả năng chi trả" },
    { text: "Đầy đủ", options: { bold: true, color: DUE_COLORS.orange } }
  ],
  [
    { text: "Địa chỉ thành phố", options: { bold: true } },
    { text: "HCM, TP.HCM, Ho Chi Minh" },
    { text: "Một địa phương có nhiều cách biểu diễn" },
    { text: "Nhất quán", options: { bold: true, color: DUE_COLORS.orange } }
  ],
  [
    { text: "Lịch sử giao dịch", options: { bold: true } },
    { text: "Cập nhật từ 4 năm trước" },
    { text: "Quá cũ, không phản ánh hành vi hiện tại" },
    { text: "Kịp thời", options: { bold: true, color: DUE_COLORS.orange } }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(12.5),
  h: cmToInch(4.5),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Class Activity Bento Card
const activityText = 
  "⏱️ Hoạt động lớp học (3 phút):\n\n" +
  "Phân loại các trường hợp sau vào 4 tiêu chí chất lượng:\n" +
  "1. Giá sản phẩm ghi nhận: -350.000 đồng.\n" +
  "2. Số điện thoại của khách hàng bị bỏ trống.\n" +
  "3. Giới tính ghi lần lượt: Nam, M, Male.\n" +
  "4. Báo cáo tồn kho hôm nay dùng số liệu từ tháng trước.\n\n" +
  "👉 Gợi ý đáp án:\n" +
  "(1) Chính xác; (2) Đầy đủ; (3) Nhất quán; (4) Kịp thời.";

addText(slide9, activityText, {
  x: cmToInch(13.7),
  y: cmToInch(2.2),
  w: cmToInch(10.9),
  h: cmToInch(4.5),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote9 = 
  "💡 Quy tắc kiểm tra như phạm vi giá trị hợp lệ, trường bắt buộc, định dạng dùng chung và thời điểm cập nhật là điểm khởi đầu của làm sạch dữ liệu.";

addText(slide9, summaryNote9, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
