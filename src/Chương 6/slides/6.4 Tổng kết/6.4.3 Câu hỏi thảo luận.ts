import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 131: SECTION
// ----------------------------------------------------
const slide131Section = pptx.addSlide({ masterName: "SECTION" });
slide131Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide131Section.addText("6.4.3. CÂU HỎI THẢO LUẬN VÀ BÀI TẬP ÔN CHƯƠNG", { placeholder: "title" });
slide131Section.addText("Vận dụng toàn bộ môn học trên một bộ dữ liệu xuyên suốt (Capstone Project)", { placeholder: "content" });
slide131Section.addText(
  "\"Thay vì ôn tập rời rạc — hãy cùng thực hiện một Đồ án tích hợp giải quyết bài toán Gian lận Thẻ tín dụng thực tế.\"\n\n" +
  "Kaggle Dataset 1.3M  |  Bài tập 1 (Ch.2)  |  Bài tập 2 (Ch.3-5)  |  Bài tập 3 (Ch.6)  |  Đề ôn Vấn đáp",
  { placeholder: "subContent" }
);

// ----------------------------------------------------
// Slide 132: CONTENT (BỘ DỮ LIỆU THỰC HÀNH CAPSTONE)
// ----------------------------------------------------
const slide132Content = pptx.addSlide({ masterName: "CONTENT" });
slide132Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide132Content.addText("BỘ DỮ LIỆU THỰC HÀNH CAPSTONE", { placeholder: "title" });

