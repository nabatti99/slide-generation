import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 4 — SECTION
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "SECTION" });
slide4.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});

slide4.addText("2.1. TỔNG QUAN NHẬN BIẾT DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "title",
});

slide4.addText("Hiểu dữ liệu trước khi khai phá dữ liệu", {
  placeholder: "content",
});

slide4.addText(
  "Thuật toán không thể tự khắc phục dữ liệu sai, thiếu hoặc không phù hợp với bài toán.\n" +
  "Trước khi tìm mẫu, dự báo hay phân khúc, cần nhận biết dữ liệu đang có, nguồn gốc, cấu trúc và mức độ sẵn sàng.",
  {
    placeholder: "subContent",
  }
);

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("DỮ LIỆU TRONG KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});

// Top introductory description
const introText = 
  "Dữ liệu là các quan sát được ghi nhận về đối tượng, sự kiện hoặc giao dịch. Trong khai phá dữ liệu, mỗi bản ghi thường mô tả một đơn vị phân tích (ví dụ: khách hàng, khoản vay, hóa đơn, lượt click hoặc giao dịch).";
addText(slide5, introText, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Left: Table of structured data types
slide5.addTable([
  [
    { text: "Dạng dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đặc điểm", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ kinh tế–kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Có cấu trúc\n(structured)", options: { bold: true } },
    { text: "Có lược đồ rõ ràng; lưu thành hàng/cột trong CSDL" },
    { text: "Giao dịch bán hàng, danh mục khách hàng, dư nợ, BC tài chính" }
  ],
  [
    { text: "Bán cấu trúc\n(semi-structured)", options: { bold: true } },
    { text: "Có tổ chức nhất định nhưng không theo bảng cố định" },
    { text: "JSON từ API, XML, log web, sự kiện từ ứng dụng" }
  ],
  [
    { text: "Phi cấu trúc\n(unstructured)", options: { bold: true } },
    { text: "Không có lược đồ bảng; thông tin phong phú nhưng khó phân tích trực tiếp" },
    { text: "Bình luận, email, hợp đồng văn bản, ảnh hóa đơn, ghi âm cuộc gọi" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(3.0),
  w: cmToInch(13.8),
  h: cmToInch(3.4),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Right: Sources list (Bento Card)
const sourcesText = 
  "🔌 Nguồn thu thập phổ biến:\n\n" +
  "• Tệp dữ liệu: CSV, Excel, tệp văn bản\n" +
  "• CSDL tác nghiệp: ERP, CRM, Core Banking, POS\n" +
  "• Kho dữ liệu (Data Warehouse) & Data Marts\n" +
  "• Web, Mạng xã hội, API & Nhật ký truy cập (Web Logs)\n" +
  "• Thiết bị cảm biến, App di động & Luồng dữ liệu thời gian thực";

addText(slide5, sourcesText, {
  x: cmToInch(15.0),
  y: cmToInch(3.0),
  w: cmToInch(9.6),
  h: cmToInch(3.4),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote5 = 
  "💡 Tóm lại: Khai phá dữ liệu có thể thực hiện trên dữ liệu quan hệ, giao dịch, kho dữ liệu, luồng dữ liệu, văn bản, dữ liệu đa phương tiện và dữ liệu mạng; vì vậy, dữ liệu đầu vào không chỉ giới hạn ở bảng tính Excel.";

addText(slide5, summaryNote5, {
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


// ----------------------------------------------------
// Slide 6 — CONTENT
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("TỪ DỮ LIỆU THÔ ĐẾN TRI THỨC", {
  placeholder: "title",
});

// Left Column: KDD process flow
const kddFlowText = 
  "🔄 Chuỗi khám phá tri thức (KDD):\n\n" +
  "   Nguồn dữ liệu\n" +
  "         ↓\n" +
  "   Làm sạch dữ liệu\n" +
  "         ↓\n" +
  "   Tích hợp dữ liệu\n" +
  "         ↓\n" +
  "   Lựa chọn dữ liệu\n" +
  "         ↓\n" +
  "   Biến đổi dữ liệu\n" +
  "         ↓\n" +
  "   Khai phá dữ liệu\n" +
  "         ↓\n" +
  "   Đánh giá mẫu\n" +
  "         ↓\n" +
  "   Tri thức & Hành động";

addText(slide6, kddFlowText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(8.5),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Explanation and real-world example
const detailsText = 
  "📌 Ý nghĩa các bước & Ví dụ thực tế:\n\n" +
  "• Làm sạch: Xử lý giá trị thiếu, lỗi nhập liệu, trùng lặp, nhiễu và mâu thuẫn.\n" +
  "• Tích hợp: Kết hợp dữ liệu đa nguồn (như CRM, POS, app di động).\n" +
  "• Lựa chọn & Biến đổi: Giữ lại biến/dòng phù hợp, chuẩn hóa thang đo/đơn vị.\n" +
  "• Khai phá & Đánh giá: Áp dụng thuật toán tìm mẫu & kiểm chứng nghiệp vụ.\n\n" +
  "💼 Ví dụ: Một doanh nghiệp viễn thông gộp dữ liệu hóa đơn, lịch sử chăm sóc khách hàng và mức sử dụng app thành hồ sơ khách hàng thống nhất. Sau khi làm sạch, tính toán các biến chi tiêu, tần suất sử dụng, doanh nghiệp tiến hành phân khúc khách hàng để thiết kế ưu đãi phù hợp.";

addText(slide6, detailsText, {
  x: cmToInch(9.7),
  y: cmToInch(2.2),
  w: cmToInch(14.9),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightBg },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote6 = 
  "💡 Thông điệp: Khai phá dữ liệu là một quá trình khám phá tri thức gồm làm sạch, tích hợp, lựa chọn, biến đổi dữ liệu, phát hiện và đánh giá mẫu trước khi trình bày tri thức để hỗ trợ hành động.";

addText(slide6, summaryNote6, {
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
