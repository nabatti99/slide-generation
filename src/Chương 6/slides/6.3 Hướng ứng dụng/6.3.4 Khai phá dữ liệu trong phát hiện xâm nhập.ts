import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 104: SECTION
// ----------------------------------------------------
const slide104Section = pptx.addSlide({ masterName: "SECTION" });
slide104Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide104Section, "title", "6.3.4. KHAI PHÁ DỮ LIỆU TRONG PHÁT HIỆN XÂM NHẬP");
addSectionText(slide104Section, "content", "Intrusion Detection & Prevention — Khi KPDL bảo vệ chính hệ thống dữ liệu");
addSectionText(slide104Section, "subContent", "\"Từ 'khai phá cái gì, bằng gì' sang bài toán an ninh mạng — Nơi khai phá dữ liệu bảo vệ sự sống còn của doanh nghiệp số.\"\n\n" +
  "Khung An toàn CIA  |  Signature-based vs Anomaly-based  |  Isolation Forest & Outlier");

// ----------------------------------------------------
// Slide 105: CONTENT (PHÁT HIỆN XÂM NHẬP & VAI TRÒ KPDL)
// ----------------------------------------------------
const slide105Content = pptx.addSlide({ masterName: "CONTENT" });
slide105Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide105Content.addText("PHÁT HIỆN XÂM NHẬP & VAI TRÒ KPDL", { placeholder: "title" });

