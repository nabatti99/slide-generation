# HỌC PHẦN STA5009N — KHAI PHÁ DỮ LIỆU

## Hướng dẫn dự án cuối kỳ và 05 đề tài phân công theo nhóm

> **Trình độ:** Thạc sĩ  
> **Khối lượng:** 03 tín chỉ  
> **Hình thức đánh giá cuối kỳ:** Báo cáo dự án, slide thuyết trình, bảo vệ nhóm và đánh giá mức độ đóng góp cá nhân  
> **Giảng viên:** TS. Lê Diên Tuấn; TS. Nguyễn Thị Uyên Nhi  

***

## 1. Mục đích dự án

Dự án cuối kỳ yêu cầu mỗi nhóm thực hiện trọn vẹn một bài toán khai phá dữ liệu có ý nghĩa trong bối cảnh kinh tế, kinh doanh hoặc quản trị. Nhóm phải chuyển một bộ dữ liệu thô thành các phát hiện có thể diễn giải và khuyến nghị hỗ trợ ra quyết định.

Dự án không chỉ là chạy phần mềm hoặc trình bày chỉ số mô hình. Nhóm cần chứng minh được các nội dung sau:

- Vấn đề nghiệp vụ được xác định rõ ràng
- Dữ liệu được hiểu, đánh giá và tiền xử lý hợp lý
- Kỹ thuật khai phá dữ liệu được lựa chọn có căn cứ
- Kết quả được đánh giá bằng các thước đo phù hợp
- Kết quả được diễn giải bằng ngôn ngữ nghiệp vụ
- Khuyến nghị có tính ứng dụng trong thực tế

***

## 2. Chuẩn đầu ra được đánh giá

| Chuẩn đầu ra | Biểu hiện bắt buộc trong dự án |
|---|---|
| **CLO1** | Áp dụng kỹ thuật tiền xử lý dữ liệu phù hợp: xử lý dữ liệu thiếu, dữ liệu trùng lặp, dữ liệu bất thường, mã hóa, chuẩn hóa, biến đổi và rời rạc hóa khi cần |
| **CLO2** | Xây dựng cấu trúc dữ liệu phục vụ phân tích; với đề tài giao dịch cần thiết kế kho dữ liệu dạng sao hoặc bông tuyết |
| **CLO3** | Lựa chọn, so sánh và đánh giá các kỹ thuật khai phá dữ liệu phù hợp với bài toán |
| **CLO4** | Xây dựng dự án khai phá dữ liệu có quy trình đầy đủ, có thể tái lập |
| **CLO5** | Diễn giải kết quả mô hình, cụm hoặc luật kết hợp theo bối cảnh nghiệp vụ |
| **CLO6** | Vận dụng phần mềm hoặc công cụ khai phá dữ liệu để xử lý, phân tích và trình bày kết quả |

***

## 3. Quy định chung

- Mỗi nhóm nhận một trong năm đề tài và bộ dữ liệu được phân công.
- Không tự ý thay đổi đề tài hoặc bộ dữ liệu khi chưa có sự đồng ý của giảng viên.
- Quy mô nhóm khuyến nghị: từ 04 đến 06 học viên.
- Mỗi thành viên phải có vai trò, phần việc và sản phẩm cụ thể trong dự án.
- Có thể sử dụng Python, Jupyter Notebook, Google Colab, Orange Data Mining, WEKA hoặc công cụ khác được giảng viên chấp thuận.
- Nếu dùng Python, nhóm nên sử dụng các thư viện như `pandas`, `numpy`, `scikit-learn`, `mlxtend`, `matplotlib`, `seaborn`, `plotly`.
- Dữ liệu gốc, dữ liệu đã xử lý, mã nguồn, workflow, báo cáo và slide phải được tổ chức rõ ràng.
- Các kết quả trong báo cáo phải có khả năng tái lập.
- Mọi nguồn dữ liệu, hình ảnh, tài liệu và thư viện sử dụng phải được trích dẫn.
- Không sử dụng dữ liệu cá nhân nhạy cảm, dữ liệu vi phạm quyền riêng tư hoặc dữ liệu không rõ nguồn gốc.
- Không chấp nhận báo cáo chỉ chạy phần mềm mà không giải thích dữ liệu, phương pháp, kết quả và ý nghĩa quản trị.
- Không sao chép báo cáo, notebook hoặc mã nguồn từ nguồn khác mà không trích dẫn.

***

## 4. Quy trình thực hiện dự án

Nhóm có thể tổ chức dự án theo CRISP-DM, nhưng bắt buộc phải thể hiện đầy đủ các bước sau.

