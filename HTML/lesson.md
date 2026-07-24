# HTML Cơ Bản

## 1. HTML Tag là gì?

HTML là viết tắt của **HyperText Markup Language**, là ngôn ngữ đánh dấu dùng để xây dựng cấu trúc của một trang web.

HTML sử dụng các **thẻ — tag** để xác định từng loại nội dung như tiêu đề, đoạn văn, hình ảnh, liên kết, bảng và biểu mẫu.

Cấu trúc thông thường của một thẻ HTML:

```html
<tagname>Nội dung</tagname>
```

Ví dụ:

```html
<p>Đây là một đoạn văn.</p>
```

Trong đó:

* `<p>` là thẻ mở.
* `</p>` là thẻ đóng.
* Phần ở giữa là nội dung của phần tử HTML.

Một số thẻ không cần thẻ đóng, ví dụ:

```html
<img src="image.jpg" alt="Hình ảnh minh họa">
```

```html
<br>
```

```html
<hr>
```

### Thuộc tính HTML

Thẻ HTML có thể chứa các thuộc tính để cung cấp thêm thông tin.

Cấu trúc:

```html
<tagname attribute="value">Nội dung</tagname>
```

Ví dụ:

```html
<a href="https://example.com">Truy cập website</a>
```

Trong ví dụ này:

* `href` là tên thuộc tính.
* `https://example.com` là giá trị của thuộc tính.

### Cấu trúc cơ bản của một tài liệu HTML

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Xin chào HTML</h1>
    <p>Đây là nội dung trang web.</p>
</body>
</html>
```

Ý nghĩa:

* `<!DOCTYPE html>`: khai báo tài liệu sử dụng HTML5.
* `<html>`: phần tử gốc của trang HTML.
* `<head>`: chứa thông tin mô tả về trang.
* `<body>`: chứa nội dung hiển thị trên trình duyệt.

   

## 2. HTML Headings

HTML Heading được sử dụng để tạo các tiêu đề trên trang web.

HTML cung cấp sáu cấp tiêu đề, từ `<h1>` đến `<h6>`:

```html
<h1>Tiêu đề cấp 1</h1>
<h2>Tiêu đề cấp 2</h2>
<h3>Tiêu đề cấp 3</h3>
<h4>Tiêu đề cấp 4</h4>
<h5>Tiêu đề cấp 5</h5>
<h6>Tiêu đề cấp 6</h6>
```

Trong đó:

* `<h1>` là tiêu đề quan trọng nhất.
* `<h6>` là tiêu đề có mức độ quan trọng thấp nhất.

Ví dụ cấu trúc một bài viết:

```html
<h1>Học lập trình web</h1>

<h2>HTML cơ bản</h2>
<p>HTML được sử dụng để tạo cấu trúc cho trang web.</p>

<h2>CSS cơ bản</h2>
<p>CSS được sử dụng để thiết kế giao diện.</p>

<h3>CSS Selector</h3>
<p>CSS Selector được sử dụng để chọn phần tử HTML.</p>
```

### Lưu ý

Không nên dùng thẻ heading chỉ để làm chữ lớn. Heading nên được sử dụng để thể hiện cấu trúc nội dung.

Ví dụ không nên:

```html
<h1>Đây chỉ là một dòng chữ cần phóng to</h1>
```

Thay vào đó, có thể dùng CSS:

```html
<p class="large-text">Đây là một dòng chữ lớn.</p>
```

```css
.large-text {
    font-size: 32px;
}
```

   

## 3. HTML Paragraphs

Thẻ `<p>` được sử dụng để tạo một đoạn văn.

```html
<p>Đây là đoạn văn thứ nhất.</p>

<p>Đây là đoạn văn thứ hai.</p>
```

Trình duyệt sẽ tự động tạo khoảng cách trước và sau mỗi đoạn văn.

### Xuống dòng với `<br>`

Thẻ `<br>` được sử dụng để xuống dòng mà không tạo đoạn văn mới.

```html
<p>
    Họ và tên: Nguyễn Văn A<br>
    Tuổi: 20<br>
    Chuyên ngành: Công nghệ thông tin
</p>
```

### Đường kẻ ngang với `<hr>`

Thẻ `<hr>` tạo một đường phân cách nội dung.

```html
<h2>Phần 1</h2>
<p>Nội dung của phần 1.</p>

<hr>

