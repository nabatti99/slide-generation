import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 3 — SECTION
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "SECTION" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("1.2.1. THÁCH THỨC VỀ QUY MÔ VÀ TỐC ĐỘ DỮ LIỆU", {
  placeholder: "title",
  fontSize: 24
});
slide3.addText("Khi dữ liệu tăng về số lượng, số biến và tốc độ phát sinh, cách xử lý phù hợp quan trọng không kém thuật toán được chọn.", {
  placeholder: "content",
});
slide3.addText("Câu hỏi dẫn nhập:\n“Nếu hệ thống ghi nhận hàng nghìn lượt nhấp chuột mỗi giây, liệu có thể chờ đến cuối ngày mới phân tích không?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("QUY MÔ DỮ LIỆU VÀ KHẢ NĂNG MỞ RỘNG", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Quy mô bài toán phân tích được đo bằng ba khía cạnh đồng thời: số lượng đối tượng (bản ghi), số lượng thuộc tính (biến) và tốc độ dữ liệu phát sinh.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW4 = cmToInch(11.5);
const colH4 = cmToInch(3.2);
const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left column: 3 aspects table
slide4.addTable([
  [
    { text: "Khía cạnh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hệ quả nếu xử lý không phù hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Số bản ghi lớn\n(Triệu hóa đơn)", options: { bold: true } }, { text: "Thời gian quét dữ liệu và nhu cầu dung lượng lưu trữ tăng mạnh." }],
  [{ text: "Số thuộc tính lớn\n(Hàng ngàn biến)", options: { bold: true } }, { text: "Bùng nổ không gian tính toán, dữ liệu thưa thớt, khó tìm mẫu." }],
  [{ text: "Tốc độ phát sinh cao\n(Clickstream, IoT)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Kết quả phân tích bị lỗi thời trước khi mô hình kịp đưa ra phản hồi." }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right column: Solutions
addText(slide4, "🛠️ CÁC HƯỚNG XỬ LÝ QUY MÔ BAN ĐẦU\n\n• Lấy mẫu (Sampling): Chọn mẫu đại diện để phát triển và kiểm thử nhanh.\n• Giảm chiều (Dimensionality Reduction): Loại bỏ biến nhiễu/dư thừa.\n• Tính toán phân tán (Parallel/Distributed): Chia tải cho cụm máy chủ.\n• Chỉ mục & Tiền tổng hợp: Tổ chức dữ liệu để tăng tốc độ truy xuất.", {
  x: cmToInch(13.1),
  y: colY4,
  w: colW4,
  h: colH4,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide4, "💡 “Chạy được trên dữ liệu mẫu” chưa đồng nghĩa với “vận hành tốt trên dữ liệu thật”. Hạ tầng kỹ thuật và thiết kế thuật toán phải có khả năng mở rộng (scalability).", {
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

slide4.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu hiện đại vì vậy cần các công cụ có hiệu quả và khả năng mở rộng trên dữ liệu lớn, đa dạng và có thể đến dưới dạng luồng.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 1: GỢI Ý SẢN PHẨM TRÊN SÀN THƯƠNG MẠI ĐIỆN TỬ", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Thử thách: Một sàn thương mại điện tử sở hữu hàng triệu khách hàng, hàng trăm ngàn sản phẩm và dòng tương tác clickstream phát sinh liên tục.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

addText(slide5, "❌ THÁCH THỨC TÍNH TOÁN TRỰC TIẾP\n\n• Bùng nổ tổ hợp: So sánh trực tiếp mọi khách hàng với mọi sản phẩm tạo ra hàng tỷ phép tính.\n• Ma trận siêu thưa: Phần lớn khách hàng chỉ tương tác với một vài sản phẩm trên tổng số hàng trăm ngàn mặt hàng.\n• Độ trễ: Cập nhật điểm gợi ý tức thời mỗi khi khách hàng click có thể làm nghẽn toàn bộ hệ thống tính toán.", {
  x: cmToInch(0.8),
  y: colY5,
  w: colW4,
  h: colH4,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "🚀 GIẢI PHÁP LỌC ỨNG VIÊN HIỆU QUẢ\n\n• Thu hẹp phạm vi: Lọc nhanh ra top 100 sản phẩm ứng viên có liên quan trước bằng thuật toán nhẹ.\n• Giới hạn thời gian: Chỉ tập trung phân tích các tương tác gần đây (ví dụ trong 30 ngày qua).\n• Kiến trúc phân tán: Tính toán song song trên đám mây, kết hợp cập nhật theo lô (batch) và thời gian thực.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW4,
  h: colH4,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Trong các bài toán quy mô lớn, việc giảm không gian tìm kiếm (lọc bớt ứng viên ít tiềm năng) quan trọng hơn nhiều so với việc cố gắng tăng cường sức mạnh phần cứng để tính toán toàn bộ ma trận.", {
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

slide5.addNotes("Nội dung bổ sung:\nDữ liệu khách hàng–sản phẩm có thể trở thành ma trận rất lớn; các bài toán khai phá trên ma trận lớn cần cân nhắc chi phí tính toán và khả năng mở rộng thay vì thực hiện các phép so sánh toàn diện một cách ngây thơ.");

// ----------------------------------------------------
// Slide 6 — CONTENT
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("VÍ DỤ 2: PHÂN TÍCH DỮ LIỆU GIAO DỊCH CHỨNG KHOÁN", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "Dữ liệu giao dịch, đặt lệnh chứng khoán đổ về liên tục theo giây. Việc lựa chọn phương án xử lý phụ thuộc vào chi phí phản hồi chậm và giá trị quyết định.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

addText(slide6, "📊 XỬ LÝ THEO LÔ (Batch Processing)\n\n• Đặc điểm: Tích lũy dữ liệu thô, định kỳ chạy xử lý cuối ngày hoặc cuối tuần.\n• Phù hợp: Báo cáo thị phần, doanh thu môi giới chi nhánh, thống kê khối lượng giao dịch dài hạn.\n• Ưu điểm: Tiết kiệm chi phí vận hành hạ tầng; độ trễ không gây thiệt hại.", {
  x: cmToInch(0.8),
  y: colY6,
  w: colW4,
  h: colH4,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide6, "⚡ XỬ LÝ DÒNG THỜI GIAN THỰC (Stream Processing)\n\n• Đặc điểm: Xử lý dữ liệu ngay lập tức khi phát sinh để đưa ra kết quả dưới giây.\n• Phù hợp: Hệ thống cảnh báo biến động giá bất thường, phát hiện lệnh thao túng thị trường hoặc giao dịch rủi ro cao.\n• Ưu điểm: Phản ứng lập tức; ngăn chặn thiệt hại tài chính ngay khi nó xảy ra.", {
  x: cmToInch(13.1),
  y: colY6,
  w: colW4,
  h: colH4,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide6, "💡 Không phải dữ liệu phát sinh nhanh thì luôn bắt buộc phải xử lý tức thời; thiết kế giải pháp kỹ thuật cần cân đối giữa chi phí đầu tư hạ tầng thời gian thực và giá trị nghiệp vụ mang lại.", {
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

slide6.addNotes("Nội dung bổ sung:\nCác hệ thống khai phá có thể làm việc với dữ liệu luồng, tức dữ liệu được đưa vào hệ thống động theo thời gian; trong các bối cảnh này, hiệu quả và độ trễ phản hồi là yêu cầu thiết kế cốt lõi.");

// ----------------------------------------------------
// Slide 7 — CONTENT (Bài tập nhanh - Câu hỏi)
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("BÀI TẬP NHANH: CHỌN GIẢI PHÁP THEO QUY MÔ", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "👥 Hãy chọn giải pháp ban đầu phù hợp nhất: Xử lý cục bộ (1 máy), Lấy mẫu (Sampling), hay Xử lý dòng/phân tán trên đám mây.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7 = (optIntro7.y as number) + (optIntro7.h as number) + cmToInch(0.2);

slide7.addTable([
  [
    { text: "Bối cảnh thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đặc thù dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Phương án lựa chọn", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    { text: "Lập luận / Vì sao?", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "A. Khảo sát khách hàng", options: { bold: true } }, { text: "5.000 bảng trả lời, cập nhật một lần." }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "B. Hóa đơn siêu thị", options: { bold: true } }, { text: "10 triệu hóa đơn tích lũy từ nhiều chi nhánh." }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "C. Clickstream website", options: { bold: true } }, { text: "Hành vi người dùng phát sinh liên tục theo giây." }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }]
], {
  x: cmToInch(0.8),
  y: tableY7,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7, "💬 Thảo luận nhóm trong 3 phút. Hãy xem xét các tiêu chí: quy mô dung lượng, tốc độ dữ liệu đổ về và yêu cầu về độ trễ phản hồi của quyết định.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7.addNotes("Gợi ý giảng viên:\nCho học viên suy nghĩ độc lập hoặc thảo luận nhóm để chọn giải pháp phù hợp dựa trên 3 tiêu chí chính: quy mô dữ liệu, tần suất phát sinh và mức độ khẩn cấp của quyết định kinh doanh.");

// ----------------------------------------------------
// Slide 7b — CONTENT (Bài tập nhanh - Đáp án)
// ----------------------------------------------------
const slide7b = pptx.addSlide({ masterName: "CONTENT" });
slide7b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7b.addText("BÀI TẬP NHANH: ĐÁP ÁN ĐỀ XUẤT", {
  placeholder: "title",
});

const optIntro7b = addText(slide7b, "✅ Dưới đây là các phương án đề xuất và lập luận phân tích chi tiết cho từng bối cảnh dự án.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7b = (optIntro7b.y as number) + (optIntro7b.h as number) + cmToInch(0.2);

slide7b.addTable([
  [
    { text: "Bối cảnh thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Phương án đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lập luận phân tích chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "A. Khảo sát khách hàng", options: { bold: true } },
    { text: "Xử lý cục bộ (1 máy)", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Quy mô dữ liệu nhỏ; có thể dùng Excel, Python, R xử lý trực tiếp trên máy cá nhân nhanh chóng." }
  ],
  [
    { text: "B. Hóa đơn siêu thị", options: { bold: true } },
    { text: "Lấy mẫu / Tính toán phân tán", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Lấy mẫu đại diện khi cần thử nghiệm ý tưởng nhanh; dùng hạ tầng phân tán (Spark) khi chạy trên toàn bộ tập dữ liệu thực tế." }
  ],
  [
    { text: "C. Clickstream website", options: { bold: true } },
    { text: "Xử lý luồng / Dòng dữ liệu", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Dữ liệu đến liên tục theo thời gian thực; cần hệ thống xử lý luồng để phát hiện nhanh tín hiệu và phản hồi ngay lập tức." }
  ]
], {
  x: cmToInch(0.8),
  y: tableY7b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7b, "💡 Giải pháp kỹ thuật phải tương xứng với bài toán nghiệp vụ: không “quá nhỏ” để xử lý không kịp gây tắc nghẽn, nhưng cũng không “quá lớn” gây lãng phí tài nguyên và nguồn lực.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7b.addNotes("Ghi chú giảng viên:\n- Cho học viên thảo luận nhóm trong 3 phút, sau đó mỗi nhóm bảo vệ một lựa chọn.\n- Khi chữa bài, nhấn mạnh: một bối cảnh có thể cần nhiều giải pháp ở các giai đoạn khác nhau, ví dụ lấy mẫu để phát triển và hạ tầng phân tán để vận hành.\n- Kết nối sang phần tiếp theo: quy mô lớn chỉ là một trở ngại; ngay cả dữ liệu nhỏ cũng có thể làm mô hình sai nếu chất lượng dữ liệu thấp. Việc chuẩn bị, làm sạch và lựa chọn dữ liệu là các bước cốt lõi trước khi khai phá.");
