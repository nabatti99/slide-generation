import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1: TITLE
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "TITLE" });
slide1.addText("CHƯƠNG 6", { placeholder: "title" });
slide1.addText("CÁC HƯỚNG NGHIÊN CỨU TRONG KHAI PHÁ DỮ LIỆU", { placeholder: "subtitle" });
slide1.addText("KHAI PHÁ DỮ LIỆU (STA5009N)", { placeholder: "subject" });
slide1.addText("Khoa Thống kê - Tin học", { placeholder: "faculty" });

// ----------------------------------------------------
// Slide 2a: OBJECTIVE (1/2)
// ----------------------------------------------------
const slide2a = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2a.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });

addText(
  slide2a,
  [
    { text: "• ", options: { bold: true } },
    { text: "Phân biệt ", options: { bold: true } },
    { text: "ba loại dữ liệu phức tạp: chuỗi (sequence), đồ thị/mạng (graph/network) và văn bản; nhận diện trong thực tế.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Giải thích ", options: { bold: true } },
    { text: "bài toán khai phá điển hình: dự báo chuỗi thời gian, motif, mẫu tuần tự, centrality, cộng đồng, cảm xúc.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Áp dụng ", options: { bold: true } },
    { text: "các độ đo cơ bản (ACF/PACF, bốn chỉ số centrality, TF-IDF) bằng Python.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Trình bày ", options: { bold: true } },
    { text: "quan hệ giữa KPDL và thống kê cổ điển; năm quan điểm lý thuyết và sinh lợi kinh tế." }
  ],
  {
    placeholder: "content",
    x: cmToInch(8.5),
    y: cmToInch(3.0),
    w: cmToInch(15.0),
    h: cmToInch(8.0),
    fontSize: 11,
    color: DUE_COLORS.white,
    lineSpacing: 17,
    valign: "top",
  }
);

slide2a.addNotes(
  "Giảng viên nhấn mạnh phần 1 mục tiêu: Nhận diện 3 loại dữ liệu phức tạp và các chỉ số/độ đo kỹ thuật nền tảng."
);

// ----------------------------------------------------
// Slide 2b: OBJECTIVE (2/2)
// ----------------------------------------------------
const slide2b = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2b.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });

addText(
  slide2b,
  [
    { text: "• ", options: { bold: true } },
    { text: "Mô tả ", options: { bold: true } },
    { text: "vai trò của trực quan hoá dữ liệu và vị trí của học máy — học sâu hiện đại trong khai phá dữ liệu.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Phân tích ", options: { bold: true } },
    { text: "các ứng dụng tiêu biểu: tài chính — ngân hàng, bán lẻ — viễn thông, khoa học, an ninh mạng.\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Đánh giá ", options: { bold: true } },
    { text: "tác động xã hội: quyền riêng tư, ẩn danh hoá, khung pháp lý (Nghị định 13/2023/NĐ-CP, GDPR).\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Vận dụng ", options: { bold: true } },
    { text: "tổng hợp kỹ thuật trên bộ dữ liệu giao dịch thẻ tín dụng xuyên suốt học phần." }
  ],
  {
    placeholder: "content",
    x: cmToInch(8.5),
    y: cmToInch(3.0),
    w: cmToInch(15.0),
    h: cmToInch(8.0),
    fontSize: 11,
    color: DUE_COLORS.white,
    lineSpacing: 17,
    valign: "top",
  }
);

slide2b.addNotes(
  "Ba câu hỏi tổng kết môn học:\n1. Khai phá CÁI GÌ (6.1)\n2. Khai phá BẰNG GÌ (6.2)\n3. Khai phá CHO AI (6.3)"
);

// ----------------------------------------------------
// Slide 3a: CONTENT (TÌNH HUỐNG THỰC TẾ: BỐI CẢNH & NGUỒN DỮ LIỆU)
// ----------------------------------------------------
const slide3a = pptx.addSlide({ masterName: "CONTENT" });
slide3a.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide3a.addText("TÌNH HUỐNG: BỐI CẢNH 3 NGUỒN DỮ LIỆU", { placeholder: "title" });

