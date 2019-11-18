import { SlideGenerator } from "../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 23 — SECTION
// ----------------------------------------------------
const slide23 = pptx.addSlide({ masterName: "SECTION" });
slide23.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide23.addText("1.1.3. CÁC QUY TRÌNH KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});
slide23.addText("Quy trình khai phá dữ liệu là chuỗi các bước có tính lặp và tương tác, biến dữ liệu thô thành tri thức hành động được.", {
  placeholder: "content",
});
slide23.addText("Câu hỏi dẫn nhập:\n“KDD (Khám phá tri thức) và CRISP-DM (Tiêu chuẩn công nghiệp) giúp doanh nghiệp chuẩn hóa quy trình phân tích như thế nào?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 24 — CONTENT
// ----------------------------------------------------
const slide24 = pptx.addSlide({ masterName: "CONTENT" });
slide24.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide24.addText("QUY TRÌNH KHÁM PHÁ TRI THỨC KDD", {
  placeholder: "title",
});

const optIntro24 = addText(slide24, "KDD (Knowledge Discovery in Databases) là quy trình gồm 7 bước tuần tự và lặp lại nhằm chuyển hóa dữ liệu thô thành tri thức hữu ích. Giai đoạn tiền xử lý đóng vai trò cốt lõi.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

// 7-step horizontal pipeline
const stepW24 = cmToInch(2.8);
const stepH24 = cmToInch(3.5);
const stepY24 = (optIntro24.y as number) + (optIntro24.h as number) + cmToInch(0.2);
const startX24 = cmToInch(0.8);
const stepGap24 = cmToInch(0.7);

const stepsData24 = [
  { title: "1. Làm sạch", desc: "Xử lý dữ liệu khuyết, nhiễu, loại bỏ nhiễu & ngoại lệ.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { title: "2. Tích hợp", desc: "Gộp dữ liệu từ nhiều nguồn, xử lý xung đột thuộc tính.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { title: "3. Lựa chọn", desc: "Trích xuất các biến liên quan trực tiếp đến bài toán.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { title: "4. Biến đổi", desc: "Chuẩn hóa, tổng hợp dữ liệu thành định dạng phù hợp.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { title: "5. Khai phá", desc: "Áp dụng thuật toán (học máy) để trích xuất mẫu dữ liệu.", bg: DUE_COLORS.orange, fg: DUE_COLORS.white, bold: true },
  { title: "6. Đánh giá", desc: "Đánh giá các mẫu xem có hợp lệ, hữu ích & mới lạ không.", bg: DUE_COLORS.blue, fg: DUE_COLORS.white, bold: false },
  { title: "7. Trình bày", desc: "Trực quan hóa và diễn giải kết quả cho nhà quản lý.", bg: DUE_COLORS.blue, fg: DUE_COLORS.white, bold: false }
];

stepsData24.forEach((step, idx) => {
  addText(slide24, `${step.title}\n\n• ${step.desc}`, {
    x: startX24 + (stepW24 + stepGap24) * idx,
    y: stepY24,
    w: stepW24,
    h: stepH24,
    fontSize: 9.5,
    color: step.fg,
    fill: { color: step.bg },
    bold: step.bold,
    align: "left",
    valign: "top",
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
  });
});

addText(slide24, "💡 Chất lượng dữ liệu đầu vào (quyết định bởi các bước 1-4) ảnh hưởng trực tiếp đến chất lượng của tri thức khai phá được. Tiền xử lý tốt chiếm 70-80% công sức dự án.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide24.addNotes("Nội dung bổ sung:\nCác bước làm sạch, tích hợp, biến đổi và giảm dữ liệu là nội dung trọng tâm của giai đoạn tiền xử lý. Chất lượng dữ liệu ảnh hưởng trực tiếp đến chất lượng của kết quả khai phá.");

// ----------------------------------------------------
// Slide 25 — CONTENT
// ----------------------------------------------------
const slide25 = pptx.addSlide({ masterName: "CONTENT" });
slide25.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide25.addText("QUY TRÌNH TIÊU CHUẨN CRISP-DM", {
  placeholder: "title",
});

const optIntro25 = addText(slide25, "CRISP-DM là quy trình thực tế gồm 6 giai đoạn lặp vòng, giúp định hướng chặt chẽ từ mục tiêu nghiệp vụ kinh doanh đến giải pháp kỹ thuật và triển khai thực thi.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY25 = (optIntro25.y as number) + (optIntro25.h as number) + cmToInch(0.2);

slide25.addTable([
  [
    { text: "Giai đoạn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nội dung chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi nghiệp vụ cốt lõi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "1. Hiểu nghiệp vụ", options: { bold: true } },
    { text: "Xác định vấn đề, mục tiêu và tiêu chí thành công của dự án." },
    { text: "Doanh nghiệp muốn giải quyết bài toán hay cải thiện quyết định gì?" }
  ],
  [
    { text: "2. Hiểu dữ liệu", options: { bold: true } },
    { text: "Thu thập dữ liệu ban đầu, khảo sát chất lượng và phát hiện sơ bộ." },
    { text: "Chúng ta đang có những dữ liệu gì, có đủ chất lượng và độ tin cậy không?" }
  ],
  [
    { text: "3. Chuẩn bị dữ liệu", options: { bold: true } },
    { text: "Làm sạch, tích hợp, định dạng lại và tạo biến phái sinh." },
    { text: "Tập dữ liệu nào tối ưu nhất sẵn sàng để đưa vào huấn luyện mô hình?" }
  ],
  [
    { text: "4. Mô hình hóa", options: { bold: true } },
    { text: "Lựa chọn thuật toán học máy, huấn luyện và tối ưu tham số." },
    { text: "Mô hình hay thuật toán nào cho kết quả dự đoán tốt nhất trên tập dữ liệu?" }
  ],
  [
    { text: "5. Đánh giá", options: { bold: true } },
    { text: "Kiểm định mô hình theo tiêu chí nghiệp vụ và mục tiêu ban đầu." },
    { text: "Mô hình có giải quyết đúng và hiệu quả vấn đề nghiệp vụ đặt ra ban đầu?" }
  ],
  [
    { text: "6. Triển khai", options: { bold: true } },
    { text: "Đưa mô hình vào vận hành thực tế, viết báo cáo hoặc đóng gói." },
    { text: "Ai sử dụng kết quả dự báo, tích hợp vào quy trình nghiệp vụ như thế nào?" }
  ]
], {
  x: cmToInch(0.8),
  y: tableY25,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide25, "💡 CRISP-DM không phải là quy trình một chiều tuyến tính, mà là một vòng lặp liên tục để liên tiếp cải tiến dựa trên phản hồi ở các giai đoạn sau.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide25.addNotes("Nội dung bổ sung:\nCRISP-DM không vận hành tuyến tính một chiều. Chẳng hạn, nếu mô hình dự báo không đạt yêu cầu ở bước đánh giá, nhóm phân tích có thể quay lại bước chuẩn bị dữ liệu để xử lý ngoại lệ, bổ sung biến hoặc thay đổi cách chọn mẫu.");

// ----------------------------------------------------
// Slide 26 — CONTENT
// ----------------------------------------------------
const slide26 = pptx.addSlide({ masterName: "CONTENT" });
slide26.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide26.addText("CASE STUDY: CẢNH BÁO GIAO DỊCH BẤT THƯỜNG", {
  placeholder: "title",
});

const optIntro26 = addText(slide26, "Ngân hàng ứng dụng quy trình CRISP-DM để xây dựng hệ thống phát hiện giao dịch thẻ tín dụng giả mạo thời gian thực.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

// 3x2 Bento grid layout
const cardW26 = cmToInch(7.5);
const cardH26 = cmToInch(2.1);
const row1Y26 = (optIntro26.y as number) + (optIntro26.h as number) + cmToInch(0.1);
const row2Y26 = row1Y26 + cardH26 + cmToInch(1);
const startX26 = cmToInch(0.8);
const gapX26 = cmToInch(0.65);

addText(slide26, "📌 1. HIỂU NGHIỆP VỤ\n• Mục tiêu: Giảm thiểu gian lận thẻ tín dụng; giảm tỷ lệ khóa nhầm thẻ hợp lệ của khách hàng.", {
  x: startX26,
  y: row1Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "📊 2. HIỂU DỮ LIỆU\n• Khảo sát lịch sử giao dịch (thời gian, số tiền, địa điểm, thiết bị) và lịch sử phản hồi khiếu nại.", {
  x: startX26 + cardW26 + gapX26,
  y: row1Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "⚙️ 3. CHUẨN BỊ DỮ LIỆU\n• Xử lý mất cân bằng lớp (giao dịch gian lận rất hiếm); tạo biến phái sinh như khoảng cách địa lý.", {
  x: startX26 + (cardW26 + gapX26) * 2,
  y: row1Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "🤖 4. MÔ HÌNH HÓA\n• Huấn luyện thuật toán phát hiện bất thường (Isolation Forest) và mô hình phân lớp (XGBoost, Random Forest).", {
  x: startX26,
  y: row2Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "🔍 5. ĐÁNH GIÁ\n• Đo lường theo Recall (bắt được nhiều gian lận nhất) và Precision (tránh báo động giả gây phiền hà).", {
  x: startX26 + cardW26 + gapX26,
  y: row2Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "🚀 6. TRIỂN KHAI\n• Tích hợp mô hình vào cổng thanh toán; tự động gửi mã OTP xác thực hoặc tạm dừng thẻ khi giao dịch rủi ro.", {
  x: startX26 + (cardW26 + gapX26) * 2,
  y: row2Y26,
  w: cardW26,
  h: cardH26,
  fontSize: 10,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide26, "💡 Quy trình CRISP-DM giúp đảm bảo giải pháp mô hình hóa kỹ thuật luôn bám sát và giải quyết đúng mục tiêu bài toán kinh doanh đặt ra ban đầu.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide26.addNotes("Nội dung bổ sung:\nQuy trình CRISP-DM là khung làm việc thực tế tiêu chuẩn được sử dụng rộng rãi nhất trong các dự án khai phá dữ liệu thương mại.");
