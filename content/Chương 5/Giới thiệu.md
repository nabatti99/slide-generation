# Chương 5: Luật kết hợp

## Slide 1 — TITLE

**Tiêu đề**

> **CHƯƠNG 5: LUẬT KẾT HỢP**

***

## Slide 2 — OBJECTIVE

**Tiêu đề**

> **MỤC TIÊU HỌC TẬP**

**Nội dung dạng list**

- Giải thích mục tiêu, bối cảnh ứng dụng và quy trình cơ bản của khai phá luật kết hợp trong kinh tế, tài chính và kinh doanh.
- Nhận diện các khái niệm nền tảng: transaction, item, itemset, frequent itemset, support count, support, confidence và lift.
- Phân biệt các loại luật kết hợp: luật Boolean và luật định lượng; luật một chiều và đa chiều; luật đơn cấp và đa cấp.
- Biểu diễn được luật kết hợp dưới dạng \(X \rightarrow Y\), đồng thời tính và diễn giải support, confidence, lift.
- Phân tích ý nghĩa của các ngưỡng `minsup` và `minconf` đối với số lượng, chất lượng và khả năng diễn giải của luật.
- Mô tả và thực hiện các bước chính của giải thuật **Apriori**: tạo candidate itemsets, đếm support, Join, Prune và điều kiện dừng.
- Giải thích nguyên lý của **FP-Growth**: tạo danh sách frequent items, xây dựng FP-tree, tạo conditional pattern base và khai phá conditional FP-tree.
- So sánh Apriori và FP-Growth theo cách tìm frequent itemsets, số lần quét dữ liệu, candidate generation, hiệu quả tính toán và bối cảnh áp dụng.
- Đánh giá luật kết hợp theo nhiều tiêu chí; nhận biết trường hợp confidence cao nhưng lift không cho thấy quan hệ tích cực.
- Vận dụng luật kết hợp trên dữ liệu giao dịch thẻ tín dụng để phát hiện các tổ hợp đặc trưng thường đồng xuất hiện và đề xuất hàm ý quản trị phù hợp.

Khai phá luật kết hợp bao gồm tìm các frequent itemsets, sau đó sinh luật thỏa các ngưỡng support và confidence; Apriori và FP-Growth là hai hướng tiếp cận cơ bản để thực hiện bước tìm frequent itemsets. 

***

## Slide 3 — CONTENT

**Tiêu đề**

> **TÌNH HUỐNG THỰC TẾ — NHẬN DIỆN TỔ HỢP RỦI RO TRONG GIAO DỊCH THẺ**

**Bối cảnh**

Một ngân hàng muốn phân tích dữ liệu giao dịch thẻ tín dụng nhằm nhận diện các tổ hợp đặc điểm thường xuất hiện cùng nhau trong giao dịch bình thường và giao dịch có dấu hiệu gian lận.

Bộ dữ liệu sử dụng xuyên suốt học phần là **Credit Card Transactions Dataset** trên Kaggle. Dữ liệu ghi nhận thông tin về thời điểm giao dịch, giá trị giao dịch, ngành hàng, đơn vị chấp nhận thẻ, đặc điểm khách hàng, vị trí và trạng thái gian lận. 

Sau bước tiền xử lý, mỗi giao dịch có thể được chuyển thành một tập các mục (*itemset*), ví dụ:

> `{CAT_grocery_pos, TIME_Evening, AMT_High, GENDER_F, POP_Medium_city, FRAUD_0}`

Hoặc một giao dịch khác:

> `{CAT_online_retail, TIME_Dawn, AMT_Very_high, POP_Large_city, FRAUD_1}`

Ngân hàng quan tâm đến những câu hỏi như:

- Các nhóm ngành hàng nào thường xuất hiện cùng khung giờ và mức giá trị giao dịch nào?
- Những tổ hợp đặc trưng nào thường đi kèm với `FRAUD_1`?
- Luật `TIME_Dawn ∧ AMT_Very_high → FRAUD_1` có thực sự hữu ích hay chỉ xuất hiện do `FRAUD_1` vốn có một tỷ lệ nền nhất định?
- Nếu hạ ngưỡng support quá thấp để tìm các mẫu gian lận hiếm, số lượng luật sẽ thay đổi như thế nào?
- Khi dữ liệu có hàng trăm nghìn đến hàng triệu giao dịch, nên dùng Apriori hay FP-Growth?

**Câu hỏi thảo luận**

> **Nếu một luật có confidence 80% nhưng lift chỉ bằng 1,02, ngân hàng có nên xem đây là một quy tắc rủi ro mạnh để tự động chặn giao dịch không? Vì sao?**

**Gợi ý cho giảng viên**

Không nên đưa luật vào quy trình tự động chặn giao dịch chỉ vì confidence cao. Lift xấp xỉ 1 cho thấy xác suất xuất hiện của vế phải khi có vế trái gần như không khác đáng kể so với xác suất nền của vế phải; vì vậy luật có thể không bổ sung nhiều thông tin dự báo. 

Trong bối cảnh gian lận, `FRAUD_1` thường là lớp hiếm. Do đó, việc chọn `minsup`, `minconf` và tiêu chí lọc luật cần cân bằng giữa việc không bỏ sót các tổ hợp rủi ro có ý nghĩa và việc tránh tạo ra các luật dựa trên quá ít quan sát.  

Tình huống này dẫn vào các nội dung của chương: khái niệm và phân loại luật kết hợp; biểu diễn luật; giải thuật Apriori; giải thuật FP-Growth; và so sánh, đánh giá chất lượng luật.