addText(
  slide3a,
  [
    { text: "🏢 Bối cảnh Công ty Chứng khoán TP.HCM:\n", options: { bold: true, fontSize: 12 } },
    { text: "Hệ thống Hỗ trợ Đầu tư nắm 3 nguồn dữ liệu:\n\n" },
    { text: "• Nguồn 1 (Chuỗi): ", options: { bold: true } },
    { text: "Giá VN-Index 10 năm theo ngày ➔ Dự báo xu hướng ngắn hạn.\n\n" },
    { text: "• Nguồn 2 (Mạng): ", options: { bold: true } },
    { text: "Mạng sở hữu chéo & chung lãnh đạo ➔ Phát hiện rủi ro hệ thống.\n\n" },
    { text: "• Nguồn 3 (Văn bản): ", options: { bold: true } },
    { text: "Hàng chục nghìn bài đăng, review ➔ Đo tâm lý thị trường (market sentiment)." }
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
  slide3a,
  [
    { text: "❓ Câu hỏi bài toán thực tế:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• ", options: { bold: true } },
    { text: "Dự báo VN-Index 10 phiên tới dùng mô hình nào, sai số ra sao?\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Công ty nào nằm ở vị trí 'trung tâm' sở hữu chéo, rủi ro lan truyền đến đâu?\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Tâm lý nhà đầu tư đi trước hay chạy theo biến động giá?\n\n" },
    { text: "• ", options: { bold: true } },
    { text: "Cả 3 nguồn có đưa được về dạng bảng để dùng kỹ thuật Ch.3–5?" }
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
  slide3a,
  "💡 Nhận xét: Mỗi nguồn dữ liệu mang đặc thù riêng biệt, vượt xa mô hình dữ liệu dạng bảng quan hệ truyền thống.",
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

slide3a.addNotes(
  "Gợi ý giảng viên: Giới thiệu 3 nguồn dữ liệu đại diện cho 3 chủ đề chính của mục 6.1 (Chuỗi, Đồ thị/Mạng, Văn bản)."
);

// ----------------------------------------------------
// Slide 3b: CONTENT (TÌNH HUỐNG THỰC TẾ: THẢO LUẬN & GỢI Ý)
// ----------------------------------------------------
const slide3b = pptx.addSlide({ masterName: "CONTENT" });
slide3b.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide3b.addText("TÌNH HUỐNG: THẢO LUẬN & ĐỊNH HƯỚNG", { placeholder: "title" });

addText(
  slide3b,
  [
    { text: "💬 Câu hỏi thảo luận mở đầu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "“Với các kỹ thuật đã học từ Chương 3 đến Chương 5 (Phân lớp, Phân cụm, Luật kết hợp), anh/chị giải quyết được nguồn dữ liệu nào trong ba nguồn trên?\n\nVướng mắc cốt lõi nằm ở đâu?”" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 15,
    color: DUE_COLORS.white,
    fill: { color: DUE_COLORS.blue },
    bold: true,
    italic: true,
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide3b,
  [
    { text: "🎯 Gợi ý & Định hướng giảng viên:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Nguồn 1 (Chuỗi): ", options: { bold: true } },
    { text: "Vi phạm giả định quan sát độc lập (giá hôm nay phụ thuộc hôm qua).\n\n" },
    { text: "• Nguồn 2 (Mạng): ", options: { bold: true } },
    { text: "Thông tin nằm ở LIÊN KẾT giữa các dòng, không nằm trong từng dòng.\n\n" },
    { text: "• Nguồn 3 (Văn bản): ", options: { bold: true } },
    { text: "Dữ liệu phi cấu trúc, không có sẵn các cột thuộc tính số." }
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
    line: { color: DUE_COLORS.green, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide3b,
  "💡 Nguyên tắc vàng: Kỹ thuật cũ không sai, chỉ cần bước biểu diễn dữ liệu phù hợp trước khi áp dụng!",
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

slide3b.addNotes(
  "Chốt ý: Cả ba vướng mắc trên sẽ lần lượt được giải quyết triệt để trong các mục 6.1.1, 6.1.2 và 6.1.3."
);

// ----------------------------------------------------
// Slide 4: CONTENT (CÂU HỎI: KỸ THUẬT ĐÃ HỌC CÓ ĐỦ DÙNG?)
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide4.addText("CÂU HỎI: KỸ THUẬT ĐÃ HỌC CÓ ĐỦ DÙNG?", { placeholder: "title" });

addText(
  slide4,
  [
    { text: "📊 Giới hạn của Kỹ thuật Ch.3–5:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Giả định dữ liệu dạng bảng:\n", options: { bold: true } },
    { text: "  - Mỗi dòng là 1 quan sát độc lập (i.i.d).\n  - Mỗi cột là 1 thuộc tính xác định.\n\n" },
    { text: "• Giới hạn khi áp dụng vào thực tế:\n", options: { bold: true } },
    { text: "  - Không bắt được tính thứ tự thời gian.\n  - Không biểu diễn được mối quan hệ mạng.\n  - Không xử lý trực tiếp được văn bản thô." }
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
  slide4,
  [
    { text: "🚀 Nhu cầu Hướng nghiên cứu mới:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khai phá loại dữ liệu phức tạp:\n", options: { bold: true } },
    { text: "  Han & Kamber gọi là Mining Complex Data Types (Ch.13.1).\n\n" },
    { text: "• Yêu cầu kỹ thuật chuyên biệt:\n", options: { bold: true } },
    { text: "  - Khai phá chuỗi thời gian & tuần tự.\n  - Khai phá đồ thị & mạng xã hội.\n  - Khai phá văn bản & web mining." }
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
  slide4,
  "💡 Thông điệp: Việc mở rộng sang các dạng dữ liệu phức tạp là bước chuyển tất yếu của Khai phá dữ liệu hiện đại.",
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

slide4.addNotes(
  "Ghi chú giảng dạy: Đặt câu hỏi cho lớp trước khi chiếu từng ý, dẫn dắt học viên tự suy ra lý do vì sao cần Chương 6."
);

// ----------------------------------------------------
// Slide 5: CONTENT (BỨC TRANH TỔNG THỂ CHƯƠNG 6)
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide5.addText("BỨC TRANH TỔNG THỂ: BA HƯỚNG NGHIÊN CỨU", { placeholder: "title" });

addText(
  slide5,
  [
    { text: "📌 6.1 Hướng dữ liệu (Khai phá CÁI GÌ?):\n\n", options: { bold: true, fontSize: 12, color: DUE_COLORS.orange } },
    { text: "• Chuỗi thời gian & mẫu tuần tự (6.1.1)\n" },
    { text: "• Đồ thị & Mạng xã hội (6.1.2)\n" },
    { text: "• Văn bản, Đa phương tiện & Không gian (6.1.3)\n\n" },
    { text: "📌 6.2 Hướng kỹ thuật (Khai phá BẰNG GÌ?):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khai phá thống kê, Lý thuyết, Trực quan, Học sâu" }
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
  slide5,
  [
    { text: "🎯 6.3 Hướng ứng dụng (Khai phá CHO AI?):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tài chính, Bán lẻ, Viễn thông, An ninh mạng\n" },
    { text: "• Hệ thống gợi ý & Tác động xã hội / Quyền riêng tư\n\n" },
    { text: "🏁 6.4 Tóm tắt & Bài tập tổng hợp:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Ôn tập xuyên suốt trên bộ dữ liệu Thẻ tín dụng\n" },
    { text: "• Xu hướng phát triển tương lai của KPDL" }
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
  slide5,
  "💡 Trọng tâm hiện tại: Bắt đầu khám phá nhánh 6.1 — Hướng dữ liệu với các loại dữ liệu phức tạp.",
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

slide5.addNotes(
  "Giảng viên giải thích sơ đồ tổng thể Chương 6, nhấn mạnh nhánh 6.1 đang được học."
);
