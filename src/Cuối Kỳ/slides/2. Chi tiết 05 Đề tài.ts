import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 7: SECTION PHẦN 2
// ----------------------------------------------------
const slide7Section = pptx.addSlide({ masterName: "SECTION" });
slide7Section.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide7Section.addText("PHẦN 2: CHI TIẾT 05 ĐỀ TÀI PHÂN CÔNG", { placeholder: "title" });
slide7Section.addText("Mỗi nhóm thực hiện trọn vẹn 01 đề tài trên bộ dữ liệu học thuật chuẩn UCI", { placeholder: "content" });
slide7Section.addText(
  "\"Từ Tài chính Ngân hàng, Bán lẻ Trực tuyến, e-Commerce, Sản xuất Rượu vang đến Điều tra Dân số & Đạo đức AI.\"\n\n" +
  "Đề tài 1: Bank Marketing  |  Đề tài 2: Online Retail  |  Đề tài 3: Shoppers Intention  |  Đề tài 4: Wine Quality  |  Đề tài 5: Adult Income",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 8: CONTENT (ĐỀ TÀI 1: DỰ BÁO TIỀN GỬI KỲ HẠN)
// ----------------------------------------------------
const slide8Content = pptx.addSlide({ masterName: "CONTENT" });
slide8Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide8Content.addText("ĐỀ TÀI 1: DỰ BÁO TIỀN GỬI KỲ HẠN", { placeholder: "title" });

addText(
  slide8Content,
  [
    { text: "🏦 Bài toán & Dữ liệu (Bank Marketing):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "UCI Bank Marketing (Chiến dịch tiếp thị Bồ Đào Nha).\n\n" },
    { text: "• Biến mục tiêu `y`: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "`yes` (Đăng ký) vs `no` (Không đăng ký).\n\n" },
    { text: "• Mục tiêu nghiệp vụ: ", options: { bold: true } },
    { text: "Dự báo khách hàng tiềm năng để ưu tiên cuộc gọi trong chiến dịch tiếp thị." }
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
  slide8Content,
  [
    { text: "⚙️ Yêu cầu Kỹ thuật & Rò rỉ Dữ liệu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thuật toán bắt buộc: ", options: { bold: true } },
    { text: "Decision Tree và Naive Bayes (So sánh ≥03 mô hình).\n\n" },
    { text: "• Phân tích Rò rỉ Dữ liệu (Data Leakage):\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "  So sánh mô hình Có vs Không có biến `duration` (thời lượng cuộc gọi — chỉ biết Sau khi cuộc gọi kết thúc).\n\n" },
    { text: "• Yêu cầu DW: ", options: { bold: true } },
    { text: "Dựng Star Schema Fact chiến dịch & các Dimension." }
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
  slide8Content,
  "💡 Điểm chốt Đề tài 1: Không dùng đơn thuần Accuracy; phải phân tích bài toán Mất cân bằng lớp và rủi ro rò rỉ dữ liệu `duration`.",
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

slide8Content.addNotes(
  "Giảng viên giải thích rủi ro rò rỉ dữ liệu của biến duration trong Đề tài 1."
);

// ----------------------------------------------------
// Slide 9: CONTENT (ĐỀ TÀI 2: PHÂN KHÚC KHÁCH & MUA KÈM)
// ----------------------------------------------------
const slide9Content = pptx.addSlide({ masterName: "CONTENT" });
slide9Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide9Content.addText("ĐỀ TÀI 2: PHÂN KHÚC KHÁCH & MUA KÈM", { placeholder: "title" });

addText(
  slide9Content,
  [
    { text: "🛍️ Phân tích RFM & Phân cụm (Online Retail):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "UCI Online Retail (Giao dịch bán lẻ tại Anh).\n\n" },
    { text: "• Biến RFM tạo mới: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Recency (Số ngày mua gần nhất), Frequency (Số lần mua), Monetary (Tổng tiền).\n\n" },
    { text: "• Thuật toán Phân cụm: ", options: { bold: true } },
    { text: "K-means + Hierarchical Clustering / DBSCAN; báo cáo chỉ số Silhouette Score & Elbow Method." }
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
  slide9Content,
  [
    { text: "🛒 Luật Kết hợp & Bán chéo (Cross-sell):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Khai phá Luật mua kèm: ", options: { bold: true } },
    { text: "Apriori hoặc FP-Growth trên ma trận hóa đơn.\n\n" },
    { text: "• Thước đo bắt buộc: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Support, Confidence, Lift ➔ Lọc bỏ luật dư thừa.\n\n" },
    { text: "• Sản phẩm nộp: ", options: { bold: true } },
    { text: "Tối thiểu 10 luật có ý nghĩa + 03 khuyến nghị bán chéo + Kho dữ liệu bán lẻ Star Schema." }
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
  slide9Content,
  "💡 Điểm chốt Đề tài 2: Phải xử lý triệt để hóa đơn bị hủy/trả hàng (giá trị âm) trước khi tính toán chỉ số RFM.",
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

slide9Content.addNotes(
  "Giảng viên lưu ý học viên tiền xử lý hóa đơn âm trước khi phân tích RFM."
);

// ----------------------------------------------------
// Slide 10: CONTENT (ĐỀ TÀI 3: DỰ BÁO Ý ĐỊNH MUA HÀNG)
// ----------------------------------------------------
const slide10Content = pptx.addSlide({ masterName: "CONTENT" });
slide10Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide10Content.addText("ĐỀ TÀI 3: DỰ BÁO Ý ĐỊNH MUA HÀNG", { placeholder: "title" });

addText(
  slide10Content,
  [
    { text: "💻 Bài toán Chuyển đổi e-Commerce:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "UCI Online Shoppers Purchasing Intention (12.330 phiên truy cập website).\n\n" },
    { text: "• Biến mục tiêu `Revenue`: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "`TRUE` (Tạo doanh thu) vs `FALSE` (Không tạo).\n\n" },
    { text: "• Mất cân bằng dữ liệu: ", options: { bold: true } },
    { text: "10.422 phiên `FALSE` vs 1.908 phiên `TRUE` (~15.4%)." }
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
  slide10Content,
  [
    { text: "🧠 Mô hình Neural Network & Precision/Recall:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 3 Mô hình bắt buộc: ", options: { bold: true } },
    { text: "Decision Tree, Naive Bayes và MLP Neural Network.\n\n" },
    { text: "• Đánh đổi Precision vs Recall: ", options: { bold: true, color: DUE_COLORS.green } },
    { text: "Doanh nghiệp muốn kích hoạt ưu đãi real-time ➔ Nên ưu tiên Recall (bắt tối đa khách mua) hay Precision?\n\n" },
    { text: "• Thước đo nâng cao: ", options: { bold: true } },
    { text: "Vẽ ROC Curve & Precision-Recall (PR) Curve." }
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
  slide10Content,
  "💡 Điểm chốt Đề tài 3: Đề xuất ít nhất 02 chân dung phiên truy cập có xác suất chuyển đổi cao nhất để cá nhân hóa.",
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

slide10Content.addNotes(
  "Giảng viên giải thích bài toán đánh đổi Precision vs Recall trong kích hoạt ưu đãi e-Commerce."
);

// ----------------------------------------------------
// Slide 11: CONTENT (ĐỀ TÀI 4: CHẤM ĐIỂM CHẤT LƯỢNG RƯỢU)
// ----------------------------------------------------
const slide11Content = pptx.addSlide({ masterName: "CONTENT" });
slide11Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide11Content.addText("ĐỀ TÀI 4: CHẤM ĐIỂM CHẤT LƯỢNG RƯỢU", { placeholder: "title" });

addText(
  slide11Content,
  [
    { text: "🍷 Tích hợp Dữ liệu & Phân cụm (Wine Quality):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "UCI Wine Quality (Kết hợp 2 tệp vang đỏ & vang trắng, tạo biến `wine_type`).\n\n" },
    { text: "• Phân cụm Hóa lý: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "K-means + Hierarchical / DBSCAN trên 11 chỉ tiêu hóa lý.\n\n" },
    { text: "• Trực quan hóa PCA: ", options: { bold: true } },
    { text: "Dùng PCA giảm chiều xuống 2D để vẽ biểu đồ cụm sản phẩm." }
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
  slide11Content,
  [
    { text: "🧪 Rời rạc hóa & Phân lớp Đa lớp:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Rời rạc hóa `quality` thành 3 lớp:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "  - Thấp (`quality <= 5`)\n  - Trung bình (`quality = 6`)\n  - Cao (`quality >= 7`)\n\n" },
    { text: "• Mô hình Phân lớp Đa lớp: ", options: { bold: true } },
    { text: "Decision Tree, Naive Bayes, MLP Neural Network ➔ Kiểm soát chất lượng sản xuất." }
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
  slide11Content,
  "💡 Điểm chốt Đề tài 4: PCA chỉ dùng hỗ trợ trực quan hóa 2D, không được thay thế đánh giá định lượng Silhouette & F1-score.",
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

slide11Content.addNotes(
  "Giảng viên lưu ý vai trò của PCA trong trực quan hóa và cách rời rạc hóa biến chất lượng."
);

// ----------------------------------------------------
// Slide 12: CONTENT (ĐỀ TÀI 5: DỰ BÁO THU NHẬP & ĐẠO ĐỨC)
// ----------------------------------------------------
const slide12Content = pptx.addSlide({ masterName: "CONTENT" });
slide12Content.addText("BÀI TẬP CUỐI KỲ", { placeholder: "footer" });
slide12Content.addText("ĐỀ TÀI 5: DỰ BÁO THU NHẬP & ĐẠO ĐỨC", { placeholder: "title" });

addText(
  slide12Content,
  [
    { text: "📊 Điều tra Dân số & Dự báo Thu nhập:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "UCI Adult Census Income (Dự báo thu nhập >50K USD).\n\n" },
    { text: "• Tiền xử lý dữ liệu thiếu: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Xử lý ký hiệu `?` ➔ So sánh tác động giữa 2 phương án: Loại bỏ dòng vs Bù dữ liệu thiếu (Imputation).\n\n" },
    { text: "• 3 Mô hình phân lớp: ", options: { bold: true } },
    { text: "Decision Tree, Naive Bayes, MLP Neural Network." }
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
  slide12Content,
  [
    { text: "⚖️ Công bằng Thuật toán & Đạo đức Dữ liệu:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Đánh giá theo Nhóm nhân khẩu học:\n", options: { bold: true, color: DUE_COLORS.green } },
    { text: "  Đánh giá hiệu năng mô hình (Accuracy, Recall) theo `sex`, `race`, `age_group`.\n\n" },
    { text: "• Phân tích Thiên lệch (Algorithmic Bias):\n", options: { bold: true } },
    { text: "  Không suy diễn kết quả thành quan hệ nhân quả; thảo luận rủi ro khi dùng mô hình tuyển dụng/tín dụng thực tế." }
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
  slide12Content,
  "💡 Điểm chốt Đề tài 5: Nhóm phải nêu rõ giới hạn đạo đức và nguyên tắc ứng dụng mô hình có trách nhiệm (Responsible AI).",
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

slide12Content.addNotes(
  "Giảng viên nhấn mạnh yêu cầu phân tích công bằng thuật toán theo nhóm nhân khẩu học."
);
