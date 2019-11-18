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
slide1.addText("1.4. ỨNG DỤNG CỦA KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});
slide1.addText("Dữ liệu chỉ thực sự có giá trị khi giúp tổ chức đưa ra quyết định tốt hơn. Khai phá dữ liệu phát hiện tri thức hỗ trợ dự báo, lựa chọn hành động và tối ưu kết quả.", {
  placeholder: "content",
});
slide1.addText("Câu hỏi dẫn nhập:\n“Một doanh nghiệp có hàng triệu giao dịch nhưng liệu đã thực sự biết khách hàng nào sắp rời bỏ hay nên bán kèm sản phẩm nào?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT: Bản đồ ứng dụng
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("BẢN ĐỒ ỨNG DỤNG: TỪ DỮ LIỆU ĐẾN QUYẾT ĐỊNH", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Hành trình chuyển hóa từ dữ liệu thô qua khai phá dữ liệu thành tri thức và hành động cụ thể để tạo ra kết quả thực tế.", {
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

// Left table: Components
slide2.addTable([
  [
    { text: "Thành phần chuỗi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nội dung minh họa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Dữ liệu đầu vào" }, { text: "Hóa đơn bán hàng, lịch sử giao dịch, hồ sơ CRM, dữ liệu ứng dụng." }],
  [{ text: "2. Khai phá dữ liệu" }, { text: "Phân lớp, phân cụm, luật kết hợp, hồi quy, phát hiện bất thường." }],
  [{ text: "3. Tri thức phát hiện", options: { bold: true, color: DUE_COLORS.green } }, { text: "Khách hàng có nguy cơ rời bỏ; tổ hợp sản phẩm mua kèm; lỗi giao dịch." }],
  [{ text: "4. Hành động & Kết quả", options: { bold: true } }, { text: "Ưu đãi giữ chân, gợi ý giỏ hàng ➔ Tăng doanh số, giảm rủi ro." }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Contrast
slide2.addTable([
  [
    { text: "Chỉ đơn thuần có Dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Biết Hành động dựa trên dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Có lịch sử hóa đơn bán lẻ" }, { text: "Biết chính xác khách nào sắp ngừng mua." }],
  [{ text: "Có dữ liệu giỏ hàng trên app" }, { text: "Biết nên gợi ý sản phẩm bán kèm nào." }],
  [{ text: "Có lịch sử trả nợ của khách hàng" }, { text: "Biết hồ sơ vay nào cần thẩm định kỹ." }],
  [{ text: "Có dữ liệu doanh số quá khứ" }, { text: "Biết cần đặt bao nhiêu hàng tồn kho kỳ tới." }]
], {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide2, "💡 Dữ liệu không tự tạo ra giá trị; giá trị thực tế đến từ khả năng biến dữ liệu thành tri thức có thể hành động.", {
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

slide2.addNotes("Nội dung bổ sung:\nKhai phá dữ liệu không chỉ nhằm tạo ra mô hình, biểu đồ hay bảng chỉ số. Mục tiêu cuối cùng là phát hiện tri thức từ dữ liệu để hỗ trợ tổ chức dự báo, lựa chọn hành động và cải thiện kết quả hoạt động.");

// ----------------------------------------------------
// Slide 3 — CONTENT: Khung đọc ứng dụng
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("5 CÂU HỎI THẨM ĐỊNH MỘT ỨNG DỤNG", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Khung phân tích 5 câu hỏi giúp định hình thiết kế và đánh giá hiệu quả cho bất kỳ dự án khai phá dữ liệu nào.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: 5 Questions
slide3.addTable([
  [
    { text: "5 Câu hỏi chẩn đoán dự án", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ trong bán lẻ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Vấn đề nghiệp vụ?" }, { text: "Tổ chức muốn cải thiện điều gì?" }, { text: "Làm sao giảm tỷ lệ khách hàng ngừng mua?" }],
  [{ text: "2. Dữ liệu cần có?" }, { text: "Nguồn dữ liệu nào phản ánh bài toán?" }, { text: "Hóa đơn, CRM, app, phản hồi khuyến mãi." }],
  [{ text: "3. Nhiệm vụ khai phá?" }, { text: "Dự báo, phân nhóm hay tìm liên hệ?" }, { text: "Phân lớp (rời bỏ / không rời bỏ)." }],
  [{ text: "4. Kết quả đầu ra?" }, { text: "Kỹ thuật trả về thông tin gì?" }, { text: "Điểm xác suất rủi ro rời bỏ của từng khách." }],
  [{ text: "5. Hành động gì?" }, { text: "Ai nhận kết quả và làm gì tiếp theo?" }, { text: "Gửi voucher giữ chân phù hợp." }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Key warnings
addText(slide3, "⚠️ NGUYÊN TẮC THIẾT KẾ DỰ ÁN\n\n• Tuyệt đối không bắt đầu dự án bằng câu hỏi: “Thuật toán nào tốt nhất?” hay “Nên dùng mô hình AI nào?”.\n• Luôn bắt đầu từ câu hỏi: “Tổ chức cần đưa ra quyết định nào tốt hơn để tối ưu hoạt động?”.\n• Vai trò mô hình: Mô hình chỉ cung cấp thông tin và đề xuất hỗ trợ ra quyết định; nó không mặc nhiên thay thế hoàn toàn quyết định quản trị của con người.", {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide3, "💡 Hãy bắt đầu từ quyết định nghiệp vụ cần hỗ trợ, tuyệt đối không bắt đầu từ thuật toán mà bạn muốn sử dụng.", {
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

slide3.addNotes("Nội dung bổ sung:\nMô hình cung cấp thông tin hỗ trợ quyết định; không mặc nhiên thay thế quyết định quản trị. Bắt đầu bằng câu hỏi: “Tổ chức cần đưa ra quyết định nào tốt hơn?” thay vì “Thuật toán nào tốt nhất?”");
