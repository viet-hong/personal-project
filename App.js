import React from 'react';
import './assets/styles/reset.css';
import './assets/styles/awesome.css';
import './assets/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import Header from './header.js';
import Cart from './cart.js';
import Checkout from './checkout-1';
import Footer from './footer.js';
import Cat from './cat';
import Detail from './detail';
import Checkout2 from './checkout-2';
import { BrowserRouter as Router, Route } from "react-router-dom";


let data = {
	cat_icon:[
		{
			cat_txt: "ao_so_mi",
			icon: "somi",
			text: "Áo sơ mi"
		},
		{
			cat_txt: "ao_thun",
			icon: "thun",
			text: "Áo thun"
		},
		{
			cat_txt: "ao_khoac",
			icon: "khoac",
			text: "Áo khoác"
		},
		{
			cat_txt: "jean",
			icon: "jean",
			text: "Quần jean"
		},
		{
			cat_txt: "quan_short",
			icon: "short",
			text: "Quần short"
		},
		{
			cat_txt: "quan_tay",
			icon: "tay",
			text: "Quần tây"
		},
		{
			cat_txt: "vay",
			icon: "vay",
			text: "Váy đầm"
		},
		{
			cat_txt: "phu_kien",
			icon: "croptop",
			text: "Phụ kiện"
		},
	],
	cat:[
		{
			link: "sp1",
			category:"phu_kien",
			img: "assets/images/product-img-1.jpg",
			title: "Mũ da giữ ấm hai lớp",
			old_price: 450000,
			new_price:350000
		},
		{
			link: "sp2",
			category:"phu_kien",
			img: "assets/images/product-img-2.jpg",
			title: "Vòng cổ vintage",
			old_price: 1500000,
			new_price:1050000
		},
		{
			link: "sp3",
			category:"ao_thun",
			img: "assets/images/product-img-3.jpg",
			title: "Áo thun Nữ",
			old_price: 450000,
			new_price:350000
		},
		{
			link: "sp4",
			category: "jean",
			img: "assets/images/jean-2.jpg",
			title: "Quần Jean nữ",
			old_price: 3950000,
			new_price:3500000
		},
		{
			link: "sp5",
			category: "vay",
			img: "assets/images/product-img-5.jpg",
			title: "Leather Dress",
			old_price: 4050000,
			new_price:3950000
		},
		{
			link: "sp6",
			category: "phu_kien",
			img: "assets/images/product-img-6.jpg",
			title: "Leather Bag",
			old_price: 4500000,
			new_price:3350000
		},
		{
			link: "sp7",
			category: "vay",
			img: "assets/images/skirt-2.jpg",
			title: "Skirt Suit",
			old_price: 4500000,
			new_price:3850000
		},
		{
			link: "sp8",
			category: "ao_khoac",
			img: "assets/images/product-img-8.jpg",
			title: "Coat",
			old_price: 5450000,
			new_price:5350000
		},
		{
			link: "sp9",
			category: "ao_so_mi",
			img: "assets/images/shirt-1.jpg",
			title: "Sadie Sink long sleeve T-shirt",
			old_price: 499000,
			new_price:299000
		},
		{
			link: "sp10",
			category: "ao_so_mi",
			img: "assets/images/shirt-2.jpg",
			title: "High neck ribbed shirt",
			old_price: 399000,
			new_price:299000
		},
		{
			link: "sp11",
			category: "ao_thun",
			img: "assets/images/hoodie-1.jpg",
			title: "Essential Hoodie",
			old_price: 750000,
			new_price:460000
		},
		{
			link: "sp12",
			category: "phu_kien",
			img: "assets/images/wallet-1.jpg",
			title: "Nylon coin purse",
			old_price: 450000,
			new_price:299000
		},
		{
			link: "sp13",
			category: "jean",
			img: "assets/images/jean-1.jpg",
			title: "Quần Jean Nam",
			old_price: 1099000,
			new_price:949000
		},
		{
			link: "sp14",
			category: "so_mi",
			img: "assets/images/so-mi.jpg",
			title: "Áo sơ mi nữ",
			old_price: 369000,
			new_price:319000
		},
		{
			link: "sp15",
			category: "phu_kien",
			img: "assets/images/hat-1.jpg",
			title: "Black cap with Snoopy embroidery",
			old_price: 799000,
			new_price:599000
		},
		{
			link: "sp16",
			category: "vay",
			img: "assets/images/skirt-4.jpg",
			title: "Chanel Knit Skirt",
			old_price: 2399000,
			new_price:1899000
		},
		{
			link: "sp17",
			category: "ao_thun",
			img: "assets/images/shirt-3.jpg",
			title: "Striped T-shirt",
			old_price: 799000,
			new_price:599000
		},
		{
			link: "sp18",
			category: "ao_thun",
			img: "assets/images/shirt-4.jpg",
			title: "Rolling Stones tie-dye T-shirt",
			old_price: 799000,
			new_price:599000
		},
		{
			link: "sp19",
			category: "quan_short",
			img: "assets/images/shirt-5.jpg",
			title: "Basic plush shorts",
			old_price: 599000,
			new_price:299000
		},
		{
			link: "sp20",
			category: "quan_tay",
			img: "assets/images/trouser-1.jpg",
			title: "Beige cargo trousers",
			old_price: 999000,
			new_price:699000
		},
	],
	footer:{
		social: [
			{
				link: "#",
				icon : "fa fa-twitter"
			},
			{
				link: "#",
				icon : "fa fa-facebook-square"
			},
			{
				link: "#",
				icon : "fa fa-skype"
			},
			{
				link: "#",
				icon : "fa fa-pinterest-square"
			},
			{
				link: "#",
				icon : "fa fa-google-plus-square"
			},
			{
				link: "#",
				icon : "fa fa-youtube-play"
			},
			{
				link: "#",
				icon : "fa fa-instagram"
			},
		],
		about: {
			email: "hello@yourdomain.com",
			phone: "3333 222 1111",
			address: "99 Lê Duẩn, Quận 1, TPHCM"
		},
		useful_link: [
			{
				link: "#",
				text: "Giỏ hàng"
			},
			{
				link: "#",
				text: "Yêu thích"
			},
			{
				link: "#",
				text: "Tài khoản"
			},
			{
				link: "#",
				text: "Chính sách dịch vụ"
			},
			{
				link: "#",
				text: "Bảo mât"
			},
			{
				link: "#",
				text: "Liên hệ"
			},
		],
		service:[
			{
				link: "#",
				text: "Dịch vụ khách hàng"
			},
			{
				link: "#",
				text: "Hỗ trợ"
			},
			{
				link: "#",
				text: "Vận chuyển"
			},
			{
				link: "#",
				text: "Phí"
			},
			{
				link: "#",
				text: "Chính sách đổi trả"
			},
			{
				link: "#",
				text: "Đặt hàng"
			},
		]
	},
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			cart : [],
			total : ""
		}
		this.addToCart = this.addToCart.bind(this);
		this.removeCart = this.removeCart.bind(this);
	}
	addToCart(item){
		let oldstate = this.state.cart;
		let check =true;
		let current_pay;
		if(oldstate.length){
			oldstate.forEach((i)=>{
				if(i.link === item.link) {
					i.quantity++;
					check = false
				}
			})
			oldstate.forEach((item)=>{
				current_pay =+ (item.new_price*item.quantity)
			})
		}
		if(check){
			item.quantity =1;
			oldstate.push(item);
			oldstate.forEach((item)=>{
				current_pay =+ (item.new_price*item.quantity)
			})
		}
		this.setState({
			cart : oldstate,
			total : current_pay
		})
	}
	removeCart(item){
		this.setState({
			cart : this.state.cart.filter((i) => (i.link !== item.link)),
		})
	}

	render(){
		return (
			<div id="wrapper">
			<Router>
			 <Header />
			  <div className="main">
					<Route exact path="/" component={() => <Cat addtocart={this.addToCart} cat_data={data.cat} cat_icon={data.cat_icon} />} />
					<Route path="/cart" component={() => <Cart cart_data={this.state.cart} removecart={this.removeCart} total={this.state.total} />} />
					<Route path="/checkout-1" component={() => <Checkout cart_data={this.state.cart} total={this.state.total} />} />
					<Route path="/checkout-2" component={() => <Checkout2 cart_data={this.state.cart} total={this.state.total} />} />
					<Route path="/detail/:link" component={(e)=> <Detail match={e.match} addtocart={this.addToCart} total={this.state.total} />} />
			  </div>
			  <Footer footer={data.footer} f_social={data.footer.social} f_about={data.footer.about} 
			  f_useful={data.footer.useful_link} f_service={data.footer.service}/>
			  </Router>
			</div>
		  );
	}
  
}

export default App;
