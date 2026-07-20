Dưới đây là phần giải thích chi tiết đã được lược bỏ đánh số thứ tự:

## Git Introduction (Giới thiệu về Git)

**Git là gì?**
Git là một Hệ thống Quản lý Phiên bản Phân tán (Distributed Version Control System - DVCS). Nó được thiết kế để theo dõi sự thay đổi trong các tệp tin (thường là mã nguồn) và điều phối công việc giữa nhiều người lập trình cùng làm việc trên một dự án.

**Đặc điểm cốt lõi:**

* **Phân tán (Distributed):** Mỗi lập trình viên không chỉ có một bản sao của mã nguồn hiện tại mà còn có toàn bộ lịch sử thay đổi (repository) ngay trên máy cá nhân của họ. Dù máy chủ có sập, bất kỳ bản sao nào ở máy cá nhân cũng có thể dùng để khôi phục.
* **Snapshot, không phải Difference:** Khác với các hệ thống cũ lưu trữ sự thay đổi của từng dòng code, Git coi dữ liệu giống như một tập hợp các "ảnh chụp nhanh" (snapshots). Mỗi lần bạn lưu trữ (commit), Git sẽ chụp lại toàn bộ trạng thái hệ thống tệp tại thời điểm đó.
* **Các trạng thái chính của Git:**
* **Working Directory (Thư mục làm việc):** Nơi bạn trực tiếp chỉnh sửa các tệp tin.
* **Staging Area (Vùng chờ):** Nơi chứa các tệp tin đã được đánh dấu để chuẩn bị lưu vào lịch sử ở lần commit tiếp theo.
* **Git Directory / Repository (Kho lưu trữ):** Nơi Git lưu trữ siêu dữ liệu và cơ sở dữ liệu đối tượng (lịch sử commit).



---

## Git Basic (Các thao tác cơ bản)

Đây là quy trình làm việc và các lệnh bạn sẽ sử dụng hàng ngày:

* **Khởi tạo kho lưu trữ mới:**
`git init` (Biến một thư mục bình thường thành một Git repository).
* **Sao chép kho lưu trữ có sẵn:**
`git clone <url>` (Tải toàn bộ source code và lịch sử từ server như GitHub/GitLab về máy).
* **Kiểm tra trạng thái:**
`git status` (Xem tệp nào bị thay đổi, tệp nào đang ở Staging Area).
* **Thêm tệp vào Staging Area:**
`git add <tên-tệp>` hoặc `git add .` (Thêm tất cả các thay đổi).
* **Ghi lại thay đổi (Commit):**
`git commit -m "Tin nhắn mô tả thay đổi"` (Đóng gói các tệp trong Staging Area thành một snapshot lưu vào lịch sử).
* **Xem lịch sử thay đổi:**
`git log` (Liệt kê danh sách các commit trước đó).
* **Đẩy / Kéo code từ Server (Remote):**
* `git push`: Đẩy các commit từ máy tính của bạn lên server.
* `git pull`: Lấy code mới nhất từ server về và gộp vào code trên máy bạn.



---

## Branching (Nhánh)

**Nhánh là gì?**
Branching là khả năng rẽ nhánh để làm việc trên một tính năng mới, sửa lỗi, hoặc thử nghiệm mà không làm ảnh hưởng đến luồng code chính (thường gọi là nhánh `main` hoặc `master`).

Hãy tưởng tượng nhánh như một vũ trụ song song, nơi bạn có thể thoải mái code. Khi code hoàn thiện và chạy tốt, bạn mới đưa nó trở lại vũ trụ chính.

**Các lệnh cơ bản về nhánh:**

* **Tạo nhánh mới:** `git branch <tên-nhánh>`
* **Chuyển sang nhánh khác:** `git checkout <tên-nhánh>` hoặc lệnh mới hơn là `git switch <tên-nhánh>`
* **Vừa tạo vừa chuyển sang nhánh mới:** `git checkout -b <tên-nhánh>` hoặc `git switch -c <tên-nhánh>`
* **Xem danh sách các nhánh:** `git branch`
* **Xóa nhánh:** `git branch -d <tên-nhánh>`

---

## Git rebase & Git merge (Gộp nhánh)

Khi bạn làm việc xong trên một nhánh phụ và muốn đưa code vào nhánh chính, bạn có hai cách: **Merge** hoặc **Rebase**. Mặc dù mục đích cuối cùng giống nhau, nhưng cách Git xử lý lịch sử lại hoàn toàn khác biệt.

### Git Merge

