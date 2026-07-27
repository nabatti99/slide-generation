import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 4 — CONTENT: Ứng dụng trong bán lẻ
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("ỨNG DỤNG TRONG BÁN LẺ: HIỂU KHÁCH HÀNG", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Bối cảnh: Chuỗi siêu thị An Phú Mart thu thập hàng triệu giao dịch mỗi ngày từ nhiều nguồn dữ liệu POS, CRM, App, Web, Tổng đài.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW4 = cmToInch(11.5);
const colH4 = cmToInch(3.2);
const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: Data sources
slide4.addTable([
  [
    { text: "Nguồn dữ liệu siêu thị", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ dữ liệu ghi nhận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Hóa đơn / POS" }, { text: "Ngày mua, cửa hàng, sản phẩm, số lượng, giá trị." }],
  [{ text: "Thẻ thành viên / CRM" }, { text: "Mã khách hàng, điểm tích lũy, hạng thành viên." }],
  [{ text: "Ứng dụng / Website" }, { text: "Số lần truy cập, sản phẩm xem, giỏ hàng bỏ dở." }],
  [{ text: "CSKH & Khiếu nại" }, { text: "Nội dung khiếu nại, đánh giá sao, số lần liên hệ." }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: One data, many apps
slide4.addTable([
  [
    { text: "Câu hỏi nghiệp vụ cần trả lời", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Tác vụ khai phá tương ứng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "“Ai có nguy cơ ngừng mua hàng?”" }, { text: "Phân lớp (Classification)", options: { bold: true } }],
  [{ text: "“Có những phân khúc hành vi nào?”" }, { text: "Phân cụm (Clustering)", options: { bold: true } }],
  [{ text: "“Sản phẩm nào thường mua kèm nhau?”" }, { text: "Luật kết hợp (Association Rules)", options: { bold: true } }],
  [{ text: "“Doanh thu tháng sau là bao nhiêu?”" }, { text: "Hồi quy / Dự báo (Regression)", options: { bold: true } }]
], {
  x: cmToInch(13.1),
  y: colY4,
  w: colW4,
  h: colH4,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide4, "💡 Trong ngành bán lẻ, dữ liệu lịch sử của khách hàng không chỉ giúp thống kê họ đã mua gì, mà quan trọng hơn là giúp dự báo hành vi tiếp theo.", {
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

slide4.addNotes("Nội dung bổ sung:\nChuỗi siêu thị An Phú Mart có 50 cửa hàng, ứng dụng mua sắm và chương trình thành viên. Mỗi ngày, doanh nghiệp thu thập dữ liệu từ hóa đơn tại quầy, đơn đặt hàng trực tuyến, lịch sử dùng ứng dụng và phản hồi khuyến mại để hỗ trợ các bài toán tối ưu kinh doanh.");

// ----------------------------------------------------
// Slide 5 — CONTENT: Dự báo rời bỏ
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("DỰ BÁO KHÁCH HÀNG RỜI BỎ (CHURN PREDICTION)", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Mục tiêu: Dự báo khách hàng nào có nguy cơ ngừng mua hàng trong 30 ngày tới để chủ động triển khai các biện pháp giữ chân.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: Problem definition
slide5.addTable([
  [
    { text: "Thành phần bài toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Thiết kế chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Vấn đề nghiệp vụ" }, { text: "Giảm tỷ lệ khách hàng ngừng mua; bảo vệ doanh thu hiện hữu." }],
  [{ text: "Biến mục tiêu (Nhãn)" }, { text: "Có rời bỏ trong 30 ngày tới hay không (Có / Không)." }],
  [{ text: "Tác vụ khai phá" }, { text: "Phân lớp có giám sát (Supervised Classification)", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "Hành động kích hoạt" }, { text: "Gửi voucher ưu đãi, nhân viên chăm sóc khách hàng chủ động gọi điện." }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW4,
  h: colH4,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Profiles
slide5.addTable([
  [
    { text: "Biến quan sát trong 90 ngày", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Khách A", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Khách B", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "Số lần mua hàng" }, { text: "12 lần" }, { text: "2 lần" }],
  [{ text: "Xu hướng chi tiêu" }, { text: "Tăng nhẹ" }, { text: "Giảm mạnh" }],
  [{ text: "Số ngày từ lần mua cuối" }, { text: "4 ngày" }, { text: "38 ngày" }],
  [{ text: "Mức rủi ro dự báo" }, { text: "THẤP", options: { bold: true, color: DUE_COLORS.green } }, { text: "CAO", options: { bold: true, color: DUE_COLORS.orange } }]
], {
  x: cmToInch(13.1),
  y: colY5,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide5, "💡 Dự báo rời bỏ là bài toán phân lớp: Mô hình cung cấp xác suất hoặc mức rủi ro để doanh nghiệp ưu tiên hành động, chứ không thay thế hoàn toàn quyết định quản trị.", {
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

slide5.addNotes("Nội dung bổ sung:\nTrong ba tháng gần đây, một số khách hàng có dấu hiệu thay đổi hành vi: số lần mua giảm, chi tiêu giảm, ít mở app, không dùng voucher, số ngày kể từ lần mua gần nhất tăng lên. Hiệu quả chiến dịch cần được đánh giá bằng tỷ lệ quay lại, doanh thu tăng thêm và lợi nhuận ròng, không chỉ bằng độ chính xác kỹ thuật.");

// ----------------------------------------------------
// Slide 6 — CONTENT: Từ dự báo đến hành động
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("TỪ DỰ BÁO RỜI BỎ ĐẾN HÀNH ĐỘNG GIỮ CHÂN", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "Để sử dụng nguồn lực tối ưu, doanh nghiệp cần kết hợp điểm rủi ro rời bỏ với giá trị kinh tế của khách hàng và chi phí của từng can thiệp.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

// Left table: Churn action matrix
slide6.addTable([
  [
    { text: "Rủi ro rời bỏ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Giá trị khách hàng (LTV)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Cao", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Cao", options: { bold: true } }, { text: "Nhân viên gọi điện hỗ trợ, ưu đãi lớn cá nhân hóa." }],
  [{ text: "Cao", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Thấp" }, { text: "Gửi SMS voucher tự động giá trị thấp, quảng cáo lại." }],
  [{ text: "Thấp" }, { text: "Cao", options: { bold: true } }, { text: "Gửi chương trình tri ân, chăm sóc duy trì VIP." }],
  [{ text: "Thấp" }, { text: "Thấp" }, { text: "Giao tiếp tự động với chi phí cực thấp." }]
], {
  x: cmToInch(0.8),
  y: colY6,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Churn value chain
addText(slide6, "⚙️ CHUỖI GIÁ TRỊ VẬN HÀNH THỰC TẾ\n\n• Điểm rủi ro rời bỏ + Giá trị khách hàng + Chi phí giữ chân ➔ Xác định hành động phù hợp.\n• Ví dụ: Khách A có rủi ro rời bỏ 80% nhưng giá trị mua hàng bình quân rất cao; khách B cũng có rủi ro 80% nhưng giá trị thấp.\n👉 Quyết định: Tuyệt đối không chi cùng một mức ưu đãi voucher cho cả hai khách hàng này; cần ưu tiên tối đa cho khách A.", {
  x: cmToInch(13.1),
  y: colY6,
  w: colW4,
  h: colH4,
  fontSize: 10,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide6, "💡 Mô hình chỉ tạo ra giá trị khi kết quả dự báo được chuyển thành hành động phù hợp và tạo lợi ích kinh tế lớn hơn chi phí can thiệp.", {
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

slide6.addNotes("Nội dung bổ sung:\nVí dụ: Khách A có rủi ro rời bỏ 80% nhưng giá trị mua hàng bình quân cao; khách B cũng có rủi ro 80% nhưng giá trị thấp. Không nhất thiết nên chi cùng một mức ưu đãi cho hai khách hàng này. Việc đánh giá mô hình cần gắn liền với lợi nhuận ròng thực tế.");

// ----------------------------------------------------
// Slide 7 — CONTENT: Phân khúc khách hàng
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("PHÂN KHÚC KHÁCH HÀNG (CUSTOMER SEGMENTATION)", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "Doanh nghiệp không có sẵn các nhãn phân loại khách hàng. Phân cụm giúp tự động tìm ra các nhóm khách hàng có hành vi tương đồng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY7 = (optIntro7.y as number) + (optIntro7.h as number) + cmToInch(0.2);

// Left table: Segmentation variables
slide7.addTable([
  [
    { text: "Nhóm biến hành vi", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Tần suất mua" }, { text: "Số đơn hàng trong 30, 60 hoặc 90 ngày." }],
  [{ text: "Giá trị mua" }, { text: "Tổng chi tiêu thực tế, giá trị đơn hàng trung bình." }],
  [{ text: "Mức độ gần đây (Recency)" }, { text: "Số ngày kể từ lần phát sinh mua hàng gần nhất." }],
  [{ text: "Tương tác số" }, { text: "Số lượt mở ứng dụng, số lần xem sản phẩm." }]
], {
  x: cmToInch(0.8),
  y: colY7,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Clustering Nature
slide7.addTable([
  [
    { text: "Đặc tính bài toán Phân cụm", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "• Nhiệm vụ khai phá: Phân cụm (Clustering)" }],
  [{ text: "• Phương pháp học: Học không giám sát (Unsupervised Learning)" }],
  [{ text: "• Có nhãn đầu ra sẵn không? Không có sẵn nhãn." }],
  [{ text: "• Mục đích: Khám phá cấu trúc ngầm để thiết kế chính sách CRM." }]
], {
  x: cmToInch(13.1),
  y: colY7,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7, "💡 Phân cụm tìm các nhóm có sẵn trong dữ liệu; nhà quản trị diễn giải ý nghĩa kinh doanh của từng nhóm sau khi mô hình tạo cụm.", {
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

slide7.addNotes("Nội dung bổ sung:\nQuy trình phân cụm: Dữ liệu hành vi khách hàng ➔ Đo mức độ tương đồng ➔ Phân cụm khách hàng ➔ Diễn giải và đặt tên cho từng cụm ➔ Thiết kế chính sách phù hợp.");

// ----------------------------------------------------
// Slide 8 — CONTENT: Tình huống 3 cụm khách hàng
// ----------------------------------------------------
const slide8 = pptx.addSlide({ masterName: "CONTENT" });
slide8.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide8.addText("TÌNH HUỐNG THỰC TẾ: BA NHÓM KHÁCH HÀNG BÁN LẺ", {
  placeholder: "title",
});

const optIntro8 = addText(slide8, "Minh họa kết quả phân cụm dữ liệu khách hàng thực tế tại An Phú Mart và đề xuất các chính sách CRM khác biệt.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY8 = (optIntro8.y as number) + (optIntro8.h as number) + cmToInch(0.2);

// Left table: 3 clusters
slide8.addTable([
  [
    { text: "Cụm phát hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Đặc điểm chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Chính sách đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Nhóm 1 (VIP)", options: { bold: true } }, { text: "Chi tiêu cao, mua thường xuyên, đơn giá lớn." }, { text: "Chăm sóc ưu tiên, tích điểm đổi quà đặc quyền." }],
  [{ text: "Nhóm 2 (Săn sale)" }, { text: "Mua khi giảm giá, thường sử dụng voucher." }, { text: "Gửi voucher đúng dịp lễ, đúng nhóm hàng." }],
  [{ text: "Nhóm 3 (Ít hoạt động)" }, { text: "Tần suất mua giảm, ít mở app di động." }, { text: "Thông điệp nhắc nhở, tặng voucher tái kích hoạt." }]
], {
  x: cmToInch(0.8),
  y: colY8,
  w: colW4,
  h: colH4,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Clustering vs Churn
addText(slide8, "🔍 PHÂN BIỆT RÕ RÀNG HAI BÀI TOÁN\n\n• Phân cụm (Clustering): Trả lời câu hỏi “Trong tập dữ liệu hiện tại đang có những nhóm khách hàng nào?”.\n• Dự báo rời bỏ (Churn): Trả lời câu hỏi “Khách hàng cụ thể nào có nguy cơ ngừng mua trong tương lai?”.\n• Nhóm 3 (Ít hoạt động) có rủi ro rời bỏ cao nhưng không mặc nhiên đồng nghĩa với “đã rời bỏ”; cần mô hình phân lớp đánh giá kỹ hơn.", {
  x: cmToInch(13.1),
  y: colY8,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide8, "💡 Kết quả phân cụm chỉ thực sự hữu ích khi được chuyển thành chân dung khách hàng rõ ràng và một chính sách CRM cụ thể có thể triển khai thực tế.", {
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

slide8.addNotes("Nội dung bổ sung:\nQuy trình triển khai: Kết quả phân cụm ➔ Hồ sơ hành vi từng nhóm ➔ Chính sách CRM khác biệt ➔ Đo lường phản hồi và cập nhật chiến lược.");

// ----------------------------------------------------
// Slide 9 — CONTENT: Luật kết hợp
// ----------------------------------------------------
const slide9 = pptx.addSlide({ masterName: "CONTENT" });
slide9.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide9.addText("PHÂN TÍCH GIỎ HÀNG VÀ LUẬT KẾT HỢP", {
  placeholder: "title",
});

const optIntro9 = addText(slide9, "Tìm các sản phẩm thường xuyên xuất hiện cùng nhau trong một giao dịch mua sắm để hỗ trợ chiến dịch bán chéo (Cross-selling).", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY9 = (optIntro9.y as number) + (optIntro9.h as number) + cmToInch(0.2);

// Left table: transactions
slide9.addTable([
  [
    { text: "Mã hóa đơn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Sản phẩm trong giỏ hàng thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "HD001" }, { text: "Bánh mì, sữa, trứng" }],
  [{ text: "HD002" }, { text: "Sữa, ngũ cốc" }],
  [{ text: "HD003" }, { text: "Bánh mì, sữa" }],
  [{ text: "HD004" }, { text: "Bánh mì, bơ, sữa" }]
], {
  x: cmToInch(0.8),
  y: colY9,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: 3 metrics
slide9.addTable([
  [
    { text: "Chỉ số luật kết hợp", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa đo lường thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Support (Độ hỗ trợ)", options: { bold: true } }, { text: "Quy mô ảnh hưởng của luật (số % giỏ hàng chứa cả A và B)." }],
  [{ text: "Confidence (Độ tin cậy)", options: { bold: true } }, { text: "Khả năng xảy ra B khi đã mua A." }],
  [{ text: "Lift (Độ nâng)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Độ mạnh của liên kết thực tế vượt trên mức ngẫu nhiên độc lập." }]
], {
  x: cmToInch(13.1),
  y: colY9,
  w: colW4,
  h: colH4,
  fontSize: 9.2,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide9, "💡 Lưu ý cực kỳ quan trọng: “Mua cùng nhau” là một liên kết thống kê, tuyệt đối không khẳng định mối quan hệ nhân quả vật lý giữa các sản phẩm.", {
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

slide9.addNotes("Nội dung bổ sung:\nỨng dụng trong bán lẻ: gợi ý sản phẩm mua kèm trên app/web, thiết kế gói combo khuyến mại, bố trí trưng bày sản phẩm trên quầy kệ siêu thị, hỗ trợ nhân viên tư vấn tại quầy.");

// ----------------------------------------------------
// Slide 10 — CONTENT: Gợi ý sản phẩm
// ----------------------------------------------------
const slide10 = pptx.addSlide({ masterName: "CONTENT" });
slide10.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide10.addText("TÌNH HUỐNG THỰC TẾ: GỢI Ý SẢN PHẨM MUA KÈM", {
  placeholder: "title",
});

const optIntro10 = addText(slide10, "Bối cảnh: Khách hàng thêm laptop vào giỏ, hệ thống cần đề xuất phụ kiện đi kèm phù hợp để bán chéo.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY10 = (optIntro10.y as number) + (optIntro10.h as number) + cmToInch(0.2);

// Left table: components
slide10.addTable([
  [
    { text: "Thành phần gợi ý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Sản phẩm chính" }, { text: "Laptop học tập/văn phòng." }],
  [{ text: "Sản phẩm đề xuất" }, { text: "Chuột không dây, túi chống sốc, tai nghe." }],
  [{ text: "Mục tiêu kinh doanh", options: { bold: true, color: DUE_COLORS.green } }, { text: "Bán chéo, tăng giá trị đơn hàng trung bình." }]
], {
  x: cmToInch(0.8),
  y: colY10,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Beyond buying together
addText(slide10, "⚙️ YẾU TỐ QUYẾT ĐỊNH ĐẦU RA GỢI Ý\n\nMột hệ thống gợi ý tốt không chỉ dựa vào tần suất mua cùng nhau lớn nhất. Hệ thống cần đánh giá thêm:\n• Tính bổ trợ thực tế (Laptop ➔ Chuột; tránh Laptop ➔ Laptop khác).\n• Phù hợp phân khúc giá: Phụ kiện không nên quá đắt đỏ so với laptop.\n• Tình trạng hàng tồn kho và biên lợi nhuận của sản phẩm phụ kiện.\n• Lịch sử mua sắm cá nhân của khách hàng.", {
  x: cmToInch(13.1),
  y: colY10,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide10, "💡 Gợi ý bán chéo hiệu quả bắt buộc phải kết hợp mối liên hệ thống kê trong dữ liệu với bối cảnh và nhu cầu cụ thể của từng khách hàng.", {
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

slide10.addNotes("Nội dung bổ sung:\nTập sản phẩm mua cùng thường được khai thác từ dữ liệu giao dịch để hỗ trợ bán kèm và tăng doanh số. Hệ thống không nên gợi ý các mặt hàng quá phổ biến nhưng không liên quan (như nước ngọt) hoặc các laptop khác khi khách đã chọn mua laptop.");

// ----------------------------------------------------
// Slide 11 — CONTENT: Dự báo doanh số
// ----------------------------------------------------
const slide11 = pptx.addSlide({ masterName: "CONTENT" });
slide11.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide11.addText("DỰ BÁO DOANH SỐ VÀ NHU CẦU TỒN KHO", {
  placeholder: "title",
});

const optIntro11 = addText(slide11, "Nhà bán lẻ dự báo doanh số theo cửa hàng, sản phẩm và thời gian để chủ động đặt hàng, điều phối tồn kho hợp lý.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY11 = (optIntro11.y as number) + (optIntro11.h as number) + cmToInch(0.2);

// Left table: regression & timeseries
slide11.addTable([
  [
    { text: "Bản chất bài toán", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Chi tiết thiết kế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Nhiệm vụ khai phá" }, { text: "Hồi quy (Regression) hoặc dự báo chuỗi thời gian." }],
  [{ text: "Dữ liệu đầu vào" }, { text: "Doanh số quá khứ, giá bán, khuyến mại, mùa vụ, ngày lễ." }],
  [{ text: "Đầu ra mô hình" }, { text: "Một giá trị số liên tục (ví dụ: 520 hộp sữa tuần sau)." }],
  [{ text: "Mục tiêu tối ưu" }, { text: "Hỗ trợ lập kế hoạch cung ứng tồn kho trước khi nhu cầu thực xảy ra." }]
], {
  x: cmToInch(0.8),
  y: colY11,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Two approaches
addText(slide11, "📈 HAI PHƯƠNG PHÁP TIẾP CẬN CHÍNH\n\n• 1. Mô hình hồi quy (Regression):\n  ↳ Dự báo doanh số dựa trên các biến giải thích tác động trực tiếp (như mức giảm giá %, chi tiêu quảng cáo, vị trí cửa hàng).\n• 2. Dự báo chuỗi thời gian (Time-series):\n  ↳ Dự báo dựa trên diễn biến thời gian lịch sử; phân tích kỹ xu hướng (trend), tính chu kỳ/mùa vụ lặp lại (seasonality) và các giá trị trễ.", {
  x: cmToInch(13.1),
  y: colY11,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide11, "💡 Khác với bài toán phân lớp, đầu ra của dự báo nhu cầu là một con số liên tục. Giá trị cốt lõi của nó nằm ở việc chuẩn bị tối ưu tồn kho.", {
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

slide11.addNotes("Nội dung bổ sung:\nDoanh số áo khoác tăng vào mùa lạnh, bánh kẹo tăng trước tết. Nếu các quy luật này lặp lại, chúng là các tín hiệu quan trọng cho mô hình dự báo chuỗi thời gian.");

// ----------------------------------------------------
// Slide 12 — CONTENT: Hết hàng hay tồn kho
// ----------------------------------------------------
const slide12 = pptx.addSlide({ masterName: "CONTENT" });
slide12.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide12.addText("HẾT HÀNG HAY TỒN KHO QUÁ MỨC?", {
  placeholder: "title",
});

const optIntro12 = addText(slide12, "Trong ngành bán lẻ, sai số dự báo nhu cầu trực tiếp ảnh hưởng xấu đến doanh thu hoặc làm tăng chi phí vốn lưu kho.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY12 = (optIntro12.y as number) + (optIntro12.h as number) + cmToInch(0.2);

// Left table: comparing errors
slide12.addTable([
  [
    { text: "Tình huống sai số", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nguyên nhân kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hệ quả kinh doanh thực tế", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dự báo quá thấp", options: { bold: true } }, { text: "Nhu cầu thực > Dự báo" }, { text: "Hết hàng, mất doanh thu cơ hội, giảm trải nghiệm khách hàng." }],
  [{ text: "Dự báo quá cao", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Nhu cầu thực < Dự báo" }, { text: "Giam vốn, tăng chi phí lưu kho, buộc phải giảm giá xả lỗ." }],
  [{ text: "Dự báo đúng hơn" }, { text: "Chênh lệch rất nhỏ" }, { text: "Cân bằng tối ưu tồn kho và khả năng phục vụ." }]
], {
  x: cmToInch(0.8),
  y: colY12,
  w: colW4,
  h: colH4,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Evaluation rules
addText(slide12, "⚙️ QUY TẮC ĐÁNH GIÁ MÔ HÌNH DỰ BÁO\n\n• Chi phí bất đối xứng:\n  ↳ Ở một số sản phẩm tươi sống, tồn kho quá mức gây thối hỏng xả lỗ nặng.\n  ↳ Ở sản phẩm công nghệ, hết hàng khiến khách sang đối thủ mua ngay.\n• Đánh giá sai số chi tiết:\n  ↳ Không chỉ nhìn sai số trung bình (MAE/MAPE) toàn hệ thống; phải phân tích sai số theo nhóm sản phẩm, cửa hàng và thời điểm cụ thể.", {
  x: cmToInch(13.1),
  y: colY12,
  w: colW4,
  h: colH4,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide12, "💡 Mục tiêu cuối cùng là giảm thiểu tổng chi phí do hết hàng, tồn kho và các quyết định cung ứng sai lệch, không phải là chỉ số sai số đẹp trên giấy tờ.", {
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

slide12.addNotes("Nội dung bổ sung:\nVí dụ: Cửa hàng dự báo bán 100 tai nghe nhưng thực tế là 160 chiếc. Nếu không bổ sung kịp, 60 chiếc chênh lệch là doanh thu bị bỏ lỡ. Ngược lại nếu dự báo 160 chiếc nhưng chỉ bán được 100 chiếc, 60 chiếc còn lại gây tăng chi phí lưu kho, đặc biệt rủi ro với hàng công nghệ lỗi thời nhanh hoặc hàng tươi sống.");
