import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT, PRESENTATION_WIDTH } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 13 — SECTION
// ----------------------------------------------------
const slide13 = pptx.addSlide({ masterName: "SECTION" });
slide13.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide13.addText("1.4.2. ỨNG DỤNG TRONG TÀI CHÍNH – NGÂN HÀNG", {
  placeholder: "title",
});
slide13.addText("Không phải mọi khách hàng và giao dịch đều có cùng mức rủi ro. Khai phá dữ liệu trong ngân hàng giúp lượng hóa rủi ro, bảo mật và tuân thủ pháp lý.", {
  placeholder: "content",
  y: cmToInch(5.5),
});
slide13.addText("Các ứng dụng chính:\nChấm điểm tín dụng ➔ Phát hiện gian lận giao dịch ➔ Phòng chống rửa tiền", {
  placeholder: "subContent",
});

// ----------------------------------------------------
// Slide 14 — CONTENT: Chấm điểm tín dụng
// ----------------------------------------------------
const slide14 = pptx.addSlide({ masterName: "CONTENT" });
slide14.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide14.addText("CHẤM ĐIỂM TÍN DỤNG & DỰ BÁO TRẢ NỢ", {
  placeholder: "title",
});

const optIntro14 = addText(slide14, "Ước lượng khả năng một khách hàng bị quá hạn hoặc không trả được nợ trong tương lai dựa vào hồ sơ tín dụng quá khứ.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colW14 = cmToInch(11.5);
const colH14 = cmToInch(3.2);
const colY14 = (optIntro14.y as number) + (optIntro14.h as number) + cmToInch(0.2);

// Left table: Input features
slide14.addTable([
  [
    { text: "Nhóm thông tin đầu vào", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ đặc trưng (Features)", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Khả năng tài chính" }, { text: "Thu nhập hàng tháng, nguồn thu nhập, tài sản sở hữu." }],
  [{ text: "Gánh nặng nợ hiện có" }, { text: "Tổng số dư nợ hiện tại, số lượng khoản vay đang mở." }],
  [{ text: "Khả năng chi trả", options: { bold: true, color: DUE_COLORS.green } }, { text: "Tỷ lệ trả góp / Thu nhập (Debt-to-Income)." }],
  [{ text: "Lịch sử tín dụng", options: { bold: true } }, { text: "Số lần trả nợ trễ hạn trong quá khứ, lịch sử thanh toán." }]
], {
  x: cmToInch(0.8),
  y: colY14,
  w: colW14,
  h: colH14,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Outputs
slide14.addTable([
  [
    { text: "Cách biểu diễn đầu ra", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Tác vụ & Ví dụ đầu ra", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Nhãn phân lớp rủi ro" }, { text: "Rủi ro Thấp / Trung bình / Cao (Tác vụ Phân lớp)" }],
  [{ text: "Xác suất quá hạn" }, { text: "Xác suất khách hàng trễ nợ là 18%." }],
  [{ text: "Điểm tín dụng (Scorecard)", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Điểm số ví dụ: 720/1000 (Tác vụ Xếp hạng)." }]
], {
  x: cmToInch(13.1),
  y: colY14,
  w: colW14,
  h: colH14,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide14, "💡 Chấm điểm tín dụng nhằm lượng hóa mức độ rủi ro hỗ trợ ra quyết định tín dụng; quyết định cuối cùng cần xét thêm chính sách và bối cảnh cụ thể.", {
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

slide14.addNotes("Nội dung bổ sung:\nDựa vào hồ sơ và lịch sử tín dụng, ngân hàng muốn ước lượng khả năng một khách hàng bị quá hạn hoặc không trả được nợ trong một khoảng thời gian xác định. Các yếu tố như tỷ lệ trả góp trên thu nhập, tỷ lệ nợ trên thu nhập, lịch sử tín dụng và giá trị khoản vay là những biến thường hữu ích để đánh giá rủi ro trả nợ.");

// ----------------------------------------------------
// Slide 15 — CONTENT: Phê duyệt có trách nhiệm
// ----------------------------------------------------
const slide15 = pptx.addSlide({ masterName: "CONTENT" });
slide15.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide15.addText("TÌNH HUỐNG: PHÊ DUYỆT VAY CÓ TRÁCH NHIỆM", {
  placeholder: "title",
});

const optIntro15 = addText(slide15, "Bối cảnh: Hai khách hàng có cùng thu nhập 25 triệu/tháng và đề nghị vay 150 triệu, nhưng chỉ báo rủi ro khác nhau.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY15 = (optIntro15.y as number) + (optIntro15.h as number) + cmToInch(0.2);

// Left table: profiles
slide15.addTable([
  [
    { text: "Chỉ báo rủi ro", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Khách hàng A", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } },
    { text: "Khách hàng B", options: { bold: true, fill: { color: DUE_COLORS.orange }, color: DUE_COLORS.white } }
  ],
  [{ text: "Dư nợ hiện tại" }, { text: "Thấp" }, { text: "Cao" }],
  [{ text: "Tỷ lệ trả góp / thu nhập" }, { text: "18% (An toàn)" }, { text: "48% (Nguy cơ lớn)" }],
  [{ text: "Lịch sử thanh toán" }, { text: "Ổn định, ít trễ hạn" }, { text: "Nhiều lần trễ hạn quá khứ" }],
  [{ text: "Số khoản vay đang mở" }, { text: "1 khoản" }, { text: "4 khoản" }],
  [{ text: "Đánh giá của mô hình" }, { text: "Rủi ro THẤP", options: { color: DUE_COLORS.green, bold: true } }, { text: "Rủi ro CAO", options: { color: DUE_COLORS.orange, bold: true } }]
], {
  x: cmToInch(0.8),
  y: colY15,
  w: colW14,
  h: colH14,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Responsible approval
addText(slide15, "🛡️ NGUYÊN TẮC PHÊ DUYỆT CÓ TRÁCH NHIỆM\n\n• Tính dễ giải thích (Explainability):\n  ↳ Mô hình phải chỉ rõ lý do xếp loại rủi ro (ví dụ: do tỷ lệ nợ/thu nhập của khách B quá cao).\n• Tính công bằng (Fairness):\n  ↳ Tuyệt đối không sử dụng các đặc trưng nhạy cảm (như giới tính, tôn giáo) hoặc để mô hình suy diễn gián tiếp tạo bất lợi.\n• Giám sát của con người (Human-in-the-loop):\n  ↳ Các quyết định biên hoặc hồ sơ lớn luôn cần chuyên viên tín dụng kiểm tra lại, không tự động hóa 100%.", {
  x: cmToInch(13.1),
  y: colY15,
  w: colW14,
  h: colH14,
  fontSize: 9.5,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide15, "💡 Một mô hình chấm điểm tín dụng tốt không chỉ có độ chính xác cao, mà bắt buộc phải giải thích được lý do và tuân thủ các quy tắc công bằng đạo đức.", {
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

slide15.addNotes("Nội dung bổ sung:\nQuyết định có trách nhiệm bao gồm: không dùng một biến đơn lẻ mà đánh giá tổ hợp khả năng trả nợ và lịch sử tín dụng. Chuyên viên xem xét, phê duyệt hoặc yêu cầu bổ sung thay vì tự động hóa hoàn toàn.");

// ----------------------------------------------------
// Slide 16 — CONTENT: Phát hiện gian lận
// ----------------------------------------------------
const slide16 = pptx.addSlide({ masterName: "CONTENT" });
slide16.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide16.addText("PHÁT HIỆN GIAN LẬN GIAO DỊCH", {
  placeholder: "title",
});

const optIntro16 = addText(slide16, "Nhận diện xem một giao dịch thẻ phát sinh có sự khác biệt đáng kể so với hành vi giao dịch thông thường của chủ thẻ hay không.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY16 = (optIntro16.y as number) + (optIntro16.h as number) + cmToInch(0.2);

// Left table: Signals
slide16.addTable([
  [
    { text: "Tín hiệu nghi ngờ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ thực tế giao dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Giá trị bất thường" }, { text: "Chi tiêu vượt vọt so với hạn mức hoặc bình quân ngày." }],
  [{ text: "Thời điểm bất thường", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Phát sinh lúc 3h sáng (trái múi giờ hoạt động quen thuộc)." }],
  [{ text: "Vị trí địa lý bất thường" }, { text: "Giao dịch ở nước ngoài ngay sau giao dịch trong nước." }],
  [{ text: "Mẫu chi tiêu khác biệt" }, { text: "Mua sắm đột ngột nhóm hàng xa xỉ chưa từng giao dịch." }]
], {
  x: cmToInch(0.8),
  y: colY16,
  w: colW14,
  h: colH14,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

// Right table: Anomaly task
slide16.addTable([
  [
    { text: "Bản chất tác vụ Phát hiện bất thường", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "• Dữ liệu: Dòng giao dịch thời gian thực khổng lồ." }],
  [{ text: "• Tỷ lệ sự kiện cần tìm: Cực kỳ thấp (<0.1% tổng giao dịch)." }],
  [{ text: "• Yêu cầu vận hành: Phản hồi cực nhanh (gần thời gian thực)." }],
  [{ text: "• Thách thức: Tránh chặn nhầm các giao dịch hợp lệ mới." }]
], {
  x: cmToInch(13.1),
  y: colY16,
  w: colW14,
  h: colH14,
  fontSize: 9.5,
  border: { pt: 1, color: "CCCCCC" }
});

addText(slide16, "💡 Giao dịch bất thường không tự động nghĩa là gian lận; đó là tín hiệu cần được chấm điểm, kiểm tra và xử lý phân cấp theo mức độ rủi ro.", {
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

slide16.addNotes("Nội dung bổ sung:\nPhát hiện bất thường xây dựng hình dung về hành vi bình thường rồi nhận diện các giao dịch lệch đáng kể; các bất thường có thể là gian lận, nhưng cũng có thể là hành vi hợp lệ mới cần xác minh thêm.");

// ----------------------------------------------------
// Slide 17 — CONTENT: Cảnh báo không chặn giao dịch
// ----------------------------------------------------
const slide17 = pptx.addSlide({ masterName: "CONTENT" });
slide17.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide17.addText("CẢNH BÁO KHÔNG ĐỒNG NGHĨA VỚI CHẶN GIAO DỊCH", {
  placeholder: "title",
});

const optIntro17 = addText(slide17, "Hệ thống cần liên kết điểm rủi ro với mức độ thiệt hại tiềm năng để đưa ra các phản ứng linh hoạt tương ứng.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY17 = (optIntro17.y as number) + (optIntro17.h as number) + cmToInch(0.2);

// Left table: Reactions
slide17.addTable([
  [
    { text: "Mức rủi ro", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Tình huống giao dịch", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Phản ứng đề xuất của hệ thống", options: { bold: true, fill: { color: DUE_COLORS.green }, color: DUE_COLORS.white } }
  ],
  [{ text: "Thấp" }, { text: "Giá trị hơi cao trên thiết bị quen thuộc" }, { text: "Chấp nhận giao dịch, tiếp tục theo dõi." }],
  [{ text: "Trung bình", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Chi tiêu online từ vị trí lạ, thiết bị mới" }, { text: "Yêu cầu xác thực OTP hoặc phê duyệt app đẩy." }],
  [{ text: "Cao" }, { text: "Giá trị lớn lúc 3h sáng trên thiết bị mới" }, { text: "Tạm dừng giao dịch, gọi điện xác minh chủ thẻ." }],
  [{ text: "Rất cao" }, { text: "Nhiều giao dịch liên tiếp vị trí khác thường" }, { text: "Tạm khóa thẻ và chuyển chuyên viên điều tra." }]
], {
  x: cmToInch(0.8),
  y: colY17,
  w: colW14,
  h: colH14,
  fontSize: 8.8,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: Two errors
addText(slide17, "⚖️ ĐÁNH ĐỔI GIỮA HAI LOẠI SAI LẦM\n\n• Bỏ sót gian lận (False Negative):\n  ↳ Tổn thất tài chính trực tiếp, đền bù khách hàng, rủi ro pháp lý và uy tín thương hiệu.\n• Chặn nhầm giao dịch hợp lệ (False Positive):\n  ↳ Gây ma sát lớn cho khách hàng, gián đoạn thanh toán ➔ Khách mất niềm tin và dễ rời bỏ ngân hàng.\n\n👉 Kết luận: Cần tối ưu hóa tổng thể chi phí rủi ro và trải nghiệm khách hàng.", {
  x: cmToInch(13.1),
  y: colY17,
  w: colW14,
  h: colH14,
  fontSize: 9.5,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide17, "💡 Hệ thống hiệu quả cần tối ưu tổng thể: giảm thiểu tối đa tổn thất gian lận nhưng không tạo ra quá nhiều ma sát cho khách hàng hợp lệ.", {
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

slide17.addNotes("Nội dung bổ sung:\nCác mô hình bất thường thường cần chuyên viên hoặc bước xác thực bổ sung để phân biệt gian lận thật với hành vi mới.");

// ----------------------------------------------------
// Slide 18 — CONTENT: Rửa tiền
// ----------------------------------------------------
const slide18 = pptx.addSlide({ masterName: "CONTENT" });
slide18.addText("CHƯƠNG 1 – TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", {
  placeholder: "footer",
});
slide18.addText("PHÒNG CHỐNG RỬA TIỀN BẰNG PHÂN TÍCH LIÊN KẾT", {
  placeholder: "title",
});

const optIntro18 = addText(slide18, "Chuyển từ phân tích dữ liệu bảng tĩnh sang phân tích cấu trúc mạng/đồ thị luồng giao dịch tài chính.", {
  x: cmToInch(0.8),
  y: cmToInch(1.8),
  w: cmToInch(23.8),
  h: cmToInch(0.6),
  fontSize: 12.5,
  color: DUE_COLORS.green,
  bold: true,
});

const colY18 = (optIntro18.y as number) + (optIntro18.h as number) + cmToInch(0.2);

// Left table: patterns
slide18.addTable([
  [
    { text: "Mẫu liên kết nghi ngờ", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Dấu hiệu phân tích kỹ thuật", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [{ text: "Chuyển tiền vòng khép kín", options: { bold: true } }, { text: "Tiền đi qua nhiều tài khoản rồi quay về tài khoản gốc." }],
  [{ text: "Tài khoản gom trung gian" }, { text: "Một tài khoản nhận tiền từ hàng trăm nguồn rồi chuyển đi ngay." }],
  [{ text: "Chia nhỏ giao dịch (Smurfing)" }, { text: "Nhiều giao dịch nhỏ liên tục dưới hạn mức báo cáo." }],
  [{ text: "Liên kết tài khoản đen", options: { bold: true, color: DUE_COLORS.orange } }, { text: "Có liên hệ chuyển khoản gián tiếp với ví dụ đáng ngờ." }]
], {
  x: cmToInch(0.8),
  y: colY18,
  w: colW14,
  h: colH14,
  fontSize: 9,
  border: { pt: 1, color: "CCCCCC" }
});

// Right box: tools
addText(slide18, "📊 CÁC CÔNG CỤ KHAI PHÁ PHÙ HỢP\n\n• Phân tích đồ thị / mạng lưới (Graph Mining):\n  ↳ Biểu diễn tài khoản là nút (node), giao dịch chuyển tiền là cạnh có hướng (edge) kèm giá trị số tiền và thời gian.\n• Thuật toán phân cụm đồ thị:\n  ↳ Nhóm các tài khoản có hành vi tương tác dày đặc bất thường.\n• Phân tích chuỗi sự kiện (Sequence analysis):\n  ↳ Xem xét chuỗi thời gian nhận tiền ➔ gom tiền ➔ chuyển tiếp ➔ rút tiền mặt ở ATM.", {
  x: cmToInch(13.1),
  y: colY18,
  w: colW14,
  h: colH14,
  fontSize: 9,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

addText(slide18, "💡 Khi rủi ro nằm ở mối quan hệ giữa nhiều tài khoản, phân tích từng giao dịch riêng lẻ là chưa đủ; cần nhìn cấu trúc mạng và luồng tiền theo thời gian.", {
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

slide18.addNotes("Nội dung bổ sung:\nDữ liệu giao dịch biểu diễn như đồ thị: tài khoản là các nút; các giao dịch chuyển tiền là các cạnh có hướng; số tiền, thời gian và tần suất là thuộc tính của cạnh. Phát hiện rửa tiền thường cần tích hợp nhiều nguồn dữ liệu.");
