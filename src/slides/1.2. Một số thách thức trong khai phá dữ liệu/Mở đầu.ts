import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 12 (Slide 1 in section 1.2 content file) — SECTION
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "SECTION" });
slide1.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide1.addText("1.2. MỘT SỐ THÁCH THỨC TRONG KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
  fontSize: 24
});
slide1.addText("Dữ liệu nhiều chỉ tạo ra quyết định tốt hơn khi dữ liệu đủ tin cậy, được xử lý đúng cách và kết quả có thể đưa vào hành động.", {
  placeholder: "content",
});
slide1.addText("Câu hỏi dẫn nhập:\n“Một ngân hàng số có hàng triệu giao dịch mỗi ngày: vì sao vẫn có thể bỏ sót gian lận hoặc đưa ra cảnh báo sai?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 13 (Slide 2 in section 1.2 content file) — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("CÁC THÁCH THỨC TRONG KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Khai phá dữ liệu không đơn thuần là lựa chọn thuật toán. Một dự án phân tích có thể thất bại hoàn toàn nếu dữ liệu quá lớn, chất lượng kém, thiếu liên kết hoặc không dễ diễn giải.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12,
  color: DUE_COLORS.green,
  bold: true,
});

const colW2 = cmToInch(11.5);
const colH2 = cmToInch(3.2);
const colY2 = (optIntro2.y as number) + (optIntro2.h as number) + cmToInch(0.2);

// Left column: banking context
addText(slide2, "🏦 LIÊN HỆ THỰC TẾ: HỆ THỐNG NGÂN HÀNG SỐ\n\n• Đầu vào đa dạng: Giao dịch thẻ, hành vi trên ứng dụng, lịch sử tín dụng, vị trí định vị GPS thiết bị.\n• Đặc thù: Dữ liệu cực kỳ lớn, đa nguồn, phát sinh liên tục theo giây và có tính nhạy cảm bảo mật cao.\n• Yêu cầu: Phải phát hiện rủi ro tức thời, chính xác, đồng thời có thể giải trình logic mô hình khi cần thiết.", {
  x: cmToInch(0.8),
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

// Right column: Table of 7 challenges
slide2.addTable([
  [
    { text: "Nhóm thách thức", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi cốt lõi cần đặt ra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Quy mô & Tốc độ", options: { bold: true } }, { text: "Dữ liệu có quá lớn hoặc phát sinh quá nhanh để tính toán kịp?" }],
  [{ text: "2. Chất lượng dữ liệu", options: { bold: true } }, { text: "Dữ liệu có bị thiếu hụt, sai lệch, nhiễu hoặc không nhất quán?" }],
  [{ text: "3. Tích hợp đa dạng", options: { bold: true } }, { text: "Các nguồn dữ liệu khác nhau có được liên kết chính xác không?" }],
  [{ text: "4. Dữ liệu động", options: { bold: true } }, { text: "Quy luật và hành vi khách hàng có thay đổi theo thời gian không?" }],
  [{ text: "5. Hiệu năng & Diễn giải", options: { bold: true } }, { text: "Mô hình có đủ nhanh, ổn định và dễ giải thích rõ ràng không?" }],
  [{ text: "6. Quyền riêng tư & Đạo đức", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Việc thu thập và sử dụng dữ liệu có hợp pháp và công bằng không?" }]
], {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide2, "💡 Một mô hình phân tích tối tân không thể bù đắp hoàn toàn cho nguồn dữ liệu kém chất lượng, quy trình phối hợp lỏng lẻo hoặc cách thức sử dụng mô hình thiếu trách nhiệm.", {
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

slide2.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu không chỉ là lựa chọn thuật toán. Một dự án có thể thất bại nếu dữ liệu quá lớn, chất lượng thấp, thiếu liên kết, thay đổi liên tục, khó diễn giải hoặc được sử dụng thiếu trách nhiệm. Các tài liệu nền tảng cũng nhấn mạnh yêu cầu về hiệu quả, khả năng mở rộng và xử lý nhiều dạng dữ liệu trong các hệ thống khai phá hiện đại.");
