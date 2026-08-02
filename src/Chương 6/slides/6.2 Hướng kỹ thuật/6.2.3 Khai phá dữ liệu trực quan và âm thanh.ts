import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 61: SECTION
// ----------------------------------------------------
const slide61Section = pptx.addSlide({ masterName: "SECTION" });
slide61Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide61Section, "title", "6.2.3. KHAI PHÁ DỮ LIỆU TRỰC QUAN VÀ ÂM THANH");
addSectionText(slide61Section, "content", "Visual & Audio Data Mining — Tận dụng sức mạnh thị giác & thính giác con người");
addSectionText(slide61Section, "subContent", "\"'Thuật toán' song song mạnh nhất mà mọi doanh nghiệp đều sở hữu miễn phí: đôi mắt và bộ não con người.\"\n\n" +
  "Khai phá Trực quan  |  Bộ tứ Anscombe  |  4 Mức tích hợp  |  Khai phá Âm thanh");

// ----------------------------------------------------
// Slide 62: CONTENT (KHAI PHÁ DỮ LIỆU TRỰC QUAN LÀ GÌ?)
// ----------------------------------------------------
const slide62Content = pptx.addSlide({ masterName: "CONTENT" });
slide62Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide62Content.addText("KHAI PHÁ DỮ LIỆU TRỰC QUAN LÀ GÌ?", { placeholder: "title" });

