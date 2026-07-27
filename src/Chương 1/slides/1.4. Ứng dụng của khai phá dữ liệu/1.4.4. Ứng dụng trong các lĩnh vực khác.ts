import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 24 — SECTION
// ----------------------------------------------------
const slide24 = pptx.addSlide({ masterName: "SECTION" });
slide24.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide24.addText("1.4.4. ỨNG DỤNG TRONG CÁC LĨNH VỰC KHÁC & TỔNG KẾT", {
  placeholder: "title",
});
slide24.addText("Kỹ thuật khai phá có thể giống nhau giữa các lĩnh vực, nhưng tiêu chí đánh giá, mức độ rủi ro và yêu cầu đạo đức của quyết định lại rất khác nhau.", {
  placeholder: "content",
});
slide24.addText("Các lĩnh vực mở rộng:\nY tế & Bảo hiểm ➔ Viễn thông & An ninh mạng ➔ Sản xuất & Vận hành", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 25 — CONTENT: Bảo hiểm và Y tế
// ----------------------------------------------------
const slide25 = pptx.addSlide({ masterName: "CONTENT" });
slide25.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide25.addText("BẢO HIỂM VÀ Y TẾ", {
  placeholder: "title",
});

const optIntro25 = addText(slide25, "Bảo hiểm và y tế yêu cầu sự hỗ trợ của mô hình để phân loại mức độ ưu tiên, hồ sơ nghi ngờ và nhóm nguy cơ cao.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW25 = cmToInch(11.5);
const colH25 = cmToInch(3.2);
const colY25 = (optIntro25.y as number) + (optIntro25.h as number) + cmToInch(0.2);

// Left table: Applications
slide25.addTable([
  [
    { text: "Nghiệp vụ ứng dụng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu thu thập", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mô hình hỗ trợ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Bảo hiểm: Chống trục lợi" }, { text: "Trị giá bồi thường, loại sự kiện, lịch sử khách." }, { text: "Phát hiện bồi thường bất thường." }],
  [{ text: "Bảo hiểm: Định phí" }, { text: "Hành vi sử dụng, lịch sử va chạm lái xe." }, { text: "Phân cụm rủi ro khách hàng." }],
  [{ text: "Y tế: Tái nhập viện" }, { text: "Tiền sử bệnh án, đơn thuốc, lịch hẹn khám." }, { text: "Phân lớp xác suất nguy cơ." }],
  [{ text: "Y tế: Phân loại bệnh" }, { text: "Triệu chứng lâm sàng, chỉ số xét nghiệm." }, { text: "Phân cấp mức độ ưu tiên theo dõi." }]
], {
  x: cmToInch(0.8),
  y: colY25,
  w: colW25,
  h: colH25,
  fontSize: 8.8,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Asymmetric error costs
slide25.addTable([
  [
    { text: "Loại sai lầm", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    { text: "Hệ quả trong Bảo hiểm & Y tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Bỏ sót ca rủi ro (False Negative)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Trì hoãn điều trị gây nguy hiểm tính mạng; hoặc chi trả khống bồi thường lớn." }],
  [{ text: "Cảnh báo nhầm (False Positive)" }, { text: "Tăng chi phí kiểm tra lâm sàng; tạo ra sự phiền toái, lo lắng không đáng có cho khách." }]
], {
  x: cmToInch(13.1),
  y: colY25,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide25, "💡 Mô hình trong bảo hiểm & y tế chỉ đóng vai trò hỗ trợ, tuyệt đối không thay thế hoàn toàn phán đoán chuyên môn và trách nhiệm của bác sĩ hay chuyên viên.", {
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

slide25.addNotes("Nội dung bổ sung:\nLưu ý đạo đức: Chỉ thu thập dữ liệu hợp pháp. Kiểm tra thiên lệch để tránh bất bình đẳng sẵn có trong dữ liệu quá khứ. Đảm bảo khả năng giải thích và cơ chế cho phép con người rà soát khiếu nại.");

// ----------------------------------------------------
// Slide 26 — CONTENT: Viễn thông và mạng
// ----------------------------------------------------
const slide26 = pptx.addSlide({ masterName: "CONTENT" });
slide26.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide26.addText("VIỄN THÔNG VÀ AN NINH MẠNG", {
  placeholder: "title",
});

const optIntro26 = addText(slide26, "Dữ liệu dòng khối lượng lớn, phát sinh liên tục đòi hỏi các mô hình phát hiện rủi ro và bất thường phản hồi gần thời gian thực.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY26 = (optIntro26.y as number) + (optIntro26.h as number) + cmToInch(0.2);

// Left table: Applications
slide26.addTable([
  [
    { text: "Bài toán nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Kỹ thuật khai phá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động kích hoạt", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dự báo thuê bao rời mạng" }, { text: "Phân lớp (Classification)" }, { text: "Gửi voucher ưu đãi, chăm sóc riêng." }],
  [{ text: "Phát hiện SIM bất thường" }, { text: "Phát hiện bất thường (Anomaly)" }, { text: "Yêu cầu xác thực tài khoản." }],
  [{ text: "Nhận diện tấn công DDoS" }, { text: "Phân tích chuỗi hành vi mạng" }, { text: "Chặn IP, cách ly luồng dữ liệu." }],
  [{ text: "Trôi khái niệm (Concept drift)" }, { text: "Phân tích trôi dòng dữ liệu" }, { text: "Cập nhật và huấn luyện lại mô hình." }]
], {
  x: cmToInch(0.8),
  y: colY26,
  w: colW25,
  h: colH25,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Streaming
addText(slide26, "⚡ XỬ LÝ DỮ LIỆU DÒNG THỜI GIAN THỰC\n\n• Quy trình xử lý luồng:\n  ↳ Dòng dữ liệu gói tin/giao dịch liên tục ➔ Trích xuất đặc trưng theo cửa sổ thời gian (Time window) ➔ Mô hình chấm điểm bất thường gần thời gian thực ➔ Cảnh báo và kích hoạt chặn tự động.\n• Lưu ý:\n  ↳ Phân lớp dùng khi đã có nhãn quá khứ ổn định.\n  ↳ Phát hiện bất thường dùng khi xuất hiện các kiểu tấn công mạng mới chưa từng có nhãn.", {
  x: cmToInch(13.1),
  y: colY26,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide26, "💡 Phân lớp phù hợp khi đã có dữ liệu quá khứ được gắn nhãn; phát hiện bất thường hữu ích khi các dạng tấn công/gian lận mới chưa từng xuất hiện.", {
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

slide26.addNotes("Nội dung bổ sung:\nMô hình cần được theo dõi liên tục vì hành vi người dùng và chiến thuật tấn công liên tục thay đổi; một mô hình hiệu quả trong quá khứ không mặc nhiên hoạt động tốt ở hiện tại.");

// ----------------------------------------------------
// Slide 27 — CONTENT: Sản xuất logistics
// ----------------------------------------------------
const slide27 = pptx.addSlide({ masterName: "CONTENT" });
slide27.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide27.addText("SẢN XUẤT, LOGISTICS VÀ MÔI TRƯỜNG", {
  placeholder: "title",
});

const optIntro27 = addText(slide27, "Kết hợp dữ liệu cảm biến (IoT) và dữ liệu không gian - thời gian (Spatio-temporal) để tối ưu vận hành nguồn lực.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY27 = (optIntro27.y as number) + (optIntro27.h as number) + cmToInch(0.2);

// Left table: Applications
slide27.addTable([
  [
    { text: "Bài toán thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu khai thác", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Bảo trì dự báo" }, { text: "Nhiệt độ, độ rung, áp suất cảm biến, số giờ máy chạy." }, { text: "Lên lịch kiểm tra động cơ trước khi hỏng." }],
  [{ text: "Tối ưu tuyến giao hàng" }, { text: "Vị trí GPS, lưu lượng giao thông, thời tiết." }, { text: "Điều phối phân tuyến lộ trình xe chạy." }],
  [{ text: "Dự báo tải điện" }, { text: "Phụ tải quá khứ, nhiệt độ thời tiết, ngày lễ." }, { text: "Lập kế hoạch phát điện và điều hòa tải lưới." }],
  [{ text: "Cảnh báo môi trường" }, { text: "Mực nước, lượng mưa, địa hình số trạm quan trắc." }, { text: "Di tản sớm, huy động lực lượng ứng phó." }]
], {
  x: cmToInch(0.8),
  y: colY27,
  w: colW25,
  h: colH25,
  fontSize: 8.8,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: features
addText(slide27, "📦 ĐẶC TRƯNG DỮ LIỆU VẬN HÀNH\n\n• Dữ liệu cảm biến IoT:\n  ↳ Tần suất cao, nhiễu nặng, dễ gặp lỗi mất kết nối phần cứng ➔ Cần bước tiền xử lý lọc nhiễu tốt.\n• Dữ liệu không gian - thời gian (Spatio-temporal):\n  ↳ Chứa cả vị trí địa lý (tọa độ GPS) và mốc thời gian thực ➔ Cần thuật toán xử lý đa chiều.\n• Kết nối Dự báo ➔ Tối ưu:\n  ↳ Dự báo lỗi động cơ chỉ có giá trị thực sự khi được nối với kế hoạch bảo trì khả thi.", {
  x: cmToInch(13.1),
  y: colY27,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide27, "💡 Dự báo hỏng hóc hoặc tắc đường chỉ thực sự tạo ra giá trị kinh tế khi dẫn đến một kế hoạch hành động/bảo trì khả thi.", {
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

slide27.addNotes("Nội dung bổ sung:\nVí dụ: Cảm biến báo độ rung động cơ tăng trong nhiều giờ ➔ Mô hình không lập tức tắt máy, mà tăng điểm rủi ro, kiểm tra lịch sử bảo trì, đề xuất kiểm tra ở ca trực tiếp theo để tránh gián đoạn.");

// ----------------------------------------------------
// Slide 28 — CONTENT: Ghép bài toán
// ----------------------------------------------------
const slide28 = pptx.addSlide({ masterName: "CONTENT" });
slide28.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide28.addText("BÀI TẬP GHÉP CẶP: BÀI TOÁN & KỸ THUẬT", {
  placeholder: "title",
});

const optIntro28 = addText(slide28, "Hoạt động lớp (5 phút): Hãy ghép nối mỗi tình huống thực tế với kỹ thuật khai phá dữ liệu phù hợp nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY28 = (optIntro28.y as number) + (optIntro28.h as number) + cmToInch(0.2);

// Left table: Scenarios
slide28.addTable([
  [
    { text: "Thẻ tình huống thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Dự báo nhu cầu sử dụng điện ngày mai theo từng giờ." }],
  [{ text: "2. Phát hiện giao dịch thẻ tín dụng nghi ngờ bị giả mạo." }],
  [{ text: "3. Tìm nhóm khách hàng có chung đặc điểm hành vi mua sắm." }],
  [{ text: "4. Đề xuất sản phẩm mua kèm tiếp theo trong giỏ hàng." }],
  [{ text: "5. Nhận diện phản hồi bình luận 1 sao của khách hàng." }]
], {
  x: cmToInch(0.8),
  y: colY28,
  w: colW25,
  h: cmToInch(3.2),
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Answers
slide28.addTable([
  [
    { text: "Kỹ thuật ghép", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lý do lựa chọn phù hợp bài toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1 ➔ C. Hồi quy", options: { bold: true } }, { text: "Cần ước lượng một giá trị số liên tục trong tương lai." }],
  [{ text: "2 ➔ D. Bất thường", options: { bold: true } }, { text: "Phát hiện các quan sát lệch chuẩn so với đa số thông thường." }],
  [{ text: "3 ➔ A. Phân cụm", options: { bold: true } }, { text: "Tìm cấu trúc nhóm tương đồng khi chưa có nhãn trước." }],
  [{ text: "4 ➔ B. Hệ gợi ý", options: { bold: true } }, { text: "Tìm mối liên hệ đồng xuất hiện trong giỏ hoặc lọc cộng tác." }],
  [{ text: "5 ➔ E. Text Mining", options: { bold: true } }, { text: "Khai phá dữ liệu phi cấu trúc, nhận diện cảm xúc chủ đề." }]
], {
  x: cmToInch(13.1),
  y: colY28,
  w: colW25,
  h: cmToInch(3.2),
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide28, "💡 Lựa chọn kỹ thuật phụ thuộc vào mục tiêu nghiệp vụ, loại dữ liệu có sẵn, tính sẵn có của nhãn và chi phí sai lầm.", {
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

slide28.addNotes("Nội dung bổ sung:\nMột bài toán có thể áp dụng đồng thời nhiều kỹ thuật. Phân tích viên dữ liệu cần linh hoạt kết hợp để tạo ra giá trị thực tiễn tốt nhất.");

// ----------------------------------------------------
// Slide 29 — CONTENT: Bài tập thiết kế
// ----------------------------------------------------
const slide29 = pptx.addSlide({ masterName: "CONTENT" });
slide29.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide29.addText("BÀI TẬP NHÓM: THIẾT KẾ KẾ HOẠCH KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});

const optIntro29 = addText(slide29, "Yêu cầu: Mỗi nhóm chọn một lĩnh vực (bán lẻ, ngân hàng, bảo hiểm, TMĐT, viễn thông, logistics) và phác thảo ứng dụng KDD.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const colY29 = (optIntro29.y as number) + (optIntro29.h as number) + cmToInch(0.2);

// Left table: steps
slide29.addTable([
  [
    { text: "Phiếu thiết kế 8 bước", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi định hướng chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Vấn đề nghiệp vụ" }, { text: "Khó khăn hay chi phí lớn nằm ở quyết định nào?" }],
  [{ text: "2. Đối tượng phân tích" }, { text: "Mô hình áp dụng cho đối tượng nào (Khách hàng, giao dịch, thiết bị)?" }],
  [{ text: "3. Dữ liệu đầu vào" }, { text: "Cần thu thập các biến quan sát nào? Có nhãn sẵn không?" }],
  [{ text: "4. Nhiệm vụ khai phá" }, { text: "Phân lớp, phân cụm, hồi quy, luật kết hợp hay phát hiện bất thường?" }],
  [{ text: "5. Kết quả & Hành động" }, { text: "Hệ thống trả ra cái gì và con người sẽ hành động thế nào?" }]
], {
  x: cmToInch(0.8),
  y: colY29,
  w: colW25,
  h: colH25,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: example
slide29.addTable([
  [
    { text: "Thành phần thiết kế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Ví dụ minh họa: Logistics xe trễ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Vấn đề nghiệp vụ" }, { text: "Xe giao hàng thường xuyên bị trễ giờ ở các quận trung tâm." }],
  [{ text: "Dữ liệu thu thập" }, { text: "GPS hành trình, lịch sử giao nhận, thông tin giao thông, thời tiết." }],
  [{ text: "Nhiệm vụ & Đầu ra" }, { text: "Mô hình hồi quy ➔ Dự kiến thời gian trễ cho từng đơn hàng." }],
  [{ text: "Hành động thực tế" }, { text: "Chủ động điều phối phân chia lại tuyến hoặc báo sớm cho khách." }],
  [{ text: "Chỉ số đánh giá" }, { text: "Giảm tỷ lệ trễ hạn, giảm số khiếu nại của khách." }]
], {
  x: cmToInch(13.1),
  y: colY29,
  w: colW25,
  h: colH25,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide29, "💡 Tiêu chí chấm điểm: Nhóm phải bảo đảm chuỗi logic thông suốt: Vấn đề nghiệp vụ ➔ Dữ liệu ➔ Tri thức khai phá ➔ Hành động thực tế ➔ Giá trị thực tiễn.", {
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

slide29.addNotes("Nội dung bổ sung:\nHoạt động này giúp học viên rèn luyện tư duy hệ thống và cách kết nối kỹ thuật dữ liệu với bài toán thực tế của doanh nghiệp.");

// ----------------------------------------------------
// Slide 30 — CONTENT: Bàn tròn tổng hợp
// ----------------------------------------------------
const slide30 = pptx.addSlide({ masterName: "CONTENT" });
slide30.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide30.addText("BÀN TRÒN TỔNG HỢP: BÀI TOÁN, DỮ LIỆU & HÀNH ĐỘNG", {
  placeholder: "title",
});

const optIntro30 = addText(slide30, "Bảng tổng hợp cẩm nang tra cứu nhanh các bài toán nghiệp vụ phổ biến và kỹ thuật khai phá tương thích.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY30 = (optIntro30.y as number) + (optIntro30.h as number) + cmToInch(0.2);

// Left table: Rows 1-4
slide30.addTable([
  [
    { text: "Bài toán nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Kỹ thuật khai phá", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dự báo nhu cầu điện lưới" }, { text: "Dự báo chuỗi thời gian / Hồi quy" }],
  [{ text: "Thuê bao di động rời mạng" }, { text: "Phân lớp (Classification)" }],
  [{ text: "Tìm phân khúc khách VIP" }, { text: "Phân cụm (Clustering)" }],
  [{ text: "Gợi ý khóa học mua kèm" }, { text: "Hệ gợi ý / Luật kết hợp" }]
], {
  x: cmToInch(0.8),
  y: colY30,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Rows 5-7
slide30.addTable([
  [
    { text: "Bài toán nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Kỹ thuật khai phá", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Phát hiện gian lận thẻ" }, { text: "Phát hiện bất thường (Anomaly)" }],
  [{ text: "Phân tích bình luận chê" }, { text: "Phân tích cảm xúc văn bản" }],
  [{ text: "Bảo trì thiết bị nhà máy" }, { text: "Dự báo hỏng hóc từ dữ liệu IoT" }]
], {
  x: cmToInch(13.1),
  y: colY30,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide30, "💡 Trình tự tư duy đúng: Bắt đầu từ quyết định nghiệp vụ cần tối ưu và dạng đầu ra mong muốn, sau đó mới xác định nguồn dữ liệu và kỹ thuật phù hợp.", {
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

slide30.addNotes("Nội dung bổ sung:\nBảng này là cẩm nang tra cứu nhanh giúp định hình nhanh chóng hướng tiếp cận khi gặp bài toán mới.");

// ----------------------------------------------------
// Slide 31 — CONTENT: Nguyên tắc thực tế
// ----------------------------------------------------
const slide31 = pptx.addSlide({ masterName: "CONTENT" });
slide31.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide31.addText("CÁC NGUYÊN TẮC KHI ÁP DỤNG THỰC TẾ", {
  placeholder: "title",
});

const optIntro31 = addText(slide31, "Một mô hình có chỉ số kỹ thuật tốt trên giấy tờ chưa chắc đã giúp đưa ra quyết định tốt trên thực tế.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY31 = (optIntro31.y as number) + (optIntro31.h as number) + cmToInch(0.2);

// Left table: technical checklist
slide31.addTable([
  [
    { text: "Danh sách kiểm tra Kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "• Chất lượng dữ liệu: Có rác, nhiễu, thiếu hay sai lệch lớn?" }],
  [{ text: "• Tránh Data Leakage: Biến đầu vào có bị rò rỉ nhãn mục tiêu?" }],
  [{ text: "• Kiểm định chéo độc lập: Tránh mô hình học vẹt dữ liệu cũ." }],
  [{ text: "• Chi phí sai lầm bất đối xứng: Cân nhắc kỹ Precision / Recall." }]
], {
  x: cmToInch(0.8),
  y: colY31,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: operational checklist
slide31.addTable([
  [
    { text: "Danh sách kiểm tra Vận hành & Đạo đức", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "• Khả năng hành động: Ai nhận kết quả? Có đủ nguồn lực thực thi?" }],
  [{ text: "• Quyền riêng tư: Dữ liệu thu thập và lưu trữ có hợp pháp?" }],
  [{ text: "• Công bằng & Đạo đức: Mô hình có tạo thiên lệch bất lợi?" }],
  [{ text: "• Giám sát của con người: Duy trì rà soát cho ca có tác động lớn." }]
], {
  x: cmToInch(13.1),
  y: colY31,
  w: colW25,
  h: colH25,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide31, "💡 Mô hình chỉ là công cụ hỗ trợ quyết định; con người bắt buộc phải giữ vai trò giám sát tối cao đối với các trường hợp có ảnh hưởng lớn.", {
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

slide31.addNotes("Nội dung bổ sung:\nKhông chỉ xem accuracy khi sự kiện quan trọng hiếm hoặc chi phí hai loại sai lầm khác nhau. Theo dõi hiệu năng sau triển khai, vì dữ liệu và hành vi thực tế luôn có thể thay đổi theo thời gian.");

// ----------------------------------------------------
// Slide 32 — CONTENT: Tổng kết mục 1.4
// ----------------------------------------------------
const slide32 = pptx.addSlide({ masterName: "CONTENT" });
slide32.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide32.addText("TỔNG TÁC CHƯƠNG 1 & MỤC 1.4", {
  placeholder: "title",
});

const optIntro32 = addText(slide32, "Khai phá dữ liệu là cầu nối chuyển đổi dữ liệu thô thành tri thức hỗ trợ hành động có giá trị kinh tế và xã hội.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY32 = (optIntro32.y as number) + (optIntro32.h as number) + cmToInch(0.2);

// Left table: goals
slide32.addTable([
  [
    { text: "Nhiệm vụ / Mục tiêu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đầu ra hành động tương ứng hỗ trợ quyết định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dự báo (Forecasting)" }, { text: "Giá trị số liên tục tương lai (doanh số, tải điện)." }],
  [{ text: "Phân loại (Classification)" }, { text: "Nhãn rủi ro hoặc xác suất quá hạn/rời mạng." }],
  [{ text: "Phân cụm (Clustering)" }, { text: "Danh sách phân nhóm tương đồng (VIP, giá rẻ)." }],
  [{ text: "Bất thường (Anomaly)" }, { text: "Cảnh báo và kiểm tra giao dịch gian lận/mạng." }]
], {
  x: cmToInch(0.8),
  y: colY32,
  w: colW25,
  h: colH25,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Flow
addText(slide32, "🔄 CHUỖI TƯ DUY XUYÊN SUỐT\n\nVấn đề nghiệp vụ thực tế cần giải quyết\n          ↓\nQuyết định quản trị cần được hỗ trợ tốt hơn\n          ↓\nDữ liệu có thể thu thập và tích hợp sạch\n          ↓\nNhiệm vụ khai phá dữ liệu phù hợp tương ứng\n          ↓\nĐầu ra hữu ích và hành động thực tiễn khả thi\n          ↓\nĐánh giá hiệu quả kinh tế và đạo đức", {
  x: cmToInch(13.1),
  y: colY32,
  w: colW25,
  h: colH25,
  fontSize: 9,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide32, "💡 Khung tư duy này là nền tảng cốt lõi giúp chuyển đổi từ việc hiểu lý thuyết kỹ thuật thuật toán đơn thuần sang áp dụng thực tế thành công.", {
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

slide32.addNotes("Nội dung bổ sung:\nHọc viên đã hoàn tất toàn bộ Chương 1 về các khái niệm cơ bản, quy trình KDD, thách thức chất lượng và quyền riêng tư, và các ứng dụng điển hình.");
