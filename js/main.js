// bài 1: tính lương nhân viên
document.getElementById('btnTinhTien').onclick = function() {
    //input:
    var luong1Ngay = 100000
    var soNgayLam = +document.getElementById('soNgayLam').value

    //output:
    var tongLuong = 0

    //progress:
    tongLuong = luong1Ngay * soNgayLam

    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString() + 'VNĐ'
}

//Bài 2: tính giá trị trung bình

document.getElementById('btnKetQua').onclick = function() {
    //input:
    var so1 = +document.getElementById('so1').value
    var so2 = +document.getElementById('so2').value
    var so3 = +document.getElementById('so3').value
    var so4 = +document.getElementById('so4').value
    var so5 = +document.getElementById('so5').value

    // output
    var ketQua = 0

    //progress
    ketQua = (so1 + so2 + so3 + so4 + so5) / 5

    document.getElementById('ketQua').innerHTML = ketQua

}

// Bài tập 3: quy đổi tiền

document.getElementById('btnQuyDoi').onclick = function() {

    //input
    var tiGia = 23500
    var tienQuyDoi = +document.getElementById('tienQuyDoi').value

    //output
    var ketQuaVnd = 0

    //progress
    ketQuaVnd = tienQuyDoi * tiGia

    document.getElementById('ketQuaVnd').innerHTML = ketQuaVnd.toLocaleString() + 'vnđ'
}

// Bài 4: tính diện tích, chu vi hình chữ nhật

document.getElementById('btnTinh').onclick = function() {
    //input
    var dai = +document.getElementById('chieuDai').value
    var rong = +document.getElementById('chieuRong').value

    //output
    var chuVi = 0
    var dienTich = 0

    //progress
    chuVi = (dai + rong) * 2
    dienTich = dai * rong

    document.getElementById('chuVi').innerHTML = chuVi
    document.getElementById('dienTich').innerHTML = dienTich
}

//  Bài 5: tính tổng 2 ký số

document.getElementById('btnKetQua5').onclick = function() {

    //input
    var so = +document.getElementById('nhapSo').value
    var chuc = Math.floor(so / 10)
    var donVi = Math.floor(so % 10)

    //output
    var ketQua5 = 0

    //progress
    var ketQua5 = chuc + donVi

    document.getElementById('ketQua5').innerHTML = ketQua5


}