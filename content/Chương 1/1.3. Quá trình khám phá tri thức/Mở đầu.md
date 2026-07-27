# Slide 1 — SECTION

## 1.3. QUÁ TRÌNH KHÁM PHÁ TRI THỨC

**Câu hỏi dẫn nhập**

> Một mô hình tốt có thể được xây dựng trực tiếp từ dữ liệu thô không?

**Thông điệp chuyển tiếp**

Dữ liệu nhiều, đa dạng và có thể được thu thập hợp pháp chưa bảo đảm tạo ra quyết định tốt. Để tạo ra tri thức có giá trị, dữ liệu cần đi qua một quy trình có hệ thống: chuẩn bị đúng, khai phá phù hợp, đánh giá chặt chẽ và chuyển hóa thành hành động. 

**Định hướng nội dung**

- KDD là gì, và khác gì với khai phá dữ liệu?
- Dữ liệu được chuyển hóa thành tri thức qua những bước nào?
- Vì sao kết quả mô hình chỉ có giá trị khi gắn với quyết định nghiệp vụ?

***

# Slide 2 — CONTENT  
## KDD LÀ GÌ?

### Khám phá tri thức không chỉ là chạy thuật toán

**Khám phá tri thức trong cơ sở dữ liệu** (*Knowledge Discovery in Databases – KDD*) là quá trình phát hiện các mẫu từ dữ liệu, sau đó kiểm tra, diễn giải và sử dụng các mẫu đó để hỗ trợ quyết định. Khai phá dữ liệu (*data mining*) là bước trung tâm của KDD, nhưng không phải toàn bộ quy trình. 

\[
\text{Dữ liệu thô}
\rightarrow
\text{Mẫu}
\rightarrow
\text{Tri thức}
\rightarrow
\text{Hành động}
\]

| Thành phần | Ý nghĩa | Ví dụ trong bán lẻ |
|---|---|---|
| **Dữ liệu** | Các quan sát, giao dịch hoặc thông tin ban đầu | Hóa đơn, lịch sử mua hàng, lượt mở ứng dụng, phản hồi khách hàng |
| **Mẫu** (*pattern*) | Quan hệ, xu hướng hoặc cấu trúc được tìm thấy từ dữ liệu | Khách giảm số lần mua liên tiếp trong ba tháng có nguy cơ rời bỏ cao hơn |
| **Tri thức** (*knowledge*) | Mẫu đã được đánh giá là đáng tin cậy, hữu ích và phù hợp bối cảnh nghiệp vụ | Nhóm khách giảm mua cần được ưu tiên gửi ưu đãi giữ chân |
| **Hành động** | Quyết định hoặc can thiệp dựa trên tri thức | Gửi voucher cá nhân hóa, gọi chăm sóc hoặc đề xuất sản phẩm phù hợp |

Một mẫu chỉ trở thành tri thức khi nó không chỉ đúng về mặt dữ liệu mà còn **có ý nghĩa, đáng tin cậy, dễ diễn giải và có thể hành động**. 

### Ví dụ: mẫu hay tri thức?

- **Mẫu:** “Khách hàng có thu nhập cao thường mua sản phẩm A.”
- **Câu hỏi cần đánh giá:** Mẫu này có ổn định trên dữ liệu mới không? Có đủ phổ biến không? Có tạo ra doanh thu tăng thêm nếu dùng để cá nhân hóa tiếp thị không?
- **Tri thức có thể dùng:** “Nhóm khách hàng thu nhập cao, mua sản phẩm A trong ba tháng gần nhất và phản hồi tốt với ưu đãi trực tuyến có xác suất mua gói nâng cấp B cao; nên ưu tiên chiến dịch giới thiệu gói B cho nhóm này.”

**Thông điệp chốt**

> Thuật toán có thể tìm ra mẫu; nhưng con người, tiêu chí đánh giá và bối cảnh nghiệp vụ mới biến mẫu thành tri thức.

**Prompt to SVG**

```text
Create a 16:9 educational infographic, no text, showing the transformation from raw data to actionable knowledge. From left to right: messy data sources including receipts, customer cards, mobile app events, website clicks, and customer feedback; then an analytics engine discovering patterns; then a verified insight represented by a dashboard and highlighted customer segment; finally a business action with a personalized offer and returning customer. Show that data mining is the central engine but is surrounded by preparation and evaluation checkpoints. Style professional university business analytics flat vector, white background, navy blue and cyan, orange for pattern discovery, green for validated actionable insight.
```

***

