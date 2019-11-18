import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 12 — SECTION
// ----------------------------------------------------
const slide12 = pptx.addSlide({ masterName: "SECTION" });
slide12.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide12.addText("1.3.2. KHAI PHÁ VÀ ĐÁNH GIÁ MẪU", {
  placeholder: "title",
});
slide12.addText("Thuật toán có thể tìm ra rất nhiều mẫu; chỉ một số ít trong đó thực sự đáng tin cậy, hữu ích và có khả năng chuyển hóa thành hành động nghiệp vụ.", {
  placeholder: "content",
});
slide12.addText("Quy trình 3 bước cuối của KDD:\nKhai phá dữ liệu ➔ Đánh giá mẫu ➔ Trình bày tri thức", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 13 — CONTENT: Bước 5 - Khai phá dữ liệu
// ----------------------------------------------------
const slide13 = pptx.addSlide({ masterName: "CONTENT" });
slide13.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide13.addText("BƯỚC 5: KHAI PHÁ DỮ LIỆU (DATA MINING)", {
  placeholder: "title",
});

const optIntro13 = addText(slide13, "Data Mining là bước áp dụng các phương pháp thông minh để phát hiện các mẫu tiềm năng, xu hướng hoặc mối quan hệ từ tập dữ liệu.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW13 = cmToInch(11.5);
const colH13 = cmToInch(3.2);
const colY13 = (optIntro13.y as number) + (optIntro13.h as number) + cmToInch(0.2);

// Left table: Data Mining Tasks
slide13.addTable([
  [
    { text: "Tác vụ khai phá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dạng đầu ra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ nghiệp vụ thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Phân lớp" }, { text: "Nhãn lớp/Xác suất" }, { text: "Khách hàng A có 78% rủi ro rời bỏ." }],
  [{ text: "Dự báo / Hồi quy" }, { text: "Giá trị số liên tục" }, { text: "Dự báo doanh thu tháng tới đạt 2.4 tỷ." }],
  [{ text: "Phân cụm" }, { text: "Các nhóm tương đồng" }, { text: "Nhóm khách nhạy cảm giá vs Khách VIP." }],
  [{ text: "Luật kết hợp" }, { text: "Luật IF-THEN" }, { text: "Nếu mua mì Ý ➔ mua kèm phô mai." }]
], {
  x: cmToInch(0.8),
  y: colY13,
  w: colW13,
  h: colH13,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Selecting algorithm
addText(slide13, "🎯 NGUYÊN TẮC LỰA CHỌN THUẬT TOÁN\n\n• Luôn bắt đầu từ câu hỏi và quyết định nghiệp vụ cần hỗ trợ, tuyệt đối không bắt đầu từ việc chọn thuật toán.\n• Xác định dữ liệu có nhãn kết quả (phân lớp, hồi quy) hay chưa có nhãn (phân cụm, luật kết hợp).\n• Cân nhắc các yếu tố: Khả năng giải thích của mô hình, tốc độ xử lý real-time, quy mô dữ liệu và chi phí của các lỗi sai phân loại.\n• Khuyến nghị: Thử nghiệm nhiều thuật toán và so sánh hiệu năng.", {
  x: cmToInch(13.1),
  y: colY13,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide13, "💡 Tác vụ khai phá đúng bắt buộc phải bắt đầu bằng câu hỏi đúng: Doanh nghiệp cần dự báo, khám phá, gợi ý hay cảnh báo điều gì?", {
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

slide13.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu (data mining) là bước áp dụng các phương pháp thông minh để phát hiện mẫu, mối quan hệ hoặc xây dựng mô hình từ dữ liệu đã được chuẩn bị. Đây là bước cốt lõi của KDD, nhưng kết quả ban đầu chỉ là mẫu tiềm năng, chưa mặc nhiên là tri thức.");

// ----------------------------------------------------
// Slide 14 — CONTENT: Một dữ liệu, nhiều câu hỏi
// ----------------------------------------------------
const slide14 = pptx.addSlide({ masterName: "CONTENT" });
slide14.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide14.addText("VÍ DỤ THỰC TẾ: MỘT DỮ LIỆU, NHIỀU CÂU HỎI", {
  placeholder: "title",
});

const optIntro14 = addText(slide14, "Cùng dữ liệu siêu thị, mục tiêu khai phá thay đổi linh hoạt tùy thuộc vào quyết định nghiệp vụ cần hỗ trợ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY14 = (optIntro14.y as number) + (optIntro14.h as number) + cmToInch(0.2);

// Left table: Questions vs Tasks
slide14.addTable([
  [
    { text: "Câu hỏi nghiệp vụ của siêu thị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tác vụ phù hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đầu ra mong đợi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "“Khách hàng nào sắp rời bỏ siêu thị?”" }, { text: "Phân lớp (Classification)", options: { bold: true } }, { text: "Xác suất rủi ro của từng khách." }],
  [{ text: "“Có những phân khúc khách hàng nào?”" }, { text: "Phân cụm (Clustering)", options: { bold: true } }, { text: "Các nhóm khách có hành vi tương tự." }],
  [{ text: "“Sản phẩm nào thường mua kèm nhau?”" }, { text: "Luật kết hợp (Association)", options: { bold: true } }, { text: "Mẫu mua kèm và chỉ số Lift." }],
  [{ text: "“Giao dịch mua hàng nào bất thường?”" }, { text: "Phát hiện bất thường", options: { bold: true } }, { text: "Danh sách hóa đơn cần kiểm tra." }]
], {
  x: cmToInch(0.8),
  y: colY14,
  w: colW13,
  h: colH13,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Quiz
addText(slide14, "❓ TRẮC NGHIỆM CHẨN ĐOÁN NHANH\n\n• 'Muốn tìm khách rời bỏ thì dùng phân cụm' ➔ Sai! Nếu có nhãn lịch sử khách rời bỏ, tác vụ phân lớp dự báo chính xác và phù hợp hơn.\n• 'Luật mua kèm chứng minh sản phẩm A gây ra việc mua sản phẩm B' ➔ Sai! Luật kết hợp chỉ phản ánh sự đồng xuất hiện đồng thời từ dữ liệu, không chứng minh mối quan hệ nhân quả.\n• 'Có thể kết hợp nhiều tác vụ cùng lúc' ➔ Đúng! Phân cụm để hiểu chân dung khách hàng, sau đó chạy phân lớp dự báo rủi ro rời bỏ cụ thể.", {
  x: cmToInch(13.1),
  y: colY14,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide14, "💡 Bản thân dữ liệu không tự quyết định phương pháp khai phá; chính mục tiêu phân tích và quyết định nghiệp vụ thực tế mới quyết định tác vụ phù hợp.", {
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

slide14.addNotes("Nội dung bổ sung:\nKhông nhầm lẫn giữa các tác vụ. Luật kết hợp phản ánh đồng xuất hiện, không tự chứng minh quan hệ nhân quả. Có thể phân cụm để thiết kế ưu đãi, rồi dùng phân lớp để ưu tiên khách cần giữ chân.");

// ----------------------------------------------------
// Slide 15 — CONTENT: Bước 6 - Đánh giá mẫu
// ----------------------------------------------------
const slide15 = pptx.addSlide({ masterName: "CONTENT" });
slide15.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide15.addText("BƯỚC 6: ĐÁNH GIÁ MẪU (PATTERN EVALUATION)", {
  placeholder: "title",
});

const optIntro15 = addText(slide15, "Đánh giá mẫu nhằm xem xét các mô hình được tạo ra, xác định mẫu nào phản ánh tín hiệu đáng tin cậy và thực sự có giá trị sử dụng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY15 = (optIntro15.y as number) + (optIntro15.h as number) + cmToInch(0.2);

// Left table: Evaluation criteria
slide15.addTable([
  [
    { text: "Tiêu chí đánh giá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi chẩn đoán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Độ tin cậy" }, { text: "Mẫu có ổn định trên dữ liệu mới?" }, { text: "Mô hình tốt ở T1 có còn dùng tốt ở T4?" }],
  [{ text: "Tính mới mẻ" }, { text: "Có cung cấp hiểu biết bất ngờ?" }, { text: "Mua bút kèm giấy là hiển nhiên, ít mới." }],
  [{ text: "Tính dễ hiểu", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Người dùng nghiệp vụ có hiểu được?" }, { text: "Giải thích rõ vì sao khách bị xếp rủi ro." }],
  [{ text: "Khả năng triển khai" }, { text: "Dữ liệu có sẵn đúng thời điểm?" }, { text: "Gửi ưu đãi kịp thời trước khi khách đi." }]
], {
  x: cmToInch(0.8),
  y: colY15,
  w: colW13,
  h: colH13,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Tech good is not enough
addText(slide15, "⚠️ MẪU TỐT KỸ THUẬT CHƯA ĐỦ\n\nMột mô hình có độ chính xác (Accuracy) rất cao vẫn có thể hoàn toàn thất bại hoặc không thể sử dụng nếu:\n• Không tạo ra lợi ích kinh tế thực tế vượt trên chi phí triển khai vận hành.\n• Yêu cầu các biến đầu vào không có sẵn tại thời điểm cần đưa ra dự báo.\n• Không có khả năng giải thích rõ logic (hộp đen) trong bối cảnh cần phê duyệt minh bạch.\n• Gây ra các rủi ro lớn về tính công bằng, vi phạm riêng tư dữ liệu của khách hàng.", {
  x: cmToInch(13.1),
  y: colY15,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide15, "💡 Đánh giá mẫu không chỉ dừng ở câu hỏi kỹ thuật “mô hình có chính xác không?”; mà bắt buộc phải trả lời “mẫu có ý nghĩa nghiệp vụ và có đáng hành động không?”", {
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

slide15.addNotes("Nội dung bổ sung:\nĐánh giá mẫu (pattern evaluation) là bước xem xét các mẫu hoặc mô hình được tạo ra ở bước khai phá để xác định mẫu nào phản ánh tín hiệu đáng tin cậy và có giá trị sử dụng. Trong KDD, chỉ những mẫu được đánh giá là “đáng quan tâm” mới được xem là tri thức tiềm năng.");

// ----------------------------------------------------
// Slide 16 — CONTENT: Ví dụ chính xác nhưng chưa hiệu quả
// ----------------------------------------------------
const slide16 = pptx.addSlide({ masterName: "CONTENT" });
slide16.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide16.addText("VÍ DỤ THỰC TẾ: CHÍNH XÁC NHƯNG CHƯA HIỆU QUẢ", {
  placeholder: "title",
});

const optIntro16 = addText(slide16, "Bối cảnh: Mô hình lọc ra 1.000 khách rủi ro rời bỏ cao. Siêu thị dự kiến gửi voucher 200.000đ để giữ chân.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY16 = (optIntro16.y as number) + (optIntro16.h as number) + cmToInch(0.2);

// Left table: Economic framework
slide16.addTable([
  [
    { text: "Đại lượng kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa thực tế nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Số khách nhận ưu đãi" }, { text: "1.000 khách hàng rủi ro cao" }],
  [{ text: "Chi phí voucher tối đa" }, { text: "200.000 đồng / khách ➔ Tổng 200 triệu đồng" }],
  [{ text: "Tỷ lệ giữ chân tăng thêm", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Bao nhiêu khách quay lại nhờ voucher, thay vì vốn đã ở lại?" }],
  [{ text: "Lợi nhuận ròng tăng thêm" }, { text: "Chi tiêu trừ đi giá vốn, không tính doanh thu gộp" }]
], {
  x: cmToInch(0.8),
  y: colY16,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Economic evaluation
addText(slide16, "⚖️ PHƯƠNG PHÁP ĐÁNH GIÁ KINH TẾ TỐT HƠN\n\n• Công thức lợi ích ròng:\n  ↳ Lợi ích ròng = (Lợi nhuận giữ chân) - (Chi phí ưu đãi) - (Chi phí vận hành)\n• Thử nghiệm đối chứng (A/B testing):\n  ↳ Chia ngẫu nhiên nhóm rủi ro cao thành: nhóm nhận voucher và nhóm đối chứng (control group) không nhận voucher.\n  ↳ Đo tác động tăng thêm (incremental lift) thực tế để biết voucher thực sự đem lại hiệu năng sinh lời hay chỉ gây lãng phí.", {
  x: cmToInch(13.1),
  y: colY16,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide16, "💡 Mô hình tốt nhất là mô hình cải thiện chất lượng quyết định và tạo giá trị ròng lớn nhất cho doanh nghiệp, không chỉ là mô hình tối đa hóa một chỉ số kỹ thuật.", {
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

slide16.addNotes("Nội dung bổ sung:\nCác bài toán tiếp thị trực tiếp nên đánh giá mô hình theo lợi ích và chi phí dự kiến, chẳng hạn xác suất phản hồi, giá trị mua kỳ vọng, chi phí gửi ưu đãi và lợi nhuận ròng; thay vì chỉ dựa trên accuracy.");

// ----------------------------------------------------
// Slide 17 — CONTENT: Bước 7 - Trình bày tri thức
// ----------------------------------------------------
const slide17 = pptx.addSlide({ masterName: "CONTENT" });
slide17.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide17.addText("BƯỚC 7: TRÌNH BÀY VÀ SỬ DỤNG TRI THỨC", {
  placeholder: "title",
});

const optIntro17 = addText(slide17, "Trình bày tri thức là biểu diễn kết quả khai phá dưới dạng trực quan, giúp người dùng dễ dàng hiểu, kiểm tra và đưa vào hành động.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY17 = (optIntro17.y as number) + (optIntro17.h as number) + cmToInch(0.2);

// Left table: Outputs
slide17.addTable([
  [
    { text: "Dạng đầu ra tri thức", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ thực tế sử dụng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dashboard quản lý" }, { text: "Theo dõi tỷ lệ rủi ro khách hàng theo từng chi nhánh." }],
  [{ text: "Danh sách ưu tiên" }, { text: "Top 100 khách hàng rủi ro cao và giá trị vòng đời lớn." }],
  [{ text: "Luật nghiệp vụ IF-THEN", options: { bold: true } }, { text: "IF giảm mua và có khiếu nại ➔ THEN gọi điện chăm sóc." }],
  [{ text: "Gợi ý tự động (Recommender)" }, { text: "Giao diện gợi ý mua kèm ngay trên ứng dụng di động." }]
], {
  x: cmToInch(0.8),
  y: colY17,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Four questions
slide17.addTable([
  [
    { text: "4 Câu hỏi bắt buộc khi thiết kế đầu ra", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "• Ai hành động? (MKT, CSKH, chi nhánh, hay hệ thống tự động?)" }],
  [{ text: "• Hành động gì? (Gọi điện, tặng voucher, rà soát giao dịch?)" }],
  [{ text: "• Hành động khi nào? (Hằng ngày, hằng tuần hay tức thì?)" }],
  [{ text: "• Tác động kỳ vọng là gì? (Tăng tỷ lệ giữ chân, giảm nợ xấu?)" }]
], {
  x: cmToInch(13.1),
  y: colY17,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide17, "💡 Tri thức chỉ tạo ra giá trị khi người phù hợp nhận được thông tin phù hợp, đúng thời điểm và biết chính xác mình cần phải làm gì tiếp theo.", {
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

slide17.addNotes("Nội dung bổ sung:\nTrình bày tri thức (knowledge presentation) là bước biểu diễn kết quả khai phá dưới dạng người dùng có thể hiểu, kiểm tra và đưa vào quy trình ra quyết định. Các dạng thể hiện có thể gồm bảng, biểu đồ, dashboard, báo cáo, luật IF–THEN, cây quyết định, danh sách ưu tiên hoặc cảnh báo.");

// ----------------------------------------------------
// Slide 18 — CONTENT: Ví dụ vận hành
// ----------------------------------------------------
const slide18 = pptx.addSlide({ masterName: "CONTENT" });
slide18.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide18.addText("VÍ DỤ VẬN HÀNH: TỪ MÔ HÌNH ĐẾN HÀNH ĐỘNG", {
  placeholder: "title",
});

const optIntro18 = addText(slide18, "Mô hình dự báo rời bỏ chỉ thực sự tạo ra giá trị khi điểm số rủi ro được tích hợp vào quy trình nghiệp vụ phối hợp.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY18 = (optIntro18.y as number) + (optIntro18.h as number) + cmToInch(0.2);

// Left table: operational elements
slide18.addTable([
  [
    { text: "Thành phần vận hành", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thiết kế thực tế đề xuất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dashboard quản lý" }, { text: "Theo dõi tỷ lệ rủi ro theo chi nhánh, phân khúc và chi tiêu tuần." }],
  [{ text: "Danh sách ưu tiên" }, { text: "Xếp hạng khách hàng theo rủi ro và giá trị vòng đời lớn." }],
  [{ text: "Ưu đãi cá nhân hóa" }, { text: "Khách nhạy cảm giá nhận voucher; khách khiếu nại cần hỗ trợ dịch vụ." }],
  [{ text: "Vòng phản hồi (Feedback)" }, { text: "Ghi nhận phản hồi để theo dõi suy giảm hiệu năng và tái huấn luyện." }]
], {
  x: cmToInch(0.8),
  y: colY18,
  w: colW13,
  h: colH13,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Rule example & value chain
addText(slide18, "✍️ MINH HỌA QUY TẮC NGHIỆP VỤ\n\n• Luật hành động cụ thể:\n  ↳ IF khách thuộc nhóm rủi ro cao\n  ↳ AND chi tiêu giảm liên tục 3 tháng qua\n  ↳ AND có ít nhất 1 khiếu nại dịch vụ gần đây\n  ↳ THEN ưu tiên liên hệ chăm sóc trong vòng 48 giờ; xử lý khiếu nại trước, sau đó mới đề xuất ưu đãi phù hợp.\n\n👉 Ý nghĩa: Luật này giúp nhân viên tuyến đầu hiểu rõ đối tượng, điều kiện, hành động cụ thể và thời hạn phản hồi.", {
  x: cmToInch(13.1),
  y: colY18,
  w: colW13,
  h: colH13,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide18, "💡 Một mô hình chỉ nằm trên các báo cáo tĩnh sẽ không tạo ra bất kỳ thay đổi nào; mô hình được nhúng vào quy trình nghiệp vụ mới thực sự tạo ra giá trị.", {
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

slide18.addNotes(`Ghi chú giảng viên:
- Điểm rủi ro ➔ Danh sách ưu tiên ➔ Ưu đãi phù hợp ➔ Kết quả phản hồi ➔ Đo lường lợi ích ròng ➔ Cập nhật mô hình.
- Nhấn mạnh: Mô hình học máy chỉ là điểm khởi đầu, quy trình vận hành và con người mới quyết định sự thành bại của dự án KDD.
- Thiết kế bài tập nhóm nhanh cho học viên thảo luận trong 5 phút.`);
