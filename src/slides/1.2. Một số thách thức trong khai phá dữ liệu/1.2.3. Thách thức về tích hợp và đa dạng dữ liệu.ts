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
slide1.addText("1.2.3. THÁCH THỨC VỀ TÍCH HỢP VÀ ĐA DẠNG DỮ LIỆU", {
  placeholder: "title",
});
slide1.addText("Dữ liệu có giá trị thường nằm rải rác ở nhiều nguồn và tồn tại dưới nhiều dạng; thách thức là liên kết chúng đúng cách để trả lời một câu hỏi nghiệp vụ thống nhất.", {
  placeholder: "content",
});
slide1.addText("Câu hỏi dẫn nhập:\n“Một khách vừa mua hàng tại cửa hàng, đánh giá sản phẩm trên website và gọi tổng đài khiếu nại: doanh nghiệp có chắc ba dấu vết này thuộc về cùng một người?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("NHIỀU NGUỒN, NHIỀU CẤU TRÚC DỮ LIỆU KHÁC NHAU", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Dữ liệu phục vụ khai phá không chỉ là các bảng quan hệ có cấu trúc. Hệ thống hiện đại phải làm việc với đa dạng cấu trúc dữ liệu phức tạp.", {
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

// Left table: Types
slide2.addTable([
  [
    { text: "Loại dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Khó khăn chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Văn bản", options: { bold: true } }, { text: "Bình luận, email phản hồi" }, { text: "Chuyển từ tự nhiên sang số." }],
  [{ text: "Chuỗi thời gian", options: { bold: true } }, { text: "Doanh số tháng, giá cổ phiếu" }, { text: "Tính xu hướng và mùa vụ." }],
  [{ text: "Không gian", options: { bold: true } }, { text: "Tọa độ GPS xe, địa chỉ nhận" }, { text: "Quan hệ vị trí & khoảng cách." }],
  [{ text: "Mạng / Đồ thị", options: { bold: true } }, { text: "Mạng xã hội, cuộc gọi viễn thông" }, { text: "Mối liên kết nhiều-nhiều phức tạp." }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right list: core rule
addText(slide2, "🔄 NGUYÊN TẮC LỰA CHỌN KỸ THUẬT PHÙ HỢP\n\n1. Câu hỏi nghiệp vụ đặt ra mục tiêu phân tích.\n2. Xác định các loại dữ liệu và cấu trúc dữ liệu liên quan.\n3. Lựa chọn phương pháp biểu diễn dữ liệu và tiền xử lý thích hợp.\n4. Chọn kỹ thuật khai phá dữ liệu tương thích.\n\n👉 Ý nghĩa: Không thể áp dụng cùng một cách xử lý thô sơ cho mọi dạng dữ liệu.", {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide2, "💡 Không có một thuật toán duy nhất phù hợp cho mọi loại dữ liệu; lựa chọn phương pháp luôn bắt đầu từ việc thấu hiểu bản chất dữ liệu và mục tiêu nghiệp vụ.", {
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

slide2.addNotes("Nội dung bổ sung:\nDự báo doanh số theo tháng cần nhận diện xu hướng và mùa vụ; trong khi phân tích bình luận khách hàng cần xử lý ngôn ngữ, từ khóa, chủ đề và cảm xúc. Không thể áp dụng nguyên trạng cùng một cách xử lý cho hai bài toán này.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("TÍCH HỢP DỮ LIỆU VÀ QUY TRÌNH ETL", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "ETL (Extract - Transform - Load) giúp đưa dữ liệu từ nhiều hệ thống rời rạc về một kho dữ liệu phân tích thống nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left: Pipeline workflow
addText(slide3, "⚙️ TIẾN TRÌNH ETL ĐỒNG BỘ\n\n• TRÍCH XUẤT (Extract): Lấy dữ liệu từ CRM, ERP, Website, App, Excel.\n• BIẾN ĐỔI (Transform): Chuẩn hóa mã hóa, khớp khách hàng, quy đổi đơn vị, đồng bộ thời điểm và lọc bỏ trùng lặp.\n• NẠP (Load): Đưa dữ liệu sạch vào Kho dữ liệu (Data Warehouse).\n\n➔ Kết quả: Tạo ra một góc nhìn khách hàng thống nhất.", {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right table: problems
slide3.addTable([
  [
    { text: "Thách thức tích hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ điển hình", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giải pháp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Khác định danh", options: { bold: true } }, { text: "CRM dùng ID; Web dùng email" }, { text: "Bảng ánh xạ định danh." }],
  [{ text: "Khác đơn vị đo", options: { bold: true } }, { text: "Ghi tiền đồng và nghìn đồng" }, { text: "Quy đổi về đơn vị chuẩn." }],
  [{ text: "Khác định dạng", options: { bold: true } }, { text: "Ngày dd/mm/yyyy vs yyyy-mm-dd" }, { text: "Chuyển về chuẩn ISO." }],
  [{ text: "Xung đột thông tin", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Nguồn ghi địa chỉ khác nhau" }, { text: "Quy tắc ưu tiên nguồn." }]
], {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide3, "💡 Trước khi xây dựng mô hình phân tích “khách hàng 360 độ”, cần chắc chắn rằng mọi hệ thống con đang nói về đúng khách hàng, đúng thước đo và đúng thời điểm thống nhất.", {
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

slide3.addNotes("Nội dung bổ sung:\nTích hợp dữ liệu tốt giúp giảm dư thừa và bất nhất, từ đó cải thiện độ chính xác và tốc độ của bước khai phá tiếp theo; ngược lại, khác biệt ngữ nghĩa và cấu trúc là thách thức trung tâm của tích hợp dữ liệu. “Tích hợp” không chỉ là ghép bảng mà là bảo đảm các trường thực sự có cùng ý nghĩa ngữ nghĩa.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("VÍ DỤ 1: KHÁCH HÀNG 360 ĐỘ TRONG BÁN LẺ ĐA KÊNH", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Giải quyết bài toán xác định thực thể (entity identification) khi một khách hàng tương tác trên nhiều kênh và điểm chạm khác nhau.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: Channels & traces
slide4.addTable([
  [
    { text: "Kênh tương tác", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mã định danh lưu trữ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ minh họa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Cửa hàng vật lý", options: { bold: true } }, { text: "Mã thành viên" }, { text: "FM-10245" }],
  [{ text: "Trang Web", options: { bold: true } }, { text: "Email đăng ký" }, { text: "linh.nguyen@email.com" }],
  [{ text: "Tổng đài hỗ trợ", options: { bold: true } }, { text: "Số điện thoại" }, { text: "0909 123 456" }],
  [{ text: "Quảng cáo số", options: { bold: true } }, { text: "Cookie trình duyệt" }, { text: "cookie_a8f39" }],
  [{ text: "Ứng dụng di động", options: { bold: true } }, { text: "Mã thiết bị" }, { text: "device_x22" }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right list: links
addText(slide4, "🔗 LIÊN KẾT ĐỊNH DANH THEO MỨC TIN CẬY\n\n• KHÓA MẠNH: Email hoặc số điện thoại đã được xác thực mã OTP. Cho phép liên kết trực tiếp các hồ sơ.\n• KHÓA TRUNG BÌNH: Sử dụng họ tên + ngày sinh + địa chỉ. Cần thuật toán so khớp gần đúng (fuzzy match) và gán điểm tin cậy.\n• KHÓA YẾU: Địa chỉ IP, cookie. Chỉ dùng gợi ý hành vi, không gộp hồ sơ.\n\n⚠️ Mâu thuẫn: Nếu 1 email gắn với nhiều tên khác nhau, hệ thống cần gắn cờ chuyển sang xác minh thủ công.", {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide4, "💡 Ghép nhầm hồ sơ khách hàng có thể làm cá nhân hóa sai lệch, đánh giá sai giá trị khách hàng và tạo ra rủi ro nghiêm trọng về quyền riêng tư dữ liệu.", {
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

slide4.addNotes("Nội dung bổ sung:\nBài toán xác định thực thể (entity identification) là việc đối sánh các thực thể tương đương trong thế giới thực giữa nhiều nguồn dữ liệu; metadata như tên trường, ý nghĩa, kiểu dữ liệu, miền giá trị và quy tắc dữ liệu rỗng giúp giảm lỗi trong quá trình này. Ví dụ: chuẩn hóa chữ hoa/thường cho email, nhưng không gộp bừa bãi khi trùng tên.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 2: PHÂN TÍCH PHẢN HỒI ĐA CHIỀU CỦA KHÁCH HÀNG", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Bối cảnh: Một khách hàng đánh giá sản phẩm 2 sao kèm bình luận 'Giao hàng chậm, đóng gói không tốt'. Cần tích hợp đa nguồn để tìm nguyên nhân gốc rễ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: Sources to integrate
slide5.addTable([
  [
    { text: "Nguồn tích hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu cung cấp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị phân tích mang lại", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Điểm đánh giá sao", options: { bold: true } }, { text: "2 sao (có cấu trúc)" }, { text: "Xác định nhanh trạng thái tiêu cực." }],
  [{ text: "Nội dung bình luận", options: { bold: true } }, { text: "Đoạn văn viết tay" }, { text: "Phân tích ngữ nghĩa tìm nguyên nhân." }],
  [{ text: "Lịch sử mua hàng", options: { bold: true } }, { text: "Chi tiết đơn hàng" }, { text: "Xác định mã sản phẩm, thời điểm." }],
  [{ text: "Dữ liệu giao vận", options: { bold: true } }, { text: "Nhật ký vận chuyển" }, { text: "Kiểm tra lỗi trễ hạn do đơn vị vận chuyển." }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

// Right workflow box
addText(slide5, "🔍 TỪ DỮ LIỆU RỜI RẠC ĐẾN HÀNH ĐỘNG NGHIỆP VỤ\n\n1. Phát hiện: Đánh giá 2 sao kèm bình luận 'giao hàng chậm'.\n2. Truy vết lịch sử đơn hàng: Phát hiện đơn hàng được giao muộn 3 ngày so với cam kết.\n3. Phát hiện mẫu lặp lại: Nhận thấy nhiều phản hồi tiêu cực tương tự xuất hiện cùng một đối tác giao vận ở khu vực A.\n4. Kết luận: Vấn đề cốt lõi nằm ở khâu giao vận, không phải do chất lượng sản phẩm.\n5. Hành động: Rà soát lại đối tác logistics và gửi voucher xin lỗi.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Dữ liệu đa dạng chỉ thực sự tạo ra giá trị lớn khi được tích hợp và bổ sung ngữ cảnh cho nhau: điểm đánh giá sao là tín hiệu bề nổi, còn dữ liệu tích hợp giúp tìm ra nguyên nhân gốc rễ.", {
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

slide5.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu có thể áp dụng cho dữ liệu văn bản, dữ liệu giao dịch, dữ liệu chuỗi thời gian và các dạng dữ liệu phức tạp khác; việc tích hợp các nguồn bổ sung giúp kết quả được diễn giải trong đúng bối cảnh nghiệp vụ. Điểm sao là dữ liệu cấu trúc, bình luận là phi cấu trúc cần chuyển đổi thành đặc trưng.");

// ----------------------------------------------------
// Slide 6 — CONTENT (Bài tập nhanh)
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("BÀI TẬP NHANH: CHỌN NGUỒN DỮ LIỆU CHÍNH", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "👥 Làm việc cặp đôi trong 3 phút: Ghép mỗi bài toán phân tích thực tế sau đây với loại dữ liệu đóng vai trò trung tâm nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

slide6.addTable([
  [
    { text: "Bài toán thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nguồn dữ liệu chính nên ưu tiên", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    { text: "Lập luận giải thích / Vì sao?", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "A. Dự báo nhu cầu điện năng tiêu thụ", options: { bold: true } }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "B. Phát hiện bài viết tin giả (Fake News)", options: { bold: true } }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "C. Tối ưu hóa tuyến đường giao hàng", options: { bold: true } }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "D. Hệ thống đề xuất gợi ý mua sản phẩm", options: { bold: true } }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }],
  [{ text: "E. Phát hiện gian lận cước viễn thông", options: { bold: true } }, { text: "?", options: { color: DUE_COLORS.orange, align: "center", bold: true } }, { text: "?" }]
], {
  x: cmToInch(0.8),
  y: tableY6,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6, "💬 Gợi ý các loại dữ liệu lựa chọn: (1) Văn bản, (2) Chuỗi thời gian, (3) Không gian và mạng lưới, (4) Giao dịch & tương tác hành vi, (5) Dữ liệu luồng và dữ liệu mạng.", {
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

slide6.addNotes("Ghi chú giảng viên:\nCho học viên làm cá nhân 2 phút, sau đó thảo luận cặp đôi 3 phút.");

// ----------------------------------------------------
// Slide 6b — CONTENT (Bài tập nhanh - Đáp án)
// ----------------------------------------------------
const slide6b = pptx.addSlide({ masterName: "CONTENT" });
slide6b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6b.addText("BÀI TẬP NHANH: ĐÁP ÁN ĐỀ XUẤT", {
  placeholder: "title",
});

const optIntro6b = addText(slide6b, "✅ Bảng đáp án gợi ý và lập luận lựa chọn dạng dữ liệu trung tâm cho từng bài toán.", {
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
    { text: "Bài toán thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nguồn dữ liệu chính", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lập luận giải thích chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "A. Dự báo nhu cầu điện", options: { bold: true } }, { text: "2. Chuỗi thời gian", options: { bold: true, color: DUE_COLORS.green } }, { text: "Phụ thuộc mạnh vào thời điểm, xu hướng, mùa vụ và thời tiết." }],
  [{ text: "B. Phát hiện tin giả", options: { bold: true } }, { text: "1. Văn bản", options: { bold: true, color: DUE_COLORS.green } }, { text: "Cần phân tích sâu ngôn ngữ học, ngữ cảnh nội dung bài viết và nguồn tin." }],
  [{ text: "C. Tối ưu tuyến giao hàng", options: { bold: true } }, { text: "3. Không gian & mạng lưới", options: { bold: true, color: DUE_COLORS.green } }, { text: "Cần tọa độ GPS, khoảng cách và cấu trúc mạng lưới giao thông." }],
  [{ text: "D. Hệ thống đề xuất gợi ý", options: { bold: true } }, { text: "4. Giao dịch & tương tác", options: { bold: true, color: DUE_COLORS.green } }, { text: "Dựa vào lịch sử tương tác giữa người dùng và sản phẩm." }],
  [{ text: "E. Phát hiện gian lận cước", options: { bold: true } }, { text: "5. Dữ liệu luồng & mạng", options: { bold: true, color: DUE_COLORS.green } }, { text: "Cần giám sát liên tục nhật ký cuộc gọi và liên kết kết nối mạng viễn thông." }]
], {
  x: cmToInch(0.8),
  y: tableY6b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6b, "💡 Loại dữ liệu quyết định cách biểu diễn, phương pháp tiền xử lý và nhóm kỹ thuật khai phá tương ứng; chọn sai dạng dữ liệu trung tâm có thể khiến dự án đi sai hướng ngay từ đầu.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide6b.addNotes(`Ghi chú giảng viên:
- Khi chữa bài, hãy hỏi thêm: “Nguồn dữ liệu nào là nguồn bổ sung hữu ích?” để nhấn mạnh rằng trong bài toán thực tế, việc tích hợp đa nguồn là thiết yếu.
- Câu hỏi mở rộng: Với bài toán phát hiện tin giả, ngoài nội dung văn bản, dữ liệu mạng xã hội như ai chia sẻ, chia sẻ khi nào và qua cộng đồng nào có thể giúp cải thiện kết quả ra sao?
- Liên kết sang phần sau: dù dữ liệu đã được tích hợp đúng, mô hình vẫn có thể suy giảm hiệu năng khi hành vi người dùng và môi trường xung quanh liên tục thay đổi theo thời gian.`);
