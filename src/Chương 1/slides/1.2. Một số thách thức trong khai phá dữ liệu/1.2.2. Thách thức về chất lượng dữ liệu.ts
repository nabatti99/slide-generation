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
slide1.addText("1.2.2. THÁCH THỨC VỀ CHẤT LƯỢNG DỮ LIỆU", {
  placeholder: "title",
});
slide1.addText("Mô hình chỉ đáng tin cậy khi dữ liệu đầu vào đủ chính xác, đầy đủ, nhất quán và phù hợp với mục tiêu phân tích.", {
  placeholder: "content",
});
slide1.addText("Câu hỏi dẫn nhập:\n“Nếu dữ liệu khách hàng có tuổi bằng 0, thu nhập bị thiếu và một người xuất hiện thành ba hồ sơ, mô hình chấm điểm tín dụng sẽ học được điều gì?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("DỮ LIỆU “BẨN” LÀ GÌ?", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Dữ liệu thực tế hiếm khi hoàn hảo. Chúng thường bị thiếu, nhiễu, sai định dạng, trùng lặp hoặc không nhất quán, làm suy giảm nghiêm trọng độ tin cậy của mô hình.", {
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

// Left column: Problems table
slide2.addTable([
  [
    { text: "Dạng vấn đề", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Biểu hiện & Ví dụ thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thiếu dữ liệu", options: { bold: true } }, { text: "Không ghi nhận thuộc tính quan trọng (Ví dụ: Trống thu nhập, tuổi)." }],
  [{ text: "Nhiễu / Sai giá trị", options: { bold: true } }, { text: "Lỗi đo lường hoặc nhập liệu (Ví dụ: Tuổi = 0, dư nợ = -50 triệu)." }],
  [{ text: "Sai định dạng", options: { bold: true } }, { text: "Cùng một biến số nhưng ghi nhiều kiểu ngày tháng, chữ viết." }],
  [{ text: "Trùng lặp & Bất nhất", options: { bold: true } }, { text: "Một khách hàng có 3 hồ sơ; viết tắt địa danh (HCM vs TP.HCM)." }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right column: Chain of consequences
addText(slide2, "⚠️ CHUỖI HỆ QUẢ CỦA DỮ LIỆU “BẨN”\n\n1. Dữ liệu đầu vào bị lỗi, khuyết thiếu hoặc không đồng nhất.\n2. Mô hình học máy học từ các tín hiệu sai lệch hoặc thiếu sót.\n3. Các mẫu phát hiện được có độ tin cậy thấp, thiếu chính xác.\n4. Dự báo và quyết định nghiệp vụ của doanh nghiệp bị sai lệch.\n\n👉 Kết quả: Tổn thất chi phí, mất cơ hội và suy giảm uy tín.", {
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

addText(slide2, "💡 “Garbage in, garbage out”: đầu vào không đáng tin cậy có thể tạo ra các kết quả phân tích có vẻ thuyết phục về mặt hình thức nhưng hoàn toàn sai về bản chất.", {
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

slide2.addNotes("Nội dung bổ sung:\nDữ liệu thực tế thường không đầy đủ, nhiễu và không nhất quán; chất lượng đầu vào thấp dẫn đến chất lượng kết quả khai phá thấp.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("VÍ DỤ 1: CHẤM ĐIỂM TÍN DỤNG KHÁCH HÀNG", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Minh họa các lỗi chất lượng dữ liệu thường gặp trong hệ thống quản lý hồ sơ ngân hàng khi chuẩn bị chấm điểm rủi ro.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: bad dataset
slide3.addTable([
  [
    { text: "Mã HS", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thu nhập", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nghề nghiệp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tuổi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dư nợ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Điện thoại", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "KH001" }, { text: "Trống", options: { color: DUE_COLORS.orange, bold: true } }, { text: "Nhân viên VP" }, { text: "32" }, { text: "45 triệu" }, { text: "090…123" }],
  [{ text: "KH002" }, { text: "18 triệu" }, { text: "NV văn phòng", options: { color: DUE_COLORS.orange, bold: true } }, { text: "0", options: { color: DUE_COLORS.orange, bold: true } }, { text: "30 triệu" }, { text: "091…456" }],
  [{ text: "KH003" }, { text: "25 triệu" }, { text: "Kinh doanh" }, { text: "41" }, { text: "-12 triệu", options: { color: DUE_COLORS.orange, bold: true } }, { text: "093…789" }],
  [{ text: "KH004" }, { text: "25 triệu" }, { text: "KD", options: { color: DUE_COLORS.orange, bold: true } }, { text: "41" }, { text: "12 triệu" }, { text: "093…789", options: { color: DUE_COLORS.orange, bold: true } }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right list: rules & issues
addText(slide3, "🛠️ PHÂN TÍCH LỖI VÀ NGUYÊN TẮC XỬ LÝ\n\n• Thu nhập trống (Thiếu dữ liệu): Gắn cờ thiếu, suy diễn phù hợp.\n• NV văn phòng vs Nhân viên VP: Chuẩn hóa danh mục nghề nghiệp.\n• Tuổi = 0 (Giá trị vô lý): Kiểm tra dữ liệu gốc, không thay bừa bãi.\n• Dư nợ âm: Đối chiếu quy ước nghiệp vụ xem có phải hoàn tiền không.\n• KH003 & KH004 trùng số điện thoại: So khớp định danh để tránh gộp nhầm hoặc bỏ sót gian lận thẻ.", {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide3, "💡 Mô hình chấm điểm tín dụng không chỉ cần khối lượng hồ sơ lớn; nó cần các bản ghi mô tả chính xác đặc trưng của các khách hàng thật.", {
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

slide3.addNotes("Nội dung bổ sung:\nViệc làm sạch dữ liệu có thể bao gồm điền giá trị thiếu, làm trơn nhiễu, nhận diện ngoại lệ và giải quyết các bất nhất; các quy tắc về miền giá trị, định dạng và dữ liệu rỗng là cơ sở quan trọng để phát hiện sai lệch.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("VÍ DỤ 2: PHÂN TÍCH DOANH THU CHUỖI BÁN LẺ", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Đồng bộ hóa dữ liệu từ nhiều chi nhánh bán lẻ gặp phải xung đột biểu diễn địa bàn và đơn vị doanh thu.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: messy source
slide4.addTable([
  [
    { text: "Chi nhánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Địa bàn ghi nhận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Doanh thu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đơn vị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "CN01" }, { text: "TP.HCM" }, { text: "1.250.000" }, { text: "Đồng" }],
  [{ text: "CN02" }, { text: "Ho Chi Minh", options: { color: DUE_COLORS.orange, bold: true } }, { text: "980" }, { text: "Nghìn đồng", options: { color: DUE_COLORS.orange, bold: true } }],
  [{ text: "CN03" }, { text: "HCM", options: { color: DUE_COLORS.orange, bold: true } }, { text: "1.420.000" }, { text: "Đồng" }],
  [{ text: "CN04" }, { text: "Hà Nội" }, { text: "1.100" }, { text: "Nghìn đồng", options: { color: DUE_COLORS.orange, bold: true } }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: standardized result
slide4.addTable([
  [
    { text: "Địa bàn chuẩn", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Doanh thu quy đổi (Đồng)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "TP.HCM", options: { bold: true } }, { text: "3.650.000 đồng" }],
  [{ text: "Hà Nội", options: { bold: true } }, { text: "1.100.000 đồng" }]
], {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: cmToInch(1.5),
  fontSize: 10.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Solution box under right table
addText(slide4, "⚙️ QUY TẮC CHUẨN HÓA DỮ LIỆU BÁN LẺ:\n• Địa bàn: Ánh xạ từ các biến thể (HCM, Ho Chi Minh) về mã chuẩn 'TP.HCM'.\n• Đơn vị tiền tệ: Quy đổi toàn bộ doanh thu về đơn vị cơ bản (Đồng).\n• Mã khóa: Sử dụng mã chi nhánh duy nhất để tránh nhập nhầm dữ liệu.", {
  x: cmToInch(13.1),
  y: colY4 + cmToInch(2.2),
  w: colW2,
  h: colH2 - cmToInch(1.7),
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 8,
  rectRadius: 0.1,
});

addText(slide4, "💡 Trước khi hỏi “khu vực nào bán tốt hơn?”, cần bảo đảm mọi khu vực và mọi con số đang được hiểu theo cùng một chuẩn quy ước.", {
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

slide4.addNotes("Nội dung bổ sung:\nXung đột dữ liệu có thể xuất phát từ khác biệt về biểu diễn, đơn vị đo, cách mã hóa hoặc mức độ tổng hợp; vì vậy cần phát hiện và giải quyết các xung đột này trước khi tích hợp và phân tích.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 3: NGOẠI LỆ — LỖI HAY CƠ HỘI?", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Tình huống: Một khách hàng mua 200 chiếc điện thoại di động trong vòng một ngày. Đây là lỗi nhập liệu hay tín hiệu rủi ro/cơ hội?", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: hypotheses
slide5.addTable([
  [
    { text: "Giả thuyết nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động phù hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Lỗi nhập liệu (Nhập nhầm 2 thành 200)", options: { bold: true } }, { text: "Kiểm tra hóa đơn gốc và lịch sử chỉnh sửa." }],
  [{ text: "2. Giao dịch gian lận (Hack thẻ tín dụng)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Tạm khóa, xác minh ngay theo quy tắc rủi ro." }],
  [{ text: "3. Khách hàng đại lý mua sỉ hợp lệ", options: { bold: true, color: DUE_COLORS.green } }, { text: "Chuyển thông tin cho phòng khách hàng doanh nghiệp." }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right: workflow
addText(slide5, "🔄 QUY TRÌNH XỬ LÝ NGOẠI LỆ HỢP LÝ\n\n1. Phát hiện: Nhận diện điểm dữ liệu lệch chuẩn.\n2. Kiểm tra: Đối chiếu quy tắc bối cảnh nghiệp vụ thực tế.\n3. Phân loại: Xác định đó là lỗi nhập liệu, rủi ro, hay cơ hội.\n4. Sửa đổi: Đưa ra hành động cụ thể tương ứng.\n\n❌ Sai lầm: Tự động xóa các bản ghi ngoại lệ mà không tìm hiểu nguyên nhân, có thể xóa đi dấu vết gian lận hoặc cơ hội bán sỉ.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Ngoại lệ không đơn thuần là “dữ liệu rác cần xóa bỏ khỏi tập dữ liệu”; đôi khi đó chính là tín hiệu giá trị nhất của bài toán cần giải quyết.", {
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

slide5.addNotes("Nội dung bổ sung:\nNgoại lệ là đối tượng lệch đáng kể so với phần còn lại của dữ liệu, nhưng ngoại lệ không đồng nhất với nhiễu; trong các ứng dụng như phát hiện gian lận, cần giải thích vì sao một quan sát là bất thường thay vì loại bỏ tự động.");

// ----------------------------------------------------
// Slide 6 — CONTENT (Hoạt động lớp học)
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("HOẠT ĐỘNG NHÓM: PHÒNG KHÁM DỮ LIỆU TÍN DỤNG", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "👥 Làm việc theo nhóm (8 phút): Lập 'phiếu khám dữ liệu' gồm: (1) Phát hiện lỗi, (2) Đề xuất xử lý, (3) Đánh giá hậu quả nếu bỏ qua.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.1);

// 10-row dataset table
slide6.addTable([
  [
    { text: "Mã KH", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Họ tên", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tuổi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thu nhập", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nghề nghiệp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Địa bàn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dư nợ (Đồng)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Điện thoại", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "KH001" }, { text: "Nguyễn An" }, { text: "32" }, { text: "18.000.000" }, { text: "NV văn phòng" }, { text: "TP.HCM" }, { text: "45.000.000" }, { text: "0901234567" }],
  [{ text: "KH002" }, { text: "Trần Bình" }, { text: "Trống", options: { color: DUE_COLORS.orange, bold: true } }, { text: "22.000.000" }, { text: "Kinh doanh" }, { text: "HCM" }, { text: "30.000.000" }, { text: "0912345678" }],
  [{ text: "KH003" }, { text: "Lê Chi" }, { text: "0", options: { color: DUE_COLORS.orange, bold: true } }, { text: "15.000.000" }, { text: "Nhân viên VP" }, { text: "Ho Chi Minh" }, { text: "20.000.000" }, { text: "0923456789" }],
  [{ text: "KH004" }, { text: "Phạm Dũng" }, { text: "41" }, { text: "Trống", options: { color: DUE_COLORS.orange, bold: true } }, { text: "KD" }, { text: "Hà Nội" }, { text: "-12.000.000", options: { color: DUE_COLORS.orange, bold: true } }, { text: "0934567890" }],
  [{ text: "KH005" }, { text: "Nguyễn An" }, { text: "32" }, { text: "18.000.000" }, { text: "NVVP" }, { text: "TP.HCM" }, { text: "45.000.000" }, { text: "0901234567" }],
  [{ text: "KH006" }, { text: "Hoàng Giang" }, { text: "29" }, { text: "20 triệu", options: { color: DUE_COLORS.orange, bold: true } }, { text: "Nhân viên" }, { text: "Đà Nẵng" }, { text: "15.000.000" }, { text: "0945678901" }],
  [{ text: "KH007" }, { text: "Vũ Hoa" }, { text: "37" }, { text: "25.000.000" }, { text: "Nhân viên" }, { text: "TP HCM" }, { text: "0" }, { text: "0956789012" }],
  [{ text: "KH008" }, { text: "Đỗ Khang" }, { text: "45" }, { text: "30.000.000" }, { text: "Kinh doanh" }, { text: "HCM" }, { text: "200.000.000" }, { text: "0967890123" }],
  [{ text: "KH009" }, { text: "Bùi Lan" }, { text: "34" }, { text: "18.000.000" }, { text: "NV văn phòng" }, { text: "TP.HCM" }, { text: "40.000.000" }, { text: "0901234567", options: { color: DUE_COLORS.orange, bold: true } }],
  [{ text: "KH010" }, { text: "Mai Minh" }, { text: "28" }, { text: "16.000.000" }, { text: "Nhân viên" }, { text: "Hà Nội" }, { text: "25.000.000" }, { text: "Trống", options: { color: DUE_COLORS.orange, bold: true } }]
], {
  x: cmToInch(0.8),
  y: tableY6,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 8.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6, "💡 Làm sạch dữ liệu là quá trình ra quyết định có căn cứ nghiệp vụ rõ ràng, không phải là các thao tác xóa dữ liệu hàng loạt một cách máy móc.", {
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

slide6.addNotes(`Gợi ý đáp án giảng viên:

1. Tuổi trống (KH002), thu nhập trống (KH004), điện thoại trống (KH010)
- Xử lý: Kiểm tra dữ liệu gốc, gắn cờ thiếu, điền giá trị phù hợp.
- Hậu quả: Giảm độ tin cậy của biến dự báo, dễ gây thiên lệch mẫu.

2. Tuổi = 0 (KH003)
- Xử lý: Kiểm tra lại nguồn nhập liệu gốc, không thay thế bằng trung bình một cách máy móc.
- Hậu quả: Tạo giá trị vô lý, làm lệch quan hệ toán học giữa tuổi tác và rủi ro tín dụng.

3. Thu nhập ghi '20 triệu' (KH006) so với dạng số khác
- Xử lý: Chuẩn hóa về kiểu số nguyên và cùng đơn vị cơ bản (Đồng).
- Hậu quả: Sai phép tính toán học hoặc mô hình không thể đọc được giá trị dạng chuỗi.

4. Địa bàn viết khác nhau (TP.HCM, HCM, Ho Chi Minh, TP HCM)
- Xử lý: Ánh xạ toàn bộ về một danh mục mã chuẩn thống nhất (ví dụ: 'TP.HCM').
- Hậu quả: Mô hình hiểu nhầm thành các địa bàn khác nhau, chia nhỏ tập dữ liệu gốc.

5. Trùng lặp hồ sơ (KH001 và KH005 trùng lặp hoàn toàn)
- Xử lý: So khớp danh tính và gộp bản ghi trùng.
- Hậu quả: Tính trùng khách hàng, làm lệch tỷ trọng phân phối mẫu.

6. KH001 và KH009 trùng số điện thoại liên lạc
- Xử lý: Gắn cờ xung đột định danh, xác minh thủ công thông tin khách hàng.
- Hậu quả: Dẫn tới gộp nhầm hai người dùng khác nhau hoặc bỏ lọt dấu vết gian lận tài khoản.

7. Dư nợ âm (KH004)
- Xử lý: Xác minh quy ước ghi nhận nghiệp vụ của dư nợ âm.
- Hậu quả: Giải thích sai ý nghĩa rủi ro tín dụng.

Tiền xử lý bao gồm làm sạch, tích hợp, giảm dữ liệu và biến đổi dữ liệu; các bước này hỗ trợ cải thiện chất lượng cũng như hiệu quả của quá trình khai phá.`);
