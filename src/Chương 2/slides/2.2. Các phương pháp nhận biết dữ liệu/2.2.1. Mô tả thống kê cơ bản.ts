import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 14 — SECTION
// ----------------------------------------------------
const slide14 = pptx.addSlide({ masterName: "SECTION" });
slide14.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});

slide14.addText("2.2.1. MÔ TẢ THỐNG KÊ CƠ BẢN", {
  placeholder: "title",
});

slide14.addText("Tóm tắt dữ liệu định lượng bằng các con số cô đọng", {
  placeholder: "content",
});

slide14.addText(
  "Mô tả thống kê là nhóm công cụ định lượng giúp tóm tắt dữ liệu bằng các con số,\n" +
  "từ đó hình thành bức tranh tổng quan trước khi làm sạch, biến đổi hoặc xây dựng mô hình.",
  {
    placeholder: "subContent",
  }
);

// ----------------------------------------------------
// Slide 15 — CONTENT
// ----------------------------------------------------
const slide15 = pptx.addSlide({ masterName: "CONTENT" });
slide15.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide15.addText("MÔ TẢ THỐNG KÊ TRẢ LỜI ĐIỀU GÌ?", {
  placeholder: "title",
});

// Left Column: Role & Principles
const statRoleText = 
  "📊 Vai trò của mô tả thống kê:\n\n" +
  "Mô tả thống kê không nhằm xây dựng mô hình dự báo hay giải thích quan hệ nhân quả. Vai trò của nó là cung cấp một “bức ảnh tổng quan bằng con số” về từng biến trong bộ dữ liệu.\n\n" +
  "👉 Nguyên tắc thực hành:\n" +
  "Hãy luôn xem xét thống kê tóm tắt trước khi đưa biến vào mô hình hoặc áp dụng thuật toán tiền xử lý.";