addText(
  slide105Content,
  [
    { text: "🛡️ Định nghĩa Xâm nhập & Khung CIA:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Xâm nhập (Intrusion): ", options: { bold: true } },
    { text: "Hành vi đe dọa 3 thuộc tính an toàn thông tin:\n\n" },
    { text: "  - Confidentiality: ", options: { bold: true } },
    { text: "Tính Bảo mật dữ liệu.\n" },
    { text: "  - Integrity: ", options: { bold: true } },
    { text: "Tính Toàn vẹn hệ thống.\n" },
    { text: "  - Availability: ", options: { bold: true } },
    { text: "Tính Sẵn sàng của dịch vụ.\n\n" },
    { text: "• Các dạng tấn công: ", options: { bold: true } },
    { text: "DoS/DDoS, Quét cổng, Malware, Khai thác lỗ hổng, Chiếm credential." }
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
  slide105Content,
  [
    { text: "⚡ Hạn chế của Luật Cố định & Vai trò KPDL:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Hạn chế của Rule-based: ", options: { bold: true } },
    { text: "Hệ thống truyền thống dựa trên luật chuyên gia viết tay ➔ Không theo kịp dữ liệu log khổng lồ và tấn công biến đổi nhanh.\n\n" },
    { text: "• Vai trò KPDL: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "TỰ ĐỘNG HỌC MẪU TẤN CÔNG từ dữ liệu lịch sử, thay vì chờ con người viết luật thủ công." }
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
  slide105Content,
  "💡 Nhấn mạnh khung CIA: Đây là khung tư duy chuẩn an toàn thông tin mà nhà quản lý bắt buộc phải hiểu khi làm việc với IT.",
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

slide105Content.addNotes(
  "Giảng viên giải thích khung CIA (Confidentiality - Integrity - Availability) trong an toàn thông tin."
);

// ----------------------------------------------------
// Slide 106: CONTENT (SIGNATURE-BASED vs ANOMALY-BASED)
// ----------------------------------------------------
const slide106Content = pptx.addSlide({ masterName: "CONTENT" });
slide106Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide106Content.addText("SIGNATURE-BASED vs ANOMALY-BASED", { placeholder: "title" });

addTable(slide106Content, 
  [
    [
      { text: "Tiêu chí so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dựa trên Chữ ký (Signature-based)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dựa trên Bất thường (Anomaly-based)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Nguyên lý hoạt động", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "So khớp với MẪU TẤN CÔNG ĐÃ BIẾT trong CSDL chữ ký" },
      { text: "Dựng HỒ SƠ HÀNH VI BÌNH THƯỜNG, cảnh báo khi lệch chuẩn" },
    ],
    [
      { text: "Tấn công mới (Zero-day)", options: { bold: true, color: DUE_COLORS.green } },
      { text: "KHÔNG — 'Mù' hoàn toàn trước mẫu tấn công chưa từng thấy" },
      { text: "CÓ — Phát hiện được bất kỳ hành vi nào lệch chuẩn" },
    ],
    [
      { text: "Nhược điểm lớn nhất", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Phải cập nhật CSDL chữ ký liên tục mỗi ngày" },
      { text: "Dễ BÁO ĐỘNG NHẦM (False Positive) khi hành vi thay đổi" },
    ],
    [
      { text: "Kỹ thuật KPDL tương ứng", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Phân lớp (Classification Ch.3), Luật (Ch.5)" },
      { text: "Phát hiện ngoại lệ / Outlier Detection (Phân cụm Ch.4)" },
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
  slide106Content,
  "💡 Ví dụ trực quan: Signature-based giống 'nhận diện tội phạm qua ảnh lệnh truy nã'; Anomaly-based giống 'phát hiện kẻ có hành vi lạ'.",
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

slide106Content.addNotes(
  "Slide trọng tâm nhất của mục. Kết nối trực tiếp với Outlier detection đã học ở Chương 4."
);

// ----------------------------------------------------
// Slide 107: CONTENT (VAI TRÒ CỦA KHAI PHÁ DỮ LIỆU TRONG TỪNG KHÂU PHÁT HIỆN XÂM NHẬP)
// ----------------------------------------------------
const slide107Content = pptx.addSlide({ masterName: "CONTENT" });
slide107Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide107Content.addText("VAI TRÒ KPDL TRONG AN NINH MẠNG", { placeholder: "title" });

addText(
  slide107Content,
  [
    { text: "🛠️ Tái sử dụng Công cụ Ch.3 – Ch.5:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phân lớp (Classification Ch.3): ", options: { bold: true } },
    { text: "Gán nhãn kết nối 'Bình thường' hay 'Tấn công' cụ thể (DoS, Probe, U2R).\n\n" },
    { text: "• Phát hiện Ngoại lệ (Outlier Ch.4): ", options: { bold: true } },
    { text: "Phát hiện các điểm lệch xa không có nhãn trước ➔ Bắt Zero-day.\n\n" },
    { text: "• Luật & Chọn đặc trưng (Ch.5): ", options: { bold: true } },
    { text: "Rút gọn thuộc tính mạng phân biệt tốt nhất." }
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
  slide107Content,
  [
    { text: "🌊 Khai phá Luồng & Trực quan hóa:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Data Stream Mining (Online Learning):\n", options: { bold: true } },
    { text: "  Xử lý gói tin liên tục theo thời gian thực; mô hình cập nhật tại chỗ vì không thể lưu toàn bộ lịch sử.\n\n" },
    { text: "• Trực quan hóa Tấn công (6.2.3):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Biểu diễn lưu lượng theo thời gian & bản đồ địa lý ➔ Giúp chuyên gia an ninh ra quyết định nhanh trong khủng hoảng." }
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
  slide107Content,
  "💡 Tính hệ thống: Mục 6.3.4 thực chất tổng hợp lại toàn bộ kho công cụ Ch.3–5 và 6.2.3 để giải quyết bài toán An ninh mạng.",
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

slide107Content.addNotes(
  "Giảng viên nhấn mạnh tính tổng hợp hệ thống của mục 6.3.4."
);

// ----------------------------------------------------
// Slide 108: CONTENT (ỨNG DỤNG & GÓC NHÌN KINH TẾ AN NINH)
// ----------------------------------------------------
const slide108Content = pptx.addSlide({ masterName: "CONTENT" });
slide108Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide108Content.addText("ỨNG DỤNG & GÓC NHÌN KINH TẾ AN NINH", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide108Content,
  [
    { text: "🏦 SOC Ngân hàng Việt Nam:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Vận hành Trung tâm Giám sát SOC phát hiện đăng nhập bất thường & chiếm tài khoản — cùng kỹ thuật với 6.3.1." }
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
  slide108Content,
  [
    { text: "🎣 Chống Phishing & Lừa đảo:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phân loại email/website giả mạo ngân hàng dựa trên đặc trưng nội dung và URL đường dẫn bất thường." }
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
  slide108Content,
  [
    { text: "🤖 Chống Bot cào giá TMĐT:\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Chặn bot cào giá và tài khoản ảo săn khuyến mãi — phát hiện bất thường trong chuỗi hành vi click (6.1.1)." }
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
  slide108Content,
  [
    { text: "📡 Chống Tấn công DDoS Viễn thông:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Nhà mạng giám sát lưu lượng bất thường DDoS nhắm vào hạ tầng máy chủ khách hàng doanh nghiệp." }
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
  slide108Content,
  "💡 Góc nhìn Kinh tế: An ninh mạng là bài toán Quản trị rủi ro — Cân đối Chi phí phòng thủ vs Tổn thất kỳ vọng bị tấn công.",
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

slide108Content.addNotes(
  "Thảo luận: Báo động nhầm 1.000 lần để bắt đúng 1 vụ tấn công — nên chọn Precision hay Recall trong an ninh mạng?"
);

// ----------------------------------------------------
// Slide 109: CONTENT (DEMO 6.3.4: BẤT THƯỜNG MẠNG (NSL-KDD))
// ----------------------------------------------------
const slide109Content = pptx.addSlide({ masterName: "CONTENT" });
slide109Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide109Content.addText("DEMO 6.3.4: BẤT THƯỜNG MẠNG (NSL-KDD)", { placeholder: "title" });

addText(
  slide109Content,
  [
    { text: "💻 Thực hành Python (NSL-KDD):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Nạp bộ NSL-KDD; khảo sát các thuộc tính kết nối.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "`RandomForestClassifier` ➔ ma trận nhầm lẫn, Recall/Precision.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "`IsolationForest` không dùng nhãn ➔ so khả năng bắt tấn công zero-day.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Giả lập Khai phá luồng dữ liệu theo Batch liên tiếp." }
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
  slide109Content,
  [
    { text: "❓ Thảo luận Trải nghiệm & Uy tín:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Nếu ngân hàng phải chọn giữa Mô hình Recall cao nhưng Precision thấp (bắt nhiều gian lận nhưng chặn nhầm khách) vs Mô hình ngược lại — lựa chọn nào tốt hơn?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Đánh đổi Quản trị:\n", options: { bold: true } },
    { text: "  Cân bằng giữa Mất tiền do lừa đảo vs Mất khách hàng do trải nghiệm bị gián đoạn." }
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
  slide109Content,
  "💡 Kẻ tấn công liên tục đổi cách né mô hình — dữ liệu ở đây trôi rất nhanh.",
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

slide109Content.addNotes(
  "Giảng viên chiếu file demo_6_3_4_intrusion_detection.py. Câu hỏi drift bổ sung góc mới thay vì lặp lại trade-off recall/precision đã bàn ở slide trước; dấu hiệu mô hình 'hết hạn': tỷ lệ cảnh báo đổi đột ngột, phân bố đặc trưng lệch so với tập huấn luyện — dẫn sang stream mining/MLOps ở 6.4.2."
);
