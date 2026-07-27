import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 5 — SECTION
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "SECTION" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});

slide5.addText("1.1.1. KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});

slide5.addText("Khai phá dữ liệu là quá trình phát hiện các mẫu, quy luật và tri thức ẩn có giá trị từ dữ liệu.", {
  placeholder: "content",
});

slide5.addText("Câu hỏi dẫn nhập:\n“Làm thế nào biến hàng triệu hóa đơn của FreshMart thành một quyết định khuyến mãi đúng đối tượng?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 6 — CONTENT
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("KHAI PHÁ DỮ LIỆU LÀ GÌ?", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "Khai phá dữ liệu (Data Mining) là quá trình phát hiện các mẫu, mối quan hệ, xu hướng hoặc mô hình ẩn, chưa biết trước và có ích từ lượng dữ liệu lớn.", {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 14,
  color: DUE_COLORS.green,
  bold: true,
});

// Position table based on intro text height
const tableY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

slide6.addTable([
  [
    { text: "Đặc trưng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Ẩn", options: { bold: true } },
    { text: "Không thể nhận ra ngay lập tức chỉ bằng quan sát dữ liệu thô." }
  ],
  [
    { text: "Chưa biết trước", options: { bold: true } },
    { text: "Không phải là quy tắc hay tri thức mà doanh nghiệp đã biết rõ." }
  ],
  [
    { text: "Có ích", options: { bold: true } },
    { text: "Thực sự có giá trị giúp hỗ trợ quyết định hoặc cải thiện hiệu quả hoạt động." }
  ],
  [
    { text: "Có thể hành động", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Có thể chuyển thành khuyến mãi, cảnh báo rủi ro, dự báo hoặc chính sách cụ thể." }
  ]
], {
  x: cmToInch(0.8),
  y: tableY6,
  w: cmToInch(23.8),
  h: cmToInch(2.8),
  fontSize: 12,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6, "👉 Ví dụ: Từ hàng triệu giao dịch, siêu thị phát hiện: khách hàng mua ít dần trong 3 tháng liên tiếp thường có nguy cơ ngừng mua trong tháng kế tiếp.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// ----------------------------------------------------
// Slide 7 — CONTENT
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("TỪ DỮ LIỆU ĐẾN HÀNH ĐỘNG", {
  placeholder: "title",
});

const pipelineW = cmToInch(5.2);
const pipelineH = cmToInch(2.2);
const pipelineY = cmToInch(2.2);
const startX = cmToInch(1.1);
const spacing = cmToInch(0.8);

addText(slide7, "1. DỮ LIỆU\n\n• Hóa đơn mua sắm\n• Hoạt động trên app\n• Tương tác website\n• Thẻ thành viên", {
  x: startX,
  y: pipelineY,
  w: pipelineW,
  h: pipelineH,
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide7, "2. MẪU (PATTERN)\n\n• Khách hàng mua sắm ít dần đi liên tục trong vòng ba tháng vừa qua", {
  x: startX + pipelineW + spacing,
  y: pipelineY,
  w: pipelineW,
  h: pipelineH,
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide7, "3. TRI THỨC\n\n• Nhóm khách hàng này được xác định là có nguy cơ rời bỏ siêu thị rất cao", {
  x: startX + (pipelineW + spacing) * 2,
  y: pipelineY,
  w: pipelineW,
  h: pipelineH,
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide7, "4. HÀNH ĐỘNG\n\n• Gửi voucher ưu đãi cá nhân hóa và nhân viên chăm sóc gọi điện hỗ trợ", {
  x: startX + (pipelineW + spacing) * 3,
  y: pipelineY,
  w: pipelineW,
  h: pipelineH,
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide7, "💡 Thông điệp: Mô hình chỉ là phương tiện; giá trị xuất hiện khi tri thức được chuyển thành hành động đúng lúc.", {
  x: cmToInch(1.1),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.2),
  h: cmToInch(1.2),
  fontSize: 14,
  color: DUE_COLORS.darkText,
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// ----------------------------------------------------
// Slide 8 — CONTENT
// ----------------------------------------------------
const slide8 = pptx.addSlide({ masterName: "CONTENT" });
slide8.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide8.addText("KHAI PHÁ DỮ LIỆU KHÁC GÌ VỚI BÁO CÁO?", {
  placeholder: "title",
});

slide8.addTable([
  [
    { text: "Hoạt động", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Câu hỏi điển hình", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Kết quả đầu ra thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Truy vấn dữ liệu", options: { bold: true } },
    { text: "Doanh thu tháng 6 là bao nhiêu?" },
    { text: "Một con số đơn lẻ hoặc một bảng dữ liệu tĩnh." }
  ],
  [
    { text: "Báo cáo / BI mô tả", options: { bold: true } },
    { text: "Doanh thu thay đổi theo chi nhánh như thế nào?" },
    { text: "Biểu đồ cột, báo cáo phân tích hoặc dashboard tĩnh." }
  ],
  [
    { text: "Khai phá dữ liệu", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Khách hàng nào có khả năng ngừng mua trong 30 ngày tới?" },
    { text: "Mô hình dự báo hành vi, quy luật ẩn hoặc danh sách ưu tiên." }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(23.8),
  h: cmToInch(3.0),
  fontSize: 13,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide8, "Ví dụ FreshMart:\n• Truy vấn: Doanh thu chi nhánh A trong tháng 6?\n• Báo cáo: Chi nhánh nào có doanh thu giảm mạnh nhất?\n• Khai phá: Khách hàng cụ thể nào tại chi nhánh A có nguy cơ rời bỏ?", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.5),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// ----------------------------------------------------
// Slide 9 — CONTENT
// ----------------------------------------------------
const slide9 = pptx.addSlide({ masterName: "CONTENT" });
slide9.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide9.addText("MẪU NÀO THỰC SỰ CÓ GIÁ TRỊ?", {
  placeholder: "title",
});

slide9.addTable([
  [
    { text: "Tiêu chí", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi kiểm tra giá trị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Hợp lệ (Valid)", options: { bold: true } }, { text: "Mẫu có đáng tin cậy và chính xác trên dữ liệu kiểm tra không?" }],
  [{ text: "Mới (Novel)", options: { bold: true } }, { text: "Mẫu có cho biết điều gì chưa hiển nhiên với tổ chức doanh nghiệp không?" }],
  [{ text: "Hữu ích (Useful)", options: { bold: true } }, { text: "Mẫu có giúp đạt mục thực tế hay cải thiện quy trình không?" }],
  [{ text: "Dễ hiểu (Understandable)", options: { bold: true } }, { text: "Nhà quản lý hoặc người ra quyết định có thể diễn giải được không?" }],
  [{ text: "Có thể hành động (Actionable)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Doanh nghiệp có thể thay đổi chính sách gì dựa trên kết quả này?" }]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.5),
  h: cmToInch(4.3),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide9, "SO SÁNH MẪU ĐẦU RA:\n\n• Mẫu yếu (hiển nhiên, ít giá trị):\n“Phần lớn khách hàng của FreshMart có mua hàng.”\n\n• Mẫu mạnh (khai phá có giá trị hành động):\n“Khách hàng có tần suất mua giảm 50% và không mở app 30 ngày có nguy cơ rời bỏ cao.”\n👉 Có thể trực tiếp chạy chiến dịch gửi voucher giữ chân.", {
  x: cmToInch(13.1),
  y: cmToInch(2.2),
  w: cmToInch(11.5),
  h: cmToInch(4.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  valign: "top",
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide9.addNotes("Ghi chú giảng viên:\nHãy hỏi học viên: “Nếu phát hiện một mẫu đúng nhưng doanh nghiệp không thể làm gì với nó, mẫu đó có đáng quan tâm không?”");

// ----------------------------------------------------
// Slide 10 — CONTENT
// ----------------------------------------------------
const slide10 = pptx.addSlide({ masterName: "CONTENT" });
slide10.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide10.addText("KHAI PHÁ DỮ LIỆU LÀ LĨNH VỰC LIÊN NGÀNH", {
  placeholder: "title",
});

const colW10 = cmToInch(7.5);
const colH10 = cmToInch(1.8);
const row1Y10 = cmToInch(2.2);
const row2Y10 = cmToInch(5.5);
const startX10 = cmToInch(0.8);
const gapX10 = cmToInch(0.65);

addText(slide10, "💾 CƠ SỞ DỮ LIỆU\n\nThu thập, lưu trữ, tổ chức và truy xuất dữ liệu quy mô lớn hiệu năng cao.", {
  x: startX10,
  y: row1Y10,
  w: colW10,
  h: colH10,
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "📊 THỐNG KÊ HỌC\n\nMô tả dữ liệu, suy luận, đánh giá độ tin cậy và kiểm chứng giả thuyết mẫu.", {
  x: startX10 + colW10 + gapX10,
  y: row1Y10,
  w: colW10,
  h: colH10,
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "🤖 HỌC MÁY\n\nCung cấp các thuật toán học từ dữ liệu thô và đưa ra dự báo chính xác.", {
  x: startX10 + (colW10 + gapX10) * 2,
  y: row1Y10,
  w: colW10,
  h: colH10,
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "📈 TRỰC QUAN HÓA\n\nBiến các mẫu số học phức tạp thành đồ họa trực quan dễ hiểu cho con người.", {
  x: cmToInch(4.8),
  y: row2Y10,
  w: colW10,
  h: colH10,
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "💼 KIẾN THỨC NGHIỆP VỤ\n\nĐịnh hình bài toán thực tiễn và đảm bảo hành động từ mô hình tạo giá trị thực.", {
  x: cmToInch(13.1),
  y: row2Y10,
  w: colW10,
  h: colH10,
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// ----------------------------------------------------
// Slide 11 — CONTENT
// ----------------------------------------------------
const slide11 = pptx.addSlide({ masterName: "CONTENT" });
slide11.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide11.addText("CASE: GIỮ CHÂN KHÁCH HÀNG SIÊU THỊ", {
  placeholder: "title",
});

addText(slide11, "Bối cảnh FreshMart phát hiện khách hàng rủi ro:\n• Giảm số lần mua hàng liên tiếp trong 3 tháng.\n• Không mở app FreshMart trong 30 ngày gần nhất.\n• Không phản hồi khuyến mãi gần nhất.\n• Từng có giá trị chi tiêu cao (Khách hàng VIP).", {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.5),
  h: cmToInch(2.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide11, "Hành trình giữ chân thành công:\n\n1. Dự đoán nguy cơ rời bỏ từ dữ liệu hành vi.\n2. Chọn nhóm khách hàng có giá trị cao, rủi ro cao.\n3. Gửi voucher cá nhân hóa hoặc gọi điện hỗ trợ chăm sóc.\n👉 Tối ưu hóa ngân sách so với khuyến mãi đại trà.", {
  x: cmToInch(13.1),
  y: cmToInch(2.2),
  w: cmToInch(11.5),
  h: cmToInch(2.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide11, "❓ Thảo luận: \"Giảm số lần mua\" có đủ để kết luận khách hàng sẽ rời bỏ không? Cần bổ sung những biến dữ liệu nào? (Ví dụ: giá trị đơn hàng, thời gian từ lần mua gần nhất, lịch sử khiếu nại...)", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