addText(slide15, statRoleText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(10.5),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Table of Questions
slide15.addTable([
  [
    { text: "Câu hỏi khám phá dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thước đo hoặc kiểm tra gợi ý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Giá vị điển hình của biến là bao nhiêu?", options: { bold: true } },
    { text: "Mean (Trung bình), Median (Trung vị), Mode (Mốt)" }
  ],
  [
    { text: "Dữ liệu tập trung hay phân tán mạnh?", options: { bold: true } },
    { text: "Min–max, khoảng biến thiên, tứ phân vị, độ lệch chuẩn" }
  ],
  [
    { text: "Phân bố của biến đối xứng hay lệch?", options: { bold: true } },
    { text: "So sánh mean với median; vẽ histogram và boxplot" }
  ],
  [
    { text: "Có sự xuất hiện của giá trị bất thường?", options: { bold: true } },
    { text: "Phạm vi min-max, khoảng tứ phân vị (IQR), z-score" }
  ],
  [
    { text: "Có dữ liệu bị thiếu (null/NA) không?", options: { bold: true } },
    { text: "Số lượng và tỷ lệ giá trị thiếu theo từng thuộc tính" }
  ]
], {
  x: cmToInch(11.8),
  y: cmToInch(2.2),
  w: cmToInch(12.8),
  h: cmToInch(5.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Bottom Banner Note
const summaryNote15 = 
  "💡 Mô tả xu hướng trung tâm và độ phân tán giúp hiểu đặc tính của biến, hỗ trợ phát hiện nhiễu hoặc ngoại lệ, đồng thời định hướng các quyết định tiền xử lý tiếp theo.";

addText(slide15, summaryNote15, {
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
// Slide 16 — CONTENT
// ----------------------------------------------------
const slide16 = pptx.addSlide({ masterName: "CONTENT" });
slide16.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide16.addText("ĐO XU HƯỚNG TRUNG TÂM", {
  placeholder: "title",
});

// Introductory text
const introText16 = 
  "Xu hướng trung tâm cho biết vị trí mà dữ liệu có xu hướng tập trung quanh đó. Việc chọn thước đo phù hợp phụ thuộc vào kiểu dữ liệu và mức độ ảnh hưởng của các giá trị cực trị.";
addText(slide16, introText16, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Left Column: Table of Measures
slide16.addTable([
  [
    { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Cách hiểu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Khi nên dùng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Lưu ý quan trọng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Trung bình\n(mean)", options: { bold: true } },
    { text: "Tổng giá trị chia cho tổng số quan sát" },
    { text: "Biến số, phân bố đối xứng, ít ngoại lệ" },
    { text: "Rất nhạy cảm với giá trị cực trị" }
  ],
  [
    { text: "Trung vị\n(median)", options: { bold: true } },
    { text: "Giá trị đứng giữa sau khi sắp xếp" },
    { text: "Biến số/thứ bậc, phân bố lệch, có ngoại lệ" },
    { text: "Bền vững hơn mean trước ngoại lệ" }
  ],
  [
    { text: "Mốt\n(mode)", options: { bold: true } },
    { text: "Giá trị/nhóm xuất hiện nhiều nhất" },
    { text: "Biến phân loại hoặc biến thứ bậc" },
    { text: "Có thể không có mốt hoặc có nhiều mốt" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.9),
  w: cmToInch(13.8),
  h: cmToInch(3.5),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Examples (Bento Card)
const examplesText16 = 
  "💼 Ví dụ nghiệp vụ:\n\n" +
  "• Kênh mua sắm phổ biến nhất: Ứng dụng di động ➔ Mode.\n" +
  "• Thu nhập khách hàng: Cần đối chiếu cả Mean và Median để đánh giá độ lệch phân bố.\n" +
  "• Mức độ hài lòng (thang đo 1-5): Median và Mode thường có ý nghĩa diễn giải tốt hơn Mean.";

addText(slide16, examplesText16, {
  x: cmToInch(15.0),
  y: cmToInch(2.9),
  w: cmToInch(9.6),
  h: cmToInch(3.5),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote16 = 
  "💡 Với biến phân loại (như loại thẻ, kênh bán), không nên tính mean hay median vì mã số danh mục không mang ý nghĩa số học; mốt là chỉ báo trung tâm phù hợp.";

addText(slide16, summaryNote16, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});


// ----------------------------------------------------
// Slide 17 — CONTENT
// ----------------------------------------------------
const slide17 = pptx.addSlide({ masterName: "CONTENT" });
slide17.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide17.addText("MEAN KHÔNG LUÔN ĐẠI DIỆN TỐT", {
  placeholder: "title",
});

// Left Column: Math computation
const mathText = 
  "🔢 Dữ liệu chi tiêu của 6 khách hàng (triệu đồng):\n" +
  "       1,  1,  2,  2,  3,  50\n\n" +
  "• Mean = (1 + 1 + 2 + 2 + 3 + 50) / 6 = 9.83 triệu đồng\n" +
  "• Median = (2 + 2) / 2 = 2.00 triệu đồng";

addText(slide17, mathText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.0),
  h: cmToInch(2.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Left Bottom: Table comparison
slide17.addTable([
  [
    { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Diễn giải nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Mean", options: { bold: true } },
    { text: "9.83 triệu" },
    { text: "Bị kéo lệch mạnh bởi một giao dịch lớn 50 triệu." }
  ],
  [
    { text: "Median", options: { bold: true } },
    { text: "2.00 triệu" },
    { text: "Phản ánh mức chi tiêu của khách hàng điển hình tốt hơn." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(4.6),
  w: cmToInch(11.0),
  h: cmToInch(2.8),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Takeaway message
const takeawayText = 
  "📢 Thông điệp nghiệp vụ:\n\n" +
  "Giá trị 50 triệu đồng có thể là một giao dịch doanh nghiệp, khách VIP, hoặc lỗi nhập liệu. Cần kiểm tra kỹ bằng boxplot trước khi xử lý.\n\n" +
  "⚠️ Nguyên tắc: Khi dữ liệu lệch phải do một vài giá trị lớn — thường gặp ở chi tiêu, thu nhập và giá trị giao dịch — hãy xem median cùng với mean, không diễn giải mean một cách đơn lẻ.\n\n" +
  "Mean nhạy cảm với các cực trị, trong khi median phù hợp hơn để đại diện cho tâm của phân bố lệch.";

addText(slide17, takeawayText, {
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
const summaryNote17 = 
  "💡 Tóm lại: Mean bị ảnh hưởng bởi mọi giá trị trong phân bố; ngược lại, Median chỉ quan tâm đến thứ tự vị trí ở giữa nên bền vững hơn trước các giá trị ngoại lệ.";

addText(slide17, summaryNote17, {
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
// Slide 18 — CONTENT
// ----------------------------------------------------
const slide18 = pptx.addSlide({ masterName: "CONTENT" });
slide18.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide18.addText("ĐO MỨC ĐỘ PHÂN TÁN DỮ LIỆU", {
  placeholder: "title",
});

// Introductory text
const introText18 = 
  "Nếu xu hướng trung tâm trả lời “dữ liệu thường nằm ở đâu?”, thì độ phân tán trả lời “các quan sát dao động quanh giá trị điển hình mạnh đến mức nào?”.";
addText(slide18, introText18, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Left Column: Table of Dispersion Measures
slide18.addTable([
  [
    { text: "Thước đo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa thống kê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Cách diễn giải nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Khoảng biến thiên\n(range)", options: { bold: true } },
    { text: "Max - Min" },
    { text: "Đo toàn bộ độ rộng; cực kỳ nhạy với các giá trị ngoại lệ." }
  ],
  [
    { text: "Phương sai\n(variance)", options: { bold: true } },
    { text: "TB bình phương khoảng cách tới mean" },
    { text: "Đơn vị bị bình phương nên khó diễn giải trực tiếp." }
  ],
  [
    { text: "Độ lệch chuẩn\n(standard deviation)", options: { bold: true } },
    { text: "Căn bậc hai của phương sai" },
    { text: "Cùng đơn vị với biến gốc; lớn hơn nghĩa là phân tán rộng hơn." }
  ],
  [
    { text: "Tứ phân vị", options: { bold: true } },
    { text: "Q1, Q2 (median), Q3" },
    { text: "Mô tả vị trí & mức phân tán sau khi đã sắp xếp dữ liệu." }
  ],
  [
    { text: "Khoảng tứ phân vị\n(IQR)", options: { bold: true } },
    { text: "Q3 - Q1" },
    { text: "Độ rộng của 50% quan sát ở giữa; bền vững trước ngoại lệ." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.9),
  w: cmToInch(13.8),
  h: cmToInch(3.5),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Business Case (Bento Card)
const caseText18 = 
  "💼 Ví dụ: Doanh thu hai cửa hàng\n\n" +
  "Cả hai cửa hàng A và B đều có doanh thu trung bình là 500 triệu đồng/tháng.\n" +
  "• Cửa hàng A: SD = 20 triệu đồng ➔ Doanh thu cực kỳ ổn định và dễ dự báo.\n" +
  "• Cửa hàng B: SD = 180 triệu đồng ➔ Doanh thu dao động rất mạnh. Cần phân tích thêm theo tính mùa vụ, sự kiện khuyến mãi hoặc hành vi khách hàng.";

addText(slide18, caseText18, {
  x: cmToInch(15.0),
  y: cmToInch(2.9),
  w: cmToInch(9.6),
  h: cmToInch(3.5),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote18 = 
  "💡 Độ lệch chuẩn thấp cho thấy dữ liệu tập trung gần mean, trong khi độ lệch chuẩn cao cho thấy mức biến động lớn và rủi ro cao hơn.";

addText(slide18, summaryNote18, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});


// ----------------------------------------------------
// Slide 19 — CONTENT
// ----------------------------------------------------
const slide19 = pptx.addSlide({ masterName: "CONTENT" });
slide19.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide19.addText("TÓM TẮT 5 SỐ VÀ NHẬN BIẾT NGOẠI LỆ", {
  placeholder: "title",
});

// Left Column: Five Number Summary
const fiveNumText = 
  "📊 Bộ tóm tắt 5 số:\n" +
  "       Minimum  —  Q1  —  Median  —  Q3  —  Maximum\n\n" +
  "• Minimum: Giá trị nhỏ nhất trong tập dữ liệu.\n" +
  "• Q1 (Tứ phân vị thứ nhất): Ngăn cách 25% quan sát thấp nhất.\n" +
  "• Median (Q2 / Trung vị): Ngăn cách 50% quan sát ở giữa.\n" +
  "• Q3 (Tứ phân vị thứ ba): Ngăn cách 25% quan sát cao nhất.\n" +
  "• Maximum: Giá trị lớn nhất trong tập dữ liệu.";

addText(slide19, fiveNumText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.0),
  h: cmToInch(2.8),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Left Bottom Box: Boxplot explanation
const boxplotExplain = 
  "📦 Bộ năm số là nền tảng để xây dựng và đọc biểu đồ hộp (boxplot):\n" +
  "• Phần hộp trải rộng từ Q1 đến Q3, chứa 50% dữ liệu ở giữa.\n" +
  "• Đường kẻ ngang bên trong hộp biểu diễn vị trí trung vị (median).\n" +
  "• Độ rộng của hộp chính là khoảng tứ phân vị (IQR = Q3 - Q1).";

addText(slide19, boxplotExplain, {
  x: cmToInch(0.8),
  y: cmToInch(5.2),
  w: cmToInch(11.0),
  h: cmToInch(2.2),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightBg },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Outlier Detection Rules
const outlierRuleText = 
  "🔍 Quy tắc sàng lọc ngoại lệ bằng IQR:\n\n" +
  "Một quan sát được xem là ứng viên ngoại lệ (outlier candidate) nếu:\n" +
  "• x < Q1 - 1.5 × IQR\n" +
  "• hoặc x > Q3 + 1.5 × IQR\n\n" +
  "⚠️ Lưu ý: Quy tắc 1.5 × IQR là gợi ý thống kê để đánh dấu các điểm cần kiểm tra chéo, không phải quy tắc tự động xóa dữ liệu thô.\n\n" +
  "👉 Ngoại lệ là tín hiệu để điều tra, không mặc định là lỗi cần xóa bỏ. Phân tích nghiệp vụ sẽ quyết định giữ, sửa hay loại bỏ.";

addText(slide19, outlierRuleText, {
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
const summaryNote19 = 
  "💡 Việc xử lý ngoại lệ (giữ lại, điều chỉnh, gắn cờ hay loại bỏ) cần dựa trên việc kiểm tra nguồn gốc dữ liệu và kiến thức nghiệp vụ.";

addText(slide19, summaryNote19, {
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
// Slide 20 — CONTENT
// ----------------------------------------------------
const slide20 = pptx.addSlide({ masterName: "CONTENT" });
slide20.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide20.addText("PHÂN BỐ VÀ ĐỘ LỆCH CỦA DỮ LIỆU", {
  placeholder: "title",
});

// Introductory text
const introText20 = 
  "Hình dạng phân bố cho biết dữ liệu tập trung và kéo dài về phía nào. So sánh mean, median và mode là bước nhận diện sơ bộ trước khi dùng biểu đồ.";
addText(slide20, introText20, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Table of Distribution Types
slide20.addTable([
  [
    { text: "Dạng phân bố", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dấu hiệu thống kê", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Diễn giải kinh tế–kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Đối xứng\n(symmetric)", options: { bold: true } },
    { text: "Mean, median và mode gần nhau" },
    { text: "Dữ liệu phân bố tương đối cân bằng quanh tâm." }
  ],
  [
    { text: "Lệch phải\n(right-skewed)", options: { bold: true } },
    { text: "Mean > Median > Mode" },
    { text: "Một vài giá trị rất lớn kéo mean về bên phải; thường gặp ở thu nhập, chi tiêu và giá trị giao dịch." }
  ],
  [
    { text: "Lệch trái\n(left-skewed)", options: { bold: true } },
    { text: "Mean < Median < Mode" },
    { text: "Một vài giá trị rất nhỏ kéo mean về bên trái; có thể gặp ở điểm hài lòng hoặc tỷ lệ hoàn thành dự án." }
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
const summaryNote20 = 
  "💡 Với phân bố lệch phải, một nhóm nhỏ chi tiêu cực cao kéo mean lên, nên median đại diện tốt hơn. Hãy kết hợp thêm histogram và boxplot để thấy toàn bộ phân bố.";

addText(slide20, summaryNote20, {
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
// Slide 21 — CONTENT
// ----------------------------------------------------
const slide21 = pptx.addSlide({ masterName: "CONTENT" });
slide21.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide21.addText("BẢN THỐNG KÊ TÓM TẮT — VÍ DỤ SIÊU THỊ", {
  placeholder: "title",
});

// Left Column: Supermarket Spending Table
slide21.addTable([
  [
    { text: "Biến chi tiêu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "N", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thiếu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Min", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Q1", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Median", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mean", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Q3", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Max", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "SD", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Thực phẩm", options: { bold: true } },
    { text: "1.000" }, { text: "0" }, { text: "0,2" }, { text: "2,5" }, { text: "4,1" }, { text: "5,0" }, { text: "6,3" }, { text: "35,0" }, { text: "4,2" }
  ],
  [
    { text: "Đồ gia dụng", options: { bold: true } },
    { text: "1.000" }, { text: "12" }, { text: "0,0" }, { text: "0,6" }, { text: "1,2" }, { text: "2,0" }, { text: "3,0" }, { text: "28,0" }, { text: "3,1" }
  ],
  [
    { text: "Mỹ phẩm", options: { bold: true } },
    { text: "1.000" }, { text: "35" }, { text: "0,0" }, { text: "0,3" }, { text: "0,8" }, { text: "2,5" }, { text: "2,0" }, { text: "40,0" }, { text: "5,4" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(12.5),
  h: cmToInch(4.5),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Reading explanation (Bento Card)
const readTableText = 
  "📖 Gợi ý phân tích đọc bảng:\n\n" +
  "• Thực phẩm: Mean (5,0) > Median (4,1). Lệch phải nhẹ; Max (35,0) không quá cực đoan so với Q3 (6,3).\n" +
  "• Đồ gia dụng: Mean (2,0) > Median (1,2). Max (28,0) lệch rất cao so với Q3 (3,0); cần xem boxplot kiểm tra các giao dịch lớn.\n" +
  "• Mỹ phẩm: Mean (2,5) vượt trội so với Median (0,8). Đồng thời SD (5,4) và Max (40,0) rất lớn. Đây là biến lệch phải mạnh nhất, chứa các ngoại lệ cần xử lý trước khi phân cụm.";

addText(slide21, readTableText, {
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

// Bottom Discussion Question Box
const discussText21 = 
  "❓ Thảo luận: (1) Biến nào có khả năng lệch phải mạnh nhất? Nêu bằng chứng. " +
  "(2) Biến nào cần kiểm tra ngoại lệ trước khi phân cụm? " +
  "(3) Tại sao cần xử lý giá trị thiếu và chuẩn hóa thang đo trước khi phân cụm?";

addText(slide21, discussText21, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