addText(
  slide132Content,
  [
    { text: "📊 Thông tin Bộ dữ liệu Thực hành Kaggle:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bộ dữ liệu: ", options: { bold: true } },
    { text: "Credit Card Transactions Dataset (Priyam Choksi).\n\n" },
    { text: "• Quy mô dữ liệu thô: ", options: { bold: true } },
    { text: "1.296.675 giao dịch thẻ tín dụng thô, 24 thuộc tính mô phỏng giao dịch ngân hàng thật tại Mỹ.\n\n" },
    { text: "• Nhóm biến chính:\n", options: { bold: true } },
    { text: "  - Giao dịch: `trans_date_trans_time`, `amt`, `category`.\n" },
    { text: "  - Khách hàng: `first`, `last`, `gender`, `dob`, `job`.\n" },
    { text: "  - Vị trí: `lat/long`, `merch_lat/merch_long`.\n" },
    { text: "  - Nhãn mục tiêu: `is_fraud` (0 = Hợp lệ, 1 = Gian lận)." }
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
  slide132Content,
  [
    { text: "🎯 Lý do Lựa chọn cho Đồ án Capstone:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Tích hợp đa dạng loại dữ liệu:\n", options: { bold: true } },
    { text: "  Vừa có dữ liệu bảng (Ch.2-5), vừa có Chuỗi thời gian (6.1.1), Không gian (6.1.3), và Mạng bipartite (6.1.2).\n\n" },
    { text: "• Bài toán thực tế ngành Tài chính: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phát hiện gian lận real-time (6.3.1) — kiểm thử năng lực xử lý mất cân bằng dữ liệu & đánh đổi rủi ro." }
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
  slide132Content,
  "💡 Hành trình học tập: Học viên dùng duy nhất một bộ dữ liệu để tái hiện trọn vẹn quy trình CRISP-DM từ Chương 2 đến Chương 6.",
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

slide132Content.addNotes(
  "Giới thiệu bộ dữ liệu Credit Card Transactions Dataset trên Kaggle cho học viên làm Capstone."
);

// ----------------------------------------------------
// Slide 133: CONTENT (BÀI TẬP LỚN 1 — TIỀN XỬ LÝ VÀ PHÂN TÍCH KHÁM PHÁ - ÔN CHƯƠNG 2)
// ----------------------------------------------------
const slide133Content = pptx.addSlide({ masterName: "CONTENT" });
slide133Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide133Content.addText("BÀI TẬP 1: EDA & TIỀN XỬ LÝ (CH.2)", { placeholder: "title" });

addText(
  slide133Content,
  [
    { text: "🛠️ Bước 1 & 2: Tiền xử lý Dữ liệu thô:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Bước 1: ", options: { bold: true } },
    { text: "Kiểm tra kiểu dữ liệu, xử lý thiếu (`merch_zipcode`), phát hiện trùng lặp.\n\n" },
    { text: "• Bước 2: ", options: { bold: true } },
    { text: "Rã chuỗi thời gian `trans_date_trans_time` ➔ Tách thành các thuộc tính: giờ trong ngày, ngày trong tuần, tháng.\n\n" },
    { text: "• Bước 3: ", options: { bold: true } },
    { text: "Tính tuổi từ `dob`; kiểm tra & xử lý ngoại lệ cột `amt` bằng IQR boxplot." }
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
  slide133Content,
  [
    { text: "📈 Bước 4 & Câu hỏi Trực quan (EDA):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• 3 Biểu đồ khám phá bắt buộc:\n", options: { bold: true } },
    { text: "  1. Phân phối `amt` theo `is_fraud`.\n" },
    { text: "  2. Tỷ lệ gian lận theo danh mục `category`.\n" },
    { text: "  3. Tỷ lệ gian lận theo khung giờ trong ngày.\n\n" },
    { text: "• Câu hỏi phân tích: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Từ EDA, anh/chị dự đoán 3 đặc trưng nào có khả năng dự báo gian lận tốt nhất? Vì sao?" }
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
  slide133Content,
  "💡 Yêu cầu sản phẩm: Nộp file Jupyter Notebook (.ipynb) + Báo cáo tóm tắt kết quả EDA.",
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

slide133Content.addNotes(
  "Bài tập 1 củng cố toàn bộ kỹ năng chuẩn hóa và làm sạch dữ liệu đã học ở Chương 2."
);

// ----------------------------------------------------
// Slide 134: CONTENT (BÀI TẬP LỚN 2 — PHÂN LỚP, PHÂN CỤM, LUẬT KẾT HỢP - ÔN CHƯƠNG 3–5)
// ----------------------------------------------------
const slide134Content = pptx.addSlide({ masterName: "CONTENT" });
slide134Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide134Content.addText("BÀI TẬP 2: MÔ HÌNH HÓA (CH.3–5)", { placeholder: "title" });

addText(
  slide134Content,
  [
    { text: "🎯 3 Phần Kỹ thuật Nền tảng:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Phần A (Ch.3 — Phân lớp): ", options: { bold: true } },
    { text: "Dự đoán `is_fraud` bằng Logistic & Random Forest; xử lý mất cân bằng bằng SMOTE/Undersampling; Đánh giá bằng Recall, Precision, AUC-ROC (Không dùng Accuracy).\n\n" },
    { text: "• Phần B (Ch.4 — Phân cụm): ", options: { bold: true } },
    { text: "Phân cụm hành vi chi tiêu khách hàng bằng K-means ➔ Đặt tên & mô tả chân dung từng cụm.\n\n" },
    { text: "• Phần C (Ch.5 — Luật): ", options: { bold: true } },
    { text: "Rời rạc hóa `amt`, chạy Apriori tìm luật kết hợp giữa `category` và mức chi tiêu." }
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
  slide134Content,
  [
    { text: "❓ Câu hỏi Đánh đổi Rủi ro Quản lý:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "“Nếu Ngân hàng chỉ chấp nhận tỷ lệ Cảnh báo nhầm (False Positive) tối đa 5% ➔ Ngưỡng phân loại (Decision Threshold) nên đặt tại đâu?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Đánh giá Kinh tế: ", options: { bold: true } },
    { text: "So sánh chi phí gọi điện xác minh nhầm vs Tổn thất khi để lọt 1 vụ gian lận thật." }
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
  slide134Content,
  "💡 Yêu cầu thực hiện: Làm việc theo nhóm 2-3 người, nộp báo cáo kết quả so sánh mô hình & phân tích chi phí.",
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

slide134Content.addNotes(
  "Bài tập trọng tâm kiểm tra năng lực mô hình hóa của học viên trên cả 3 thuật toán nền Ch.3-5."
);

// ----------------------------------------------------
// Slide 135: CONTENT (BÀI TẬP 3: VẬN DỤNG CHƯƠNG 6)
// ----------------------------------------------------
const slide135Content = pptx.addSlide({ masterName: "CONTENT" });
slide135Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide135Content.addText("BÀI TẬP 3: VẬN DỤNG CHƯƠNG 6", { placeholder: "title" });

addText(
  slide135Content,
  [
    { text: "🚀 4 Phần Vận dụng Nâng cao Chương 6:\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Phần A (6.1.1 — Chuỗi): ", options: { bold: true } },
    { text: "Lọc chuỗi giao dịch theo thẻ `cc_num`, kiểm tra xem gian lận xuất hiện thành cụm chuỗi bất thường không.\n\n" },
    { text: "• Phần B (6.1.2 — Đồ thị/Mạng): ", options: { bold: true } },
    { text: "Dựng mạng Bipartite Khách hàng – Người bán bằng `networkx`, tính Centrality tìm 'điểm nóng gian lận'.\n\n" },
    { text: "• Phần C (6.3.1 — Tài chính): ", options: { bold: true } },
    { text: "Tính khoảng cách địa lý Haversine từ vị trí khách vs vị trí merchant ➔ Xem khoảng cách xa có tăng nguy cơ gian lận không." }
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
  slide135Content,
  [
    { text: "⚖️ Phần D (6.3.6 — Xã hội & Đạo đức):\n\n", options: { bold: true, fontSize: 12 } },
    { text: "• Thảo luận Đạo đức Mô hình:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Bộ dữ liệu chứa `gender`, `job`, `city_pop` ➔ Nếu đưa các thuộc tính này vào mô hình, có rủi ro Thiên lệch (Bias) nào không?\n\n" },
    { text: "• Đề xuất giải pháp: ", options: { bold: true } },
    { text: "Phương pháp kiểm toán độ công bằng mô hình (Fairness metrics) theo các nhóm nhạy cảm." }
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
  slide135Content,
  "💡 Điểm nhấn khép lại môn: Điểm số Phần D (Thảo luận Đạo đức) được tính trọng số ngang bằng với Phần Code kỹ thuật.",
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

slide135Content.addNotes(
  "Bài tập 3 khép lại toàn bộ học phần bằng việc tích hợp cả kỹ thuật nâng cao Chương 6 lẫn tư duy phản biện đạo đức."
);

// ----------------------------------------------------
// Slide 136: CONTENT (CÂU HỎI ÔN TẬP LÝ THUYẾT CHƯƠNG 6)
// ----------------------------------------------------
const slide136Content = pptx.addSlide({ masterName: "CONTENT" });
slide136Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide136Content.addText("CÂU HỎI ÔN TẬP LÝ THUYẾT CHƯƠNG 6", { placeholder: "title" });

addText(
  slide136Content,
  [
    { text: "❓ 6 CÂU HỎI ĐỀ CƯƠNG ÔN TẬP THI VẤN ĐÁP / TỰ LUẬN:\n\n", options: { bold: true, fontSize: 12.5, color: DUE_COLORS.green } },
    { text: "1. Phân biệt 3 loại dữ liệu chuỗi (Thời gian, Ký hiệu, Sinh học) — Cho ví dụ kinh tế cho mỗi loại.\n" },
    { text: "2. Giải thích vì sao Lọc cộng tác (Collaborative Filtering) là cầu nối giữa Khai phá mạng (6.1.2) & Hệ gợi ý (6.3.5)?\n" },
    { text: "3. So sánh hai triết lý Signature-based vs Anomaly-based trong bài toán phát hiện xâm nhập an ninh mạng.\n" },
    { text: "4. Trình bày 5 quan điểm lý thuyết KPDL (6.2.2); Phân tích ý nghĩa đặc thù của Quan điểm Kinh tế vi mô.\n" },
    { text: "5. Nêu 3 rủi ro đạo đức/pháp lý của KPDL và đối chiếu trực tiếp với Nghị định 13/2023/NĐ-CP tại Việt Nam.\n" },
    { text: "6. Từ bộ dữ liệu Credit Card đã thực hành, hãy chỉ ra ứng dụng cụ thể của 3 hướng (6.1, 6.2, 6.3) nhóm đã áp dụng." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: cmToInch(7.5),
    fontSize: 11,
    lineSpacing: 18,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 12,
    rectRadius: 0.1,
    valign: "top",
  }
);

addText(
  slide136Content,
  "💡 Khép lại Chương 6: Bộ câu hỏi giúp học viên tự kiểm tra toàn bộ tri thức môn Khai phá Dữ liệu trước kỳ thi cuối kỳ.",
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

slide136Content.addNotes(
  "Bộ câu hỏi ôn tập tổng hợp trọn vẹn Chương 6 dành cho học viên chuẩn bị thi."
);
