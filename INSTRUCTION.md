# HƯỚNG DẪN TẠO SLIDE TRÌNH CHIẾU DỰ ÁN DUE SLIDE GENERATION

Tài liệu này cung cấp hướng dẫn chi tiết từng bước cho AI hoặc nhà phát triển khác để hiểu cấu trúc dự án, cách sử dụng template mẫu, nguyên lý bố cục màu sắc, cách thêm chữ không bị chồng chéo, và quy trình xuất slide PPTX.

---

## 1. CẤU TRÚC FOLDER VÀ QUY TẮC ĐẶT FILE

Dự án áp dụng quy tắc đồng bộ 1-1 giữa thư mục chứa tài liệu nội dung (`content/`) và thư mục chứa code định nghĩa slide (`src/slides/`):

```text
├── content/                     # Chứa tài liệu Markdown gốc
│   └── Chương 1/
│       ├── Giới thiệu.md
│       └── 1.1. Một số khái niệm/
│           ├── Mở đầu.md
│           └── 1.1.1. Khai phá dữ liệu.md
│
└── src/
    ├── index.ts                 # File cấu hình nạp các slide để xuất PPTX
    ├── slide-generator.ts       # Nhân lõi quản lý thực thể PptxGenJS
    ├── utils.ts                 # Các hàm chuyển đổi đơn vị đo (cm ↔ inch)
    ├── template/
    │   └── due-template.ts      # Đăng ký Master Slide (TITLE, OBJECTIVE, SECTION, CONTENT)
    └── slides/                  # Code định nghĩa slide (cấu trúc giống hệt content/)
        ├── Giới thiệu.ts
        └── 1.1. Một số khái niệm/
            ├── Mở đầu.ts
            └── 1.1.1. Khai phá dữ liệu.ts
```

---

## 2. NGUYÊN TẮC BỐ CỤC VÀ HỆ MÀU SẮC (THEME)

Dự án sử dụng bộ màu đặc trưng của Trường Đại học Kinh tế (DUE) được định nghĩa trong `src/template/due-template.ts`:

- **Hệ màu chính (DUE Colors)**:
  - `green`: `"0F8A50"` (Màu xanh lá thương hiệu - dùng cho tiêu đề chính, các nút hành động thành công).
  - `orange`: `"E55B13"` (Màu cam điểm nhấn - dùng cho tiêu đề phụ hoặc cảnh báo quan trọng).
  - `blue`: `"0F5B9C"` (Màu xanh dương - dùng cho nhãn nhóm, tiêu đề cột phụ).
  - `lightGreen`: `"D8F3DC"` (Màu nền xanh lá nhạt - dùng làm nền cho các hộp thông tin tĩnh để làm nổi bật nội dung so với nền trắng chung).
  - `white`: `"FFFFFF"` (Màu trắng - dùng cho chữ trên nền màu đậm).
  - `darkText`: `"333333"` (Màu chữ chính cho body text).
  - `grayText`: `"666666"` (Màu chữ phụ, footer).

- **Khung kích thước slide**:
  - Slide được thiết kế theo tỷ lệ **16:9** tiêu chuẩn.
  - Kích thước trình diễn thực tế: **25.4cm x 14.29cm** (tương đương `10 x 5.625 inches`).

- **Nguyên tắc bố cục Bento Layout (Bento Grid)**:
  - Ưu tiên sử dụng bố cục Bento Layout (chia slide thành các ô/thẻ nội dung có kích thước bất đối xứng nhưng xếp gọn gàng như một hộp cơm Bento).
  - Bố cục này giúp phân chia các luồng thông tin phức tạp (ví dụ: bối cảnh, các bước quy trình, so sánh mẫu, các lĩnh vực liên ngành) thành các phần trực quan riêng biệt, giúp slide trông khoa học và cực kỳ hiện đại.
  - Sử dụng các ô bo góc (`shape: "roundRect"`, `rectRadius: 0.1`) kết hợp phối màu nền tĩnh (`lightGreen`, `blue`, `orange`, `lightBg`) để phân cấp thông tin.

---

## 3. CÁCH SỬ DỤNG TEMPLATE MASTER SLIDES

Các slide được tạo bằng cách chỉ định thuộc tính `masterName` khi gọi `addSlide`:

### A. Slide Mở đầu (`masterName: "TITLE"`)
Dành cho slide bìa chương/tiêu đề lớn.
```typescript
const slide = pptx.addSlide({ masterName: "TITLE" });
slide.addText("CHƯƠNG 1", { placeholder: "title" });
slide.addText("TỔNG QUAN VỀ KHAI PHÁ DỮ LIỆU", { placeholder: "subtitle" });
```

