import React from "react";

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.getDatabase = this.getDatabase.bind(this);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        this.getDatabase();
    }
    getDatabase(){
        fetch('/database/' + this.props.match.params.link + '.json').then((res) => {
            console.log(res)
            return res.json()
        }).then((resj) => {
            console.log(resj)
            this.setState({
                data: resj
            })
        }).catch((err) => {
            this.setState({
                data: [{
                    error: 'Error 404: Page not found'
                }]
            })
        });
    }
    render(){
        return(
            <div className="container">
                {(this.state.data.length) ?
                ((this.state.data[0].error !== undefined) ? 
                <div>{this.state.data[0].error}</div>
                :
                <div className="ossvn-block padding-top-small">
                    <div className="row product">
                        <div className="col-md-5">
                            <div className="images">
                                <img src={"/"+this.state.data[0].img} alt="" className="wp-post-image"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="summary">
                                <h1 className="product_title">{this.state.data[0].title}</h1>
                                <div className="price">
                                    <del><span className="amount">{this.state.data[0].old_price} Đ</span></del>
                                    <ins><span className="amount">{this.state.data[0].new_price} Đ</span></ins>
                                </div>
                                <div className="short-desc">
                                    <p>{this.state.data[0].desc}</p>
                                </div>
                                <ul className="bonus-list">
                                    <li>Miễn phí giao hàng từ <strong>449,000đ</strong><span className="bonus-badge">Miễn phí</span></li>
                                    <li>Miễn phí trả hàng<span className="bonus-badge">Miễn phí</span></li>
                                    <li>Thanh toán khi nhận hàng<span className="bonus-badge">Miễn phí</span></li>
                                </ul>
                                <p className="bonus-note">Mua sản phẩm để được tặng <strong>GIFT COUPON</strong></p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
                                    <div className="boxer">
                                         <div className="single_variation_wrap">
                                            <div className="single_variation"><span className="price"><span className="amount">300,000&nbsp;₫</span></span></div>
                                            <div className="variations_button">
                                                <div className="quantity"><input type="number" step="1" name="quantity" defaultValue="1" title="Qty" className="input-text qty text" size="4" data-min="1"/></div>
                                                <span  className="single_add_to_cart_button button alt" onClick={()=>{
                                                    this.props.addtocart(this.state.data[0]);
                                                }}>Mua ngay</span>
                                            </div>
                                        </div>
                                        <ul className="icon-social">
                                            <li><a href="/" className="fa fa-facebook"></a></li>
                                            <li><a href="/" className="fa fa-twitter"></a></li>
                                            <li><a href="/" className="fa fa-google-plus"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                             <div className="tab-single tab-plugin">
                                <ul className="tab-controls">
                                    <li><a className="tab-control tab-active" href="/">Chi tiết</a></li>
                                </ul>
                                <ul className="tab-contents">
                                    <li className="tab-content tab-active">
                                        <div className="text-content">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ):
                <div>Loading</div>}
            </div>
        )
    }
}
export default Detail