import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 4 — SECTION
// ----------------------------------------------------
const slide4Section = pptx.addSlide({ masterName: "SECTION" });
slide4Section.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide4Section.addText("5.1. TỔNG QUAN VỀ KHAI PHÁ LUẬT KẾT HỢP", { placeholder: "title" });
slide4Section.addText("Từ dữ liệu giao dịch đến gợi ý hành động kinh doanh", { placeholder: "content" });
slide4Section.addText(
  "Câu hỏi dẫn nhập: Trong tập giao dịch lớn, những sản phẩm, sự kiện hoặc hành vi nào thường xuất hiện đồng thời?\n\n" +
  "5.1.1. Khái niệm cơ bản   |   5.1.2. Thước đo đánh giá   |   5.1.3. Phân loại luật kết hợp",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 5a — CONTENT (Phân tích giỏ hàng thực tiễn)
// ----------------------------------------------------
const slide5aContent = pptx.addSlide({ masterName: "CONTENT" });
slide5aContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide5aContent.addText("PHÂN TÍCH GIỎ HÀNG THỰC TIỄN", { placeholder: "title" });

addText(
  slide5aContent,
  [
    { text: "🛒 Phân tích giỏ hàng (Market Basket Analysis):\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• ", options: { bold: true } },
    { text: "Association Rule Mining ", options: { bold: true } },
    { text: "tìm các mẫu đồng xuất hiện lặp lại trong CSDL.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Trong bán lẻ: ", options: { bold: true } },
    { text: "Tìm sản phẩm mua cùng nhau trong một hóa đơn.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Dạng luật: ", options: { bold: true } },
    { text: "“Khách mua X thì thường đồng thời mua Y”." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide5aContent,
  [
    { text: "💼 Ứng dụng quản trị & Liên ngành:\n\n", options: { bold: true, fontSize: 12.5 } },
    { text: "• ", options: { bold: true } },
    { text: "Bán lẻ & E-commerce: ", options: { bold: true } },
    { text: "Thiết kế combo, gợi ý mua kèm (cross-selling).\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Ngân hàng: ", options: { bold: true } },
    { text: "Nhận diện gói dịch vụ dùng chung, phát hiện rủi ro.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Y tế & Giáo dục: ", options: { bold: true } },
    { text: "Phân tích tổ hợp triệu chứng bệnh, môn học." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.0),
    fontSize: 11,
    lineSpacing: 15,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 10,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide5aContent,
  "💡 Nhấn mạnh: Khai phá luật kết hợp giúp biến dữ liệu giao dịch thụ động thành các cơ hội kinh doanh chủ động.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide5aContent.addNotes("Giảng viên liên hệ ví dụ siêu thị đặt bia gần tã lót hoặc gợi ý sản phẩm bán kèm trên Tiki/Shopee.");

// ----------------------------------------------------
// Slide 5b — CONTENT (So sánh các nhiệm vụ khai phá dữ liệu)
// ----------------------------------------------------
const slide5bContent = pptx.addSlide({ masterName: "CONTENT" });
slide5bContent.addText("CHƯƠNG 5 – LUẬT KẾT HỢP", { placeholder: "footer" });
slide5bContent.addText("SO SÁNH CÁC NHIỆM VỤ KHAI PHÁ DỮ LIỆU", { placeholder: "title" });

slide5bContent.addTable(
  [
    [
      { text: "Nhiệm vụ khai phá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Câu hỏi điển hình", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Kết quả đầu ra thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Luật kết hợp", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Những sản phẩm/sự kiện nào thường đi cùng nhau?" },
      { text: "Quy tắc {Bánh mì, Sữa} → {Trứng}" },
    ],
    [
      { text: "Phân lớp", options: { bold: true } },
      { text: "Giao dịch này có phải là gian lận hay không?" },
      { text: "Nhãn dự báo (FRAUD_0 hoặc FRAUD_1)" },
    ],
    [
      { text: "Dự báo", options: { bold: true } },
      { text: "Doanh thu quý tới của siêu thị là bao nhiêu?" },
      { text: "Một con số dự báo liên tục" },
    ],
    [
      { text: "Phân cụm", options: { bold: true } },
      { text: "Có những nhóm khách hàng hành vi tương tự nào?" },
      { text: "Các cụm/phân đoạn khách hàng" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.0),
    fontSize: 11.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide5bContent,
  "💡 Thông điệp chốt: Luật kết hợp là nhiệm vụ khai phá mô tả: tìm và diễn giải các quan hệ đồng xuất hiện trong dữ liệu, không dự báo nhãn kết quả cho từng quan sát.",
  {
    x: cmToInch(0.8),
    y: cmToInch(10.0),
    w: cmToInch(23.8),
    h: cmToInch(1.9),
    fontSize: 13.5,
    lineSpacing: 18,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide5bContent.addNotes(
  "Giảng viên nhấn mạnh sự khác biệt giữa Khai phá mô tả (Descriptive Mining) như Luật kết hợp và Khai phá dự báo (Predictive Mining) như Phân lớp/Hồi quy."
);