# Slide 3 — CONTENT  
## BẢN ĐỒ QUY TRÌNH KDD

### Từ nguồn dữ liệu đến tri thức có thể sử dụng

KDD là một chuỗi bước liên kết, trong đó đầu ra của bước trước trở thành đầu vào cho bước sau. Bốn bước đầu chủ yếu chuẩn bị dữ liệu; khai phá dữ liệu tạo ra các mẫu tiềm năng; các bước cuối đánh giá và trình bày để đưa kết quả vào quyết định. 

\[
\text{Nguồn dữ liệu}
\rightarrow
\text{Làm sạch}
\rightarrow
\text{Tích hợp}
\rightarrow
\text{Lựa chọn}
\rightarrow
\text{Biến đổi}
\rightarrow
\text{Khai phá}
\rightarrow
\text{Đánh giá}
\rightarrow
\text{Trình bày tri thức}
\]

| Bước | Câu hỏi thực hiện | Hoạt động chính | Đầu ra |
|---|---|---|---|
| **1. Làm sạch** | Dữ liệu có thiếu, sai, nhiễu hoặc trùng lặp không? | Xử lý thiếu dữ liệu, lỗi nhập, định dạng không nhất quán, ngoại lệ | Dữ liệu có chất lượng tốt hơn |
| **2. Tích hợp** | Các nguồn có mô tả cùng một đối tượng không? | Ghép dữ liệu từ CRM, hóa đơn, website, ứng dụng và tổng đài | Bộ dữ liệu thống nhất |
| **3. Lựa chọn** | Biến nào thực sự liên quan đến bài toán? | Chọn khách hàng, khoảng thời gian và thuộc tính phù hợp | Dữ liệu tác vụ |
| **4. Biến đổi** | Dữ liệu đã sẵn sàng cho thuật toán chưa? | Chuẩn hóa, tổng hợp, mã hóa, rời rạc hóa, tạo biến mới | Dữ liệu phù hợp để khai phá |
| **5. Khai phá** | Cần tìm mẫu hoặc dự báo gì? | Áp dụng phân lớp, phân cụm, luật kết hợp, hồi quy hoặc phát hiện bất thường | Các mẫu/mô hình tiềm năng |
| **6. Đánh giá** | Mẫu có đáng tin và có ích không? | Kiểm tra độ chính xác, tính mới, giá trị kinh tế, khả năng hành động | Mẫu đáng quan tâm |
| **7. Trình bày** | Ai sẽ dùng kết quả và dùng như thế nào? | Dashboard, báo cáo, luật nghiệp vụ, cảnh báo hoặc danh sách ưu tiên | Tri thức hỗ trợ quyết định |

Các bước **làm sạch, tích hợp, lựa chọn và biến đổi** thường được xem là tiền xử lý dữ liệu. Đây không phải công việc phụ, vì chất lượng dữ liệu đầu vào quyết định trực tiếp mức độ tin cậy của mô hình và mẫu khai phá. 

### Liên hệ với Mục 1.2

| Thách thức đã học | Bước KDD xử lý chủ yếu |
|---|---|
| Dữ liệu thiếu, nhiễu, sai định dạng | Làm sạch dữ liệu |
| Nhiều nguồn và nhiều mã định danh | Tích hợp dữ liệu |
| Quá nhiều biến hoặc có biến rò rỉ thông tin | Lựa chọn và biến đổi dữ liệu |
| Mô hình có độ chính xác cao nhưng không sinh lời | Đánh giá mẫu |
| Rủi ro quyền riêng tư, bảo mật, thiên lệch | Xuyên suốt toàn bộ KDD, từ chọn dữ liệu đến triển khai |

**Thông điệp chốt**

> KDD không bắt đầu từ mô hình; KDD bắt đầu từ câu hỏi nghiệp vụ và dữ liệu phù hợp.

**Prompt to SVG**

```text
Create a 16:9 horizontal process infographic, no text, illustrating the full Knowledge Discovery in Databases process. Show eight connected stages: raw data sources, data cleaning, data integration, data selection, data transformation, data mining engine, pattern evaluation, and knowledge presentation leading to a business decision. Use visible handoff arrows so the output from each stage becomes input to the next stage. Add a subtle loop-back arrow from evaluation to earlier preparation stages to show iteration. Style clean university data mining flat vector, white background, navy blue and cyan, orange for processing checkpoints, green for final validated business knowledge.
```

***

# Slide 4 — CONTENT  
## TÌNH HUỐNG XUYÊN SUỐT: GIẢM RỜI BỎ KHÁCH HÀNG SIÊU THỊ

