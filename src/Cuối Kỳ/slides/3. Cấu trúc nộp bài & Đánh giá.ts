import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 13: SECTION PHẦN 3
// ----------------------------------------------------
const slide13Section = pptx.addSlide({ masterName: "SECTION" });
slide13Section.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide13Section.addText("PHẦN 3: NỘP BÀI & ĐÁNH GIÁ DỰ ÁN", { placeholder: "title" });
slide13Section.addText("Chuẩn hóa cấu trúc hồ sơ nộp bài và tiêu chí đánh giá 100% minh bạch", { placeholder: "content" });
slide13Section.addText(
  "\"Sự chuyên nghiệp thể hiện ở khả năng đóng gói sản phẩm dữ liệu sạch sẽ, rõ ràng và có thể kiểm chứng.\"\n\n" +
  "Báo cáo 15-25 trang PDF  |  Slide Bảo vệ 12-16 slide  |  Cấu trúc Thư mục Nộp bài  |  Bảng Tiêu chí Chấm điểm 100%",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 14: CONTENT (CẤU TRÚC BÁO CÁO & SLIDE BẢO VỆ)
// ----------------------------------------------------
const slide14Content = pptx.addSlide({ masterName: "CONTENT" });
slide14Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide14Content.addText("CẤU TRÚC BÁO CÁO & SLIDE BẢO VỆ", { placeholder: "title" });

addText(
  slide14Content,
  [
    { text: "📄 Báo cáo Dự án PDF (15–25 Trang):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Định dạng nộp: ", options: { bold: true } },
    { text: "Tệp PDF chuẩn mực 15–25 trang (chưa tính phụ lục).\n\n" },
    { text: "• 13 Phần cấu trúc bắt buộc:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  1. Trang bìa & Tóm tắt điều hành\n  2. Giới thiệu bài toán & Từ điển dữ liệu\n  3. Thiết kế Kho dữ liệu / Tiền xử lý\n  4. Phương pháp, Kết quả & Đánh giá\n  5. Hàm ý Quản trị & Giới hạn đạo đức" }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide14Content,
  [
    { text: "🎙️ Slide & Thời lượng Bảo vệ Nhóm:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Quy mô slide: ", options: { bold: true } },
    { text: "Từ 12 đến 16 slide (chưa tính phụ lục).\n\n" },
    { text: "• Khung thời gian bảo vệ:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "  - Trình bày nhóm: 12 đến 15 phút.\n  - Hỏi đáp phản biện: 05 đến 07 phút.\n\n" },
    { text: "• Phân công thuyết trình: ", options: { bold: true } },
    { text: "Mọi thành viên nhóm đều phải trực tiếp trình bày phần việc của mình." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
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
  slide14Content,
  "💡 Quy tắc slide: Mỗi slide chỉ chứa 01 thông điệp chính; mọi biểu đồ phải có tiêu đề nêu rõ kết luận quản trị.",
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

slide14Content.addNotes(
  "Giảng viên quán triệt yêu cầu thời lượng trình bày và phân công trách nhiệm bảo vệ cho tất cả thành viên."
);

// ----------------------------------------------------
// Slide 15: CONTENT (CẤU TRÚC THƯ MỤC NỘP BÀI & README)
// ----------------------------------------------------
const slide15Content = pptx.addSlide({ masterName: "CONTENT" });
slide15Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide15Content.addText("CẤU TRÚC THƯ MỤC NỘP BÀI & README", { placeholder: "title" });

addText(
  slide15Content,
  [
    { text: "📦 Cấu trúc Thư mục Nộp tệp Nén (.zip):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tên tệp nén chuẩn: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "`STA5009N_NhomXX_TenNganGon.zip`\n\n" },
    { text: "• Các thư mục thành phần bắt buộc:\n", options: { bold: true } },
    { text: "  - `README.md`: Hướng dẫn & phân công.\n  - `data/`: Dữ liệu thô (`raw`) & đã xử lý.\n  - `notebooks/`: Mã nguồn Jupyter Notebook.\n  - `reports/`: Báo cáo `Bao_cao_cuoi_ky.pdf`.\n  - `slides/`: Slide thuyết trình `Slide_bao_ve.pdf`." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide15Content,
  [
    { text: "📝 Nội dung Yêu cầu tệp README.md:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tên đề tài & Thành viên nhóm.\n" },
    { text: "• Nguồn dữ liệu & Ngày truy cập.\n" },
    { text: "• Hướng dẫn cài đặt môi trường & Thư viện.\n" },
    { text: "• Hướng dẫn chạy mã nguồn & Tái lập kết quả.\n" },
    { text: "• Bảng Phân công công việc & Mức độ đóng góp (%) của từng thành viên." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
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
  slide15Content,
  "💡 Chuẩn đóng gói: Hồ sơ nộp bài phải cho phép người xem độc lập tái lập lại toàn bộ kết quả một cách dễ dàng.",
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

slide15Content.addNotes(
  "Giảng viên giải thích cách đóng gói thư mục nộp bài và tiêu chí tái lập kết quả."
);

// ----------------------------------------------------
// Slide 16: CONTENT (TIÊU CHÍ CHẤM ĐIỂM DỰ ÁN CUỐI KỲ)
// ----------------------------------------------------
const slide16Content = pptx.addSlide({ masterName: "CONTENT" });
slide16Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide16Content.addText("TIÊU CHÍ CHẤM ĐIỂM DỰ ÁN CUỐI KỲ", { placeholder: "title" });

slide16Content.addTable(
  [
    [
      { text: "Tiêu chí Đánh giá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Tỷ trọng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
      { text: "Dấu hiệu Đạt kết quả Tốt", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    ],
    [
      { text: "Hiểu bài toán & Dữ liệu", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "10%" },
      { text: "Xác định rõ câu hỏi nghiệp vụ, mục tiêu & giới hạn dữ liệu" },
    ],
    [
      { text: "Tiền xử lý & Thiết kế dữ liệu", options: { bold: true, color: DUE_COLORS.green } },
      { text: "20%" },
      { text: "Xử lý dữ liệu minh bạch; có kiểm soát rò rỉ; thiết kế DW đúng" },
    ],
    [
      { text: "Triển khai phương pháp", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "15%" },
      { text: "Phương pháp phù hợp, có baseline, có đối chứng & tái lập" },
    ],
    [
      { text: "Đánh giá kỹ thuật", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "20%" },
      { text: "Dùng thước đo phù hợp (Precision/Recall), so sánh có căn cứ" },
    ],
    [
      { text: "Diễn giải & Khuyến nghị", options: { bold: true, color: DUE_COLORS.green } },
      { text: "15%" },
      { text: "Chuyển kết quả thành insight & hành động có ý nghĩa quản trị" },
    ],
    [
      { text: "Báo cáo, Slide & Bảo vệ", options: { bold: true, color: DUE_COLORS.blue } },
      { text: "10%" },
      { text: "Báo cáo rõ ràng, slide trực quan, thuyết trình logic & làm chủ câu hỏi" },
    ],
    [
      { text: "Làm việc nhóm & Đóng góp", options: { bold: true, color: DUE_COLORS.orange } },
      { text: "10%" },
      { text: "Vai trò minh bạch, đóng góp cân bằng giữa các thành viên" },
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
  slide16Content,
  "💡 Trọng số điểm: Đánh giá định lượng & Tiền xử lý chiếm 40%; Insight & Khuyến nghị quản trị chiếm 30% tổng điểm.",
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

slide16Content.addNotes(
  "Giảng viên giải thích chi tiết bảng tiêu chí chấm điểm 100% cho học viên."
);

// ----------------------------------------------------
// Slide 17: CONTENT (MỐC THỜI GIAN & CAM KẾT HỌC THUẬT)
// ----------------------------------------------------
const slide17Content = pptx.addSlide({ masterName: "CONTENT" });
slide17Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide17Content.addText("MỐC THỜI GIAN & CAM KẾT HỌC THUẬT", { placeholder: "title" });

addText(
  slide17Content,
  [
    { text: "📅 Các Mốc Tiến độ Thực hiện:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Mốc 1 (Sau nhận đề): ", options: { bold: true } },
    { text: "Danh sách nhóm, vai trò & đề cương bài toán.\n\n" },
    { text: "• Mốc 2 (Giai đoạn 1): ", options: { bold: true } },
    { text: "Từ điển dữ liệu & Báo cáo EDA sơ bộ.\n\n" },
    { text: "• Mốc 3 (Giai đoạn 2): ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Tiền xử lý, thiết kế DW & mô hình Baseline.\n\n" },
    { text: "• Mốc 4 (Giai đoạn 3): ", options: { bold: true } },
    { text: "So sánh mô hình & Diễn giải khuyến nghị.\n\n" },
    { text: "• Mốc 5 (Trước bảo vệ): ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Hoàn thiện Báo cáo, Slide, Mã nguồn & README." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide17Content,
  [
    { text: "📜 Cam kết Học thuật & Sử dụng AI:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tính trung thực học thuật: ", options: { bold: true } },
    { text: "Tuyệt đối không sao chép báo cáo/mã nguồn mà không trích dẫn.\n\n" },
    { text: "• Sử dụng công cụ AI: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "AI được dùng hỗ trợ diễn đạt hoặc gợi ý code. Học viên chịu trách nhiệm 100% về hiểu dữ liệu & phương pháp.\n\n" },
    { text: "• Khai báo bắt buộc: ", options: { bold: true } },
    { text: "Ghi ngắn gọn phạm vi dùng AI trong Phụ lục báo cáo." }
  ],
  {
    x: cmToInch(13.1),
    y: cmToInch(2.0),
    w: cmToInch(11.5),
    h: cmToInch(7.5),
    fontSize: 10.5,
    lineSpacing: 14.5,
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
  slide17Content,
  "💡 Thông điệp chốt: Dự án cuối kỳ là cơ hội khẳng định năng lực phân tích dữ liệu thực chiến của Thạc sĩ Kinh tế.",
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

slide17Content.addNotes(
  "Giảng viên giải thích chính sách sử dụng AI có trách nhiệm trong làm bài tập cuối kỳ."
);

// ----------------------------------------------------
// Slide 18: END SLIDE
// ----------------------------------------------------
const slide18End = pptx.addSlide({ masterName: "END" });
slide18End.addText("EMAIL: canhdtn@due.edu.vn", { placeholder: "email" });
slide18End.addText("SĐT: 0909090909", { placeholder: "phone" });
slide18End.addText("BÀI TẬP CUỐI KỲ", { placeholder: "subject" });
slide18End.addText("Khoa Thống kê-Tin học", { placeholder: "faculty" });