<h2>Phần 2</h2>
<p>Nội dung của phần 2.</p>
```

### Khoảng trắng trong HTML

HTML thường bỏ qua nhiều dấu cách liên tiếp.

```html
<p>Xin     chào     mọi     người.</p>
```

Trình duyệt thường hiển thị thành:

```text
Xin chào mọi người.
```

Nếu cần giữ nguyên khoảng trắng và xuống dòng, có thể dùng thẻ `<pre>`:

```html
<pre>
Tên: Nguyễn Văn A
Tuổi: 20
Ngành: Công nghệ thông tin
</pre>
```

   

## 4. HTML Text Formatting

HTML cung cấp nhiều thẻ để định dạng văn bản.

### Chữ đậm

```html
<b>Đây là chữ đậm.</b>
```

```html
<strong>Đây là nội dung quan trọng.</strong>
```

Hai thẻ đều thường hiển thị chữ đậm, nhưng `<strong>` còn mang ý nghĩa nội dung quan trọng.

### Chữ nghiêng

```html
<i>Đây là chữ nghiêng.</i>
```

```html
<em>Đây là nội dung được nhấn mạnh.</em>
```

`<em>` mang ý nghĩa nhấn mạnh nội dung.

### Gạch chân

```html
<u>Đây là văn bản được gạch chân.</u>
```

### Đánh dấu văn bản

```html
<mark>Đây là phần nội dung được đánh dấu.</mark>
```

### Chữ nhỏ

```html
<small>Đây là nội dung có kích thước nhỏ hơn.</small>
```

### Gạch ngang

```html
<del>Giá cũ: 500.000 đồng</del>
```

### Nội dung được thêm mới

```html
<ins>Giá mới: 400.000 đồng</ins>
```

### Chỉ số dưới

```html
<p>Công thức của nước là H<sub>2</sub>O.</p>
```

### Chỉ số trên

```html
<p>2<sup>3</sup> = 8</p>
```

### Ví dụ tổng hợp

```html
<p>
    Khóa học này có giá
    <del>1.000.000 đồng</del>
    và hiện chỉ còn
    <strong>700.000 đồng</strong>.
</p>

<p>
    Công thức nổi tiếng:
    E = mc<sup>2</sup>
</p>
```

   

## 5. HTML Links

Thẻ `<a>` được sử dụng để tạo liên kết.

Cú pháp:

```html
<a href="URL">Nội dung liên kết</a>
```

Ví dụ:

```html
<a href="https://www.google.com">Truy cập Google</a>
```

### Mở liên kết trong tab mới

Sử dụng thuộc tính `target="_blank"`:

```html
<a href="https://www.google.com" target="_blank">
    Mở Google trong tab mới
</a>
```

Nên thêm `rel="noopener noreferrer"` khi mở tab mới:

```html
<a
    href="https://www.google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Truy cập Google
</a>
```

### Liên kết tới trang khác trong cùng website

```html
<a href="about.html">Trang giới thiệu</a>
```

### Liên kết tới một vị trí trong cùng trang

```html
<a href="#contact">Đi đến phần liên hệ</a>

<h2 id="contact">Liên hệ</h2>
<p>Email: example@email.com</p>
```

### Liên kết email

```html
<a href="mailto:example@email.com">Gửi email</a>
```

### Liên kết số điện thoại

```html
<a href="tel:0123456789">Gọi điện</a>
```

### Dùng hình ảnh làm liên kết

```html
<a href="https://example.com">
    <img src="logo.png" alt="Logo website">
</a>
```

   

## 6. HTML Images

Thẻ `<img>` được sử dụng để chèn hình ảnh vào trang web.

Cú pháp:

```html
<img src="đường-dẫn-hình-ảnh" alt="mô tả hình ảnh">
```

Ví dụ:

```html
<img src="cat.jpg" alt="Một chú mèo đang ngồi">
```

Trong đó:

* `src`: đường dẫn tới hình ảnh.
* `alt`: nội dung mô tả hình ảnh nếu ảnh không tải được hoặc dành cho công cụ hỗ trợ người khiếm thị.

### Thiết lập chiều rộng và chiều cao

```html
<img
    src="cat.jpg"
    alt="Một chú mèo"
    width="300"
    height="200"
