import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1: TITLE BÌA
// ----------------------------------------------------
const slide1Title = pptx.addSlide({ masterName: "TITLE" });
slide1Title.addText("KHAI PHÁ DỮ LIỆU", { placeholder: "subject" });
slide1Title.addText("Khoa Thống kê - Tin học", { placeholder: "faculty" });
slide1Title.addText("BÀI TẬP CUỐI KỲ", { placeholder: "title" });
slide1Title.addText("HƯỚNG DẪN DỰ ÁN VÀ 05 ĐỀ TÀI PHÂN CÔNG THEO NHÓM", { placeholder: "subtitle" });

// ----------------------------------------------------
// Slide 2: OBJECTIVES (CLO1 - CLO6)
// ----------------------------------------------------
const slide2Obj = pptx.addSlide({ masterName: "OBJECTIVE" });
slide2Obj.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide2Obj.addText(
  "• CLO1: Áp dụng kỹ thuật tiền xử lý dữ liệu phù hợp (Xử lý thiếu, nhiễu, biến đổi, mã hóa).\n\n" +
  "• CLO2: Thiết kế cấu trúc dữ liệu phân tích & Kho dữ liệu dạng Star/Snowflake Schema.\n\n" +
  "• CLO3: Lựa chọn, so sánh và đánh giá các kỹ thuật KPDL phù hợp với bài toán nghiệp vụ.\n\n" +
  "• CLO4: Xây dựng quy trình dự án KPDL hoàn chỉnh (CRISP-DM) có khả năng tái lập.\n\n" +
  "• CLO5: Diễn giải kết quả mô hình, cụm hoặc luật theo ngôn ngữ nghiệp vụ kinh doanh.\n\n" +
  "• CLO6: Thành thạo công cụ (Python, Colab, scikit-learn, Orange, WEKA) để trình bày dự án.",
  { placeholder: "content" }
);

