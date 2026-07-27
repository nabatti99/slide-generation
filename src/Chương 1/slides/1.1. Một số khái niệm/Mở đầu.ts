import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 3 — SECTION
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "SECTION" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});

slide3.addText("1.1. MỘT SỐ KHÁI NIỆM", {
  placeholder: "title",
});

slide3.addText("Khai phá dữ liệu không chỉ là xử lý dữ liệu lớn.\nMục tiêu cuối cùng là tạo ra tri thức hữu ích để hỗ trợ quyết định.", {
  placeholder: "content",
});

slide3.addText("1.1.1. Khai phá dữ liệu  |  1.1.2. Các tác vụ khai phá dữ liệu\n1.1.3. Các quy trình khai phá dữ liệu  |  1.1.4. Các hệ thống khai phá dữ liệu", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("TÌNH HUỐNG: DỮ LIỆU NHIỀU NHƯNG QUYẾT ĐỊNH VẪN KHÓ", {
  placeholder: "title",
});

// Left Column: Business context with rounded rectangle and margin
const contextText = "Bối cảnh FreshMart:\n\n• 2 triệu hóa đơn mua hàng mỗi năm\n• 500.000 khách hàng thành viên\n• Dữ liệu từ ứng dụng và website\n• Dữ liệu tồn kho tại 30 chi nhánh\n• Lịch sử khuyến mãi & phản hồi khách hàng";
const optContext = addText(slide4, contextText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(11.0),
  h: cmToInch(3.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Table: Business questions
slide4.addTable([
  [
    { text: "Câu hỏi nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị quyết định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Khách hàng nào có nguy cơ ngừng mua?" },
    { text: "Chủ động giữ chân khách hàng" }
  ],
  [
    { text: "Những sản phẩm nào nên được bán kèm?" },
    { text: "Tăng doanh thu bán chéo" }
  ],
  [
    { text: "Chi nhánh nào có nhu cầu tăng trong tháng tới?" },
    { text: "Tối ưu tồn kho và nhân sự" }
  ]
], {
  x: cmToInch(12.3),
  y: cmToInch(2.2),
  w: cmToInch(12.3),
  h: cmToInch(3.2),
  fontSize: 12,
  border: { pt: 1, color: "CCCCCC" }
});

const bannerText = "💡 Thông điệp chốt: Dữ liệu thô ghi lại những gì đã xảy ra; khai phá dữ liệu giúp tìm ra những gì có ý nghĩa cho quyết định tiếp theo.";
addText(slide4, bannerText, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
