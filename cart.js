import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component{
	render(){
		return(
			<div className="container">
				<ul className="row">
					<li id="cart-left" className="col-md-9 tab-widget tab-plugin">
						<h2 className="tab-control">Đơn hàng</h2>
						<div className="table-responsive-wrapper">
						{
							(this.props.cart_data.length) ? 
							<table className="shop_table">
								<thead>
								<tr>
									<th className="product-thumbnail">Sản phẩm</th>
									<th className="product-name"></th>
									<th className="product-quantity">Số lượng</th>
									<th className="product-price">Giá</th>
									<th className="product-remove">&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								{
									this.props.cart_data.map((item,index)=>{
										return <tr className="cart_item" key={index}>
													<td className="product-thumbnail">
														<a href={'/detail/'+item.link}><img src={item.img} alt=""/></a>
													</td>
													<td className="product-name">
														<a href="/">{item.name}</a>
													</td>
													<td className="product-quantity">
														<div className="quantity">
															<input type="number" step="1" min="0" name="" defaultValue={item.quantity} title="Qty" className="input-text qty text" size="4"/>
														</div>
													</td>
													<td className="product-price">
														<span className="price">
															<del><span className="amount">{item.old_price+" Đ"} Đ</span></del>
															<ins><span className="amount">{"Giảm còn "+item.new_price+" Đ"}</span></ins>
														</span>
													</td>
													<td className="product-remove">
														<span onClick={()=>{
															this.props.removecart(item)
														}} className="remove">×</span>
													</td>
												</tr>
									})
								}
							</tbody>
							</table>
							:
							<div>Chưa có sản phẩm trong giỏ hàng</div>
						}
						</div>
					</li>
					{
						(this.props.cart_data.length) ?(
							<li className="col-md-3 sticky_sidebar" data-target="#cart-left">
						<div className="tab-widget tab-plugin" data-toggle="yes" data-show="all">
							<h2 className="tab-control">Thanh toán</h2>
							<div className="tab-content">
								<div className="cart-collaterals">
									<div className="cart_totals ">
										<table cellSpacing="0">
											<tbody>
												<tr className="cart-subtotal">
													<th>Tổng cộng</th>
													<td><span className="amount">{this.props.total}</span></td>
												</tr>
												<tr className="shipping">
													<th>Shipping</th>
													<td><span className="amount">(theo biểu giá)</span></td>
												</tr>
												<tr className="order-total">
													<th>Thành tiền</th>
													<td><strong><span className="amount">{this.props.total}đ</span></strong> </td>
												</tr>
												<tr>
													<td colSpan="2">Bạn cần mua thêm <strong>100.000 đ</strong> để được miễn phí vận chuyển</td>
												</tr>
											</tbody>
										</table>
										<div className="wc-proceed-to-checkout">
											<Link to="/checkout-1" className="checkout-button wc-forward">Thanh toán</Link>
											<Link to="/" className="continue-shopping">Chọn thêm sản phẩm</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-support-cart">
							<h3>Hỗ trợ thanh toán</h3>
							<ul>
								<li><img src="assets/images/support-1.png" alt=""/></li>
								<li><img src="assets/images/support-2.png" alt=""/></li>
								<li><img src="assets/images/support-3.png" alt=""/></li>
							</ul>
						</div>
						<div className="shipping shipping-info">
							Phí vận chuyển: <span>19.000đ</span>
						</div>
					</li>
						) :""
					}
				</ul>
			</div>
		)
	}
}
export default Cart