### B. Slide Mục tiêu (`masterName: "OBJECTIVE"`)
Dành cho trang mục tiêu của chương. Tiêu đề "MỤC TIÊU HỌC TẬP" đã được dựng sẵn trong master template. Bạn chỉ cần đưa nội dung dạng danh sách (bullet list) vào placeholder `content`.
```typescript
const slide = pptx.addSlide({ masterName: "OBJECTIVE" });
slide.addText(objectivesText, { placeholder: "content", fontSize: 13, bold: true });
```

### C. Slide Chuyển phần (`masterName: "SECTION"`)
Dành cho các trang phân đoạn hoặc slide chuyển mục tiêu (ví dụ: mục 1.1, mục 1.1.1). Slide này có nền màu xanh lá đậm và hỗ trợ 3 placeholder căn giữa tự động:
- `title`: Tiêu đề mục lớn (Font 27pt, Bold, White).
- `content`: Tóm tắt nội dung chính (Font 16pt, Bold, White).
- `subContent`: Các tiểu mục sắp học hoặc câu hỏi dẫn nhập (Font 16pt, Italic, White).

```typescript
const slide = pptx.addSlide({ masterName: "SECTION" });
slide.addText("1.1.1. KHAI PHÁ DỮ LIỆU", { placeholder: "title" });
slide.addText("Định nghĩa khái quát...", { placeholder: "content" });
slide.addText("Câu hỏi thảo luận...", { placeholder: "subContent" });
```

### D. Slide Nội dung (`masterName: "CONTENT"`)
Dành cho tất cả các trang trình bày nội dung bài học. Master slide đã bao gồm sẵn vệt xanh trang trí góc trái, logo ở góc phải và placeholder `title` tự động.
```typescript
const slide = pptx.addSlide({ masterName: "CONTENT" });
slide.addText("KHAI PHÁ DỮ LIỆU LÀ GÌ?", { placeholder: "title" });
```

### E. Slide Kết thúc (`masterName: "END"`)
Dành cho slide kết thúc chương, cảm ơn và để lại thông tin liên hệ.
```typescript
const slide = pptx.addSlide({ masterName: "END" });
slide.addText("CÔNG NGHỆ SỐ VÀ TRÍ TUỆ NHÂN TẠO", { placeholder: "subject" });
slide.addText("Khoa Thống kê - Tin học", { placeholder: "faculty" });
slide.addText("email@due.edu.vn", { placeholder: "email" });
slide.addText("0236.xxx.xxx", { placeholder: "phone" });
```

---

## 4. CHIẾN THUẬT PHÂN BỔ BỐ CỤC CHỮ KHÔNG BỊ CHỒNG CHÉO

Để tránh tình trạng các khối chữ hoặc bảng biểu đè lên nhau trên không gian slide giới hạn (`25.4cm x 14.29cm`), dự án cung cấp hàm trợ giúp `addText` được khai báo trong `src/template/due-template.ts`:

### A. Cách hoạt động của hàm `addText`
Hàm `addText` nhận vào `options` (chứa toạ độ ban đầu bằng đơn vị **inch**) và thực hiện tính toán độ dài chuỗi ký tự cùng số dòng thực tế dựa trên thuộc tính `w` (chiều rộng) và `fontSize` để trả về một đối tượng chứa thuộc tính `h` (chiều cao thực tế sau khi giãn dòng).

### B. Quy tắc tính toán luồng văn bản dọc (Dynamic Vertical Flow)
Để xếp các phần tử từ trên xuống dưới, không dùng toạ độ tĩnh cố định. Hãy lấy toạ độ `y` và chiều cao `h` của phần tử phía trước cộng thêm một khoảng đệm (gap):

```typescript
// Thêm khối văn bản đầu tiên
const optIntro = addText(slide, "Đoạn văn bản mở đầu khá dài...", {
  x: cmToInch(0.8),
  y: cmToInch(2.0),
  w: cmToInch(23.8),
  h: cmToInch(0.8), // Chiều cao tối thiểu, addText sẽ tính toán lại nếu dài hơn
  fontSize: 14,
  color: DUE_COLORS.green,
  bold: true,
});

// Tính toán tọa độ y cho bảng biểu nằm ngay dưới đoạn intro
const tableY = (optIntro.y as number) + (optIntro.h as number) + cmToInch(0.2);

slide.addTable([ ... ], {
  x: cmToInch(0.8),
  y: tableY,
  w: cmToInch(23.8),
  h: cmToInch(2.8),
  fontSize: 12
});
```

