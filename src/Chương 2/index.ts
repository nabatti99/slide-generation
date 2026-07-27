import { SlideGenerator } from "../slide-generator.ts";

import "./slides/Giới thiệu.ts";
import "./slides/2.1. Tổng quan nhận biết dữ liệu và tiền xử lý dữ liệu/Mở đầu.ts";
import "./slides/2.1. Tổng quan nhận biết dữ liệu và tiền xử lý dữ liệu/2.1.1. Nội dung.ts";
import "./slides/2.1. Tổng quan nhận biết dữ liệu và tiền xử lý dữ liệu/2.1.2. Nội dung.ts";
import "./slides/2.2. Các phương pháp nhận biết dữ liệu/Mở đầu.ts";
import "./slides/2.2. Các phương pháp nhận biết dữ liệu/2.2.1. Mô tả thống kê cơ bản.ts";
import "./slides/2.2. Các phương pháp nhận biết dữ liệu/2.2.2. Trực quan dữ liệu.ts";

// Always import the END slide at the end of the presentation
import "./slides/Kết thúc.ts";

SlideGenerator.save("Chương 2 - Dữ liệu và tiền xử lý dữ liệu.pptx");