### Bước 1. Hiểu bài toán

Nhóm cần xác định:

- Bối cảnh kinh tế, kinh doanh hoặc quản trị
- Đơn vị hoặc đối tượng ra quyết định
- Câu hỏi khai phá dữ liệu cần giải quyết
- Đơn vị quan sát trong dữ liệu
- Mục tiêu phân tích
- Tiêu chí đánh giá thành công của dự án

Ví dụ:

> Một ngân hàng muốn xác định khách hàng nào có khả năng đăng ký tiền gửi có kỳ hạn để ưu tiên liên hệ trong chiến dịch tiếp thị.

***

### Bước 2. Hiểu dữ liệu

Nhóm cần trình bày:

- Nguồn dữ liệu
- Phạm vi dữ liệu
- Kích thước dữ liệu: số dòng, số cột
- Đơn vị quan sát
- Kiểu dữ liệu của các biến
- Ý nghĩa của các biến
- Dữ liệu thiếu
- Dữ liệu trùng lặp
- Dữ liệu bất thường
- Phân bố của các biến quan trọng
- Rủi ro và hạn chế của dữ liệu

Bắt buộc lập bảng từ điển dữ liệu.

| Biến | Kiểu dữ liệu | Ý nghĩa | Vai trò |
|---|---|---|---|
| `age` | Numeric | Tuổi khách hàng | Biến đầu vào |
| `job` | Categorical | Nghề nghiệp | Biến đầu vào |
| `balance` | Numeric | Số dư tài khoản | Biến đầu vào |
| `y` | Binary | Có đăng ký tiền gửi hay không | Biến mục tiêu |

***

### Bước 3. Tiền xử lý dữ liệu

Nhóm cần mô tả rõ:

- Cách xử lý giá trị thiếu
- Cách xử lý dữ liệu trùng lặp
- Cách xử lý dữ liệu không hợp lệ
- Cách xử lý ngoại lệ
- Cách mã hóa biến phân loại
- Cách chuẩn hóa hoặc biến đổi dữ liệu
- Cách tạo biến mới
- Cách xử lý mất cân bằng lớp đối với bài toán phân lớp
- Cách chia dữ liệu huấn luyện và kiểm tra

> Lưu ý: Không được để xảy ra rò rỉ dữ liệu giữa tập huấn luyện và tập kiểm tra.

Ví dụ về rò rỉ dữ liệu:

> Nếu biến chỉ được biết sau khi quá trình tương tác đã kết thúc, biến đó không được dùng để dự báo tại thời điểm ra quyết định ban đầu.

***

### Bước 4. Thiết kế dữ liệu phân tích hoặc kho dữ liệu

Nhóm phải mô tả cấu trúc dữ liệu phân tích.

Đối với đề tài có dữ liệu giao dịch, nhóm cần thiết kế kho dữ liệu theo mô hình sao hoặc mô hình bông tuyết.

Các nội dung cần trình bày:

- Grain của bảng fact
- Fact table
- Dimension tables
- Khóa chính
- Khóa ngoại
- Các chỉ tiêu đo lường
- Các quy tắc ETL cơ bản

Ví dụ cấu trúc kho dữ liệu bán lẻ:

| Thành phần | Nội dung |
|---|---|
| Fact table | Fact_Sales |
| Dimension 1 | Dim_Customer |
| Dimension 2 | Dim_Product |
| Dimension 3 | Dim_Date |
| Dimension 4 | Dim_Country |
| Measures | Quantity, UnitPrice, Revenue |

***

### Bước 5. Mô hình hóa hoặc khai phá dữ liệu

Nhóm phải lựa chọn phương pháp phù hợp với bài toán.

| Loại bài toán | Phương pháp gợi ý |
|---|---|
| Phân lớp | Decision Tree, Naive Bayes, Logistic Regression, Random Forest, Neural Network |
| Phân cụm | K-means, Hierarchical Clustering, DBSCAN |
| Luật kết hợp | Apriori, FP-Growth |
| Phát hiện bất thường | Z-score, IQR, Isolation Forest, DBSCAN |
| Kho dữ liệu | Star Schema, Snowflake Schema, ETL Pipeline |

Mỗi nhóm cần:

- Thử nghiệm tối thiểu hai phương pháp hoặc hai cấu hình khác nhau
- Giải thích lý do lựa chọn thuật toán
- Nêu rõ tham số chính
- Mô tả cách chia dữ liệu hoặc cross-validation
- So sánh kết quả các phương án
- Chọn phương án cuối cùng có lý do rõ ràng

***

### Bước 6. Đánh giá kết quả

