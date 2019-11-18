import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 5 — SECTION
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "SECTION" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("1.3.1. CHUẨN BỊ DỮ LIỆU CHO KDD", {
  placeholder: "title",
});
slide5.addText("Mô hình không thể tự động sửa đổi hoặc bù đắp những lỗi sai và vấn đề vốn có trong nguồn dữ liệu đầu vào. Chuẩn bị dữ liệu là bước bắt buộc để có mô hình đáng tin cậy.", {
  placeholder: "content",
});
slide5.addText("Bốn bước chuẩn bị dữ liệu cốt lõi:\nLàm sạch ➔ Tích hợp ➔ Lựa chọn ➔ Biến đổi", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 6 — CONTENT: Làm sạch dữ liệu
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("BƯỚC 1: LÀM SẠCH DỮ LIỆU (DATA CLEANING)", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "Làm sạch dữ liệu là nhận diện và xử lý các lỗi dữ liệu thiếu, nhiễu, sai lệch, trùng lặp hoặc không nhất quán.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW6 = cmToInch(11.5);
const colH6 = cmToInch(3.2);
const colY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

// Left table: Cleaning problems
slide6.addTable([
  [
    { text: "Vấn đề dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dấu hiệu thường gặp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hướng xử lý đề xuất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thiếu dữ liệu" }, { text: "Trống thông tin thu nhập, tuổi" }, { text: "Ước lượng, điền giá trị mặc định hoặc loại bỏ." }],
  [{ text: "Nhiễu / Sai lệch" }, { text: "Tuổi âm (-5), doanh thu quá lớn" }, { text: "Kiểm tra quy tắc nghiệp vụ, gán cờ rà soát." }],
  [{ text: "Sai định dạng" }, { text: "Đầu vào ghi Nam, M, male" }, { text: "Chuẩn hóa về một danh mục quy ước chung." }],
  [{ text: "Trùng lặp" }, { text: "Một khách hàng có nhiều thẻ" }, { text: "Dò trùng và gộp bản ghi sau khi xác minh." }]
], {
  x: cmToInch(0.8),
  y: colY6,
  w: colW6,
  h: colH6,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Principles
addText(slide6, "🛡️ NGUYÊN TẮC QUYẾT ĐỊNH KHI LÀM SẠCH\n\n• Không mặc định xóa bỏ mọi giá trị bất thường.\n• Phân biệt rõ lỗi dữ liệu vật lý với các sự kiện hiếm nhưng có ý nghĩa (ví dụ: giao dịch thẻ giá trị cực cao lúc 3h sáng có thể là gian lận thực sự chứ không phải lỗi).\n• Luôn lưu vết (audit log) mọi quy tắc làm sạch để có khả năng tái lập và kiểm thử sau này.\n• Rà soát tính hợp pháp và quyền riêng tư trước khi phân tích.", {
  x: cmToInch(13.1),
  y: colY6,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide6, "💡 Garbage in, garbage out: Nguồn dữ liệu đầu vào không đáng tin cậy chắc chắn sẽ tạo ra các mô hình và quyết định không đáng tin cậy.", {
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

slide6.addNotes("Nội dung bổ sung:\nLàm sạch dữ liệu là quá trình nhận diện và xử lý dữ liệu thiếu, nhiễu, sai lệch, trùng lặp hoặc không nhất quán. Mục tiêu không phải là làm dữ liệu “đẹp” về hình thức, mà là bảo đảm dữ liệu phản ánh đúng nhất có thể đối tượng và hiện tượng cần phân tích.");

// ----------------------------------------------------
// Slide 7 — CONTENT: Ví dụ làm sạch dữ liệu khách hàng
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("VÍ DỤ THỰC TẾ: LÀM SẠCH DỮ LIỆU KHÁCH HÀNG", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "👥 Hoạt động (5 phút): Hãy phân tích bảng dữ liệu trùng lặp dưới đây và đề xuất hướng xử lý cho từng trường hợp.", {
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
    { text: "Mã HS", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Họ tên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Địa chỉ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tuổi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mã thành viên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Vấn đề nghi ngờ", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "KH01" }, { text: "Nguyễn An" }, { text: "Q.1, TP.HCM" }, { text: "32" }, { text: "TV-0082" }, { text: "Hồ sơ chuẩn dùng tham chiếu" }],
  [{ text: "KH02" }, { text: "N. An" }, { text: "Quận 1, HCM" }, { text: "32" }, { text: "Trống" }, { text: "Có thể trùng với hồ sơ KH01?" }],
  [{ text: "KH03" }, { text: "Nguyễn An" }, { text: "Q1" }, { text: "0" }, { text: "TV-0082" }, { text: "Tuổi không hợp lệ; mã thành viên giống KH01" }],
  [{ text: "KH04" }, { text: "Nguyễn Ánh" }, { text: "Quận 1" }, { text: "32" }, { text: "TV-0082" }, { text: "Sai chính tả tên hay nhầm người?" }]
], {
  x: cmToInch(0.8),
  y: tableY7,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7, "💬 Thảo luận gộp hồ sơ: Chỉ dựa vào tên Nguyễn An có nên gộp không? Không! Cần đối chiếu thêm số điện thoại, email, lịch sử mua hàng để tính toán độ tin cậy trước khi quyết định gộp chính thức.", {
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

slide7.addNotes(`Ghi chú giảng viên:
- Q.1, Q1, Quận 1 ➔ Chuẩn hóa về một quy chuẩn duy nhất.
- Tuổi = 0 ➔ Đánh dấu kiểm tra đối chiếu nguồn gốc, không tự ý gán bừa.
- Nguyễn An và Nguyễn Ánh ➔ Tránh gộp tự động, rất có thể là 2 thực thể khách hàng khác nhau.
- Mục tiêu: Giúp học viên hiểu làm sạch dữ liệu là chuỗi quyết định có căn cứ.`);

// ----------------------------------------------------
// Slide 8 — CONTENT: Tích hợp dữ liệu
// ----------------------------------------------------
const slide8 = pptx.addSlide({ masterName: "CONTENT" });
slide8.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide8.addText("BƯỚC 2: TÍCH HỢP DỮ LIỆU (DATA INTEGRATION)", {
  placeholder: "title",
});

const optIntro8 = addText(slide8, "Tích hợp dữ liệu là kết hợp thông tin từ nhiều nguồn rời rạc (POS, CRM, App, Web, Tổng đài) về một bộ dữ liệu thống nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY8 = (optIntro8.y as number) + (optIntro8.h as number) + cmToInch(0.2);

// Left table: integration issues
slide8.addTable([
  [
    { text: "Thách thức tích hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giải pháp xử lý đề xuất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Khác mã định danh" }, { text: "App dùng SĐT, Web dùng email" }, { text: "Xây dựng bảng liên kết khóa (Mapping table)." }],
  [{ text: "Trùng thực thể" }, { text: "KH001 CRM và Email trên web" }, { text: "Áp dụng thuật toán đối sánh thực thể." }],
  [{ text: "Xung đột dữ liệu", options: { bold: true, color: DUE_COLORS.orange } }, { text: "CRM ghi ở HN, App ghi ở TP.HCM" }, { text: "Ưu tiên nguồn có thời điểm cập nhật mới nhất." }],
  [{ text: "Lệch chu kỳ cập nhật" }, { text: "CRM chạy tuần, App chạy real-time" }, { text: "Đồng bộ thời gian theo phiên bản dữ liệu." }]
], {
  x: cmToInch(0.8),
  y: colY8,
  w: colW6,
  h: colH6,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Governance
addText(slide8, "⚠️ QUẢN TRỊ BẢO MẬT KHI TÍCH HỢP\n\n• Việc liên kết dữ liệu từ nhiều nguồn giúp hiểu sâu khách hàng nhưng làm tăng khả năng nhận diện cá nhân (phá vỡ ẩn danh).\n• Cần tuân thủ chặt chẽ nguyên tắc phân quyền vai trò (Role-based access).\n• Luôn lưu vết nguồn gốc dữ liệu (data lineage) và các quy tắc ghép nối để phục vụ mục đích kiểm toán và rà soát kỹ thuật khi xảy ra sự cố dữ liệu.", {
  x: cmToInch(13.1),
  y: colY8,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide8, "💡 Tích hợp dữ liệu không đơn thuần chỉ là câu lệnh nối bảng (JOIN); đó là quá trình định danh thực thể “ai là ai” và giải quyết các xung đột thông tin.", {
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

slide8.addNotes("Nội dung bổ sung:\nTích hợp dữ liệu (data integration) là quá trình kết hợp dữ liệu từ nhiều hệ thống hoặc nguồn khác nhau thành một tập dữ liệu thống nhất phục vụ phân tích. Các nguồn thường gặp gồm hệ thống bán hàng/POS, CRM, website, ứng dụng di động, tổng đài chăm sóc khách hàng, khảo sát và kho dữ liệu doanh nghiệp.");

// ----------------------------------------------------
// Slide 9 — CONTENT: Ví dụ Khách hàng 360 độ
// ----------------------------------------------------
const slide9 = pptx.addSlide({ masterName: "CONTENT" });
slide9.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide9.addText("VÍ DỤ THỰC TẾ: HỒ SƠ KHÁCH HÀNG 360 ĐỘ", {
  placeholder: "title",
});

const optIntro9 = addText(slide9, "Nếu không tích hợp các dấu vết dữ liệu dưới đây của khách hàng Minh Anh, siêu thị sẽ bỏ lỡ toàn bộ tín hiệu rời bỏ quan trọng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY9 = (optIntro9.y as number) + (optIntro9.h as number) + cmToInch(0.2);

// Left table: Multi-source tracks
slide9.addTable([
  [
    { text: "Nguồn dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Định danh ghi nhận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu quan sát được", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Cửa hàng / POS" }, { text: "Mã TV-0082" }, { text: "Chi tiêu 4.2 triệu (12 hóa đơn)" }],
  [{ text: "Ứng dụng di động" }, { text: "Số điện thoại 090x..." }, { text: "Mở app 18 lần, nhận 4 voucher" }],
  [{ text: "Website thương mại" }, { text: "Email minhanh@..." }, { text: "3 đơn hàng, 1 giỏ hàng bị bỏ quên" }],
  [{ text: "Tổng đài CSKH" }, { text: "Số điện thoại 090x..." }, { text: "2 khiếu nại giao hàng trễ" }]
], {
  x: cmToInch(0.8),
  y: colY9,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Analysis of risks
addText(slide9, "🔍 PHÂN TÍCH TÍN HIỆU GỘP 360 ĐỘ\n\n• Ghép nối thành công cho thấy:\n  ↳ Khách hàng từng chi tiêu cao (POS)\n  ↳ Đang có khiếu nại chưa xử lý xong (Tổng đài)\n  ↳ Đã bỏ quên giỏ hàng trên web và đang mở app liên tục.\n➔ Đây là tín hiệu cảnh báo rời bỏ cực mạnh!\n\n⚠️ Rủi ro ghép nhầm:\n• Ghép thiếu: Đánh giá thấp giá trị khách hàng.\n• Ghép sai: Gửi sai voucher ưu đãi gây lộ dữ liệu cá nhân.", {
  x: cmToInch(13.1),
  y: colY9,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide9, "💡 Hồ sơ khách hàng 360 độ chỉ thực sự mang lại giá trị nghiệp vụ khi nó vừa đảm bảo tính đầy đủ, vừa tuyệt đối không xảy ra tình trạng ghép nhầm người.", {
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

slide9.addNotes("Nội dung bổ sung:\nKhách hàng có mã KH001 trong hệ thống bán hàng, số điện thoại 090x... trong ứng dụng và email trong website có thể là cùng một người. Nếu hệ thống không liên kết ba dấu vết này, doanh nghiệp không thể đo đúng tổng chi tiêu, tần suất tương tác và nguy cơ rời bỏ của khách.");

// ----------------------------------------------------
// Slide 10 — CONTENT: Lựa chọn & Biến đổi dữ liệu
// ----------------------------------------------------
const slide10 = pptx.addSlide({ masterName: "CONTENT" });
slide10.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide10.addText("BƯỚC 3 & 4: LỰA CHỌN VÀ BIẾN ĐỔI DỮ LIỆU", {
  placeholder: "title",
});

const optIntro10 = addText(slide10, "Lựa chọn dữ liệu trả lời câu hỏi dùng dữ liệu nào; Biến đổi dữ liệu trả lời câu hỏi biểu diễn dữ liệu thế nào cho mô hình học tốt nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY10 = (optIntro10.y as number) + (optIntro10.h as number) + cmToInch(0.2);

// Left table: Selection & Transformation activities
slide10.addTable([
  [
    { text: "Hoạt động cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể trong dự báo rời bỏ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Lựa chọn đối tượng" }, { text: "Chỉ chọn khách phát sinh giao dịch trong 12 tháng qua." }],
  [{ text: "Lựa chọn biến" }, { text: "Chọn tần suất mua, loại bỏ màu nền giao diện ứng dụng." }],
  [{ text: "Chuẩn hóa thang đo", options: { bold: true } }, { text: "Đưa tuổi và chi tiêu về cùng thang so sánh được." }],
  [{ text: "Tạo thuộc tính mới", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Tính toán xu hướng chi tiêu trong 3 tháng gần nhất." }]
], {
  x: cmToInch(0.8),
  y: colY10,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Data Leakage
addText(slide10, "⚠️ CẢNH BÁO NGUY CƠ RÒ RỈ THÔNG TIN (DATA LEAKAGE)\n\n• Định nghĩa: Rò rỉ thông tin xảy ra khi biến đầu vào chứa thông tin của tương lai (chỉ có được sau thời điểm cần đưa ra dự báo).\n• Ví dụ khi dự báo khách rời bỏ trong 30 ngày tới:\n  ↳ Ngày mua gần nhất: Hợp lệ (biết được trước thời điểm dự báo).\n  ↳ Tổng số ngày không mua sau 30 ngày: Vi phạm (chứa tương lai).\n  ↳ Trạng thái đã rời bỏ thực tế: Vi phạm (chính là nhãn mục tiêu).", {
  x: cmToInch(13.1),
  y: colY10,
  w: colW6,
  h: colH6,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "💡 Không phải mọi biến dữ liệu giúp nâng độ chính xác của mô hình đều được phép sử dụng; luôn cân nhắc tính hợp lệ về mặt thời gian và đạo đức bảo mật.", {
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

slide10.addNotes("Nội dung bổ sung:\nLựa chọn dữ liệu (data selection) là việc xác định phần dữ liệu liên quan trực tiếp đến mục tiêu phân tích. Biến đổi dữ liệu (data transformation) là đưa dữ liệu đã chọn về dạng phù hợp hơn cho thuật toán khai phá. Tránh sử dụng thông tin tương lai gây rò rỉ dữ liệu.");

// ----------------------------------------------------
// Slide 11 — CONTENT: Ví dụ tạo biến dự báo rời bỏ
// ----------------------------------------------------
const slide11 = pptx.addSlide({ masterName: "CONTENT" });
slide11.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide11.addText("TẠO BIẾN ĐẦU VÀO CHO MÔ HÌNH DỰ BÁO RỜI BỎ", {
  placeholder: "title",
});

const optIntro11 = addText(slide11, "Một hóa đơn riêng lẻ không mang lại nhiều giá trị dự báo; cần tổng hợp dữ liệu lịch sử thành các chỉ số hành vi ở thời điểm dự báo.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY11 = (optIntro11.y as number) + (optIntro11.h as number) + cmToInch(0.2);

slide11.addTable([
  [
    { text: "Biến đề xuất", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Công thức / Cách tạo", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa đối với nguy cơ rời bỏ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Phân loại xử lý", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "so_lan_mua_30_ngay" }, { text: "Đếm số hóa đơn trong 30 ngày gần đây" }, { text: "Tần suất mua giảm phản ánh rủi ro" }, { text: "Giữ trực tiếp", options: { color: DUE_COLORS.green, bold: true } }],
  [{ text: "ngay_tu_lan_gan_nhat" }, { text: "Ngày dự báo - Ngày mua cuối cùng" }, { text: "Khoảng cách mua tăng là tín hiệu nguy hiểm" }, { text: "Giữ trực tiếp", options: { color: DUE_COLORS.green, bold: true } }],
  [{ text: "xu_huong_chi_tieu" }, { text: "Chi tiêu T1 / Trung bình T2 và T3" }, { text: "Phát hiện xu hướng tiêu dùng đi xuống" }, { text: "Biến đổi tổng hợp" }],
  [{ text: "khach_roi_bo_chua" }, { text: "Nhãn thực tế sau 30 ngày tiếp theo" }, { text: "Đây là kết quả tương lai cần dự báo" }, { text: "Cấm dùng (Rò rỉ)", options: { color: DUE_COLORS.orange, bold: true } }]
], {
  x: cmToInch(0.8),
  y: tableY11,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide11, "💡 Chất lượng và độ tin cậy của mô hình học máy phần lớn phụ thuộc vào việc thiết kế đúng các biến hành vi, chứ không đơn thuần chỉ nằm ở sức mạnh thuật toán.", {
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

slide11.addNotes(`Ghi chú giảng viên:
- ngay_tu_lan_gan_nhat được tính tại thời điểm dự báo ➔ Đầu vào hợp lệ.
- khach_roi_bo_chua chỉ biết sau khi hết thời hạn dự báo ➔ Rò rỉ thông tin dữ liệu (Data Leakage), tuyệt đối không đưa vào làm đầu vào mô hình huấn luyện.
- Hướng dẫn học viên cách tư duy xây dựng biến từ các sự kiện thô giao dịch.`);
