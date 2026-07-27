import { SlideGenerator } from "../../../slide-generator.ts";
import { addText, DUE_COLORS } from "../../../template/due-template.ts";
import { cmToInch, PRESENTATION_HEIGHT } from "../../../utils.ts";

const pptx = SlideGenerator.pptx;

// ----------------------------------------------------
// Slide 12 — SECTION
// ----------------------------------------------------
const slide12 = pptx.addSlide({ masterName: "SECTION" });
slide12.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});

slide12.addText("2.2. CÁC PHƯƠNG PHÁP NHẬN BIẾT DỮ LIỆU", {
  placeholder: "title",
});

slide12.addText(
  "Khám phá dữ liệu (Exploratory Data Analysis – EDA) trước khi can thiệp xử lý",
  {
    placeholder: "content",
  }
);

slide12.addText(
  "Không làm sạch hoặc biến đổi dữ liệu khi chưa hiểu dữ liệu.\n" +
  "EDA giúp nhận diện cấu trúc, phân bố, ngoại lệ và quan hệ để tránh áp dụng tiền xử lý một cách máy móc.",
  {
    placeholder: "subContent",
  }
);

// ----------------------------------------------------
// Slide 13 — CONTENT
// ----------------------------------------------------
const slide13 = pptx.addSlide({ masterName: "CONTENT" });
slide13.addText("CHƯƠNG 2 – DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU", {
  placeholder: "footer",
});
slide13.addText("QUY TRÌNH NHẬN BIẾT DỮ LIỆU", {
  placeholder: "title",
});

// Top flow banner
const flowText13 = 
  "🔄 Luồng thực hành đề xuất: Kiểm tra cấu trúc ➔ Thống kê tóm tắt ➔ Trực quan hóa ➔ Đặt câu hỏi nghiệp vụ ➔ Đề xuất xử lý";

addText(slide13, flowText13, {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
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

// Left Column: Table of Steps
slide13.addTable([
  [
    { text: "Bước thực hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Cần thực hiện", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } },
    { text: "Câu hỏi nghiệp vụ gợi ý", options: { bold: true, fill: { color: DUE_COLORS.blue }, color: DUE_COLORS.white } }
  ],
  [
    { text: "1. Kiểm tra cấu trúc", options: { bold: true } },
    { text: "Xác định số dòng, số biến, kiểu dữ liệu, khóa định danh..." },
    { text: "Biến doanh thu là số hay text? Format ngày đã chuẩn?" }
  ],
  [
    { text: "2. Thống kê tóm tắt", options: { bold: true } },
    { text: "Tính tỷ lệ thiếu, min-max, mean, median, standard deviation..." },
    { text: "Có giá trị âm phi lý? Trung vị có lệch xa trung bình?" }
  ],
  [
    { text: "3. Trực quan hóa", options: { bold: true } },
    { text: "Vẽ histogram, boxplot, scatter plot thích hợp với kiểu biến" },
    { text: "Phân bố có bị lệch? Có phát hiện điểm dị biệt?" }
  ],
  [
    { text: "4. Hỏi nghiệp vụ", options: { bold: true } },
    { text: "Đối chiếu kết quả thống kê với bối cảnh kinh doanh thực tế" },
    { text: "Giá trị quá cao là do VIP mua sắm hay lỗi gõ thừa số?" }
  ],
  [
    { text: "5. Đề xuất xử lý", options: { bold: true } },
    { text: "Lựa chọn phương án xử lý (giữ, sửa, điền thiếu, loại bỏ)" },
    { text: "Quy tắc xử lý có được lưu vết & đánh giá tác động sau đó?" }
  ]
], {
  x: cmToInch(0.8),
  y: cmToInch(3.0),
  w: cmToInch(13.8),
  h: cmToInch(3.4),
  fontSize: 10,
  border: { pt: 1, color: "CCCCCC" }
});

// Right Column: Example Box (Bento Card)
const exampleBoxText = 
  "💼 Minh họa: Biến “chi tiêu”\n\n" +
  "Chi tiêu tháng có trung vị 2 triệu đồng nhưng giá trị max = 300 triệu đồng.\n" +
  "• Kiểm tra histogram xem có lệch phải mạnh hay không.\n" +
  "• Vẽ boxplot để định vị các điểm dị biệt tiềm năng.\n" +
  "• Đối chiếu loại tài khoản: Khách VIP hay doanh nghiệp?\n" +
  "• Đưa ra quyết định: Chuẩn hóa, log-transform, phân cụm riêng hay sửa lỗi nhập liệu.";

addText(slide13, exampleBoxText, {
  x: cmToInch(15.0),
  y: cmToInch(3.0),
  w: cmToInch(9.6),
  h: cmToInch(3.4),
  fontSize: 12,
  color: DUE_COLORS.darkText,
  fill: { color: DUE_COLORS.lightGreen },
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});

// Bottom Banner Note
const summaryNote13 = 
  "💡 Nhận xét: Thống kê mô tả và trực quan đồ thị bổ sung cho nhau — thống kê mô tả lượng hóa độ tập trung và phân tán, trong khi biểu đồ trực quan hóa hình dạng phân bố và ngoại lệ mà con số đơn lẻ có thể che khuất.";

addText(slide13, summaryNote13, {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  bold: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
