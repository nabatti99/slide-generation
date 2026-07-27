# Chương 2: Dữ liệu và tiền xử lý dữ liệu

## Slide 1 — TITLE

**Tiêu đề**

> **CHƯƠNG 2: DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU** 

***

## Slide 2 — OBJECTIVE

**Tiêu đề**

> **MỤC TIÊU HỌC TẬP**

**Nội dung dạng list**

- Nhận biết các dạng dữ liệu thường gặp trong bài toán kinh tế, tài chính và kinh doanh.
- Mô tả cấu trúc của tập dữ liệu: đối tượng, thuộc tính, kiểu dữ liệu và mức đo lường.
- Phân biệt các vấn đề chất lượng dữ liệu: thiếu dữ liệu, nhiễu, không nhất quán, trùng lặp và ngoại lệ.
- Giải thích vai trò của tiền xử lý đối với độ tin cậy và hiệu quả của mô hình khai phá dữ liệu.
- Lựa chọn định hướng xử lý phù hợp cho dữ liệu thiếu, dữ liệu nhiễu, dữ liệu phân tán và dữ liệu có nhiều thuộc tính.
- Nhận diện và đánh giá dữ liệu bất thường trong bối cảnh nghiệp vụ.
- Mô tả vai trò của kho dữ liệu, mô hình đa chiều và OLAP trong hỗ trợ phân tích, ra quyết định và khai phá dữ liệu.
- Liên hệ một bài toán kinh tế–kinh doanh với chuỗi công việc chuẩn bị dữ liệu phù hợp.

***

## Slide 3 — CONTENT

**Tiêu đề**

> **TÌNH HUỐNG THỰC TẾ — MÔ HÌNH TỐT NHƯNG DỰ BÁO SAI**

**Bối cảnh**

Một ngân hàng muốn xây dựng mô hình dự báo khả năng **khách hàng rời bỏ** (*customer churn*) để chủ động giữ chân nhóm khách hàng có nguy cơ cao.

Dữ liệu đầu vào được trích xuất từ các hệ thống giao dịch, quản lý khách hàng và ứng dụng ngân hàng số, bao gồm:

- Lịch sử giao dịch và số dư tài khoản.
- Thu nhập, nghề nghiệp và đặc điểm nhân khẩu học.
- Loại thẻ và lịch sử sử dụng sản phẩm tín dụng.
- Tần suất, thời lượng và mức độ sử dụng ứng dụng ngân hàng số.
- Phản hồi đối với các chương trình chăm sóc khách hàng.

**Các vấn đề phát hiện trong dữ liệu**

- Thu nhập bị thiếu ở nhiều hồ sơ khách hàng.
- Ngày giao dịch tồn tại nhiều định dạng, chẳng hạn `01/07/2026`, `2026-07-01` và `July 1, 2026`.
- Một khách hàng có nhiều bản ghi do trùng hoặc sai khác mã khách hàng giữa các hệ thống.
- Một số giao dịch có giá trị rất lớn hoặc tần suất bất thường.
- Một số trường phân loại không thống nhất, chẳng hạn `VIP`, `Vip`, `vip` và để trống.

**Câu hỏi thảo luận**

> **Có thể đưa trực tiếp dữ liệu này vào mô hình dự báo rời bỏ không? Vì sao?**

**Gợi ý cho giảng viên**

Không nên đưa trực tiếp dữ liệu thô vào mô hình. Dữ liệu thiếu có thể làm giảm số quan sát khả dụng hoặc gây sai lệch nếu bị loại bỏ tùy tiện; dữ liệu sai định dạng và trùng lặp làm sai đặc trưng đầu vào; còn giao dịch bất thường có thể là lỗi dữ liệu, hành vi gian lận hoặc một tín hiệu kinh doanh cần được giữ lại và phân tích trong đúng ngữ cảnh. 