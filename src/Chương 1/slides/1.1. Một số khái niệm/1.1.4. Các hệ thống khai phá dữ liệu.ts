import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 27 — SECTION
// ----------------------------------------------------
const slide27 = pptx.addSlide({ masterName: "SECTION" });
slide27.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide27.addText("1.1.4. CÁC HỆ THỐNG KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});
slide27.addText("Một hệ thống khai phá dữ liệu không chỉ gồm thuật toán; nó kết nối dữ liệu, tri thức nghiệp vụ, mô hình và người ra quyết định.", {
  placeholder: "content",
});
slide27.addText("Câu hỏi dẫn nhập:\n“Nếu mô hình phát hiện giao dịch đáng ngờ nhưng không thể gửi cảnh báo đến khách hàng hoặc nhân viên ngân hàng, hệ thống có tạo ra giá trị không?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 28 — CONTENT
// ----------------------------------------------------
const slide28 = pptx.addSlide({ masterName: "CONTENT" });
slide28.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide28.addText("KIẾN TRÚC CƠ BẢN CỦA HỆ THỐNG KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});

const optIntro28 = addText(slide28, "Hệ thống khai phá dữ liệu là tổ hợp phần mềm và hạ tầng hỗ trợ phát hiện tri thức từ cơ sở dữ liệu, kho dữ liệu, Web và các nguồn thông tin khác.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW28 = cmToInch(11.5);
const colH28 = cmToInch(3.3);
const colY28 = (optIntro28.y as number) + (optIntro28.h as number) + cmToInch(0.2);

addText(slide28, "🏗️ 5 TẦNG KIẾN TRÚC LUỒNG DỮ LIỆU\n\n1. Nguồn dữ liệu: POS, CRM, Website, Ứng dụng, Kho dữ liệu.\n2. Máy chủ dữ liệu: Truy vấn, trích xuất, tích hợp và tiền xử lý.\n3. Bộ máy khai phá: Các thuật toán phân lớp, phân cụm, kết hợp.\n4. Đánh giá mẫu: Lọc, xếp hạng và kiểm tra tính hữu ích của mẫu.\n5. Giao diện (UI): Dashboard, báo cáo và hệ thống cảnh báo.", {
  x: cmToInch(0.8),
  y: colY28,
  w: colW28,
  h: colH28,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide28, "🧠 VAI TRÒ CỦA CƠ SỞ TRI THỨC (KNOWLEDGE BASE)\n\n• Lưu giữ kiến thức nghiệp vụ, phân cấp khái niệm, siêu dữ liệu, các ràng buộc và ngưỡng cảnh báo rủi ro.\n• Tác động trực tiếp đến Bộ máy khai phá dữ liệu (giúp tối ưu hóa thuật toán dựa trên ràng buộc).\n• Hướng dẫn Mô-đun đánh giá mẫu (giúp lọc ra các mẫu thực sự có giá trị nghiệp vụ, tránh phát hiện những mẫu hiển nhiên).", {
  x: cmToInch(13.1),
  y: colY28,
  w: colW28,
  h: colH28,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide28, "💡 Mô hình khai phá dù tốt đến đâu cũng cần dữ liệu phù hợp, quy tắc nghiệp vụ rõ ràng từ cơ sở tri thức, và một giao diện trực quan giúp người dùng hiểu để ra quyết định hành động kịp thời.", {
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

slide28.addNotes("Nội dung bổ sung:\nMột hệ thống khai phá dữ liệu điển hình gồm nguồn dữ liệu, máy chủ cơ sở dữ liệu/kho dữ liệu, cơ sở tri thức, bộ máy khai phá, mô-đun đánh giá mẫu và giao diện người dùng.");

// ----------------------------------------------------
// Slide 29 — CONTENT
// ----------------------------------------------------
const slide29 = pptx.addSlide({ masterName: "CONTENT" });
slide29.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide29.addText("TỪ GIAO DỊCH THỜI GIAN THỰC ĐẾN CẢNH BÁO RỦI RO", {
  placeholder: "title",
});

const optIntro29 = addText(slide29, "Hệ thống cần phát hiện và phản hồi ngay lập tức đối với giao dịch thẻ có dấu hiệu bất thường để ngăn chặn gian lận.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW29 = cmToInch(11.5);
const colH29 = cmToInch(3.3);
const colY29 = (optIntro29.y as number) + (optIntro29.h as number) + cmToInch(0.2);

addText(slide29, "⚙️ LUỒNG VẬN HÀNH HỆ THỐNG\n\n1. Phát sinh giao dịch: Thu thập giá trị, thời điểm, vị trí, thiết bị.\n2. Thu nhận & Kiểm tra: So khớp nhanh với lịch sử của chủ thẻ.\n3. Chấm điểm rủi ro: Mô hình ước lượng xác suất gian lận.\n4. Cảnh báo & Xác minh: Gửi thông báo đến app khách hàng & nhân viên.\n5. Quyết định: Phê duyệt, yêu cầu OTP bổ sung hoặc tạm khóa thẻ.\n6. Phản hồi cập nhật: Kết quả xác minh nạp lại vào cơ sở tri thức.", {
  x: cmToInch(0.8),
  y: colY29,
  w: colW29,
  h: colH29,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Table of signals on the right
slide29.addTable([
  [
    { text: "Tín hiệu giao dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Diễn giải rủi ro nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Giá trị 45 triệu đồng", options: { bold: true } }, { text: "Cao hơn nhiều so với mức chi tiêu trung bình của thẻ." }],
  [{ text: "Thời điểm 03:12 sáng", options: { bold: true } }, { text: "Khác biệt hoàn toàn thói quen chi tiêu và sinh hoạt." }],
  [{ text: "Vị trí giao dịch quốc tế", options: { bold: true } }, { text: "Khác biệt với vị trí định vị hiện tại của điện thoại chủ thẻ." }],
  [{ text: "5 giao dịch trong 8 phút", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Tần suất cao bất thường, dấu hiệu thẻ bị quét liên tục." }]
], {
  x: cmToInch(13.1),
  y: colY29,
  w: colW29,
  h: colH29,
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide29, "💡 Một hệ thống khai phá dữ liệu hiệu quả phải thiết lập được vòng phản hồi khép kín (Feedback Loop): Cảnh báo ➔ Xác minh thực tế ➔ Học hỏi tự động ➔ Cải thiện luật và mô hình rủi ro.", {
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

slide29.addNotes("Nội dung bổ sung:\nHệ thống có thể khai phá dòng dữ liệu và hỗ trợ phát hiện bất thường; giao diện người dùng cho phép xem kết quả, tương tác và khai phá sâu hơn từ các kết quả trung gian.");

// ----------------------------------------------------
// Slide 30 — CONTENT
// ----------------------------------------------------
const slide30 = pptx.addSlide({ masterName: "CONTENT" });
slide30.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide30.addText("TỔNG KẾT MỤC 1.1: TỪ CÂU HỎI ĐẾN HÀNH ĐỘNG", {
  placeholder: "title",
});

const optIntro30 = addText(slide30, "Khung tư duy tổng hợp mục 1.1 giúp doanh nghiệp chuẩn hóa quy trình phân tích và ứng dụng hiệu quả giải pháp khai phá dữ liệu.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

// Horizontal journey layout
const stepW30 = cmToInch(4.2);
const stepH30 = cmToInch(3);
const stepY30 = (optIntro30.y as number) + (optIntro30.h as number) + cmToInch(0.1);
const startX30 = cmToInch(0.8);
const stepGap30 = cmToInch(0.7);

const stepsData30 = [
  { text: "1. Câu hỏi nghiệp vụ\n\n“Cần cải thiện hoặc tối ưu quyết định nào?”", bg: DUE_COLORS.orange, fg: DUE_COLORS.white, bold: true },
  { text: "2. Tác vụ khai phá\n\nPhân lớp, Dự báo số, Phân cụm, Kết hợp, Bất thường.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { text: "3. Quy trình áp dụng\n\nTiền xử lý dữ liệu, KDD, CRISP-DM lặp vòng.", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { text: "4. Hệ thống khai phá\n\nNguồn, Engine, Cơ sở tri thức, Dashboard.", bg: DUE_COLORS.blue, fg: DUE_COLORS.white, bold: false },
  { text: "5. Hành động cụ thể\n\nƯu đãi cá nhân hóa, Chặn giao dịch, Giữ chân VIP.", bg: DUE_COLORS.green, fg: DUE_COLORS.white, bold: true }
];

stepsData30.forEach((step, idx) => {
  addText(slide30, step.text, {
    x: startX30 + (stepW30 + stepGap30) * idx,
    y: stepY30,
    w: stepW30,
    h: stepH30,
    fontSize: 10,
    color: step.fg,
    fill: { color: step.bg },
    bold: step.bold,
    align: "center",
    valign: "top",
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
  });
});

// Three key takeaways below
const takeawayY = stepY30 + stepH30 + cmToInch(0.2);
addText(slide30, "📌 BA THÔNG ĐIỆP QUAN TRỌNG CẦN GHI NHỚ:\n1. Không bắt đầu từ thuật toán — Luôn xuất phát từ câu hỏi nghiệp vụ và mục tiêu thực tế.\n2. Khai phá dữ liệu là một quy trình — Chất lượng tiền xử lý quyết định độ chính xác của mô hình.\n3. Mô hình chỉ có giá trị khi hành động — Kết quả phải đi vào dashboard hoặc quy trình tự động vận hành.", {
  x: cmToInch(0.8),
  y: takeawayY,
  w: cmToInch(23.8),
  h: cmToInch(1.5),
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
});

addText(slide30, "👉 DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU — Tìm hiểu cách nhận diện chất lượng dữ liệu, xử lý dữ liệu khuyết thiếu và chuẩn bị dữ liệu đầu vào cho các mô hình khai phá ở chương tiếp theo.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide30.addNotes("Nội dung bổ sung:\nNội dung mục 1.1 giới thiệu khái niệm, tác vụ, quy trình và hệ thống khai phá dữ liệu; các chương tiếp theo đi sâu vào tiền xử lý, phân lớp, phân cụm và luật kết hợp.");