>
```

Hoặc sử dụng CSS:

```html
<img class="product-image" src="product.jpg" alt="Sản phẩm">
```

```css
.product-image {
    width: 300px;
    height: auto;
}
```

`height: auto` giúp ảnh giữ đúng tỷ lệ.

### Đường dẫn tương đối

Nếu ảnh nằm cùng thư mục với file HTML:

```html
<img src="photo.jpg" alt="Ảnh cá nhân">
```

Nếu ảnh nằm trong thư mục `images`:

```html
<img src="images/photo.jpg" alt="Ảnh cá nhân">
```

### Đường dẫn tuyệt đối

```html
<img
    src="https://example.com/images/photo.jpg"
    alt="Ảnh từ Internet"
>
```

### Thẻ `<figure>` và `<figcaption>`

Dùng để hiển thị hình ảnh kèm chú thích:

```html
<figure>
    <img src="campus.jpg" alt="Khuôn viên trường đại học">
    <figcaption>Khuôn viên trường đại học vào buổi sáng.</figcaption>
</figure>
```

   

## 7. HTML Tables

Bảng HTML được sử dụng để trình bày dữ liệu theo hàng và cột.

Các thẻ cơ bản:

* `<table>`: tạo bảng.
* `<tr>`: tạo một hàng.
* `<th>`: tạo ô tiêu đề.
* `<td>`: tạo ô dữ liệu.

Ví dụ:

```html
<table>
    <tr>
        <th>Họ tên</th>
        <th>Tuổi</th>
        <th>Chuyên ngành</th>
    </tr>

    <tr>
        <td>Nguyễn Văn An</td>
        <td>20</td>
        <td>Công nghệ thông tin</td>
    </tr>

    <tr>
        <td>Trần Thị Bình</td>
        <td>21</td>
        <td>Kinh tế</td>
    </tr>
</table>
```

### Cấu trúc bảng đầy đủ

```html
<table>
    <caption>Danh sách sinh viên</caption>

    <thead>
        <tr>
            <th>Họ tên</th>
            <th>Điểm</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Nguyễn Văn An</td>
            <td>9.0</td>
        </tr>

        <tr>
            <td>Trần Thị Bình</td>
            <td>8.5</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Điểm trung bình</td>
            <td>8.75</td>
        </tr>
    </tfoot>
</table>
```

### Gộp cột với `colspan`

```html
<table>
    <tr>
        <th colspan="2">Thông tin cá nhân</th>
    </tr>

    <tr>
        <td>Họ tên</td>
        <td>Nguyễn Văn A</td>
    </tr>
</table>
```

### Gộp hàng với `rowspan`

```html
<table>
    <tr>
        <th rowspan="2">Môn học</th>
        <td>HTML</td>
    </tr>

    <tr>
        <td>CSS</td>
    </tr>
</table>
```

### CSS cơ bản cho bảng

```css
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
```

   

## 8. HTML Lists

HTML hỗ trợ ba loại danh sách chính:

* Danh sách không có thứ tự.
* Danh sách có thứ tự.
* Danh sách mô tả.

### Danh sách không có thứ tự

Sử dụng `<ul>` và `<li>`:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Kết quả thường hiển thị với dấu chấm đầu dòng.

### Danh sách có thứ tự

Sử dụng `<ol>` và `<li>`:

```html
<ol>
    <li>Mở trình soạn thảo</li>
    <li>Tạo file HTML</li>
    <li>Viết mã nguồn</li>
    <li>Mở file bằng trình duyệt</li>
</ol>
```

### Thay đổi kiểu đánh số

```html
<ol type="A">
    <li>Phần A</li>
    <li>Phần B</li>
</ol>
```

Các giá trị phổ biến:

* `1`: số thông thường.
* `A`: chữ cái in hoa.
* `a`: chữ cái thường.
* `I`: số La Mã in hoa.
* `i`: số La Mã thường.

### Bắt đầu từ một số cụ thể

```html
<ol start="5">
    <li>Mục thứ năm</li>
    <li>Mục thứ sáu</li>
</ol>
```

### Danh sách lồng nhau

```html
<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>
        Backend
        <ul>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
        </ul>
    </li>
</ul>
```

### Danh sách mô tả

Sử dụng `<dl>`, `<dt>` và `<dd>`:

```html
<dl>
    <dt>HTML</dt>
    <dd>Ngôn ngữ đánh dấu dùng để tạo cấu trúc trang web.</dd>

    <dt>CSS</dt>
    <dd>Ngôn ngữ dùng để thiết kế giao diện trang web.</dd>
</dl>
```

   

## 9. HTML Forms

HTML Form được sử dụng để thu thập dữ liệu từ người dùng.

Thẻ chính là `<form>`.

```html
<form>
    <!-- Các trường nhập dữ liệu -->
