## Slide 4 — SECTION

**Tiêu đề**

> **2.1. TỔNG QUAN NHẬN BIẾT DỮ LIỆU VÀ TIỀN XỬ LÝ DỮ LIỆU**  
> *Hiểu dữ liệu trước khi khai phá dữ liệu*

**Thông điệp chuyển tiếp**

> **Thuật toán không thể tự khắc phục dữ liệu sai, thiếu hoặc không phù hợp với bài toán.**  
> Trước khi tìm mẫu, dự báo hay phân khúc, cần nhận biết dữ liệu đang có, nguồn gốc, cấu trúc và mức độ sẵn sàng của chúng.

***

## Slide 5 — CONTENT

**Tiêu đề**

> **DỮ LIỆU TRONG KHAI PHÁ DỮ LIỆU**

**Khái niệm**

Dữ liệu là các quan sát được ghi nhận về **đối tượng**, **sự kiện** hoặc **giao dịch**. Trong khai phá dữ liệu, mỗi bản ghi thường mô tả một đơn vị phân tích, chẳng hạn một khách hàng, một khoản vay, một hóa đơn, một lần truy cập website hoặc một giao dịch thanh toán.

**Các dạng dữ liệu theo cấu trúc**

| Dạng dữ liệu | Đặc điểm | Ví dụ kinh tế–kinh doanh |
|---|---|---|
| **Có cấu trúc** (*structured data*) | Có lược đồ rõ ràng; thường được lưu thành hàng và cột trong cơ sở dữ liệu hoặc bảng tính | Bảng giao dịch bán hàng, danh mục khách hàng, dư nợ tín dụng, báo cáo tài chính |
| **Bán cấu trúc** (*semi-structured data*) | Có tổ chức nhất định nhưng không tuân thủ hoàn toàn cấu trúc bảng cố định | JSON từ API, XML, nhật ký truy cập web, dữ liệu sự kiện từ ứng dụng |
| **Phi cấu trúc** (*unstructured data*) | Không có lược đồ bảng cố định; nội dung giàu thông tin nhưng khó phân tích trực tiếp | Bình luận khách hàng, email, hợp đồng dạng văn bản, ảnh hóa đơn, bản ghi âm tổng đài |

**Nguồn thu thập phổ biến**

- Tệp dữ liệu như CSV, Excel hoặc tệp văn bản.
- Cơ sở dữ liệu tác nghiệp như ERP, CRM, hệ thống ngân hàng lõi hoặc hệ thống bán hàng.
- Kho dữ liệu và các *data mart* theo phòng ban.
- Website, mạng xã hội, API và nhật ký truy cập.
- Thiết bị cảm biến, ứng dụng di động và luồng dữ liệu thời gian thực.

Khai phá dữ liệu có thể thực hiện trên dữ liệu quan hệ, giao dịch, kho dữ liệu, luồng dữ liệu, văn bản, dữ liệu đa phương tiện và dữ liệu mạng; vì vậy, dữ liệu đầu vào không chỉ giới hạn ở bảng tính Excel. 

***

## Slide 6 — CONTENT

**Tiêu đề**

> **TỪ DỮ LIỆU THÔ ĐẾN TRI THỨC**

**Chuỗi khám phá tri thức từ dữ liệu**

> **Nguồn dữ liệu**  
> \(\downarrow\)  
> **Làm sạch**  
> \(\downarrow\)  
> **Tích hợp**  
> \(\downarrow\)  
> **Lựa chọn**  
> \(\downarrow\)  
> **Biến đổi**  
> \(\downarrow\)  
> **Khai phá dữ liệu**  
> \(\downarrow\)  
> **Đánh giá mẫu**  
> \(\downarrow\)  
> **Tri thức và hành động**

**Ý nghĩa từng bước**

- **Làm sạch:** xử lý giá trị thiếu, lỗi nhập liệu, dữ liệu trùng lặp, nhiễu và các giá trị không nhất quán.
- **Tích hợp:** kết hợp dữ liệu từ nhiều nguồn, chẳng hạn hệ thống giao dịch, CRM, ứng dụng số và dữ liệu khảo sát.
- **Lựa chọn:** chỉ giữ lại bản ghi, biến số và giai đoạn thời gian phù hợp với mục tiêu phân tích.
- **Biến đổi:** chuẩn hóa đơn vị đo, mã hóa biến định tính, tạo biến mới, tổng hợp hoặc giảm chiều dữ liệu.
- **Khai phá dữ liệu:** áp dụng thuật toán để dự báo, phân loại, phân cụm, phát hiện bất thường hoặc tìm luật kết hợp.
- **Đánh giá mẫu:** kiểm tra mẫu có đáng tin cậy, có ý nghĩa nghiệp vụ, có khả năng áp dụng và tạo giá trị hay không.
- **Tri thức và hành động:** chuyển kết quả thành quyết định, chính sách hoặc can thiệp kinh doanh cụ thể.

**Ví dụ: hồ sơ khách hàng đa kênh**

Một doanh nghiệp viễn thông gộp dữ liệu hóa đơn, lịch sử chăm sóc khách hàng và mức sử dụng ứng dụng thành hồ sơ khách hàng thống nhất. Sau khi làm sạch, tạo các chỉ số như mức chi tiêu, tần suất sử dụng và số lần phản ánh, doanh nghiệp có thể phân khúc khách hàng để thiết kế ưu đãi phù hợp hoặc ưu tiên giữ chân nhóm có nguy cơ rời bỏ cao.

Khai phá dữ liệu là một quá trình khám phá tri thức gồm làm sạch, tích hợp, lựa chọn, biến đổi dữ liệu, phát hiện và đánh giá mẫu trước khi trình bày tri thức để hỗ trợ hành động. 