* **Cách hoạt động:** Git sẽ lấy nhánh của bạn và nhánh chính, tìm điểm chung gần nhất, và tạo ra một **Merge Commit** mới. Commit này kết nối lịch sử của cả hai nhánh lại với nhau.
* **Lệnh sử dụng:** Đang ở nhánh `main`, chạy `git merge <tên-nhánh-phụ>`.
* **Ưu điểm:** Tôn trọng hoàn toàn lịch sử gốc. Không có commit nào bị thay đổi hay phá hủy. Bạn thấy rõ quá trình phân nhánh và gộp nhánh diễn ra khi nào.
* **Nhược điểm:** Nếu dự án có nhiều người làm và gộp liên tục, biểu đồ lịch sử (git tree) sẽ rất rối rắm, chằng chịt các đường nối và đầy các commit có nội dung *"Merge branch X into Y"*.

### Git Rebase

* **Cách hoạt động:** Thay vì tạo ra một commit gộp, Rebase sẽ "bứng" toàn bộ các commit mới của nhánh phụ và "đắp" chúng lên trên đỉnh của nhánh chính. Git làm điều này bằng cách tạo ra các *commit hoàn toàn mới* có nội dung y hệt các commit cũ.
* **Lệnh sử dụng:** Đang ở nhánh phụ, chạy `git rebase main`. (Sau đó về `main` chạy `git merge` để fast-forward).
* **Ưu điểm:** Tạo ra một lịch sử dự án là một đường thẳng tắp, sạch sẽ, không có các nhánh rẽ ngang rẽ dọc hay các merge commit dư thừa. Rất dễ để đọc lịch sử bằng `git log`.
* **Nhược điểm:** **Rebase viết lại lịch sử (Rewrite history).**
* **Nguyên tắc vàng của Rebase:** KHÔNG BAO GIỜ được rebase các nhánh public (nhánh đã push lên server mà người khác đang cùng sử dụng). Nếu bạn thay đổi lịch sử mà người khác đã tải về, nó sẽ gây ra sự hỗn loạn nghiêm trọng cho toàn đội. Chỉ dùng Rebase cho nhánh cá nhân (local branch) của bạn trước khi gộp vào nhánh chung.
### `git fetch` (Tải về nhưng "để đó nhìn")

**`git fetch`** sẽ kết nối với remote repository, tải toàn bộ các commit, file, và thông tin nhánh (branch) mới nhất về máy , nhưng nó **KHÔNG** làm thay đổi code trong thư mục  đang làm việc (working directory).

* **Đặc điểm:** Rất an toàn. Nó giống như việc  ra hòm thư lấy thư về để trên bàn, nhưng chưa mở ra đọc hay cất vào tủ hồ sơ.
* **Cách sử dụng:**
```bash
# Lấy toàn bộ thông tin mới từ remote (thường là 'origin')
git fetch origin

# Lấy thông tin mới từ một nhánh cụ thể
git fetch origin main

```


* **Sau khi fetch?** Có thể dùng lệnh `git log` hoặc `git diff` để so sánh xem trên remote có gì mới so với code hiện tại , trước khi quyết định gộp chúng vào.

### `git pull` (Tải về và "nhập vào luôn")

**`git pull`** thực chất là sự kết hợp của 2 lệnh: **`git fetch`** (tải dữ liệu về) và sau đó ngay lập tức chạy **`git merge`** (gộp dữ liệu đó vào nhánh  đang làm việc).

* **Đặc điểm:** Nhanh gọn và tiện lợi, nhưng có rủi ro. Nếu code trên remote và code ở máy cùng sửa trên một file, nó có thể gây ra **Conflict** (xung đột code), và  sẽ phải sửa lỗi xung đột này bằng tay.
* **Công thức:** `git pull` = `git fetch` + `git merge`
* **Cách sử dụng:**
```bash
# Tải và gộp code từ nhánh hiện tại trên remote vào nhánh hiện tại ở local
git pull

# Tải và gộp code từ nhánh 'main' trên remote 'origin'
git pull origin main

```



---

### Bảng so sánh nhanh

| Tiêu chí | `git fetch` | `git pull` |
| --- | --- | --- |
| **Bản chất** | Chỉ tải dữ liệu về máy | Tải dữ liệu về + Gộp vào code hiện tại |
| **Ảnh hưởng code** | Không thay đổi code  đang viết | Có thể làm thay đổi code  đang viết |
| **Độ an toàn** | Rất an toàn | Có thể gây ra xung đột (conflict) |
| **Lệnh tương đương** | - | `git fetch` + `git merge` |

