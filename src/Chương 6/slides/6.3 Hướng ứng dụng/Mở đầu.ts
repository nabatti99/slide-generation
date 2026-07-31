import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 76: SECTION
// ----------------------------------------------------
const slide76Section = pptx.addSlide({ masterName: "SECTION" });
slide76Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide76Section.addText("6.3. HƯỚNG ỨNG DỤNG", { placeholder: "title" });
slide76Section.addText("Khai phá dữ liệu trong các lĩnh vực (Data Mining Applications)", { placeholder: "content" });
slide76Section.addText(
  "\"6.1 hỏi khai phá CÁI GÌ?, 6.2 hỏi khai phá BẰNG GÌ? — 6.3 trả lời câu hỏi cuối cùng: khai phá CHO AI?\"\n\n" +
  "Tài chính Ngân hàng  |  Bán lẻ & Viễn thông  |  Hệ gợi ý  |  Xã hội & Đạo đức",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 77: CONTENT (HƯỚNG ỨNG DỤNG LÀ GÌ? — KHOẢNG CÁCH TỪ NGUYÊN LÝ ĐẾN CÔNG CỤ NGÀNH)
// ----------------------------------------------------
const slide77Content = pptx.addSlide({ masterName: "CONTENT" });
slide77Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide77Content.addText("HƯỚNG ỨNG DỤNG VÀ THÁCH THỨC NGÀNH", { placeholder: "title" });

addText(
  slide77Content,
  [
    { text: "🏢 Khoảng cách từ Nguyên lý đến Công cụ Ngành:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nhận định (Han & Kamber): ", options: { bold: true } },
    { text: "Tồn tại khoảng cách lớn giữa nguyên lý tổng quát và công cụ khai phá hiệu quả cho từng ngành cụ thể.\n\n" },
    { text: "• Không có thuật toán vạn năng: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Mỗi ngành đòi hỏi cách tiếp cận riêng biệt tùy theo bản chất dữ liệu." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide77Content,
  [
    { text: "🎯 3 Đòi hỏi Đặc thù & Ý nghĩa Học tập:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Dữ liệu đặc thù: ", options: { bold: true } },
    { text: "Giao dịch tài chính ≠ Log viễn thông ≠ Giỏ hàng siêu thị.\n\n" },
    { text: "• Ràng buộc đặc thù: ", options: { bold: true } },
    { text: "Pháp lý ngân hàng, Thời gian thực an ninh, Quy mô TMĐT.\n\n" },
    { text: "• Ý nghĩa với Học viên: ", options: { bold: true } },
    { text: "Mục 6.3 là 'phòng trưng bày' cách lắp ráp kỹ thuật 6.1 & 6.2 vào thực tiễn ngành." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide77Content,
  "💡 Mục tiêu: Xem các kỹ thuật của 6.1 và 6.2 được lắp ráp thành giải pháp thực tế cho từng ngành kinh doanh.",
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

slide77Content.addNotes(
  "Giảng viên hỏi mở đầu: Anh/chị đang làm ngành nào — Ngân hàng, Bán lẻ, Viễn thông, hay Cơ quan nhà nước?"
);

// ----------------------------------------------------
// Slide 78: CONTENT (LỘ TRÌNH MỤC 6.3 — SÁU TRẠM DỪNG)
// ----------------------------------------------------
const slide78Content = pptx.addSlide({ masterName: "CONTENT" });
slide78Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide78Content.addText("LỘ TRÌNH MỤC 6.3 — SÁU TRẠM DỪNG", { placeholder: "title" });

addText(
  slide78Content,
  [
    { text: "📊 Trạm 6.3.1, 6.3.2 & 6.3.3:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 6.3.1 Phân tích Tài chính: ", options: { bold: true } },
    { text: "Chấm điểm tín dụng, chống rửa tiền, phân khúc ngân hàng (Trọng tâm).\n\n" },
    { text: "• 6.3.2 Bán lẻ & Viễn thông: ", options: { bold: true } },
    { text: "Giỏ hàng, hiệu quả khuyến mãi, dự đoán Churn (Trọng tâm).\n\n" },
    { text: "• 6.3.3 Khoa học & Kỹ thuật: ", options: { bold: true } },
    { text: "Tin sinh học, thiên văn, giám sát công trình (Mở rộng)." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide78Content,
  [
    { text: "🛡️ Trạm 6.3.4, 6.3.5 & 6.3.6:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 6.3.4 An ninh mạng: ", options: { bold: true } },
    { text: "Phát hiện & ngăn chặn xâm nhập bất thường.\n\n" },
    { text: "• 6.3.5 Hệ thống Gợi ý: ", options: { bold: true } },
    { text: "Động cơ doanh thu Shopee, Netflix, Amazon (Trọng tâm).\n\n" },
    { text: "• 6.3.6 Xã hội & Đạo đức: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Bảo vệ quyền riêng tư & Đạo đức dữ liệu (Bắt buộc)." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide78Content,
  "💡 Lộ trình: 6 trạm dừng bao phủ các ngành kinh tế trọng điểm và trách nhiệm đạo đức của nhà quản lý.",
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

slide78Content.addNotes(
  "Giảng viên giới thiệu bản đồ 6 trạm dừng, nhấn mạnh 3 trạm trọng tâm thi (6.3.1, 6.3.2, 6.3.5) và cờ đỏ 6.3.6."
);

// ----------------------------------------------------
// Slide 79: CONTENT (CÂU HỎI: MỖI NGÀNH MỘT CHI PHÍ GIÁ TRỊ)
// ----------------------------------------------------
const slide79Content = pptx.addSlide({ masterName: "CONTENT" });
slide79Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide79Content.addText("CÂU HỎI: MỖI NGÀNH MỘT CHI PHÍ GIÁ TRỊ", { placeholder: "title" });

addText(
  slide79Content,
  [
    { text: "🔍 So sánh Bài toán Phân lớp (Ch.4) ở 3 Ngành:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Ngân hàng (Duyệt vay): ", options: { bold: true } },
    { text: "Sai là mất vốn thật ➔ Đòi giải trình minh bạch, ngưỡng chặn chặt chẽ.\n\n" },
    { text: "• TMĐT (Gợi ý sản phẩm): ", options: { bold: true } },
    { text: "Sai chỉ tốn 1 cú click ➔ Ưu tiên tốc độ, chấp nhận mô hình hộp đen.\n\n" },
    { text: "• An ninh mạng (Chặn tấn công): ", options: { bold: true } },
    { text: "Đối thủ liên tục đổi chiêu ➔ Phải cập nhật thời gian thực trên dữ liệu lệch." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide79Content,
  [
    { text: "⚖️ 3 Yếu tố Quyết định 'Số phận' Mô hình:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Chi phí của sai lầm (Cost of Errors).\n" },
    { text: "2. Yêu cầu về khả năng giải trình (Explainability).\n" },
    { text: "3. Tốc độ thay đổi của môi trường dữ liệu.\n\n" },
    { text: "❓ Thảo luận: Trong ngành của anh/chị, một dự đoán SAI đắt nhất là gì — và điều đó ảnh hưởng thế nào đến cách chọn mô hình?" }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide79Content,
  "💡 Ma trận Chi phí (Cost Matrix): Ngành nào chi phí sai lầm bất đối xứng càng lớn thì càng phải tối ưu theo Chi phí kỳ vọng!",
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

slide79Content.addNotes(
  "Dẫn dắt về ma trận chi phí (cost matrix) — tư duy kinh tế vi mô (6.2.2) hiện hình lần nữa trong quyết định chọn mô hình."
);
