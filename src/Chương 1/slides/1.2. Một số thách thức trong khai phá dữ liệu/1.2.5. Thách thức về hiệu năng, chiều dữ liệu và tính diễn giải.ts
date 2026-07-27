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
slide1.addText("1.2.5. HIỆU NĂNG, CHIỀU DỮ LIỆU VÀ TÍNH DIỄN GIẢI", {
  placeholder: "title",
});
slide1.addText("Một mô hình tốt không chỉ dự báo chính xác. Nó còn phải chạy đủ nhanh, dùng được với dữ liệu thực tế, có chi phí phù hợp, ổn định theo thời gian và giải thích được cho người ra quyết định.", {
  placeholder: "content",
  y: cmToInch(5.5),
});
slide1.addText("Câu hỏi dẫn nhập:\n“Nếu mô hình phức tạp hơn chỉ tăng độ chính xác từ 84% lên 85%, nhưng không thể giải thích vì sao từ chối khoản vay, liệu doanh nghiệp có nên chọn nó?”", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 2 — CONTENT
// ----------------------------------------------------
const slide2 = pptx.addSlide({ masterName: "CONTENT" });
slide2.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide2.addText("LỜI NGUYỀN CHIỀU DỮ LIỆU (CURSE OF DIMENSIONALITY)", {
  placeholder: "title",
});

const optIntro2 = addText(slide2, "Khi số lượng biến đầu vào (chiều dữ liệu) tăng lên, không gian dữ liệu trở nên thưa thớt theo cấp số nhân, làm giảm nghiêm trọng hiệu năng của thuật toán.", {
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

// Left column: math table
slide2.addTable([
  [
    { text: "Số chiều (Biến)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Số vùng không gian cần phủ\n(Nếu mỗi biến chia 8 mức)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "2 chiều (x1, x2)", options: { bold: true } }, { text: "8^2 = 64 vùng" }],
  [{ text: "3 chiều (x1, x2, x3)", options: { bold: true } }, { text: "8^3 = 512 vùng" }],
  [{ text: "10 chiều (x1 đến x10)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "8^10 = 1.073.741.824 vùng (Hơn 1 tỷ)" }]
], {
  x: cmToInch(0.8),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right column: Consequences
addText(slide2, "⚠️ CÁC HỆ QUẢ CỦA CHIỀU DỮ LIỆU LỚN\n\n• Không gian thưa thớt: Khoảng cách giữa các điểm dữ liệu mất đi ý nghĩa phân biệt, thuật toán k-NN và phân cụm hoạt động kém.\n• Nguy cơ quá khớp (Overfitting): Mô hình có quá nhiều biến để khớp nên dễ học cả các nhiễu ngẫu nhiên thay vì quy luật thật.\n• Chi phí tính toán tăng: Tốn thời gian huấn luyện, lưu trữ dữ liệu.\n• Biến dư thừa: Quá nhiều biến tương quan làm loãng tín hiệu chính.", {
  x: cmToInch(13.1),
  y: colY2,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide2, "💡 Nhiều biến đầu vào hơn hoàn toàn không đồng nghĩa với việc mang lại nhiều giá trị thông tin phân tích hơn; đôi khi nó chỉ mang lại thêm nhiễu.", {
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

slide2.addNotes("Nội dung bổ sung:\nChiều dữ liệu là số biến đầu vào (predictors/features) dùng để mô tả mỗi quan sát. Khi dữ liệu quan sát không tăng tương ứng với số chiều, từng vùng không gian sẽ thiếu dữ liệu để học quy luật đáng tin cậy.");

// ----------------------------------------------------
// Slide 3 — CONTENT
// ----------------------------------------------------
const slide3 = pptx.addSlide({ masterName: "CONTENT" });
slide3.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide3.addText("GIẢM CHIỀU: GIỮ TÍN HIỆU, BỎ NHIỄU", {
  placeholder: "title",
});

const optIntro3 = addText(slide3, "Giảm chiều dữ liệu nhằm giữ lại lượng thông tin có ích tối ưu, giảm thiểu biến trùng lặp, biến nhiễu hoặc biến quá tốn kém để thu thập.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY3 = (optIntro3.y as number) + (optIntro3.h as number) + cmToInch(0.2);

// Left table: Approaches
slide3.addTable([
  [
    { text: "Cách tiếp cận", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mô tả nguyên lý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ cụ thể", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Lựa chọn thuộc tính" }, { text: "Giữ biến có ích, loại biến nhiễu" }, { text: "Giữ số lần khiếu nại, loại mã nhân viên." }],
  [{ text: "Loại biến dư thừa" }, { text: "Loại biến tương quan quá cao" }, { text: "Chỉ chọn 1 trong 2 biến: phút gọi và cước gọi." }],
  [{ text: "Tạo biến tổng hợp" }, { text: "Gộp nhiều biến thành 1 chỉ số" }, { text: "Tạo chỉ số 'mức tiêu dùng data' tổng hợp." }],
  [{ text: "Giảm chiều tự động" }, { text: "Tạo thành phần chính toán học" }, { text: "Áp dụng thuật toán PCA trích chọn đặc trưng." }]
], {
  x: cmToInch(0.8),
  y: colY3,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Rules
addText(slide3, "🎯 TIÊU CHÍ LỰA CHỌN ĐẶC TRƯNG TỐT\n\n• Có liên quan trực tiếp đến mục tiêu cần dự báo.\n• Có sẵn trước thời điểm đưa ra quyết định dự báo.\n• Có chất lượng dữ liệu tốt và chi phí thu thập hợp lý.\n\n⚠️ Quá khớp (Overfitting): Thêm quá nhiều biến dư thừa làm mô hình khớp hoàn hảo trên tập dữ liệu cũ nhưng dự báo sai lệch trên các trường hợp mới.", {
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

addText(slide3, "💡 Giảm chiều dữ liệu là một phần quan trọng trong quá trình thiết kế dữ liệu tốt hơn, chứ không đơn thuần chỉ là việc làm nhỏ kích thước tệp mô hình.", {
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

slide3.addNotes("Nội dung bổ sung:\nGiảm chiều thường được thực hiện trước khi triển khai mô hình, thông qua tri thức miền, kiểm tra tương quan, gộp biến, chọn tập biến hoặc các kỹ thuật như phân tích thành phần chính (PCA). Biến nhiễu gây ra hiện tượng quá khớp (overfitting) - khớp rất tốt trên tập huấn luyện nhưng dự báo kém trên tập dữ liệu thực tế.");

// ----------------------------------------------------
// Slide 4 — CONTENT
// ----------------------------------------------------
const slide4 = pptx.addSlide({ masterName: "CONTENT" });
slide4.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide4.addText("ĐỘ CHÍNH XÁC (ACCURACY) CHƯA ĐỦ", {
  placeholder: "title",
});

const optIntro4 = addText(slide4, "Một mô hình có độ chính xác (Accuracy) cao trong phòng thí nghiệm chưa chắc đã là phương án tối ưu khi đưa vào vận hành thực tế.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY4 = (optIntro4.y as number) + (optIntro4.h as number) + cmToInch(0.2);

// Left table: Criteria
slide4.addTable([
  [
    { text: "Tiêu chí đánh giá", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ý nghĩa thực tế nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Độ chính xác chi tiết", options: { bold: true } }, { text: "Precision và Recall trên lớp hiếm quan trọng như thế nào?" }],
  [{ text: "Tốc độ phản hồi", options: { bold: true } }, { text: "Thời gian xử lý cho mỗi giao dịch có dưới giây không?" }],
  [{ text: "Chi phí dữ liệu", options: { bold: true } }, { text: "Phí mua dữ liệu từ bên thứ ba có xứng đáng với độ chính xác tăng thêm?" }],
  [{ text: "Tính diễn giải", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Người dùng nghiệp vụ hoặc kiểm toán có thể giải thích logic phê duyệt?" }]
], {
  x: cmToInch(0.8),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Tradeoff
addText(slide4, "⚖️ BÀI TOÁN CHI PHÍ SAI PHÂN LOẠI\n\nTrong phê duyệt tín dụng ngân hàng:\n• Sai lầm loại 1 (Từ chối nhầm khách tốt):\n  ↳ Mất đi doanh thu lãi suất tiềm năng từ khách hàng.\n• Sai lầm loại 2 (Chấp nhận nhầm khách xấu):\n  ↳ Gây tổn thất mất trắng toàn bộ vốn khoản nợ xấu.\n\n👉 Kết luận: Chi phí của hai lỗi này rất lệch nhau. Do đó, mục tiêu của doanh nghiệp là tối ưu giá trị ròng thu về thay vì chỉ tối đa hóa chỉ số Accuracy chung.", {
  x: cmToInch(13.1),
  y: colY4,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide4, "💡 Mô hình tốt nhất là mô hình tạo ra giá trị ròng cao nhất trong điều kiện vận hành thực tế, không nhất thiết phải là mô hình có chỉ số Accuracy cao nhất.", {
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

slide4.addNotes("Nội dung bổ sung:\nCác thước đo đánh giá mô hình phân loại không chỉ gồm accuracy; precision, recall, chi phí sai phân loại, tốc độ và khả năng diễn giải đều có thể quan trọng tùy bối cảnh ứng dụng.");

// ----------------------------------------------------
// Slide 5 — CONTENT
// ----------------------------------------------------
const slide5 = pptx.addSlide({ masterName: "CONTENT" });
slide5.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide5.addText("VÍ DỤ 1: DỰ BÁO RỜI BỎ THUÊ BAO VIỄN THÔNG", {
  placeholder: "title",
});

const optIntro5 = addText(slide5, "Bài toán chọn lọc đặc trưng từ hơn 1.000 biến đầu vào của mạng viễn thông để dự đoán nguy cơ rời bỏ của thuê bao.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY5 = (optIntro5.y as number) + (optIntro5.h as number) + cmToInch(0.2);

// Left table: telecom features
slide5.addTable([
  [
    { text: "Nhóm đặc trưng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Quyết định gợi ý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Hữu ích & Sẵn có (Số ngày trống data, số lần gọi CSKH)", options: { bold: true } }, { text: "Giữ lại và đưa vào mô hình." }],
  [{ text: "Dư thừa (Có tương quan rất cao giữa phút gọi & cước)", options: { bold: true } }, { text: "Chỉ giữ một biến đại diện tốt nhất." }],
  [{ text: "Rò rỉ thông tin (Trạng thái 'đã hủy thuê bao')", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Bắt buộc phải loại bỏ khỏi biến đầu vào." }],
  [{ text: "Không ổn định (Mã chiến dịch nội bộ đổi theo tháng)", options: { bold: true } }, { text: "Chuẩn hóa lại hoặc loại bỏ hoàn toàn." }]
], {
  x: cmToInch(0.8),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: feature engineering
addText(slide5, "⚙️ TẠO BIẾN TỔNG HỢP CÓ NGHĨA NGHIỆP VỤ\n\n• Tín hiệu gần thời gian dự báo (ví dụ: cước dùng trong 7 ngày qua) thường phản ánh nguy cơ rời bỏ nhạy bén hơn biến tổng lịch sử từ 2 năm trước.\n• Khuyến nghị tạo biến tỷ lệ thay thế:\n   ↳ Tỷ lệ khiếu nại gần đây = (Khiếu nại 30 ngày) / (Thâm niên sử dụng thuê bao)\n\n👉 Ý nghĩa: Giúp mô hình tập trung vào tín hiệu mới phát sinh mà vẫn giữ bối cảnh dài hạn.", {
  x: cmToInch(13.1),
  y: colY5,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide5, "💡 Biến tốt không chỉ cần tương quan cao với nhãn mục tiêu; nó bắt buộc phải đáng tin cậy, sẵn có đúng thời điểm và có thể vận hành lâu dài.", {
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

slide5.addNotes("Nội dung bổ sung:\nDữ liệu có nhiều biến làm tăng nguy cơ dư thừa, chi phí tính toán và quá khớp; tri thức nghiệp vụ cần được sử dụng để xác định biến nào đáng thu thập và có sẵn trước khi kết quả rời bỏ xảy ra.");

// ----------------------------------------------------
// Slide 6 — CONTENT
// ----------------------------------------------------
const slide6 = pptx.addSlide({ masterName: "CONTENT" });
slide6.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide6.addText("VÍ DỤ 2: ĐỘ CHÍNH XÁC HAY SỰ DỄ DIỄN GIẢI?", {
  placeholder: "title",
});

const optIntro6 = addText(slide6, "So sánh sự đánh đổi giữa mô hình học máy phức tạp (Black-box) và mô hình cây quyết định minh bạch (Interpretable) trong phê duyệt khoản vay.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY6 = (optIntro6.y as number) + (optIntro6.h as number) + cmToInch(0.2);

// Left table: Comparison
slide6.addTable([
  [
    { text: "Tiêu chí so sánh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mô hình phức tạp (XGBoost)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Cây quyết định (Decision Tree)", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Độ chính xác" }, { text: "Cao hơn (85% Accuracy)" }, { text: "Thấp hơn nhẹ (84% Accuracy)" }],
  [{ text: "Khả năng diễn giải" }, { text: "Rất thấp (Hộp đen phức tạp)" }, { text: "Rất cao (Luật IF-THEN rõ ràng)" }],
  [{ text: "Tốc độ & Triển khai" }, { text: "Cần hạ tầng máy chủ mạnh" }, { text: "Rất nhanh, dễ lập trình vào SQL" }],
  [{ text: "Kiểm toán & Giải trình", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Yêu cầu quy trình phức tạp" }, { text: "Dễ dàng truy vết quyết định lý do" }]
], {
  x: cmToInch(0.8),
  y: colY6,
  w: colW2,
  h: colH2,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Rules example
addText(slide6, "🌳 MINH HỌA QUY TẮC CÂY QUYẾT ĐỊNH\n\n• Cây quyết định cung cấp giải trình minh bạch:\n   ↳ IF thu nhập ổn định\n   ↳ AND tỷ lệ nghĩa vụ trả nợ / thu nhập thấp\n   ↳ AND không có nợ quá hạn nghiêm trọng gần đây\n   ↳ THEN quyết định phê duyệt cho vay rủi ro thấp.\n\n👉 Khuyến nghị: Cân nhắc kết hợp dùng mô hình phức tạp để xếp hạng rủi ro, và dùng quy tắc cây quyết định để làm màng lọc giải trình pháp lý.", {
  x: cmToInch(13.1),
  y: colY6,
  w: colW2,
  h: colH2,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide6, "💡 Tính diễn giải (interpretability) là một yêu cầu thiết kế bắt buộc của hệ thống ra quyết định, đặc biệt khi quyết định đó ảnh hưởng trực tiếp đến quyền lợi khách hàng.", {
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

slide6.addNotes("Nội dung bổ sung:\nCây quyết định tạo ra các quy tắc phân loại tương đối minh bạch, đồng thời có thể tự động chọn một tập con biến quan trọng; ngược lại, các mô hình tổ hợp thường cải thiện hiệu năng nhưng làm giảm tính trực quan của quyết định.");

// ----------------------------------------------------
// Slide 7 — CONTENT (Bài tập)
// ----------------------------------------------------
const slide7 = pptx.addSlide({ masterName: "CONTENT" });
slide7.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7.addText("BÀI TẬP NHANH: PHÂN LOẠI BIẾN TRƯỚC MÔ HÌNH HÓA", {
  placeholder: "title",
});

const optIntro7 = addText(slide7, "👥 Hoạt động (3 phút): Phân loại từng biến định giá bất động sản đề xuất dưới đây vào đúng nhóm xử lý phù hợp.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY7 = (optIntro7.y as number) + (optIntro7.h as number) + cmToInch(0.2);

slide7.addTable([
  [
    { text: "Tên biến", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mô tả ý nghĩa", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Nhóm xử lý đề xuất", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    { text: "Lập luận ngắn gọn / Vì sao?", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "dien_tich" }, { text: "Diện tích sử dụng thực tế (m²)" }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }, { text: "?" }],
  [{ text: "dia_chi" }, { text: "Địa chỉ đầy đủ bằng văn bản" }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }, { text: "?" }],
  [{ text: "gia_ban_thuc_te" }, { text: "Giá giao dịch thực tế sau khi đã bán xong" }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }, { text: "?" }],
  [{ text: "so_ngay_dang_tin" }, { text: "Số ngày đăng tin trước khi căn nhà được bán" }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }, { text: "?" }],
  [{ text: "ma_giao_dich" }, { text: "Mã định danh giao dịch nội bộ duy nhất" }, { text: "?", options: { color: DUE_COLORS.orange, bold: true, align: "center" } }, { text: "?" }]
], {
  x: cmToInch(0.8),
  y: tableY7,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7, "💬 Gợi ý các nhóm xử lý: (1) Giữ trực tiếp, (2) Cần mã hóa/biến đổi, (3) Loại bỏ vì rò rỉ thông tin (data leakage), (4) Loại bỏ vì không có giá trị dự báo.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7.addNotes("Ghi chú giảng viên:\nCho học viên thảo luận phân loại nhanh trong 3 phút trước khi chiếu đáp án.");

// ----------------------------------------------------
// Slide 7b — CONTENT (Đáp án)
// ----------------------------------------------------
const slide7b = pptx.addSlide({ masterName: "CONTENT" });
slide7b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide7b.addText("ĐÁP ÁN ĐỀ XUẤT PHÂN LOẠI BIẾN", {
  placeholder: "title",
});

const optIntro7b = addText(slide7b, "✅ Bảng đáp án phân loại xử lý biến phục vụ bài toán định giá niêm yết đề xuất.", {
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
    { text: "Tên biến", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hướng xử lý đề xuất", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Lập luận lý giải chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "dien_tich / so_phong" }, { text: "Giữ trực tiếp", options: { bold: true, color: DUE_COLORS.green } }, { text: "Có sẵn trước khi định giá và liên quan trực tiếp đến quy mô tài sản." }],
  [{ text: "dia_chi / loai_bat_dong_san" }, { text: "Cần mã hóa / biến đổi", options: { bold: true, color: DUE_COLORS.green } }, { text: "Địa chỉ cần chuyển thành phường, quận, khoảng cách trung tâm; loại BĐS cần mã hóa one-hot." }],
  [{ text: "gia_ban_thuc_te / so_ngay_dang_tin" }, { text: "Loại vì rò rỉ thông tin", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Đây là thông tin kết quả chỉ xảy ra sau khi niêm yết và bán xong; đưa vào sẽ tạo mô hình ảo." }],
  [{ text: "ma_giao_dich" }, { text: "Loại vì không có giá trị", options: { bold: true } }, { text: "Mã ngẫu nhiên định danh riêng lẻ, không có tính khái quát hóa cho mô hình học máy." }]
], {
  x: cmToInch(0.8),
  y: tableY7b,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide7b, "💡 Rò rỉ thông tin (data leakage) xảy ra khi mô hình sử dụng thông tin không có tại thời điểm đưa ra dự báo. Nó tạo ra hiệu năng đánh giá ảo rất cao, nhưng hoàn toàn thất bại khi vận hành thực tế.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide7b.addNotes(`Ghi chú giảng viên:
- Nhấn mạnh định nghĩa Rò rỉ thông tin (Data Leakage): Sử dụng biến chỉ xuất hiện sau khi kết quả xảy ra làm mô hình mất thực tế.
- Mở rộng thảo luận: Nếu mục tiêu đổi thành dự báo “căn nhà có bán được trong 30 ngày hay không”, so_ngay_dang_tin còn là biến rò rỉ không? (Khi đó thời điểm chấm dự báo là ngày đầu tiên đăng tin -> biến so_ngay_dang_tin chưa hề xảy ra đầy đủ -> vẫn là rò rỉ nếu dùng giá trị cuối cùng. Cần phân tích kỹ thời điểm cắt dữ liệu).`);
