import { SlideGenerator } from "../../../slide-generator.ts";
import { addSectionText, addTable, addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 131: SECTION
// ----------------------------------------------------
const slide131Section = pptx.addSlide({ masterName: "SECTION" });
slide131Section.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
addSectionText(slide131Section, "title", "6.4.3. CÂU HỎI THẢO LUẬN VÀ BÀI TẬP ÔN CHƯƠNG");
addSectionText(slide131Section, "content", "Vận dụng toàn bộ môn học trên một bộ dữ liệu xuyên suốt (Capstone Project)");
addSectionText(slide131Section, "subContent", "\"Thay vì ôn tập rời rạc — hãy cùng thực hiện một Đồ án tích hợp giải quyết bài toán Gian lận Thẻ tín dụng thực tế.\"\n\n" +
  "Kaggle Dataset 1.3M  |  Bài tập 1 (Ch.2)  |  Bài tập 2 (Ch.3-5)  |  Bài tập 3 (Ch.6)  |  Đề ôn Vấn đáp");

// ----------------------------------------------------
// Slide 132: CONTENT (BỘ DỮ LIỆU THỰC HÀNH CAPSTONE)
// ----------------------------------------------------
const slide132Content = pptx.addSlide({ masterName: "CONTENT" });
slide132Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide132Content.addText("BỘ DỮ LIỆU THỰC HÀNH CAPSTONE", { placeholder: "title" });

addText(
  slide132Content,
  [
    { text: "📊 Bộ dữ liệu thực hành (Kaggle):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Quy mô: ", options: { bold: true } },
    { text: "Credit Card Transactions — 1.296.675 giao dịch thô, 24 cột.\n\n" },
    { text: "• Nhóm biến chính:\n", options: { bold: true } },
    { text: "  - Giao dịch: `trans_date_trans_time`, `amt`, `category`.\n" },
    { text: "  - Khách hàng: `gender`, `dob`, `job`, `city_pop`.\n" },
    { text: "  - Vị trí: `lat/long`, `merch_lat/merch_long`; nhãn `is_fraud`." }
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
  slide132Content,
  [
    { text: "🎯 Lý do Lựa chọn cho Đồ án Capstone:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Đủ mọi loại dữ liệu của chương:\n", options: { bold: true } },
    { text: "  Vừa có dữ liệu bảng (Ch.2–5), vừa có chuỗi thời gian (6.1.1), không gian (6.1.3) và mạng hai phía (6.1.2).\n\n" },
    { text: "• Bài toán ngành tài chính: ", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Phát hiện gian lận (6.3.1) — rèn xử lý mất cân bằng và đánh đổi rủi ro." }
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
  slide132Content,
  "💡 Một bộ dữ liệu duy nhất, đi trọn quy trình CRISP-DM từ Chương 2 đến 6.",
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
    { text: "🛠️ Bước 1 & 2: Tiền xử lý Dữ liệu thô:\n\n", options: { bold: true, fontSize: 13.5 } },
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
  slide133Content,
  [
    { text: "📈 Bước 4 & Câu hỏi Trực quan (EDA):\n\n", options: { bold: true, fontSize: 13.5 } },
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
  slide133Content,
  "💡 Yêu cầu sản phẩm: Nộp file Jupyter Notebook (.ipynb) + Báo cáo tóm tắt kết quả EDA.",
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
    { text: "🎯 3 Phần Kỹ thuật Nền tảng:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phần A (Ch.3 — Phân lớp): ", options: { bold: true } },
    { text: "Lấy Logistic ở bài tập 6.2.1 làm baseline ➔ mở rộng bằng Random Forest; xử lý mất cân bằng (SMOTE); đánh giá bằng Recall, Precision, AUC-ROC.\n\n" },
    { text: "• Phần B (Ch.4 — Phân cụm): ", options: { bold: true } },
    { text: "K-means theo hành vi chi tiêu ➔ đặt tên và mô tả từng cụm.\n\n" },
    { text: "• Phần C (Ch.5 — Luật): ", options: { bold: true } },
    { text: "Rời rạc hóa `amt`, chạy Apriori tìm luật kết hợp giữa `category` và mức chi tiêu." }
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
  slide134Content,
  [
    { text: "❓ Câu hỏi Đánh đổi Rủi ro Quản lý:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "“Nếu Ngân hàng chỉ chấp nhận tỷ lệ Cảnh báo nhầm (False Positive) tối đa 5% ➔ Ngưỡng phân loại (Decision Threshold) nên đặt tại đâu?”\n\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "• Đánh giá Kinh tế: ", options: { bold: true } },
    { text: "So sánh chi phí gọi điện xác minh nhầm vs Tổn thất khi để lọt 1 vụ gian lận thật." }
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
  slide134Content,
  "💡 Nhóm 2–3 người, nộp báo cáo so sánh mô hình và phân tích chi phí.",
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

slide134Content.addNotes(
  "Bài tập trọng tâm kiểm tra năng lực mô hình hóa của học viên trên cả 3 thuật toán nền Ch.3-5."
);

// ----------------------------------------------------
// Slide 135: CONTENT (BÀI TẬP 3: VẬN DỤNG CHƯƠNG 6)
// ----------------------------------------------------
const slide135Content = pptx.addSlide({ masterName: "CONTENT" });
slide135Content.addText("CHƯƠNG 6 – CÁC HƯỚNG NGHIÊN CỨU TRONG KPDL", { placeholder: "footer" });
slide135Content.addText("BÀI TẬP 3: TÍCH HỢP ➔ QUYẾT ĐỊNH KINH DOANH", { placeholder: "title" });

addText(
  slide135Content,
  [
    { text: "🚀 Dùng lại kết quả các bài tập xen kẽ, không làm lại từ đầu:\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Phần A — Gom đặc trưng: ", options: { bold: true } },
    { text: "`hour`, `dayofweek`, `age` (BT1); `amt_z_card`, `days_since_prev_txn` (6.1.1); `merchant_degree`, `merchant_fraud_rate` (6.1.2); `dist_km` (6.1.3).\n\n" },
    { text: "• Phần B — Đặc trưng nào đáng tiền? ", options: { bold: true } },
    { text: "Huấn luyện cộng dồn 4 bước, mỗi bước báo cáo AUC & Recall.\n\n" },
    { text: "• Phần C — Ngưỡng theo chi phí (6.2.2): ", options: { bold: true } },
    { text: "Chặn nhầm một giao dịch sạch tốn 5 USD, bỏ lọt một gian lận mất trung bình `amt`. Vẽ đường chi phí kỳ vọng, chỉ ra ngưỡng tối ưu." }
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
  slide135Content,
  [
    { text: "⚖️ Phần D — Kiểm toán công bằng (6.3.6):\n\n", options: { bold: true, fontSize: 13.5 } },
    { text: "• Đo, không chỉ thảo luận:\n", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "  Tính Precision/Recall tách theo nhóm `gender` và theo phân vị `city_pop`.\n\n" },
    { text: "• Diễn giải: ", options: { bold: true } },
    { text: "Một nhóm bị chặn nhầm cao hơn hẳn là do mô hình hay do dữ liệu lịch sử? Đối chiếu Nghị định 13/2023.\n\n" },
    { text: "• Nộp: ", options: { bold: true } },
    { text: "Notebook + memo một trang gửi giám đốc rủi ro: ngưỡng đề xuất, chi phí tiết kiệm, giới hạn mô hình." }
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
  slide135Content,
  "💡 Khép lại môn học: ghép các mảnh đã làm thành một quyết định có con số.",
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

slide135Content.addNotes(
  "Bài tập 3 khép lại học phần bằng TÍCH HỢP, không lặp lại: ba bài tập xen kẽ 6.1.1/6.1.2/6.1.3 đã tính sẵn đặc trưng, ở đây học viên chỉ ghép lại, đo giá trị từng nhóm đặc trưng, chọn ngưỡng theo chi phí và kiểm toán công bằng."
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
    { text: "❓ 6 CÂU HỎI ÔN TẬP THI VẤN ĐÁP / TỰ LUẬN:\n\n", options: { bold: true, fontSize: 15, color: DUE_COLORS.green } },
    { text: "1. Phân biệt 3 loại dữ liệu chuỗi — cho ví dụ kinh tế mỗi loại.\n\n" },
    { text: "2. Vì sao lọc cộng tác là cầu nối giữa khai phá mạng (6.1.2) và hệ gợi ý (6.3.5)?\n\n" },
    { text: "3. So sánh signature-based và anomaly-based trong phát hiện xâm nhập.\n\n" },
    { text: "4. Trình bày 5 quan điểm lý thuyết (6.2.2); phân tích quan điểm kinh tế vi mô.\n\n" },
    { text: "5. Nêu 3 rủi ro đạo đức/pháp lý và đối chiếu Nghị định 13/2023/NĐ-CP.\n\n" },
    { text: "6. Từ bộ Credit Card đã thực hành, chỉ ra ứng dụng cụ thể của 6.1, 6.2 và 6.3." }
  ],
  {
    x: cmToInch(0.8),
    y: cmToInch(2.0),
    w: cmToInch(23.8),
    h: 0, // hug content
    fontSize: 13.5,
    lineSpacing: 20,
    color: DUE_COLORS.darkText,
    fill: { color: DUE_COLORS.lightGreen },
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
    valign: "top",
  }
);

// Không dùng banner ở slide này: danh sách câu hỏi cần trọn chiều cao slide,
// và một dòng chốt "bộ câu hỏi để tự kiểm tra" chỉ lặp lại tiêu đề slide.

slide136Content.addNotes(
  "Bộ câu hỏi ôn tập tổng hợp trọn vẹn Chương 6 dành cho học viên chuẩn bị thi."
);
