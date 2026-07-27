import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 22 — SECTION
// ----------------------------------------------------
const slide22 = pptx.addSlide({ masterName: "SECTION" });
slide22.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});

slide22.addText("2.2.2. TRỰC QUAN DỮ LIỆU", {
  placeholder: "title",
});

slide22.addText(
  "Sử dụng biểu đồ để khám phá, diễn giải và truyền đạt đặc điểm dữ liệu",
  {
    placeholder: "content",
  }
);

slide22.addText(
  "Trực quan hóa hỗ trợ tìm hiểu cấu trúc dữ liệu ban đầu, phát hiện lỗi,\n" +
  "nhận dạng phân bố và làm nổi bật các mối quan hệ đa biến trước khi mô hình hóa.",
  {
    placeholder: "subContent",
  }
);

// ----------------------------------------------------
// Slide 23 — CONTENT
// ----------------------------------------------------
const slide23 = pptx.addSlide({ masterName: "CONTENT" });
slide23.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide23.addText("VÌ SAO PHẢI TRỰC QUAN HÓA?", {
  placeholder: "title",
});

// Left Column: Key benefits
const visualValueText = 
  "📊 Giá trị của trực quan hóa:\n\n" +
  "Bảng số liệu và chỉ số tóm tắt rất cần thiết, nhưng dễ che khuất hình dạng phân bố, xu hướng thời gian, các cụm quan sát hoặc ngoại lệ. Đồ thị hỗ trợ phát hiện:\n" +
  "• Phân bố: Tập trung ở đâu, đối xứng/lệch, số lượng đỉnh.\n" +
  "• Xu hướng: Doanh thu/đơn hàng thay đổi thế nào theo ngày/tháng/quý.\n" +
  "• Cụm & Quan hệ: Các nhóm tương đồng, tương tác giữa các biến số.\n" +
  "• Dữ liệu thiếu: Nhận diện biến/nhóm bản ghi bị trống có hệ thống.\n" +
  "• Ngoại lệ: Những quan sát khác biệt đáng kể so với đám đông.";