#### Đối với bài toán phân lớp

Bắt buộc trình bày:

- Confusion Matrix
- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC hoặc PR-AUC khi phù hợp
- So sánh tối thiểu hai mô hình

#### Đối với bài toán phân cụm

Bắt buộc trình bày:

- Lý do chọn số cụm
- Silhouette Score
- Trực quan hóa các cụm
- Mô tả đặc trưng của từng cụm
- So sánh ít nhất hai phương pháp phân cụm

#### Đối với luật kết hợp

Bắt buộc trình bày:

- Đơn vị giao dịch
- Ngưỡng support
- Ngưỡng confidence
- Lift
- Các luật quan trọng
- Diễn giải ý nghĩa nghiệp vụ của luật
- Loại bỏ các luật dư thừa hoặc không có giá trị thực hành

***

### Bước 7. Diễn giải và khuyến nghị

Nhóm cần trả lời:

- Kết quả phát hiện được là gì?
- Kết quả có ý nghĩa gì trong bối cảnh nghiệp vụ?
- Đối tượng ra quyết định có thể làm gì từ kết quả này?
- Có những hạn chế nào?
- Có rủi ro đạo đức, thiên lệch hoặc quyền riêng tư nào?
- Hướng phát triển tiếp theo là gì?

Ví dụ:

> Nhóm khách hàng có tần suất mua cao nhưng giá trị đơn hàng thấp có thể được áp dụng chính sách bán chéo sản phẩm hoặc chương trình tích điểm.

***

# 5. Đề tài phân công cho các nhóm

***

## Đề tài 1 — Dự báo khách hàng đăng ký tiền gửi có kỳ hạn

### Bộ dữ liệu

**UCI Bank Marketing Dataset**

Nguồn dữ liệu:

https://archive.ics.uci.edu/dataset/222/bank+marketing

