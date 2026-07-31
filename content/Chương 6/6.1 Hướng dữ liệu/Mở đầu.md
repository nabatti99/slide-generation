# Giới thiệu mục 6.1

## Slide 6 — SECTION

**Tiêu đề**

> **6.1. HƯỚNG DỮ LIỆU**
> Khai phá các loại dữ liệu phức tạp (Mining Complex Data Types)

**Đề từ**

> "We are data rich, but information poor" — và ngày nay phần lớn dữ liệu giàu nhất lại KHÔNG nằm trong bảng.

***

## Slide 7 — CONTENT

**Tiêu đề**

> **HƯỚNG DỮ LIỆU LÀ GÌ?**

**Nội dung dạng list**

- Là hướng nghiên cứu phát triển kỹ thuật khai phá **theo đặc thù của từng loại dữ liệu**, thay vì giả định mọi dữ liệu đều là bảng quan hệ.
- Động lực: trong nền kinh tế số, giá trị dữ liệu nằm ở chuỗi giao dịch — giá cả theo thời gian, mạng quan hệ khách hàng — nhà cung cấp — đối tác, và khối văn bản khổng lồ từ mạng xã hội, review, tin tức.
- **Nguyên tắc vàng:** biến đổi dữ liệu phức tạp về dạng khai phá được (chuỗi → đặc trưng; mạng → chỉ số; văn bản → ma trận số), rồi **tái sử dụng các kỹ thuật đã học ở Ch.3–5**.

*Hình minh hoạ: pipeline "dữ liệu phức tạp → biểu diễn số → phân lớp/phân cụm/luật kết hợp"*

***

## Slide 8 — CONTENT

**Tiêu đề**

> **BA LOẠI DỮ LIỆU PHỨC TẠP — BẢNG SO SÁNH**

**Nội dung dạng bảng**

| Loại | Đặc điểm | Ví dụ kinh tế | Bài toán & công cụ |
|---|---|---|---|
| Chuỗi (6.1.1) | *Thứ tự* quan trọng | Giá VN-Index, chuỗi mua hàng Shopee | Dự báo, mẫu tuần tự — statsmodels, pmdarima |
| Đồ thị/mạng (6.1.2) | *Quan hệ* giữa đối tượng | Mạng sở hữu chéo ngân hàng, mạng KOL | Centrality, cộng đồng, link prediction — networkx |
| Văn bản & loại khác (6.1.3) | *Phi cấu trúc* | Review Tiki/Shopee, tin tức tài chính | Phân tích cảm xúc, phân loại — underthesea, scikit-learn |

**Ghi chú giảng dạy**

Đây là slide "xương sống" của mục 6.1 — nên in làm handout ôn tập; khi dạy đến mục con nào thì quay lại tô đậm dòng tương ứng.

***

## Slide 9 — CONTENT

**Tiêu đề**

> **LỘ TRÌNH MỤC 6.1 — QUAY LẠI TÌNH HUỐNG MỞ ĐẦU**

**Nội dung dạng list**

- 6.1.1 Dữ liệu chuỗi → giải quyết **Nguồn 1** (dự báo VN-Index) — demo Python: ARIMA.
- 6.1.2 Đồ thị & mạng → giải quyết **Nguồn 2** (mạng sở hữu chéo) — demo Python: centrality với networkx.
- 6.1.3 Văn bản & loại khác → giải quyết **Nguồn 3** (sentiment review) — demo Python: TF-IDF + phân loại cảm xúc tiếng Việt.
- Cấu trúc mỗi mục: Khái niệm → Kỹ thuật → Ví dụ Việt Nam → Bài tập thực hành.

*Hình minh hoạ: sơ đồ 3 nguồn dữ liệu ở Slide 3, gắn nhãn 6.1.1/6.1.2/6.1.3 vào từng nguồn*

***