## Slide 28 — SECTION

> **2.3. NHỮNG KỸ THUẬT TIỀN XỬ LÝ DỮ LIỆU**  
> *Biến dữ liệu thô thành dữ liệu tin cậy và sẵn sàng khai phá*

Tiền xử lý không chỉ là “làm sạch dữ liệu”, mà còn bao gồm tích hợp, biến đổi, thu giảm và thay đổi mức biểu diễn dữ liệu sao cho phù hợp với mục tiêu phân tích. 

***

## Slide 29 — CONTENT

> **BẢN ĐỒ KỸ THUẬT TIỀN XỬ LÝ**

| Nhóm kỹ thuật | Mục tiêu chính | Hoạt động điển hình |
|---|---|---|
| **Làm sạch dữ liệu** (*data cleaning*) | Cải thiện chất lượng dữ liệu | Xử lý giá trị thiếu, làm trơn nhiễu, phát hiện ngoại lệ, sửa không nhất quán |
| **Tích hợp dữ liệu** (*data integration*) | Kết hợp dữ liệu từ nhiều nguồn thành tập dữ liệu thống nhất | Ghép lược đồ, nhận diện thực thể, loại trùng lặp, xử lý xung đột giá trị |
| **Biến đổi dữ liệu** (*data transformation*) | Đưa dữ liệu về dạng phù hợp cho thuật toán | Chuẩn hóa, làm trơn, tổng hợp, tạo thuộc tính mới |
| **Thu giảm dữ liệu** (*data reduction*) | Giảm kích thước hoặc số chiều nhưng vẫn giữ thông tin thiết yếu | Chọn thuộc tính, giảm chiều, lấy mẫu, gom nhóm, tổng hợp dữ liệu |
| **Rời rạc hóa và phân cấp khái niệm** | Chuyển giá trị chi tiết thành các mức biểu diễn đơn giản hơn | Chuyển tuổi thành trẻ–trung niên–cao tuổi; chuyển giá trị liên tục thành các khoảng |

Các nhóm kỹ thuật có thể được dùng phối hợp và không loại trừ lẫn nhau. Ví dụ, phát hiện biến dư thừa vừa liên quan đến tích hợp dữ liệu, vừa có thể được xem là một bước thu giảm dữ liệu. 

Với các thuật toán dựa trên khoảng cách như K-means, chuẩn hóa là đặc biệt quan trọng: nếu biến “thu nhập” có thang đo lớn hơn rất nhiều so với “tuổi”, khoảng cách có thể bị chi phối bởi thu nhập. 

### Lộ trình xử lý tổng quát

\[
\text{Dữ liệu thô}
\rightarrow
\text{Làm sạch}
\rightarrow
\text{Tích hợp}
\rightarrow
\text{Biến đổi}
\rightarrow
\text{Thu giảm / Rời rạc hóa}
\rightarrow
\text{Dữ liệu sẵn sàng khai phá}
\]

***

## Slide 30 — CONTENT

> **NGUYÊN TẮC CHUNG TRƯỚC KHI XỬ LÝ**

Tiền xử lý tốt không phải là áp dụng nhiều kỹ thuật nhất, mà là lựa chọn can thiệp phù hợp, có căn cứ và có thể kiểm tra lại. Chất lượng dữ liệu phụ thuộc vào mục đích sử dụng; một giá trị chấp nhận được cho báo cáo tổng hợp có thể không đủ tốt cho mô hình dự báo hoặc phân cụm. 

### Quy trình bốn bước

1. **Xác định vấn đề bằng bằng chứng dữ liệu:** Dùng bảng thống kê tóm tắt, histogram, boxplot, scatter plot và kiểm tra quy tắc dữ liệu để phát hiện thiếu, nhiễu, ngoại lệ, trùng lặp hoặc không nhất quán. 

2. **Xác định nguyên nhân và ý nghĩa nghiệp vụ:** Một giá trị thiếu có thể là lỗi nhập liệu, chưa phát sinh thông tin hoặc “không áp dụng”; một ngoại lệ có thể là lỗi đo lường nhưng cũng có thể là khách hàng giá trị cao. 

3. **Chọn quy tắc xử lý, lưu vết thay đổi và đánh giá lại:** Cần xác định rõ quy tắc áp dụng, biến bị tác động, số bản ghi thay đổi và ảnh hưởng tới phân bố dữ liệu hoặc kết quả mô hình. Quy trình phát hiện sai lệch và biến đổi để sửa sai thường phải lặp lại nhiều lần. 

4. **Không xử lý tự động khi chưa kiểm chứng:** Không mặc định xóa dòng có dữ liệu thiếu hoặc ngoại lệ. Việc bỏ bản ghi có thể làm mất thông tin hữu ích và làm sai lệch cấu trúc dữ liệu còn lại. 

### Ví dụ quyết định có căn cứ

| Phát hiện | Câu hỏi cần kiểm tra | Hướng xử lý có thể áp dụng |
|---|---|---|
| Thu nhập bằng 0 ở khách hàng đang đi làm | Là giá trị thật, mã thay thế cho thiếu hay lỗi nhập liệu? | Đối chiếu nguồn; mã hóa lại giá trị thiếu hoặc sửa lỗi |
| Một hóa đơn cao gấp 100 lần mức điển hình | Sai đơn vị, lỗi dấu thập phân hay đơn hàng doanh nghiệp? | Sửa nếu lỗi; giữ và gắn cờ nếu giao dịch hợp lệ |
| “Hà Nội”, “HN” và “Ha Noi” cùng xuất hiện | Có cùng một địa bàn hay không? | Chuẩn hóa mã và nhãn danh mục |
| Hai bảng có `customer_id` và `cust_no` | Có cùng định danh khách hàng không? | Kiểm tra metadata, quy tắc ghép và bản ghi trùng |

> **Thông điệp:** Mọi quyết định tiền xử lý cần có lý do dữ liệu, lý do nghiệp vụ và dấu vết thực hiện. Điều này giúp kết quả phân tích có thể giải thích, tái lập và được các bên liên quan tin cậy.