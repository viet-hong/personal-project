import React from 'react';
class Cat extends React.Component{
    render(){
        return(
           <div className="main">
				<div className="page-title">
					<img src="assets/images/bg_cat.jpg" alt="" className="background"/>
					<h1>Danh mục sản phẩm</h1>
				</div>
				<div className="category-list">
					<div className="container">
						<ul>
							<li className="current">
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-tatca.png" alt="" />
										<img className="back" src="assets/images/icon-tatca-hover.png" alt="" />
									</span>
									<span className="title">Tất cả</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-somi.png" alt="" />
										<img className="back" src="assets/images/icon-somi-hover.png" alt="" />
									</span>
									<span className="title">Áo sơ mi</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-thun.png" alt="" />
										<img className="back" src="assets/images/icon-thun-hover.png" alt="" />
									</span>
									<span className="title">Áo thun</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-khoac.png" alt="" />
										<img className="back" src="assets/images/icon-khoac-hover.png" alt="" />
									</span>
									<span className="title">Áo khoác</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-jean.png" alt="" />
										<img className="back" src="assets/images/icon-jean-hover.png" alt="" />
									</span>
									<span className="title">Quần jean</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-short.png" alt="" />
										<img className="back" src="assets/images/icon-short-hover.png" alt="" />
									</span>
									<span className="title">Quần short</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-tay.png" alt="" />
										<img className="back" src="assets/images/icon-tay-hover.png" alt="" />
									</span>
									<span className="title">Quần tây</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-vay.png" alt="" />
										<img className="back" src="assets/images/icon-vay-hover.png" alt="" />
									</span>
									<span className="title">Váy đầm</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon">
										<img className="front" src="assets/images/icon-croptop.png" alt="" />
										<img className="back" src="assets/images/icon-croptop-hover.png" alt="" />
									</span>
									<span className="title">Croptop</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="filter after-clear">
						<div className="right">
							<span className="label-order">Sắp xếp theo:</span>
							<select className="custom-heapbox">
								<option>Size</option>
								<option>S</option>
								<option>M</option>
								<option>L</option>
							</select>
							<select className="custom-heapbox">
								<option>Giá</option>
								<option>100,000 VNĐ - 500,000 VNĐ</option>
								<option>500,000 VNĐ - 2,000,000 VNĐ</option>
								<option>2,000,000 VNĐ - 10,000,000 VNĐ</option>
							</select>
						</div>
					</div>
					<div className="ossvn-block padding-top-small text-center">
						<div className="top">
							<h2 className="title">SẢN PHẨM HOT</h2>
							<div className="icon">
								<i className="fa fa-anchor"></i>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
						</div>
						<ul className="row row-ossvn text-left product-cats">
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-1.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-1" id="radio-1-1" /><label htmlFor="radio-1-1">S</label></li>
												<li><input type="radio" name="radio-1" id="radio-1-2" /><label htmlFor="radio-1-2">X</label></li>
												<li><input type="radio" name="radio-1" id="radio-1-3" /><label htmlFor="radio-1-3">L</label></li>
												<li><input type="radio" name="radio-1" id="radio-1-4" /><label htmlFor="radio-1-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-2.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-2" id="radio-2-1" /><label htmlFor="radio-2-1">S</label></li>
												<li><input type="radio" name="radio-2" id="radio-2-2" /><label htmlFor="radio-2-2">X</label></li>
												<li><input type="radio" name="radio-2" id="radio-2-3" /><label htmlFor="radio-2-3">L</label></li>
												<li><input type="radio" name="radio-2" id="radio-2-4" /><label htmlFor="radio-2-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-3.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-3" id="radio-3-1" /><label htmlFor="radio-3-1">S</label></li>
												<li><input type="radio" name="radio-3" id="radio-3-2" /><label htmlFor="radio-3-2">X</label></li>
												<li><input type="radio" name="radio-3" id="radio-3-3" /><label htmlFor="radio-3-3">L</label></li>
												<li><input type="radio" name="radio-3" id="radio-3-4" /><label htmlFor="radio-3-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-4.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-4" id="radio-4-1" /><label htmlFor="radio-4-1">S</label></li>
												<li><input type="radio" name="radio-4" id="radio-4-2" /><label htmlFor="radio-4-2">X</label></li>
												<li><input type="radio" name="radio-4" id="radio-4-3" /><label htmlFor="radio-4-3">L</label></li>
												<li><input type="radio" name="radio-4" id="radio-4-4" /><label htmlFor="radio-4-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-5.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-5" id="radio-5-1" /><label htmlFor="radio-5-1">S</label></li>
												<li><input type="radio" name="radio-5" id="radio-5-2" /><label htmlFor="radio-5-2">X</label></li>
												<li><input type="radio" name="radio-5" id="radio-5-3" /><label htmlFor="radio-5-3">L</label></li>
												<li><input type="radio" name="radio-5" id="radio-5-4" /><label htmlFor="radio-5-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-6.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-6" id="radio-6-1" /><label htmlFor="radio-6-1">S</label></li>
												<li><input type="radio" name="radio-6" id="radio-6-2" /><label htmlFor="radio-6-2">X</label></li>
												<li><input type="radio" name="radio-6" id="radio-6-3" /><label htmlFor="radio-6-3">L</label></li>
												<li><input type="radio" name="radio-6" id="radio-6-4" /><label htmlFor="radio-6-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-7.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-7" id="radio-7-1" /><label htmlFor="radio-7-1">S</label></li>
												<li><input type="radio" name="radio-7" id="radio-7-2" /><label htmlFor="radio-7-2">X</label></li>
												<li><input type="radio" name="radio-7" id="radio-7-3" /><label htmlFor="radio-7-3">L</label></li>
												<li><input type="radio" name="radio-7" id="radio-7-4" /><label htmlFor="radio-7-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-8.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-8" id="radio-8-1" /><label htmlFor="radio-8-1">S</label></li>
												<li><input type="radio" name="radio-8" id="radio-8-2" /><label htmlFor="radio-8-2">X</label></li>
												<li><input type="radio" name="radio-8" id="radio-8-3" /><label htmlFor="radio-8-3">L</label></li>
												<li><input type="radio" name="radio-8" id="radio-8-4" /><label htmlFor="radio-8-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-1.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-9" id="radio-9-1" /><label htmlFor="radio-9-1">S</label></li>
												<li><input type="radio" name="radio-9" id="radio-9-2" /><label htmlFor="radio-9-2">X</label></li>
												<li><input type="radio" name="radio-9" id="radio-9-3" /><label htmlFor="radio-9-3">L</label></li>
												<li><input type="radio" name="radio-9" id="radio-9-4" /><label htmlFor="radio-9-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-2.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-10" id="radio-10-1" /><label htmlFor="radio-10-1">S</label></li>
												<li><input type="radio" name="radio-10" id="radio-10-2" /><label htmlFor="radio-10-2">X</label></li>
												<li><input type="radio" name="radio-10" id="radio-10-3" /><label htmlFor="radio-10-3">L</label></li>
												<li><input type="radio" name="radio-10" id="radio-10-4" /><label htmlFor="radio-10-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-3.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-11" id="radio-11-1" /><label htmlFor="radio-11-1">S</label></li>
												<li><input type="radio" name="radio-11" id="radio-11-2" /><label htmlFor="radio-11-2">X</label></li>
												<li><input type="radio" name="radio-11" id="radio-11-3" /><label htmlFor="radio-11-3">L</label></li>
												<li><input type="radio" name="radio-11" id="radio-11-4" /><label htmlFor="radio-11-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-4.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-12" id="radio-12-1" /><label htmlFor="radio-12-1">S</label></li>
												<li><input type="radio" name="radio-12" id="radio-12-2" /><label htmlFor="radio-12-2">X</label></li>
												<li><input type="radio" name="radio-12" id="radio-12-3" /><label htmlFor="radio-12-3">L</label></li>
												<li><input type="radio" name="radio-12" id="radio-12-4" /><label htmlFor="radio-12-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-5.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-13" id="radio-13-1" /><label htmlFor="radio-13-1">S</label></li>
												<li><input type="radio" name="radio-13" id="radio-13-2" /><label htmlFor="radio-13-2">X</label></li>
												<li><input type="radio" name="radio-13" id="radio-13-3" /><label htmlFor="radio-13-3">L</label></li>
												<li><input type="radio" name="radio-13" id="radio-13-4" /><label htmlFor="radio-13-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-6.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-14" id="radio-14-1" /><label htmlFor="radio-14-1">S</label></li>
												<li><input type="radio" name="radio-14" id="radio-14-2" /><label htmlFor="radio-14-2">X</label></li>
												<li><input type="radio" name="radio-14" id="radio-14-3" /><label htmlFor="radio-14-3">L</label></li>
												<li><input type="radio" name="radio-14" id="radio-14-4" /><label htmlFor="radio-14-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-7.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-15" id="radio-15-1" /><label htmlFor="radio-15-1">S</label></li>
												<li><input type="radio" name="radio-15" id="radio-15-2" /><label htmlFor="radio-15-2">X</label></li>
												<li><input type="radio" name="radio-15" id="radio-15-3" /><label htmlFor="radio-15-3">L</label></li>
												<li><input type="radio" name="radio-15" id="radio-15-4" /><label htmlFor="radio-15-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
							<li className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
								<div className="product-item-shop text-center">
									<a href="#" className="">
										<span className="hover"><img src="assets/images/product-img-8.jpg" alt=""/></span>
										<h3>Mũ da giữ ấm hai lớp</h3>
										<span className="price"><ins><span className="amount">350,000 Đ</span></ins><del><span className="amount">450,000 Đ</span></del></span>
									</a>
									<div className="overlay">
										<div className="variants">
											<span className="label-var">SIZE</span>
											<ul>
												<li><input type="radio" name="radio-16" id="radio-16-1" /><label htmlFor="radio-16-1">S</label></li>
												<li><input type="radio" name="radio-16" id="radio-16-2" /><label htmlFor="radio-16-2">X</label></li>
												<li><input type="radio" name="radio-16" id="radio-16-3" /><label htmlFor="radio-16-3">L</label></li>
												<li><input type="radio" name="radio-16" id="radio-16-4" /><label htmlFor="radio-16-4">XL</label></li>
											</ul>
										</div>
										<a href="#" className="option-link">Chọn Size</a>
										<a href="#" className="add_to_cart_button center-h">Xem sản phẩm</a>
									</div>
								</div>
							</li>
						</ul>
						<nav className="woocommerce-pagination text-right">
							<ul className="page-numbers">
								<li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
								<li><a href="#">1</a></li>
								<li><span className="current">2</span></li>
								<li><a href="#">3</a></li>
								<li><a className="next " href="#"><i className="fa fa-angle-double-right"></i></a></li>
							</ul>
						</nav>
					</div>
					
				</div>
			</div>
        )
    }
}
export default Cat