import React from "react";

class Checkout2 extends React.Component{
    render(){
        return(
            <div>
                <div className="page-title">
                    <img src="assets/images/bg_cat.jpg" alt="" className="background"/>
                    <h1>Tiện ích</h1>
                </div>
                <div className="container">
                    <div className="ossvn-block">
                        <h3 className="small_title">Cảm ơn bạn. Đơn hàng của bạn đã được nhận</h3>
                        <div className="last_order">
                            <div className="row">
                                <div className="col-md-4 margin-space">
                                    <div className="boxer">
                                        <h3 className="title-order">thông tin đơn hàng</h3>
                                        <ul>
                                            <li><span>Số đơn hàng</span><strong>394</strong></li>
                                            <li><span>Ngày</span><strong>2016/01/25</strong></li>
                                            <li><span>Phương thức thanh toán</span><strong>CoD</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-7 margin-space pull-right">
                                    <ul className="row">
                                        <li className="col-xs-6">
                                            <h3 className="title-order">địa chỉ thanh toán</h3>
                                            <p><strong>Nguyễn Văn Anh</strong></p>
                                            <p>12 Nguyễn Đình CHiểu,P.10, Quận 3<br />TPHCM-Việt Nam</p>
                                        </li>
                                        <li className="col-xs-6">
                                            <h3 className="title-order">địa chỉ nhận hàng</h3>
                                            <p><strong>Nguyễn Văn Anh</strong></p>
                                            <p>12 Nguyễn Đình CHiểu,P.10, Quận 3<br />TPHCM-Việt Nam</p>
                                        </li>
                                        <li className="col-xs-12">
                                            <p className="p-top"><strong>Tomorrow9</strong> sẽ chuyển hàng cho bạn theo phương thức giao hàng nhận tiền (CoD). Miễn phí vận chuyển và phí thu hộ nếu đơn hàng của bạn lớn hơn 750,000 đ</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 margin-space">
                                    <h3 className="title-order">Chi tiết đơn hàng</h3>
                                    <table className="order_shop">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Sản phẩm</th>
                                                <th className="text-center">Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.cart_data.map((item,index)=>{
                                                    return <tr key={index}>
                                                            <td className="stt text-center">x1</td>
                                                            <td className="ten">
                                                                <div className="name">
                                                                    <a href={item.link}>{item.name}</a>
                                                                </div>
                                                            </td>
                                                            <th className="gia text-center">{item.new_price} đ</th>
                                                        </tr>
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2">Tổng số phụ:</td>
                                                <th className="text-center">đ</th>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Giao nhận hàng:  </td>
                                                <th className="text-center">đ</th>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Phí thu hộ:</td>
                                                <th className="text-center">đ</th>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Phương thức thanh toán:</td>
                                                <th className="text-center">CoD</th>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Tổng cộng:</td>
                                                <th className="text-center total">{this.props.total} đ</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <button type="button" className="print-button js_print_order"><i className="fa fa-print"></i> In đơn hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Checkout2