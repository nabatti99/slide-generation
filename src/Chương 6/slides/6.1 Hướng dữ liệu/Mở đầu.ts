import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 6: SECTION
// ----------------------------------------------------
const slide6Section = pptx.addSlide({ masterName: "SECTION" });
slide6Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide6Section.addText("6.1. HƯỚNG DỮ LIỆU", { placeholder: "title" });
slide6Section.addText("Khai phá các loại dữ liệu phức tạp (Mining Complex Data Types)", { placeholder: "content" });
slide6Section.addText(
  "\"We are data rich, but information poor\" — phần lớn dữ liệu giá trị nhất KHÔNG nằm trong bảng.\n\n" +
  "6.1.1 Khai phá chuỗi  |  6.1.2 Đồ thị & Mạng  |  6.1.3 Khai phá văn bản",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 7: CONTENT (HƯỚNG DỮ LIỆU LÀ GÌ?)
// ----------------------------------------------------
const slide7Content = pptx.addSlide({ masterName: "CONTENT" });
slide7Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide7Content.addText("HƯỚNG DỮ LIỆU LÀ GÌ?", { placeholder: "title" });

addText(
  slide7Content,
  [
    { text: "💡 Khái niệm & Động lực phát triển:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khái niệm: ", options: { bold: true } },
    { text: "Phát triển kỹ thuật khai phá theo đặc thù của từng loại dữ liệu, không gò ép dữ liệu vào dạng bảng quan hệ.\n\n" },
    { text: "• Động lực kinh tế số: ", options: { bold: true } },
    { text: "Giá trị dữ liệu nằm ở chuỗi giao dịch thời gian, mạng liên kết khách hàng - đối tác, và văn bản phi cấu trúc từ MXH, review." }
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
  slide7Content,
  [
    { text: "⭐ Nguyên tắc vàng trong KPDL phức tạp:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Biến đổi dữ liệu phức tạp ", options: { bold: true } },
    { text: "về dạng biểu diễn đặc trưng số (vector/chỉ số/ma trận).\n\n" },
    { text: "2. Tái sử dụng linh hoạt ", options: { bold: true } },
    { text: "các kỹ thuật đã học ở Ch.3–5 (Phân lớp, Phân cụm, Luật kết hợp).\n\n" },
    { text: "→ Không cần phát minh lại thuật toán hoàn toàn mới!" }
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
  slide7Content,
  "💡 Quy trình chuẩn: Dữ liệu phức tạp ➔ Biểu diễn đặc trưng số ➔ Tái sử dụng mô hình Ch.3–5.",
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

slide7Content.addNotes("Giảng viên nhấn mạnh nguyên tắc vàng: Biến đổi dữ liệu thành dạng số phù hợp rồi áp dụng thuật toán sẵn có.");

// ----------------------------------------------------
// Slide 8: CONTENT (SO SÁNH 3 LOẠI DỮ LIỆU PHỨC TẠP)
// ----------------------------------------------------
const slide8Content = pptx.addSlide({ masterName: "CONTENT" });
slide8Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide8Content.addText("SO SÁNH 3 LOẠI DỮ LIỆU PHỨC TẠP", { placeholder: "title" });

slide8Content.addTable(
  [
    [
      { text: "Loại dữ liệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Đặc điểm cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ kinh tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bài toán & Công cụ tiêu biểu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Chuỗi (6.1.1)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Thứ tự thời gian/sự kiện quan trọng" },
      { text: "Giá VN-Index, chuỗi mua Shopee" },
      { text: "Dự báo, Mẫu tuần tự — statsmodels, pmdarima" },
    ],
    [
      { text: "Đồ thị / Mạng (6.1.2)", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Quan hệ / Liên kết giữa đối tượng" },
      { text: "Sở hữu chéo ngân hàng, mạng KOL" },
      { text: "Centrality, Cộng đồng — networkx" },
    ],
    [
      { text: "Văn bản & Khác (6.1.3)", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Dữ liệu phi cấu trúc" },
      { text: "Review Tiki/Shopee, tin tài chính" },
      { text: "Phân tích cảm xúc, TF-IDF — underthesea, sklearn" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.5),
    fontSize: 10.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide8Content,
  "💡 Khung tổng quan: Bảng so sánh 3 loại dữ liệu phức tạp chính sẽ được nghiên cứu chi tiết trong mục 6.1.",
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

slide8Content.addNotes("Đây là slide xương sống của mục 6.1. Giảng viên nên nhấn mạnh 3 loại dữ liệu và công cụ tương ứng.");

// ----------------------------------------------------
// Slide 9: CONTENT (LỘ TRÌNH MỤC 6.1)
// ----------------------------------------------------
const slide9Content = pptx.addSlide({ masterName: "CONTENT" });
slide9Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide9Content.addText("LỘ TRÌNH MỤC 6.1 — HƯỚNG DỮ LIỆU", { placeholder: "title" });

addText(
  slide9Content,
  [
    { text: "🗺️ Lộ trình giải quyết 3 Nguồn dữ liệu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 6.1.1 Dữ liệu chuỗi: ", options: { bold: true } },
    { text: "Giải quyết Nguồn 1 (Dự báo giá VN-Index) — Demo Python: ARIMA.\n\n" },
    { text: "• 6.1.2 Đồ thị & Mạng: ", options: { bold: true } },
    { text: "Giải quyết Nguồn 2 (Mạng sở hữu chéo) — Demo Python: NetworkX.\n\n" },
    { text: "• 6.1.3 Văn bản & loại khác: ", options: { bold: true } },
    { text: "Giải quyết Nguồn 3 (Sentiment review) — Demo Python: TF-IDF & Phân loại." }
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
  slide9Content,
  [
    { text: "📐 Cấu trúc bài học từng mục con:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Khái niệm & Bài toán cốt lõi\n" },
    { text: "2. Kỹ thuật & Độ đo chuyên biệt\n" },
    { text: "3. Ví dụ thực tế tại Việt Nam\n" },
    { text: "4. Bài tập thực hành & Thảo luận nhóm\n\n" },
    { text: "→ Thiết kế nhất quán theo hướng hành dụng và liên hệ thực tiễn." }
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
  slide9Content,
  "💡 Định hướng: Mỗi mục học sẽ liên hệ trực tiếp với 1 nguồn dữ liệu trong tình huống mở đầu để giải quyết triệt để.",
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

slide9Content.addNotes("Giảng viên nối lộ trình học với tình huống mở đầu ở Slide 3 để tạo sự nhất quán.");
