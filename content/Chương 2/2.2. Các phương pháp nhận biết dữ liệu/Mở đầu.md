## Slide 12 — SECTION 2.2

**Tiêu đề**

> **2.2. Các phương pháp nhận biết dữ liệu**  

Trước khi làm sạch, tích hợp hay biến đổi dữ liệu, nhà phân tích cần hiểu dữ liệu đang có gì và có vấn đề gì. Khám phá dữ liệu (*Exploratory Data Analysis – EDA*) giúp nhận diện cấu trúc, phân bố, ngoại lệ và các quan hệ đáng chú ý để tránh áp dụng kỹ thuật tiền xử lý một cách máy móc. 

> **Thông điệp chính:** Không làm sạch hoặc biến đổi dữ liệu khi chưa hiểu dữ liệu.

***

## Slide 13 — CONTENT

**Tiêu đề**

> **QUY TRÌNH NHẬN BIẾT DỮ LIỆU**

### Luồng thực hành đề xuất

> **Kiểm tra cấu trúc** → **Thống kê tóm tắt** → **Trực quan hóa** → **Đặt câu hỏi nghiệp vụ** → **Đề xuất xử lý**

| Bước | Cần thực hiện | Câu hỏi gợi ý |
|---|---|---|
| **1. Kiểm tra cấu trúc** | Xác định số dòng, số biến, tên biến, kiểu dữ liệu, khóa định danh, đơn vị đo và thời gian ghi nhận | Biến “doanh thu” là số hay văn bản? Ngày tháng có cùng định dạng? Một khách hàng xuất hiện bao nhiêu lần? |
| **2. Thống kê tóm tắt** | Tính tỷ lệ thiếu, số giá trị khác nhau, trung bình, trung vị, min–max, độ lệch chuẩn và tứ phân vị | Có giá trị âm không hợp lý? Trung bình có chênh lệch lớn so với trung vị? |
| **3. Trực quan hóa** | Dùng biểu đồ phù hợp với kiểu biến và mục tiêu kiểm tra | Phân bố có lệch phải? Có điểm ngoại lệ? Hai biến có quan hệ bất thường? |
| **4. Đặt câu hỏi nghiệp vụ** | Đối chiếu phát hiện thống kê với quy trình vận hành và bối cảnh kinh doanh | Giá trị cao là lỗi nhập hay khách hàng doanh nghiệp? Giá trị thiếu có nghĩa là “không áp dụng” không? |
| **5. Đề xuất xử lý** | Lựa chọn, ghi nhận lý do và kiểm tra tác động của phương án xử lý | Giữ lại, sửa, gắn cờ, điền thiếu, tách phân khúc hay loại bỏ? |

Trong quy trình khai phá dữ liệu, khám phá, làm sạch và tiền xử lý là giai đoạn kiểm tra dữ liệu có hợp lý hay không, xem xét giá trị thiếu, phạm vi giá trị, ngoại lệ và tính nhất quán về định nghĩa biến, đơn vị đo hoặc thời kỳ dữ liệu. 

### Minh họa: biến “chi tiêu”

Giả sử biến **chi tiêu tháng** có trung vị 2 triệu đồng nhưng giá trị lớn nhất là 300 triệu đồng. Chênh lệch này là tín hiệu cần điều tra, **không phải bằng chứng đủ để xóa giá trị cực đại**.

- Kiểm tra histogram để xem phân bố có lệch phải mạnh hay không.
- Dùng boxplot để xác định các điểm nằm xa phần lớn quan sát.
- Đối chiếu thông tin khách hàng: cá nhân, VIP, hay doanh nghiệp.
- Chỉ sau đó mới quyết định chuẩn hóa, biến đổi log, phân khúc khách hàng, gắn cờ ngoại lệ hoặc hiệu chỉnh lỗi nhập liệu.

Mô tả số học và đồ thị nên được dùng bổ sung cho nhau: thống kê tóm tắt cho biết mức độ tập trung và phân tán, còn biểu đồ giúp nhận ra hình dạng phân bố, mẫu hình và ngoại lệ mà một vài chỉ số đơn lẻ có thể che khuất. 