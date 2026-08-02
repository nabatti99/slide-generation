import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 98: SECTION
// ----------------------------------------------------
const slide98Section = pptx.addSlide({ masterName: "SECTION" });
slide98Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide98Section, "title", "6.3.3. KHAI PHÁ DỮ LIỆU TRONG KHOA HỌC VÀ KỸ THUẬT");
addSectionText(slide98Section, "content", "Science & Engineering Data Mining — Mô thức thứ tư của nghiên cứu khoa học");
addSectionText(slide98Section, "subContent", "\"Khoa học hiện đại đã bước sang 'mô thức thứ tư': Sau thực nghiệm, lý thuyết và mô phỏng — giờ là KHÁM PHÁ TỪ DỮ LIỆU.\"\n\n" +
  "Tin sinh học  |  Thiên văn & Khí hậu  |  Bảo trì Dự đoán (Predictive Maintenance)");

// ----------------------------------------------------
// Slide 99: CONTENT (KHOA HỌC THÂM DỤNG DỮ LIỆU ĐẶC THÙ)
// ----------------------------------------------------
const slide99Content = pptx.addSlide({ masterName: "CONTENT" });
slide99Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide99Content.addText("KHOA HỌC THÂM DỤNG DỮ LIỆU", { placeholder: "title" });

