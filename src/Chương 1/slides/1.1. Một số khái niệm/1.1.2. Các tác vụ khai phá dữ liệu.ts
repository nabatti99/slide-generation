import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 12 — SECTION
// ----------------------------------------------------
const slide12 = pptx.addSlide({ masterName: "SECTION" });
slide12.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide12.addText("1.1.2. CÁC TÁC VỤ KHAI PHÁ DỮ LIỆU", {
  placeholder: "title",
});
slide12.addText("Một bài toán nghiệp vụ chỉ được giải quyết đúng khi lựa chọn đúng tác vụ khai phá dữ liệu.", {
  placeholder: "content",
});
slide12.addText("Câu hỏi dẫn nhập:\n“Khách hàng nào có nguy cơ trễ hạn?”, “Có những nhóm khách hàng nào?”, và “Sản phẩm nào hay được mua cùng nhau?” có phải là cùng một loại bài toán?", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 13 — CONTENT
// ----------------------------------------------------
const slide13 = pptx.addSlide({ masterName: "CONTENT" });
slide13.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide13.addText("TÁC VỤ KHAI PHÁ DỮ LIỆU: CẦN TÌM LOẠI TRI THỨC NÀO?", {
  placeholder: "title",
});

const optIntro13 = addText(slide13, "Tác vụ khai phá dữ liệu xác định loại tri thức cần tìm từ dữ liệu. Việc chọn tác vụ phải bắt đầu từ câu hỏi nghiệp vụ, dữ liệu hiện có và cách sử dụng kết quả.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

// 5-step pipeline layout
const stepW = cmToInch(4.2);
const stepH = cmToInch(1.5);
const stepY = (optIntro13.y as number) + (optIntro13.h as number) + cmToInch(0.2);
const startX13 = cmToInch(0.8);
const stepGap = cmToInch(0.7);

const stepsData = [
  { text: "1. Câu hỏi\nnghiệp vụ", bg: DUE_COLORS.orange, fg: DUE_COLORS.white, bold: true },
  { text: "2. Dữ liệu\nliên quan", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { text: "3. Loại tri thức\ncần tìm", bg: DUE_COLORS.lightGreen, fg: DUE_COLORS.darkText, bold: false },
  { text: "4. Tác vụ\nkhai phá phù hợp", bg: DUE_COLORS.orange, fg: DUE_COLORS.white, bold: true },
  { text: "5. Kết quả &\nHành động", bg: DUE_COLORS.green, fg: DUE_COLORS.white, bold: true }
];

stepsData.forEach((step, idx) => {
  addText(slide13, step.text, {
    x: startX13 + (stepW + stepGap) * idx,
    y: stepY,
    w: stepW,
    h: stepH,
    fontSize: 11,
    color: step.fg,
    fill: { color: step.bg },
    bold: step.bold,
    align: "center",
    valign: "middle",
    shape: "roundRect",
    margin: 8,
    rectRadius: 0.1,
  });
});

// Horizontal table below pipeline
const tableY13 = stepY + stepH + cmToInch(1);
slide13.addTable([
  [
    { text: "Câu hỏi nghiệp vụ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dữ liệu liên quan", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tác vụ phù hợp", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } },
    { text: "Kết quả", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Khách nào sẽ trễ hạn?", options: { bold: true } },
    { text: "Thu nhập, dư nợ, lịch sử trả nợ" },
    { text: "Phân lớp", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Rủi ro thấp/cao" }
  ],
  [
    { text: "Doanh thu tháng tới là bao nhiêu?", options: { bold: true } },
    { text: "Doanh thu theo thời gian, khuyến mãi, mùa vụ" },
    { text: "Dự báo/hồi quy", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Giá trị doanh thu dự kiến" }
  ],
  [
    { text: "Có những nhóm khách hàng nào?", options: { bold: true } },
    { text: "Tần suất mua, chi tiêu, phản hồi khuyến mãi" },
    { text: "Phân cụm", options: { bold: true, color: DUE_COLORS.orange } },
    { text: "Các phân khúc khách hàng" }
  ]
], {
  x: cmToInch(0.8),
  y: tableY13,
  w: cmToInch(23.8),
  h: cmToInch(2.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide13, "💡 Không bắt đầu bằng câu hỏi “dùng thuật toán nào?”, mà bắt đầu bằng câu hỏi “doanh nghiệp cần biết điều gì?”.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide13.addNotes("Nội dung bổ sung:\nMột tác vụ khai phá cần xác định dữ liệu liên quan, loại tri thức cần tìm, tri thức nền, thước đo đánh giá và cách biểu diễn kết quả.");

// ----------------------------------------------------
// Slide 14 — CONTENT
// ----------------------------------------------------
const slide14 = pptx.addSlide({ masterName: "CONTENT" });
slide14.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide14.addText("HAI NHÓM TÁC VỤ CHÍNH: MÔ TẢ VÀ DỰ ĐOÁN", {
  placeholder: "title",
});

const colW14 = cmToInch(11.5);
const colH14 = cmToInch(3.8);
const colY14 = cmToInch(1.8);

addText(slide14, "🔍 TÁC VỤ MÔ TẢ (Descriptive)\n\n• Câu hỏi trọng tâm: Dữ liệu đang thể hiện điều gì?\n• Mục tiêu: Khám phá cấu trúc, quy luật, nhóm và mối liên hệ tự nhiên trong dữ liệu.\n• Ví dụ tác vụ: Phân cụm, luật kết hợp, đặc trưng hóa.\n• Ví dụ kinh doanh: Phân khúc khách hàng theo hành vi chi tiêu.\n\n👉 Minh họa: “Có 3 nhóm khách hàng mua sắm với đặc trưng khác biệt rõ rệt.”", {
  x: cmToInch(0.8),
  y: colY14,
  w: colW14,
  h: colH14,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide14, "🔮 TÁC VỤ DỰ ĐOÁN (Predictive)\n\n• Câu hỏi trọng tâm: Điều gì có khả năng xảy ra?\n• Mục tiêu: Ước lượng nhãn lớp hoặc giá trị chưa biết dựa trên dữ liệu quá khứ.\n• Ví dụ tác vụ: Phân lớp, hồi quy, dự báo.\n• Ví dụ kinh doanh: Dự đoán khách hàng có vỡ nợ hay không.\n\n👉 Minh họa: “Khách hàng A có 78% khả năng rời bỏ dịch vụ trong 30 ngày tới.”", {
  x: cmToInch(13.1),
  y: colY14,
  w: colW14,
  h: colH14,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide14, "💡 Mô tả giúp chúng ta hiểu sâu sắc về dữ liệu hiện tại, trong khi dự đoán giúp doanh nghiệp chủ động chuẩn bị các phương án cho tương lai.", {
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

slide14.addNotes("Nội dung bổ sung:\nTri thức khai phá có thể mang tính mô tả hoặc dự đoán, tùy theo loại câu hỏi và mục tiêu của bài toán.");

// ----------------------------------------------------
// Slide 15 — CONTENT
// ----------------------------------------------------
const slide15 = pptx.addSlide({ masterName: "CONTENT" });
slide15.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide15.addText("PHÂN LỚP VÀ DỰ BÁO/HỒI QUY", {
  placeholder: "title",
});

const colW15 = cmToInch(11.5);
const colH15 = cmToInch(3.8);
const colY15 = cmToInch(1.8);

addText(slide15, "🏷️ PHÂN LỚP (Classification)\n\n• Mục tiêu: Gán đối tượng vào các lớp đã xác định trước.\n• Đầu vào: Dữ liệu quá khứ đã được dán nhãn sẵn.\n• Đầu ra: Các nhãn rời rạc (Ví dụ: Có/Không, Rủi ro thấp/cao).\n• Câu hỏi ví dụ: Khách hàng này có trễ hạn thanh toán không?\n• Phương pháp: Cây quyết định, Naive Bayes, mạng nơ-ron.\n\n🎯 Ví dụ: Khách hàng A → Rủi ro cao", {
  x: cmToInch(0.8),
  y: colY15,
  w: colW15,
  h: colH15,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide15, "📈 DỰ BÁO / HỒI QUY (Regression/Prediction)\n\n• Mục tiêu: Dự đoán một giá trị số liên tục.\n• Đầu vào: Dữ liệu quá khứ có biến mục tiêu dạng số.\n• Đầu ra: Giá trị số cụ thể (Ví dụ: 250 triệu VNĐ, 8.500 đơn hàng).\n• Câu hỏi ví dụ: Doanh thu tháng tới của cửa hàng là bao nhiêu?\n• Phương pháp: Hồi quy tuyến tính, hồi quy cây, chuỗi thời gian.\n\n🎯 Ví dụ: Chi nhánh A → Doanh thu dự kiến: 1,25 tỷ đồng", {
  x: cmToInch(13.1),
  y: colY15,
  w: colW15,
  h: colH15,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide15, "⚠️ “Dự đoán” là khái niệm chung để chỉ việc đoán trước tương lai. Tuy nhiên, trong khai phá dữ liệu, dự báo/hồi quy thường được dùng riêng khi biến cần dự đoán là một CON SỐ liên tục.", {
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

slide15.addNotes("Nội dung bổ sung:\nPhân lớp gán đối tượng vào các lớp đã xác định trước, trong khi hồi quy/dự đoán số hướng đến ước lượng một giá trị liên tục.");

// ----------------------------------------------------
// Slide 16 — CONTENT
// ----------------------------------------------------
const slide16 = pptx.addSlide({ masterName: "CONTENT" });
slide16.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide16.addText("CASE STUDY: AI CÓ NGUY CƠ TRỄ HẠN THANH TOÁN?", {
  placeholder: "title",
});

const colW16 = cmToInch(7.5);
const colH16 = cmToInch(3.3);
const colY16 = cmToInch(2.2);
const colGap16 = cmToInch(0.65);

addText(slide16, "📂 1. DỮ LIỆU ĐẦU VÀO\n\n• Hồ sơ KH: Thu nhập, nghề nghiệp, thâm niên.\n• Tín dụng: Dư nợ hiện tại, hạn mức, tỷ lệ sử dụng.\n• Lịch sử: Số ngày trễ hạn, tần suất chậm thanh toán.\n• Giao dịch: Tần suất rút tiền, giá trị chi tiêu.", {
  x: cmToInch(0.8),
  y: colY16,
  w: colW16,
  h: colH16,
  fontSize: 11,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide16, "⚙️ 2. BÀI TOÁN KHAI PHÁ\n\n• Thu thập dữ liệu lịch sử của hàng ngàn khách hàng.\n• Huấn luyện mô hình từ các trường hợp đã biết trước kết quả trả nợ.\n• Phân lớp khách hàng mới vào một trong hai nhóm:\n   ↳ RỦI RO THẤP\n   ↳ RỦI RO CAO", {
  x: cmToInch(0.8) + colW16 + colGap16,
  y: colY16,
  w: colW16,
  h: colH16,
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide16, "🚀 3. HÀNH ĐỘNG NGHIỆP VỤ\n\n• Nhắc thanh toán sớm qua ứng dụng/SMS trước hạn.\n• Rà soát, điều chỉnh hạn mức tín dụng khách hàng rủi ro cao.\n• Ưu tiên nhân viên tư vấn gọi điện hỗ trợ cho nhóm khách VIP có nguy cơ cao.", {
  x: cmToInch(0.8) + (colW16 + colGap16) * 2,
  y: colY16,
  w: colW16,
  h: colH16,
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide16, "💡 Đây là bài toán PHÂN LỚP điển hình vì đầu ra là các nhãn lớp (Rủi ro thấp / Rủi ro cao) đã được định nghĩa trước.", {
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

slide16.addNotes("Nội dung bổ sung:\nPhân lớp là tác vụ tìm cách gán các đối tượng vào những lớp đã biết; các phương pháp thường được nêu trong tài liệu gồm cây quyết định, Random Forest, KNN, Naive Bayes và mạng nơ-ron.");

// ----------------------------------------------------
// Slide 17 — CONTENT
// ----------------------------------------------------
const slide17 = pptx.addSlide({ masterName: "CONTENT" });
slide17.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide17.addText("PHÂN CỤM: TÌM CÁC NHÓM TỰ NHIÊN TRONG DỮ LIỆU", {
  placeholder: "title",
});

const colW17 = cmToInch(11.5);
const colH17 = cmToInch(3.8);
const colY17 = cmToInch(1.8);

addText(slide17, "🧩 KHÁI NIỆM & ĐẶC ĐIỂM\n\n• Phân cụm (Clustering) là chia các đối tượng thành các nhóm sao cho các đối tượng trong cùng một nhóm tương đồng nhau nhất, và khác biệt nhiều nhất với nhóm khác.\n• Đặc điểm so với Phân lớp:\n   ↳ Phân lớp: Có nhãn lớp từ trước (học có giám sát).\n   ↳ Phân cụm: Không có nhãn trước, tự động tìm kiếm cấu trúc ẩn (học không giám sát).", {
  x: cmToInch(0.8),
  y: colY17,
  w: colW17,
  h: colH17,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide17, "📊 VÍ DỤ PHÂN KHÚC KHÁCH HÀNG\n\n• Dữ liệu đầu vào: Tần suất mua sắm, Chi tiêu trung bình, Tỷ lệ phản hồi khuyến mãi.\n• Kết quả sau phân cụm:\n   ↳ Cụm 1: Nhóm khách hàng giá trị cao (VIP).\n   ↳ Cụm 2: Nhóm khách hàng nhạy cảm về giá (chỉ mua khi có khuyến mãi).\n   ↳ Cụm 3: Nhóm khách hàng ít hoạt động.", {
  x: cmToInch(13.1),
  y: colY17,
  w: colW17,
  h: colH17,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide17, "💡 Thuật toán phân cụm chỉ gom nhóm dữ liệu dựa trên sự tương đồng toán học; nhà phân tích dữ liệu cần sử dụng kiến thức nghiệp vụ để diễn giải ý nghĩa và đặt tên cho từng cụm.", {
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

slide17.addNotes("Nội dung bổ sung:\nPhân cụm là một tác vụ học không giám sát, gom các đối tượng tương tự vào cùng nhóm và thường được dùng để khám phá các phân khúc dữ liệu chưa có nhãn.");

// ----------------------------------------------------
// Slide 18 — CONTENT
// ----------------------------------------------------
const slide18 = pptx.addSlide({ masterName: "CONTENT" });
slide18.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide18.addText("CASE STUDY: BA PHÂN KHÚC KHÁCH HÀNG CỦA FRESHMART", {
  placeholder: "title",
});

const colW18 = cmToInch(7.5);
const colH18 = cmToInch(3.0);
const colY18 = cmToInch(1.8);
const colGap18 = cmToInch(0.65);

addText(slide18, "👑 KHÁCH HÀNG GIÁ TRỊ CAO\n\n• Đặc điểm: Chi tiêu lớn, mua hàng đều đặn, ít quan tâm đến giá và khuyến mãi.\n• Đề xuất chính sách: Chương trình chăm sóc VIP, tích điểm đổi quà độc quyền, tư vấn cá nhân.", {
  x: cmToInch(0.8),
  y: colY18,
  w: colW18,
  h: colH18,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide18, "🏷️ KHÁCH NHẠY CẢM KHUYẾN MÃI\n\n• Đặc điểm: Mua hàng nhiều khi có đợt giảm giá, tích cực dùng mã ưu đãi.\n• Đề xuất chính sách: Gửi ưu đãi cá nhân đúng thời điểm mua sắm, gợi ý các gói combo tiết kiệm.", {
  x: cmToInch(0.8) + colW18 + colGap18,
  y: colY18,
  w: colW18,
  h: colH18,
  fontSize: 10.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.orange },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide18, "💤 KHÁCH HÀNG ÍT HOẠT ĐỘNG\n\n• Đặc điểm: Tần suất mua thưa thớt, giá trị giỏ hàng thấp, ít khi mở ứng dụng siêu thị.\n• Đề xuất chính sách: Chiến dịch tái kích hoạt bằng mã giảm giá khủng cho đơn hàng đầu tiên quay lại.", {
  x: cmToInch(0.8) + (colW18 + colGap18) * 2,
  y: colY18,
  w: colW18,
  h: colH18,
  fontSize: 10.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide18, "❓ Thảo luận: Nếu chỉ có ngân sách hạn chế cho một chiến dịch duy nhất trong tháng này, FreshMart nên ưu tiên phân khúc nào? Vì sao? (Gợi ý: Quyết định phụ thuộc mục tiêu chiến lược: Tăng doanh thu nhanh (VIP), đẩy hàng tồn kho (khuyến mãi), hay cải thiện hoạt động (ít hoạt động)).", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 12,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  italic: true,
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide18.addNotes("Gợi ý giảng viên:\nKhông có một đáp án duy nhất: quyết định phụ thuộc mục tiêu là tăng doanh thu ngắn hạn, giữ chân khách giá trị cao hay tái kích hoạt khách ít hoạt động.");

// ----------------------------------------------------
// Slide 19 — CONTENT
// ----------------------------------------------------
const slide19 = pptx.addSlide({ masterName: "CONTENT" });
slide19.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide19.addText("LUẬT KẾT HỢP: NHỮNG GÌ THƯỜNG XẢY RA CÙNG NHAU?", {
  placeholder: "title",
});

const colW19 = cmToInch(11.5);
const colH19 = cmToInch(3.8);
const colY19 = cmToInch(1.8);

addText(slide19, "🛒 KHÁI NIỆM & DẠNG BIỂU DIỄN\n\n• Luật kết hợp (Association Rule) tìm các sản phẩm, sự kiện hoặc hành vi thường đồng thời xuất hiện cùng nhau trong cơ sở dữ liệu giao dịch.\n• Dạng biểu diễn: X ➔ Y (Nếu mua X thì thường mua kèm Y).\n• Ví dụ thực tế:\n   ↳ {Bánh mì} ➔ {Sữa}\n   ↳ Nghĩa là: Trong các hóa đơn có bánh mì, có một phần lớn hóa đơn cũng xuất hiện sữa đi kèm.", {
  x: cmToInch(0.8),
  y: colY19,
  w: colW19,
  h: colH19,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide19, "📊 HAI CHỈ SỐ NHẬP MÔN QUAN TRỌNG\n\n• Độ hỗ trợ (Support):\n   ↳ Đo lường tần suất xuất hiện đồng thời của cả X và Y trên tổng số giao dịch.\n   ↳ Giúp lọc ra các luật phổ biến.\n• Độ tin cậy (Confidence):\n   ↳ Đo lường xác suất Y xuất hiện khi X đã xuất hiện.\n   ↳ Phản ánh độ tin cậy của luật gợi ý bán kèm.", {
  x: cmToInch(13.1),
  y: colY19,
  w: colW19,
  h: colH19,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide19, "⚠️ Luật kết hợp chỉ thể hiện mối liên hệ đồng xuất hiện trong hành vi mua sắm, hoàn toàn không khẳng định mối quan hệ nhân quả (X gây ra Y).", {
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

slide19.addNotes("Nội dung bổ sung:\nLuật kết hợp tìm các quan hệ hoặc đồng xuất hiện giữa các đối tượng trong dữ liệu; luật thường được đánh giá bằng độ hỗ trợ và độ tin cậy.");

// ----------------------------------------------------
// Slide 20 — CONTENT
// ----------------------------------------------------
const slide20 = pptx.addSlide({ masterName: "CONTENT" });
slide20.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide20.addText("CASE STUDY: GỢI Ý MUA KÈM TRONG THƯƠNG MẠI ĐIỆN TỬ", {
  placeholder: "title",
});

const colW20 = cmToInch(11.5);
const colH20 = cmToInch(3.8);
const colY20 = cmToInch(1.8);

addText(slide20, "💻 TÌNH HUỐNG GỢI Ý\n\nKhách hàng thêm LAPTOP vào giỏ hàng. Hệ thống gợi ý thêm:\n• Chuột không dây (Độ tin cậy rất cao).\n• Túi chống sốc laptop.\n• Gói phần mềm văn phòng bản quyền.\n• Tai nghe chụp tai.\n\n➔ Giúp cửa hàng tăng kích thước giỏ hàng trung bình hiệu quả thông qua chiến lược bán chéo (Cross-selling).", {
  x: cmToInch(0.8),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide20, "⚙️ CƠ CHẾ TẠO GIÁ TRỊ CỦA HỆ THỐNG\n\n1. Phân tích dữ liệu lịch sử giao dịch của hàng triệu đơn hàng cũ.\n2. Phát hiện các nhóm sản phẩm có độ hỗ trợ và độ tin cậy tốt.\n3. Xếp hạng gợi ý sản phẩm phù hợp nhất cho giỏ hàng hiện tại.\n4. Hiển thị gợi ý tại trang sản phẩm hoặc trang thanh toán.\n5. Đo lường tỷ lệ nhấp (CTR) và tỷ lệ chốt đơn mua kèm.", {
  x: cmToInch(13.1),
  y: colY20,
  w: colW20,
  h: colH20,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide20, "💡 Luật kết hợp là cơ sở cho các hệ thống gợi ý (Recommendation Systems). Gợi ý hiệu quả còn cần kết hợp với mức tồn kho thực tế, biên lợi nhuận sản phẩm và sở thích riêng của khách.", {
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

slide20.addNotes("Nội dung bổ sung:\nLuật kết hợp cung cấp giải pháp bán chéo trong thương mại điện tử bằng cách phân tích lịch sử các sản phẩm được thanh toán cùng nhau.");

// ----------------------------------------------------
// Slide 21 — CONTENT
// ----------------------------------------------------
const slide21 = pptx.addSlide({ masterName: "CONTENT" });
slide21.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide21.addText("PHÁT HIỆN BẤT THƯỜNG VÀ PHÂN TÍCH XU HƯỚNG", {
  placeholder: "title",
});

const colW21 = cmToInch(11.5);
const colH21 = cmToInch(3.8);
const colY21 = cmToInch(1.8);

addText(slide21, "🚨 PHÁT HIỆN BẤT THƯỜNG (Anomaly Detection)\n\n• Khái niệm: Tìm các quan sát khác biệt đáng kể, lệch hẳn khỏi hành vi chung của phần lớn dữ liệu.\n• Ví dụ điển hình:\n   ↳ Giao dịch thẻ tín dụng có giá trị lớn đột biến.\n   ↳ Phát sinh nhiều giao dịch trong vài giây.\n   ↳ Giao dịch từ địa điểm hoặc thời gian bất thường.\n➔ Mục tiêu: Cảnh báo rủi ro gian lận hoặc lỗi hệ thống.", {
  x: cmToInch(0.8),
  y: colY21,
  w: colW21,
  h: colH21,
  fontSize: 11.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide21, "📈 PHÂN TÍCH XU HƯỚNG / TIẾN HÓA (Trend/Evolution)\n\n• Khái niệm: Tìm các thay đổi, quy luật vận động hoặc tính chu kỳ, mùa vụ của dữ liệu theo dòng thời gian.\n• Ví dụ điển hình:\n   ↳ Doanh số bánh kẹo tăng mạnh trước dịp Tết Nguyên Đán.\n   ↳ Nhu cầu đặt tour du lịch tăng cao vào mùa hè.\n   ↳ Tỷ lệ rời bỏ của khách tăng sau khi tăng giá dịch vụ.\n➔ Mục tiêu: Lập kế hoạch kinh doanh và dự trữ nguồn lực.", {
  x: cmToInch(13.1),
  y: colY21,
  w: colW21,
  h: colH21,
  fontSize: 11.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide21, "💡 Phát hiện bất thường tập trung tìm các ĐIỂM KHÁC BIỆT cá biệt, đơn lẻ; phân tích xu hướng tập trung tìm các QUY LUẬT THAY ĐỔI chung của cả hệ thống theo thời gian.", {
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

slide21.addNotes("Nội dung bổ sung:\nPhát hiện bất thường nhận diện các quan sát lệch đáng kể khỏi hành vi chung, còn phân tích xu hướng/tính tiến hóa tìm các thay đổi và quy luật theo thời gian.");

// ----------------------------------------------------
// Slide 22 — CONTENT (Hoạt động lớp học - Câu hỏi)
// ----------------------------------------------------
const slide22 = pptx.addSlide({ masterName: "CONTENT" });
slide22.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide22.addText("HOẠT ĐỘNG LỚP HỌC: CHỌN TÁC VỤ PHÙ HỢP", {
  placeholder: "title",
});

const optIntro22 = addText(slide22, "👥 Làm việc theo nhóm 2-3 người trong 3 phút. Ghép mỗi tình huống thực tế sau đây với một tác vụ khai phá dữ liệu phù hợp nhất.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY22 = (optIntro22.y as number) + (optIntro22.h as number) + cmToInch(0.2);

slide22.addTable([
  [
    { text: "Tình huống thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tác vụ cần chọn", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Dự báo doanh thu của tháng tới", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }],
  [{ text: "2. Xác định khách hàng có khả năng rời bỏ dịch vụ", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }],
  [{ text: "3. Chia khách hàng thành các nhóm có hành vi mua tương tự", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }],
  [{ text: "4. Tìm các sản phẩm thường có trong cùng một giỏ hàng", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }],
  [{ text: "5. Phát hiện giao dịch thanh toán khác thường", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }],
  [{ text: "6. Xác định mùa cao điểm của nhu cầu du lịch", options: { bold: true } }, { text: "?", options: { align: "center", bold: true, color: DUE_COLORS.orange } }]
], {
  x: cmToInch(0.8),
  y: tableY22,
  w: cmToInch(23.8),
  h: cmToInch(3.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide22, "💬 Câu hỏi thảo luận thêm: Sau khi mô hình xác định được danh sách khách hàng có rủi ro rời bỏ cao (Tình huống 2), doanh nghiệp sẽ thực hiện các hành động cụ thể gì để giữ chân họ?", {
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

// ----------------------------------------------------
// Slide 22b — CONTENT (Hoạt động lớp học - Đáp án)
// ----------------------------------------------------
const slide22b = pptx.addSlide({ masterName: "CONTENT" });
slide22b.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide22b.addText("HOẠT ĐỘNG LỚP HỌC: ĐÁP ÁN ĐỀ XUẤT", {
  placeholder: "title",
});

const optIntro22b = addText(slide22b, "✅ Dưới đây là các tác vụ khai phá dữ liệu tương ứng cho từng tình huống nghiệp vụ thực tế.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 13,
  color: DUE_COLORS.green,
  bold: true,
});

const tableY22b = (optIntro22b.y as number) + (optIntro22b.h as number) + cmToInch(0.2);

slide22b.addTable([
  [
    { text: "Tình huống thực tế", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tác vụ phù hợp", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "1. Dự báo doanh thu của tháng tới", options: { bold: true } }, { text: "Dự báo / Hồi quy số", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "2. Xác định khách hàng có khả năng rời bỏ dịch vụ", options: { bold: true } }, { text: "Phân lớp (Classification)", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "3. Chia khách hàng thành các nhóm có hành vi mua tương tự", options: { bold: true } }, { text: "Phân cụm (Clustering)", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "4. Tìm các sản phẩm thường có trong cùng một giỏ hàng", options: { bold: true } }, { text: "Luật kết hợp (Association Rules)", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "5. Phát hiện giao dịch thanh toán khác thường", options: { bold: true } }, { text: "Phát hiện bất thường (Anomaly Detection)", options: { bold: true, color: DUE_COLORS.green } }],
  [{ text: "6. Xác định mùa cao điểm của nhu cầu du lịch", options: { bold: true } }, { text: "Phân tích xu hướng / Chuỗi thời gian", options: { bold: true, color: DUE_COLORS.green } }]
], {
  x: cmToInch(0.8),
  y: tableY22b,
  w: cmToInch(22),
  h: cmToInch(3.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide22b, "💡 Mỗi tác vụ giải quyết một dạng câu hỏi nghiệp vụ khác nhau. Việc phối hợp các tác vụ hợp lý giúp doanh nghiệp xây dựng bức tranh toàn diện về khách hàng và tối ưu hóa vận hành.", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 11,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

slide22b.addNotes("Nội dung bổ sung:\nCác tác vụ được ghép trong hoạt động này gồm phân lớp, dự báo, phân cụm, luật kết hợp, phát hiện bất thường và phân tích xu hướng—những nhóm tác vụ được giới thiệu trong phần tổng quan và triển khai sâu hơn ở các chương sau.");
