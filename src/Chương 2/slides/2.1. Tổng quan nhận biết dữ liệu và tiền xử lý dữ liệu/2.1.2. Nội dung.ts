import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 10 — CONTENT
// ----------------------------------------------------
const slide10 = pptx.addSlide({ masterName: "CONTENT" });
slide10.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide10.addText("BẢN ĐỒ CÁC NHÓM CÔNG VIỆC TIỀN XỬ LÝ", {
  placeholder: "title",
});

// Introductory text
const introText10 = 
  "Tiền xử lý không phải là một thao tác đơn lẻ mà là tập hợp các công việc liên kết, được lựa chọn tùy theo chất lượng dữ liệu, quy mô dữ liệu và mục tiêu khai phá.";
addText(slide10, introText10, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.darkText,
});

// Work groups table
slide10.addTable([
  [
    { text: "Nhóm công việc", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Mục đích chính", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Ví dụ trong dữ liệu kinh doanh", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Làm sạch\n(cleaning)", options: { bold: true } },
    { text: "Xử lý thiếu, nhiễu, ngoại lệ, trùng lặp và bất nhất" },
    { text: "Điền thu nhập trống, chuẩn hóa ngày tháng, kiểm tra đơn hàng bất thường" }
  ],
  [
    { text: "Tích hợp\n(integration)", options: { bold: true } },
    { text: "Kết hợp dữ liệu đa hệ thống thành tập dữ liệu nhất quán" },
    { text: "Ghép dữ liệu CRM, hóa đơn tại POS, app di động và log web" }
  ],
  [
    { text: "Biến đổi\n(transformation)", options: { bold: true } },
    { text: "Đưa dữ liệu về thang đo/thuộc tính phù hợp cho mô hình" },
    { text: "Chuẩn hóa thang đo tuổi & thu nhập; làm trơn dữ liệu; tạo biến trung bình" }
  ],
  [
    { text: "Thu giảm dữ liệu\n(reduction)", options: { bold: true } },
    { text: "Giảm số biến/bản ghi mà vẫn giữ phần lớn thông tin" },
    { text: "Loại bỏ biến tương quan hoàn hảo, lấy mẫu ngẫu nhiên, PCA, tổng hợp" }
  ],
  [
    { text: "Rời rạc hóa\n(discretization)", options: { bold: true } },
    { text: "Chuyển biến liên tục thành các khoảng/nhóm có nghĩa" },
    { text: "Chia tuổi thành (Trẻ, Trung niên, Cao tuổi); phân nhóm thu nhập" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(2.7),
  w: cmToInch(23.8),
  h: cmToInch(3.6),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Bottom Flow Banner Note
const summaryNote10 = 
  "💡 Dòng chảy tiền xử lý: Dữ liệu thô ➔ Làm sạch ➔ Tích hợp ➔ Biến đổi / Rời rạc hóa ➔ Thu giảm ➔ Dữ liệu sẵn sàng khai phá";

addText(slide10, summaryNote10, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});


// ----------------------------------------------------
// Slide 11 — CONTENT
// ----------------------------------------------------
const slide11 = pptx.addSlide({ masterName: "CONTENT" });
slide11.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide11.addText("NGOẠI LỆ KHÔNG LUÔN LÀ LỖI", {
  placeholder: "title",
});

// Left Column: Situation & Decision Principles
const outlierSituationText = 
  "🧐 Tình huống ngoại lệ:\n\n" +
  "Một hóa đơn trị giá 500 triệu đồng xuất hiện trong khi đa phần chỉ từ 0,5 - 5 triệu đồng. Đây là một ngoại lệ tiềm năng (potential outlier) nhưng chưa thể coi ngay là lỗi nhập liệu.\n\n" +
  "⚙️ Nguyên tắc quyết định:\n" +
  "• Thống kê: phát hiện giá trị lệch xa phân bố hoặc nằm ngoài các cụm.\n" +
  "• Nghiệp vụ: giải thích xem giá trị đó có thể xảy ra trong thực tế không.\n" +
  "• Mục tiêu: quyết định giữ lại, sửa đổi, gắn cờ hay loại bỏ khỏi mô hình.";

addText(slide11, outlierSituationText, {
  x: cmToInch(0.8),
  y: cmToInch(2.2),
  w: cmToInch(10.5),
  h: cmToInch(5.2),
  fontSize: 13,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Right Column: Table of Outlier Handling Possibilities
slide11.addTable([
  [
    { text: "Khả năng", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Diễn giải chi tiết", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Hành động phù hợp", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "Lỗi dữ liệu", options: { bold: true } },
    { text: "Nhập dư số 0, sai đơn vị tiền tệ, ghi trùng hóa đơn." },
    { text: "Xác minh chứng từ gốc; sửa đổi hoặc loại trùng." }
  ],
  [
    { text: "Quan sát hiếm", options: { bold: true } },
    { text: "Khách VIP mua số lượng lớn, khách hàng doanh nghiệp." },
    { text: "Giữ lại dữ liệu; gắn nhãn loại giao dịch/nhóm khách." }
  ],
  [
    { text: "Sự kiện đặc biệt", options: { bold: true } },
    { text: "Giao dịch bất thường nghi ngờ gian lận hoặc rửa tiền." },
    { text: "Không xóa; chuyển sang quy trình cảnh báo/điều tra." }
  ],
  [
    { text: "Không phù hợp", options: { bold: true } },
    { text: "Mô hình chỉ nhắm tới khách hàng cá nhân thông thường." },
    { text: "Tách phân khúc hoặc loại khỏi tập train theo quy tắc." }
  ]
], {
  x: cmToInch(11.8),
  y: cmToInch(2.2),
  w: cmToInch(12.8),
  h: cmToInch(5.2),
  fontSize: 11,
  border: { pt: 1, color: "CCCCCC" }
});

// Bottom Banner Note
const summaryNote11 = 
  "💡 Thông điệp: Ngoại lệ theo thống kê không đồng nghĩa với lỗi theo nghiệp vụ. Hãy xử lý ngoại lệ dựa trên kiến thức ngành và mục tiêu khai phá thay vì loại bỏ máy móc.";

addText(slide11, summaryNote11, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.green },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
