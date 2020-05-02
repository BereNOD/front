import './header.scss';

class header extends React.Component {
  render() {
    return (
   <div className="Cart">
     <img src={cart_icon}/>
     <a href="#" style={{ color: '#68D6F4' }} className="Cart_link">Корзина</a>
   </div>

)
}
}