Bộ dữ liệu liên quan đến các chiến dịch tiếp thị trực tiếp của một tổ chức ngân hàng Bồ Đào Nha. Mục tiêu là dự báo khách hàng có đăng ký tiền gửi có kỳ hạn hay không. [archive.ics.uci](https://archive.ics.uci.edu/dataset/222/bank+marketing)

### Bài toán nghiệp vụ

Ngân hàng muốn xác định khách hàng có khả năng đăng ký tiền gửi có kỳ hạn để ưu tiên liên hệ trong chiến dịch tiếp thị.

### Tác vụ khai phá dữ liệu

- Phân lớp nhị phân
- Đánh giá mô hình dự báo
- Phân tích đặc trưng khách hàng
- Thiết kế kho dữ liệu chiến dịch tiếp thị

### Biến mục tiêu

`y`

- `yes`: Khách hàng đăng ký tiền gửi có kỳ hạn
- `no`: Khách hàng không đăng ký

### Câu hỏi nghiên cứu

- Những yếu tố nào ảnh hưởng đến khả năng khách hàng đăng ký tiền gửi?
- Cây quyết định và Naive Bayes khác nhau như thế nào về hiệu năng và khả năng diễn giải?
- Mô hình nào phù hợp hơn để hỗ trợ chiến dịch tiếp thị?
- Nếu ngân hàng chỉ liên hệ nhóm khách hàng có xác suất cao, chiến lược ưu tiên nên là gì?

### Yêu cầu riêng

- So sánh tối thiểu 03 mô hình.
- Bắt buộc có Decision Tree và Naive Bayes.
- Có thể bổ sung Logistic Regression, Random Forest hoặc Neural Network.
- Phân tích vấn đề mất cân bằng lớp.
- Không chỉ sử dụng Accuracy để đánh giá.
- Phân tích biến `duration`.
- So sánh mô hình có biến `duration` và mô hình không có biến `duration`.
- Giải thích vì sao `duration` có thể gây rò rỉ dữ liệu.
- Thiết kế kho dữ liệu gồm fact chiến dịch và các dimension khách hàng, thời gian, kênh liên hệ, kết quả chiến dịch.

### Sản phẩm cần có

- Bảng mô tả dữ liệu
- Báo cáo tiền xử lý
- Cây quyết định trực quan
- Bảng so sánh mô hình
- Confusion Matrix
- ROC Curve hoặc PR Curve
- Danh sách nhóm khách hàng ưu tiên
- Khuyến nghị chiến dịch tiếp thị
- Sơ đồ kho dữ liệu

***

## Đề tài 2 — Phân khúc khách hàng và luật mua kèm trong bán lẻ trực tuyến

### Bộ dữ liệu

**UCI Online Retail Dataset**

Nguồn dữ liệu:

https://archive.ics.uci.edu/dataset/352/online+retail

Bộ dữ liệu chứa các giao dịch của một doanh nghiệp bán lẻ trực tuyến tại Anh trong giai đoạn từ ngày 01/12/2010 đến ngày 09/12/2011. [archive.ics.uci](https://archive.ics.uci.edu/dataset/352/online+retail)

### Bài toán nghiệp vụ

Doanh nghiệp muốn:

- Phân khúc khách hàng
- Xác định nhóm khách hàng có giá trị cao
- Phát hiện các sản phẩm thường được mua cùng nhau
- Đề xuất chiến lược bán chéo và chăm sóc khách hàng

### Tác vụ khai phá dữ liệu

- Phân cụm khách hàng
- Phân tích RFM
- Khai phá luật kết hợp
- Thiết kế kho dữ liệu bán lẻ

### Câu hỏi nghiên cứu

- Có thể phân khách hàng thành những nhóm nào dựa trên RFM?
- Nhóm khách hàng nào có giá trị cao nhất?
- Các nhóm khách hàng có khác nhau về doanh thu, tần suất mua và giá trị đơn hàng không?
- Sản phẩm nào thường được mua cùng nhau?
- Luật mua kèm nào có ý nghĩa đối với hoạt động bán chéo?

### Yêu cầu riêng

- Xử lý hóa đơn bị hủy hoặc trả hàng.
- Kiểm tra số lượng âm, số lượng bằng 0 hoặc giá trị đơn giá không hợp lệ.
- Xử lý mô tả sản phẩm bị thiếu.
- Tạo các biến RFM:

| Biến | Ý nghĩa |
|---|---|
| Recency | Số ngày kể từ lần mua gần nhất |
| Frequency | Số lần mua hàng |
| Monetary | Tổng giá trị mua hàng |

- Áp dụng K-means.
- Áp dụng thêm Hierarchical Clustering hoặc DBSCAN.
- Báo cáo Silhouette Score.
- Giải thích cách chọn số cụm.
- Đặt tên và mô tả từng cụm khách hàng.
- Tạo ma trận giao dịch theo hóa đơn.
- Áp dụng Apriori hoặc FP-Growth.
- Báo cáo support, confidence và lift.
- Lọc các luật dư thừa hoặc không có ý nghĩa nghiệp vụ.
- Thiết kế kho dữ liệu dạng sao cho giao dịch bán lẻ.

### Sản phẩm cần có

- Dashboard hoặc bảng RFM
- Biểu đồ phân bố RFM
- Biểu đồ Elbow Method
- Biểu đồ Silhouette Score
- Biểu đồ cụm khách hàng
- Hồ sơ từng cụm
- Tối thiểu 10 luật kết hợp có diễn giải
- Sơ đồ kho dữ liệu bán lẻ
- Tối thiểu 03 khuyến nghị marketing hoặc bán chéo

***

## Đề tài 3 — Dự báo ý định mua hàng trong thương mại điện tử

### Bộ dữ liệu

**UCI Online Shoppers Purchasing Intention Dataset**

Nguồn dữ liệu:

https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset

Bộ dữ liệu gồm 12.330 phiên truy cập website thương mại điện tử, với 10 thuộc tính số và 8 thuộc tính phân loại. Biến mục tiêu là `Revenue`; trong đó 10.422 phiên không mua hàng và 1.908 phiên có mua hàng. [archive.ics.uci](https://archive.ics.uci.edu/ml/datasets/Online+Shoppers+Purchasing+Intention+dataset)

### Bài toán nghiệp vụ

Doanh nghiệp thương mại điện tử muốn dự báo liệu một phiên truy cập có khả năng tạo doanh thu hay không, từ đó hỗ trợ:

- Cá nhân hóa trải nghiệm
- Kích hoạt ưu đãi
- Phân bổ ngân sách quảng cáo
- Tăng tỷ lệ chuyển đổi

### Tác vụ khai phá dữ liệu

- Phân lớp nhị phân
- Phân tích hành vi khách hàng
- Đánh giá dữ liệu mất cân bằng
- Diễn giải các yếu tố ảnh hưởng đến chuyển đổi

### Biến mục tiêu

`Revenue`

- `TRUE`: Phiên truy cập tạo ra doanh thu
- `FALSE`: Phiên truy cập không tạo ra doanh thu

### Câu hỏi nghiên cứu

- Những đặc điểm hành vi nào phân biệt phiên mua hàng và không mua hàng?
- Thời lượng truy cập, số trang xem, Bounce Rate và Exit Rate có vai trò như thế nào?
- Mô hình nào tốt hơn giữa Decision Tree, Naive Bayes và Neural Network?
- Khi dữ liệu mất cân bằng, nên ưu tiên Precision hay Recall?
- Ngưỡng dự báo nào phù hợp nếu doanh nghiệp muốn hạn chế bỏ sót khách hàng tiềm năng?

### Yêu cầu riêng

- Thực hiện EDA theo biến `Revenue`.
- Phân tích theo tháng, loại khách truy cập, cuối tuần và các biến hành vi.
- Mã hóa biến phân loại.
- Chuẩn hóa biến số khi cần.
- Phân tích mất cân bằng lớp.
- So sánh tối thiểu 03 mô hình.
- Bắt buộc gồm:

  - Decision Tree
  - Naive Bayes
  - MLP Neural Network

- Báo cáo:

  - Confusion Matrix
  - Precision
  - Recall
  - F1-score
  - ROC-AUC
  - PR-AUC

- Giải thích đánh đổi giữa Precision và Recall.
- Đề xuất ít nhất 02 chân dung phiên truy cập có khả năng mua cao.

### Sản phẩm cần có

- Biểu đồ phân bố lớp `Revenue`
- Báo cáo EDA
- Bảng so sánh mô hình
- Confusion Matrix
- ROC Curve
- Precision-Recall Curve
- Cây quyết định hoặc các quy tắc phân loại có diễn giải
- Khuyến nghị về cá nhân hóa hoặc kích hoạt ưu đãi

***

## Đề tài 4 — Phân cụm và dự báo chất lượng rượu vang

### Bộ dữ liệu

**UCI Wine Quality Dataset**

Nguồn dữ liệu:

https://archive.ics.uci.edu/dataset/186/wine+quality

Bộ dữ liệu gồm hai tập dữ liệu về rượu vang đỏ và rượu vang trắng Vinho Verde của Bồ Đào Nha. Các biến đầu vào là chỉ tiêu hóa lý; biến `quality` thể hiện chất lượng rượu vang. [archive.ics.uci](https://archive.ics.uci.edu/dataset/186/wine+quality)

### Bài toán nghiệp vụ

Nhà sản xuất rượu vang muốn:

- Phân tích các nhóm sản phẩm theo đặc tính hóa lý
- Phân biệt các phân khúc chất lượng
- Xây dựng mô hình hỗ trợ kiểm soát chất lượng
- Xác định những chỉ tiêu hóa lý có liên quan đến chất lượng

### Tác vụ khai phá dữ liệu

- Phân cụm dữ liệu
- Phân lớp đa lớp
- Phân tích chất lượng dữ liệu
- Trực quan hóa giảm chiều

### Câu hỏi nghiên cứu

- Các mẫu rượu vang hình thành những cụm hóa lý nào?
- Các cụm có khác nhau về chất lượng và loại rượu vang không?
- Có thể phân loại chất lượng thấp, trung bình và cao dựa vào đặc tính hóa lý không?
- Chỉ tiêu nào có ý nghĩa nhất đối với kiểm soát chất lượng?

### Yêu cầu riêng

- Kết hợp hai tệp dữ liệu vang đỏ và vang trắng.
- Tạo biến `wine_type`.
- Kiểm tra khác biệt về thang đo và phân bố dữ liệu.
- Kiểm tra dữ liệu bất thường.
- Áp dụng K-means.
- Áp dụng thêm Hierarchical Clustering hoặc DBSCAN.
- Báo cáo Silhouette Score.
- Giải thích cách chọn số cụm.
- Rời rạc hóa biến `quality` thành ba lớp:

| Nhóm chất lượng | Điều kiện gợi ý |
|---|---|
| Thấp | `quality <= 5` |
| Trung bình | `quality = 6` |
| Cao | `quality >= 7` |

- Nếu dùng ngưỡng khác, nhóm phải giải thích rõ.
- So sánh tối thiểu 03 mô hình phân lớp.
- Bắt buộc có Decision Tree, Naive Bayes và MLP Neural Network.
- Dùng PCA hoặc phương pháp giảm chiều phù hợp để trực quan hóa cụm.
- Lưu ý: PCA chỉ hỗ trợ trực quan hóa, không thay thế đánh giá định lượng.

### Sản phẩm cần có

- Báo cáo tiền xử lý
- Biểu đồ PCA hai chiều
- Biểu đồ cụm
- Bảng mô tả đặc trưng của từng cụm
- Bảng so sánh mô hình phân lớp
- Cây quyết định hoặc biểu đồ biến quan trọng
- Khuyến nghị kiểm soát chất lượng rượu vang

***

## Đề tài 5 — Phân tích và dự báo mức thu nhập từ dữ liệu điều tra dân số

### Bộ dữ liệu

**UCI Adult Census Income Dataset**

Nguồn dữ liệu:

https://archive.ics.uci.edu/dataset/2/adult

Bộ dữ liệu được sử dụng để dự báo liệu thu nhập hằng năm của một cá nhân có vượt quá 50.000 USD hay không.

### Bài toán nghiệp vụ

Mục tiêu là xây dựng mô hình dự báo mức thu nhập và phân tích nguy cơ thiên lệch của mô hình đối với các nhóm dân số khác nhau.

### Tác vụ khai phá dữ liệu

- Phân lớp nhị phân
- Tiền xử lý dữ liệu
- Đánh giá hiệu năng theo nhóm
- Phân tích rủi ro thiên lệch và đạo đức dữ liệu

### Biến mục tiêu

`income`

- `<=50K`: Thu nhập không vượt quá 50.000 USD
- `>50K`: Thu nhập vượt quá 50.000 USD

### Câu hỏi nghiên cứu

- Những đặc điểm kinh tế-xã hội nào liên quan đến khả năng có thu nhập trên 50.000 USD?
- Cây quyết định, Naive Bayes và Neural Network khác nhau như thế nào?
- Hiệu năng mô hình có khác nhau giữa các nhóm giới tính, độ tuổi hoặc chủng tộc không?
- Có những rủi ro đạo đức nào khi dùng mô hình dự báo thu nhập trong thực tế?

### Yêu cầu riêng

- Xử lý ký hiệu `?` như dữ liệu thiếu.
- So sánh tác động của hai phương án:

  - Loại bỏ các dòng có dữ liệu thiếu
  - Bù dữ liệu thiếu

- Mã hóa biến phân loại.
- Chuẩn hóa biến số khi cần.
- Phân tích mất cân bằng lớp.
- So sánh tối thiểu 03 mô hình:

  - Decision Tree
  - Naive Bayes
  - MLP Neural Network

- Báo cáo Precision, Recall, F1-score, ROC-AUC và PR-AUC.
- Phân tích hiệu năng mô hình theo ít nhất hai nhóm thuộc tính nhân khẩu học:

  - `sex`
  - `race`
  - `age_group`

- Không được suy diễn kết quả mô hình thành kết luận nhân quả về cá nhân hoặc nhóm người.
- Nêu rõ giới hạn đạo đức, nguy cơ thiên lệch và nguy cơ sử dụng mô hình trong các quyết định có tác động cao.

### Sản phẩm cần có

- Báo cáo chất lượng dữ liệu
- Bảng so sánh mô hình
- Cây quyết định có diễn giải
- Phân tích hiệu năng theo nhóm
- Thảo luận về công bằng thuật toán
- Khuyến nghị về sử dụng mô hình có trách nhiệm

***

# 6. Cấu trúc báo cáo cuối kỳ

Báo cáo dài từ **15 đến 25 trang nội dung chính**, không tính phụ lục. Báo cáo nộp dưới dạng PDF.

## 6.1. Trang bìa

Bao gồm:

- Tên trường hoặc khoa
- Tên học phần: Khai phá dữ liệu
- Mã học phần: STA5009N
- Tên đề tài
- Tên giảng viên
- Danh sách thành viên
- Mã số học viên
- Lớp hoặc khóa học
- Thời gian thực hiện

***

## 6.2. Tóm tắt điều hành

Độ dài từ 150 đến 250 từ.

Cần nêu:

- Bài toán
- Dữ liệu
- Phương pháp chính
- Kết quả nổi bật
- Khuyến nghị quan trọng

***

## 6.3. Giới thiệu bài toán

Cần trình bày:

- Bối cảnh
- Vấn đề nghiệp vụ
- Mục tiêu dự án
- Câu hỏi nghiên cứu
- Phạm vi nghiên cứu
- Tiêu chí thành công

***

## 6.4. Dữ liệu và hiểu dữ liệu

Cần trình bày:

- Nguồn dữ liệu
- Đơn vị quan sát
- Số lượng quan sát
- Số lượng biến
- Từ điển dữ liệu
- Chất lượng dữ liệu
- Dữ liệu thiếu
- Dữ liệu trùng
- Dữ liệu bất thường
- Trực quan hóa dữ liệu
- Hạn chế dữ liệu

***

## 6.5. Thiết kế dữ liệu hoặc kho dữ liệu

Cần trình bày:

- Sơ đồ dữ liệu phân tích
- Sơ đồ kho dữ liệu dạng sao hoặc bông tuyết nếu phù hợp
- Fact table
- Dimension tables
- Grain
- Khóa
- Measures
- Quy tắc ETL cơ bản

***

## 6.6. Tiền xử lý dữ liệu

Cần trình bày:

- Các bước tiền xử lý
- Quy tắc xử lý
- Số quan sát trước và sau xử lý
- Biến tạo mới
- Mã hóa dữ liệu
- Chuẩn hóa dữ liệu
- Xử lý mất cân bằng lớp
- Kiểm soát rò rỉ dữ liệu

***

## 6.7. Phương pháp khai phá dữ liệu

Cần trình bày:

- Thuật toán sử dụng
- Lý do chọn thuật toán
- Tham số mô hình
- Cách chia dữ liệu
- Cross-validation
- Baseline
- Thước đo đánh giá

***

## 6.8. Kết quả và đánh giá

Cần trình bày:

- Kết quả từng mô hình hoặc phương pháp
- Bảng so sánh
- Biểu đồ trực quan
- Đánh giá định lượng
- Phân tích lỗi
- Phân tích độ ổn định của cụm hoặc luật
- Lựa chọn phương án cuối cùng

***

## 6.9. Hàm ý quản trị

Cần trình bày:

- Các phát hiện quan trọng
- Ý nghĩa nghiệp vụ
- Khuyến nghị hành động
- Đối tượng áp dụng
- Thứ tự ưu tiên hành động
- Điều kiện áp dụng

***

## 6.10. Hạn chế và đạo đức dữ liệu

Cần trình bày:

- Hạn chế dữ liệu
- Hạn chế phương pháp
- Khả năng khái quát hóa
- Nguy cơ thiên lệch
- Quyền riêng tư
- Rủi ro sử dụng mô hình
- Hướng cải tiến

***

## 6.11. Kết luận

Tóm tắt:

- Bài toán đã giải quyết
- Kết quả chính
- Mô hình hoặc phương pháp được chọn
- Khuyến nghị quan trọng
- Hướng phát triển tiếp theo

***

## 6.12. Tài liệu tham khảo

Trích dẫn theo một chuẩn thống nhất, ví dụ APA hoặc IEEE.

***

## 6.13. Phụ lục

Bao gồm:

- Bảng biến đầy đủ
- Workflow
- Siêu tham số mô hình
- Hình hoặc bảng bổ sung
- Phân công công việc nhóm
- Đường dẫn mã nguồn
- Đường dẫn dữ liệu
- Ghi chú sử dụng công cụ AI nếu có

***

# 7. Cấu trúc slide bảo vệ

Slide nên có từ **12 đến 16 slide**, không tính slide phụ lục.

Thời lượng gợi ý:

- Trình bày: 12 đến 15 phút
- Hỏi đáp: 05 đến 07 phút

## Cấu trúc gợi ý

1. Trang tiêu đề và thành viên nhóm
2. Bối cảnh, bài toán nghiệp vụ và mục tiêu
3. Dữ liệu: nguồn, quy mô và đơn vị quan sát
4. Chất lượng dữ liệu và tiền xử lý
5. Phân tích khám phá dữ liệu: các phát hiện chính
6. Thiết kế dữ liệu hoặc kho dữ liệu
7. Phương pháp và thiết kế thực nghiệm
8. Kết quả mô hình, phân cụm hoặc luật kết hợp
9. So sánh các phương án
10. Lựa chọn phương án cuối cùng
11. Diễn giải theo góc độ nghiệp vụ
12. Khuyến nghị hành động
13. Hạn chế, đạo đức và hướng phát triển
14. Kết luận
15. Slide hỏi đáp

## Nguyên tắc thiết kế slide

- Mỗi slide nên có một thông điệp chính.
- Mỗi biểu đồ phải có tiêu đề nêu kết luận.
- Không đưa quá nhiều chữ vào một slide.
- Không dán toàn bộ bảng dữ liệu hoặc mã nguồn lên slide.
- Biểu đồ phải có đơn vị, nhãn trục và chú thích rõ ràng.
- Mọi thành viên phải có trách nhiệm trình bày và trả lời câu hỏi.
- Nhóm phải chuẩn bị slide phụ lục để trả lời câu hỏi về dữ liệu, mô hình và tham số.

***

# 8. Thành phần nộp bài

Tên tệp nén:

```text
STA5009N_NhomXX_TenNganGon.zip
```

Cấu trúc thư mục nộp bài:

```text
STA5009N_NhomXX_TenNganGon/
├── README.md
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
│   └── analysis.ipynb
├── src/
│   └── source_code.py
├── outputs/
│   ├── figures/
│   ├── tables/
│   └── models/
├── reports/
│   └── Bao_cao_cuoi_ky.pdf
├── slides/
│   └── Slide_bao_ve.pdf
└── references/
```

## Yêu cầu đối với README.md

Tệp `README.md` phải có:

- Tên đề tài
- Thành viên nhóm
- Mục tiêu dự án
- Nguồn dữ liệu
- Ngày truy cập dữ liệu
- Hướng dẫn cài đặt môi trường
- Danh sách thư viện
- Hướng dẫn chạy mã nguồn
- Thứ tự chạy notebook hoặc chương trình
- Cấu trúc thư mục
- Cách tái lập bảng và hình quan trọng
- Phân công công việc và mức độ đóng góp của từng thành viên

***

# 9. Tiêu chí chấm điểm cuối kỳ

| Tiêu chí | Tỷ trọng | Dấu hiệu đạt tốt |
|---|---:|---|
| Xác định vấn đề và hiểu dữ liệu | 10% | Xác định rõ câu hỏi nghiệp vụ, đơn vị quan sát, mục tiêu và giới hạn dữ liệu |
| Tiền xử lý và thiết kế dữ liệu | 20% | Xử lý dữ liệu minh bạch, hợp lý; có kiểm soát rò rỉ; thiết kế dữ liệu hoặc kho dữ liệu đúng |
| Lựa chọn và triển khai phương pháp | 15% | Phương pháp phù hợp, có baseline, có đối chứng và có khả năng tái lập |
| Đánh giá kỹ thuật | 20% | Dùng thước đo phù hợp, so sánh có căn cứ, phân tích sai số hoặc độ ổn định |
| Diễn giải và khuyến nghị | 15% | Chuyển kết quả thành insight và hành động có ý nghĩa quản trị |
| Báo cáo, slide và bảo vệ | 10% | Báo cáo rõ, slide trực quan, thuyết trình logic, trả lời được câu hỏi |
| Làm việc nhóm và đóng góp cá nhân | 10% | Vai trò minh bạch, đóng góp cân bằng, mỗi thành viên nắm phần việc của mình |
| **Tổng cộng** | **100%** |  |

***

# 10. Mốc thực hiện gợi ý

| Mốc | Sản phẩm cần hoàn thành |
|---|---|
| Sau khi nhận đề tài | Danh sách nhóm, vai trò thành viên, mô tả bài toán và kế hoạch thực hiện |
| Giai đoạn 1 | Từ điển dữ liệu, EDA sơ bộ, nhận diện vấn đề chất lượng dữ liệu |
| Giai đoạn 2 | Tiền xử lý, thiết kế dữ liệu hoặc kho dữ liệu, thử nghiệm mô hình đầu tiên |
| Giai đoạn 3 | So sánh mô hình hoặc đánh giá cụm, luật kết hợp; lựa chọn phương án cuối cùng |
| Trước bảo vệ | Hoàn thiện báo cáo, slide, mã nguồn, README và bảng phân công |
| Buổi bảo vệ | Thuyết trình, trả lời phản biện và nộp phiên bản cuối |

***

# 11. Tài liệu học tập gợi ý

- Lê Văn Phùng (2017), *Khai phá dữ liệu*, NXB Thông tin và Truyền Thông.
- Shmueli, G., Bruce, P. C., Stephens, M. L., & Patel, N. R. (2017), *Data Mining for Business Analytics: Concepts, Techniques, and Applications with JMP Pro*, Wiley.
- Han, J., Kamber, M., & Pei, J. (2011), *Data Mining: Concepts and Techniques*, 3rd Edition, Morgan Kaufmann.
- UCI Machine Learning Repository: nguồn dữ liệu chính thức cho các đề tài được phân công. [archive.ics.uci](https://archive.ics.uci.edu/dataset/222/bank+marketing)

***

# 12. Cam kết học thuật

Nhóm chịu trách nhiệm về tính trung thực của dữ liệu, mã nguồn, phân tích, kết quả và trích dẫn trong dự án.

Công cụ AI có thể được sử dụng để hỗ trợ diễn đạt, gợi ý cấu trúc, kiểm tra mã hoặc hỗ trợ học tập. Tuy nhiên, AI không thay thế trách nhiệm của học viên trong việc hiểu dữ liệu, thiết kế thí nghiệm, lựa chọn phương pháp, đánh giá kết quả và diễn giải kết quả.

Nếu có sử dụng công cụ AI, nhóm cần ghi ngắn gọn phạm vi sử dụng trong phần phụ lục của báo cáo.