</form>
```

### Ô nhập văn bản

```html
<form>
    <label for="fullname">Họ và tên:</label>

    <input
        type="text"
        id="fullname"
        name="fullname"
    >
</form>
```

Thuộc tính:

* `type`: loại dữ liệu nhập.
* `id`: định danh phần tử.
* `name`: tên trường dữ liệu khi gửi lên server.
* `for` của `<label>` nên trùng với `id` của `<input>`.

### Placeholder

```html
<input
    type="text"
    name="fullname"
    placeholder="Nhập họ và tên"
>
```

### Trường bắt buộc

```html
<input
    type="email"
    name="email"
    required
>
```

### Các loại input phổ biến

#### Text

```html
<input type="text" name="username">
```

#### Password

```html
<input type="password" name="password">
```

#### Email

```html
<input type="email" name="email">
```

#### Number

```html
<input type="number" name="age" min="1" max="100">
```

#### Date

```html
<input type="date" name="birthday">
```

#### File

```html
<input type="file" name="avatar">
```

#### Checkbox

Checkbox cho phép chọn nhiều lựa chọn.

```html
<label>
    <input type="checkbox" name="skills" value="html">
    HTML
</label>

<label>
    <input type="checkbox" name="skills" value="css">
    CSS
</label>
```

#### Radio

Radio thường chỉ cho phép chọn một lựa chọn trong cùng một nhóm.

```html
<label>
    <input type="radio" name="gender" value="male">
    Nam
</label>

<label>
    <input type="radio" name="gender" value="female">
    Nữ
</label>
```

Các radio phải có cùng giá trị `name` để tạo thành một nhóm.

### Select

```html
<label for="city">Thành phố:</label>

<select id="city" name="city">
    <option value="hanoi">Hà Nội</option>
    <option value="danang">Đà Nẵng</option>
    <option value="hochiminh">TP. Hồ Chí Minh</option>
</select>
```

### Textarea

Dùng để nhập nội dung dài:

```html
<label for="message">Nội dung:</label>

<textarea
    id="message"
    name="message"
    rows="5"
    cols="30"
></textarea>
```

### Nút gửi biểu mẫu

```html
<button type="submit">Gửi thông tin</button>
```

### Nút đặt lại

```html
<button type="reset">Nhập lại</button>
```

### Ví dụ form hoàn chỉnh

```html
<form action="/register" method="post">
    <div>
        <label for="fullname">Họ và tên:</label>
        <input
            type="text"
            id="fullname"
            name="fullname"
            required
        >
    </div>

    <div>
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            required
        >
    </div>

    <div>
        <label for="password">Mật khẩu:</label>
        <input
            type="password"
            id="password"
            name="password"
            required
        >
    </div>

    <div>
        <label for="major">Chuyên ngành:</label>

        <select id="major" name="major">
            <option value="it">Công nghệ thông tin</option>
            <option value="business">Kinh tế</option>
            <option value="language">Ngoại ngữ</option>
        </select>
    </div>

    <div>
        <label for="description">Giới thiệu bản thân:</label>

        <textarea
            id="description"
            name="description"
            rows="5"
        ></textarea>
    </div>

    <button type="submit">Đăng ký</button>
    <button type="reset">Nhập lại</button>
</form>
```

### Thuộc tính `action` và `method`

```html
<form action="/login" method="post">
```

* `action`: địa chỉ nhận dữ liệu.
* `method`: phương thức gửi dữ liệu.

Hai phương thức phổ biến:

* `GET`: dữ liệu thường xuất hiện trên URL.
* `POST`: dữ liệu được gửi trong nội dung request.

   

## 10. Inline Element và Block Element

Các phần tử HTML thường được chia thành hai nhóm:

* Block element.
* Inline element.

   

### Block Element

Block element thường:

* Bắt đầu trên một dòng mới.
* Chiếm toàn bộ chiều rộng có thể sử dụng.
* Có thể chứa các phần tử block hoặc inline khác, tùy loại thẻ.

Ví dụ:

```html
<div>Khối thứ nhất</div>
<div>Khối thứ hai</div>
```

Hai thẻ `<div>` thường hiển thị trên hai dòng khác nhau.

Một số block element phổ biến:

```html
<div>
<p>
<h1>
<h2>
<section>
<article>
<header>
<footer>
<ul>
<ol>
<table>
<form>
```

Ví dụ:

```html
<div>
    <h2>Thông tin cá nhân</h2>
    <p>Họ tên: Nguyễn Văn A</p>