### C. Quy tắc định vị khối Kết luận/Thảo luận ở đáy trang (Bottom-Up Positioning)
Đối với các hộp thông điệp chốt hoặc câu hỏi thảo luận nằm ở chân trang slide, để đảm bảo chúng không bao giờ đè vào nội dung phía trên và giữ khoảng cách cân đối với slide:
- Sử dụng công thức tính ngược từ dưới slide lên: `y = PRESENTATION_HEIGHT - cmToInch(4.0)`
- Khoảng cách `4.0 cm` này cung cấp khoảng trống tối ưu chứa các đoạn văn bản kết luận dài từ 2 đến 3 dòng.
- **Quan trọng**: Không ghi thêm các tiền tố lặp thừa như *"Chốt:"*, *"Ý nghĩa thực tế:"*, *"Lưu ý:"*, *"Cảnh báo quan trọng:"*, v.v. tại các hộp thông điệp chân trang slide vì bản thân định dạng của khối này đã thể hiện rõ vai trò chốt ý. Hãy đi thẳng vào nội dung thông điệp chính hoặc chỉ sử dụng emoji (ví dụ: `💡`, `⚠️`, `👉`).

```typescript
addText(slide, "❓ Thảo luận: Nội dung thảo luận...", {
  x: cmToInch(0.8),
  y: PRESENTATION_HEIGHT - cmToInch(4.0), // Căn lề từ chân trang lên 4cm
  w: cmToInch(23.8),
  h: cmToInch(1.3),
  fontSize: 13,
  color: DUE_COLORS.white,
  fill: { color: DUE_COLORS.blue },
  italic: true,
  shape: "roundRect",
  margin: 12,
  rectRadius: 0.1,
});
```

### D. Trang trí khối thông tin dạng hộp
Khi thiết kế các ô hoặc thẻ chứa nội dung (Card Layout), để tránh chữ bị dính sát vào mép khung hình:
- Chỉ định thuộc tính `shape: "roundRect"` để tạo khối bo tròn góc.
- Cấu hình độ bo góc thông qua thuộc tính `rectRadius: 0.1` (10% độ rộng cạnh nhỏ nhất).
- **Quan trọng**: Thiết lập `margin: 12` (đơn vị **point**) để tạo lề trong (padding) thoải mái cho chữ.

### E. Tích hợp Ghi chú thuyết trình (Speaker Notes)
Khi tài liệu nội dung chứa phần **"Ghi chú giảng viên"**, **"Gợi ý giảng viên"** hoặc **nội dung bổ sung chi tiết** (các đoạn giải thích dài, diễn giải chi tiết không thể hiển thị hết trên không gian slide giới hạn):
- **Không** trình bày trực tiếp các đoạn văn bản bổ sung, diễn giải dài này lên các thẻ nội dung (Card) hoặc bảng biểu trên slide để tránh quá tải thông tin và làm slide trông rối rắm.
- Sử dụng phương thức `slide.addNotes(text)` để đưa toàn bộ nội dung ghi chú thuyết trình, diễn giải chi tiết hoặc nội dung bổ sung này vào Speaker Notes.

```typescript
const slide = pptx.addSlide({ masterName: "CONTENT" });
// Thêm nội dung slide...
slide.addNotes("Ghi chú giảng viên:\n- Cho học viên thảo luận nhóm...\n\nNội dung bổ sung:\n- Giải thích chi tiết thuật toán...");
```

---

## 5. QUY TRÌNH XUẤT FILE PPTX

1. **Đăng ký import file slide**:
   Nạp đường dẫn các slide của bạn vào `src/index.ts` để trình tạo ghi nhận slide khi biên dịch:
   ```typescript
   import "./slides/Giới thiệu.ts";
   import "./slides/1.1. Một số khái niệm/Mở đầu.ts";
   import "./slides/1.1. Một số khái niệm/1.1.1. Khai phá dữ liệu.ts";
   ```

2. **Chạy script build**:
   Mở terminal tại thư mục gốc của project và chạy lệnh sau để build mã nguồn TypeScript và chạy xuất file slide:
   ```bash
   pnpm run build
   ```

Lệnh trên sẽ chạy kiểm tra kiểu TypeScript (`tsc`) và thực thi node xuất ra tệp tin **`Chương 1. Một số khái niệm.pptx`** ở thư mục gốc của dự án.
