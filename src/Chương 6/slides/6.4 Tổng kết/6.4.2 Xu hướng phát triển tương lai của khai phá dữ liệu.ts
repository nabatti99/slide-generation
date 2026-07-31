import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 127: SECTION
// ----------------------------------------------------
const slide127Section = pptx.addSlide({ masterName: "SECTION" });
slide127Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide127Section.addText("6.4.2. XU HƯỚNG PHÁT TRIỂN TƯƠNG LAI CỦA KHAI PHÁ DỮ LIỆU", { placeholder: "title" });
slide127Section.addText("Phần cập nhật ngoài giáo trình — Nhìn về giai đoạn 2026 trở đi", { placeholder: "content" });
slide127Section.addText(
  "\"Khai phá dữ liệu trong kỷ nguyên AI tạo sinh: Công nghệ thay đổi, nhưng bản chất tìm kiếm tri thức sinh lợi vẫn không đổi.\"\n\n" +
  "AI Tạo sinh & KDD  |  Streaming Mining  |  Explainable AI (XAI)  |  MLOps & Cloud",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 128: CONTENT (BỐN XU HƯỚNG CÔNG NGHỆ TƯƠNG LAI)
// ----------------------------------------------------
const slide128Content = pptx.addSlide({ masterName: "CONTENT" });
slide128Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide128Content.addText("BỐN XU HƯỚNG CÔNG NGHỆ TƯƠNG LAI", { placeholder: "title" });

addText(
  slide128Content,
  [
    { text: "🚀 GenAI & Real-time Streaming:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• AI Tạo sinh (LLMs) hội tụ KPDL: ", options: { bold: true } },
    { text: "Tự động hóa Feature Engineering, làm sạch dữ liệu & diễn giải kết quả mô hình bằng ngôn ngữ tự nhiên.\n\n" },
    { text: "• Streaming Mining (Real-time): ", options: { bold: true } },
    { text: "Dữ liệu IoT, giao dịch đòi hỏi mô hình cập nhật liên tục (Online learning) thay vì học theo lô (batch)." }
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
  slide128Content,
  [
    { text: "🔍 Explainable AI (XAI) & AutoML:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• AI có thể Giải thích (XAI):\n", options: { bold: true } },
    { text: "  Nhu cầu bóc tách 'hộp đen' Deep Learning thành lý do minh bạch (bắt buộc cho tín dụng & y tế).\n\n" },
    { text: "• AutoML & Dân chủ hóa dữ liệu:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Công cụ tự động hóa giúp Nhà quản lý kinh tế tự triển khai mô hình mà không cần viết code phức tạp." }
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
  slide128Content,
  "💡 Điểm hội tụ XAI: Explainable AI chính là điểm giao thoa giữa Kỹ thuật hiện đại (6.2.4) và Đạo đức pháp lý (6.3.6).",
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

slide128Content.addNotes(
  "Giảng viên giải thích 4 xu hướng công nghệ lớn đối chiếu với bối cảnh thực tế 2024-2026."
);

// ----------------------------------------------------
// Slide 129: CONTENT (DỮ LIỆU LỚN & HẠ TẦNG ĐÁM MÂY)
// ----------------------------------------------------
const slide129Content = pptx.addSlide({ masterName: "CONTENT" });
slide129Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide129Content.addText("DỮ LIỆU LỚN & HẠ TẦNG ĐÁM MÂY", { placeholder: "title" });

addText(
  slide129Content,
  [
    { text: "☁️ Hạ tầng Đám mây & Distributed Computing:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tính toán Phân tán (Spark / Hadoop): ", options: { bold: true } },
    { text: "Xử lý khối lượng dữ liệu vượt xa khả năng của một máy tính đơn lẻ.\n\n" },
    { text: "• Nền tảng Đám mây (Cloud Native): ", options: { bold: true } },
    { text: "AWS, Google Cloud, Azure cung cấp kho tài nguyên linh hoạt theo nhu cầu doanh nghiệp." }
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
  slide129Content,
  [
    { text: "🏗️ Data Lakehouse & Vận hành MLOps:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Data Lakehouse: ", options: { bold: true } },
    { text: "Mô hình lai giữa Data Warehouse (có cấu trúc) và Data Lake (phi cấu trúc) trên cùng 1 hạ tầng.\n\n" },
    { text: "• Quy trình MLOps: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Giám sát suy giảm mô hình (Model drift) & tự động huấn luyện lại ➔ Mở rộng quy trình CRISP-DM sang giai đoạn Sau triển khai." }
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
  slide129Content,
  "💡 Hàm ý doanh nghiệp VN: Đầu tư hạ tầng Cloud và MLOps đang trở thành năng lực cạnh tranh cốt lõi của ngành Ngân hàng & TMĐT.",
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

slide129Content.addNotes(
  "Liên hệ khái niệm Data Warehouse đã học ở Chương 2 với mô hình kiến trúc Data Lakehouse hiện đại."
);

// ----------------------------------------------------
// Slide 130: CONTENT (BA THÁCH THỨC LỚN CHO TƯƠNG LAI)
// ----------------------------------------------------
const slide130Content = pptx.addSlide({ masterName: "CONTENT" });
slide130Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide130Content.addText("BA THÁCH THỨC LỚN CHO TƯƠNG LAI", { placeholder: "title" });

addText(
  slide130Content,
  [
    { text: "⚖️ Quản trị Dữ liệu & Định kiến Thuật toán:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Đạo đức & Quản trị Dữ liệu (Data Governance):\n", options: { bold: true } },
    { text: "   Nghị định 13/2023 siết chặt ➔ Đòi hỏi hội đồng Quản trị Dữ liệu chuyên trách.\n\n" },
    { text: "2. Thiên lệch Thuật toán (Algorithmic Bias):\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "   Mô hình khuếch đại định kiến sẵn có từ dữ liệu lịch sử (giới tính, thu nhập) ➔ Đòi hỏi Kiểm toán Mô hình định kỳ." }
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
  slide130Content,
  [
    { text: "🎓 Khoảng cách Kỹ năng & Định vị Nghề nghiệp:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "3. Khoảng cách Kỹ năng (Skills Gap):\n", options: { bold: true } },
    { text: "   Nhu cầu nhân sự VỪA HIỂU NGHIỆP VỤ VỪA HIỂU CÔNG NGHỆ (Data-literate Manager) tăng nhanh hơn nguồn cung.\n\n" },
    { text: "• Định vị Nghề nghiệp: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Đây chính là lợi thế cạnh tranh độc tôn của Học viên Cao học Kinh tế theo học chương trình này!" }
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
  slide130Content,
  "💡 Thông điệp kết thúc: Tương lai KPDL không chỉ là công nghệ mà là Năng lực Tổ chức & Con người sử dụng dữ liệu có trách nhiệm.",
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

slide130Content.addNotes(
  "Chốt slide bằng câu định vị nghề nghiệp truyền cảm hứng cho học viên thạc sĩ kinh tế trước khi sang phần bài tập ôn tập."
);
