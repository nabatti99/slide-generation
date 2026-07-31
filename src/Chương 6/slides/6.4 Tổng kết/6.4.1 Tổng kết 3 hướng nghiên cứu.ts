import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 123: SECTION
// ----------------------------------------------------
const slide123Section = pptx.addSlide({ masterName: "SECTION" });
slide123Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide123Section.addText("6.4.1. TỔNG KẾT BA HƯỚNG NGHIÊN CỨU", { placeholder: "title" });
slide123Section.addText("Nhìn lại toàn bộ Chương 6 qua một khung tư duy duy nhất", { placeholder: "content" });
slide123Section.addText(
  "\"Ba hướng nghiên cứu không tách rời mà là ba lát cắt của cùng một bài toán khai phá dữ liệu thực tế.\"\n\n" +
  "Khung 3 Câu hỏi  |  Bản đồ Liên kết  |  3 Thông điệp Cốt lõi",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 124: CONTENT (KHUNG TỔNG HỢP 3 HƯỚNG NGHIÊN CỨU)
// ----------------------------------------------------
const slide124Content = pptx.addSlide({ masterName: "CONTENT" });
slide124Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide124Content.addText("KHUNG TỔNG HỢP 3 HƯỚNG NGHIÊN CỨU", { placeholder: "title" });

addText(
  slide124Content,
  [
    { text: "🧩 3 Hướng Nghiên cứu Đan xen:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 6.1 Hướng Dữ liệu (CÁI GÌ?):\n", options: { bold: true } },
    { text: "  Vượt ra ngoài dữ liệu bảng ➔ Chuỗi, Đồ thị/Mạng, Văn bản/Không gian.\n\n" },
    { text: "• 6.2 Hướng Kỹ thuật (BẰNG GÌ?):\n", options: { bold: true } },
    { text: "  Mở rộng phương pháp ➔ Thống kê, Lý thuyết, Trực quan, Học máy / Học sâu.\n\n" },
    { text: "• 6.3 Hướng Ứng dụng (CHO AI?):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  May đo theo ngành ➔ Tài chính, Bán lẻ/Viễn thông, An ninh, Gợi ý, Xã hội." }
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
  slide124Content,
  [
    { text: "🎯 Điểm Giao nhau Thực tế:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Không độc lập tách rời: ", options: { bold: true } },
    { text: "Mỗi bài toán kinh doanh thực tế (6.3) luôn đòi hỏi chọn đúng Loại dữ liệu (6.1) và Kỹ thuật phù hợp (6.2).\n\n" },
    { text: "• Giao điểm 3 vòng tròn: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Đó chính là LỜI GIẢI DỮ LIỆU ĐÁNG GIÁ cho doanh nghiệp." }
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
  slide124Content,
  "💡 Thông điệp chốt: Ba hướng nghiên cứu là ba lát cắt bổ trợ cho nhau của cùng một quy trình Khai phá tri thức.",
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

slide124Content.addNotes(
  "Giảng viên nhấn mạnh 3 hướng là 3 lát cắt của cùng một bài toán KPDL thực tế."
);

// ----------------------------------------------------
// Slide 125: CONTENT (BẢN ĐỒ LIÊN KẾT: ỨNG DỤNG ↔ KỸ THUẬT)
// ----------------------------------------------------
const slide125Content = pptx.addSlide({ masterName: "CONTENT" });
slide125Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide125Content.addText("BẢN ĐỒ LIÊN KẾT: ỨNG DỤNG ↔ KỸ THUẬT", { placeholder: "title" });

slide125Content.addTable(
  [
    [
      { text: "Ứng dụng Ngành (6.3)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Loại Dữ liệu sử dụng (6.1)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Kỹ thuật Khai phá sử dụng (6.2)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Chấm điểm tín dụng (Tài chính)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dữ liệu bảng, chuỗi giao dịch" },
      { text: "Hồi quy Logistic, Cây quyết định (6.2.1)" },
    ],
    [
      { text: "Phát hiện Gian lận / Rửa tiền", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Mạng giao dịch (Đồ thị), Chuỗi" },
      { text: "Graph Mining (6.1.2), Outlier Detection" },
    ],
    [
      { text: "Gợi ý Sản phẩm & Churn Bán lẻ", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Chuỗi hành vi mua, Ma trận Utility" },
      { text: "Luật kết hợp Ch.5, Collaborative Filtering" },
    ],
    [
      { text: "Dự đoán Churn Viễn thông", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Dữ liệu bảng cước, Chuỗi cuộc gọi" },
      { text: "Phân lớp (Ch.3), Survival Analysis (6.2.1)" },
    ],
    [
      { text: "Phát hiện Xâm nhập An ninh", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Chuỗi log, Mạng lưu lượng" },
      { text: "Phân lớp bất thường, Isolation Forest" },
    ],
    [
      { text: "Phân tích Tâm lý Thị trường", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Văn bản (review, báo chí, MXH)" },
      { text: "TF-IDF, Sentiment Analysis, PhoBERT" },
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
  slide125Content,
  "💡 Đóng trọn vẹn tình huống mở đầu: Công ty Chứng khoán ứng dụng trọn vẹn Chuỗi (6.1.1) + Mạng (6.1.2) + Sentiment (6.1.3).",
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

slide125Content.addNotes(
  "Bảng tổng hợp này là lời giải trọn vẹn cho tình huống mở đầu chương (công ty chứng khoán) và là bản đồ ôn tập tốt nhất."
);

// ----------------------------------------------------
// Slide 126: CONTENT (BA THÔNG ĐIỆP CỐT LÕI CHƯƠNG 6)
// ----------------------------------------------------
const slide126Content = pptx.addSlide({ masterName: "CONTENT" });
slide126Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide126Content.addText("BA THÔNG ĐIỆP CỐT LÕI CHƯƠNG 6", { placeholder: "title" });

addText(
  slide126Content,
  [
    { text: "🔑 3 Thông điệp Cốt lõi của Chương 6:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Nguyên tắc vàng biến đổi về số: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Mọi dữ liệu phức tạp (chuỗi, mạng, văn bản) đều biến đổi thành vector số để tái dùng kỹ thuật Ch.3–5.\n\n" },
    { text: "2. Kỹ thuật cũ không mất đi, chỉ được mở rộng: ", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Thống kê & Hồi quy vẫn là nền tảng; Học sâu & AI hiện đại bổ sung chứ không thay thế quy trình CRISP-DM.\n\n" },
    { text: "3. Công nghệ đi trước, Trách nhiệm phải theo kịp: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Năng lực dự báo càng mạnh thì yêu cầu Đạo đức dữ liệu & Pháp lý càng cấp thiết." }
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
  slide126Content,
  [
    { text: "🎓 Vai trò của Nhà quản lý Tương lai:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "Học viên Thạc sĩ Kinh tế cần thành thạo 3 việc:\n\n" },
    { text: "• 1. Đặt đúng bài toán nghiệp vụ.\n" },
    { text: "• 2. Chọn đúng kỹ thuật khai phá phù hợp.\n" },
    { text: "• 3. Đánh giá đúng Rủi ro & Đạo đức mô hình." }
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
  slide126Content,
  "💡 Thông điệp đúc kết: Thành công của dự án dữ liệu đến từ sự kết hợp giữa Năng lực Kỹ thuật và Tư duy Quản trị.",
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

slide126Content.addNotes(
  "Giảng viên đọc chậm và đúc kết 3 thông điệp cốt lõi của Chương 6 cho học viên."
);
