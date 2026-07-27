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
slide1.addText("1.2.7. QUYỀN RIÊNG TƯ, BẢO MẬT VÀ ĐẠO ĐỨC", {
  placeholder: "title",
});
slide1.addText("Không phải mọi dữ liệu có thể thu thập đều nên được sử dụng. Không phải mọi dự báo chính xác đều nên được tự động hóa thành quyết định.", {
  placeholder: "content",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("KHAI PHÁ DỮ LIỆU CÓ TRÁCH NHIỆM", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Rủi ro không chỉ nằm ở việc mô hình dự báo sai mà còn ở việc dữ liệu bị truy cập trái phép, suy luận sai lệch hoặc lạm dụng ngoài mục đích ban đầu.", {
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

// Left table: Risks
slide2.addTable([
  [
    { text: "Rủi ro chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hậu quả nghiệp vụ có thể xảy ra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Lộ / Rò rỉ dữ liệu", options: { bold: true } }, { text: "Chia sẻ trái phép, vi phạm pháp luật, mất uy tín lớn." }],
  [{ text: "Tái nhận diện ẩn danh", options: { bold: true } }, { text: "Phá vỡ ẩn danh bằng cách ghép nối với nguồn dữ liệu ngoài." }],
  [{ text: "Thiên lệch quyết định", options: { bold: true } }, { text: "Tạo bất lợi có hệ thống cho một nhóm (giới tính, địa bàn)." }],
  [{ text: "Tự động hóa quá mức", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Quyết định sai lệch của mô hình bị nhân rộng quy mô lớn." }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Principles
addText(slide2, "🛡️ NGUYÊN TẮC THỰC HÀNH CÓ TRÁCH NHIỆM\n\n• Xác định mục đích rõ ràng: Chỉ khai thác dữ liệu phục vụ bài toán cụ thể.\n• Tối thiểu hóa dữ liệu: Chỉ thu thập các biến thực sự cần thiết.\n• Giảm khả năng định danh: Ẩn, làm mờ, tổng hợp dữ liệu cá nhân.\n• Kiểm tra thiên lệch: Đánh giá sai số quyết định trên các nhóm khách hàng khác nhau.\n• Duy trì giám sát của con người: Rà soát thủ công đối với các quyết định phê duyệt có ảnh hưởng lớn.", {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide2, "💡 Khai phá dữ liệu có trách nhiệm không phải là bước kiểm tra sau cùng; đó là yêu cầu thiết kế xuyên suốt từ lúc xác định bài toán đến khi vận hành mô hình.", {
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

slide2.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu ngày càng hiện diện trong mua sắm, tìm kiếm thông tin, dịch vụ trực tuyến và quản trị doanh nghiệp; các quan ngại về quyền riêng tư đặc biệt phát sinh khi hệ thống khai phá có thể truy cập dữ liệu định danh như hồ sơ tài chính, giao dịch thẻ, hồ sơ y tế, thông tin sinh trắc học hoặc dữ liệu vị trí.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("QUYỀN RIÊNG TƯ KHÁC BIỆT BẢO MẬT", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Bảo mật ngăn chặn truy cập trái phép; quyền riêng tư tập trung vào sự đồng ý, lựa chọn và kiểm soát thông tin của khách hàng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: Privacy vs Security
slide3.addTable([
  [
    { text: "Khía cạnh quản trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi trọng tâm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Quyền riêng tư", options: { bold: true } }, { text: "Có nên thu thập và dùng dữ liệu cho mục đích định phí không?" }],
  [{ text: "Bảo mật", options: { bold: true } }, { text: "Dữ liệu được bảo vệ khỏi bị hack, rò rỉ như thế nào?" }],
  [{ text: "Quản trị dữ liệu", options: { bold: true } }, { text: "Ai chịu trách nhiệm phê duyệt danh mục biến sử dụng?" }],
  [{ text: "Đạo đức phân tích", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Việc sử dụng mô hình có công bằng và minh bạch không?" }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Protection measures
slide3.addTable([
  [
    { text: "Biện pháp bảo vệ", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Mục tiêu & Lưu ý", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Phân quyền vai trò", options: { bold: true } }, { text: "Chỉ người có nhiệm vụ mới xem được dữ liệu nhạy cảm." }],
  [{ text: "Giả danh hóa (Pseudonymization)", options: { bold: true } }, { text: "Thay thế định danh trực tiếp (tên) bằng mã thay thế." }],
  [{ text: "Ẩn danh / Khái quát hóa", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Làm giảm độ chi tiết dữ liệu (đánh đổi độ chính xác)." }],
  [{ text: "Nhật ký truy vết (Audit logs)", options: { bold: true } }, { text: "Ghi vết rõ ràng ai truy cập, khi nào và làm gì." }]
], {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide3, "💡 Một hệ thống an toàn kỹ thuật chưa chắc đã tôn trọng quyền riêng tư khách hàng; hệ thống khai phá có trách nhiệm bắt buộc phải đạt cả hai.", {
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

slide3.addNotes("Nội dung bổ sung:\nViệc loại bỏ tên hoặc mã định danh trực tiếp có thể giảm rủi ro, nhưng không luôn đủ để bảo đảm ẩn danh vì các thuộc tính còn lại có thể được kết hợp để suy luận lại danh tính cá nhân. Các kỹ thuật bảo vệ riêng tư thường làm giảm độ chi tiết thông tin; đây là đánh đổi tự nhiên giữa khả năng khai thác dữ liệu và mức độ bảo vệ cá nhân.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("VÍ DỤ 1: BẢO HIỂM DỰA TRÊN HÀNH VI LÁI XE", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Doanh nghiệp bảo hiểm sử dụng dữ liệu cảm biến hành vi lái xe kết nối (tốc độ, phanh gấp, vị trí) để cá nhân hóa mức phí định giá.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left: Benefits
addText(slide4, "📈 LỢI ÍCH TIỀM NĂNG\n\n• Định phí chính xác hơn: Dựa trên rủi ro thực tế thay vì tuổi tác hay giới tính chung chung.\n• Khuyến khích an toàn: Giảm phí bảo hiểm cho người lái xe cẩn thận.\n• Tối ưu vận hành: Phát hiện rủi ro và gian lận bồi thường nhanh hơn.", {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right table: Governance questions
slide4.addTable([
  [
    { text: "Câu hỏi quản trị dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa kiểm soát thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dữ liệu nào thực sự cần?" }, { text: "Không thu thập thừa dữ liệu định vị nhạy cảm nếu không dùng." }],
  [{ text: "Mục đích sử dụng là gì?" }, { text: "Chỉ dùng định phí, cấm chia sẻ cho đối tác tiếp thị." }],
  [{ text: "Khách đồng ý rõ ràng không?" }, { text: "Cơ chế đồng ý tường minh (opt-in), không dùng ô chọn mập mờ." }],
  [{ text: "Quy trình khiếu nại?" }, { text: "Cho phép khách hàng khiếu nại điểm đánh giá lái xe xấu." }]
], {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide4, "💡 Khả năng thu thập dữ liệu hành vi bằng thiết bị công nghệ hoàn toàn không tự động tạo ra quyền sử dụng dữ liệu đó cho mọi mục đích thương mại khác.", {
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

slide4.addNotes("Nội dung bổ sung:\nSự phát triển của cảm biến và hệ sinh thái kết nối tạo ra nhiều dữ liệu hơn về cách con người và phương tiện được sử dụng, từ đó thúc đẩy các ứng dụng phân tích và định giá dựa trên hành vi.\nTình huống thảo luận: Khách đồng ý chia sẻ định vị để giảm phí bảo hiểm. Sáu tháng sau, doanh nghiệp dùng định vị để đẩy quảng cáo từ đối tác. Đây là vi phạm mục đích sử dụng ban đầu trừ khi được khách chấp thuận rõ ràng.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 2: TUYỂN DỤNG TỰ ĐỘNG VÀ THIÊN LỆCH MÔ HÌNH", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Mô hình lọc hồ sơ học từ dữ liệu quá khứ có rủi ro lặp lại và khuếch đại các định kiến phân biệt đối xử cũ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left: Bias mechanism
addText(slide5, "🔄 CƠ CHẾ KHUẾCH ĐẠI ĐỊNH KIẾN\n\n• Đầu vào: Dữ liệu tuyển dụng lịch sử phản ánh định kiến của con người (ví dụ: tuyển rất ít ứng viên nữ vào nhóm kỹ thuật).\n• Học máy: Mô hình suy diễn rằng giới tính hoặc các từ khóa liên quan đến giới tính là dấu hiệu của ứng viên không phù hợp.\n• Quyết định: Tự động loại bỏ ứng viên nữ tiềm năng ở quy mô lớn.", {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right table: Warning signals
slide5.addTable([
  [
    { text: "Dấu hiệu thiên lệch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi kiểm tra mô hình", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Tỷ lệ đỗ chênh lệch lớn" }, { text: "Mô hình có loại một nhóm nhiều hơn đáng kể dù năng lực tương đương không?" }],
  [{ text: "Sai số không đồng đều" }, { text: "Độ chính xác dự đoán có tệ hơn trên một nhóm cụ thể không?" }],
  [{ text: "Biến đại diện (Proxy)" }, { text: "Có biến địa chỉ, trường học đang gián tiếp phản ánh thuộc tính nhạy cảm?" }],
  [{ text: "Thiếu sự rà soát" }, { text: "Ứng viên có được con người đánh giá lại trước khi loại bỏ không?" }]
], {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide5, "💡 Việc loại bỏ một biến nhạy cảm trực tiếp không tự động loại bỏ phân biệt đối xử; cần kiểm tra kết quả thực tế mô hình tạo ra cho các nhóm khác nhau.", {
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

slide5.addNotes("Nội dung bổ sung:\nCơ chế kiểm tra cần thiết: Phân định rõ quyết định nào mô hình chỉ hỗ trợ, và quyết định nào bắt buộc có phê duyệt của con người. Đánh giá hiệu năng theo từng nhóm, rà soát biến đại diện, lưu vết phiên bản, thiết lập cơ chế khiếu nại và đánh giá lại định kỳ khi hiệu năng suy giảm hoặc bối cảnh thay đổi.");

// ----------------------------------------------------
// Slide 6 — CONTENT (Hoạt động)
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("HOẠT ĐỘNG: BAN QUẢN TRỊ DỮ LIỆU FINTECH", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "👥 Làm việc nhóm (12 phút): Đóng vai Ban quản trị dữ liệu Fintech phê duyệt danh mục biến cho mô hình chấm điểm tín dụng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

// Proposed variables table
slide6.addTable([
  [
    { text: "Nguồn dữ liệu đề xuất sử dụng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mục tiêu / Ý nghĩa sử dụng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Quyết định của nhóm", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Thu nhập và lịch sử thanh toán nợ" }, { text: "Đo lường năng lực tài chính cốt lõi" }, { text: "Được dùng | Có điều kiện | Cấm", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "2. Lịch sử di chuyển chi tiết theo GPS" }, { text: "Phát hiện thói quen di chuyển, địa bàn sống" }, { text: "Được dùng | Có điều kiện | Cấm", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "3. Tốc độ điền biểu mẫu ứng dụng" }, { text: "Đo lường sự kiên nhẫn, hành vi điền" }, { text: "Được dùng | Có điều kiện | Cấm", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }],
  [{ text: "4. Danh bạ điện thoại & Nội dung SMS" }, { text: "Phân tích mạng kết nối và thông báo nợ" }, { text: "Được dùng | Có điều kiện | Cấm", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }]
], {
  x: cmToInch(0.8),
  y: tableY6,
  w: cmToInch(12.5),
  h: cmToInch(3.2),
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Requirements on the right
addText(slide6, "📝 ĐẦU RA BẢN GHI NHỚ QUẢN TRỊ DỰ ÁN:\n\n1. Danh mục biến: Xác định rõ biến nào Được dùng, Có điều kiện (kèm điều kiện xử lý), hoặc Không được dùng.\n2. Biện pháp bảo vệ: Phân quyền, mã hóa, thời hạn lưu trữ, cơ chế xóa định danh.\n3. Chỉ số giám sát: Tỷ lệ phê duyệt và chênh lệch sai số giữa các nhóm khách hàng.\n4. Quyết định nào bắt buộc có con người phê duyệt.", {
  x: cmToInch(14.0),
  y: tableY6,
  w: cmToInch(10.6),
  h: cmToInch(3.2),
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide6, "💬 Đánh giá dựa trên 3 tiêu chí cốt lõi: Tính cần thiết phục vụ bài toán; Tính tương xứng với mức độ xâm phạm riêng tư; Nguy cơ tạo thiên lệch phân biệt đối xử.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide6.addNotes("Ghi chú giảng viên:\nCho học viên làm thảo luận nhóm lập bản ghi nhớ trong 12 phút trước khi công bố định hướng giải đáp.");

// ----------------------------------------------------
// Slide 6b — CONTENT (Đáp án)
// ----------------------------------------------------
const slide6b = pptx.addSlide({ masterName: "CONTENT" });
slide6b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6b.addText("ĐỊNH HƯỚNG QUẢN TRỊ DỮ LIỆU FINTECH", {
  placeholder: "title",
});

const optIntro6b = addText(slide6b, "✅ Khung hướng dẫn thẩm định và ra quyết định quản trị dữ liệu cho mô hình chấm điểm tín dụng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY6b = (optIntro6b.y as number) + (optIntro6b.h as number) + cmToInch(0.2);

slide6b.addTable([
  [
    { text: "Nguồn dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Quyết định đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lập luận lý giải quản trị dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thu nhập & lịch sử trả nợ" }, { text: "Được dùng", options: { bold: true, color: DUE_COLORS.green } }, { text: "Liên quan trực tiếp, có căn cứ vững chắc, ít rủi ro thiên lệch ngoài tài chính." }],
  [{ text: "Tốc độ điền biểu mẫu, giờ đăng nhập" }, { text: "Dùng có điều kiện", options: { bold: true, color: DUE_COLORS.green } }, { text: "Cần kiểm tra xem có tạo biến đại diện kỳ thị người khuyết tật hoặc nhóm ngành nghề ca đêm không." }],
  [{ text: "GPS di chuyển chi tiết, danh bạ, SMS" }, { text: "Không được dùng", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Xâm phạm riêng tư quá mức, vi phạm nguyên tắc tương xứng; dễ rò rỉ và bị pháp luật cấm." }]
], {
  x: cmToInch(0.8),
  y: tableY6b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6b, "💡 Nguyên tắc then chốt: Dữ liệu lịch sử giao dịch trực tiếp có giá trị cao và ít xâm phạm hơn dữ liệu hành vi gián tiếp. Luôn đặt quyền lợi khách hàng và tính tuân thủ lên hàng đầu.", {
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

slide6b.addNotes(`Ghi chú giảng viên:
- Lịch sử giao dịch liên quan trực tiếp hơn với rủi ro tín dụng nhưng vẫn cần kiểm soát tính hợp pháp.
- Dữ liệu vị trí chi tiết, danh bạ, nội dung tin nhắn có mức độ xâm phạm riêng tư cao, dễ tạo biến đại diện cho đặc điểm nhạy cảm, cần cấm hoặc kiểm soát cực kỳ ngặt nghèo.`);

// ----------------------------------------------------
// Slide 7 — CONTENT (Tổng kết)
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("TỔNG KẾT MỤC 1.2: CÁC THÁCH THỨC CHÍNH", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "Khung câu hỏi chẩn đoán sức khỏe cho mọi dự án khai phá dữ liệu thực tế.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7 = (optIntro7.y as number) + (optIntro7.h as number) + cmToInch(0.2);

slide7.addTable([
  [
    { text: "Thách thức", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi chẩn đoán sức khỏe dự án", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Quy mô & Tốc độ" }, { text: "Hạ tầng có mở rộng được khi dữ liệu thật lớn và đến theo luồng không?" }],
  [{ text: "Chất lượng dữ liệu" }, { text: "Dữ liệu có sạch, đầy đủ, nhất quán trước khi đưa vào mô hình không?" }],
  [{ text: "Tính hữu ích của mẫu" }, { text: "Kết quả phát hiện được có mới, giải thích được và giúp tạo ra lợi ích ròng không?" }],
  [{ text: "Quyền riêng tư & Đạo đức", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Sử dụng dữ liệu có hợp pháp, đúng mục đích, công bằng và có sự giám sát của con người không?" }]
], {
  x: cmToInch(0.8),
  y: tableY7,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7, "💡 Dự án khai phá dữ liệu thành công không chỉ là dự án tạo ra mô hình có độ chính xác cao nhất; đó phải là dự án tạo ra quyết định tốt, bền vững và có trách nhiệm với xã hội.", {
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

slide7.addNotes(`Nội dung bổ sung:
Các vấn đề trọng tâm của khai phá dữ liệu bao gồm phương pháp khai phá, tương tác người dùng, hiệu quả và khả năng mở rộng, sự đa dạng kiểu dữ liệu, cùng các tác động xã hội như quyền riêng tư và an ninh dữ liệu.
Câu hỏi phản tư cuối mục: Một mô hình có accuracy cao, triển khai nhanh và giúp tăng lợi nhuận ngắn hạn. Nếu mô hình sử dụng dữ liệu khách hàng vượt quá kỳ vọng hợp lý của họ hoặc tạo bất lợi có hệ thống cho một nhóm, doanh nghiệp có nên triển khai không? Hãy bảo vệ quan điểm bằng các tiêu chí từ Mục 1.2.`);