addText(
  slide62Content,
  [
    { text: "👁️ Bản chất Khai phá Trực quan (Visual Mining):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Định nghĩa (Han & Kamber): ", options: { bold: true } },
    { text: "Khám phá tri thức tiềm ẩn từ tập dữ liệu lớn bằng kỹ thuật trực quan hóa dữ liệu và/hoặc tri thức.\n\n" },
    { text: "• Sức mạnh Hệ thị giác con người:\n", options: { bold: true } },
    { text: "  Bộ não là cỗ máy xử lý song song cực mạnh kèm kho tri thức khổng lồ ➔ Tích hợp mắt người + máy tính." }
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
  slide62Content,
  [
    { text: "📊 Bài học từ Bộ tứ Anscombe (Anscombe's Quartet):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khái niệm Anscombe:\n", options: { bold: true } },
    { text: "  4 tập dữ liệu có cùng trung bình, phương sai, tương quan, đường hồi quy ➔ nhưng vẽ lên hoàn toàn khác nhau!\n\n" },
    { text: "• Bài học lớn: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Thống kê tóm tắt có thể che giấu, nhưng ĐỒ THỊ phơi bày tất cả (cụm bất thường, ngoại lai)." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide62Content,
  "💡 Nguyên tắc bất hủ: Luôn luôn VẼ TRỰC QUAN HOÁ dữ liệu trước khi chạy bất kỳ mô hình phức tạp nào!",
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

slide62Content.addNotes(
  "Giảng viên chiếu hình bộ tứ Anscombe làm cú sốc mở màn — chỉ 30s để học viên tin vào vai trò của trực quan hóa."
);

// ----------------------------------------------------
// Slide 63: CONTENT (BỐN MỨC TÍCH HỢP TRỰC QUAN HOÁ)
// ----------------------------------------------------
const slide63Content = pptx.addSlide({ masterName: "CONTENT" });
slide63Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide63Content.addText("BỐN MỨC TÍCH HỢP TRỰC QUAN HOÁ", { placeholder: "title" });

addTable(slide63Content, 
  [
    [
      { text: "Cách tích hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Nội dung phương pháp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Ví dụ thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "1. Trực quan hoá DỮ LIỆU", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Xem dữ liệu ở nhiều góc nhìn trước khai phá: boxplot, khối 3D, mặt cong" },
      { text: "Xem phân phối chi tiêu khách hàng theo vùng trước khi phân cụm" },
    ],
    [
      { text: "2. Trực quan hoá KẾT QUẢ", options: { bold: true, color: DUE_COLORS.green } },
      { text: "Trình bày tri thức tìm được dưới dạng hình: cây quyết định, cụm, đồ thị" },
      { text: "Vẽ cây quyết định duyệt vay; bản đồ phân cụm khách hàng" },
    ],
    [
      { text: "3. Trực quan hoá QUÁ TRÌNH", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "Nhìn thấy toàn bộ pipeline dữ liệu: làm sạch ➔ khai phá ➔ lưu kết quả" },
      { text: "Sơ đồ luồng khối kéo-thả của KNIME, Orange, SPSS Modeler" },
    ],
    [
      { text: "4. Khai phá TƯƠNG TÁC", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "Người dùng tham gia VÀO quá trình: tự chọn điểm cắt trên hình vẽ" },
      { text: "Perception-Based Classification (PBC): người & máy cùng dựng cây" },
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
  slide63Content,
  "💡 Human-in-the-loop tăng dần: xem dữ liệu ➔ kết quả ➔ quá trình ➔ tương tác.",
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

slide63Content.addNotes(
  "Giảng viên nhấn mạnh 4 mức tích hợp trực quan hóa, trong đó tương tác (PBC) là mức cao nhất."
);

// ----------------------------------------------------
// Slide 64: CONTENT (KHAI PHÁ DỮ LIỆU ÂM THANH — AUDIO DATA MINING)
// ----------------------------------------------------
const slide64Content = pptx.addSlide({ masterName: "CONTENT" });
slide64Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide64Content.addText("KHAI PHÁ DỮ LIỆU ÂM THANH", { placeholder: "title" });

addText(
  slide64Content,
  [
    { text: "🔊 Khái niệm & Động lực (Audio Mining):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Khái niệm: ", options: { bold: true } },
    { text: "Dùng tín hiệu âm thanh để biểu thị mẫu dữ liệu — 'nghe' dữ liệu thay vì 'nhìn'.\n\n" },
    { text: "• Lý do tồn tại: ", options: { bold: true } },
    { text: "Khai phá trực quan đòi hỏi mắt nhìn liên tục ➔ mệt mỏi. Chuyển mẫu dữ liệu thành giai điệu/cao độ giúp tai nhận biết bất thường mà không tốn sức thị giác." }
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
  slide64Content,
  [
    { text: "🎧 Ứng dụng & Thảo luận khi nào nên dùng:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Ứng dụng thực tế:\n", options: { bold: true } },
    { text: "  - Cảnh báo âm thanh nền (Sonification) trong phòng giám sát giao dịch.\n  - Cảnh báo bất thường thiết bị IoT / Y tế.\n\n" },
    { text: "❓ Câu hỏi thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "“Khi nào 'nghe dữ liệu' hợp lý hơn 'nhìn dữ liệu'?”" }
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
  slide64Content,
  "💡 Gợi ý trả lời: Dùng âm thanh khi cần GIÁM SÁT LIÊN TỤC lúc mắt đang bận việc khác; còn phân tích so sánh đa chiều thì thị giác vượt trội.",
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

slide64Content.addNotes(
  "Giảng viên nhấn mạnh Audio Mining là phần bổ trợ thú vị cho khai phá trực quan trong môi trường giám sát."
);

// ----------------------------------------------------
// Slide 65: CONTENT (DEMO 4 — KHAI PHÁ TRỰC QUAN VỚI PYTHON)
// ----------------------------------------------------
const slide65Content = pptx.addSlide({ masterName: "CONTENT" });
slide65Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide65Content.addText("DEMO 4: TRỰC QUAN HOÁ VỚI PYTHON", { placeholder: "title" });

addText(
  slide65Content,
  [
    { text: "💻 Các bước Thực hành Python:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Vẽ Bộ tứ Anscombe (`seaborn`) ➔ Kiểm chứng 'cùng thống kê, khác bản chất'.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Trực quan DỮ LIỆU thẻ: Histogram `amt`, Boxplot `amt` theo `category`, Heatmap (Giờ × Ngày).\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Trực quan KẾT QUẢ: Scatter plot PCA tô màu cụm K-means; vẽ cây quyết định dự đoán `is_fraud`.\n\n" },
    { text: "• Bước 4: ", options: { bold: true } },
    { text: "Dùng `plotly` zoom/hover vào vùng gian lận bất thường." }
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
  slide65Content,
  [
    { text: "❓ Thảo luận Phát hiện Nghiệp vụ:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Bản đồ nhiệt Giờ × Ngày cho thấy giao dịch gian lận dồn vào khung giờ nào? Phát hiện này hành động được (Actionable) ra sao?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Phát hiện: ", options: { bold: true } },
    { text: "Fraud dồn về 0h - 4h sáng.\n\n" },
    { text: "• Hành động: ", options: { bold: true } },
    { text: "Nâng ngưỡng xác thực OTP bổ sung cho khung đêm ➔ Đúng tinh thần Kinh tế vi mô (6.2.2)." }
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
    line: { color: DUE_COLORS.orange, width: 1 },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide65Content,
  "💡 Một heatmap đêm khuya ➔ một quy tắc nghiệp vụ đo được chi phí — lợi ích.",
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

slide65Content.addNotes(
  "Giảng viên chiếu file demo_6_2_3_visual_mining.py và mở đồ thị Plotly tương tác trực tiếp."
);

// ----------------------------------------------------
// Slide 66: CONTENT (ỨNG DỤNG TRỰC QUAN HOÁ TẠI VIỆT NAM)
// ----------------------------------------------------
const slide66Content = pptx.addSlide({ masterName: "CONTENT" });
slide66Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide66Content.addText("ỨNG DỤNG TRỰC QUAN HOÁ TẠI VIỆT NAM", { placeholder: "title" });

// Card 1: Top-Left (Y = 2.0 cm, H = 3.5 cm)
addText(
  slide66Content,
  [
    { text: "📊 BI Dashboard (Power BI / Tableau):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Doanh nghiệp VN phổ cập Looker/Power BI theo dõi doanh số, tồn kho hằng ngày — trực quan hóa dữ liệu toàn công ty." }
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
  slide66Content,
  [
    { text: "🏦 Ngân hàng & Rủi ro Chứng khoán:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phòng rủi ro theo dõi Heatmap giao dịch, luồng tiền để phát hiện bất thường bằng mắt trước khi mô hình chạy." }
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
  slide66Content,
  [
    { text: "🧩 Công cụ Kéo - Thả (KNIME / Orange):\n", options: { bold: true, color: DUE_COLORS.blue } },
    { text: "Cho phép nhân sự nghiệp vụ không biết code tự dựng pipeline KPDL bằng sơ đồ khối — trực quan hóa quá trình." }
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
  slide66Content,
  [
    { text: "📰 Báo chí Dữ liệu (VnExpress / CafeF):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Sử dụng đồ họa tương tác kể chuyện vĩ mô — trực quan hóa làm ngôn ngữ giao tiếp kết quả với công chúng." }
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
  slide66Content,
  "💡 Thông điệp: Trực quan hóa dữ liệu là khoản đầu tư công nghệ rẻ nhất nhưng mang lại hiệu quả hoàn vốn nhanh nhất.",
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

slide66Content.addNotes(
  "Hỏi nhanh lớp: Đơn vị anh/chị đang nhìn dữ liệu bằng công cụ gì — Excel, Power BI, hay chưa có gì?"
);

// ----------------------------------------------------
// Slide 67: CONTENT (TÓM TẮT 6.2.3: TRỰC QUAN & ÂM THANH)
// ----------------------------------------------------
const slide67Content = pptx.addSlide({ masterName: "CONTENT" });
slide67Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide67Content.addText("TÓM TẮT 6.2.3: TRỰC QUAN & ÂM THANH", { placeholder: "title" });

addText(
  slide67Content,
  [
    { text: "📌 Tổng kết Nội dung Mục 6.2.3:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Visual Data Mining: ", options: { bold: true } },
    { text: "Trực quan hóa + Khai phá dữ liệu, tận dụng mắt & não con người.\n\n" },
    { text: "• 4 Mức tích hợp:\n", options: { bold: true } },
    { text: "  Xem dữ liệu ➔ Xem kết quả ➔ Xem quá trình ➔ Tương tác (PBC).\n\n" },
    { text: "• Bài học Anscombe: ", options: { bold: true } },
    { text: "Luôn VẼ trước khi MÔ HÌNH — con số tóm tắt có thể đánh lừa.\n\n" },
    { text: "• Audio Mining: ", options: { bold: true } },
    { text: "'Nghe' mẫu dữ liệu — kênh bổ trợ cho giám sát liên tục." }
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
  slide67Content,
  [
    { text: "🚀 Chuyển giao tiếp theo — Mục 6.2.4:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Công cụ thực hành: ", options: { bold: true } },
    { text: "`matplotlib`, `seaborn`, `plotly`, Power BI, KNIME.\n\n" },
    { text: "• Tiếp theo (Mục 6.2.4):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Trường phái đang thống trị thực tiễn: Tích hợp Học máy & Học sâu hiện đại (Ensemble, CNN/LSTM, Transformer, Embedding)." }
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
  slide67Content,
  "💡 Bước tiếp theo: Chuyển sang 6.2.4 — Khám phá bức tranh Học máy & Học sâu hiện đại mở rộng ngoài giáo trình.",
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

slide67Content.addNotes(
  "Tóm tắt 6.2.3 và chuẩn bị dẫn dắt học viên sang mục 6.2.4 Học máy và học sâu hiện đại."
);
