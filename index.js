// Bài tập 1
function tinhLuong(){
    var luongNgay = document.getElementById('luongNgay').value*1
    var soNgay = document.getElementById('soNgay').value*1
    var tienLuong = luongNgay * soNgay
    document.getElementById('tongLuong').innerHTML = tienLuong
}
// Bài tập 2
function tinhTrungBinh(){
    var soMot = document.getElementById('soMot').value*1
    var soHai = document.getElementById('soHai').value*1
    var soBa = document.getElementById('soBa').value*1
    var soBon = document.getElementById('soBon').value*1
    var soNam = document.getElementById('soNam').value*1
    var trungBinhCong = (soMot+soHai+soBa+soBon+soNam)/5
    document.getElementById('trungBinh').innerHTML = trungBinhCong
}
// Bài tập 3
function tinhTienVND(){
    var soTien = document.getElementById('soTien').value*1
    var doiTien = soTien * 23500
    document.getElementById('tienVND').innerHTML = doiTien + ' VND'
}
// Bài tập 4
function tinhDTCV(){
    var chieuDai = document.getElementById('chieuDai').value*1
    var chieuRong = document.getElementById('chieuRong').value*1
    var dienTichHCN = chieuDai*chieuRong
    var chuViHCN = (chieuDai+chieuRong)*2
    document.getElementById('dienTich').innerHTML = 'Diện tích: ' + dienTichHCN
    document.getElementById('chuVi').innerHTML = 'Chu vi: ' + chuViHCN
}
// Bài tập 5
function tinhTongHaiChuSo(){
    var soChu = document.getElementById('soChu').value*1
    var hangChuc = Math.floor(soChu/10)
    var donVi = soChu%10
    var tong = hangChuc + donVi
    document.getElementById('tinhTong').innerHTML ='Tổng: ' + tong
}