### Bối cảnh nghiệp vụ

Một chuỗi siêu thị muốn nhận diện những khách hàng có nguy cơ **ngừng mua trong 30 ngày tới**, từ đó triển khai ưu đãi hoặc chăm sóc phù hợp trước khi họ rời bỏ hoàn toàn.

Doanh nghiệp hiện có nhiều nguồn dữ liệu:

- Hóa đơn mua hàng tại cửa hàng.
- Dữ liệu thẻ thành viên.
- Lịch sử sử dụng ứng dụng.
- Hành vi trên website.
- Phản hồi, đánh giá và khiếu nại của khách hàng.
- Thông tin về khuyến mãi đã gửi và phản hồi với khuyến mãi.

### Câu hỏi thảo luận

> Đây là bài toán **phân lớp** hay **phân cụm**? Vì sao?

| Phương án | Khi nào phù hợp? | Áp dụng cho tình huống này |
|---|---|---|
| **Phân lớp** | Đã có nhãn kết quả cần dự báo | Phù hợp nếu doanh nghiệp xác định được khách “rời bỏ” là khách không phát sinh mua hàng trong 30 ngày tiếp theo |
| **Phân cụm** | Chưa có nhãn; cần khám phá các nhóm khách có hành vi tương tự | Phù hợp nếu doanh nghiệp muốn khám phá các nhóm như khách trung thành, khách săn khuyến mãi, khách ít hoạt động |
| **Kết hợp cả hai** | Cần vừa hiểu phân khúc vừa dự báo rủi ro | Có thể phân cụm để hiểu hành vi, sau đó phân lớp để dự báo rời bỏ cho từng khách hàng |

**Kết luận mong đợi:** Đây trước hết là bài toán **phân lớp**, vì doanh nghiệp đã có mục tiêu dự báo rõ ràng: khách hàng có rời bỏ trong 30 ngày tới hay không. Phân cụm có thể được dùng bổ sung để thiết kế các biện pháp giữ chân khác nhau cho từng nhóm khách. 

### Áp dụng nhanh KDD vào tình huống

| Bước KDD | Câu hỏi áp dụng cho siêu thị |
|---|---|
| Làm sạch | Có khách hàng trùng số điện thoại, thiếu mã thành viên hoặc giao dịch bất thường không? |
| Tích hợp | Có thể ghép hóa đơn tại cửa hàng, email website và số điện thoại ứng dụng về cùng một khách không? |
| Lựa chọn | Những biến nào liên quan đến rời bỏ: số lần mua, giá trị chi tiêu, số ngày từ lần mua gần nhất, mức phản hồi khuyến mãi? |
| Biến đổi | Có nên tạo biến “xu hướng chi tiêu trong ba tháng” hoặc “tần suất mở ứng dụng” không? |
| Khai phá | Dùng mô hình phân lớp để dự báo rời bỏ |
| Đánh giá | Mô hình có xác định đúng khách rủi ro cao và tạo lợi ích lớn hơn chi phí ưu đãi không? |
| Trình bày | Ai nhận danh sách khách có nguy cơ rời bỏ, và hành động nào sẽ được thực hiện? |

### Hoạt động lớp học: quyết định trong 3 phút

Mỗi nhóm trả lời ba câu hỏi:

1. **Định nghĩa rời bỏ:** Khách không mua hàng trong 30 ngày, 60 ngày hay 90 ngày?
2. **Ba biến quan trọng nhất:** Nhóm sẽ chọn những biến nào để dự báo nguy cơ rời bỏ?
3. **Một hành động giữ chân:** Với nhóm rủi ro cao, siêu thị nên gửi voucher, gọi chăm sóc hay gợi ý sản phẩm cá nhân hóa?

**Thông điệp chốt**

> Một bài toán khai phá tốt phải xác định rõ: đối tượng cần dự báo, kết quả cần dự báo, dữ liệu có thể sử dụng và hành động sẽ được kích hoạt từ kết quả dự báo.

**Prompt to SVG**

```text
Create a 16:9 case-study infographic, no text, about customer churn prediction for a supermarket chain. Show customer data coming from store receipts, loyalty cards, a mobile app, website activity, and feedback messages, converging into a unified customer profile. Then show a classification model identifying high-risk customers with a warning signal. End with three retention actions: personalized voucher, customer-care call, and relevant product recommendation. Include a smaller side panel visually showing customer segments to indicate clustering can complement classification. Style professional retail analytics flat vector, white background, navy blue and cyan, orange for churn risk, green for successful retention actions.
```