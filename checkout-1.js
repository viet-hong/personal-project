import React from 'react';
import { Link } from "react-router-dom";

class Checkout extends React.Component{
	render(){
		return(
			<div>
				<div className="page-title">
					<img src="assets/images/bg_cat.jpg" alt="" className="background"/>
					<h1>Thanh toán</h1>
				</div>
				<div className="container">
					<div className="ossvn-block">
						<ul className="row checkout--row">
							<li className="col-md-6 pull-right col-xs-12">
								<h2>Thông tin đơn hàng</h2>
								<div className="table-responsive-wrapper">
									<table className="shop_table">
										<thead>
											<tr>
												<th className="product-thumbnail">Sản phẩm</th>
												<th className="product-quantity">Số lượng</th>
												<th className="product-price">Giá</th>
											</tr>
										</thead>
										<tbody>
											{
												this.props.cart_data.map((item,index)=>{
													return <tr key={index} className="cart_item">
																<td className="product-name">
																	<Link to={"/detail/"+item.link}>{item.name}</Link>
																</td>
																<td className="product-quantity">{item.quantity}</td>
																<td className="product-price">
																	<span className="price">
																		<span className="amount">{item.new_price} Đ</span>
																	</span>
																</td>
															</tr>
												})
											}
										</tbody>
										<tfoot>
											<tr>
												<th colSpan="2">TẠM TÍNH</th>
												<th className="text-right">{this.props.total} đ</th>
											</tr>
											<tr className="total-row">
												<th colSpan="2">TỔNG CỘNG</th>
												<th className="text-right"><strong>{this.props.total} đ</strong></th>
											</tr>
										</tfoot>
									</table>
								</div>
								<div className="box-support-cart">
									<h3>Hỗ trợ thanh toán</h3>
									<ul>
										<li><img src="assets/images/support-1.png" alt=""/></li>
										<li><img src="assets/images/support-2.png" alt=""/></li>
										<li><img src="assets/images/support-3.png" alt=""/></li>
									</ul>
								</div>
							</li>
							<li className="col-md-6 pull-right col-xs-12">
								<h2>Địa chỉ giao hàng của quý khách</h2>
								<div className="form-rows"><label><span className="label-left">Họ tên</span><input type="text" name="" id="" placeholder="Họ và tên" className="inp-text form-control"/></label></div>
								<div className="form-rows"><label><span className="label-left">Địa chỉ giao hàng</span>
									<textarea placeholder="Số nhà, Đường" className="inp-text form-control"></textarea></label></div>
								<div className="form-rows"><label><span className="label-left">Tỉnh/ Thành phố</span>
									<select className="slt-select form-control">
										<option value="">Lựa chọn</option>
										<option value="ha-noi">Hà Nội</option>
										<option value="da-nang">Đà Nẵng</option>
										<option value="ho-chi-minh">Hồ Chí Minh</option>
									</select>
								</label></div>
								<div className="form-rows"><label><span className="label-left">Quận/ Huyện</span>
									<select className="slt-select form-control">
										<option value="">Lựa chọn</option>
										<option value="quan-1">Quận 1</option>
										<option value="quan-1">Quận 2</option>
										<option value="quan-1">Quận 3</option>
										<option value="quan-1">Quận 4</option>
									</select>
								</label></div>
								<div className="form-rows"><label><span className="label-left">Số điện thoại</span><input type="text" name="" id="" placeholder="Số điện thoại" className="inp-text form-control"/></label></div>
								<div className="form-rows"><label><span className="label-left">Địa chỉ email</span><input type="email" name="" id="" placeholder="Địa chỉ email" className="inp-text form-control"/></label></div>
								<div className="bottom">
									<h2>Thông tin giao hàng</h2>
									<p>Giao hàng tiêu chuẩn</p>
									<Link to="/checkout-2" className="button-green">Tiếp Tục</Link>
								</div>
							</li> 
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Checkout