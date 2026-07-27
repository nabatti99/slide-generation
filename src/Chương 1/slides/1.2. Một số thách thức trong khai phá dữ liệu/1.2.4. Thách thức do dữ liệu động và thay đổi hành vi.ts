import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 1 — SECTION
// ----------------------------------------------------
const slide1 = pptx.addSlide({ masterName: "SECTION" });
slide1.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide1.addText("1.2.4. THÁCH THỨC DO DỮ LIỆU ĐỘNG VÀ THAY ĐỔI HÀNH VI", {
  placeholder: "title",
});
slide1.addText("Mô hình khai phá dữ liệu không hoạt động trong một thế giới bất biến: dữ liệu đến liên tục, điều kiện kinh doanh thay đổi và hành vi con người cũng thay đổi theo thời gian.", {
  placeholder: "content",
  y: cmToInch(5.5),
});
slide1.addText("Câu hỏi dẫn nhập:\n“Nếu một mô hình tín dụng được huấn luyện khi lãi suất thấp, liệu nó còn đánh giá đúng rủi ro khi lãi suất tăng mạnh và thu nhập khách hàng suy giảm?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("DỮ LIỆU LUỒNG VÀ TRÔI KHÁI NIỆM", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Dữ liệu luồng (data stream) phát sinh liên tục đòi hỏi hệ thống xử lý thời gian thực. Trôi khái niệm (concept drift) xảy ra khi mối quan hệ dự báo thay đổi theo thời gian.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW2 = cmToInch(11.5);
const colH2 = cmToInch(3.2);
const colY2 = (optIntro2.y as number) + (optIntro2.h as number) + cmToInch(0.2);

// Left column: math & concept
addText(slide2, "📐 BẢN CHẤT CỦA TRÔI KHÁI NIỆM\n\n• Định nghĩa: Mối quan hệ giữa biến đầu vào (X) và kết quả cần dự báo (Y) thay đổi theo thời gian.\n• Công thức toán học:\n   ↳ P(Y | X) quá khứ  ≠  P(Y | X) hiện tại\n• Ý nghĩa: Một quy luật hay thuật toán phân tích từng đúng hoàn hảo trong quá khứ có thể hoàn toàn không còn đúng ở thời điểm hiện tại.", {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right column: Table of changes
slide2.addTable([
  [
    { text: "Dạng thay đổi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Biểu hiện cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thay đổi đột ngột", options: { bold: true } }, { text: "Hiệu năng giảm mạnh nhanh" }, { text: "Đại khuyến mại làm cầu tăng vọt." }],
  [{ text: "Thay đổi dần dần", options: { bold: true } }, { text: "Chất lượng giảm từ từ" }, { text: "Dịch chuyển từ mua tại cửa hàng sang app." }],
  [{ text: "Thay đổi theo mùa", options: { bold: true } }, { text: "Mẫu lặp lại theo chu kỳ" }, { text: "Doanh số tăng vào lễ tết, giảm sau đó." }],
  [{ text: "Theo bối cảnh", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Cùng hành vi đổi nghĩa" }, { text: "Vay cũ rủi ro hơn khi lãi suất tăng." }]
], {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide2, "💡 Mô hình không “sai” chỉ vì thuật toán yếu hay lập trình lỗi; nhiều khi mô hình suy giảm hiệu năng vì thế giới thực tế mà nó học từ đó đã thay đổi.", {
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

slide2.addNotes("Nội dung bổ sung:\nCác hệ thống khai phá dữ liệu thời gian thực cần vừa xử lý luồng dữ liệu nhanh, vừa có cơ chế cập nhật tăng dần hoặc tái huấn luyện để thích ứng khi hành vi và phân phối dữ liệu đổi khác.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("VÍ DỤ 1: GIAN LẬN THẺ THEO THỜI GIAN THỰC", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Đánh giá rủi ro giao dịch thẻ tín dụng trong vài giây dựa trên việc đối chiếu liên tục với hồ sơ hành vi của chủ thẻ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: Signals
slide3.addTable([
  [
    { text: "Nhóm tín hiệu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ câu hỏi phân tích", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Giá trị giao dịch", options: { bold: true } }, { text: "Có cao vượt trội so với lịch sử chi tiêu trung bình?" }],
  [{ text: "Thời gian & Địa điểm", options: { bold: true } }, { text: "Phát sinh vào khung giờ lạ hoặc quốc gia lạ không?" }],
  [{ text: "Tần suất đặt lệnh", options: { bold: true } }, { text: "Có nhiều giao dịch lớn liên tục chỉ trong vài phút?" }],
  [{ text: "Thiết bị & Kênh", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Có sử dụng thiết bị mới hoặc địa chỉ IP lạ để giao dịch?" }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right list: outcomes
addText(slide3, "🛡️ QUYẾT ĐỊNH XỬ LÝ THEO MỨC ĐỘ RỦI RO\n\n• RỦI RO THẤP: Giao dịch giá trị nhỏ tại địa điểm quen thuộc và giờ quen. ➔ Phê duyệt tự động.\n• RỦI RO TRUNG BÌNH/CAO: Giá trị lớn, địa điểm lạ, giờ lạ. ➔ Yêu cầu xác thực OTP bổ sung qua điện thoại.\n• RỦI RO RẤT CAO: Nhiều giao dịch ở nhiều quốc gia trong vài phút. ➔ Tạm chặn thẻ tự động và điều tra gian lận.\n\n👉 Tính chất động: Hành vi của khách đổi (du lịch, đổi múi giờ) nên mô hình phải học tăng dần để tránh chặn nhầm.", {
  x: cmToInch(13.1),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide3, "💡 Gian lận không đơn thuần là “giao dịch có số tiền lớn”; đó là giao dịch không phù hợp với bối cảnh và thói quen hành vi thông thường của chủ thẻ.", {
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

slide3.addNotes("Nội dung bổ sung:\nGian lận thường là lớp hiếm; vì thế chỉ số accuracy tổng thể có thể gây hiểu lầm nếu mô hình bỏ sót giao dịch gian lận. Kẻ gian liên tục thay đổi phương thức, nên mô hình cần theo dõi hiệu năng và cập nhật bằng dữ liệu, nhãn gian lận mới. Phát hiện bất thường đặc biệt hữu ích trong những tình huống mà một sự kiện có thể bình thường nếu xét riêng lẻ nhưng trở nên đáng ngờ khi đặt trong chuỗi hành vi và bối cảnh thời gian.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("VÍ DỤ 2: DỰ BÁO NHU CẦU SAU KHUYẾN MẠI", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Chiến dịch flash sale hoặc dịp lễ tết làm sai lệch hoàn toàn mối quan hệ dự báo cầu của mô hình trong điều kiện vận hành bình thường.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: Missing variables
slide4.addTable([
  [
    { text: "Nhóm biến cần bổ sung", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Biến khuyến mại", options: { bold: true } }, { text: "Tỷ lệ giảm giá, mã giảm giá, freeship." }],
  [{ text: "Biến thời gian", options: { bold: true } }, { text: "Ngày lễ, cuối tuần, ngày lĩnh lương." }],
  [{ text: "Biến marketing", options: { bold: true } }, { text: "Ngân sách chạy quảng cáo, lượt gửi SMS." }],
  [{ text: "Kênh bán hàng", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Cửa hàng, Website, Shopee, Livestream." }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: When to retrain
addText(slide4, "⚙️ KHI NÀO NÊN TÁI HUẤN LUYỆN MÔ HÌNH?\n\n• Sau chiến dịch lớn: Khi dữ liệu mới đã thu thập đủ để phản ánh hành vi bình ổn trở lại.\n• Sai số tăng liên tiếp: Sai số dự báo (MAE, MAPE) tăng liên tục qua nhiều chu kỳ thay vì chỉ đột biến một ngày.\n• Thay đổi chính sách: Doanh nghiệp đổi cấu trúc giá, thay đổi dòng sản phẩm cốt lõi hoặc chuyển dịch kênh bán chính sang online.", {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide4, "💡 Không nên vội vàng tái huấn luyện mô hình ngay khi gặp một biến động đơn lẻ; trước hết cần phân biệt rõ giữa cú sốc ngắn hạn và thay đổi cấu trúc kéo dài.", {
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

slide4.addNotes("Nội dung bổ sung:\nCác mô hình dự báo nên được đánh giá trên dữ liệu chưa từng được dùng để huấn luyện, và với dữ liệu chuỗi thời gian việc chia tập đánh giá cần tôn trọng thứ tự thời gian thay vì trộn ngẫu nhiên hoàn toàn. Doanh số tăng vọt tại điểm khuyến mại cần phân tích kỹ lưỡng trước khi kết luận mô hình bị hỏng.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 3: RỦI RO TÍN DỤNG KHI KINH TẾ ĐỔI CHIỀU", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Khả năng trả nợ của khách hàng thay đổi mạnh mẽ khi thu nhập giảm, chi phí sinh hoạt tăng hoặc lãi suất tăng vọt.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: Static vs Dynamic
slide5.addTable([
  [
    { text: "Cách nhìn Tĩnh (Hạn chế)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Cách nhìn Động (Khuyến nghị)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Điểm tín dụng cố định lúc duyệt" }, { text: "Theo dõi diễn biến điểm số theo tháng/quý." }],
  [{ text: "Thu nhập khai báo ban đầu" }, { text: "Theo dõi biến động dòng tiền thực tế." }],
  [{ text: "Lịch sử trả nợ quá khứ" }, { text: "Xu hướng quá hạn gần đây (số ngày quá hạn)." }],
  [{ text: "Điều kiện vĩ mô xem là cố định" }, { text: "Tích hợp biến số lãi suất, lạm phát, thất nghiệp." }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right list: Early warning
addText(slide5, "🚨 CÁC CHỈ BÁO CẢNH BÁO SỚM RỦI RO\n\n• Số ngày thanh toán trễ tăng liên tiếp trong 3 tháng gần nhất.\n• Tỷ lệ sử dụng hạn mức tín dụng tăng vọt trong ngắn hạn.\n• Khách thuộc phân khúc ngành nghề chịu ảnh hưởng nặng nề bởi suy thoái kinh tế vĩ mô.\n• Lãi suất khoản vay điều chỉnh tăng đột ngột làm tăng nghĩa vụ nợ hàng tháng.\n\n➔ Giải pháp: Hiệu chỉnh ngưỡng phê duyệt tín dụng kết hợp thẩm định thủ công.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Lịch sử tín dụng tốt trong quá khứ là bằng chứng tham khảo quan trọng, nhưng không phải là bảo đảm vĩnh viễn cho năng lực trả nợ của khách hàng trong một môi trường kinh tế mới.", {
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

slide5.addNotes("Nội dung bổ sung:\nTrong các bài toán dự báo, mô hình cần được đánh giá liên tục trên dữ liệu mới vì mục tiêu quan trọng là khả năng khái quát hóa cho các quan sát tương lai, không chỉ là mức độ phù hợp với dữ liệu lịch sử. Khi kinh tế đổi chiều, việc điều chỉnh ngưỡng phê duyệt hay tái huấn luyện mô hình phụ thuộc vào độ kéo dài của cú sốc vĩ mô.");

// ----------------------------------------------------
// Slide 6 — CONTENT
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("KHI NÀO MÔ HÌNH ĐÃ “CŨ”?", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "Mô hình cần được xem xét lại khi có bằng chứng hiệu năng suy giảm, dữ liệu đầu vào biến đổi hoặc bối cảnh nghiệp vụ thay đổi.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

// Left table: Signals
slide6.addTable([
  [
    { text: "Tín hiệu giám sát", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động chẩn đoán ban đầu", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Hiệu năng suy giảm", options: { bold: true } }, { text: "Kiểm tra lỗi triển khai, chất lượng dữ liệu đầu vào gần nhất." }],
  [{ text: "Dữ liệu đầu vào đổi khác", options: { bold: true } }, { text: "Phát hiện trôi dữ liệu, xem xét bổ sung biến hoặc đặc trưng." }],
  [{ text: "Bối cảnh nghiệp vụ đổi", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Rà soát lại các giả định ban đầu của mô hình phân tích." }]
], {
  x: cmToInch(0.8),
  y: colY6,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Monthly performance
slide6.addTable([
  [
    { text: "Tháng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Precision", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Recall", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nhận định", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "T1" }, { text: "0.81" }, { text: "0.74" }, { text: "Ổn định" }],
  [{ text: "T2" }, { text: "0.80" }, { text: "0.73" }, { text: "Theo dõi" }],
  [{ text: "T3" }, { text: "0.77", options: { color: DUE_COLORS.orange } }, { text: "0.68", options: { color: DUE_COLORS.orange } }, { text: "Bắt đầu giảm" }],
  [{ text: "T4" }, { text: "0.72", options: { color: DUE_COLORS.orange } }, { text: "0.57", options: { color: DUE_COLORS.orange } }, { text: "Cần điều tra" }],
  [{ text: "T5" }, { text: "0.68", options: { color: DUE_COLORS.orange } }, { text: "0.45", options: { color: DUE_COLORS.orange } }, { text: "Tái huấn luyện" }]
], {
  x: cmToInch(13.1),
  y: colY6,
  w: colW2,
  h: colH2,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide6, "💡 Cần theo dõi thêm precision, recall, tỷ lệ dương tính giả và âm tính giả thay vì chỉ nhìn accuracy, vì các lớp rủi ro (gian lận/nợ xấu) thường rất hiếm gặp trong thực tế.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide6.addNotes("Nội dung bổ sung:\nTừ tháng 3, recall giảm liên tiếp. Đến tháng 4–5, mô hình bỏ sót ngày càng nhiều trường hợp rủi ro; đây là thời điểm cần kiểm tra trôi khái niệm, thay đổi hành vi giao dịch, chất lượng nhãn và thay đổi trong quy trình nghiệp vụ.");

// ----------------------------------------------------
// Slide 7 — ACTIVITY
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("HOẠT ĐỘNG: KHI NÀO MÔ HÌNH ĐÃ “CŨ”?", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "Bối cảnh: Ngân hàng theo dõi hiệu năng mô hình phát hiện gian lận sau chiến dịch mở rộng thanh toán quốc tế.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7 = (optIntro7.y as number) + (optIntro7.h as number) + cmToInch(0.1);

// Table on the left
slide7.addTable([
  [
    { text: "Tháng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Precision", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Recall", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tỷ lệ gắn cờ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ghi nhận nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "T1" }, { text: "0.82" }, { text: "0.76" }, { text: "1.8%" }, { text: "Hoạt động bình thường" }],
  [{ text: "T2" }, { text: "0.81" }, { text: "0.75" }, { text: "1.9%" }, { text: "Hoạt động bình thường" }],
  [{ text: "T3" }, { text: "0.80", options: { color: DUE_COLORS.orange } }, { text: "0.71", options: { color: DUE_COLORS.orange } }, { text: "2.2%" }, { text: "Mở rộng giao dịch quốc tế" }],
  [{ text: "T4" }, { text: "0.75", options: { color: DUE_COLORS.orange } }, { text: "0.62", options: { color: DUE_COLORS.orange } }, { text: "2.7%" }, { text: "Thay đổi quy trình xác thực" }],
  [{ text: "T5" }, { text: "0.70", options: { color: DUE_COLORS.orange } }, { text: "0.48", options: { color: DUE_COLORS.orange } }, { text: "3.1%" }, { text: "Có khiếu nại bỏ sót gian lận" }],
  [{ text: "T6" }, { text: "0.66", options: { color: DUE_COLORS.orange } }, { text: "0.41", options: { color: DUE_COLORS.orange } }, { text: "3.4%" }, { text: "Gian lận sau GD tăng mạnh" }]
], {
  x: cmToInch(0.8),
  y: tableY7,
  w: cmToInch(13.5),
  h: cmToInch(3.2),
  fontSize: 8.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Questions on the right
addText(slide7, "👥 YÊU CẦU THẢO LUẬN NHÓM (5 phút):\n\n1. Xác định tháng bắt đầu cần xem xét lại mô hình.\n2. Chọn chỉ số quan trọng nhất làm bằng chứng kết luận.\n3. Đề xuất ít nhất ba nguyên nhân khiến hiệu năng suy giảm.\n4. Đề xuất thứ tự ưu tiên hành động xử lý.\n5. Nêu rủi ro lớn nhất nếu ngân hàng chỉ đánh giá mô hình bằng chỉ số Accuracy.", {
  x: cmToInch(14.8),
  y: tableY7,
  w: cmToInch(9.8),
  h: cmToInch(3.2),
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 10,
  rectRadius: 0.1,
});

addText(slide7, "💬 Lưu ý: Hãy thảo luận kỹ về sự tác động của chiến dịch mở rộng giao dịch quốc tế và thay đổi quy trình xác thực đến phân phối dữ liệu đầu vào.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// ----------------------------------------------------
// Slide 7b — CONTENT (Đáp án)
// ----------------------------------------------------
const slide7b = pptx.addSlide({ masterName: "CONTENT" });
slide7b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7b.addText("ĐÁP ÁN ĐỀ XUẤT CHO HOẠT ĐỘNG", {
  placeholder: "title",
});

const optIntro7b = addText(slide7b, "✅ Khung chẩn đoán và đề xuất xử lý mô hình rủi ro đã cũ dựa trên các chỉ số hiệu năng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7b = (optIntro7b.y as number) + (optIntro7b.h as number) + cmToInch(0.2);

slide7b.addTable([
  [
    { text: "Nội dung phân tích", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Gợi ý đáp án chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thời điểm cảnh báo", options: { bold: true } }, { text: "T3 bắt đầu theo dõi sát; T4 cần lập dự án điều tra chính thức; T5 bắt buộc phải hiệu chỉnh vì recall suy giảm nghiêm trọng gây thất thoát tài chính thực tế." }],
  [{ text: "Chỉ số trọng tâm", options: { bold: true } }, { text: "Recall (để kiểm soát số gian lận bị bỏ sót) kết hợp Precision (để giới hạn số cảnh báo giả gây phiền hà cho khách hàng)." }],
  [{ text: "Nguyên nhân khả dĩ", options: { bold: true } }, { text: "Hành vi giao dịch quốc tế mới của khách hàng; Quy trình xác thực thay đổi làm thay đổi đặc trưng dữ liệu đầu vào; Thủ đoạn gian lận mới xuất hiện." }],
  [{ text: "Hành động ưu tiên", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Kiểm tra dữ liệu đường truyền ➔ Phân tích lỗi theo phân khúc ➔ Rà soát điều chỉnh lại ngưỡng cảnh báo ➔ Tái huấn luyện mô hình bằng dữ liệu mới." }]
], {
  x: cmToInch(0.8),
  y: tableY7b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7b, "💡 Quản trị mô hình là một vòng lặp liên tục: giám sát ➔ phát hiện suy giảm ➔ chẩn đoán nguyên nhân ➔ điều chỉnh hoặc tái huấn luyện ➔ giám sát lại.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7b.addNotes(`Ghi chú giảng viên:
- Thời điểm cảnh báo: T3 bắt đầu giảm nhẹ, nhưng T4 là giảm mạnh từ 75% xuống 62% recall. T5 là bắt buộc vì recall giảm sâu.
- Chỉ số trọng tâm: Giải thích tầm quan trọng của Recall trong bài toán gian lận.
- Rủi ro của Accuracy: Vì lớp gian lận cực kỳ hiếm (ví dụ 1%), một mô hình đoán bừa 'HỢP LỆ' cho mọi giao dịch vẫn đạt 99% accuracy nhưng bỏ sót 100% gian lận.
- Liên kết: Dữ liệu động là một thách thức lớn; tiếp tục chuyển sang mục thách thức tiếp theo về tích hợp và sự đa dạng dữ liệu.`);
