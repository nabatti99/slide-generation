import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 54: SECTION
// ----------------------------------------------------
const slide54Section = pptx.addSlide({ masterName: "SECTION" });
slide54Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide54Section.addText("6.2.2. NỀN TẢNG LÝ THUYẾT CỦA KHAI PHÁ DỮ LIỆU", { placeholder: "title" });
slide54Section.addText("Views on Data Mining Foundations — Về bản chất, Khai phá dữ liệu LÀ gì?", { placeholder: "content" });
slide54Section.addText(
  "\"Một câu hỏi tưởng như triết học nhưng quyết định cách ta làm nghề và đánh giá giá trị mô hình.\"\n\n" +
  "5 Quan điểm bản chất  |  Góc nhìn Kinh tế vi mô  |  CSDL Quy nạp & Khung lý tưởng",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 55: CONTENT (VÌ SAO CẦN NỀN TẢNG LÝ THUYẾT?)
// ----------------------------------------------------
const slide55Content = pptx.addSlide({ masterName: "CONTENT" });
slide55Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide55Content.addText("VÌ SAO CẦN NỀN TẢNG LÝ THUYẾT?", { placeholder: "title" });

addText(
  slide55Content,
  [
    { text: "🤔 Thực trạng & Vai trò của Lý thuyết:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thực trạng (Han & Kamber): ", options: { bold: true } },
    { text: "Nghiên cứu nền tảng lý thuyết KPDL chưa thực sự trưởng thành (yet to mature) — phát triển từ thực hành ('làm trước, lý thuyết sau').\n\n" },
    { text: "• Vai trò thiết yếu: ", options: { bold: true } },
    { text: "Cung cấp khung nhất quán cho phát triển, đánh giá và thực hành công nghệ." }
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
  slide55Content,
  [
    { text: "💡 Giá trị Thực dụng với Nhà quản lý:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• So sánh với Kinh tế học: ", options: { bold: true } },
    { text: "Tương tự các trường phái kinh tế (Cổ điển, Keynes), KPDL có 5 quan điểm trả lời 'Khai phá dữ liệu về bản chất là làm gì?'.\n\n" },
    { text: "• Tiêu chí đánh giá khác nhau: ", options: { bold: true } },
    { text: "Nén được bao nhiêu? Xác suất đúng bao nhiêu? và quan trọng nhất: SINH LỢI BAO NHIÊU?" }
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
  slide55Content,
  "💡 Ý nghĩa: Nền tảng lý thuyết quyết định bộ tiêu chí đánh giá giá trị thực tế của một dự án dữ liệu.",
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

slide55Content.addNotes(
  "Giảng viên nhấn mạnh mục này 'nhẹ ký ức, nặng tư duy' — giúp học viên chọn quan điểm phù hợp khi đánh giá dự án."
);

// ----------------------------------------------------
// Slide 56: CONTENT (NĂM QUAN ĐIỂM LÝ THUYẾT NỀN TẢNG)
// ----------------------------------------------------
const slide56Content = pptx.addSlide({ masterName: "CONTENT" });
slide56Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide56Content.addText("NĂM QUAN ĐIỂM LÝ THUYẾT NỀN TẢNG", { placeholder: "title" });

slide56Content.addTable(
  [
    [
      { text: "Quan điểm Lý thuyết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Khai phá dữ liệu là…", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Từ khóa Kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "1. Rút gọn dữ liệu", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Rút gọn biểu diễn dữ liệu — đổi độ chính xác lấy tốc độ" },
      { text: "SVD/PCA, Wavelet, Histogram, Lấy mẫu" },
    ],
    [
      { text: "2. Nén dữ liệu", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Nén dữ liệu bằng cách mã hóa thành luật, cây, cụm" },
      { text: "Nguyên lý MDL (Minimum Description Length)" },
    ],
    [
      { text: "3. Xác suất — Thống kê", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Khám phá phân phối xác suất đồng thời của các biến" },
      { text: "Mạng Bayes, Mô hình Bayes phân cấp" },
    ],
    [
      { text: "4. Kinh tế vi mô", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Tìm mẫu CHỈ thú vị khi dùng được cho quyết định" },
      { text: "Tính hữu dụng (Utility), Actionable, Bài toán Tối ưu" },
    ],
    [
      { text: "5. CSDL Quy nạp", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Khám phá các mẫu; Tri thức = CSDL chứa dữ liệu + mẫu" },
      { text: "Inductive Databases, Model Registry" },
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
  slide56Content,
  "💡 Thông điệp Han & Kamber: 5 quan điểm không loại trừ nhau — Khám phá mẫu cũng có thể xem là một dạng nén dữ liệu.",
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

slide56Content.addNotes(
  "Giảng viên hỏi lớp trước khi chiếu: Theo anh/chị, các nhà lãnh đạo doanh nghiệp sẽ thích định nghĩa nào nhất?"
);

// ----------------------------------------------------
// Slide 57: CONTENT (BA QUAN ĐIỂM KỸ THUẬT — RÚT GỌN, NÉN, XÁC SUẤT)
// ----------------------------------------------------
const slide57Content = pptx.addSlide({ masterName: "CONTENT" });
slide57Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide57Content.addText("BA QUAN ĐIỂM KỸ THUẬT NỀN TẢNG", { placeholder: "title" });

addText(
  slide57Content,
  [
    { text: "📉 1. Rút gọn & 📦 2. Nén Dữ liệu (MDL):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Quan điểm Rút gọn dữ liệu:\n", options: { bold: true } },
    { text: "  KPDL = Trả lời NHANH & GẦN ĐÚNG trên CSDL khổng lồ (SVD/PCA, lấy mẫu) ➔ Tinh thần của Chương 2.\n\n" },
    { text: "• Quan điểm Nén dữ liệu (MDL):\n", options: { bold: true } },
    { text: "  - Nguyên lý MDL: Mô tả ngắn nhất là tốt nhất (Mô hình + Dữ liệu mã hóa).\n  - Luật tóm tắt 10.000 giao dịch trong 1 dòng ➔ Đó là 'nén'." }
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
  slide57Content,
  [
    { text: "🎲 3. Quan điểm Xác suất — Thống kê:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nội dung: ", options: { bold: true } },
    { text: "KPDL = Ước lượng PHÂN PHỐI XÁC SUẤT ĐỒNG THỜI của các biến ngẫu nhiên.\n\n" },
    { text: "• Kỹ thuật tiêu biểu: ", options: { bold: true } },
    { text: "Mạng Bayes (Bayesian Networks) mô tả phụ thuộc giữa Thu nhập ➔ Nghề nghiệp ➔ Vỡ nợ.\n\n" },
    { text: "• Nối về 6.2.1: ", options: { bold: true } },
    { text: "Đây là góc nhìn 'chính thống' của giới Thống kê toán." }
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
  slide57Content,
  "💡 Điểm chung của 3 quan điểm kỹ thuật: Đều tập trung vào bản thân DỮ LIỆU (làm nhỏ, mã hóa hoặc mô hình hóa nó).",
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

slide57Content.addNotes(
  "Mẹo ghi nhớ: Ba quan điểm đầu nói về DỮ LIỆU — khác với quan điểm 4 nói về TIỀN/SINH LỢI."
);

// ----------------------------------------------------
// Slide 58: CONTENT (QUAN ĐIỂM KINH TẾ VI MÔ — "MẪU CHỈ ĐÁNG GIÁ KHI HÀNH ĐỘNG ĐƯỢC")
// ----------------------------------------------------
const slide58Content = pptx.addSlide({ masterName: "CONTENT" });
slide58Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide58Content.addText("QUAN ĐIỂM KINH TẾ VI MÔ (ACTIONABLE)", { placeholder: "title" });

addText(
  slide58Content,
  [
    { text: "💰 Quan điểm Kinh tế Vi mô (Microeconomic View):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tính hữu dụng (Utility): ", options: { bold: true } },
    { text: "Mẫu chỉ thú vị khi dùng được cho quyết định của doanh nghiệp ➔ Mẫu phải HÀNH ĐỘNG ĐƯỢC (Actionable).\n\n" },
    { text: "• Bài toán Tối ưu: ", options: { bold: true } },
    { text: "KPDL được xem là bài toán tối ưu phi tuyến để tối đa hóa lợi ích/giá trị kinh tế." }
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
  slide58Content,
  [
    { text: "📋 Bộ lọc 3 Câu hỏi ROI cho Dự án Dữ liệu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Phát hiện này gợi ý HÀNH ĐỘNG gì?\n" },
    { text: "2. Hành động đó tạo ra GIÁ TRỊ bao nhiêu (Doanh thu ↑, Chi phí ↓, Rủi ro ↓)?\n" },
    { text: "3. Chi phí triển khai có NHỎ HƠN giá trị đó không?\n\n" },
    { text: "❓ Thảo luận: Mô hình đoán Churn đúng 95% nhưng không có ngân sách giữ chân khách thì giá trị bằng bao nhiêu?" }
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
  slide58Content,
  "💡 Quan điểm kim chỉ nam: Chuyển tiêu chí đánh giá từ kỹ thuật (Accuracy) sang kinh tế (Giá trị kỳ vọng của quyết định).",
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

slide58Content.addNotes(
  "Gợi ý trả lời thảo luận: Giá trị bằng 0 vì không dẫn đến hành động. Gieo mầm cho bài tập BT4 Fraud (chọn ngưỡng theo chi phí)."
);

// ----------------------------------------------------
// Slide 59: CONTENT (KHÁM PHÁ MẪU & CSDL QUY NẠP — VÀ KHUNG LÝ THUYẾT LÝ TƯỞNG)
// ----------------------------------------------------
const slide59Content = pptx.addSlide({ masterName: "CONTENT" });
slide59Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide59Content.addText("CSDL QUY NẠP & NỀN TẢNG LÝ TƯỞNG", { placeholder: "title" });

addText(
  slide59Content,
  [
    { text: "🗄️ Quan điểm 5 — CSDL Quy nạp (Inductive Databases):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tri thức = Dữ liệu + Mẫu:\n", options: { bold: true } },
    { text: "  Khai phá = Khám phá các mẫu lặp lại trong dữ liệu (luật, cây, cụm).\n\n" },
    { text: "• Truy vấn Tri thức:\n", options: { bold: true } },
    { text: "  Người dùng truy vấn cả Dữ liệu lẫn Tri thức ('cho tôi mọi luật có lift > 2').\n  Hiện hình trong các Feature Store, Model Registry ngày nay." }
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
  slide59Content,
  [
    { text: "🌟 Khung Lý thuyết 'Lý tưởng' (Han & Kamber):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "Một lý thuyết lý tưởng cần đạt 4 tiêu chí:\n\n" },
    { text: "1. Mô hình hóa mọi tác vụ (kết hợp, phân lớp, phân cụm).\n" },
    { text: "2. Mang bản chất xác suất.\n" },
    { text: "3. Xử lý đa dạng loại dữ liệu (nối lại 6.1).\n" },
    { text: "4. Phản ánh tính lặp và tương tác.\n\n" },
    { text: "➔ Chưa có lý thuyết nào đạt cả 4 — Lĩnh vực vẫn còn mở!" }
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
  slide59Content,
  "💡 Hiện thực hóa ngày nay: Khái niệm CSDL quy nạp đang hiện hình trong các hệ thống MLOps và Model Registry hiện đại.",
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

slide59Content.addNotes(
  "Giảng viên giải thích về Feature Store và Model Registry trong quy trình MLOps doanh nghiệp."
);

// ----------------------------------------------------
// Slide 60: CONTENT (TÓM TẮT 6.2.2 — NỀN TẢNG LÝ THUYẾT)
// ----------------------------------------------------
const slide60Content = pptx.addSlide({ masterName: "CONTENT" });
slide60Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide60Content.addText("TÓM TẮT 6.2.2 — NỀN TẢNG LÝ THUYẾT", { placeholder: "title" });

addText(
  slide60Content,
  [
    { text: "📌 Tổng kết 5 Quan điểm Lý thuyết:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 5 Quan điểm: ", options: { bold: true } },
    { text: "Rút gọn · Nén (MDL) · Xác suất · Kinh tế vi mô · Khám phá mẫu & CSDL quy nạp.\n\n" },
    { text: "• Kim chỉ nam cho Nhà kinh tế: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Quan điểm Kinh tế vi mô — Mẫu chỉ có giá trị khi HÀNH ĐỘNG ĐƯỢC và SINH LỢI.\n\n" },
    { text: "• Bộ lọc 3 câu hỏi: Hành động gì? — Giá trị bao nhiêu? — Chi phí có nhỏ hơn giá trị?" }
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
  slide60Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.2.3:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Lý thuyết lý tưởng: ", options: { bold: true } },
    { text: "Vẫn là một bài toán nghiên cứu mở.\n\n" },
    { text: "• Tiếp theo (Mục 6.2.3):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "  - Khi 'thuật toán' mạnh nhất lại chính là đôi mắt con người: Khai phá dữ liệu Trực quan và Âm thanh (Visual Data Mining)." }
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
  slide60Content,
  "💡 Bước tiếp theo: Chuyển sang 6.2.3 — Khám phá phương pháp Khai phá dữ liệu trực quan (Visual Data Mining).",
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

slide60Content.addNotes(
  "Tóm tắt 6.2.2 và dẫn dắt học viên chuyển sang mục 6.2.3 Khai phá dữ liệu trực quan."
);