addText(
  slide99Content,
  [
    { text: "🔬 Bối cảnh Khoa học Thâm dụng Dữ liệu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bùng nổ dữ liệu: ", options: { bold: true } },
    { text: "Kính thiên văn thu Terabyte mỗi đêm; giải trình tự Gen giảm giá triệu lần; vệ tinh quét toàn cầu liên tục.\n\n" },
    { text: "• Mô thức thứ tư (The 4th Paradigm):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Thực nghiệm ➔ Lý thuyết ➔ Mô phỏng ➔ Khám phá từ Dữ liệu." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide99Content,
  [
    { text: "⚠️ 4 Thách thức Đặc thù (Han & Kamber):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "1. Tích hợp nguồn không đồng nhất (đa độ phân giải).\n" },
    { text: "2. Dữ liệu phức tạp 6.1 (chuỗi, đồ thị, không gian, ảnh).\n" },
    { text: "3. Tri thức miền (Domain knowledge) BẮT BUỘC hợp lý về vật lý/sinh học.\n" },
    { text: "4. Trực quan hóa (6.2.3) giữ vai trò trung tâm khám phá." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
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
  slide99Content,
  "💡 Điểm nối kinh tế: Kỹ thuật thử lửa ở quy mô lớn nhất sẽ chảy ngược về ứng dụng kinh doanh (thị giác soi lỗi sản phẩm).",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide99Content.addNotes(
  "Mục này không thi sâu — mục tiêu là mở cửa sổ tri thức cho học viên thấy bộ công cụ khai phá trên miền dữ liệu khoa học."
);

// ----------------------------------------------------
// Slide 100: CONTENT (BỐN MIỀN ỨNG DỤNG TIÊU BIỂU)
// ----------------------------------------------------
const slide100Content = pptx.addSlide({ masterName: "CONTENT" });
slide100Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide100Content.addText("BỐN MIỀN ỨNG DỤNG TIÊU BIỂU", { placeholder: "title" });

addTable(slide100Content, 
  [
    [
      { text: "Miền Khoa học", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dữ liệu đặc thù", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Bài toán Khai phá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Kỹ thuật đã học", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Tin sinh học (Bioinformatics)", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Chuỗi DNA/protein, mạng tương tác gen" },
      { text: "Tìm gen liên quan bệnh, so khớp chuỗi" },
      { text: "Chuỗi (6.1.1), Đồ thị (6.1.2)" },
    ],
    [
      { text: "Thiên văn học (Astronomy)", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Ảnh khảo sát bầu trời, tín hiệu" },
      { text: "Phân loại thiên thể, phát hiện vật thể lạ" },
      { text: "CNN (6.2.4), Ngoại lai Ch.4" },
    ],
    [
      { text: "Khí hậu & Môi trường", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Chuỗi đo đạc + Bản đồ vệ tinh" },
      { text: "Dự báo thời tiết cực đoan, xu hướng" },
      { text: "Chuỗi (6.1.1), Không gian (6.1.3)" },
    ],
    [
      { text: "Kỹ thuật & Công nghiệp", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Cảm biến máy móc, nhật ký vận hành" },
      { text: "Bảo trì dự đoán (Predictive Maintenance)" },
      { text: "Survival (6.2.1), Churn (6.3.2)" },
    ],
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: 0, // hug content
    fontSize: 11.5,
    border: { pt: 1, color: "CCCCCC" },
  }
);

addText(
  slide100Content,
  "💡 Điểm chạm kinh doanh: Bài toán 'Bảo trì dự đoán' có bản chất giống hệt bài toán Dự đoán Churn (Máy móc rời bỏ = Khách rời bỏ).",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide100Content.addNotes(
  "Giảng viên giải thích sự đồng dạng giữa Churn khách hàng và Bảo trì dự đoán máy móc."
);

// ----------------------------------------------------
// Slide 101: CONTENT (KHAI PHÁ DỮ LIỆU TRONG KÝ THUẬT PHẦN MỀM VÀ GIÁM SÁT CÔNG TRÌNH)
// ----------------------------------------------------
const slide101Content = pptx.addSlide({ masterName: "CONTENT" });
slide101Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide101Content.addText("KỸ THUẬT PHẦN MỀM & GIÁM SÁT CÔNG TRÌNH", { placeholder: "title" });

addText(
  slide101Content,
  [
    { text: "💻 Kỹ thuật Phần mềm (Software Mining):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khai phá Mã nguồn & Git log: ", options: { bold: true } },
    { text: "Dự đoán mô-đun phần mềm dễ phát sinh lỗi ➔ Tập trung kiểm thử.\n\n" },
    { text: "• Ứng dụng hiện đại: ", options: { bold: true } },
    { text: "Nền tảng cho các trợ lý rà lỗi và gợi ý code tự động (GitHub Copilot)." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide101Content,
  [
    { text: "🏗️ Giám sát Sức khỏe Công trình (SHM):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Chuỗi Cảm biến Cầu đường / Đập thủy điện: ", options: { bold: true } },
    { text: "Gắn cảm biến độ nghiêng, rung lắc ➔ Phát hiện bất thường (Outlier 6.3.4) trước khi hư hỏng kết cấu.\n\n" },
    { text: "• Góc nhìn Kinh tế: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Đầu tư dựa trên Giá trị kỳ vọng của rủi ro tránh được (6.2.2)." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
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
  slide101Content,
  "💡 Ví dụ thực tế: Chuyển từ bảo trì theo LỊCH CỐ ĐỊNH sang bảo trì theo TÌNH TRẠNG giúp hàng không/đường sắt tiết kiệm chi phí kỷ lục.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide101Content.addNotes(
  "Giảng viên liên hệ bảo trì theo tình trạng (condition-based maintenance) trong ngành hàng không và đường sắt."
);

// ----------------------------------------------------
// Slide 102: CONTENT (ỨNG DỤNG KHOA HỌC & KỸ THUẬT)
// ----------------------------------------------------
const slide102Content = pptx.addSlide({ masterName: "CONTENT" });
slide102Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide102Content.addText("ỨNG DỤNG KHOA HỌC & KỸ THUẬT", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide102Content,
  [
    { text: "🌾 Nông nghiệp Chính xác (ĐBSCL):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Ảnh vệ tinh + Cảm biến đồng ruộng theo dõi sâu bệnh, dự báo năng suất lúa; drone phun thuốc theo bản đồ phân tích." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 2: Top-Right (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide102Content,
  [
    { text: "⚡ Dự báo Phụ tải Điện (EVN):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Dự báo phụ tải (Chuỗi 6.1.1) cho EVN & công suất điện mặt trời/gió theo dữ liệu thời tiết ➔ Vận hành thị trường điện." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 3: Bottom-Left (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide102Content,
  [
    { text: "🏭 Sản xuất FDI (CNN Soi lỗi):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Nhà máy điện tử/ô tô tại VN dùng Thị giác máy (CNN 6.2.4) soi phế phẩm trên dây chuyền & bảo trì robot." }
  ],
  {
    x: cmToInch(0.8),
    y: 0, // trôi dưới thẻ cùng cột
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightBg },
    line: { color: DUE_COLORS.blue, width: 1 },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Card 4: Bottom-Right (Y = 5.8 cm, H = 3.5 cm)
addText(
  slide102Content,
  [
    { text: "🧬 Y sinh & Quan trắc Môi trường:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Giải trình tự Gen tại Viện nghiên cứu VN; Trạm quan trắc không khí đô thị lớn cảnh báo ô nhiễm theo chuỗi + không gian." }
  ],
  {
    x: cmToInch(13.1),
    y: 0, // trôi dưới thẻ cùng cột
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 13.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 6,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Bottom Banner (Y = 10.0 cm, H = 1.9 cm)
addText(
  slide102Content,
  "💡 Đánh giá Kinh tế: Nhà kinh tế không cần làm kỹ thuật sâu nhưng phải định giá được dòng tiền và hiệu quả dự án dữ liệu.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide102Content.addNotes(
  "Chốt góc nhìn kinh tế: Mỗi dự án dữ liệu khoa học kỹ thuật đều gắn liền với bài toán giảm chi phí và nâng cao năng suất."
);

// ----------------------------------------------------
// Slide 103: CONTENT (TÓM TẮT 6.3.3 — KHOA HỌC & KỸ THUẬT)
// ----------------------------------------------------
const slide103Content = pptx.addSlide({ masterName: "CONTENT" });
slide103Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide103Content.addText("TÓM TẮT 6.3.3 — KHOA HỌC & KỸ THUẬT", { placeholder: "title" });

addText(
  slide103Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.3.3:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Mô thức thứ tư: ", options: { bold: true } },
    { text: "Khoa học thâm dụng dữ liệu đòi hỏi Tri thức miền BẮT BUỘC.\n\n" },
    { text: "• 4 Miền chính: ", options: { bold: true } },
    { text: "Tin sinh học · Thiên văn · Khí hậu · Kỹ thuật công nghiệp.\n\n" },
    { text: "• 2 Bài toán chảy về Kinh doanh:\n", options: { bold: true } },
    { text: "  Bảo trì dự đoán (= Churn máy móc) & Thị giác máy soi lỗi (= Phân lớp ảnh)." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide103Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.3.4:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Nhất quán khung tư duy: ", options: { bold: true } },
    { text: "Cùng thuật toán — khác miền ứng dụng.\n\n" },
    { text: "• Tiếp theo (Mục 6.3.4):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Khi 'kẻ tạo ra mẫu bất thường' cố tình né tránh đối phó: Phát hiện Xâm nhập An ninh mạng (Intrusion Detection)." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: 0, // hug content
    fontSize: 11.5,
    lineSpacing: 15.5,
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
  slide103Content,
  "💡 Bước tiếp theo: Chuyển sang 6.3.4 — Khám phá ứng dụng Khai phá dữ liệu trong An ninh mạng và Phát hiện Xâm nhập.",
  {
    x: cmToInch(0.8),
    y: 0, // trôi xuống dưới nội dung
    w: cmToInch(23.8),
    h: 0, // ôm nội dung
    fontSize: 12.5,
    lineSpacing: 16,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.green },
    bold: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "middle",
  }
);

slide103Content.addNotes(
  "Tóm tắt 6.3.3 và dẫn dắt học viên sang mục 6.3.4 Phát hiện Xâm nhập."
);
