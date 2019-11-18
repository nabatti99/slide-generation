import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 19 — SECTION
// ----------------------------------------------------
const slide19 = pptx.addSlide({ masterName: "SECTION" });
slide19.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide19.addText("1.3.3. TÍNH LẶP VÀ TƯƠNG TÁC CỦA KDD", {
  placeholder: "title",
});
slide19.addText("Khi mô hình chưa tạo được giá trị, câu hỏi không chỉ là “đổi thuật toán nào?” mà còn là “cần quay lại bước nào của KDD?”. KDD là quy trình lặp và tương tác liên tục.", {
  placeholder: "content",
});
slide19.addText("Quy trình chẩn đoán lặp:\nNhận diện lỗi ➔ Truy vết bước KDD lỗi ➔ Hiệu chỉnh ➔ Đánh giá lại", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 20 — CONTENT: KDD không đi theo đường thẳng
// ----------------------------------------------------
const slide20 = pptx.addSlide({ masterName: "CONTENT" });
slide20.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide20.addText("KDD KHÔNG ĐI THEO ĐƯỜNG THẲNG", {
  placeholder: "title",
});

const optIntro20 = addText(slide20, "KDD là quá trình lặp (iterative) và tương tác (interactive). Nhóm phân tích quay lại các bước trước khi phát hiện vấn đề về dữ liệu, mô hình hay nghiệp vụ.", {
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

// Left table: Symptoms vs KDD steps
slide20.addTable([
  [
    { text: "Dấu hiệu phát hiện lỗi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nên quay lại bước KDD nào?", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Nhiều giá trị thiếu, ngoại lệ không rõ nghĩa" }, { text: "Làm sạch dữ liệu (Data Cleaning)", options: { bold: true } }],
  [{ text: "Một khách hàng xuất hiện ở nhiều mã định danh" }, { text: "Tích hợp dữ liệu (Data Integration)", options: { bold: true } }],
  [{ text: "Biến đầu vào chưa phù hợp thuật toán" }, { text: "Biến đổi dữ liệu (Transformation)", options: { bold: true } }],
  [{ text: "Mô hình chính xác kỹ thuật nhưng chạy lỗ" }, { text: "Đánh giá mẫu và mục tiêu nghiệp vụ", options: { bold: true, color: DUE_COLORS.orange } }]
], {
  x: cmToInch(0.8),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Experts interaction
slide20.addTable([
  [
    { text: "Chuyên gia Dữ liệu (Data)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Chuyên gia Nghiệp vụ (Business)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Kiểm tra chất lượng dữ liệu." }, { text: "Xác định rõ mục tiêu bài toán." }],
  [{ text: "Thiết kế biến hành vi." }, { text: "Giải thích rõ ý nghĩa các đặc trưng." }],
  [{ text: "Xây dựng thuật toán khai phá." }, { text: "Xác định rõ rủi ro sai sót chấp nhận." }],
  [{ text: "Thiết lập thí nghiệm & Đánh giá." }, { text: "Quyết định hành động can thiệp MKT." }]
], {
  x: cmToInch(13.1),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide20, "💡 Quy trình KDD tốt không phải là quy trình ít phải quay lại các bước trước nhất, mà là quy trình biết quay lại đúng khâu khi phát hiện ra vấn đề.", {
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

slide20.addNotes("Nội dung bổ sung:\nMột mô hình chỉ có ý nghĩa khi khái niệm cần dự báo được định nghĩa đúng theo bối cảnh nghiệp vụ. Chẳng hạn, “rời bỏ” có thể là không giao dịch trong 30, 60 hoặc 90 ngày; mỗi định nghĩa sẽ tạo ra nhãn huấn luyện, danh sách khách rủi ro và chính sách can thiệp khác nhau.");

// ----------------------------------------------------
// Slide 21 — CONTENT: Chẩn đoán mô hình rời bỏ
// ----------------------------------------------------
const slide21 = pptx.addSlide({ masterName: "CONTENT" });
slide21.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide21.addText("CHẨN ĐOÁN: VÌ SAO MÔ HÌNH RỜI BỎ DỰ BÁO KÉM?", {
  placeholder: "title",
});

const optIntro21 = addText(slide21, "Tình huống: Mô hình dự báo rời bỏ hoạt động tốt trong thời gian thường nhưng lại bỏ sót rất nhiều khách hàng trong mùa khuyến mại lớn.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const colY21 = (optIntro21.y as number) + (optIntro21.h as number) + cmToInch(0.2);

// Left table: Diagnostics
slide21.addTable([
  [
    { text: "Nghi ngờ lỗi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Bước KDD quay lại", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hướng cải thiện cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thiếu biến chương trình khuyến mãi" }, { text: "Lựa chọn & Biến đổi", options: { bold: true } }, { text: "Bổ sung tỷ lệ sử dụng voucher, mức giảm giá." }],
  [{ text: "Dữ liệu ứng dụng chưa được tích hợp" }, { text: "Tích hợp dữ liệu", options: { bold: true } }, { text: "Liên kết dữ liệu app/web với POS mua hàng." }],
  [{ text: "Định nghĩa rời bỏ chưa phù hợp" }, { text: "Xác định mục tiêu & Đánh giá", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Chuẩn hóa chu kỳ rời bỏ theo phân khúc khách hàng." }],
  [{ text: "Độ trễ cập nhật dữ liệu giao dịch" }, { text: "Làm sạch & Tích hợp", options: { bold: true } }, { text: "Kiểm tra và rút ngắn độ trễ luồng dữ liệu POS." }]
], {
  x: cmToInch(0.8),
  y: colY21,
  w: colW20,
  h: colH20,
  fontSize: 8.8,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Diagnostic tree
addText(slide21, "🌳 CÂY CHẨN ĐOÁN LỖI MÔ HÌNH NHANH\n\nKhi hiệu năng dự báo suy giảm, hãy rà soát:\n• 1. Dữ liệu đầu vào: Có bị thiếu, sai, hoặc trễ cập nhật không?\n• 2. Tập đặc trưng: Có bỏ sót các biến nghiệp vụ quan trọng không?\n• 3. Định nghĩa nhãn: Nhãn mục tiêu có còn phù hợp thực tế không?\n• 4. Sự dịch chuyển hành vi: Dữ liệu huấn luyện cũ có quá khác so với hành vi hiện tại trong mùa khuyến mãi không?\n• 5. Chỉ số đánh giá: Có phản ánh đúng mục tiêu kinh tế ròng?", {
  x: cmToInch(13.1),
  y: colY21,
  w: colW20,
  h: colH20,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide21, "💡 Hiệu năng suy giảm là tín hiệu để điều tra lại toàn bộ chuỗi KDD, không chỉ đơn thuần là tín hiệu để tìm kiếm một thuật toán phức tạp hơn.", {
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

slide21.addNotes("Nội dung bổ sung:\nKiểm tra định nghĩa bài toán, tính đầy đủ của dữ liệu và các biến phản ánh mùa khuyến mãi trước. Đổi thuật toán có thể hữu ích, nhưng không khắc phục được vấn đề nếu dữ liệu đầu vào bỏ sót nguyên nhân quan trọng hoặc nhãn kết quả không phù hợp.");

// ----------------------------------------------------
// Slide 22 — CONTENT: Thiết kế KDD Mini Canvas
// ----------------------------------------------------
const slide22 = pptx.addSlide({ masterName: "CONTENT" });
slide22.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide22.addText("HOẠT ĐỘNG NHÓM: THIẾT KẾ KDD CANVAS MINI", {
  placeholder: "title",
});

const optIntro22 = addText(slide22, "👥 Hoạt động nhóm (12 phút): Hãy thiết kế quy trình KDD mini liên kết nhất quán giữa Mục tiêu ➔ Dữ liệu ➔ Biến ➔ Tác vụ ➔ Đánh giá ➔ Hành động.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const colY22 = (optIntro22.y as number) + (optIntro22.h as number) + cmToInch(0.2);

// Left table: Choose 1 problem
slide22.addTable([
  [
    { text: "Chọn 1 trong 4 Bài toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa hỗ trợ quyết định thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Dự báo khách trễ hạn nợ" }, { text: "Danh sách ưu tiên gọi nhắc nợ hoặc hỗ trợ giãn nợ sớm." }],
  [{ text: "2. Phát hiện giao dịch bất thường" }, { text: "Đưa ra cảnh báo thời gian thực ngăn chặn gian lận thẻ." }],
  [{ text: "3. Hệ thống gợi ý sản phẩm" }, { text: "Đề xuất thông minh sản phẩm mua kèm trên app/web." }],
  [{ text: "4. Dự báo nhu cầu tồn kho" }, { text: "Lên kế hoạch đặt hàng và phân bổ hàng hóa cho các chi nhánh." }]
], {
  x: cmToInch(0.8),
  y: colY22,
  w: cmToInch(12.5),
  h: cmToInch(3.2),
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Canvas Steps
addText(slide22, "📋 8 BƯỚC THIẾT KẾ KDD CANVAS MINI\n\n1. Mục tiêu nghiệp vụ: Cần dự báo đối tượng nào, vào thời điểm nào?\n2. Nguồn dữ liệu sử dụng: POS, CRM, App, Web hay nguồn ngoài?\n3. Vấn đề dữ liệu: Dự kiến các lỗi thiếu, trùng, trễ dữ liệu là gì?\n4. Cách tích hợp: Thiết lập khóa ghép nối gì, giải quyết xung đột ra sao?\n5. Đặc trưng thiết kế: Tạo các biến hành vi gì? Tránh rò rỉ dữ liệu.\n6. Tác vụ khai phá: Chọn phân lớp, hồi quy, phân cụm hay luật kết hợp?\n7. Tiêu chí đánh giá: Cách đo lường độ tin cậy và giá trị kinh tế ròng?\n8. Quy trình hành động: Ai thực hiện, ưu đãi gì, và phản hồi ra sao?", {
  x: cmToInch(14.0),
  y: colY22,
  w: cmToInch(10.6),
  h: cmToInch(3.2),
  fontSize: 9,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide22, "💬 Yêu cầu trình bày: Trình bày nhóm trong 2 phút. Phản biện chéo tập trung vào 2 câu hỏi: “Biến nào có thể bị rò rỉ thông tin?” & “Mô hình này mang lại giá trị kinh tế thế nào?”", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide22.addNotes(`Ghi chú giảng viên:
- Phân công vai trò trong nhóm: chuyên gia nghiệp vụ, chuyên gia dữ liệu và người ra quyết định.
- Nhấn mạnh tầm quan trọng của việc thiết kế đầu ra có thể hành động và đo lường được hiệu quả kinh tế thực tế.
- Giám sát các nhóm thảo luận, gợi ý các biến rò rỉ dữ liệu thường gặp.`);

// ----------------------------------------------------
// Slide 23 — CONTENT: Tổng kết mục 1.3
// ----------------------------------------------------
const slide23 = pptx.addSlide({ masterName: "CONTENT" });
slide23.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide23.addText("TỔNG KẾT MỤC 1.3: QUÁ TRÌNH KDD", {
  placeholder: "title",
});

const optIntro23 = addText(slide23, "KDD chuyển hóa dữ liệu thô thành tri thức hành động thông qua 7 bước lặp và tương tác chặt chẽ giữa chuyên gia dữ liệu và nghiệp vụ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY23 = (optIntro23.y as number) + (optIntro23.h as number) + cmToInch(0.2);

// Left table: Summary of stages
slide23.addTable([
  [
    { text: "Giai đoạn KDD", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Các bước thực hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi trọng tâm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Chuẩn bị dữ liệu" }, { text: "Làm sạch, tích hợp, chọn, biến đổi" }, { text: "Dữ liệu có đúng, nhất quán, phù hợp?" }],
  [{ text: "2. Khám phá mẫu" }, { text: "Khai phá dữ liệu (Data Mining)" }, { text: "Tác vụ nào khớp với câu hỏi nghiệp vụ?" }],
  [{ text: "3. Xác nhận giá trị" }, { text: "Đánh giá mẫu (Evaluation)" }, { text: "Mẫu có tin cậy, hữu ích, dễ hiểu không?" }],
  [{ text: "4. Ra quyết định" }, { text: "Trình bày & Triển khai" }, { text: "Ai hành động, ưu đãi gì và đo tác động?" }]
], {
  x: cmToInch(0.8),
  y: colY23,
  w: colW20,
  h: colH20,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: 5 Key take-aways
addText(slide23, "⭐ 5 ĐIỀU CỐT LÕI CẦN GHI NHỚ\n\n• KDD là hành trình chuyển đổi: Dữ liệu thô ➔ Mẫu ➔ Tri thức ➔ Quyết định/Hành động.\n• Khai phá dữ liệu (Data Mining) chỉ là bước trung tâm, hoàn toàn không phải toàn bộ quy trình KDD.\n• Chuẩn bị dữ liệu đóng vai trò quyết định: Dữ liệu tốt phải được làm sạch, tích hợp đúng và biến đổi phù hợp.\n• Mẫu kỹ thuật tốt chỉ trở thành tri thức thực sự khi đáng tin cậy, hữu ích và giải thích được.\n• KDD là quy trình lặp và phối hợp chặt chẽ.", {
  x: cmToInch(13.1),
  y: colY23,
  w: colW20,
  h: colH20,
  fontSize: 9,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide23, "💡 Giá trị cuối cùng của KDD không nằm ở việc tạo ra một mô hình; nó nằm ở việc tạo ra một quyết định tốt hơn, bền vững và có trách nhiệm dựa trên tri thức đáng tin cậy.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide23.addNotes(`Nội dung bổ sung:
- Liên hệ chương tiếp theo: Các bước làm sạch, tích hợp, lựa chọn và biến đổi dữ liệu sẽ được triển khai sâu hơn ở Chương 2 — Tiền xử lý dữ liệu. Đây là nền tảng để các thuật toán ở các chương sau học từ dữ liệu đúng và tạo ra kết quả đáng tin cậy.
- Câu hỏi phản tư cuối mục: Nếu mô hình có độ chính xác cao nhưng không tạo lợi nhuận, bạn sẽ quay lại bước nào trong KDD? (Quay lại bước Đánh giá mẫu để xem lại thiết kế chỉ số kinh tế và chi phí sai phân loại).`);