</div>
```

   

### Inline Element

Inline element thường:

* Không bắt đầu trên dòng mới.
* Chỉ chiếm chiều rộng vừa đủ với nội dung.
* Có thể nằm cùng dòng với các phần tử inline khác.

Ví dụ:

```html
<p>
    Đây là một
    <strong>nội dung quan trọng</strong>
    trong đoạn văn.
</p>
```

Một số inline element phổ biến:

```html
<span>
<a>
<strong>
<b>
<em>
<i>
<img>
<label>
<sub>
<sup>
```

Ví dụ:

```html
<p>
    Bạn có thể truy cập
    <a href="https://example.com">website này</a>
    để xem thêm thông tin.
</p>
```

   

## So sánh Block Element và Inline Element

| Đặc điểm                     | Block Element               | Inline Element                  |
| ---------------------------- | --------------------------- | ------------------------------- |
| Bắt đầu trên dòng mới        | Có                          | Không                           |
| Chiếm toàn bộ chiều rộng     | Thường có                   | Không                           |
| Có thể đặt `width`, `height` | Có                          | Thường không hiệu quả trực tiếp |
| Ví dụ                        | `div`, `p`, `h1`, `section` | `span`, `a`, `strong`, `img`    |

   

## Ví dụ minh họa

HTML:

```html
<div class="block-example">
    Đây là block element.
</div>

<span class="inline-example">
    Inline thứ nhất
</span>

<span class="inline-example">
    Inline thứ hai
</span>
```

CSS:

```css
.block-example {
    width: 300px;
    padding: 10px;
    border: 1px solid black;
}

.inline-example {
    padding: 5px;
    border: 1px solid red;
}
```

Kết quả:

* `<div>` nằm trên một dòng riêng.
* Hai thẻ `<span>` có thể nằm trên cùng một dòng.

   

## Thay đổi kiểu hiển thị bằng CSS

CSS có thể thay đổi cách hiển thị của phần tử.

### Chuyển inline thành block

```css
a {
    display: block;
}
```

### Chuyển block thành inline

```css
div {
    display: inline;
}
```

### Inline-block

`inline-block` cho phép phần tử:

* Nằm cùng dòng với phần tử khác.
* Vẫn có thể thiết lập `width` và `height`.

```css
.menu-item {
    display: inline-block;
    width: 120px;
    padding: 10px;
}
```

Ví dụ:

```html
<a class="menu-item" href="#">Trang chủ</a>
<a class="menu-item" href="#">Giới thiệu</a>
<a class="menu-item" href="#">Liên hệ</a>
```

```css
.menu-item {
    display: inline-block;
    width: 120px;
    padding: 10px;
    text-align: center;
    border: 1px solid black;
}
```

   

# Ví dụ HTML tổng hợp

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Trang giới thiệu sinh viên</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid #000;
            padding: 8px;
        }

        .profile-image {
            width: 180px;
            height: auto;
        }

        .highlight {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <header>
        <h1>Trang giới thiệu cá nhân</h1>

        <nav>
            <a href="#about">Giới thiệu</a>
            <a href="#skills">Kỹ năng</a>
            <a href="#contact">Liên hệ</a>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>Giới thiệu</h2>

            <img
                class="profile-image"
                src="avatar.jpg"
                alt="Ảnh đại diện"
            >

            <p>
                Xin chào, tôi là
                <span class="highlight">Nguyễn Văn A</span>.
                Tôi là sinh viên ngành Công nghệ thông tin.
            </p>
        </section>

        <section id="skills">
            <h2>Kỹ năng</h2>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>

            <h3>Kết quả học tập</h3>

            <table>
                <thead>
                    <tr>
                        <th>Môn học</th>
                        <th>Điểm</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>HTML và CSS</td>
                        <td>9.0</td>
                    </tr>

                    <tr>
                        <td>JavaScript</td>
                        <td>8.5</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="contact">
            <h2>Liên hệ</h2>

            <form action="/contact" method="post">
                <div>
                    <label for="name">Họ và tên:</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    >
                </div>

                <div>
                    <label for="email">Email:</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >
                </div>

                <div>
                    <label for="message">Nội dung:</label>

                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                    ></textarea>
                </div>

                <button type="submit">Gửi</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Nguyễn Văn A</p>
    </footer>
</body>
</html>
```
