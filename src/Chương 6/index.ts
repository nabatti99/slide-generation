import { SlideGenerator } from "../slide-generator.ts";

import "./slides/Giới thiệu.ts";
import "./slides/6.1 Hướng dữ liệu/Mở đầu.ts";
import "./slides/6.1 Hướng dữ liệu/6.1.1 Khai phá dữ liệu chuỗi.ts";
import "./slides/6.1 Hướng dữ liệu/6.1.2 Khai phá dữ liệu đồ thị và mạng.ts";
import "./slides/6.1 Hướng dữ liệu/6.1.3 Khai phá dữ liệu văn bản và các loại dữ liệu khác.ts";

import "./slides/6.2 Hướng kỹ thuật/Mở đầu.ts";
import "./slides/6.2 Hướng kỹ thuật/6.2.1 Khai phá dữ liệu thống kê.ts";
import "./slides/6.2 Hướng kỹ thuật/6.2.2 Nền tảng lý thuyết của khai phá dữ liệu.ts";
import "./slides/6.2 Hướng kỹ thuật/6.2.3 Khai phá dữ liệu trực quan và âm thanh.ts";
import "./slides/6.2 Hướng kỹ thuật/6.2.4 Tích hợp học máy và học sâu hiện đại.ts";

import "./slides/6.3 Hướng ứng dụng/Mở đầu.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.1 Khai phá dữ liệu trong phân tích tài chính.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.2 Khai phá dữ liệu trong bán lẻ và viễn thông.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.3 Khai phá dữ liệu trong khoa học và kỹ thuật.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.4 Khai phá dữ liệu trong phát hiện xâm nhập.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.5 Khai phá dữ liệu và hệ thống gợi ý.ts";
import "./slides/6.3 Hướng ứng dụng/6.3.6 Khai phá dữ liệu và xã hội.ts";

import "./slides/6.4 Tổng kết/Mở đầu.ts";
import "./slides/6.4 Tổng kết/6.4.1 Tổng kết 3 hướng nghiên cứu.ts";
import "./slides/6.4 Tổng kết/6.4.2 Xu hướng phát triển tương lai của khai phá dữ liệu.ts";
import "./slides/6.4 Tổng kết/6.4.3 Câu hỏi thảo luận.ts";

// Always import the END slide at the end of the presentation
import "./slides/Kết thúc.ts";

try { SlideGenerator.save("Chương 6 - Các hướng nghiên cứu trong khai phá dữ liệu.pptx"); } catch (e) {}
try { SlideGenerator.save("Chương 6 - Các hướng nghiên cứu trong khai phá dữ liệu (MỚI NHẤT).pptx"); } catch (e) {}
SlideGenerator.save("Chương 6 - Các hướng nghiên cứu trong khai phá dữ liệu (vFinal).pptx");
