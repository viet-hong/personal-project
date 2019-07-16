import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <footer>
                
                <div className="footer-social">
                    <div className="container">
                        <div className="left">Theo dõi thông tin mới nhất từ chúng tôi</div>
                        <ul className="right">
                            {
                                this.props.f_social.map((item,index)=>{
                                    return <li key={index}><a href={item.link} className={item.icon}></a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                
                <div className="footer">
                    <div className="container">
                        <ul className="row">
                            <li className="col-md-3 col-xs-12">
                                <h3 className="title">Về chúng tôi</h3>
                                <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                <ul className="address-list">
                                    <li><i className="fa fa-envelope-o"></i><a href="mailto">{this.props.f_about.title}</a></li>
                                    <li><i className="fa fa-phone"></i>P: 3333 222 1111<br />F: 3333 222 1111</li>
                                    <li><i className="fa fa-map-marker"></i>{this.props.f_about.address}</li>
                                </ul>
                            </li>
                            <li className="col-md-3 col-sm-4">
                                <h3 className="title">Links hữu ích</h3>
                                <ul className="menu">
                                {
                                    this.props.f_useful.map((item,index)=>{
                                        return <li key={index}><a href={item.link}><i className="fa fa-angle-double-right"></i> {item.text}</a></li>
                                    })
                                }
                                </ul>
                            </li>
                            <li className="col-md-3 col-sm-4">
                                <h3 className="title">Dịch vụ khách hàng</h3>
                                <ul className="menu">
                                    {
                                    this.props.f_service.map((item,index)=>{
                                        return <li key={index}><a href={item.link}><i className="fa fa-angle-double-right"></i> {item.text}</a></li>
                                    })
                                }
                                </ul>
                            </li>
                            <li className="col-md-3 col-sm-4">
                                <h3 className="title">Liên hệ nhanh</h3>
                                <form action="" className="contact-form">
                                    <input type="text" name="" className="input-form" id="" placeholder="Name"/>
                                    <input type="email" name="" className="input-form" id="" placeholder="Email Address"/>
                                    <input type="text" name="" className="input-form" id="" placeholder="Subject"/>
                                    <textarea className="input-form" placeholder="Message"></textarea>
                                    <input type="submit" name="" className="button-form" id="" value="GỬI"/>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="copyright text-center">
                    <div className="container">&copy; 2015 <Link to="/">TOMORROW9</Link>. ALL RIGHT RESERVED .</div>
                </div>
            </footer>
        )
    }
}
export default Footer;