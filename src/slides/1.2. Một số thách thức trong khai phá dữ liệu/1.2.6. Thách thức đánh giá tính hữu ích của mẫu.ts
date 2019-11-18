import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1 — SECTION
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "SECTION" });
slide1.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide1.addText("1.2.6. ĐÁNH GIÁ TÍNH HỮU ÍCH CỦA MẪU", {
  placeholder: "title",
});
slide1.addText("Khai phá dữ liệu có thể tạo ra hàng nghìn luật, cụm hoặc mô hình. Thách thức không phải chỉ là tìm mẫu “đúng”, mà là chọn mẫu đáng để hành động.", {
  placeholder: "content",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("MẪU ĐÚNG CHƯA CHẮC HỮU ÍCH", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Một thuật toán có thể sinh ra hàng ngàn mẫu dữ liệu; tuy nhiên, chỉ một phần rất nhỏ trong số đó thực sự đáng quan tâm và hữu ích đối với doanh nghiệp.", {
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

// Left table: contrast
slide2.addTable([
  [
    { text: "Góc nhìn Kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Góc nhìn Nghiệp vụ (Quyết định)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Mẫu có support, confidence hoặc accuracy rất cao." }, { text: "Mẫu có thực sự giúp tối ưu hóa một quyết định kinh doanh cụ thể nào không?" }],
  [{ text: "Mẫu ổn định trên tập kiểm thử." }, { text: "Có thể chuyển hóa mẫu thành chiến dịch, quy tắc nghiệp vụ tự động không?" }],
  [{ text: "Mẫu tìm thấy tương quan toán học từ dữ liệu." }, { text: "Nhà quản trị có thấy đây là thông tin mới mẻ hay chỉ là điều hiển nhiên đã biết?" }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Scorecard
addText(slide2, "🎯 KHUNG ĐÁNH GIÁ MẪU HỮU ÍCH\n\nMột mẫu dữ liệu thực sự có giá trị khi đáp ứng:\n• Tin cậy: Đúng trên dữ liệu mới.\n• Phổ biến: Đạt mức độ xuất hiện đủ lớn để đầu tư.\n• Mới mẻ: Cung cấp tri thức bất ngờ chưa từng biết.\n• Có thể hành động: Gợi ý rõ hành động tiếp theo.\n• Phù hợp: Khớp với bài toán ưu tiên của doanh nghiệp.", {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide2, "💡 Chỉ số kỹ thuật đóng vai trò sàng lọc mẫu ban đầu; giá trị nghiệp vụ thực tế mới quyết định mẫu đó có xứng đáng được đưa vào vận hành hay không.", {
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

slide2.addNotes("Nội dung bổ sung:\n“Khách mua bánh mì thường mua nước uống” có thể hoàn toàn đúng và xuất hiện rất thường xuyên. Tuy nhiên, nếu đây là hành vi đã quá quen thuộc, nhà quản trị có thể không thu được thêm quyết định mới nào từ mẫu này. Một mẫu được xem là thú vị khi nó dễ hiểu, còn đúng trên dữ liệu mới với mức độ tin cậy phù hợp, có khả năng hữu ích và mang lại thông tin mới.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("CÁC TIÊU CHÍ ĐÁNH GIÁ MẪU CHI TIẾT", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Đánh giá tính hữu ích cần kết hợp thước đo khách quan từ dữ liệu với đánh giá chủ quan dựa trên mục tiêu nghiệp vụ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: Criteria
slide3.addTable([
  [
    { text: "Tiêu chí", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi cần trả lời", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Minh họa thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Độ tin cậy" }, { text: "Vế kết quả có thường xảy ra khi có điều kiện?" }, { text: "Nếu mua máy ảnh, tỷ lệ mua kèm thẻ nhớ?" }],
  [{ text: "Độ phổ biến" }, { text: "Mẫu ảnh hưởng bao nhiêu giao dịch?" }, { text: "Luật chỉ áp dụng cho 0.01% giao dịch có ích ít." }],
  [{ text: "Khả năng hành động", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Doanh nghiệp có thể làm gì khác đi?" }, { text: "Gửi ưu đãi thẻ nhớ kịp thời cho người mua máy ảnh." }],
  [{ text: "Giá trị tài chính" }, { text: "Lợi ích có lớn hơn chi phí hành động?" }, { text: "Doanh thu bán chéo có vượt phí chạy quảng cáo?" }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right: Math of support/confidence
addText(slide3, "📐 THƯỚC ĐO LUẬT KẾT HỢP\n\n• Support (Độ hỗ trợ): Tỷ lệ giao dịch chứa đồng thời cả A và B:\n   ↳ support(A ➔ B) = P(A ∩ B)\n• Confidence (Độ tin cậy): Xác suất B xảy ra khi đã biết A xảy ra:\n   ↳ confidence(A ➔ B) = P(B | A)\n\n⚠️ Lưu ý: Confidence cao có thể gây hiểu lầm nếu B vốn đã rất phổ biến. Ví dụ: Nếu 95% khách mua nước uống, luật 'mua bánh mì ➔ mua nước uống' có confidence 96% vẫn có giá trị rất thấp.", {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide3, "💡 Một mẫu mạnh về chỉ số kỹ thuật luôn cần được đặt câu hỏi chất vấn: “Nó có gì bất ngờ không, có thực thi hành động gì được không, và có tạo ra giá trị kinh tế thực tế không?”", {
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

slide3.addNotes("Nội dung bổ sung:\nĐánh giá tính hữu ích cần kết hợp thước đo khách quan từ dữ liệu với đánh giá chủ quan dựa trên mục tiêu, kinh nghiệm và nhu cầu của người sử dụng kết quả.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("VÍ DỤ 1: LUẬT KẾT HỢP TRONG GIỎ HÀNG", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Phân tích giỏ hàng tìm các sản phẩm thường được mua cùng nhau để hỗ trợ bố trí sản phẩm, thiết kế khuyến mại, bán chéo và hệ thống gợi ý.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: comparing rules
slide4.addTable([
  [
    { text: "Luật kết hợp phát hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đánh giá ban đầu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị nghiệp vụ thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Mua bánh mì ➔ Mua nước uống" }, { text: "Support & Confidence cực cao" }, { text: "Ít mới mẻ; khó tạo đột phá nếu thói quen này đã hiển nhiên." }],
  [{ text: "Mua máy ảnh lần đầu ➔ Mua thẻ nhớ trong 7 ngày", options: { bold: true, color: DUE_COLORS.green } }, { text: "Support thấp hơn" }, { text: "Hành động rõ ràng: Kích hoạt email gợi ý thẻ nhớ dung lượng tương thích trong 24 giờ." }],
  [{ text: "Mua laptop ➔ Mua bảo hành mở rộng trong 3 ngày", options: { bold: true } }, { text: "Cần kiểm tra thêm biên lợi nhuận" }, { text: "Lợi ích cao nếu gửi ưu đãi đúng tập khách hàng chưa mua bảo hành." }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Lift formula
addText(slide4, "📈 CHỈ SỐ LIFT: ĐO LƯỜNG SỰ LIÊN KẾT THỰC\n\nLift so sánh mức độ đồng xuất hiện quan sát được với mức độ đồng xuất hiện kỳ vọng nếu hai sự kiện độc lập với nhau:\n   ↳ lift(A,B) = P(A ∩ B) / (P(A) * P(B))\n\n• lift > 1: A và B đồng xuất hiện nhiều hơn kỳ vọng ngẫu nhiên (tương quan dương).\n• lift = 1: Không có liên kết đặc biệt nào.\n• lift < 1: A và B có xu hướng né tránh xuất hiện cùng nhau.", {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide4, "💡 Mẫu bán chéo tốt nhất không nhất thiết là mẫu phổ biến nhất; đó phải là mẫu giúp doanh nghiệp đưa ra đúng đề xuất, cho đúng khách hàng, vào đúng thời điểm.", {
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

slide4.addNotes("Nội dung bổ sung:\nVới người mua máy ảnh lần đầu, doanh nghiệp có thể gửi đề xuất thẻ nhớ dung lượng phù hợp trong vòng 24 giờ, thay vì gửi khuyến mại đại trà cho toàn bộ khách hàng.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 2: CHÍNH XÁC NHƯNG KHÔNG SINH LỜI", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Mô hình dự báo rời bỏ chính xác cao vẫn có thể gây thua lỗ nặng nề nếu chi phí giữ chân vượt quá lợi ích mang lại.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: scenario
slide5.addTable([
  [
    { text: "Thông tin chiến dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị giả định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Số lượng khách hàng được mô hình chọn" }, { text: "10.000 khách", options: { bold: true } }],
  [{ text: "Xác suất rời bỏ trung bình của nhóm" }, { text: "30%" }],
  [{ text: "Chi phí gửi ưu đãi (tặng quà, gọi điện) / khách" }, { text: "80.000 đồng", options: { color: DUE_COLORS.orange, bold: true } }],
  [{ text: "Lợi nhuận thu lại nếu giữ chân thành công / khách" }, { text: "500.000 đồng" }],
  [{ text: "Tỷ lệ khách thực sự được giữ lại nhờ ưu đãi" }, { text: "10%", options: { bold: true } }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Calculation
addText(slide5, "🧮 PHÂN TÍCH GIÁ TRỊ KỲ VỌNG NGHIỆP VỤ\n\n• Số khách nguy cơ rời đi thực tế: 10.000 x 30% = 3.000 khách.\n• Số khách được giữ lại nhờ ưu đãi: 3.000 x 10% = 300 khách.\n• Lợi ích giữ chân kỳ vọng: 300 khách x 500.000đ = 150.000.000đ.\n• Tổng chi phí chạy chiến dịch: 10.000 x 80.000đ = 800.000.000đ.\n\n➔ GIÁ TRỊ RÒNG THU VỀ: 150 triệu - 800 triệu = -650.000.000đ\n\n👉 Kết luận: Chiến dịch thua lỗ 650 triệu đồng vì ưu đãi đại trà được cấp cho quá nhiều khách hàng không thực sự thay đổi hành vi.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Một mô hình dự báo tốt phải trả lời được đồng thời hai câu hỏi: “Ai có nguy cơ rời bỏ?” và “Can thiệp tác động vào đối tượng nào thì mới sinh lời?”", {
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

slide5.addNotes("Nội dung bổ sung:\nCác bài toán tiếp thị trực tiếp nên đánh giá mô hình theo lợi ích và chi phí dự kiến, chẳng hạn xác suất phản hồi, giá trị mua kỳ vọng, chi phí gửi ưu đãi và lợi nhuận ròng; thay vì chỉ dựa trên accuracy. Cải thiện bằng cách: phân tầng ưu đãi, nhắm khách có lợi ích kỳ vọng dương, kiểm tra bằng thử nghiệm đối chứng (A/B testing).");

// ----------------------------------------------------
// Slide 6 — CONTENT (Hoạt động lớp học)
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("HOẠT ĐỘNG: XẾP HẠNG GIÁ TRỊ MẪU KHAI PHÁ", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "👥 Làm việc nhóm (5 phút): Hãy xếp hạng từ 1 (ưu tiên cao nhất) đến 4 (ưu tiên thấp nhất) cho 4 kết quả khai phá được.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

slide6.addTable([
  [
    { text: "Mẫu được phát hiện từ dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thông tin bổ sung quan trọng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hạng đề xuất (1-4)", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "A. “92% khách mua nước uống cũng mua bánh mì”", options: { bold: true } }, { text: "Support 38%; đây là luật bộ phận bán hàng đã biết từ lâu." }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "B. “Khách mua máy ảnh lần đầu có xác suất mua thẻ nhớ trong 7 ngày cao gấp 2,4 lần bình thường”", options: { bold: true, color: DUE_COLORS.green } }, { text: "Support 4%; có thể chạy gửi email gợi ý thẻ nhớ tự động trong 24 giờ." }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "C. “Mô hình dự báo khách rời bỏ có Accuracy 89%”", options: { bold: true } }, { text: "Chiến dịch ưu đãi giữ chân cho toàn nhóm dự báo lỗ 300 triệu đồng." }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "D. “Khách mua mạng gia đình + 2 lần khiếu nại kỹ thuật trong 30 ngày phản hồi tích cực với gói ưu tiên”", options: { bold: true } }, { text: "Support 6%; lợi nhuận kỳ vọng dương, nhưng cần tích hợp hệ thống chăm sóc khách hàng phức tạp." }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }]
], {
  x: cmToInch(0.8),
  y: tableY6,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6, "💬 Đánh giá dựa trên 4 tiêu chí: (1) Độ tin cậy dữ liệu, (2) Khả năng hành động, (3) Giá trị tài chính thực tế mang lại, (4) Mức độ dễ dàng triển khai công nghệ.", {
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

slide6.addNotes("Ghi chú giảng viên:\nCho học viên làm thảo luận nhóm xếp hạng nhanh trong 5 phút trước khi công bố định hướng giải đáp.");

// ----------------------------------------------------
// Slide 6b — CONTENT (Đáp án)
// ----------------------------------------------------
const slide7b = pptx.addSlide({ masterName: "CONTENT" });
slide7b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7b.addText("GỢI Ý ĐÁP ÁN XẾP HẠNG MẪU NGHIỆP VỤ", {
  placeholder: "title",
});

const optIntro7b = addText(slide7b, "✅ Khung chẩn đoán xếp hạng và định hướng phân tích thứ tự ưu tiên các mẫu khai phá.", {
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
    { text: "Mẫu dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hạng", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Đánh giá chi tiết & Lập luận giải thích nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "B. Mua máy ảnh ➔ Thẻ nhớ" }, { text: "Hạng 1", options: { bold: true, color: DUE_COLORS.green } }, { text: "Hành động cụ thể, bán chéo đúng thời điểm, tiềm năng tạo lợi nhuận tức thì dễ triển khai." }],
  [{ text: "D. Khiếu nại kỹ thuật ➔ Gói hỗ trợ" }, { text: "Hạng 2", options: { bold: true } }, { text: "Giá trị kinh doanh rất tốt giúp giảm rời bỏ, nhưng cần hạ tầng tích hợp phức tạp hơn." }],
  [{ text: "A. Nước uống ➔ Bánh mì" }, { text: "Hạng 3", options: { bold: true } }, { text: "Chỉ số cao nhưng không có tính mới, khó đem lại quyết định thay đổi nào khác." }],
  [{ text: "C. Churn model Accuracy 89%" }, { text: "Hạng 4", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Chỉ số kỹ thuật tốt nhưng chiến dịch chạy lỗ 300 triệu; không thể đưa vào hành động thực tế." }]
], {
  x: cmToInch(0.8),
  y: tableY7b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7b, "💡 Việc đánh giá và lựa chọn mẫu luôn cần phải vượt ra khỏi một chỉ số kỹ thuật đơn lẻ để thực sự bám sát tính hiệu quả kinh tế và khả năng vận hành thực tế của doanh nghiệp.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7b.addNotes(`Ghi chú giảng viên:
- A thường có độ phổ biến và confidence cao, nhưng tính mới và khả năng tạo lợi thế cạnh tranh có thể thấp.
- B có support thấp hơn nhưng có tính thời điểm, hành động rõ ràng và tiềm năng bán chéo.
- C nhấn mạnh rằng accuracy cao không đảm bảo lợi nhuận dương.
- D có thể mang giá trị kinh doanh tốt, nhưng mức độ dễ triển khai thấp hơn do yêu cầu tích hợp dữ liệu và vận hành đa bộ phận.`);