// ----------------------------------------------------
// Slide 3: SECTION PHẦN 1
// ----------------------------------------------------
const slide3Section = pptx.addSlide({ masterName: "SECTION" });
slide3Section.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide3Section.addText("PHẦN 1: QUY TRÌNH & THỦ TỤC DỰ ÁN", { placeholder: "title" });
slide3Section.addText("Chuyển dữ liệu thô thành phát hiện có ý nghĩa hỗ trợ ra quyết định kinh doanh", { placeholder: "content" });
slide3Section.addText(
  "\"Dự án không chỉ là chạy phần mềm hay báo cáo chỉ số — Nhóm phải chứng minh năng lực tư duy nghiệp vụ và quản trị rủi ro.\"\n\n" +
  "Quy định Nhóm 4-6 HV  |  Chuẩn CRISP-DM  |  Thiết kế Kho Dữ liệu",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 4: CONTENT (MỤC ĐÍCH DỰ ÁN & QUY ĐỊNH CHUNG)
// ----------------------------------------------------
const slide4Content = pptx.addSlide({ masterName: "CONTENT" });
slide4Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide4Content.addText("MỤC ĐÍCH DỰ ÁN & QUY ĐỊNH CHUNG", { placeholder: "title" });

addText(
  slide4Content,
  [
    { text: "🎯 Mục đích Dự án Cuối kỳ:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Giải quyết bài toán thực tế: ", options: { bold: true } },
    { text: "Chuyển bộ dữ liệu thô thành phát hiện có ý nghĩa và khuyến nghị quản trị.\n\n" },
    { text: "• Yêu cầu cốt lõi:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  - Bài toán nghiệp vụ rõ ràng.\n  - Tiền xử lý dữ liệu hợp lý.\n  - Kỹ thuật khai phá có căn cứ.\n  - Diễn giải bằng ngôn ngữ kinh doanh." }
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
  slide4Content,
  [
    { text: "📋 Quy định Vận hành & Công cụ:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Quy mô nhóm: ", options: { bold: true } },
    { text: "Từ 04 đến 06 học viên cao học; mỗi thành viên có vai trò & sản phẩm cụ thể.\n\n" },
    { text: "• Công cụ khuyến nghị: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Python (Jupyter Notebook, Google Colab), `pandas`, `scikit-learn`, `mlxtend`.\n\n" },
    { text: "• Yêu cầu tái lập (Reproducibility): ", options: { bold: true } },
    { text: "Mã nguồn và báo cáo phải chạy lại ra đúng kết quả." }
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
  slide4Content,
  "💡 Lưu ý học thuật: Không dán code/bảng thô lên slide; tập trung trình bày insight nghiệp vụ và khuyến nghị hành động.",
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

slide4Content.addNotes(
  "Giảng viên quán triệt nguyên tắc làm việc nhóm và tính tái lập của mã nguồn dự án."
);

// ----------------------------------------------------
// Slide 5: CONTENT (QUY TRÌNH 7 BƯỚC THỰC HIỆN DỰ ÁN)
// ----------------------------------------------------
const slide5Content = pptx.addSlide({ masterName: "CONTENT" });
slide5Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide5Content.addText("QUY TRÌNH 7 BƯỚC THỰC HIỆN DỰ ÁN", { placeholder: "title" });

addText(
  slide5Content,
  [
    { text: "🔄 4 Bước Đột phá Đầu tiên (Bán thành phẩm):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 1. Hiểu bài toán: ", options: { bold: true } },
    { text: "Xác định câu hỏi nghiệp vụ & tiêu chí thành công.\n\n" },
    { text: "• Bước 2. Hiểu dữ liệu: ", options: { bold: true } },
    { text: "Lập bảng Từ điển dữ liệu (Data Dictionary), EDA sơ bộ.\n\n" },
    { text: "• Bước 3. Tiền xử lý: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Xử lý thiếu, nhiễu, mã hóa & KIỂM SOÁT RÒ RỈ DỮ LIỆU.\n\n" },
    { text: "• Bước 4. Thiết kế dữ liệu: ", options: { bold: true } },
    { text: "Dựng cấu trúc phân tích hoặc Kho dữ liệu (DW)." }
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
  slide5Content,
  [
    { text: "🚀 3 Bước Hoàn thiện Kết quả (Sản phẩm):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 5. Mô hình hóa: ", options: { bold: true } },
    { text: "Thử nghiệm tối thiểu 02-03 phương pháp hoặc cấu hình.\n\n" },
    { text: "• Bước 6. Đánh giá kỹ thuật: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Confusion Matrix, Precision/Recall, Silhouette, Lift.\n\n" },
    { text: "• Bước 7. Diễn giải & Khuyến nghị: ", options: { bold: true } },
    { text: "Dịch chỉ số số học thành khuyến nghị hành động kinh doanh." }
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
  slide5Content,
  "💡 Nguyên tắc CRISP-DM: Quy trình là vòng lặp liên tục — Nhóm cần quay lại chỉnh sửa dữ liệu nếu mô hình chưa đạt yêu cầu.",
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

slide5Content.addNotes(
  "Giảng viên giải thích mối quan hệ giữa 7 bước thực hiện và khung chuẩn quốc tế CRISP-DM."
);

// ----------------------------------------------------
// Slide 6: CONTENT (THIẾT KẾ KHO DỮ LIỆU STAR/SNOWFLAKE)
// ----------------------------------------------------
const slide6Content = pptx.addSlide({ masterName: "CONTENT" });
slide6Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide6Content.addText("THIẾT KẾ KHO DỮ LIỆU STAR/SNOWFLAKE", { placeholder: "title" });

addText(
  slide6Content,
  [
    { text: "⭐ Yêu cầu với Đề tài Giao dịch:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thiết kế Kho dữ liệu (Data Warehouse):\n", options: { bold: true } },
    { text: "  Bắt buộc đối với đề tài có dữ liệu giao dịch (Đề tài 1, Đề tài 2).\n\n" },
    { text: "• Mô hình hóa Đa chiều: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Mô hình Ngôi sao (Star Schema) hoặc Mô hình Bông tuyết (Snowflake Schema)." }
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
  slide6Content,
  [
    { text: "📐 4 Thành phần Cấu trúc Bắt buộc:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "1. Fact Table & Grain: ", options: { bold: true } },
    { text: "Đơn vị quan sát nhỏ nhất của bảng Fact.\n\n" },
    { text: "2. Dimension Tables: ", options: { bold: true } },
    { text: "Khách hàng, Sản phẩm, Thời gian, Kênh.\n\n" },
    { text: "3. Khóa & Measures: ", options: { bold: true } },
    { text: "Primary Key, Foreign Key, Doanh thu, Số lượng.\n\n" },
    { text: "4. Quy tắc ETL: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Quy trình Trích xuất - Biến đổi - Nạp dữ liệu." }
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
  slide6Content,
  "💡 Ý nghĩa thực tiễn: Kho dữ liệu giúp chuyển giao dữ liệu giao dịch biến động thành cấu trúc báo cáo OLAP ổn định.",
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

slide6Content.addNotes(
  "Giảng viên nhấn mạnh tiêu chí đánh giá CLO2 thông qua thiết kế Star Schema."
);
