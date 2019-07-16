import React from 'react';
import { Link } from "react-router-dom";
class Cat extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			content : this.props.cat_data,
			cat_content : this.props.cat_icon,
			cat_filter : ''
		}
		this.filter = this.filter.bind(this);
	}
	filter(dt){
		let range = this.refs.select.value.split("-");
		let	new_content;
		//Filters
		//Filter Price
		if(range.length >1){
			range = range.map((item)=> parseInt(item,10));
			new_content = this.props.cat_data.filter((item)=>(item.new_price >= range[0])&&(item.new_price <=range[1]))
		}else{
			new_content = this.props.cat_data;	
		}
		//Filter Cat
		if (typeof dt === 'undefined') dt = this.state.cat_filter;
		if (dt !== '') new_content = new_content.filter((item)=>item.category===dt);
		//Show
		this.setState({
			content : new_content,
			cat_filter: dt
		})
	}
	
	
    render(){
        return(
           <div>
				<div className="page-title">
					<img src="assets/images/bg_cat.jpg" alt="" className="background"/>
					<h1>Danh mục sản phẩm</h1>
				</div>
				<div className="category-list">
					<div className="container">
						<ul>
							<li className="current" onClick={()=>this.filter('')}>
								<div className="inside">
									<span className="icon">
										<img className="front" src="assets/images/icon-tatca.png" alt="" />
										<img className="back" src="assets/images/icon-tatca-hover.png" alt="" />
									</span>
									<span className="title">Tất cả</span>
								</div>
							</li>
							{
								this.props.cat_icon.map((item,index)=>{
									return <li key={index} onClick={() => {this.filter(item.cat_txt)}} >
										<div className="inside">
											<span className="icon">
												<img className="front" src={"assets/images/icon-"+ item.icon +".png"} alt="" />
												<img className="back" src={"assets/images/icon-"+item.icon+"-hover.png"} alt="" />
											</span>
											<span className="title">{item.text}</span>
										</div>
									</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="filter after-clear">
						<div className="right">
							<span className="label-order">Sắp xếp theo:</span>
							<select className="custom-heapbox" ref="select" onChange={() => {this.filter()}}>
								<option value="*">Giá</option>
								<option value="100000-500000">100,000 VNĐ - 500,000 VNĐ</option>
								<option value="500000-2000000">500,000 VNĐ - 2,000,000 VNĐ</option>
								<option value="2000000-10000000">2,000,000 VNĐ - 10,000,000 VNĐ</option>
							</select>
						</div>
					</div>
					<div className="ossvn-block padding-top-small text-center">
						<ul className="row row-ossvn text-left product-cats">
							{
								this.state.content.map((item,index) => {
									return <li key={index} className="col-md-3 col-sm-4 col-xs-6 col-12-1 col-ossvn">
										<div className="product-item-shop text-center">
											<Link to={'/detail/' + item.link}>
												<span className="hover"><img src={item.img} alt=""/></span>
												<h3>{item.title}</h3>
												<span className="price"><ins><span className="amount">{item.new_price} Đ</span></ins><del><span className="amount">{item.old_price} Đ</span></del></span>
											</Link>
											<div className="overlay">
												<span className="option-link" onClick={()=>{
													this.props.addtocart(item);
												}}>Add to Cart</span>
												<Link to={'/detail/' + item.link} className="add_to_cart_button center-h">Xem sản phẩm</Link>
											</div>
										</div>
									</li>
								})
							}
						</ul>
					</div>
					
				</div>
			</div>
        )
    }
}
export default Cat