addText(slide23, visualValueText, {
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

// Right Column: Principles
const designPrincipleText = 
  "🎨 Nguyên tắc thiết kế biểu đồ:\n\n" +
  "Mỗi biểu đồ phải trả lời một câu hỏi phân tích cụ thể (ví dụ: 'Giá trị đơn hàng có lệch phải không?', 'Doanh thu có tính chu kỳ mùa vụ không?', hay 'Thẻ VIP chiếm tỷ lệ bao nhiêu?').\n\n" +
  "⚠️ Lưu ý: Trực quan hóa bổ sung, không thay thế thống kê mô tả. Hãy luôn đối chiếu biểu đồ với các chỉ số định lượng (Mean, Median, SD...) trước khi đưa ra kết luận cuối cùng.";

addText(slide23, designPrincipleText, {
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
const summaryNote23 = 
  "💡 Tóm lại: Biểu đồ giúp nhà phân tích nhanh chóng nắm được cấu trúc thô của dữ liệu và đặt ra câu hỏi phù hợp cho khâu làm sạch và tiền xử lý tiếp theo.";

addText(slide23, summaryNote23, {
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
// Slide 24 — CONTENT
// ----------------------------------------------------
const slide24 = pptx.addSlide({ masterName: "CONTENT" });
slide24.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide24.addText("BIỂU ĐỒ CHO MỘT BIẾN", {
  placeholder: "title",
});

// Introductory text
const introText24 = 
  "Lựa chọn biểu đồ phù hợp với kiểu dữ liệu: Bar chart cho biến phân loại; Histogram, Boxplot cho biến định lượng; Line chart cho dữ liệu thời gian.";
addText(slide24, introText24, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Left Column: Table of charts
slide24.addTable([
  [
    { text: "Biểu đồ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu phù hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi phân tích", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Cột (bar chart)", options: { bold: true } },
    { text: "Biến phân loại" },
    { text: "Nhóm nào chiếm tỷ lệ/tần suất cao hơn?" },
    { text: "Tỷ trọng khách mua qua App, Web vs tại quầy POS." }
  ],
  [
    { text: "Histogram", options: { bold: true } },
    { text: "Một biến định lượng" },
    { text: "Phân bố đối xứng, lệch hay nhiều đỉnh?" },
    { text: "Phân bố giá trị hóa đơn siêu thị." }
  ],
  [
    { text: "Boxplot", options: { bold: true } },
    { text: "Một biến định lượng; so sánh theo nhóm" },
    { text: "Median, IQR, độ phân tán và ngoại lệ là gì?" },
    { text: "So sánh chi tiêu thực phẩm giữa các hạng thẻ thành viên." }
  ],
  [
    { text: "Đường (line chart)", options: { bold: true } },
    { text: "Biến định lượng có mốc thời gian" },
    { text: "Giá trị tăng, giảm, dao động hay có mùa vụ?" },
    { text: "Doanh số bán lẻ theo ngày, tuần, tháng." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.9),
  w: cmToInch(13.8),
  h: cmToInch(3.5),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Guidelines (Bento Card)
const guideText24 = 
  "💡 Hướng dẫn sử dụng:\n\n" +
  "• Bar chart: Dùng trục danh mục rời rạc; chiều cao thể hiện số lượng/tần suất. Cấm dùng vẽ phân bố biến liên tục.\n" +
  "• Histogram: Chia các khoảng (bins) để xem đuôi và hình dạng phân bố.\n" +
  "• Boxplot: Xem cùng lúc Q1, Median, Q3, IQR và các điểm dị biệt nghi ngờ ngoại lệ.\n" +
  "• Line chart: Sắp xếp đúng trình tự thời gian để phát hiện tính mùa vụ.";

addText(slide24, guideText24, {
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
const summaryNote24 = 
  "💡 Ví dụ: Nếu histogram đơn hàng có đuôi phải dài, còn boxplot xuất hiện nhiều điểm cao độc lập ➔ Cần kiểm tra xem đây là khách sỉ hay lỗi nhập liệu trước khi xử lý.";

addText(slide24, summaryNote24, {
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
// Slide 25 — CONTENT
// ----------------------------------------------------
const slide25 = pptx.addSlide({ masterName: "CONTENT" });
slide25.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide25.addText("BIỂU ĐỒ CHO HAI HAY NHIỀU BIẾN", {
  placeholder: "title",
});

// Introductory text
const introText25 = 
  "Biểu đồ đa biến giúp khám phá quan hệ giữa các thuộc tính, phát hiện khả năng trùng lặp thông tin và lựa chọn thuộc tính phù hợp trước khi mô hình hóa.";
addText(slide25, introText25, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Left Column: Table of Multivariate charts
slide25.addTable([
  [
    { text: "Loại biểu đồ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dạng biến số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi phân tích chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Scatter plot", options: { bold: true } },
    { text: "Hai biến định lượng" },
    { text: "Hai biến có quan hệ tuyến tính, phi tuyến, cụm hay ngoại lệ không?" },
    { text: "Quan hệ giữa Thu nhập và Chi tiêu." }
  ],
  [
    { text: "Boxplot nhóm", options: { bold: true } },
    { text: "Một định lượng, một phân loại" },
    { text: "Phân bố của biến số khác nhau thế nào giữa các nhóm?" },
    { text: "Chi tiêu thực phẩm theo hạng thẻ (Vàng/Bạc/Thường)." }
  ],
  [
    { text: "Cột nhóm/chồng", options: { bold: true } },
    { text: "Hai hay nhiều phân loại" },
    { text: "Cơ cấu đóng góp hay so sánh trực tiếp chỉ tiêu theo nhóm?" },
    { text: "Doanh thu theo vùng miền và kênh bán." }
  ],
  [
    { text: "Heatmap tương quan", options: { bold: true } },
    { text: "Nhiều biến định lượng" },
    { text: "Cặp biến nào có tương quan tuyến tính dương/âm mạnh?" },
    { text: "Hệ số tương quan giữa chi tiêu thực phẩm, gia dụng, mỹ phẩm." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.9),
  w: cmToInch(13.8),
  h: cmToInch(3.5),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Takeaway (Bento Card)
const guideText25 = 
  "💡 Lưu ý diễn giải:\n\n" +
  "• Scatter plot: Mây điểm dốc lên gợi ý quan hệ đồng biến, dốc xuống gợi ý nghịch biến. Cụm điểm rời rạc gợi ý phân cụm khách hàng.\n" +
  "• Heatmap tương quan: Cặp biến có tương quan tuyến tính mạnh (|r| > 0.8) cần xem xét loại bớt một biến để tránh thừa dữ liệu.\n" +
  "• Thận trọng: Tương quan không có nghĩa là nhân quả!";

addText(slide25, guideText25, {
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
const summaryNote25 = 
  "💡 Lưu ý: Tương quan thấp không có nghĩa là không liên quan; giữa chúng có thể tồn tại mối quan hệ phi tuyến. Hãy kiểm tra lại bằng scatter plot.";

addText(slide25, summaryNote25, {
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
// Slide 26 — CONTENT
// ----------------------------------------------------
const slide26 = pptx.addSlide({ masterName: "CONTENT" });
slide26.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide26.addText("CÙNG MỘT DỮ LIỆU, BA GÓC NHÌN", {
  placeholder: "title",
});

// Left Column: Three Viewpoints Table
slide26.addTable([
  [
    { text: "Công cụ chẩn đoán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Phát hiện từ biến “Giá trị hóa đơn”", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Bảng thống kê", options: { bold: true } },
    { text: "Mean lớn hơn Median, gợi ý phân bố có xu hướng lệch phải." }
  ],
  [
    { text: "Histogram", options: { bold: true } },
    { text: "Hóa đơn tập trung ở mức thấp-trung bình; đuôi kéo dài về bên phải." }
  ],
  [
    { text: "Boxplot", options: { bold: true } },
    { text: "Xuất hiện các hóa đơn giá trị rất lớn, nằm ngoài whiskers (ngoại lệ)." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.0),
  h: cmToInch(3.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Left Bottom Box: Synthesis
const synthesisText = 
  "📝 Kết luận chẩn đoán:\n" +
  "Cả 3 công cụ thống nhất cho thấy một nhóm nhỏ hóa đơn giá trị rất cao kéo Mean lên trên Median. Đồ thị trực quan hóa giúp xác nhận nhận định sơ bộ của bảng thống kê mô tả.";

addText(slide26, synthesisText, {
  x: cmToInch(0.8),
  y: cmToInch(5.6),
  w: cmToInch(11.0),
  h: cmToInch(1.8),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Decisions (Bento Card)
const decisionText26 = 
  "🛠️ Quyết định xử lý theo nghiệp vụ:\n\n" +
  "• Lỗi nhập liệu/lỗi đơn vị: Chỉnh sửa lại hoặc loại bỏ theo quy trình.\n" +
  "• Giao dịch thật nhưng quá lớn: Áp dụng winsorization, log-transform để giảm lệch, hoặc dùng thuật toán bền vững.\n" +
  "• Khách VIP hoặc có ý nghĩa kinh doanh: Giữ lại, gắn cờ và phân tích như một phân khúc khách hàng giá trị cao riêng biệt.\n\n" +
  "Biến đổi dữ liệu phải phù hợp với bối cảnh kinh doanh và yêu cầu thuật toán.";

addText(slide26, decisionText26, {
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
const summaryNote26 = 
  "💡 Thông điệp: Kết hợp thống kê mô tả và trực quan hóa giúp tránh đưa ra quyết định xử lý máy móc, làm mất đi các tín hiệu kinh doanh quan trọng.";

addText(slide26, summaryNote26, {
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
// Slide 27 — CONTENT
// ----------------------------------------------------
const slide27 = pptx.addSlide({ masterName: "CONTENT" });
slide27.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide27.addText("TÌNH HUỐNG THỰC HÀNH: CHẨN ĐOÁN DỮ LIỆU", {
  placeholder: "title",
});

// Left Column: Student Tasks
const studentTasksText = 
  "🏫 Bối cảnh thực hành:\n" +
  "Siêu thị thu thập chi tiêu khách hàng theo 3 ngành hàng: Thực phẩm, Đồ gia dụng, Mỹ phẩm. Phân cụm khách hàng bằng thuật toán K-means.\n\n" +
  "📝 Nhiệm vụ nhóm học viên (30 phút):\n" +
  "1. Lập bảng thống kê tóm tắt 3 biến chi tiêu.\n" +
  "2. Vẽ histogram và boxplot cho từng biến chi tiêu.\n" +
  "3. Nêu 2 phát hiện từ sự kết hợp thống kê và đồ thị.\n" +
  "4. Đề xuất 1 hành động tiền xử lý (giải thích lý do & tác động).";

addText(slide27, studentTasksText, {
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

// Right Column: Teacher Guidelines Table
slide27.addTable([
  [
    { text: "Quan sát dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đề xuất tiền xử lý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Mean >> Median;\nHisto đuôi dài", options: { bold: true } },
    { text: "Biến chi tiêu bị lệch phải mạnh." },
    { text: "Cân nhắc log-transform (xử lý giá trị 0 phù hợp)." }
  ],
  [
    { text: "Boxplot có một vài điểm rất cao", options: { bold: true } },
    { text: "Xuất hiện các ứng viên ngoại lệ." },
    { text: "Gắn cờ/giữ lại nếu là khách VIP; sửa nếu do lỗi nhập." }
  ],
  [
    { text: "Các biến số có thang đo lệch nhau", options: { bold: true } },
    { text: "Biến lớn (mỹ phẩm) chi phối khoảng cách." },
    { text: "Chuẩn hóa z-score trước khi chạy K-means." }
  ],
  [
    { text: "Có nhiều ô trống dữ liệu thiếu", options: { bold: true } },
    { text: "Khoảng cách tính bị khuyết/thiếu." },
    { text: "Điền khuyết bằng median theo nhóm hạng thẻ." }
  ]
], {
  x: cmToInch(12.3),
  y: cmToInch(2.2),
  w: cmToInch(12.3),
  h: cmToInch(5.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Bottom Banner Note
const summaryNote27 = 
  "💡 Nguyên tắc bắt buộc: Không xóa ngoại lệ chỉ vì chúng “khác thường”. Ngoại lệ có thể đại diện cho một phân khúc khách hàng mang lại giá trị cao nhất.";

addText(slide27, summaryNote27, {
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
